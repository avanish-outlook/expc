import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { FetchFeedPostApi, ReelsFeedPostApi } from '../api/FeedApi';
import { CreatePostApi } from '../api/PostsApi';

export const FetchFeedPostAsync = createAsyncThunk('Feed/posts', async (pageNo, { rejectWithValue }) => {

    try {

        const result = await FetchFeedPostApi(pageNo);
        return result.data;
    } catch (error) {
        return rejectWithValue({ status: error.response.status, data: error.response.data })
    }

})

export const ReelsFeedPostAsync = createAsyncThunk('Feed/reelsData', async (pageNo, { rejectWithValue }) => {

    try {

        const result = await ReelsFeedPostApi(pageNo);
        return result.data;
    } catch (error) {
        return rejectWithValue({ status: error.response.status, data: error.response.data })
    }

})