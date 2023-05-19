import { View, TouchableOpacity } from 'react-native'
import { useTheme } from '@react-navigation/native'
import ProfileCard from './ProfileCard';
import Ionic from 'react-native-vector-icons/Ionicons';
import useSize from '../../../../hooks/useSize';

const ProfileInfo = ({ profileInfo, handleTabIndexChange, tabIndex }) => {
    const { colors } = useTheme();
    const { size } = useSize();
    return (
        <View>
            <ProfileCard profile={profileInfo} />
            <View style={{
                flex: 1, marginTop: size.MM, display: 'flex',
                flexDirection: 'row', justifyContent: 'center', backgroundColor: colors.card,
                alignItems: 'center',
                borderBottomColor: colors.border, borderBottomWidth: .8,
                padding: size.S
            }}>
                <TouchableOpacity onPress={() => { handleTabIndexChange(0) }}
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >

                    <Ionic name={"ios-apps-sharp"} color={tabIndex === 0 ? colors.primary : colors.secondaryText} size={22} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { handleTabIndexChange(1) }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Ionic name={"ios-play-circle-outline"} onPress={() => { handleTabIndexChange(1) }} color={tabIndex === 1 ? colors.primary : colors.secondaryText} size={22} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { handleTabIndexChange(2) }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Ionic name={"bookmark-outline"} onPress={() => { handleTabIndexChange(2) }} color={tabIndex === 2 ? colors.primary : colors.secondaryText} size={22} />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default ProfileInfo