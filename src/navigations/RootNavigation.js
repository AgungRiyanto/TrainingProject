import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import ComponentAndAPIs from '../screens/ComponentAndAPIs';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import BottomNavigation from './BottomNavigation';
import HomeStack from './HomeStack';


const Stack = createNativeStackNavigator();

const RootNavigation = ({}) => {
   return (
      <NavigationContainer>
         <Stack.Navigator 
            screenOptions={{
               headerShown: false
            }}
            initialRouteName="Splash"
         >
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="MainApp" component={BottomNavigation} />
            <Stack.Screen name="HomeNavigation" component={HomeStack} />
         </Stack.Navigator>
      </NavigationContainer>
   );
}

export default RootNavigation;