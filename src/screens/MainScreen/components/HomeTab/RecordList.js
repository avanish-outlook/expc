import { View, Text, FlatList, Image } from 'react-native'
import React, { useMemo } from 'react'
import stylesSheet from './styles';
import { useNavigation, useTheme } from '@react-navigation/native';
import { AppBar, Button, Card, UiText } from '../../../../components';
import ScreenRoutes from '../../../../constants/ScreenRoutes';
import { AppBarLeft } from '../../../../components/AppBar';
import { FAB, IconButton } from 'react-native-paper';
import { DotsIcon, WalletIcon } from '../../../../assets';


const RecordList = () => {
    const { colors, size } = useTheme()
    const styles = useMemo(() => stylesSheet(colors, size), [colors]);
    const navigation = useNavigation()

    let records = [
        {
            id: 0,
            name: 'Housing',
            desc: 'Cash',
            bankAccountNumber: '',
            type: 'general',
            initialAmount: 0,
            currency: 'INR',
        }
    ]


    return (
        <View >
            <Card style={{ marginTop: size.S }}>
                <View style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                    <View>
                        <Text style={styles.accountTitle}> Last records overview</Text>
                        <View>
                            <Text style={styles.timelabel} >Last 30 days</Text>
                        </View>
                    </View>

                    <View>
                        <Image source={DotsIcon} style={{ height: 35, width: 35 }} />
                    </View>

                </View>


                <View style={{ flex: 1 }}>
                    {
                        records && records.map((item, index) => (
                            <Card style={{
                                margin: 0,
                                marginTop: 8,
                                marginBottom: 2,
                                padding: 8,
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}
                                key={index}
                            >
                                <Image source={WalletIcon} style={{ height: 48, width: 48 }} />
                                <View style={{ flex: 1 }}>
                                    <UiText style={{ fontSize: size.M }}>{item.name}</UiText>
                                    <UiText color="s">{item.desc}</UiText>
                                </View>
                                <View>
                                    <Text style={{ color: 'red' }}>$ -42.00 </Text>
                                    <UiText color='s'>Today</UiText>
                                </View>
                            </Card>

                        ))
                    }



                </View>

                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginHorizontal: size.S }}>
                    <Button icon={"cog"} mode='outlined' onPress={() => navigation.navigate(ScreenRoutes.RecordScreen.name)} >view more</Button>
                </View>
            </Card>

        </View>
    )
}

export default RecordList