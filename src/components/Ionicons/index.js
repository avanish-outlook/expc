import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ion from 'react-native-vector-icons/Ionicons'
import { useTheme } from '@react-navigation/native'

const Ionicons = (props) => {
    const { colors } = useTheme()
    return (
        <Ion  {...props} name={props.name} color={props.color ? props.color : colors.secondaryText} />
    )
}

export default Ionicons

const styles = StyleSheet.create({})    