import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { FAIcon, ReelsComponent } from '../../../../components'
import useSize from '../../../../hooks/useSize';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReelsSliceSelectors } from '../../../../redux/slice/ReelsSlice';
import { FeedSliceSelectors } from '../../../../redux/slice/FeedSlice';
import useFeed from '../../../../hooks/useFeed';
export const ScreenMiniTab = 'ScreenMiniTab';

const MiniTab = () => {

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const { size } = useSize();



    return (
        <View
            style={{
                width: windowWidth,
                height: windowHeight,
                backgroundColor: 'white',
                position: 'relative',
                backgroundColor: 'black',
            }}>
            <View style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, flexDirection: 'row',
                justifyContent: 'space-between',
                zIndex: 1,
                padding: 10,
            }}>
                <Text style={{ fontSize: size.L, fontWeight: 'bold', color: 'white' }}>Reels</Text>
                <FAIcon name="camera" size={size.L} style={{ color: 'white' }} />

            </View>
            <ReelsComponent />
        </View>
    )
}

export default MiniTab

const styles = StyleSheet.create({})