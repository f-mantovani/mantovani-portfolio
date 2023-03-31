import { NavLink } from 'react-router-dom'

const Dashboard = ({ projects }) => {
	return (
		<>
			<NavLink to={`/private/add`}> Add a project </NavLink>

			{projects?.map(p => (
				<NavLink to={`/private/${p._id}`} key={p._id}> {p.title} </NavLink>
			))}
		</>
	)
}

export default Dashboard
