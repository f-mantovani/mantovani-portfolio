import { useReducer } from 'react'
import { IAction, ILogin } from './loginInterface'

export const LOGIN_ACTIONS = {
	LOGIN: 'login',
	VERIFY: 'verify',
	LOADING: 'loading',
	LOGGED_IN: 'logged_in',
}

export const initialLoginState = {
	user: null,
	isLoading: false,
	isLoggedIn: false,
}

function reducer(state: ILogin, action: IAction): ILogin {
	const { type, payload } = action

	switch (type) {
		case LOGIN_ACTIONS.LOGIN:
			return {
				...state,
				user: payload,
			}
		case LOGIN_ACTIONS.VERIFY:
			return {
				...state,
				user: payload,
			}
		case LOGIN_ACTIONS.LOADING:
			return {
				...state,
				isLoading: payload,
			}
		case LOGIN_ACTIONS.LOGGED_IN:
			return {
				...state,
				isLoggedIn: payload,
			}
		default:
			return state
	}
}

export { reducer }
