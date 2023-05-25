import React from 'react';
import HomeTab, { ScreenHomeTab } from './components/HomeTab';
import ProfileTab, { ScreenProfileTab } from './components/ProfileTab';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MiniTab, { ScreenMiniTab } from './components/ReportTab';
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeTabAppBar from './components/HomeAppBar';
import { useTheme } from '@react-navigation/native';



const Tab = createBottomTabNavigator();

const TABSCREEN = {
  Home: ScreenHomeTab,
  MINI: ScreenMiniTab,
  Profile: ScreenProfileTab
}

const MainScreen = () => {

  const { colors } = useTheme()


  return (
    <Tab.Navigator initialRouteName="HomeTab"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case TABSCREEN.Home:
              iconName = focused ? "home" : "home-outline";
              break;
            case TABSCREEN.MINI:
              iconName = focused ? "analytics" : "analytics-outline";
              break;
            case TABSCREEN.Profile:
              iconName = focused ? "person" : "person-outline";
              break;
            default:
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primary,
      })} >
      <Tab.Screen options={{ headerShown: false, header: (props) => <HomeTabAppBar  {...props} /> }}
        name={ScreenHomeTab} component={HomeTab} />
      <Tab.Screen name={ScreenMiniTab} component={MiniTab} />
      <Tab.Screen options={{ headerShown: false, }} name={ScreenProfileTab} component={ProfileTab} />
    </Tab.Navigator>
  );
};




export default MainScreen;
