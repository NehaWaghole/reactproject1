import React from 'react';
import { View, Text,TextInput, StyleSheet,StatusBar, TouchableOpacity } from 'react-native';

const hello = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.appButtonText}>HELLO WORLD!!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    appButtonText:{
      textAlign:"center",
      fontSize:20
    }
  });
export default hello;