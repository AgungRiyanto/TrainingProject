import React, {useEffect, useState} from 'react';
import {
   View, 
   Text, 
   StyleSheet, 
   TouchableOpacity, 
   Image, 
   PermissionsAndroid,
   ImageBackground
} from 'react-native';
import axios from 'axios';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Header from '../components/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Profile = ({navigation, route}) => {
   console.log('route =', route);
   const [image, setImage] = useState();

   useEffect(() => {
   }, []);
   
   async function openCamera() {
      const granted = await PermissionsAndroid.request(
         PermissionsAndroid.PERMISSIONS.CAMERA,
         {
           title: "App Camera Permission",
           message:"App needs access to your camera ",
           buttonNeutral: "Ask Me Later",
           buttonNegative: "Cancel",
           buttonPositive: "OK"
         }
       );
      
       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
         launchImageLibrary({}, (response) => {
            console.log('response', response)
            if (response.assets) {
               setImage(response.assets[0]);
            }
         })
       }
   }

   return (
      <View style={styles.container}>
         <Header
            headerTitle="Profile"
         />
         <ImageBackground
               source={{uri: image?.uri}}
               style={styles.image}
            >
               <TouchableOpacity onPress={() => openCamera()} style={styles.iconImage}>
                  <Ionicons name="image" size={30} color={"white"} />
               </TouchableOpacity>
         </ImageBackground>
         {
            !image ?
            <TouchableOpacity onPress={()=> openCamera()} activeOpacity={0.8} style={styles.buttonUploadImage}>
               <Ionicons name="image" size={23} color="white" />
               <Text style={styles.textButton}>Upload image</Text>
            </TouchableOpacity>:null
         }
      </View>
   )
}

export default Profile;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'white'
      // justifyContent: 'center',
      // alignItems: 'center'
   },
   row: {
      flexDirection: 'row'
   },
   image: {
      width: 200,
      height: 200,
      alignSelf: 'center',
      marginTop: 10,
      justifyContent: 'center',
      alignItems: 'center'
   },
   buttonUploadImage: {
      backgroundColor: 'blue',
      flexDirection: 'row',
      paddingVertical: 10,
      width: '80%',
      alignSelf:'center',
      marginTop: 20,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center'
   },
   textButton: {
      color: 'white',
      marginLeft: 10,
   },
   iconImage: {
      // position: 'absolute',
      // bottom: '50%',
      // left: '50%'

   }
});