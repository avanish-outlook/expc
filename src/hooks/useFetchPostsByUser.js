import { useDispatch, useSelector } from 'react-redux';
import { FeedSliceSelectors } from '../redux/slice/FeedSlice';
import { FetchPostListByUserIdAsync } from '../redux/middleware/ProfileMiddleware';
import { ProfileSliceActions, ProfileSliceSelectors } from '../redux/slice/ProfileSlice';

const useFetchPostsByUser = () => {
    const dispatch = useDispatch()
    const postList = useSelector(ProfileSliceSelectors.selectPostsByUserId);
    function fetchPostList(profileId, pageNum) {
        return dispatch(FetchPostListByUserIdAsync({ profileId, page: pageNum }))
    }

    const reset = () => {
        dispatch(ProfileSliceActions.resetPostsByUserId())
    }
    return { postList, fetchPostList, reset }
}

export default useFetchPostsByUser