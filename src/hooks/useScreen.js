import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation, useTheme } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { AppSettingSliceSelectors } from '../redux/slice/AppSettingsSlice'

const useScreen = () => {
    const { colors, size } = useTheme()
    const dispatch = useDispatch();
    const navigation = useNavigation()
    const themeColor = useSelector(AppSettingSliceSelectors.selectTheme);
    let isDark = themeColor === 'dark' ? true : false;

    return { colors, size, dispatch, navigation, themeColor, isDark }
}

export default useScreen