import { Dimensions, Image, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import stylesSheet from './styles'
import { useNavigation, useTheme } from '@react-navigation/native'
import useSize from '../../hooks/useSize'
import { useDispatch } from 'react-redux'
import TextView from '../TextView'
import { ImgPostPlaceholder } from '../../assets'

const ReelsItemFlatList = ({ item, screenWidth }) => {
    const { colors } = useTheme()
    const { size } = useSize()
    const styles = useMemo(() => stylesSheet(colors, size), [colors]);
    const postHeight = (screenWidth / 3) * (16 / 9);
    const [post, setPost] = useState(Object.assign({}, item));
    const dispatch = useDispatch();
    const navigation = useNavigation()

    return (

        <View style={{ flex: 1, height: postHeight, backgroundColor: 'gray', margin: 1, position: 'relative' }}>
            <View style={{ position: 'relative', width: '100%', height: '100%' }}>
                <Image source={ImgPostPlaceholder} style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
                <TextView style={{ color: colors.surface, position: 'absolute', bottom: 4, right: 4 }}>10K</TextView>

            </View>
        </View>


    )
}

export default ReelsItemFlatList
