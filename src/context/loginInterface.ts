export interface ILogin {
  user: null | {
    username: string,
    email: string
  },
  isLoading: boolean,
  isLoggedIn: boolean,
}

export type IAction = 
  { type: 'loading' | 'logged_in', payload: boolean } |
  { type: 'login' | 'verify', payload: null | { username: string, email: string }} 

