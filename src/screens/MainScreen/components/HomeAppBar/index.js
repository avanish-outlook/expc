import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Appbar } from 'react-native-paper';
import { useTheme } from '@react-navigation/native';
import config from '../../../../utils/config';
import PlusButtonModal from '../PlusButtonModal';

const HomeTabAppBar = ({ navigation, back }) => {

    const { colors } = useTheme()
    const [openPostModal, setOpenPostModal] = useState(false);

    return (
        <>
            <Appbar.Header style={{ backgroundColor: colors.surface, height: 40, }}  >
                <Appbar.Content title={config.APP_NAME} />
                {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}

                <Appbar.Action icon="bell" color={colors.secondaryText} onPress={() => { }} />

                <Appbar.Action icon="bell" color={colors.secondaryText} onPress={() => { }} />
                <Appbar.Action color={colors.secondaryText} icon="plus-box" onPress={() => { setOpenPostModal(true) }} />
            </Appbar.Header>
            <PlusButtonModal isOpen={openPostModal} onClose={() => setOpenPostModal(false)} />

        </>
    )
}

export default HomeTabAppBar

const styles = StyleSheet.create({})