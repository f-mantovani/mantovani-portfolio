import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthProviderWrapper } from './context/AuthContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviderWrapper>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </AuthProviderWrapper>
  </React.StrictMode>,
)
