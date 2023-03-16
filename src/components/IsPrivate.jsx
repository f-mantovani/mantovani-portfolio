import { Navigate } from "react-router-dom"
import { useAuthValue } from "../context/AuthContext"

const IsPrivate = ({ children }) => {
  const { isLoading, isLoggedIn } = useAuthValue() 
  
  if (isLoading) return <p>Loading...</p>

  return isLoggedIn ? children : <Navigate to='/' />
}

export default IsPrivate