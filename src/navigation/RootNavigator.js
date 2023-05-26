import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import { AuthSliceActions, AuthSliceSelectors } from '../redux/slice/AuthSlice.js';
import { useEffect } from 'react';
import AsyncStorage, { AsyncStorageConstant } from '../providers/AsyncStorage.js';
import { AppSettingSliceSelectors } from '../redux/slice/AppSettingsSlice.js';
import Theme from '../theme/theme.js';

import ScreenRoutes from '../constants/ScreenRoutes.js';
import { Accounts, CreatePost, CreateReel, EditProfileScreen, LoginScreen, MainScreen, RegisterScreen, SplashScreen } from '../screens'
import ViewProfile from '../screens/ViewProfile/index.js';
import { ViewPost, ProfilePosts } from '../screens'
import { DarkTheme as PaperDark, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { getPaperTheme } from '../theme/paperTheme.js';

const Stack = createNativeStackNavigator();



const RootNavigator = () => {
  const LoggedInUser = useSelector(AuthSliceSelectors.selectUserInfo);
  const themeColor = useSelector(AppSettingSliceSelectors.selectTheme);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch()
  const [appTheme, setAppTheme] = useState(Theme.Light)


  useEffect(() => {
    if (themeColor === 'light') {
      setAppTheme(Theme.Light)
    } else {
      setAppTheme(Theme.Dark)
    }
  }, [themeColor])


  useEffect(() => {
    (async () => {
      const user = await AsyncStorage.getObject(AsyncStorageConstant.AUTH);
      setIsLoading(false)
      if (user) {
        dispatch(AuthSliceActions.setLogin(user))
      }

    })()
  }, [])



  return (
    <PaperProvider >

      <NavigationContainer theme={appTheme}>
        {
          isLoading ? <Text style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>Loading... </Text> : LoggedInUser ? <MainStack /> : <AuthStack />
        }
      </NavigationContainer>
    </PaperProvider>

  );
};

const AuStack = createNativeStackNavigator()

function AuthStack() {

  return <Stack.Navigator
    initialRouteName={ScreenRoutes.MainScreen.name}
    screenOptions={{ headerShown: false }}>
    <AuStack.Screen name={ScreenRoutes.LoginScreen.name} component={LoginScreen} />
    <AuStack.Screen name={ScreenRoutes.RegisterScreen.name} component={RegisterScreen} />
  </Stack.Navigator>
}


function MainStack() {

  return <Stack.Navigator
    initialRouteName={ScreenRoutes.MainScreen.name}
    screenOptions={{ headerShown: false }}>

    <Stack.Screen name={ScreenRoutes.SplashScreen.name} component={SplashScreen} />
    <Stack.Screen
      name={ScreenRoutes.MainScreen.name}
      options={{ headerShown: false }}
      component={MainScreen}
    />

    <Stack.Screen
      name={ScreenRoutes.CreatePost.name}
      options={{ headerShown: true, title: 'Publish Post' }}
      component={CreatePost}
    />

    <Stack.Screen
      name={ScreenRoutes.CreateReelScreen.name}
      options={{ headerShown: true, title: 'Publish Reel' }}
      component={CreateReel}
    />

    <Stack.Screen
      name={ScreenRoutes.EditProfileScreen.name}
      options={{ headerShown: false, title: 'Edit Profile' }}
      component={EditProfileScreen}
    />

    <Stack.Screen
      name={ScreenRoutes.ViewProfileScreen.name}
      options={{ headerShown: false, title: 'View Profile' }}
      component={ViewProfile}
    />

    <Stack.Screen
      name={ScreenRoutes.ViewPostScreen.name}
      options={{ headerShown: false, title: 'View Post' }}
      component={ViewPost}
    />


    <Stack.Screen
      name={ScreenRoutes.ProfilePostsScreen.name}
      options={{ headerShown: false, title: 'Profile Posts' }}
      component={ProfilePosts}
    />

    <Stack.Screen
      name={ScreenRoutes.AccountsScreen.name}
      options={{ headerShown: false, title: 'Accounts' }}
      component={Accounts}
    />

  </Stack.Navigator>

}

export default RootNavigator;
