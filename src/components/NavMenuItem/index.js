import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import useSize from '../../hooks/useSize'
import { useTheme } from '@react-navigation/native'
const NavMenuItem = ({ name, onPress, marginLeft, fontSize }) => {
    const { size } = useSize();
    const { colors } = useTheme()
    return (
        <View style={{ marginLeft: marginLeft ? marginLeft : size.L }}>
            <TouchableOpacity onPress={onPress}>
                <MaterialIcon name={name} color={colors.secondaryText} size={fontSize ? fontSize : size.L} />
            </TouchableOpacity>
        </View>

    )
}

export default NavMenuItem