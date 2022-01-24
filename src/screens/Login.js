import React, {useEffect, useState,useCallback} from 'react';
import {View, StyleSheet, BackHandler, Text, Alert} from 'react-native';
import {useFocusEffect} from '@react-navigation/native'

const Login = ({navigation}) => {
   // state
   const [count, setCount] = useState(0);

   // backhandlers
   useFocusEffect(
		useCallback(() => {
		  const onBackPress = () => {
				Alert.alert("Konfirmasi", "Apakah anda ingin keluar aplikasi", [
					{
						text: "Tidak",
						onPress: () => null,
						style: "cancel"
					},
					// { text: "Ya", onPress: () => navigation.dispatch(StackActions.replace('Main')) }
					{ 
						text: "Ya", 
                  onPress: () => BackHandler.exitApp()
               }
				]);
				return true;
		  };
  
		  BackHandler.addEventListener('hardwareBackPress', onBackPress);
  
		  return () =>
			 BackHandler.removeEventListener('hardwareBackPress', onBackPress);
		}, []),
	);

   return (
      <View style={styles.container}>
         <Text>Login Screen</Text>
      </View>
   );
}

export default Login;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   }
})
