import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useTheme } from '@react-navigation/native';
import { ImgPostPlaceholder } from '../../assets';
import { TextInput } from 'react-native-paper';
import { Button, Input } from '../../components';
import useSize from '../../hooks/useSize';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import RBSheet from 'react-native-raw-bottom-sheet';
import { useRef } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import stylesSheet from './styles';
import { useDispatch } from 'react-redux';
import { CreateReelsAsync } from '../../redux/middleware/ReelsMiddleware';
export const ScreenCreatePost = "ScreenCreatePost";

/**
 * 
 * @param {*} param0 
 * @returns 
 */
const CreateReel = ({ navigation }) => {
    const { colors } = useTheme()
    const { size } = useSize()
    const refRBSheet = useRef();
    const [form, setForm] = useState({
        desc: '',
        tags: '',
    })



    const formData = new FormData()

    const [reelVideo, setreelVideo] = useState()

    const styles = useMemo(() => stylesSheet(colors, size), [colors]);

    const dispatch = useDispatch()

    const handlePhotoPress = async () => {
        refRBSheet?.current.open()
    }

    const handleGallerySelect = async () => {
        refRBSheet.current.close()

        try {
            const result = await launchImageLibrary({ mediaType: 'video', selectionLimit: 1 });
            if (result.assets?.length > 0) {
                setreelVideo(result.assets[0])
                return;
            }
            setreelVideo(null)
        } catch (error) {
            console.log(error)
        }
    }

    const handleCameraSelecr = async () => {
        refRBSheet.current.close()
        try {
            const result = await launchCamera({ mediaType: 'video', })
            if (result.assets?.length > 0) {
                setreelVideo(result.assets[0])
                return;
            }
            setreelVideo(null)
        } catch (error) {
            console.log({ error })
        }
    }

    const handleInputChange = (key) => {

        return function (value) {

            setForm({ ...form, [key]: value })
        }
    }

    function handlePostSubmit() {
        if (!reelVideo) {
            alert('reelVideo is required..');
            return;
        }
        formData.append('video', {
            ...reelVideo,
            uri: Platform.OS === 'android' ? reelVideo.uri : reelVideo.uri.replace('file://', ''),
            name: `newreelVideo+${reelVideo.fileName}`,

        });


        formData.append('tags', form.tags);
        formData.append('desc', form.desc)

        dispatch(CreateReelsAsync(formData))

        navigation.pop()
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity onPress={handlePhotoPress}>
                    <Image source={reelVideo ? { uri: reelVideo.uri } : ImgPostPlaceholder} style={styles.imagePlaceholder} />
                </TouchableOpacity>
                <Input label="Description" onChangeText={handleInputChange('desc')} numberOfLines={3} multiline={true} placeholder={"Write something..."} />
                <Input label="Tags" multiline={true} onChangeText={handleInputChange('tags')} placeholder={"Tags..."} />
                <Button
                    style={{ marginTop: 8 }}
                    icon="plus-box"
                    onPress={handlePostSubmit}
                >
                    Publish
                </Button>
                <RBSheet

                    ref={refRBSheet}
                    closeOnDragDown={true}
                    closeOnPressMask={false}

                    height={200}

                    customStyles={{

                        wrapper: {
                            // backgroundColor: "transparent"
                        },
                        draggableIcon: {
                            backgroundColor: "#000"
                        }
                    }}
                >
                    <TouchableOpacity onPress={handleCameraSelecr}>
                        <View style={styles.selectModeContainer}>
                            <Ionicons name='camera' size={size.XL} />
                            <Text style={{ fontSize: size.L, fontWeight: '500', marginLeft: size.S }}>Camera</Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={handleGallerySelect}>
                        <View style={styles.selectModeContainer}>
                            <Ionicons name='albums' size={size.XL} />
                            <Text style={{ fontSize: size.L, fontWeight: '500', marginLeft: size.S }}>gallery</Text>
                        </View>
                    </TouchableOpacity>

                </RBSheet>
            </View>

        </ScrollView>
    )
}

export default CreateReel

