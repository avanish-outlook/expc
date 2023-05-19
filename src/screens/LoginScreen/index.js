import { View, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import stylesSheet from './styles.js';
import { Button, Input } from '../../components';
import { Text } from 'react-native-paper';
import { ImgLogoLogin } from '../../assets/index.js';
import { useDispatch, useSelector } from 'react-redux';
import { AuthDispatcher } from '../../redux/dispatchers/AuthDispatchers.js';
import { LoginUserAsync } from '../../redux/middleware/AuthMiddleware.js';
import AsyncStorage, { AsyncStorageConstant } from '../../providers/AsyncStorage.js';
import { AuthSliceActions } from '../../redux/slice/AuthSlice.js';
import ScreenRoutes from '../../constants/ScreenRoutes.js';
import { useTheme } from '@react-navigation/native';
import useSize from '../../hooks/useSize.js';
import { useMemo } from 'react';

const LoginScreen = ({ navigation }) => {
  const loginInfo = useSelector(AuthDispatcher.selectLoginUser);
  const dispatch = useDispatch()
  const { colors } = useTheme()
  const { size } = useSize()
  const styles = useMemo(() => stylesSheet(colors, size), [colors]);

  const [form, setForm] = useState({
    username: '',
    password: '',

  });

  useEffect(() => {
    if (loginInfo.error?.status === 406) {
      alert("Username or password is wrong")
      return;
    }

    if (loginInfo.data) {
      storeLoginInfo()
    }
  }, [loginInfo])

  const storeLoginInfo = async () => {
    await AsyncStorage.storeObject(AsyncStorageConstant.AUTH, loginInfo.data.payload)
    dispatch(AuthSliceActions.setLogin(loginInfo.data.payload))
    navigation.replace(ScreenRoutes.MainScreen.name)
  }


  const handleInputChange = key => {
    return value => {
      setForm({ ...form, [key]: value });
    };
  };

  const handleLogin = () => {
    const d = dispatch(LoginUserAsync(form))
    return () => {
      d.clear()
    }
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
      <View style={styles.container}>
        <Image source={ImgLogoLogin} style={styles.imgLogo} />

        <Text
          variant="headlineMedium"
          style={{ fontWeight: '500', textAlign: 'center', marginVertical: 8, color: colors.primaryText }}>
          Welcome Back
        </Text>
        <Input
          value={form.username}
          label="Username or Email *"
          placeholder="Please enter username or Email Id"
          onChangeText={value => setForm({ ...form, username: value })}
        />
        <Input
          value={form.password}
          label="Password *"
          placeholder="Please enter password"
          onChangeText={value => setForm({ ...form, password: value })}
        />

        <Button
          style={{ marginTop: 8 }}
          icon="account"
          onPress={handleLogin}>
          Login
        </Button>

        <Text variant="bodyLarge" style={styles.alreadyAccount}>
          Create An Account ?
        </Text>
        <Button
          mode=""
          onPress={() => navigation.replace(ScreenRoutes.RegisterScreen.name)}>
          <Text variant="bodyLarge" style={{ color: colors.primaryText }}>Register Now</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
