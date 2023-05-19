import { createSlice } from '@reduxjs/toolkit';
import { AddCaseCallback } from '../../utils/helpers';
import { DataLoadingState, DataState } from '../constants/common';
import { LoginUserAsync } from '../middleware/AuthMiddleware';
import { FetchFeedPostAsync, ReelsFeedPostAsync } from '../middleware/FeedMiddleware';



const dataLoadingCases = ['pending', 'fulfilled', 'rejected']
const initialState = {
    postFeed: new DataState().setInitialState(),
    reelsFeed: new DataState().setLoadingState(),
};

export const FeedSlice = createSlice({
    name: 'Feed',
    initialState: initialState,
    reducers: {
    },

    extraReducers: (builder) => {
        dataLoadingCases.forEach((item) => {
            builder.addCase(FetchFeedPostAsync[item], AddCaseCallback('postFeed', item));
            builder.addCase(ReelsFeedPostAsync[item], AddCaseCallback('reelsFeed', item));

        })
    },
});



export const FeedSliceActions = FeedSlice.actions;

export const FeedSliceSelectors = {
    selectPostFeed: (state) => state.Feed.postFeed,
    selectReelsFeed: (state) => state.Feed.reelsFeed,
}


export default FeedSlice.reducer;
