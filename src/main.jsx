import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthProviderWrapper } from './context/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviderWrapper>
      <App />
    </AuthProviderWrapper>
  </React.StrictMode>,
)
