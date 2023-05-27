import { View } from 'react-native'
import React, { useMemo } from 'react'
import stylesSheet from './styles'
import TextView from '../TextView'
import useComponent from '../../hooks/useComponent'
import currency from '../../utils/currency'
import UiText from '../UiText'
import DropDownPicker from 'react-native-dropdown-picker'
import { useState } from 'react'
import { useEffect } from 'react'
import { TouchableRipple } from 'react-native-paper'

const CurrencyPicker = ({ selectedCurrency, setSelectedCurrency }) => {
    const { colors, dispatch, navigation, size, themeColor, isDark } = useComponent()
    const styles = useMemo(() => stylesSheet(colors, size), [colors]);

    const [open, setOpen] = useState(false);
    const [currencies, setCurrencies] = useState([...currency]);


    return (
        <View >
            <UiText color="s" style={{ marginTop: size.X, marginLeft: size.XS }}>Type</UiText>
            <DropDownPicker
                modalTitle='Select Currency'
                placeholder={`${selectedCurrency.symbol} - ${selectedCurrency.name_plural}`}
                style={{
                    borderColor: colors.border, borderWidth: 2,
                    marginTop: size.S, padding: size.M, backgroundColor: colors.surface
                }}

                searchPlaceholder='Search Currency'

                listMode='MODAL'
                itemKey='name'

                renderListItem={({ item, onPress, TickIconComponent, isSelected }) => <TouchableRipple
                    onPress={() => { onPress(item) }}>

                    <View style={{ display: 'flex', flexDirection: 'row', padding: size.SM, borderWidth: 1, }}>
                        <UiText style={{ minWidth: 100 }}>{item.symbol}</UiText>
                        <UiText style={{ flex: 1 }}>{item.name_plural}</UiText>
                        <UiText style={{ minWidth: 100, }}>{item.code}</UiText>
                        {
                            selectedCurrency.code === item.code && <TickIconComponent />
                        }

                    </View>
                </TouchableRipple>
                }
                flatListProps={{ initialNumToRender: 50 }}
                open={open}

                setOpen={setOpen}
                //value={selectedCurrency}
                onSelectItem={(item) => {
                    setSelectedCurrency(item)
                }}
                //setValue={setSelectedCurrency}
                items={currencies}

                setItems={setCurrencies}
                theme={isDark ? 'DARK' : 'LIGHT'}
                placeholderStyle={{}}
            />

        </View>
    )
}

export default CurrencyPicker
