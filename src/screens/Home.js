import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Home = ({navigation}) => {

   useEffect(() => {
      
   }, []);

   return (
      <View style={styles.container}>
         <Text>Home screen</Text>
      </View>
   )
}

export default Home;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   }
});