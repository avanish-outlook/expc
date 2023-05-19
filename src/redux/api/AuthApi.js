import { axiosInstance } from "../../utils/axiosConfig"
import config from "../../utils/config"

export const LoginUserApi = (data) => {
    return axiosInstance.post("/auth/login", data)
}

export const RegisterUserApi = (data) => {
    return axiosInstance.post("/auth/register", data)
}