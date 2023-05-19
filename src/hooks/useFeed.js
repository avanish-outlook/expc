import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FeedSliceSelectors } from '../redux/slice/FeedSlice';
import { FetchFeedPostAsync, ReelsFeedPostAsync } from '../redux/middleware/FeedMiddleware';

const useFeed = () => {
    const dispatch = useDispatch()
    const feedPostState = useSelector(FeedSliceSelectors.selectPostFeed);

    const reelsFeedState = useSelector(FeedSliceSelectors.selectReelsFeed);

    function fetchPost(pageNum) {
        return dispatch(FetchFeedPostAsync(pageNum))
    }
    function fetchReels(pageNum) {
        return dispatch(ReelsFeedPostAsync(pageNum))
    }

    return { feedPostState, fetchPost, reelsFeedState, fetchReels }
}

export default useFeed