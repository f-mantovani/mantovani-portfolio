import { useParams } from 'react-router-dom'
import './SingleProject.scss'


const SingleProject = ({ projects }) => {
  const { id } = useParams()
  const project = projects.find(project => project._id === id)

  return (
    <div>
      <h3>{project.title}</h3>
    </div>
  )
}

export default SingleProject