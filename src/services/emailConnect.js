import Connection from "../lib/axiosAbstraction";

const apiConnect = new Connection(`${import.meta.env.VITE_DB_URL}/email`);

class ProjectService {
  sendMail(mailInfo) {
    return apiConnect.post("/", mailInfo);
  }
}

export default new ProjectService();