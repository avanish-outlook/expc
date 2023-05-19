
import { Image, StyleSheet, Text, View } from 'react-native';
export default styles = (colors, size) => StyleSheet.create({
    container: {
        // backgroundColor: 'yellow',

        flex: 1,
        paddingTop: size.M
        ,
        paddingHorizontal: size.L
    },
    profileHolder: {
        alignItems: 'center'
    },

    profileImg: {
        width: 150,
        height: 150,
        resizeMode: 'cover',
        borderRadius: 150,
        backgroundColor: colors.surface
    },
    usernamePlaceHolder: {
        //backgroundColor: 'red',
        alignItems: 'center',
        marginTop: 10
    },
    usernameText: {
        fontSize: 22,
        fontWeight: '500',
        color: colors.primaryText
    },
    namePlaceholder: {
        alignItems: 'center',
        marginTop: 10
    },
    fullname: {
        fontSize: 20,
        color: colors.secondaryText
    },

    followDisplayContainer: {
        backgroundColor: colors.surface,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 4
    },
    infoWrapper: {
        alignItems: 'center',
        marginTop: 5
    },
    numLabel: {
        fontSize: 18,
        color: colors.primaryText
    },
    infoLabel: {
        fontSize: 17,
        color: colors.secondaryText,
    }

});