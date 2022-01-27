import React from 'react';
import {View, StyleSheet} from 'react-native';

const Placeholder = ({count=3}) => {
   return Array.from({length: count}).map((item) => {
      return (
         <View style={styles.container}>
            <View style={styles.boxThumbnail} />
            <View style={{marginLeft: 10}}>
               <View style={styles.lineTitle} />
               <View style={styles.lineDescription} />
               <View style={styles.lineDescription} />
            </View>
         </View>
      );
   })
}

export default Placeholder;

const styles = StyleSheet.create({
   container: {
      marginHorizontal:13,
      flexDirection: 'row',
      marginTop: 13
   },
   boxThumbnail: {
      width: 50,
      height: 50,
      backgroundColor: 'gray',
      borderRadius: 10
   },
   lineTitle: {
      height: 8,
      width: 100,
      backgroundColor: 'gray',
      borderRadius: 2
   },
   lineDescription: {
      height: 3,
      width: 130,
      backgroundColor: 'gray',
      marginTop: 10,
      borderRadius: 2

   }
});