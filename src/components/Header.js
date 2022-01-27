import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Header = ({headerTitle, onBack}) => {
   return (
      <View style={styles.container}>
         {
            onBack &&
            <TouchableOpacity onPress={onBack}>
               <Ionicons name="arrow-back" color="white" size={23} />
            </TouchableOpacity>
         }
         <Text style={styles.headerTitle}>{headerTitle}</Text>
      </View>
   )
}

export default Header;

const styles = StyleSheet.create({
   container: {
      padding: 10,
      backgroundColor: 'blue',
      flexDirection: 'row'
   },
   headerTitle: {
      fontSize: 16,
      color: 'white',
      marginLeft: 10
   }
})