import Connection from "../lib/axiosAbstraction";

const apiConnect = new Connection(`${import.meta.env.VITE_DB_URL}/auth`);

class UserService {
  login(data) {
    return apiConnect.post("/login", data);
  }

  verify(data) {
    return apiConnect.get("/verify");
  }
}

export default new UserService();