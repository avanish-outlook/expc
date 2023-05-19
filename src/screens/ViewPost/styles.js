import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const stylesSheet = (colors, size) => StyleSheet.create({
    container: {
        marginVertical: size.S,
        borderBottomColor: colors.secondaryText,
        borderBottomWidth: .5
    },
    header: {
        height: size.XXL,
        backgroundColor: colors.card,
        paddingHorizontal: size.S,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',


    },
    profileImage: {
        width: 40,
        height: 40
    }

})

export default stylesSheet;