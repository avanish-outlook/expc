import { View, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import useSize from '../../hooks/useSize'
import { useTheme } from '@react-navigation/native'
import { ImgLogoProfile } from '../../assets'
import styles from './styles'
import { useMemo } from 'react'
import ImagePicker from 'react-native-image-crop-picker';
import config from '../../utils/config'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UploadProfilePicAsync } from '../../redux/middleware/ProfileMiddleware'
import { ProfileSliceSelectors } from '../../redux/slice/ProfileSlice'
import { useEffect } from 'react'
import { axiosInstance, axiosPrivateInstance } from '../../utils/axiosConfig'
import ApiConstants from '../../constants/ApiConstants'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const UploadProfilePic = ({ profile }) => {
    const { colors } = useTheme()
    const { size } = useSize()
    const style = useMemo(() => styles(colors, size), [colors]);
    const formdata = new FormData();
    const [profilePic, setProfilePic] = useState((profile && profile.profilePic !== '')
        ? { uri: config.BACKEND_HOST_URL + profile.profilePic } : ImgLogoProfile);

    const dispatch = useDispatch()
    const uploadProfileState = useSelector(ProfileSliceSelectors.selectUploadProfilePicState);

    const [ImageForUpload, setImageForUpload] = useState(null);

    const handleImageClick = async () => {

        try {
            const image = await ImagePicker.openPicker({
                width: 512,
                height: 512,
                cropping: true,
                mediaType: 'photo'
            });

            var fileExt = image.path.split('.').pop();

            formdata.append('image', {
                uri: image.path,
                type: image.mime,
                name: `pickedImage.${fileExt}`
            });

            setProfilePic({ uri: image.path })

            formdata.append('s', 'ss')
            setTimeout(() => {
                dispatch(UploadProfilePicAsync(formdata))
            }, 3000);

        } catch (error) {
            console.log("image picker error", error)
            alert('Please give Camera/Gallery Permission first');
            setProfilePic(ImgLogoProfile)
        }

    }
    return (
        <View style={style.profileHolder}>
            <TouchableOpacity onPress={handleImageClick}>
                <Image source={profilePic} style={style.profileImg} />
            </TouchableOpacity>
        </View>
    )
}

export default UploadProfilePic
