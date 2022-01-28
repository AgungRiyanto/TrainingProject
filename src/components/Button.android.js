import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, ActivityIndicator, TouchableWithoutFeedback} from 'react-native';

const Button = ({onPress, loading}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.textButton}>Button Android</Text>
                {loading && <ActivityIndicator color="white" />}
            </View>
        </TouchableWithoutFeedback>
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