import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Splash = ({navigation}) => {

   useEffect(() => {
      // timers
      setTimeout(() => {
         navigation.navigate('Login')
      }, 3000);
   }, []);

   return (
      <View style={styles.container}>
         <Text>Splash screen</Text>
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