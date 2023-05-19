import { useTheme } from '@react-navigation/native';
import React from 'react'
import { useEffect } from 'react';
import { FlatList, RefreshControl, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import PostCard from '../../../../components/PostCard';
import useSize from '../../../../hooks/useSize';
import useFeed from '../../../../hooks/useFeed';
import { ActivityIndicator } from 'react-native-paper';

import { PostsSliceSelectors } from '../../../../redux/slice/PostsSlice';
import AppBar from './AppBar';
import { useState } from 'react';
import { ReelsSliceSelectors } from '../../../../redux/slice/ReelsSlice';


export const ScreenHomeTab = 'HomeTab';

function HomeTab() {
    const postState = useSelector(PostsSliceSelectors.selectCreatePost).isLoading;
    const reelState = useSelector(ReelsSliceSelectors.selectCreateReel).isLoading;
    const { colors } = useTheme()
    const { size } = useSize()
    const [currentPage, setCurrentPage] = useState(0);
    const feed = useFeed();
    const [postList, setPostList] = useState([])

    useEffect(() => {
        feed.fetchPost(currentPage)
    }, [currentPage])


    const refetch = () => {
        setPostList([])
        feed.fetchPost(0)
        setCurrentPage(0)
        //feed.fetchPost(0)
    }


    useEffect(() => {
        if (feed.feedPostState.status === 'succeed') {
            const newData = feed.feedPostState.data.payload
            if (newData.length > 0) {
                setPostList((prev) => [...prev, ...newData])
            }
        }
    }, [feed.feedPostState.status === 'succeed'])


    const fetchMoreData = () => {
        setCurrentPage(prev => prev + 1)
    }


    return (
        <>
            <AppBar />
            <View style={{ backgroundColor: colors.background }}>
                {
                    postState && <View style={{ backgroundColor: colors.secondary, padding: size.S, margin: size.XS }}>
                        <Text style={{ color: colors.primaryText }}>Post is uploading...</Text>
                    </View>
                }

                {
                    reelState && <View style={{ backgroundColor: colors.secondary, padding: size.S, margin: size.XS }}>
                        <Text style={{ color: colors.primaryText }}>Video is uploading...</Text>
                    </View>
                }

                <FlatList
                    data={postList}
                    renderItem={({ item, index }) => <PostCard item={item} />}
                    refreshControl={<RefreshControl
                        refreshing={postState}
                        onRefresh={refetch}
                    />}
                    onEndReachedThreshold={0.2}
                    onEndReached={fetchMoreData}
                    ListFooterComponent={<View style={{ padding: size.XL, marginBottom: size.LL }}>
                        <ActivityIndicator animating={true} color={colors.primary} />
                    </View>}
                />
            </View>
        </>
    )
}

export default HomeTab