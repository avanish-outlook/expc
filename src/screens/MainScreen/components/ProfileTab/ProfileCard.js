import { Image, Text, View, StyleSheet } from 'react-native'
import React, { useMemo } from 'react'
import { useNavigation, useTheme } from '@react-navigation/native'
import useSize from '../../../../hooks/useSize'
import { ImgPostPlaceholder } from '../../../../assets'
import Ionicons from '../../../../components/Ionicons'
import config from '../../../../utils/config'
import { Button, Card } from 'react-native-paper'
import NavMenuItem from '../../../../components/NavMenuItem'
import TextView from '../../../../components/TextView'
import ScreenRoutes from '../../../../constants/ScreenRoutes'

const ProfileCard = ({ profile }) => {
    const { colors } = useTheme()
    const { size } = useSize()
    const styles = useMemo(() => stylesSheet(colors, size), [colors]);
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Card mode='elevated' elevation={10} style={{
                backgroundColor: colors.card, padding: size.S, borderRadius: size.L,

            }}>
                {/* <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <NavMenuItem name="keyboard-backspace" marginLeft={1} fontSize={size.XL} onPress={() => navigation.pop()} />
                    <View style={{ flex: 1 }}>
                    </View>
                    <Ionicons name='ellipsis-vertical' size={size.L} />
                </View> */}

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    {/* <NavMenuItem name="keyboard-backspace" marginLeft={1} fontSize={size.XL} onPress={() => navigation.pop()} /> */}
                    <View style={{ flex: 1 }}>
                    </View>
                    <NavMenuItem name='account-edit-outline' onPress={() => navigation.navigate(ScreenRoutes.EditProfileScreen.name)} />
                    <NavMenuItem name='menu' />
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

                            <Button mode='contained' onPress={() => navigation.navigate(ScreenRoutes.EditProfileScreen.name)}>Edit</Button>
                        </View>
                    </View>

                    <TextView style={{ fontSize: size.M, color: colors.secondaryText, color: colors.secondaryText, paddingHorizontal: size.M }}>
                        This is Bio, My name is Aniket Kumar
                    </TextView>
                </View>

            </Card >
        </View >
    )
}


const stylesSheet = (colors, size) => StyleSheet.create({
    container: {
        //   flex: 1,
        marginBottom: 10,
        marginTop: 6,
        maxHeight: 300
    },
    profileImg: {
        width: 100,
        height: 100,
        borderRadius: size.M,


    },
    imageAnInfo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: size.XL,
        marginVertical: size.M,
    },
    rightInfo: {
        padding: size.M,
        flex: 1,

    },
    followContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: size.X,
        alignItems: 'center',
    },
    postInfoAndBios: {
        marginHorizontal: size.M
    },
    postInfos: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: size.M
    },
    heading: {
        fontSize: size.M, color: colors.primaryText, fontWeight: 'bold', textAlign: 'center'
    },
    text: { textAlign: 'center', color: colors.secondaryText }

})



export default ProfileCard
