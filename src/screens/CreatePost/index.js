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
import { CreatePostAsync } from '../../redux/middleware/PostsMiddleware';
export const ScreenCreatePost = "ScreenCreatePost";

const CreatePost = ({ navigation }) => {
    const { colors } = useTheme()
    const { size } = useSize()
    const refRBSheet = useRef();
    const [form, setForm] = useState({
        desc: '',
        tags: '',
    })



    const formData = new FormData()

    const [image, setImage] = useState()

    const styles = useMemo(() => stylesSheet(colors, size), [colors]);

    const dispatch = useDispatch()

    const handlePhotoPress = async () => {
        refRBSheet?.current.open()
    }

    const handleGallerySelect = async () => {
        refRBSheet.current.close()

        try {
            const result = await launchImageLibrary({ mediaType: 'photo', selectionLimit: 1 });
            if (result.assets?.length > 0) {
                setImage(result.assets[0])
                return;
            }
            setImage(null)
        } catch (error) {
            console.log(error)
        }
    }

    const handleCameraSelecr = async () => {
        refRBSheet.current.close()
        try {
            const result = await launchCamera({ mediaType: 'photo', })
            if (result.assets?.length > 0) {
                setImage(result.assets[0])
                return;
            }
            console.log(result)
            setImage(null)
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
        if (!image) {
            alert('Image is required..');
            return;
        }
        formData.append('image', {
            ...image,
            uri: Platform.OS === 'android' ? image.uri : image.uri.replace('file://', ''),
            name: `newImage+${image.fileName}`,

        });


        formData.append('tags', form.tags);
        formData.append('desc', form.desc)

        dispatch(CreatePostAsync(formData))

        navigation.pop()
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity onPress={handlePhotoPress}>
                    <Image source={image ? { uri: image.uri } : ImgPostPlaceholder} style={styles.imagePlaceholder} />
                </TouchableOpacity>
                <Input label="Description" onChangeText={handleInputChange('desc')} numberOfLines={3} multiline={true} placeholder={"Write something..."} />
                <Input label="Tags" multiline={true} onChangeText={handleInputChange('tags')} placeholder={"Tags..."} />
                <Button
                    style={{ marginTop: 8 }}
                    icon="plus-box"
                    onPress={handlePostSubmit}
                >
                    Post
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

export default CreatePost

