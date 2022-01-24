import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import ComponentAndAPIs from '../screens/ComponentAndAPIs';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Detail from '../screens/Detail';


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
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Detail" component={Detail} />
         </Stack.Navigator>
      </NavigationContainer>
   );
}

export default RootNavigation;