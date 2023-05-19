import axios from "axios";
import AsyncStorage, { AsyncStorageConstant } from "../providers/AsyncStorage";
import config from "./config";
import store from '../redux/store'
import { AuthSliceActions } from "../redux/slice/AuthSlice";
const BASE_URL = config.API_BASE_URL;

const state = store.getState();
const { dispatch } = store;

export const axiosInstance = axios.create({
    baseURL: config.API_BASE_URL,
    timeout: 10000
})

export const axiosPrivateInstance = axios.create({
    baseURL: config.API_BASE_URL,

})

axiosPrivateInstance.interceptors.request.use(async function (config) {
    const token = await getToken();
    if (token) {
        config.headers.Authorization = 'Bearer ' + token.accessToken;
    }
    return config;
});


axiosPrivateInstance.interceptors.response.use(response => response, async error => {
    const { response, config } = error
    if (response.status === 417) {
        console.log("=>Refresh token also expired..", response.status)
        await AsyncStorage.clear();
        return Promise.reject(error)
    }

    // Use a 'clean' instance of axios without the interceptor to refresh the token. No more infinite refresh loop.
    if (response.status === 403) {
        try {
            const savedToken = await getToken();
            const resp = await axios.post(BASE_URL + '/auth/refresh-token', { refreshToken: savedToken.refreshToken });
            if (resp.status === 200) {
                config.headers['Authorization'] = 'Bearer ' + resp.data.payload.accessToken;
                await AsyncStorage.storeObject(AsyncStorageConstant.AUTH, resp.data.payload)
                dispatch(AuthSliceActions.setLogin(resp.data.payload))
                return await axiosPrivateInstance(config);
            }

        } catch (err) {
            await AsyncStorage.clear()
            dispatch(AuthSliceActions.setLogin(null))
            return await Promise.reject(err);
        }
    }

    //   return await axiosPrivateInstance(config);

})


async function getToken() {
    const auth = await AsyncStorage.getObject(AsyncStorageConstant.AUTH)
    return auth;
}