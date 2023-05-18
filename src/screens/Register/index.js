import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import useAppTheme from '../../hooks/useAppTheme'
import ScreenConstants from '../../constants/ScreenConstants'
import { axiosInstance } from '../../constants/AxiosInstance'
import ApiConstant from '../../constants/ApiConstants'

const RegisterScreen = ({ navigation }) => {
    const { theme } = useAppTheme();
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        name: ''
    })

    const handleChangeText = (field, text) => {

        setForm((prev) => ({ ...prev, [field]: text }))
    }

    const handleSubmit = async () => {
        try {
            const result = await axiosInstance.post(ApiConstant.Register, form);
            console.log({ result })
        } catch (error) {

            console.log(JSON.stringify(error, 0, 2))
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.head}>REGISTER</Text>
            <Input placeholder="Enter Name" onChangeText={(text) => { handleChangeText('name', text) }} />
            <Input placeholder="Enter Username" onChangeText={(text) => { handleChangeText('username', text) }} />
            <Input placeholder="Enter your Email" onChangeText={(text) => { handleChangeText('email', text) }} />
            <Input placeholder="Enter Password" onChangeText={(text) => { handleChangeText('password', text) }} />
            <Button title="Register" style={{ marginTop: 10 }} onPress={handleSubmit} />
            <View style={{ marginTop: 10 }}>
                <Text style={{ textAlign: 'center' }}>Already have an Account?</Text>
                <Button
                    onPress={() => { navigation.replace(ScreenConstants.LOGIN); }}
                    title={"Login Now"} style={{ backgroundColor: 'transparent', marginTop: 0 }}
                    textColor={theme.primaryText}
                />
            </View>
        </View>
    )
}

export default RegisterScreen

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