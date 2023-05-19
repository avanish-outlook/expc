import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CreateReelsApi } from '../api/ReelsApi';

export const CreateReelsAsync = createAsyncThunk('Reels/create', async (data, { rejectWithValue }) => {

    try {
        const result = await CreateReelsApi(data);
        return result.data;
    } catch (error) {
        console.log('aniket', error.response.data)
        return rejectWithValue({ status: error.response.status, data: error.response.data })
    }

})

