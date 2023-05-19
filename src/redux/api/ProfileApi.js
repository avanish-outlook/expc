import ApiConstants from "../../constants/ApiConstants"
import { axiosPrivateInstance } from "../../utils/axiosConfig"
import config from "../../utils/config"

export const getProfileInfoApi = (profileId) => {
    return axiosPrivateInstance.get("/user/profile/" + profileId)
}


export const getPostsByProfileIdApi = (profileId, page) => {
    return axiosPrivateInstance.get("/user/postList/" + profileId + '?page=' + page)
}


export const getUserProfileApi = (profileId) => {
    return axiosPrivateInstance.get(ApiConstants.GET__USER_PROFILE + profileId)
}

export const UploadProfilePicApi = (data) => {
    console.log('data 2', { data })
    return axiosPrivateInstance.post(ApiConstants.POST__USER_PROFILE_PIC, data, {
        headers: {
            'Content-Type': `multipart/form-data`
        }
    })
}