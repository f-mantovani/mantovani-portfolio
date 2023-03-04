import { useQuery, useQueryClient } from '@tanstack/react-query'
import './App.scss'
import Project from './services/projectsConnect'
import ProjectCard from './components/ProjectCard/ProjectCard'
import Navbar from './components/NavBar/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {
	const queryClient = useQueryClient()

	const { data, isLoading, error } = useQuery({
		queryKey: ['projects'],
		queryFn: Project.getProjects,
	})

	if (isLoading) return 'Loading...'

	if (error) return 'some error just to check...'

	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route
					path='/'
					element={data?.map(project => (
						<ProjectCard key={project._id} {...project} />
					))}
				/>
			</Routes>
			<div></div>
		</div>
	)
}

export default App
