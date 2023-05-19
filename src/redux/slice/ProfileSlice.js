import { createSlice } from '@reduxjs/toolkit';
import { AddCaseCallback } from '../../utils/helpers';
import { DataState } from '../constants/common';
import { FetchFeedPostAsync } from '../middleware/FeedMiddleware';
import { FetchPostListByUserIdAsync, FetchProfileAsync, getUserProfileAsync, UploadProfilePicAsync } from '../middleware/ProfileMiddleware';



const dataLoadingCases = ['pending', 'fulfilled', 'rejected']
const initialState = {
    profileInfoFetch: new DataState().setInitialState(),
    postsByUserId: new DataState().setInitialState(),
    userProfileState: new DataState().setInitialState(),
    uploadProfilePicState: new DataState().setInitialState(),

};

export const ProfileSlice = createSlice({
    name: 'Profile',
    initialState: initialState,
    reducers: {
        resetPostsByUserId(state) {
            return { ...state, postsByUserId: new DataState().setInitialState() }
        }
    },

    extraReducers: (builder) => {
        dataLoadingCases.forEach((item) => {
            builder.addCase(FetchProfileAsync[item], AddCaseCallback('profileInfoFetch', item));
            builder.addCase(FetchPostListByUserIdAsync[item], AddCaseCallback('postsByUserId', item));
            builder.addCase(getUserProfileAsync[item], AddCaseCallback('userProfileState', item));
            builder.addCase(UploadProfilePicAsync[item], AddCaseCallback('uploadProfilePicState', item));


        })
    },
});



export const ProfileSliceActions = ProfileSlice.actions;

export const ProfileSliceSelectors = {
    selectProfileInfoFetch: (state) => state.Profile.profileInfoFetch,
    selectPostsByUserId: (state) => state.Profile.postsByUserId,
    selectUserProfileState: (state) => state.Profile.userProfileState,
    selectUploadProfilePicState: (state) => state.Profile.uploadProfilePicState,
}


export default ProfileSlice.reducer;
