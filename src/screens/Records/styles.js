import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const stylesSheet = (colors, size) => StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: size.M
    },
    balance_record: {
        marginLeft: 15,
        marginTop: 5
    },
    minusBal: {
        marginRight: 15
    }
})

export default stylesSheet;