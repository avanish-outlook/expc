import { View, Text, ScrollView, RefreshControl, FlatList, TouchableOpacity, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute, useTheme } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { ProfileSliceSelectors } from '../../redux/slice/ProfileSlice';
import { FetchProfileAsync } from '../../redux/middleware/ProfileMiddleware';
import ProfileCard from '../../components/ProfileCard';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TabPosts from '../../components/TabPosts';
import TabReels from '../../components/TabReels';
import Ionic from 'react-native-vector-icons/Ionicons';
import useSize from '../../hooks/useSize';
import TextView from '../../components/TextView';
import PostItemFlatList from '../../components/PostItemFlatlist';
import ReelsItemFlatList from '../../components/ReelsItemFlatlist';
import useFetchPostsByUser from '../../hooks/useFetchPostsByUser';
import { ActivityIndicator } from 'react-native-paper';
import ProfileInfo from './ProfileInfo';

const SavedFlat = ({ profileInfo, tabIndex, setTabIndex }) => {
    const { params } = useRoute();
    const profileId = params.post.userId._id;
    const dispatch = useDispatch();
    const { colors } = useTheme()
    const [isRefreshing, setIsRefreshing] = useState(false);
    const { size } = useSize();

    const screenWidth = Dimensions.get('window').width;
    const [pageNum, setPageNum] = useState(0);

    const [postList, setPostList] = useState([]);


    const post = useFetchPostsByUser()

    // useEffect(() => {
    //     // setProfileInfo(null)
    //     //  const r = dispatch(FetchProfileAsync(profileId));
    //     //  setIsRefreshing(false)
    //     return () => {
    //         r.abort();
    //     }
    // }, [isRefreshing === true])

    useEffect(() => {
        const result = post.fetchPostList(profileId, pageNum)
        return () => {
            result.abort()
            post.reset()
        }
    }, [pageNum])


    useEffect(() => {

        if (post.postList.data?.payload?.docs.length > 0) {
            if (post.postList.data.payload.currentPage === pageNum) {
                setPostList(prev => [...prev, ...post.postList.data.payload.docs])
                post.reset()
            }


        }

    }, [post.postList.status === 'succeed'])



    const onPageRefresh = () => {
        setIsRefreshing(true)
    }


    const handleTabIndexChange = (index) => {
        setTabIndex(index);
    }

    const renderList = (item) => {
        return <PostItemFlatList item={item.item} screenWidth={screenWidth} />
    }


    const fetchMoreData = () => {
        setPageNum(prev => prev + 1)
    }


    return (
        <FlatList
            onEndReachedThreshold={0.2}
            onEndReached={fetchMoreData}
            numColumns={2}
            // refreshControl={<RefreshControl
            //     refreshing={profileInfoState.isLoading}
            //     onRefresh={onPageRefresh}
            //     nestedScrollEnabled={true}
            //     contentContainerStyle={{ flex: 1 }}
            // />}
            ListHeaderComponent={<ProfileInfo handleTabIndexChange={handleTabIndexChange} profileInfo={profileInfo} tabIndex={tabIndex} />}
            data={postList}
            renderItem={renderList}

        // ListFooterComponent={<View style={{ padding: size.XL, marginBottom: size.LL }}>
        //     <ActivityIndicator animating={true} color={colors.primary} />
        // </View>}
        />
    )
}

export default SavedFlat