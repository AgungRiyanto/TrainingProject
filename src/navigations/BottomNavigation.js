import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Detail from '../screens/Detail';

import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
      <Tab.Navigator 
         screenOptions={({route}) => ({
            headerShown: false,
            tabBarActiveBackgroundColor: 'white',
            tabBarShowLabel: true,
            tabBarLabelStyle: {fontSize: 12},
            tabBarIcon: ({focused, color, size}) => {
               let iconName;

               if (route.name === "Home") {
                  iconName = "home";
               } else if (route.name === "Profile") {
                  iconName = "user";
               } else {
                  iconName = "book";
               }

               return <AntDesign color={focused ? "blue":"gray" } name={iconName} size={focused ? 27:20} />
            },
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'gray',
         })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
  );
}