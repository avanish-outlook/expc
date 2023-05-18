import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Config from '../../../config'

const SplashScreen = () => {
  return (
    <View style={{display:'flex',flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:20,fontWeight:'500',color:'#000'}}>{Config.APP_NAME}</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})