import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detail from '../screens/Detail';


const Stack = createNativeStackNavigator();

const HomeStack = ({}) => {
   return (
      <Stack.Navigator 
         screenOptions={{
            headerShown: false
         }}
         initialRouteName="Detail"
      >
         <Stack.Screen name="Detail" component={Detail} />
         
      </Stack.Navigator>
   );
}

export default HomeStack;