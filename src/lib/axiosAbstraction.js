import axios from 'axios'

class Connection {
	constructor(url) {
		this.api = axios.create({
			baseURL: url,
		})

		this.api.interceptors.request.use(
			(config) => {
				const token = localStorage.getItem('token')
				if (token) {
					config.headers.Authorization = `Bearer ${token}`
				}
				return config
			},
			(error) => {
				const errorInfo = {
					message: error.response.data.message,
					status: error.response.status,
				}
				const promise = Promise.reject(error)
				throw { errorInfo, promise }
			}
		)

		this.api.interceptors.response.use(
			(response) => {
				const { data } = response

				return data
			},
			(error) => {
				const errorInfo = {
					message: error.response.data.message,
					status: error.response.status,
				}
				const promise = Promise.reject(error)
				throw { errorInfo, promise }
			}
		)
	}

	async get(path) {
		return this.api.get(path)
	}

	async post(path, obj) {
		return this.api.post(path, obj)
	}

	async put(path, obj) {
		return this.api.put(path, obj)
	}

	async delete(path) {
		return this.api.delete(path)
	}
}

export default Connection
