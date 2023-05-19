import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import config from '../../../../utils/config'
import { FAIcon, NavMenuItem } from '../../../../components'
import { useTheme } from '@react-navigation/native'
import useSize from '../../../../hooks/useSize'
import { useState } from 'react'
import PlusButtonModal from '../PlusButtonModal'
import { useDispatch, useSelector } from 'react-redux'
import { AppSettingSliceActions, AppSettingSliceSelectors } from '../../../../redux/slice/AppSettingsSlice'

const AppBar = () => {
    const { colors } = useTheme()
    const { size } = useSize()
    const [openPostModal, setOpenPostModal] = useState(false);

    const currentTheme = useSelector(AppSettingSliceSelectors.selectTheme);
    const dispatch = useDispatch()

    const handleThemeToggle = () => {
        if (currentTheme === 'light') {
            dispatch(AppSettingSliceActions.changeTheme('dark'))
        } else {
            dispatch(AppSettingSliceActions.changeTheme('light'))
        }
    }

    return (
        <View style={{
            height: 50, backgroundColor: colors.surface,
            display: 'flex', justifyContent: 'space-between',
            flexDirection: 'row', paddingHorizontal: size.M,
            alignItems: 'center',
            borderBottomColor: colors.border,
            borderWidth: .8,
        }}>
            <View>
                <Text style={{ fontSize: size.L, fontWeight: 'bold', color: colors.primary }}>
                    {config.APP_NAME}
                </Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <NavMenuItem onPress={handleThemeToggle} name={currentTheme === 'light' ? "white-balance-sunny" : "weather-night"} />

                <NavMenuItem onPress={() => { }} name="bell-outline" />
                <NavMenuItem onPress={() => { setOpenPostModal(true) }} name="plus-circle-outline" />
                <PlusButtonModal isOpen={openPostModal} onClose={() => setOpenPostModal(false)} />
            </View>
        </View>
    )
}

export default AppBar

const styles = StyleSheet.create({})