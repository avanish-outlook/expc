import { useDispatch, useSelector } from 'react-redux'
import { PostsSliceSelectors } from '../redux/slice/PostsSlice'
import { FetchPostCommentListAsync } from '../redux/middleware/PostsMiddleware'

const useFetchPostComments = () => {
    const postCommentsListState = useSelector(PostsSliceSelectors.selectPostCommentListState);
    const dispatch = useDispatch();
    const fetchComments = (postId, page) => {
        return dispatch(FetchPostCommentListAsync({ postId, page }))
    }

    return { postCommentsListState, fetchComments }
}

export default useFetchPostComments