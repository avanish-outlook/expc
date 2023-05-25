import { View, Text, FlatList } from 'react-native'
import React, { useMemo } from 'react'
import stylesSheet from './styles';
import { useTheme } from '@react-navigation/native';
import { Button } from '../../../../components';


const AccountList = () => {
    const { colors, size } = useTheme()
    const styles = useMemo(() => stylesSheet(colors, size), [colors]);

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
        <View>
            <View style={{ borderWidth: 1, marginTop: size.M, padding: size.XS, borderColor: colors.border, borderRadius: size.X }}>

                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.accountTitle}>Accounts</Text>
                    <Button icon={"cog"} mode='text' dark={false} >Edit</Button>

                </View>
                <FlatList
                    data={list}
                    renderItem={({ item, index }) => {
                        return <View style={{
                            display: 'flex', alignItems: 'center', flex: 1, borderWidth: 1,
                            borderColor: colors.border, margin: size.XS, borderRadius: size.S
                        }}>

                            <Text> {item.name}</Text>
                            <Text>{item.currency} {item.amount}</Text>
                        </View>
                    }}
                    numColumns={2}
                />
            </View>

        </View>
    )
}

export default AccountList