import axios from 'axios';
import ApiConstant from './ApiConstants';



export const axiosInstance = axios.create({
    baseURL: ApiConstant.BASE_URL
})



