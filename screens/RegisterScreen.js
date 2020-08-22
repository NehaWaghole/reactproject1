import React from 'react';
import { View, Text, StyleSheet,TextInput,TouchableWithoutFeedback,Keyboard,TouchableOpacity,Button } from 'react-native';

export default class LoginScreen extends React.Component {

  constructor(props){
    super(props);
      this.state ={
        name:"",
        email:"",
        contact:"",
        password :"",
        password1:""
      }
  }

addBtnPressed = () => {
  const { email, password } = this.state  
  if(email == "" || password == "") {
    alert('Please Enter All Details');
      } 
    else {
      this.props.navigation.navigate('Login');
    }
  };

render(){
    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

    <View style={styles.screen}>
    <TextInput
            style={styles.input}
            onChangeText={name => this.setState({name})}

            placeholder="Enter Name"
            placeholderTextColor="black"
    />
    <TextInput
            style={styles.input}
            onChangeText={email => this.setState({email})}

            placeholder="Enter Email"
            placeholderTextColor="black"
    />
    
    <TextInput
            style={styles.input}
            onChangeText={contact => this.setState({contact})}

            placeholder="Enter Contact"
            placeholderTextColor="black"
    />
    <TextInput
            style={styles.input}
            onChangeText={password => this.setState({password})}

            placeholder="Enter Password"
            placeholderTextColor="black"
    />
    <TextInput
            style={styles.input}
            onChangeText={password1 => this.setState({password1})}

            placeholder="Enter Confirm Password"
            placeholderTextColor="black"
    />
    
    
    <TouchableOpacity title="SUBMIT" style={styles.bt} 
     onPress={this.addBtnPressed}

    >
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
      marginTop:50,
      textAlign:"center",
      fontSize:40,
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


// export default RegisterScreen;