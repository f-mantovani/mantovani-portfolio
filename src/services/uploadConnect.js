import Connection from '../lib/axiosAbstraction'

const apiConnect = new Connection(`${import.meta.env.VITE_DB_URL}/upload`)

class ProjectService {
	sendImage(file) {
		const imgData = new FormData()
		imgData.append('image', file)
		return apiConnect.post('/', imgData)
	}
}

export default new ProjectService()
