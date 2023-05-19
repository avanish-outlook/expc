import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'

const TextView = (props) => {
    const { colors } = useTheme()
    return (
        <Text style={[{ color: colors.primaryText }, props.style]} >{props.children}</Text>
    )
}

export default TextView