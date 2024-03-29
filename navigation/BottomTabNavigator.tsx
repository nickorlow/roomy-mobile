import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabTwoScreen from '../screens/TabTwoScreen';
import HomeScreen from '../screens/HomeScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList, HomeParamList, ChoreParamList, GroceryParamList, RulesParamList } from '../types';
import ChoresScreen from '../screens/ChoresScreen';
import GroceryScreen from '../screens/GroceryScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import RulesScreen from '../screens/RulesScreen';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: "linear-gradient(0deg, rgba(255,150,51,1) 0%, rgba(255,128,5,0.4) 100%)"}}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color}/>,
        }}

      />
      <BottomTab.Screen
        name="Chores"
        component={ChoreNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="checkbox" color={color} />,
        }}
      />
        <BottomTab.Screen
        name="Groceries"
        component={GroceryNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="cart" color={color} />,
        }}
      />
    <BottomTab.Screen
        name="Rules"
        component={RulesNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="document-text" color={color} />,
        }}
      />

<BottomTab.Screen
        name="Settings"
        component={SettingNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="settings" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabOneStack.Navigator>
  );
}


const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Home', headerShown: false}}
      />
    </TabOneStack.Navigator>
  );
}

const ChoreStack = createStackNavigator<ChoreParamList>();

function ChoreNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={ChoresScreen}
        options={{ headerTitle: 'Chores', headerShown: false}}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}

const GroceryStack = createStackNavigator<GroceryParamList>();

function GroceryNavigator() {
  return (
    <GroceryStack.Navigator>
      <GroceryStack.Screen
        name="GroceryScreen"
        component={GroceryScreen}
        options={{ headerTitle: 'Grocery', headerShown: false}}
      />
    </GroceryStack.Navigator>
  );
}

const RulesStack = createStackNavigator<RulesParamList>();

function RulesNavigator() {
  return (
    <RulesStack.Navigator>
      <RulesStack.Screen
        name="RulesScreen"
        component={RulesScreen}
        options={{ headerTitle: 'Rules', headerShown: false}}
      />
    </RulesStack.Navigator>
  );
}

const SettingsStack = createStackNavigator<GroceryParamList>();

function SettingNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingScreen"
        component={SettingsScreen}
        options={{ headerTitle: 'Setting', headerShown: false}}
      />
    </SettingsStack.Navigator>
  );
}
