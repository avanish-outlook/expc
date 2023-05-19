import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Modal, Portal, Text, Button, Provider, TouchableRipple } from 'react-native-paper';
import { useState } from 'react';
import { useNavigation, useTheme, } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import useSize from '../../../../hooks/useSize';
import Screens from '../../../../constants/ScreenRoutes';
import { TextView } from '../../../../components'

const PlusButtonModal = ({ isOpen, onClose }) => {

    const { colors } = useTheme()
    const { size } = useSize()

    const navigation = useNavigation()

    return (
        <Portal >
            <Modal style={{ marginHorizontal: '10%' }} visible={isOpen}
                onDismiss={() => onClose(false)} contentContainerStyle={{ backgroundColor: colors.card, padding: 10 }}>
                <View style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'row' }}>
                    <Ionicons name={"close"} onPress={() => onClose()} size={size.XL} color={colors.secondaryText} />
                </View>
                <View>
                    <ListItem opPress={() => { navigation.navigate(Screens.CreatePost.name); onClose() }} iconName={"add"} title={"Publish Post"} />
                    <ListItem opPress={() => { navigation.navigate(Screens.CreateReelScreen.name); onClose() }} iconName={"videocam"} title={"Publish Short"} />
                </View>

            </Modal>
        </Portal>
    )
    function ListItem({ iconName, title, opPress }) {

        return <TouchableOpacity
            onPress={opPress}

        >
            <View style={{ display: 'flex', flexDirection: 'row', borderWidth: 1, borderColor: colors.border, padding: size.XS, marginVertical: size.XS, paddingHorizontal: 32, }}>
                <Ionicons name={iconName} size={size.L} color={colors.primaryText} />
                <TextView style={{ fontSize: size.M, marginLeft: size.S, color: colors.primaryText }}>{title}</TextView>
            </View>
        </TouchableOpacity>

    }
}




export default PlusButtonModal

const styles = StyleSheet.create({})