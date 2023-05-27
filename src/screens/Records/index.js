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
const Records = ({ navigation }) => {
    const { colors } = useTheme()
    const { size } = useSize()
    const styles = useMemo(() => stylesSheet(colors, size), [colors]);
    const dispatch = useDispatch();

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
        <View style={{ flex: 1 }}>

            <FlatList
                ListHeaderComponent={
                <View>
                <AppBar >
                    <AppBarLeft>
                        <IconButton icon={"arrow-left"} style={{ marginLeft: 0 }}
                            onPress={() => navigation.pop()} color={colors.primaryText} />
                        <UiText >RecordList</UiText>
                    </AppBarLeft>
                    
                </AppBar>
                <View style={{display:"flex",flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <View>
                    <Text style={styles.balance_record}>Today</Text>
                <Text  style={styles.balance_record} color="s">Balance : $185.00 </Text>
                        </View>
                        <View>
                    <Text style={styles.minusBal}>$ -42.00</Text>
                        </View>
              </View>
            </View>
            }

                data={records}
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
                    <View>
                        <Text style={{ color: 'red' }}>$ -42.00 </Text>
                        <Text color='s'>Today</Text>
                    </View>

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

export default Records

