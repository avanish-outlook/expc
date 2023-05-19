import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import stylesSheet from './styles'
import { useNavigation, useTheme } from '@react-navigation/native'
import useSize from '../../hooks/useSize'
import { ImgLogoProfile } from '../../assets'
import Ionicons from '../Ionicons'
import FAIcon from '../FAIcon'
import { useEffect } from 'react'
import config from '../../utils/config'
import moment from 'moment/moment'
import { useDispatch } from 'react-redux'
import { LikeUnlikePostAsync } from '../../redux/middleware/PostsMiddleware'
import ScreenRoutes from '../../constants/ScreenRoutes'
import TextView from '../TextView'
import { Card } from 'react-native-paper'

const ProfileButtonCard = ({ name, onPress }) => {
    const { colors } = useTheme()
    const { size } = useSize()
    const styles = useMemo(() => stylesSheet(colors, size), [colors]);

    const dispatch = useDispatch();
    const navigation = useNavigation()
    const width = Dimensions.get('window').width;
    const cardHeight = (width / 2) - size.L - size.M - size.M


    return (
        <TouchableOpacity style={{ flex: 1 }} onPress={onPress}>

            <View style={{ flex: 1, }}>
                <Card mode='elevated' elevation={10} style={{
                    backgroundColor: colors.card, padding: size.S, borderRadius: size.L, margin: size.M,
                    height: cardHeight,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row'
                }}>


                    <TextView style={{ alignSelf: 'center', fontSize: size.L, fontWeight: 'bold' }}>{name}</TextView>
                </Card>

            </View>
        </TouchableOpacity>

    )
}

export default ProfileButtonCard
