import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = ({}) => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Button iOS</Text>
        </TouchableOpacity>
    );
}

export default Button;

const styles = StyleSheet.create({
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
})