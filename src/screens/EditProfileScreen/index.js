import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { AppBar, Input, NavMenuItem } from '../../components'
import useSize from '../../hooks/useSize'
import { useNavigation, useTheme } from '@react-navigation/native'
import { AppBarLeft, AppBarRight } from '../../components/AppBar'
import NavBar from './NavBar'
import { ImgLogoProfile } from '../../assets'
import styles from './styles'
import { useMemo } from 'react'
import UploadProfilePic from './UploadProfilePic'
import useFetchProfile from '../../hooks/useFetchProfile'
import { useEffect } from 'react'
import useAuth from '../../hooks/useAuth'
import { useSelector } from 'react-redux'
import { ProfileSliceSelectors } from '../../redux/slice/ProfileSlice'
const EditProfileScreen = ({ navigation }) => {
    const { colors } = useTheme()
    const { size } = useSize()
    const style = useMemo(() => styles(colors, size), [colors]);
    const { profile, fetchProfile } = useFetchProfile();
    const { user } = useAuth()
    const uploadProfileState = useSelector(ProfileSliceSelectors.selectUploadProfilePicState);


    useEffect(() => {
        fetchProfile(user.userId)
    }, [uploadProfileState.status === 'succeed'])

    console.log({ profile })

    return (
        <ScrollView>
            <View>
                <NavBar />
                {
                    profile && <View style={style.container}>
                        <UploadProfilePic profile={profile} />

                        <Input placeholderTextColor={colors.secondaryText} placeholder='Name' value={profile.name} label={"Name"} />
                        <Input placeholder='Bio' multiline={true} value={profile.bio} numberOfLines={3} />
                        <Input placeholder='Username' value={profile.username} disabled={true} />
                        <Input placeholder='Email' value={profile.email} disabled={true} />


                    </View>
                }

            </View>
        </ScrollView>
    )
}

export default EditProfileScreen
