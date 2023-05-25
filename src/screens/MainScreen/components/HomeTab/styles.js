import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const stylesSheet = (colors, size) => StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: size.M
    },
    accountTitle: {
        fontSize: 18,
        marginTop: size.S,
        fontWeight: "500",
        color: colors.primaryText,
        flex: 1
    }
})

export default stylesSheet;