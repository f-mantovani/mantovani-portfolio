import { useParams } from 'react-router-dom'
import './SingleProject.scss'


const SingleProject = ({ projects }) => {
  const { id } = useParams()
  const project = projects.find(project => project._id === id)

  return (
    <div className='project-single'>
      <h3>{project.title}</h3>
      <p> {project.frontendLink} </p>
      <p> {project.backendLink} </p>
      <img src={project.image} alt={project.title} />
      <p>{project.description}</p>
    </div>
  )
}

export default SingleProject