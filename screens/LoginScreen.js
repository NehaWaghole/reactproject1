import React, { Component } from 'react';
import { View, Text,TextInput,Alert,TouchableWithoutFeedback,Keyboard, StyleSheet, TouchableOpacity } from 'react-native';

// const LoginScreen = ({ navigation }) => {
  export default class LoginScreen extends React.Component {
  
    constructor(props){
      super(props);
        this.state ={
          email:"",
          password :""
        }
    }
  
  addBtnPressed = () => {
    const { email, password } = this.state  
    if(email == "" || password == "") {
      alert('Please Enter Email and Password');
        } 
      else {
        this.props.navigation.navigate('Menu');
      }
    };
  
render(){
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

    <View style={styles.screen}>
      
      <TextInput
              style={styles.input}
              
              placeholder="Enter Email"
              keyboardType="email-address"
              onChangeText={email => this.setState({email})}
              placeholderTextColor="black"
      />
      <TextInput
              style={styles.input}
              
              placeholder="Enter password"
              keyboardType="visible-password"
              onChangeText={password => this.setState({password})}
              placeholderTextColor="black"
      />
      <TouchableOpacity style={styles.bt} 
      
      onPress={this.addBtnPressed}
      >
      <Text style={styles.appButtonText}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={styles.text2}>New Here??</Text>
      <TouchableOpacity style={styles.bt} 
      
      onPress={()=>{
        this.props.navigation.navigate('Register');    
          }}>
      <Text style={styles.appButtonText}>REGISTER</Text>
      </TouchableOpacity>
    </View>
    </TouchableWithoutFeedback>

  );
}
};


const styles = StyleSheet.create({
  screen: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
    flex:1,
    backgroundColor:"white",
  },
  
  text1:{
      color:"black",
      marginTop:10,
      textAlign:"center",
      fontSize:30,
    },
  
    input:{
      color:"black",
      textAlign:"center",
      marginTop:20,
      backgroundColor:"white",
      marginLeft:40,
      marginRight:40,
      borderWidth:2,
      padding:10,
      borderRadius:20
    },
    
    text2:{
      marginTop:20,
      color:"black",
      textAlign:"center"
  
    },
    text3:{
      marginTop:10,
      textAlign:"center",
      fontSize:20
    },
    bt:{
      backgroundColor: "#3282b8",
      borderRadius: 20,
      paddingVertical: 20,
      paddingHorizontal: 12,
      marginTop:30,
      marginLeft:100,
      marginRight:100,
      color:"black"
    },
    appButtonText:{
      textAlign:"center",
      fontSize:20
    }
    
});

// export default LoginScreen;