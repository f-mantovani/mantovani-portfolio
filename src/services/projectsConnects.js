import Connection from "../lib/axiosAbstraction";

const apiConnect = new Connection(import.meta.env.VITE_DB_URL);

class ProjectService {
  getProjects() {
    return apiConnect.get("/projects");
  }
}

export default new ProjectService();