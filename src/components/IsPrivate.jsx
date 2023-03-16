import { Navigate, Outlet } from "react-router-dom"
import { useAuthValue } from "../context/AuthContext"

const IsPrivate = ({ children }) => {
  const { isLoading, isLoggedIn } = useAuthValue() 
  
  if (isLoading) return <p>Loading...</p>

  return isLoggedIn ? <Outlet />  : <Navigate to='/' />
}

export default IsPrivate