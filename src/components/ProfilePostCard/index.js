import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import stylesSheet from './styles'
import { useNavigation, useTheme } from '@react-navigation/native'
import useSize from '../../hooks/useSize'
import { ImgLogoProfile } from '../../assets'
import Ionicons from '../Ionicons'
import FAIcon from '../FAIcon'
import { useEffect } from 'react'
import config from '../../utils/config'
import moment from 'moment/moment'
import { useDispatch } from 'react-redux'
import { LikeUnlikePostAsync } from '../../redux/middleware/PostsMiddleware'
import ScreenRoutes from '../../constants/ScreenRoutes'
import { PhotoUrl } from '../../utils/helpers'

const PostCard = ({ item, index, profile }) => {
    const { colors } = useTheme()
    const { size } = useSize()
    const styles = useMemo(() => stylesSheet(colors, size), [colors]);

    const [post, setPost] = useState(Object.assign({}, item));
    const dispatch = useDispatch();

    const navigation = useNavigation()

    console.log(item, 'postItem')

    const handleLikePress = () => {

        setPost((prev) => {
            if (prev.isLiked) {
                prev.totalLikes = prev.totalLikes - 1
                prev.isLiked = false

            } else {
                prev.totalLikes = prev.totalLikes + 1
                prev.isLiked = true;
            }
            dispatch(LikeUnlikePostAsync({ postId: item._id }))
            return { ...prev };
        })

    }

    const openProfile = () => {
        //  navigation.navigate(ScreenRoutes.ViewProfileScreen.name, { post: post })
    }

    function handlePostClick() {
        navigation.navigate(ScreenRoutes.ViewPostScreen.name, { post: post })
    }

    return (
        <View style={styles.container}>
            <View style={styles.header} >
                {/* <TouchableOpacity onPress={openProfile}> */}

                <Image source={post.userId.profilePic !== '' ? { uri: PhotoUrl(profile.profilePic) }
                    : ImgLogoProfile} style={styles.profileImage} />
                {/* </TouchableOpacity> */}
                <View style={{ paddingStart: size.M, flex: 1 }}>
                    {/* <TouchableOpacity onPress={openProfile}> */}
                    <Text style={{ fontSize: size.M, color: colors.primaryText, }}>
                        {index}   {profile.username}
                    </Text>
                    {/* </TouchableOpacity > */}
                    <Text style={{ color: colors.secondaryText }}>
                        {moment(post.createdAt).fromNow()}
                    </Text>
                </View>
                <Ionicons name='ellipsis-vertical' size={size.L} />
            </View>
            <TouchableOpacity activeOpacity={0.9} onPress={handlePostClick}>

                <Image source={{ uri: config.BACKEND_HOST_URL + post.postPaths[0] }} style={{ height: 250, width: '100%', resizeMode: "center" }} />
            </TouchableOpacity>


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

                    <TouchableOpacity onPress={handlePostClick}>

                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: size.M }}>
                            <FAIcon name="comments" size={size.L} />
                            <Text style={{ marginHorizontal: size.XS, fontSize: size.M, color: colors.secondaryText }}>1K</Text>
                        </View>
                    </TouchableOpacity>

                </View>
                <View>
                    <FAIcon name="archive" size={size.L} />
                </View>
            </View>
            <View style={{ paddingHorizontal: size.XL, paddingVertical: size.XS }}>
                <Text style={{ color: colors.secondaryText }}>{item.desc}</Text>
            </View>
        </View>
    )
}

export default PostCard
