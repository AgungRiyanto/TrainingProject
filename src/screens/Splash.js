import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';

const Splash = ({navigation}) => {
   const [textShow] = useState(new Animated.Value(-20));

   useEffect(() => {
      Animated.timing(textShow, {
         toValue: 400,
         duration: 2000,
      }).start()

      setTimeout(() => {
         navigation.navigate('Login')
      }, 5000);
   }, []);

   return (
      <View style={styles.container}>
         <Animated.Text
            style={{
               position: 'absolute',
               bottom: textShow
            }}
         >
            Hello from Splash
         </Animated.Text>
      </View>
   )
}

export default Splash;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   }
});