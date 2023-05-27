import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import config from '../../../../utils/config'
import { NavMenuItem } from '../../../../components'
import { useTheme } from '@react-navigation/native'
import useSize from '../../../../hooks/useSize'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppSettingSliceActions, AppSettingSliceSelectors } from '../../../../redux/slice/AppSettingsSlice'

const AppBar = ({ title }) => {
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
            shadowRadius: 6,
            shadowOpacity: 0.26,
            elevation: 8,
            backgroundColor: colors.surface,
            marginBottom: 6
        }}>
            <View>
                <Text style={{ fontSize: size.L, fontWeight: 'bold', color: colors.primary }}>
                    {title ? title : config.APP_NAME}
                </Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <NavMenuItem onPress={handleThemeToggle} name={currentTheme === 'light' ? "white-balance-sunny" : "weather-night"} />
                <NavMenuItem onPress={() => { }} name="bell-outline" />
            </View>
        </View>
    )
}

export default AppBar

const styles = StyleSheet.create({})