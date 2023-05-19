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
import TextView from '../TextView'

const TabPosts = ({ item }) => {
    const { colors } = useTheme()
    const { size } = useSize()
    const styles = useMemo(() => stylesSheet(colors, size), [colors]);

    const [post, setPost] = useState(Object.assign({}, item));
    const dispatch = useDispatch();
    const navigation = useNavigation()



    return (
        <View >
            <TextView>Hello</TextView>

        </View>
    )
}

export default TabPosts
