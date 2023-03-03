import Connection from "../lib/axiosAbstraction";

const apiConnect = new Connection(`${import.meta.env.VITE_DB_URL}/projects`);
class ProjectService {
  getProjects() {
    return apiConnect.get("/");
  }
}

export default new ProjectService();