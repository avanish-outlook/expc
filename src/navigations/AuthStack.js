import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Login';
import RegisterScreen from '../screens/Register';
import ScreenConstants from '../constants/ScreenConstants';


const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name={ScreenConstants.REGISTER} component={RegisterScreen} />
            <Stack.Screen options={{ headerShown: false }} name={ScreenConstants.LOGIN} component={LoginScreen} />
        </Stack.Navigator>
    )
}

export default AuthStack

const styles = StyleSheet.create({})