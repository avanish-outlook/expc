import { FlatList, Image, ScrollView, View } from 'react-native'
import React, { useMemo } from 'react'
import { useTheme } from '@react-navigation/native';
import useSize from '../../hooks/useSize';
import stylesSheet from './styles';
import { useDispatch } from 'react-redux';
import { AppBar, Button, Card, Text, UiText } from '../../components';
import { AppBarLeft } from '../../components/AppBar';
import { FAB, IconButton } from 'react-native-paper';
import { WalletIcon } from '../../assets';
import ScreenRoutes from '../../constants/ScreenRoutes';
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
    const dispatch = useDispatch();

    let accounts = [
        {
            id: 0,
            name: 'Cash',
            desc: 'Cash',
            bankAccountNumber: '',
            type: 'general',
            initialAmount: 0,
            currency: 'INR',

        },
        {
            id: 1,
            name: 'Credit Card',
            desc: 'Credit Card',
            bankAccountNumber: '',
            type: 'general',
            initialAmount: 0,
            currency: 'INR',

        },
        {
            id: 2,
            name: 'Loan Account',
            desc: 'Credit Card',
            bankAccountNumber: '',
            type: 'general',
            initialAmount: 0,
            currency: 'INR',
            archived: true
        },
    ]



    return (
        <View style={{ flex: 1 }}>

            <FlatList
                ListHeaderComponent={<AppBar >
                    <AppBarLeft>
                        <IconButton icon={"arrow-left"} style={{ marginLeft: 0 }}
                            onPress={() => navigation.pop()} color={colors.primaryText} />
                        <UiText >Accounts</UiText>
                    </AppBarLeft>
                </AppBar>}
                data={accounts}

                renderItem={({ item, index }) => <Card style={{
                    margin: 4,
                    marginTop: 8,
                    marginBottom: 2,
                    padding: 8,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <Image source={WalletIcon} style={{ height: 48, width: 48 }} />
                    <View style={{ flex: 1 }}>
                        <UiText style={{ fontSize: size.M }}>{item.name}</UiText>
                        <UiText color="s">{item.desc}</UiText>
                    </View>

                    <IconButton icon={'circle-edit-outline'} color={colors.primaryText} />
                </Card>
                }

            />
            <FAB
                icon={"plus"}
                color='#ffffff'
                onPress={() => navigation.push(ScreenRoutes.NewAccountScreen.name)}
                style={{
                    position: 'absolute',
                    margin: 16,
                    right: 0,
                    bottom: 0,
                    backgroundColor: colors.primary
                }}
            />
        </View>

    )
}

export default Accounts

