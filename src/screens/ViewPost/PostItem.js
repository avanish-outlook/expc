

import { ScrollView, Text, View, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useMemo } from 'react'
import { useRoute, useTheme } from '@react-navigation/native';
import useSize from '../../hooks/useSize';
import stylesSheet from './styles';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { ImgLogoProfile } from '../../assets';
import moment from 'moment';
import { Button, FAIcon, Input, Ionicons } from '../../components';
import ScreenRoutes from '../../constants/ScreenRoutes';
import { LikeUnlikePostAsync } from '../../redux/middleware/PostsMiddleware';


const PostItem = () => {
    const { colors } = useTheme()
    const { size } = useSize()
    const styles = useMemo(() => stylesSheet(colors, size), [colors]);
    const dispatch = useDispatch()

    const { params } = useRoute()
    const [post, setPost] = useState(Object.assign({}, params.post));

    const handleLikePress = () => {
        setPost((prev) => {
            if (prev.isLiked) {
                prev.totalLikes = prev.totalLikes - 1
                prev.isLiked = false

            } else {
                prev.totalLikes = prev.totalLikes + 1
                prev.isLiked = true;
            }
            dispatch(LikeUnlikePostAsync({ postId: params.post._id }))
            return { ...prev };
        })

    }

    const openProfile = () => {
        navigation.navigate(ScreenRoutes.ViewProfileScreen.name, { post: post })
    }


    return (
        <View style={styles.container}>


            <Image source={{ uri: config.BACKEND_HOST_URL + post.postPaths[0] }}
                style={{ height: 250, width: '100%', resizeMode: "center" }} />


            <View style={{
                display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
                paddingHorizontal: size.XS, paddingHorizontal: size.XS, alignItems: 'center',
                marginHorizontal: size.L

            }}>
                <View style={{
                    display: 'flex', flexDirection: 'row', gap: size.S,
                    alignItems: 'center', paddingBottom: size.XS,
                }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                        <TouchableOpacity onPress={handleLikePress}>

                            <Ionicons name="heart" size={size.L} color={post.isLiked === true ? "red" : colors.secondaryText} />
                        </TouchableOpacity>
                        <Text style={{ marginHorizontal: size.XS, fontSize: size.M, color: colors.secondaryText }}>{post.totalLikes}</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: size.M }}>
                        <FAIcon name="comments" size={size.L} />
                        <Text style={{ marginHorizontal: size.XS, fontSize: size.M, color: colors.secondaryText }}>1K</Text>
                    </View>

                </View>
                <View>
                    <FAIcon name="archive" size={size.L} />
                </View>
            </View>
            <View style={{ paddingHorizontal: size.XL, paddingVertical: size.XS }}>
                <Text style={{ color: colors.secondaryText }}>{post.desc}</Text>
            </View>
        </View>
    )
}

export default PostItem