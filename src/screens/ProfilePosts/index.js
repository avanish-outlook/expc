import { ScrollView, Text, View, FlatList, Dimensions } from 'react-native'
import React, { useMemo } from 'react'
import { useRoute, useTheme } from '@react-navigation/native';
import useSize from '../../hooks/useSize';
import useFetchPostsByUser from '../../hooks/useFetchPostsByUser';

import stylesSheet from './styles';
import { useDispatch } from 'react-redux';
import { AppBar, NavMenuItem, ProfilePostCard, TextView } from '../../components';
import { AppBarLeft, AppBarRight } from '../../components/AppBar';
import { useState } from 'react';
import { useEffect } from 'react';
import PostItemGrid from '../../components/ProfilePostGridItem';
export const ScreenCreatePost = "ScreenCreatePost";

/**
 * 
 * 
 * 
 */
const ProfilePosts = ({ navigation }) => {
    const { colors } = useTheme()
    const { size } = useSize()
    const styles = useMemo(() => stylesSheet(colors, size), [colors]);
    const dispatch = useDispatch()
    const { params } = useRoute()
    const [isGridList, setIsGridList] = useState(true)
    const { fetchPostList, postList, reset } = useFetchPostsByUser();
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(0);
    const screenWidth = Dimensions.get('window').width;

    useEffect(() => {
        const r = fetchPostList(params.profile._id, page)

        return () => {
            r.abort()
            setPosts([])
        }
    }, [page])


    useEffect(() => {

        if (postList.data?.payload?.docs.length > 0) {
            if (postList.data.payload.currentPage === page) {
                console.log('paramsProile', params)
                setPosts(prev => [...prev, ...postList.data.payload.docs])
                reset()
            }
        }

    }, [postList.status === 'succeed'])



    return (
        <View style={{ flex: 1 }}>
            <AppBar>
                <AppBarLeft>
                    <NavMenuItem name="keyboard-backspace" marginLeft={size.X} onPress={() => navigation.pop()} />
                    <Text style={{ marginLeft: size.M, fontWeight: 'bold', fontSize: size.M, color: colors.primaryText }}>
                        @{params.profile.username}'s Posts
                    </Text>
                </AppBarLeft>
                <AppBarRight>
                    <NavMenuItem name={isGridList ? "grid" : 'menu'} marginLeft={size.X} onPress={() => setIsGridList(prev => !prev)} />
                </AppBarRight>
            </AppBar>
            <View style={styles.container}>


                {
                    isGridList &&
                    <FlatList
                        data={posts}
                        numColumns={3}
                        renderItem={({ item, index }) => <PostItemGrid
                            key={item._id}
                            profile={params.profile}
                            item={item}
                            screenWidth={screenWidth} index={index} />
                        }

                    />
                }
                {
                    isGridList === false && <FlatList
                        data={posts}
                        renderItem={({ item, index }) => {
                            return <ProfilePostCard key={item._id} profile={params.profile} item={item} index={index} />
                        }}

                    />
                }

            </View>

        </View>


    )
}

export default ProfilePosts

