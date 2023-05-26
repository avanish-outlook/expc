import { ScrollView, Text, View } from 'react-native'
import React, { useMemo } from 'react'
import { useTheme } from '@react-navigation/native';
import useSize from '../../hooks/useSize';
import stylesSheet from './styles';
import { useDispatch } from 'react-redux';
import { UiText } from '../../components';
import { AppBarLeft } from '../../components/AppBar';
import { IconButton } from 'react-native-paper';
import AppBar from './AppBar';





/**
 * 
 * 
 * 
 */
const CreateAccount = ({ navigation }) => {
    const { colors } = useTheme()
    const { size } = useSize()
    const styles = useMemo(() => stylesSheet(colors, size), [colors]);
    const dispatch = useDispatch()
    return (

        <View style={{ flex: 1 }}>
            <AppBar navigation={navigation} title={"New Page"} />
            <ScrollView>

            </ScrollView>
        </View>


    )
}

export default CreateAccount

