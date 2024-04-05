import Axios from "../utils/axiosConfig";

class AuthService {
    login(data){
        return Axios.post(`/auth/login`, data);
    }

    logout(){
        localStorage.clear();
    }

    register(data){
        return Axios.post(`/auth/register`, data);
    }
}

export default new AuthService();