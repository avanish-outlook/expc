import { View, Text } from 'react-native'
import React from 'react'
import { Input } from '../../components'
import useSize from '../../hooks/useSize'
import useFetch from '../../hooks/useFetch'
import useAddCommentOnPost from '../../hooks/useAddCommentOnPost'
import { Button } from 'react-native-paper'
import { useState } from 'react'
import { useEffect } from 'react'
import { useTheme } from '@react-navigation/native'

const BottomCommentInput = ({ post }) => {
    const { size } = useSize();
    const { colors } = useTheme()
    const [commentText, setCommentText] = useState('');
    const { AddComment, addCommentState } = useAddCommentOnPost()


    const handlePostButtonPress = () => {
        if (commentText.trim() === '') {
            return
        }

        AddComment({
            postId: post._id,
            comment: commentText
        })


    }

    useEffect(() => {
        console.log({ addCommentState })
        if (addCommentState.status === 'succeed') {
            setCommentText('')
        }

    }, [addCommentState.status === 'succeed'])


    return (
        <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
            <View style={{
                display: 'flex', flexDirection: 'row',
                justifyContent: 'center', alignItems: 'center'
            }}>
                <Input value={commentText} onChangeText={(t) => setCommentText(t)}
                    placeholder='Write a comment'
                    style={{ marginHorizontal: size.S, flex: 1, height: 40, }}

                    theme={{ colors: { text: colors.primaryText } }}
                />
                <Button mode='outlined' onPress={handlePostButtonPress}>Post</Button>
            </View>
        </View>
    )
}

export default BottomCommentInput