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
import PostsFlat from './PostsFlat';
import ReelsFlat from './ReelsFlat';
import SavedFlat from './SavedFlat';
/***
 * 
 */


const ViewProfile = () => {
    const { params } = useRoute();
    const profileId = params.post.userId._id;
    const [profileInfo, setProfileInfo] = useState(null);
    const profileInfoState = useSelector(ProfileSliceSelectors.selectProfileInfoFetch)
    const dispatch = useDispatch();
    const { colors } = useTheme()
    const [isRefreshing, setIsRefreshing] = useState(false);
    const { size } = useSize();
    const [tabIndex, setTabIndex] = useState(0);
    const screenWidth = Dimensions.get('window').width;
    const [pageNum, setPageNum] = useState(0);

    const post = useFetchPostsByUser()

    useEffect(() => {
        setProfileInfo(null)
        const r = dispatch(FetchProfileAsync(profileId));
        setIsRefreshing(false)
        return () => {
            r.abort();
        }
    }, [isRefreshing === true])

    useEffect(() => {
        if (profileInfoState.data !== null) {
            setProfileInfo(profileInfoState.data.payload)
        }
    }, [profileInfoState.data])


    useEffect(() => {
        const result = post.fetchPostList(profileId, pageNum)
        return () => {
            result.abort()
            post.reset()
        }
    }, [pageNum])



    return (

        <View style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            {
                profileInfo && <>

                    {
                        tabIndex === 0 && <PostsFlat
                            profileInfo={profileInfo}
                            tabIndex={0}
                            setTabIndex={setTabIndex} />
                    }

                    {
                        tabIndex === 1 && <ReelsFlat
                            profileInfo={profileInfo}
                            tabIndex={1}
                            setTabIndex={setTabIndex} />
                    }

                    {
                        tabIndex === 2 && <SavedFlat
                            profileInfo={profileInfo}
                            tabIndex={2}
                            setTabIndex={setTabIndex} />
                    }

                </>
            }

        </View >

    )
}

export default ViewProfile