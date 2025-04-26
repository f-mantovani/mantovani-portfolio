import { useQuery } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/NavBar/Navbar";
import Project from "./services/projectsConnect";
import Projects from "./components/Projects/AllProjects/Projects";
import SingleProject from "./components/Projects/SingleProject/SingleProject";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import ContactPage from "./components/ContactPage/ContactPage";
import AdminLogin from "./components/Admin/AdminLogin";
import IsPrivate from "./components/IsPrivate";
import Dashboard from "./components/Dashboard/Dashboard";
import EditProject from "./components/Projects/EditProject/EditProject";
import paths from "./utils/path.js";
import Footer from "./components/Footer/Footer";
import HomeMock from "./components/HomeMock/HomeMock";
import NavBarLinks from "./components/NavBarLinks/NavBarLinks.jsx";
import CloseIcon from "./components/Icons/CloseIcon.jsx";

import projectsInitial from "../projects_data.js";

import "./App.scss";

const highlightProjects = (projectsArray) =>
  projectsArray.filter((project) => project.isHighlight);

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const { data, isLoading, error } = useQuery({
    queryKey: ["projects"],
    queryFn: Project.getProjects,
    initialData: projectsInitial,
  });

  if (isLoading) return <HomeMock status="Loading..." />;

  if (error)
    return <HomeMock status="Something went wrong fetching the projects" />;

  const highlight = highlightProjects(data);

  return (
    <div className="App">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <>
          <div className="closeable" onClick={() => setIsOpen(false)}></div>
          <div className="sidebar">
            <CloseIcon onClick={() => setIsOpen(!isOpen)} />
            <NavBarLinks setIsOpen={setIsOpen} />
          </div>
        </>
      )}
      <div style={{ width: "80%" }}>
        <Routes>
          <Route path={paths.home} element={<Home projects={highlight} />} />

          <Route path={paths.projects} element={<Projects projects={data} />} />

          <Route
            path={paths.projectId}
            element={<SingleProject projects={data} />}
          />

          <Route path={paths.about} element={<About />} />

          <Route path={paths.contact} element={<ContactPage />} />

          <Route path={paths.admin} element={<AdminLogin />} />

          <Route path="/private" element={<IsPrivate />}>
            <Route path="dashboard" element={<Dashboard projects={data} />} />
            <Route
              path=":projectId"
              element={<EditProject projects={data} />}
            />
            <Route path="add" element={<EditProject />} />
          </Route>

          <Route path="*" element={<Home projects={highlight} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
