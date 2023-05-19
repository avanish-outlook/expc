import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPostsByProfileIdApi, getProfileInfoApi, getUserProfileApi, UploadProfilePicApi } from '../api/ProfileApi';

export const FetchProfileAsync = createAsyncThunk('Profile/info', async (profileId, { rejectWithValue }) => {
    try {
        const result = await getProfileInfoApi(profileId);
        return result.data;
    } catch (error) {
        return rejectWithValue({ status: error.response.status, data: error.response.data })
    }

})

export const FetchPostListByUserIdAsync = createAsyncThunk('Profile/postlist', async (data, { rejectWithValue }) => {
    try {
        const result = await getPostsByProfileIdApi(data.profileId, data.page);
        return result.data;
    } catch (error) {
        return rejectWithValue({ status: error.response.status, data: error.response.data })
    }

})





export const getUserProfileAsync = createAsyncThunk('Profile/userProfile', async (data, { rejectWithValue }) => {
    try {
        const result = await getUserProfileApi(data);
        return result.data;
    } catch (error) {
        return rejectWithValue({ status: error.response.status, data: error.response.data })
    }

})


export const UploadProfilePicAsync = createAsyncThunk('Profile/uploadprofile', async (data, { rejectWithValue }) => {
    try {
        const result = await UploadProfilePicApi(data);
        console.log({ result })
        return result.data;
    } catch (error) {
        console.log({ error })
        return rejectWithValue({ status: error.response.status, data: error.response.data })
    }

})