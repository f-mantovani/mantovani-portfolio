import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthProviderWrapper } from './context/AuthContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProviderWrapper>
			<BrowserRouter>
				<QueryClientProvider client={queryClient}>
					<App />
				</QueryClientProvider>
			</BrowserRouter>
		</AuthProviderWrapper>
	</React.StrictMode>
)
