import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { AppBar, NavMenuItem, Text } from '../../components'
import useSize from '../../hooks/useSize'
import { useNavigation, useTheme } from '@react-navigation/native'
import { AppBarLeft, AppBarRight } from '../../components/AppBar'


const NavBar = () => {
    const { colors } = useTheme()
    const { size } = useSize()
    const navigation = useNavigation()
    return (
        <AppBar>
            <AppBarLeft>
                <NavMenuItem name="keyboard-backspace" marginLeft={0} onPress={() => navigation.pop()} />
                <Text color='s' style={{ marginLeft: size.M, fontWeight: 'bold', fontSize: size.M, }}>Edit Profile</Text>
            </AppBarLeft>
            <AppBarRight>
                <NavMenuItem name="check" />
            </AppBarRight>
        </AppBar>
    )
}

export default NavBar