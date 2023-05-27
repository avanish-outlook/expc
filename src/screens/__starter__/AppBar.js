import { View, Text } from 'react-native'
import React from 'react'
import { AppBar as DefaultAppbar, UiText } from '../../components'
import { AppBarLeft, AppBarRight } from '../../components/AppBar'
import { IconButton } from 'react-native-paper'
import { useTheme } from '@react-navigation/native'
const AppBar = ({ navigation, title }) => {
    const { colors, size } = useTheme()
    return (
        <DefaultAppbar >
            <AppBarLeft>
                <IconButton icon={"arrow-left"} style={{ marginLeft: 0 }}
                    onPress={() => navigation.pop()} color={colors.primaryText} />
                <UiText >{title}</UiText>
            </AppBarLeft>
            <AppBarRight>

            </AppBarRight>
        </DefaultAppbar>
    )
}

export default AppBar