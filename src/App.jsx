import { useQuery, useQueryClient } from '@tanstack/react-query'
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

const highlightProjects = (projectsArray) => projectsArray.filter(project => project.isHighlight)

function App() {
	const queryClient = useQueryClient()

	const { data, isLoading, error } = useQuery({
		queryKey: ['projects'],
		queryFn: Project.getProjects,
	})
	
	
	if (isLoading) return 'Loading...'

	
	if (error) return 'some error just to check...'
	
	const highlight = highlightProjects(data)
	
	return (
		<div className='App'>
			<Navbar />
			<div className='app-body'>
				<Routes>
					<Route path='/' element={<Home projects={highlight} />} />

					<Route path='/projects' element={<Projects projects={data} />}>
						<Route path='/projects/:id' element={<SingleProject projects={data} />} />
					</Route>

					<Route path='about' element={<About />} />

					<Route path='/contact' element={<Contact />} />

					<Route path='/admin' element={<AdminLogin />} />

					<Route path='*' element={<Home />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
