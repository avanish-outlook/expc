import { View, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import stylesSheet from './styles.js';
import { Button, Input } from '../../components';
import { Text } from 'react-native-paper';
import { ImgLogoRegister } from '../../assets/index.js';
import screens from '../../constants/ScreenRoutes.js';
import { useTheme } from '@react-navigation/native';
import useSize from '../../hooks/useSize.js';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RegisterUserAsync } from '../../redux/middleware/AuthMiddleware.js';
import AuthSlice, { AuthSliceActions, AuthSliceSelectors } from '../../redux/slice/AuthSlice.js';
import { useEffect } from 'react';
import AsyncStorage, { AsyncStorageConstant } from '../../providers/AsyncStorage.js';
import ScreenRoutes from '../../constants/ScreenRoutes.js';



const RegisterScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    username: '',
    password: '',
    email: '',
  });

  const registerUserInfo = useSelector(AuthSliceSelectors.selectRegisterUserInfo);
  const { colors } = useTheme()
  const { size } = useSize()
  const styles = useMemo(() => stylesSheet(colors, size), [colors]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (registerUserInfo.error?.status === 406) {
      setError(registerUserInfo.error.data.payload)
      return
    }
    if (registerUserInfo.data) {
      //  setError(registerUserInfo.error.data.payload)
      storeLoginInfo(registerUserInfo.data.payload)
    }

    console.log("registerUserInfo", registerUserInfo)
  }, [registerUserInfo])

  const storeLoginInfo = async (data) => {
    await AsyncStorage.storeObject(AsyncStorageConstant.AUTH, data)
    dispatch(AuthSliceActions.setLogin(data))
    navigation.replace(ScreenRoutes.MainScreen.name);
    dispatch(AuthSliceActions.resetRegisterUserState())
  }

  const handleInputChange = key => {
    return value => {
      setForm({ ...form, [key]: value });
    };
  };

  const handleRegistration = () => {
    setError(null)
    const d = dispatch(RegisterUserAsync(form))

    return () => {
      d.clear()
    }
  }



  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
      <View style={styles.container}>
        <Image source={ImgLogoRegister} style={styles.imgLogo} />

        <Text
          variant="headlineMedium"
          style={{ fontWeight: '500', textAlign: 'center', marginVertical: 8, color: colors.primaryText }}>
          Create An Account
        </Text>

        <Input
          error={error && error.username?.msg}
          value={form.username}
          label="Username *"
          placeholder="Please enter username"
          onChangeText={value => setForm({ ...form, username: value })}
          style={{
            color: colors.secondaryText
          }}
        />

        {
          error && error.username?.msg && <Text style={{ color: colors.error }}>{error.username?.msg}</Text>
        }

        <Input
          error={error && error.email?.msg}
          value={form.email}
          label="Email *"
          placeholder="Please enter email"
          onChangeText={value => setForm({ ...form, email: value })}
        />
        {
          error && error.email?.msg && <Text style={{ color: colors.error }}>{error.email?.msg}</Text>
        }

        <Input
          error={error && error.password?.msg}
          value={form.password}
          label="Password *"
          placeholder="Please enter password"
          onChangeText={value => setForm({ ...form, password: value })}
        />
        {
          error && error.password?.msg && <Text style={{ color: colors.error }}>{error.password?.msg}</Text>
        }

        <Button style={{ marginTop: 8 }} icon="account" onPress={handleRegistration}>
          Create Account
        </Button>

        <Text variant="bodyLarge" style={styles.alreadyAccount}>
          Already have an Account ?
        </Text>
        <Button mode="" onPress={() => navigation.replace(screens.LoginScreen.name)}>
          <Text style={{ color: colors.primaryText }} variant="bodyLarge">Login</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;
