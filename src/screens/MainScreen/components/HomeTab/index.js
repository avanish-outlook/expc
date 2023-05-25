import { useTheme } from '@react-navigation/native';
import React from 'react'
import { useEffect } from 'react';
import { FlatList, RefreshControl, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import PostCard from '../../../../components/PostCard';
import useSize from '../../../../hooks/useSize';
import useFeed from '../../../../hooks/useFeed';
import { ActivityIndicator } from 'react-native-paper';

import { PostsSliceSelectors } from '../../../../redux/slice/PostsSlice';
import AppBar from './AppBar';
import { useState } from 'react';
import { ReelsSliceSelectors } from '../../../../redux/slice/ReelsSlice';


export const ScreenHomeTab = 'HomeTab';

function HomeTab() {

    const { colors } = useTheme()


    return (
        <>
            <AppBar />
            <View style={{ backgroundColor: colors.background }}>

            </View>
        </>
    )
}

export default HomeTab