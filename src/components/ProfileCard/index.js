import { Image, View } from 'react-native'
import React, { useMemo } from 'react'
import stylesSheet from './styles'
import { useNavigation, useTheme } from '@react-navigation/native'
import useSize from '../../hooks/useSize'
import { ImgPostPlaceholder } from '../../assets'
import Ionicons from '../Ionicons'
import config from '../../utils/config'
import { Button, Card } from 'react-native-paper'
import NavMenuItem from '../NavMenuItem'
import TextView from '../TextView'
import useAuth from '../../hooks/useAuth'
import Text from '../Text'


const ProfileCard = ({ profile }) => {
    const { colors } = useTheme()
    const { size } = useSize()
    const styles = useMemo(() => stylesSheet(colors, size), [colors]);
    const navigation = useNavigation();
    const { user } = useAuth()
    console.log("profiless", profile)
    return (
        <View style={styles.container}>
            <Card mode='elevated' elevation={10} style={{
                backgroundColor: colors.card, padding: size.S, borderRadius: size.L,

            }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <NavMenuItem name="keyboard-backspace" marginLeft={1} fontSize={size.XL} onPress={() => navigation.pop()} />
                    <View style={{ flex: 1 }}>
                    </View>
                    <Ionicons name='ellipsis-vertical' size={size.L} />
                </View>

                <View style={styles.imageAnInfo}>

                    <Image resizeMode='cover' source={profile.profilePic ? { uri: config.BACKEND_HOST_URL + profile.profilePic } : ImgPostPlaceholder} style={styles.profileImg} />
                    <View style={styles.rightInfo}>
                        <Text style={{ fontSize: size.L, color: colors.primaryText, fontWeight: 'bold' }}>
                            {profile.username}
                        </Text>
                        <Text style={{ fontSize: size.M, color: colors.secondaryText }}>
                            @{profile.username}
                        </Text>
                        <View style={styles.followContainer}>
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <Text style={styles.heading}>Followers</Text>
                                <Text style={styles.text}>100K</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <Text style={styles.heading}>Following</Text>
                                <Text style={styles.text}>100K</Text>
                            </View>
                        </View>

                    </View>



                </View>
                <View style={styles.postInfoAndBios}>
                    <View style={styles.postInfos}>
                        <View>
                            <Text style={styles.heading}>Posts</Text>
                            <Text style={styles.text}>30</Text>
                        </View>
                        <View>
                            <Text style={styles.heading}>Shorts</Text>
                            <Text style={styles.text}>100</Text>
                        </View>
                        <View>
                            {
                                profile._id === user.userId ? <Text style={{ fontSize: size.MM }}>(You)</Text> : <Button mode='contained'>Follow</Button>
                            }

                        </View>
                    </View>

                    <TextView style={{ fontSize: size.M, color: colors.secondaryText, color: colors.secondaryText, paddingHorizontal: size.M }}>
                        {profile.bio}
                    </TextView>
                </View>

            </Card >
        </View >
    )
}

export default ProfileCard
