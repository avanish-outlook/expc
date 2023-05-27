import { ScrollView, Text, View } from 'react-native'
import React, { useMemo } from 'react'
import { useRoute, useTheme } from '@react-navigation/native';
import useSize from '../../hooks/useSize';
import stylesSheet from './styles';
import { useDispatch } from 'react-redux';
import { Input, UiText } from '../../components';
import { AppBarLeft } from '../../components/AppBar';
import { IconButton } from 'react-native-paper';
import AppBar from './AppBar';





/**
 * 
 * 
 * 
 */
const EditAccount = ({ navigation }) => {
    const { colors } = useTheme()
    const { size } = useSize()
    const styles = useMemo(() => stylesSheet(colors, size), [colors]);
    const dispatch = useDispatch();
    const route = useRoute();
    console.log("item", route.params)
    return (

        <View style={{ flex: 1 }}>
            <AppBar navigation={navigation} title={"Edit Account"} />
            <ScrollView>
                <View>
                    <Input placeholder='Account name' />
                </View>
                <View>
                    <Input placeholder='Bank Account number' />
                </View>

            </ScrollView>
        </View>


    )
}

export default EditAccount

