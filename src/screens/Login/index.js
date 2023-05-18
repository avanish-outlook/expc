import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import useAppTheme from '../../hooks/useAppTheme'
import ScreenConstants from '../../constants/ScreenConstants'

const LoginScreen = ({ navigation }) => {
    const { theme } = useAppTheme()
    return (
        <View style={styles.container}>
            <Text style={styles.head}>LOGIN</Text>
            <Input placeholder="Enter Username" />
            <Input placeholder="Enter Password" />
            <Button title="Login" style={{ marginTop: 10 }} />

            <View style={{ marginTop: 10 }}>
                <Text style={{ textAlign: 'center' }}>Create an Account?</Text>
                <Button
                    onPress={() => { navigation.replace(ScreenConstants.REGISTER); }}
                    title={"Register Now"} style={{ backgroundColor: 'transparent', marginTop: 0 }}
                    textColor={theme.primaryText}
                />
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 24,
        justifyContent: 'center',
    },
    head: {
        color: 'black',
        fontWeight: "500",
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 40
    }
})