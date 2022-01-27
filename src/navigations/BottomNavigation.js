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
            tabBarActiveBackgroundColor: 'blue',
            tabBarShowLabel: true,
            tabBarLabelStyle: {fontSize: 14, fontWeight: 'bold'},
            tabBarIcon: ({focused, color, size}) => {
               let iconName;

               if (route.name === "Home") {
                  iconName = "home";
               } else if (route.name === "Profile") {
                  iconName = "user";
               } else {
                  iconName = "book";
               }

               return <AntDesign color={focused ? "white":"gray" } name={iconName} size={30} />
            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray',
         })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
  );
}