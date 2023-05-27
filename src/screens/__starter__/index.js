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
import useScreen from '../../hooks/useScreen';





/**
 * 
 * 
 * 
 */
const CreateAccount = ({ navigation }) => {

    const { colors, dispatch, isDark, navigation, size, themeColor } = useScreen()
    const styles = useMemo(() => stylesSheet(colors, size), [colors]);


    return (

        <View style={{ flex: 1 }}>
            <AppBar navigation={navigation} title={"New Page"} />
            <ScrollView>

            </ScrollView>
        </View>


    )
}

export default CreateAccount

