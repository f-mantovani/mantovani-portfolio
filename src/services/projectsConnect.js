import Connection from "../lib/axiosAbstraction";

const apiConnect = new Connection(`${import.meta.env.VITE_DB_URL}/projects`);
class ProjectService {
  getProjects() {
    return apiConnect.get("/");
  }

  updateProject(info) {
    const { id, data } = info
    return apiConnect.put(`/${id}`, data)
  }

  createProject(info){
    return apiConnect.post('/', info)
  }
}

export default new ProjectService();