import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import AppStack from './AppStack';
import AuthStack from './AuthStack';


const RootNavigation = () => {

  let isLoggedIn = false;


  return (
    <NavigationContainer>
      {
        isLoggedIn ? <AppStack /> : <AuthStack />
      }

    </NavigationContainer>
  )
}

export default RootNavigation

const styles = StyleSheet.create({})