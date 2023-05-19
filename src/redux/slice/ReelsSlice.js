import { createSlice } from '@reduxjs/toolkit';
import { AddCaseCallback } from '../../utils/helpers';
import { DataState } from '../constants/common';
import { CreateReelsAsync } from '../middleware/ReelsMiddleware';



const dataLoadingCases = ['pending', 'fulfilled', 'rejected']
const initialState = {
    createReel: new DataState().setInitialState(),
};

export const ReelsSlice = createSlice({
    name: 'Reels',
    initialState: initialState,
    reducers: {
    },
    reducers: {

    },
    extraReducers: (builder) => {
        dataLoadingCases.forEach((item) => {
            builder.addCase(CreateReelsAsync[item], AddCaseCallback('createReel', item))
        })
    },
});



export const ReelsSliceActions = ReelsSlice.actions;

export const ReelsSliceSelectors = {
    selectCreateReel: (state) => state.Reels.createReel,
}


export default ReelsSlice.reducer;
