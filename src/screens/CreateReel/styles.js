import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const stylesSheet = (colors, size) => StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: size.M
    },
    imagePlaceholder: {
        width: "100%",
        height: 300,
        resizeMode: "contain"
    },
    selectModeContainer: {
        padding: size.S,
        display: 'flex', alignItems: 'center', flexDirection: 'row', marginHorizontal: size.L,
        marginVertical: size.X, borderBottomColor: colors.border, borderBottomWidth: 1

    }
})

export default stylesSheet;