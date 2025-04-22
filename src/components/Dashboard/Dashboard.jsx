import { NavLink } from "react-router-dom";

const Dashboard = ({ projects }) => {
  return (
    <>
      <NavLink to={`/private/add`}> Add a project </NavLink>
      <div
        style={{ display: "flex", flexDirection: "column", marginTop: "2rem" }}
      >
        {projects?.map((p) => (
          <NavLink to={`/private/${p._id}`} key={p._id}>
            {" "}
            {p.title}{" "}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
