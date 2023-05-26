import { FlatList, ScrollView, View } from 'react-native'
import React, { useMemo } from 'react'
import { useTheme } from '@react-navigation/native';
import useSize from '../../hooks/useSize';
import stylesSheet from './styles';
import { useDispatch } from 'react-redux';
import { AppBar, Button, Text, UiText } from '../../components';
import { AppBarLeft } from '../../components/AppBar';
import { IconButton } from 'react-native-paper';
export const ScreenCreatePost = "ScreenCreatePost";

/**
 * 
 * 
 * 
 */
const Accounts = ({ navigation }) => {
    const { colors } = useTheme()
    const { size } = useSize()
    const styles = useMemo(() => stylesSheet(colors, size), [colors]);
    const dispatch = useDispatch()
    return (
        <FlatList
            ListHeaderComponent={<AppBar>
                <AppBarLeft>
                    <IconButton icon={"arrow-left"} onPress={() => navigation.pop()} />
                    <UiText >Accounts</UiText>
                </AppBarLeft>
            </AppBar>}
            data={[1, 2, 3]}

            renderItem={({ item, index }) => <Text>He</Text>}
        />
    )
}

export default Accounts

