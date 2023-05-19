import ApiConstants from "../../constants/ApiConstants"
import { axiosPrivateInstance } from "../../utils/axiosConfig"
import config from "../../utils/config"

export const CreatePostApi = (data) => {
    return axiosPrivateInstance.post("/post/create", data, {
        headers: {
            'Content-Type': `multipart/form-data`
        }
    })
}


export const LikeUnlikePostApi = (data) => {
    return axiosPrivateInstance.post("/post/addRemoveLike", data)
}

export const AddCommentToPostApi = (data) => {
    return axiosPrivateInstance.post("/post/addComment", data)
}

export const FetchPostCommentListApi = ({ postId, page }) => {
    return axiosPrivateInstance.get(ApiConstants.POST_FETCH_POST_COMMENTS + `?page=${page}&postId=${postId}`)
}