import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import useAppTheme from '../../hooks/useAppTheme'

const Button = ({ title, textColor, style, ...props }) => {
    const { theme } = useAppTheme()
    return (
        <TouchableOpacity {...props} style={[{ backgroundColor: theme.primaryColor, padding: 10, borderRadius: 4 }, style]}>
            <Text style={{ color: textColor ? textColor : 'white', textAlign: 'center', fontSize: 18 }}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({})