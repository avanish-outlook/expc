import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { UiText } from '../../components'
import DropDownPicker from 'react-native-dropdown-picker'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { AppSettingSliceSelectors } from '../../redux/slice/AppSettingsSlice'
import { useState } from 'react'
import { useTheme } from '@react-navigation/native'

const CategoryPicker = ({ selectedCategory, setSelectedCategory }) => {
    const [categoryOpen, setCategoryOpen] = useState(false);
    const themeColor = useSelector(AppSettingSliceSelectors.selectTheme);
    const { colors, size } = useTheme()
    const [categories, setCategories] = useState([
        { label: 'General', value: 1 },
        { label: 'Cash', value: 2 },
        { label: 'Current account', value: 3 },
        { label: 'Credit Card', value: 4 },
        { label: 'Saving account', value: 5 },
        { label: 'Bonus', value: 6 },
        { label: 'Insurence', value: 7 },
        { label: 'Investment', value: 8 },
        { label: 'Loan', value: 9 },
    ]);

    useEffect(() => {
        setSelectedCategory(categories[0])
    }, [])


    return (
        <View>
            <UiText color="s" style={{ marginTop: size.X, marginLeft: size.XS }}>Type</UiText>
            <DropDownPicker
                modalTitle='Select Category'
                placeholder={categories[0].label}
                style={{
                    borderColor: colors.border, borderWidth: 2,
                    marginTop: size.S, padding: size.M, backgroundColor: colors.surface
                }}
                listMode='MODAL'
                open={categoryOpen}
                setOpen={setCategoryOpen}
                value={selectedCategory}
                setValue={setSelectedCategory}
                items={categories}
                setItems={setCategories}
                theme={themeColor === 'dark' ? 'DARK' : 'LIGHT'}
                placeholderStyle={{}}
            />
        </View>
    )
}

export default CategoryPicker

const styles = StyleSheet.create({})