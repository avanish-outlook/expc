import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'
import useAppTheme from '../../hooks/useAppTheme'

const Input = ({ style, ...props }) => {
    const { theme } = useAppTheme()
    return (
        <TextInput placeholder='Enter something'
            {
            ...props
            }
            style={[{ padding: 10, borderColor: theme.borderColor, borderWidth: 1, marginVertical: 8, borderRadius: 4 }, style]}
        />

    )
}

export default Input

const styles = StyleSheet.create({})