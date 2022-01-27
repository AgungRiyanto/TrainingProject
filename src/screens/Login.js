import React, {useCallback, useState} from 'react';
import { 
   View, 
   StyleSheet, 
   Text, 
   TextInput, 
   TouchableOpacity, 
   ToastAndroid,
   Alert,
   BackHandler, 
   ActivityIndicator
} from "react-native";
import {useFocusEffect} from '@react-navigation/native'
import InputText from '../components/TextInput';
import axios from 'axios';

const Login = ({navigation, route}) => {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [loading, setLoading] =useState(false);

   function showToastAndroid() {
      ToastAndroid.showWithGravity("Yeayy login berhasil", ToastAndroid.LONG, ToastAndroid.BOTTOM)
   }

   function showReactAlert() {
      Alert.alert(
         "Warning",
         "Email atau password belum diisi",
         [
         //   {
         //     text: "Cancel",
         //     onPress: () => console.log("Cancel Pressed"),
         //     style: "cancel"
         //   },
           { text: "OK", onPress: () => console.log("OK Pressed") },
         ]
       );
   }

   function showConsoleLog() {
      console.log('email =', email);
      console.log('props =', props);
   }

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

   function navigateToHome() {
      if (!email || !password) {
         return showReactAlert();
      }

      setLoading(true);
      setTimeout(() => {
         setLoading(false);
         showToastAndroid();
         navigation.navigate('MainApp', {
            email
         });
      }, 3000);
   }

   function userSignIn() {
      const data = {email, password}
      axios.post('url', data, {
         headers: {
            "Authorization": 'token',
            "Content-Type":"application/json"
         }
      }).then((response) => {

      }).catch((err) => {

      })
   }
   

   return (
      <View style={styles.container}>
         <Text style={styles.textLogin}>Login</Text>
         <InputText
            placeholder="Email"
            value={email}
            onChangeText={(text) => {
               setEmail(text)
            }}
         />
         <InputText
            placeholder="Passwrod"
            value={password}
            onChangeText={(text) => {
               setPassword(text)
            }}
            secureTextEntry={true}
         />
         {/* <TextInput 
            style={styles.textInput} 
            placeholder="Masukan Password anda"
            placeholderTextColor="grey"
            value={password}
            onChangeText={(text) => {
               setPassword(text)
            }}
         /> */}
         <TouchableOpacity onPress={() => navigateToHome()} style={styles.button}>
            <Text style={styles.textButton}>Login</Text>
            {loading && <ActivityIndicator color="white" />}
         </TouchableOpacity>
      </View>
   );
}

export default Login;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
   },
   textLogin: {
      fontSize: 16,
      fontWeight: 'bold'
   },
   textInput: {
      borderWidth: 1,
      marginTop: 20,
      borderRadius: 10,
      paddingHorizontal: 13,
      width: '80%'
   },
   button: {
      width: '80%',
      backgroundColor: 'blue',
      marginTop: 20,
      alignItems: 'center',
      paddingVertical: 10,
      borderRadius: 5,
      flexDirection: 'row',
      justifyContent: 'center'
   },
   textButton: {
      color: 'white',
      fontSize: 16,
      marginRight: 10
   }
});

