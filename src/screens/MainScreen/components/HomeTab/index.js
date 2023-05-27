import { useTheme } from '@react-navigation/native';
import React, { useMemo } from 'react'
import { ScrollView, Text, View } from 'react-native';

import AppBar from './AppBar';
import stylesSheet from './styles';
import AccountList from './AccountList';
import RecordList from './RecordList';


export const ScreenHomeTab = 'HomeTab';

function HomeTab() {

    const { colors, size } = useTheme()
    const styles = useMemo(() => stylesSheet(colors, size), [colors]);

    return (
        <>
            <AppBar />
            <ScrollView style={{ backgroundColor: colors.background }}>
                <View style={styles.container}>

                    <AccountList />
                    <RecordList />

                </View>
            </ScrollView>

        </>
    )
}

export default HomeTab