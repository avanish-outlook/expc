import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ion from 'react-native-vector-icons/FontAwesome'
import { useTheme } from '@react-navigation/native'

const FAIcon = (props) => {
    const { colors } = useTheme()
    return (
        <Ion {...props} name={props.name} color={colors.secondaryText} />
    )
}

export default FAIcon
