import { useQuery } from '@tanstack/react-query'
import './App.scss'
import Project from './services/projectsConnect'
import Projects from './components/Projects/AllProjects/Projects'
import SingleProject from './components/Projects/SingleProject/SingleProject'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import Navbar from './components/NavBar/Navbar'
import { Route, Routes } from 'react-router-dom'
import About from './components/About/About'
import AdminLogin from './components/Admin/AdminLogin'
import IsPrivate from './components/IsPrivate'
import Dashboard from './components/Dashboard/Dashboard'
import EditProject from './components/Projects/EditProject/EditProject'
import paths from './utils/path.js'
import Footer from './components/Footer/Footer'

const highlightProjects = projectsArray => projectsArray?.filter(project => project.isHighlight)

function App() {
	const { data, isLoading, error } = useQuery({
		queryKey: ['projects'],
		queryFn: Project.getProjects,
	})

	const highlight = highlightProjects(data)

	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path={paths.home} element={<Home projects={highlight} />} />

				<Route path={paths.projects} element={<Projects projects={data} />}>
					<Route path={paths.projectId} element={<SingleProject projects={data} />} />
				</Route>

				<Route path={paths.about} element={<About />} />

				<Route path={paths.contact} element={<Contact />} />

				<Route path={paths.admin} element={<AdminLogin />} />

				<Route path='/private' element={<IsPrivate />}>
					<Route path='dashboard' element={<Dashboard projects={data} />} />
					<Route path=':projectId' element={<EditProject projects={data} />} />
					<Route path='add' element={<EditProject />} />
				</Route>

				<Route path='*' element={<Home projects={highlight} />} />
			</Routes>
			<Footer />
		</div>
	)
}

export default App
