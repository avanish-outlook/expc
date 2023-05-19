import { createSlice } from '@reduxjs/toolkit';
import { AddCaseCallback } from '../../utils/helpers';
import { DataLoadingState, DataState } from '../constants/common';
import { LoginUserAsync } from '../middleware/AuthMiddleware';
import { AddCommentToPostAsync, CreatePostAsync, FetchPostCommentListAsync, LikeUnlikePostAsync } from '../middleware/PostsMiddleware';



const dataLoadingCases = ['pending', 'fulfilled', 'rejected']
const initialState = {
    createPost: new DataState().setInitialState(),
    postLikeUnlike: new DataState().setInitialState(),
    addCommentState: new DataState().setInitialState(),
    postCommentListState: new DataState().setInitialState(),
};

export const PostsSlice = createSlice({
    name: 'Posts',
    initialState: initialState,
    reducers: {
    },

    extraReducers: (builder) => {
        dataLoadingCases.forEach((item) => {
            builder.addCase(CreatePostAsync[item], AddCaseCallback('createPost', item));
            builder.addCase(LikeUnlikePostAsync[item], AddCaseCallback('postLikeUnlike', item));
            builder.addCase(AddCommentToPostAsync[item], AddCaseCallback('addCommentState', item))
            builder.addCase(FetchPostCommentListAsync[item], AddCaseCallback('postCommentListState', item))

        })
    },
});



export const PostsSliceActions = PostsSlice.actions;

export const PostsSliceSelectors = {
    selectCreatePost: (state) => state.Posts.createPost,
    selectAddCommentState: (state) => state.Posts.addCommentState,
    selectPostCommentListState: (state) => state.Posts.postCommentListState,
}


export default PostsSlice.reducer;
