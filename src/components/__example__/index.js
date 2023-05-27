import { View } from 'react-native'
import React, { useMemo } from 'react'
import stylesSheet from './styles'
import TextView from '../TextView'
import useComponent from '../../hooks/useComponent'

const TabPosts = ({ item }) => {
    const { colors, dispatch, navigation, size, themeColor, isDark } = useComponent()
    const styles = useMemo(() => stylesSheet(colors, size), [colors]);




    return (
        <View >
            <TextView>Hello</TextView>

        </View>
    )
}

export default TabPosts
