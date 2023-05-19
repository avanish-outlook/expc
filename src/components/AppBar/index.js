import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { useTheme } from '@react-navigation/native'
import useSize from '../../hooks/useSize'


const AppBar = ({ children }) => {
    const { colors } = useTheme()
    const { size } = useSize()
    return (
        <View style={{
            height: 50, backgroundColor: colors.surface,
            display: 'flex', justifyContent: 'space-between',
            flexDirection: 'row', paddingHorizontal: size.M,
            alignItems: 'center',
            borderBottomColor: colors.border, borderWidth: .8,
        }}>

            {children}
        </View>
    )
}



export const AppBarLeft = ({ children }) => {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            {children}
        </View>
    )
}

export const AppBarRight = ({ children }) => {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            {children}
        </View>
    )
}


export default AppBar

const styles = StyleSheet.create({})