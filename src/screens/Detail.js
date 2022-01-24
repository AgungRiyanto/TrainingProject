import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Detail = ({navigation}) => {

   useEffect(() => {
      
   }, []);

   return (
      <View style={styles.container}>
         <Text>Detail screen</Text>
      </View>
   )
}

export default Detail;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   }
});