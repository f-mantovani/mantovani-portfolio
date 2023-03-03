import './App.scss'
import { useAuthValue } from './context/AuthContext'
import User from './services/authConnect'

function App() {

  return (
    <div className="App">
      <div>
        <button onClick={login}> Click for login </button>
      </div>
       
    </div>
  )
}

export default App
