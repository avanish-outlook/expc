import { Dimensions, StyleSheet, View } from 'react-native'
import React from 'react'
import useSize from '../../../../hooks/useSize';
import AppBar from '../HomeTab/AppBar';
export const ScreenMiniTab = 'ScreenMiniTab';

const ReportTab = () => {

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const { size } = useSize();



    return (
        <View>
            <AppBar title="Reports" />
        </View>
    )
}

export default ReportTab

const styles = StyleSheet.create({})