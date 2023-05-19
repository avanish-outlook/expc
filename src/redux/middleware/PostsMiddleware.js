import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AddCommentToPostApi, CreatePostApi, FetchPostCommentListApi, LikeUnlikePostApi } from '../api/PostsApi';

export const CreatePostAsync = createAsyncThunk('Posts/create', async (data, { rejectWithValue }) => {

    try {
        const result = await CreatePostApi(data);
        return result.data;
    } catch (error) {
        console.log('aniket', error.response.data)
        return rejectWithValue({ status: error.response.status, data: error.response.data })
    }

})

export const LikeUnlikePostAsync = createAsyncThunk('Posts/addRemoveLike', async (data, { rejectWithValue }) => {

    try {

        const result = await LikeUnlikePostApi(data);
        return result.data;
    } catch (error) {
        console.log('aniket', error.response.data)
        return rejectWithValue({ status: error.response.status, data: error.response.data })
    }

})

export const AddCommentToPostAsync = createAsyncThunk('Posts/addComment', async (data, { rejectWithValue }) => {

    try {

        const result = await AddCommentToPostApi(data);
        return result.data;
    } catch (error) {
        console.log('aniket', error.response.data)
        return rejectWithValue({ status: error.response.status, data: error.response.data })
    }

})



export const FetchPostCommentListAsync = createAsyncThunk('Posts/comments/list', async (data, { rejectWithValue }) => {

    try {

        const result = await FetchPostCommentListApi(data);
        return result.data;
    } catch (error) {
        console.log('aniket', error.response.data)
        return rejectWithValue({ status: error.response.status, data: error.response.data })
    }

})