import { axiosPrivateInstance } from "../../utils/axiosConfig"
import config from "../../utils/config"

export const FetchFeedPostApi = (pageNo) => {
    return axiosPrivateInstance.get("/feed?page=" + pageNo)
}

export const ReelsFeedPostApi = (pageNo) => {
    return axiosPrivateInstance.get("/reels?page=" + pageNo);

}