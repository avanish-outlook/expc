import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const stylesSheet = (colors, size) => StyleSheet.create({
    container: {
        //   flex: 1,
        marginBottom: 10,
        marginTop: 6,
        maxHeight: 300
    },
    profileImg: {
        width: 100,
        height: 100,
        borderRadius: size.M,


    },
    imageAnInfo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: size.XL,
        marginVertical: size.M,
    },
    rightInfo: {
        padding: size.M,
        flex: 1,

    },
    followContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: size.X,
        alignItems: 'center',
    },
    postInfoAndBios: {
        marginHorizontal: size.M
    },
    postInfos: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: size.M
    },
    heading: {
        fontSize: size.M, color: colors.primaryText, fontWeight: 'bold', textAlign: 'center'
    },
    text: { textAlign: 'center', color: colors.secondaryText }

})

export default stylesSheet;