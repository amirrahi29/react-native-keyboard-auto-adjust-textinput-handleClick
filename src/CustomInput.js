import React from "react";
import {View, StyleSheet, TextInput} from 'react-native'

const CustomInput=({placeholderText,onChangeText})=>{

return (
    <View style={styles.innerContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholderText}
          placeholderTextColor='black'
          onChangeText={onChangeText}  
        />
      </View>
 );
}

export default CustomInput;

const styles = StyleSheet.create({
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        margin:8
      },
      input: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 8,
        borderRadius:16,
        color:'black'
      },
});