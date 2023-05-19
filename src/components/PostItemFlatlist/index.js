import { Dimensions, Image, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import stylesSheet from './styles'
import { useNavigation, useTheme } from '@react-navigation/native'
import useSize from '../../hooks/useSize'
import { useDispatch } from 'react-redux'
import TextView from '../TextView'
import { ImgPostPlaceholder } from '../../assets'
import config from '../../utils/config';
import FastImage from 'react-native-fast-image'
/***
 * 
 */
const PostItemFlatList = ({ item, screenWidth }) => {
    const { colors } = useTheme()
    const { size } = useSize()
    const styles = useMemo(() => stylesSheet(colors, size), [colors]);

    const postHeight = screenWidth / 3;

    const [post, setPost] = useState(Object.assign({}, item));
    const dispatch = useDispatch();
    const navigation = useNavigation()



    return (
        <View style={{ flex: 1, height: postHeight, backgroundColor: 'gray', margin: 1, position: 'relative' }}>
            <View style={{ position: 'relative', width: '100%', height: '100%' }}>
                <FastImage
                    source={item.postPaths[0] ? {
                        uri: config.BACKEND_HOST_URL + item.postPaths[0],
                        priority: FastImage.priority.normal
                    } : ImgPostPlaceholder
                    }

                    style={{ width: postHeight, height: postHeight }
                    }
                    resizeMode={FastImage.resizeMode.cover}

                />
                <TextView style={{ color: colors.surface, position: 'absolute', bottom: 4, right: 4 }}>10K</TextView>

            </View>
        </View>
    )
}

export default PostItemFlatList
