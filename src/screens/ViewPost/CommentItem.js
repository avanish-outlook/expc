import { View, Text, Image } from 'react-native'
import React from 'react'
import { TextView } from '../../components'
import { ImgLogoProfile } from '../../assets'
import { useTheme } from '@react-navigation/native'
import useSize from '../../hooks/useSize'
import moment from 'moment'

const CommentItem = ({ item }) => {
    console.log('lls')
    const { colors } = useTheme()
    const { size } = useSize();
    return (
        <View style={{ display: 'flex', flexDirection: 'row', marginVertical: size.S, marginHorizontal: size.M, alignItems: 'center' }}>
            <Image source={item.userId.profilePic !== '' ? { uri: item.userId.profilePic } : ImgLogoProfile} style={{ width: 30, height: 30, tintColor: colors.primary }} />
            <View style={{ marginLeft: size.M }}>
                <View style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row', }}>

                    <Text style={{ color: colors.secondaryText }} >{item.userId.username}</Text>
                    <Text style={{ color: colors.secondaryText, marginLeft: size.S }} >{moment(item.updatedAt).fromNow()}</Text>

                </View>
                <TextView>{item.comment}</TextView>

            </View>
        </View>
    )
}

export default CommentItem