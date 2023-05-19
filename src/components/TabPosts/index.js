import { View } from 'react-native'
import React, { useMemo } from 'react'
import stylesSheet from './styles'
import { useNavigation, useTheme } from '@react-navigation/native'
import useSize from '../../hooks/useSize'
import { useDispatch } from 'react-redux'
import TextView from '../TextView'

const TabPosts = () => {
    const { colors } = useTheme()
    const { size } = useSize()
    const styles = useMemo(() => stylesSheet(colors, size), [colors]);
    const dispatch = useDispatch();
    const navigation = useNavigation()



    return (
        <View style={styles.container}>
            <TextView>hiii</TextView>
        </View>
    )
}

export default TabPosts
