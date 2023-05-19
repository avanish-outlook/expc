import { ScrollView, Text, View, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useMemo } from 'react'
import { useRoute, useTheme } from '@react-navigation/native';
import useSize from '../../hooks/useSize';
import stylesSheet from './styles';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { ImgLogoProfile } from '../../assets';
import moment from 'moment';
import { Button, FAIcon, Input, Ionicons, NavMenuItem } from '../../components';
import ScreenRoutes from '../../constants/ScreenRoutes';
import { LikeUnlikePostAsync } from '../../redux/middleware/PostsMiddleware';
import BottomCommentInput from './BottomCommentInput';
import CommentItem from './CommentItem';
import PostItem from './PostItem';
import useFetchPostComments from '../../hooks/useFetchPostComments';
import { useEffect } from 'react';
import useAddCommentOnPost from '../../hooks/useAddCommentOnPost';
/**
 * 
 * 
 * 
 */
const ViewPost = ({ navigation }) => {
    const { colors } = useTheme()
    const { size } = useSize()
    const styles = useMemo(() => stylesSheet(colors, size), [colors]);
    const dispatch = useDispatch()
    const { params } = useRoute()
    const [post, setPost] = useState(Object.assign({}, params.post));
    const [page, setPage] = useState(0);
    const comments = useFetchPostComments();
    const [commentList, setCommentList] = useState([]);
    const { addCommentState } = useAddCommentOnPost()

    useEffect(() => {
        const p = comments.fetchComments(post._id, page)

        return () => {
            return p.abort()
        }
    }, [page,])



    useEffect(() => {
        if (addCommentState.status === 'succeed') {
            setCommentList([])
            setPage(0)
        }
    }, [addCommentState.status === 'succeed'])


    useEffect(() => {
        if (comments.postCommentsListState.status === 'succeed') {
            const data = comments.postCommentsListState.data.payload;
            if (data.comments?.length > 0) {
                setCommentList(prev => [...prev, ...data.comments])
            }
        }
    }, [comments.postCommentsListState.status === 'succeed'])



    const openProfile = () => {
        navigation.navigate(ScreenRoutes.ViewProfileScreen.name, { post: post })
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header} >
                <NavMenuItem name="keyboard-backspace" marginLeft={1} onPress={() => navigation.pop()} />
                <View style={{ paddingStart: size.M, flex: 1 }}>
                    <TouchableOpacity onPress={openProfile}>
                        <Text style={{ fontSize: size.M, color: colors.primaryText, }}>
                            {post.userId.username}
                        </Text>
                    </TouchableOpacity >
                    <Text style={{ color: colors.secondaryText }}>
                        {moment(post.createdAt).fromNow()}
                    </Text>
                </View>
                <Ionicons name='ellipsis-vertical' size={size.L} />
            </View>
            <FlatList
                data={commentList}
                ListHeaderComponent={
                    <PostItem />
                }
                renderItem={({ item, index }) => {
                    return <CommentItem item={item} />
                }}

                onEndReached={() => setPage(prev => prev + 1)}

                ListFooterComponent={<View style={{ marginBottom: 50 }}></View>}
            />

            <BottomCommentInput post={post} />
        </View>
    )
}

export default ViewPost

