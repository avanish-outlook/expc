import { Image, Text, View, TouchableOpacity, FlatList, ScrollView, Dimensions } from 'react-native';
import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { ImgLogoProfile } from '../../../../assets';
import styles from './styles';
import useSize from '../../../../hooks/useSize';
import useAuth from '../../../../hooks/useAuth';
import useFetchProfile from '../../../../hooks/useFetchProfile';
import { useEffect } from 'react';
import { PhotoUrl } from '../../../../utils/helpers';
import ProfileCardTab from '../../../../components/ProfileCardTab';
import Ionic from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';
import TextView from '../../../../components/TextView';
import { Card } from 'react-native-paper';
import ProfileButtonCard from '../../../../components/ProfileButtonCard';
import ScreenRoutes from '../../../../constants/ScreenRoutes';
import PostsFlat from './PostsFlat';
import ReelsFlat from './ReelsFlat';
import SavedFlat from './SavedFlat';

export const ScreenProfileTab = "ScreenProfileTab";
const ProfileTab = ({ navigation }) => {
    const { colors } = useTheme();
    const { size } = useSize()
    const style = useMemo(() => styles(colors, size), [colors]);
    const [tabIndex, setTabIndex] = useState(0);
    const { user } = useAuth();

    const { profile, fetchProfile } = useFetchProfile();
    useEffect(() => {
        fetchProfile(user.userId)
    }, [])

    const width = Dimensions.get('window').width;
    const cardHeight = (width / 2) - size.L - size.M - size.M

    const handleTabIndexChange = (index) => {
        setTabIndex(index)
    }




    const handlePostClick = () => {
        navigation.navigate(ScreenRoutes.ProfilePostsScreen.name, { profile })
    }


    return (
        <>
            {
                profile &&
                <View style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>

                    {
                        tabIndex === 0 && <PostsFlat
                            profileInfo={profile}
                            tabIndex={0}
                            setTabIndex={setTabIndex} />
                    }

                    {
                        tabIndex === 1 && <ReelsFlat
                            profileInfo={profile}
                            tabIndex={1}
                            setTabIndex={setTabIndex} />
                    }

                    {
                        tabIndex === 2 && <SavedFlat
                            profileInfo={profile}
                            tabIndex={2}
                            setTabIndex={setTabIndex} />
                    }

                </View>
            }

        </>

    );
};

export default ProfileTab;

