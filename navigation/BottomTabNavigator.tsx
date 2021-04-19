import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabTwoScreen from '../screens/TabTwoScreen';
import HomeScreen from '../screens/HomeScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList, HomeParamList, ChoreParamList } from '../types';
import ChoresScreen from '../screens/ChoresScreen';

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
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="cart" color={color} />,
        }}
      />
     

    <BottomTab.Screen
        name="Car"
        component={ChoreNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="car" color={color} />,
        }}
      />

<BottomTab.Screen
        name="Settings"
        component={TabTwoNavigator}
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
        options={{ headerTitle: 'Chores'}}
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
