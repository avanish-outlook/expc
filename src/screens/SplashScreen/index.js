import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import screens from '../../constants/ScreenRoutes.js';
import config from '../../utils/config.js';
import { styles } from './styles.js';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    launchMainScreen();
  }, []);

  function launchMainScreen() {
    setTimeout(() => {
      navigation.replace(screens.LoginScreen.name);
    }, 2000);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>{config.APP_NAME}</Text>
    </View>
  );
};

export default SplashScreen;
