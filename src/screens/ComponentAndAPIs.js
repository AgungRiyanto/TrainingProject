import React from 'react';
import {
   View, 
   StyleSheet, 
   TouchableOpacity, 
   Text, 
   FlatList, 
   Image, 
   ToastAndroid,
   Alert
} from 'react-native'

const data = [
   {name: 'List 1'},
   {name: 'LIst 2'}
]

const ComponentAndAPIs = ({}) => {

   function showToastAndroid() {
      ToastAndroid.showWithGravityAndOffset(
         "Show toast",
         ToastAndroid.SHORT,
         ToastAndroid.CENTER,
         25,
         50
       );
   }

   function showAlertAndroid() {
      Alert.alert(
         "Alert Title",
         "My Alert Msg",
         [
           {
             text: "Cancel",
             onPress: () => console.log("Cancel Pressed"),
             style: "cancel"
           },
           { text: "OK", onPress: () => showToastAndroid() }
         ]
      );
   }

   return (
      <View>
         {/* view */}
         <View style={styles.view}></View>

         {/* image */}
         <Image
            // source={require('../assets/images/react-native-logo.png')}
            source={{uri: 'https://image/bla'}}
            resizeMode="contain" 
            style={styles.image}
         />

         {/* text */}
         <Text style={styles.text}>Text</Text>

         {/* row */}
         <View style={styles.row}>
            <Text>text kiri</Text>
            <Text>text kanan</Text>
         </View>
         
         {/* flatlist */}
         <FlatList
            horizontal
            data={data}
            renderItem={({item}) => (
               <Text>{item?.name}</Text>
            )}
         />

         {/* button */}
         <TouchableOpacity onPress={() => showAlertAndroid()} style={styles.button}>
            <Text>Button</Text>
         </TouchableOpacity>
      </View>
   );
}

export default ComponentAndAPIs;

const styles = StyleSheet.create({
   container: {
      flex: 1
   },
   view: {
      width: 100,
      height: 100,
      backgroundColor: 'blue',
   },
   image: {
      width: 100,
      height: 100
   },
   row: {
      flexDirection: 'row',

      justifyContent: 'space-evenly'
   },
   text: {
      fontSize: 16,
      color: 'red',
      // fontFamily: ''
   },
   button: {
      width: 200,
      height: 100,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center'
   }
});