export const LOGIN_ACTIONS = {
	LOGIN_FAIL: 'login-fail',
	LOGIN_SUCESS: 'login-sucess',
	REMOVE: 'remove',
	ATTEMPT: 'attempt'
}

export const initialLoginState = {
	user: null,
	isLoading: false,
	isLoggedIn: false,
}

function reducer(state, action){
	const { type, payload } = action

	switch (type) {
		case LOGIN_ACTIONS.ATTEMPT:
			return {
				user: null,
				isLoading: true,
				isLoggedIn: false
			}
		case LOGIN_ACTIONS.LOGIN_SUCESS:
			return {
				user: payload,
				isLoading: false,
        isLoggedIn: true,
			}
		case LOGIN_ACTIONS.LOGIN_FAIL:
			return {
				user: payload,
				isLoading: false,
        isLoggedIn: false,
			}
		case LOGIN_ACTIONS.REMOVE:
			return {
				user: null,
        isLoading: false,
        isLoggedIn: false,
			}
		default:
			return state
	}
}

export { reducer }
