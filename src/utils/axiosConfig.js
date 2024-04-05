import axios from "axios"

const BASE_URL = `${import.meta.env.VITE_APP_BAKREE_API_URL}/api/`


const Axios = axios.create({
    baseURL: BASE_URL,
    // withCredentials: true,
});

// Axios.defaults.headers.common["Content-Type"] = "application/json"

Axios.interceptors.response.use(
    response => {
        // handle success
        return response;
    },
    error => {
        // handle error
        if (error.response.status === 401 || error.response.status == 403 ) {
            // network error
            console.log("error", error);
            window.localStorage.removeItem("persist:root");
            window.localStorage.removeItem("user");
            window.location.href = "/";
            
        } else {
            // localStorage.removeItem("user")
            console.log(error.response, " error.response");
        }

        return Promise.reject(error);
    }
);

export default Axios;
