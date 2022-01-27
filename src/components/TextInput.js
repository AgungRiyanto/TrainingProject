import React from 'react';
import {TextInput, StyleSheet} from 'react-native'

const InputText = ({value, onChangeText, placeholder, secureTextEntry}) => {
   return (
      <TextInput 
         style={styles.textInput} 
         placeholder={placeholder}
         placeholderTextColor="grey"
         value={value}
         onChangeText={onChangeText}
         secureTextEntry={secureTextEntry}
      />
   )
}

export default InputText;

const styles = StyleSheet.create({
   textInput: {
      borderWidth: 1,
      marginTop: 20,
      borderRadius: 10,
      paddingHorizontal: 13,
      width: '80%',
      borderColor: 'blue' 
   }
})