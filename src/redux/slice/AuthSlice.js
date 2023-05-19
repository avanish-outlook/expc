import { createSlice } from '@reduxjs/toolkit';
import { AddCaseCallback } from '../../utils/helpers';
import { DataLoadingState, DataState } from '../constants/common';
import { LoginUserAsync, RegisterUserAsync } from '../middleware/AuthMiddleware';

const dataLoadingCases = ['pending', 'fulfilled', 'rejected']
const initialState = {
    loginUser: {
        isLoading: false,
        data: null,
        error: null,
        status: DataLoadingState.IDLE
    },
    registerUser: new DataState().setInitialState(),
    loggedInUser: null
};

export const AuthSlice = createSlice({
    name: 'Auth',
    initialState: initialState,
    reducers: {
    },
    reducers: {
        setLogin(state, action) {
            return { ...state, loggedInUser: action.payload }
        },
        resetRegisterUserState(state) {
            return { ...state, registerUser: new DataState().setInitialState() }
        }
    },
    extraReducers: (builder) => {

        dataLoadingCases.forEach((item) => {
            builder.addCase(LoginUserAsync[item], AddCaseCallback('loginUser', item));
            builder.addCase(RegisterUserAsync[item], AddCaseCallback('registerUser', item))
        })

        /*     builder.addCase(LoginUserAsync.pending, (state, action) => {
                 state.loginUser.isLoading = true;
                 state.loginUser.data = null;
                 state.loginUser.error = null;
                 state.loginUser.status = DataLoadingState.LOADING
             });
     
             builder.addCase(LoginUserAsync.fulfilled, (state, action) => {
                 state.loginUser.isLoading = false;
                 state.loginUser.data = action.payload;
                 state.loginUser.error = null;
                 state.loginUser.status = DataLoadingState.SUCCEED
             });
     
             builder.addCase(LoginUserAsync.rejected, (state, action) => {
                 console.log('action', action)
                 state.loginUser.isLoading = false;
                 state.loginUser.data = null;
                 state.loginUser.error = action.payload;
                 state.loginUser.status = DataLoadingState.FAILED
             });
             builder.addCase(LoginUserAsync.fulfilled, AddCaseCallback('loginUser', 'fulfilled'));
             builder.addCase(LoginUserAsync.rejected, AddCaseCallback('loginUser', 'rejected'));
     */
    },
});



export const AuthSliceActions = AuthSlice.actions;

export const AuthSliceSelectors = {
    selectUserInfo: (state) => state.Auth.loggedInUser,
    selectRegisterUserInfo: (state) => state.Auth.registerUser
}


export default AuthSlice.reducer;
