import { createContext, useReducer, useContext } from 'react'
import { LOGIN_ACTIONS, initialLoginState, reducer } from './loginReducer'
import User from '../services/authConnect'

const AuthContext = createContext(null)

const AuthProviderWrapper = ({ children }) => {
	const [{ user, isLoading, isLoggedIn }, dispatch] = useReducer(reducer, initialLoginState)

	const storeToken = token => localStorage.setItem('token', token)

	const authenticateUser = async () => {
		const storedToken = localStorage.getItem('token')
		if (!storedToken) {
			dispatch({ type: LOGIN_ACTIONS.REMOVE })
		}

		try {
			const user = await User.verify()
			dispatch({ type: LOGIN_ACTIONS.LOGIN_SUCESS, payload: user })
		} catch (error) {
			dispatch({ type: LOGIN_ACTIONS.LOGIN_FAIL })
		}
	}

	const removeToken = () => {
		localStorage.removeItem('token')
	}

	const logoutUser = () => {
		removeToken()
		authenticateUser()
	}

	return (
		<AuthContext.Provider
			value={{ user, isLoading, isLoggedIn, authenticateUser, storeToken, logoutUser }}
		>
			{children}
		</AuthContext.Provider>
	)
}

const useAuthValue = () => useContext(AuthContext)

export { AuthProviderWrapper, AuthContext, useAuthValue }
