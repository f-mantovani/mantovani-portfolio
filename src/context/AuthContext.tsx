import { createContext, useReducer, useContext } from 'react'
import { LOGIN_ACTIONS, initialLoginState, reducer } from './loginReducer'
import { IAction, ILogin } from './loginInterface'

const AuthContext = createContext(null)

const AuthProviderWrapper = ({ children }: { children: JSX.Element }) => {
  const [{user, isLoading, isLoggedIn}, dispatch] = useReducer<(args1: ILogin, actions: IAction) => ILogin>(reducer, initialLoginState)


  const storeToken = (token: string) =>localStorage.setItem('token', token)

  const authenticateUser = () => {
    const storedToken = localStorage.getItem('token')
    if (!storedToken) {
      dispatch({ type: LOGIN_ACTIONS.LOGIN, payload: null })

    }
  }

	return (
		<AuthContext.Provider value={}>
			{children}
		</AuthContext.Provider>
	)
}

const useLoginState = () => {useContext(AuthContext)}

export { AuthProviderWrapper, AuthContext, useLoginState }
