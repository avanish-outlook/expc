import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ShopRegistration from '../screens/ShopRegistration';
import ScreenConstants from '../constants/ScreenConstants';
import Dashboard from '../screens/Dashboard';
import ShopProfile from '../screens/ShopProfile';
import SplashScreen from '../screens/SplashScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name={ScreenConstants.SHOP_REGISTRATION} component={ShopRegistration} />
            <Stack.Screen options={{ headerShown: false }} name={ScreenConstants.SPLASH_SCREEN} component={SplashScreen} />

            <Stack.Screen name={ScreenConstants.Dashboard} component={Dashboard} />

            <Stack.Screen name={ScreenConstants.SHOP_PROFILE} component={ShopProfile} />

        </Stack.Navigator>
    )
}

export default AppStack

const styles = StyleSheet.create({})