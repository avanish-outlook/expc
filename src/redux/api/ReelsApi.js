import { axiosPrivateInstance } from "../../utils/axiosConfig"
import config from "../../utils/config"

export const CreateReelsApi = (data) => {
    return axiosPrivateInstance.post("/reels/create", data, {
        headers: {
            'Content-Type': `multipart/form-data`
        }
    })
}