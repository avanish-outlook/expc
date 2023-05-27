import { ScrollView, View } from 'react-native'
import React, { useMemo } from 'react'
import stylesSheet from './styles';
import { CategoryPicker, Input } from '../../components';
import AppBar from './AppBar';

import { useState } from 'react';
import CurrencyPicker from '../../components/CurrencyPicker';
import useScreen from '../../hooks/useScreen';
import currency from '../../utils/currency';
/**
 * 
 * 
 * 
 */
const CreateAccount = () => {
    const { colors, size, dispatch, isDark, themeColor, navigation } = useScreen()
    const styles = useMemo(() => stylesSheet(colors, size), [colors]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedCurrency, setSelectedCurrency] = useState(currency[0]);

    return (

        <View style={{ flex: 1 }}>
            <AppBar navigation={navigation} title={"New Account"} />
            <ScrollView>
                <View style={{ marginHorizontal: size.M, marginTop: size.M }}>
                    <Input placeholder='Account name' label={'Account name'} />
                    <Input placeholder='Bank Account Number (optional)' label={'Bank account number'} />
                    <Input placeholder='Initial Amount' label={'Initial Amount'} value='0' />
                    <CategoryPicker selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                    <CurrencyPicker selectedCurrency={selectedCurrency} setSelectedCurrency={setSelectedCurrency} />
                </View>

            </ScrollView>
        </View>


    )
}

export default CreateAccount

