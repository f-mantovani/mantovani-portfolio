import { useQuery, useQueryClient } from '@tanstack/react-query'
import './App.scss'
import { useAuthValue } from './context/AuthContext'
import Project from './services/projectsConnect'

function App() {
  const queryClient = useQueryClient()

  const query = useQuery({ queryKey: ['projects'], queryFn: Project.getProjects })

  console.log(query.data)
  return (
    <div className="App">
      <div>
        <button> Click for login </button>
      </div>      
    </div>
  )
}

export default App
