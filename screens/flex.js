import React from 'react';
import { View, Text,TextInput, StyleSheet,StatusBar, TouchableOpacity } from 'react-native';

const flex = props => {
  return (
    <View style={styles.container}>
    <View style={styles.red}/>
    <View style={styles.pink}/>
    <View style={styles.purple}/>

  </View>
  );
};

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#c1c1c1",
      fontSize:60
    },
    red:{
      flex:1,
      backgroundColor:"#eb4d4b"
    },
    pink:{
      flex:1,
      backgroundColor:"#e056fd"
    },
    purple:{
      flex:1,
      backgroundColor:"#30336b"
    }
  
  
  })
export default flex;