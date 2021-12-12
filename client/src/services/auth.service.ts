import axios from "axios";

const API_URL = "http://localhost:8090/api/auth/";

class AuthService {
  login(email: string, password: string) {
    return axios
      .post(API_URL + "login", {
        email,
        password
      })
      .then(response => {
        console.log(response.data)
        if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data))
        }
        
        return response;
    })
  }

  logout() {
    localStorage.removeItem("user")
  }

  register(userName: string, email: string, password: string) {
    return axios.post(API_URL + "register", {
      userName,
      email,
      password
    })
  }

  getCurrentUser() {
    const userStr = localStorage.getItem("user")
    if(userStr) return JSON.parse(userStr)
  }
}

export default new AuthService();