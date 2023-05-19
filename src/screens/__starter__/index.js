import { ScrollView, Text, View } from 'react-native'
import React, { useMemo } from 'react'
import { useTheme } from '@react-navigation/native';
import useSize from '../../hooks/useSize';
import stylesSheet from './styles';
import { useDispatch } from 'react-redux';
export const ScreenCreatePost = "ScreenCreatePost";

/**
 * 
 * 
 * 
 */
const ViewPost = ({ navigation }) => {
    const { colors } = useTheme()
    const { size } = useSize()
    const styles = useMemo(() => stylesSheet(colors, size), [colors]);
    const dispatch = useDispatch()
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text>Helloorld</Text>
            </View>

        </ScrollView>
    )
}

export default ViewPost

