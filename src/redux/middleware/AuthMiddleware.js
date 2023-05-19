import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LoginUserApi, RegisterUserApi } from '../api/AuthApi';

export const LoginUserAsync = createAsyncThunk('Auth/login', async (data, { rejectWithValue }) => {

    try {
        const result = await LoginUserApi(data);
        return result.data;
    } catch (error) {
        //console.log('aniket', error.response.status)
        return rejectWithValue({ status: error.response.status, data: error.response.data })
    }

})


export const RegisterUserAsync = createAsyncThunk('Auth/register', async (data, { rejectWithValue }) => {

    try {
        const result = await RegisterUserApi(data);
        return result.data;
    } catch (error) {
        //console.log('aniket', error.response.status)
        return rejectWithValue({ status: error.response.status, data: error.response.data })
    }

})