import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/onboarding/LoginScreen';

import NotificationScreen from '../screens/onboarding/NotificationScreen';
import SubscriptionScreen from '../screens/onboarding/SubscriptionScreen';
import LocationScreen from '../screens/onboarding/LocationScreen';

import WelcomeScreen from '../screens/onboarding/WelcomeScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import JoinCreateHouseScreen from '../screens/onboarding/JoinCreateHouseScreen';
import JoinHouseScreen from '../screens/onboarding/JoinHouseScreen';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}} initialRouteName="Welcome">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name='Welcome' component={WelcomeScreen} />
      <Stack.Screen name='Location' component={LocationScreen} />
      <Stack.Screen name='Subscription' component={SubscriptionScreen} />
      <Stack.Screen name='Notification' component={NotificationScreen} />
      <Stack.Screen name='JoinCreateHouse' component={JoinCreateHouseScreen} />
      <Stack.Screen name='JoinHouse' component={JoinHouseScreen} />

      <Stack.Screen name="Root" component={BottomTabNavigator} />
      
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
