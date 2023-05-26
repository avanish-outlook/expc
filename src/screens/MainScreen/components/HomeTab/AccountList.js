import { View, Text, FlatList } from 'react-native'
import React, { useMemo } from 'react'
import stylesSheet from './styles';
import { useNavigation, useTheme } from '@react-navigation/native';
import { Button, Card } from '../../../../components';
import ScreenRoutes from '../../../../constants/ScreenRoutes';


const AccountList = () => {
    const { colors, size } = useTheme()
    const styles = useMemo(() => stylesSheet(colors, size), [colors]);
    const navigation = useNavigation()

    let list = [
        {
            id: 0,
            name: "Cash",
            currency: 'Rs.',
            amount: 80000
        },
        {
            id: 1,
            name: "Credit Card",
            currency: 'Rs.',
            amount: 30000
        },
        {
            id: 2,
            name: "Bank Card",
            currency: 'Rs.',
            amount: 30000
        }
    ]

    return (
        <View >
            <Card style={{ marginTop: size.S }}>

                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginHorizontal: size.S }}>
                    <Text style={styles.accountTitle}>Accounts</Text>
                    <Button icon={"cog"} mode='outlined' onPress={() => navigation.navigate(ScreenRoutes.AccountsScreen.name)} >Edit</Button>
                </View>


                {/* <FlatList
                    data={list}
                    renderItem={({ item, index }) => {
                        return <View style={{
                            display: 'flex', alignItems: 'center', flex: 1, borderWidth: 1,
                            borderColor: colors.border, margin: size.XS, borderRadius: size.S,
                            padding: 4
                        }}>
                            <Text style={{ color: colors.primaryText, fontSize: size.M, fontWeight: '500' }}> {item.name}</Text>
                            <Text style={{ color: colors.primaryText, fontSize: size.M }}>{item.currency} {item.amount}</Text>
                        </View>
                    }}
                    numColumns={2}
                /> */}
            </Card>

        </View>
    )
}

export default AccountList