import React from 'react';
import { View, Text, StyleSheet ,TouchableOpacity} from 'react-native';


const welcome = props => {
    return (
      <View style={styles.screen}>
        
        <TouchableOpacity  style={styles.bt} 
        
        onPress={()=>{
            props.navigation.navigate('Login');
        }}>
     <Text style={styles.appButtonText}>GO TO LOGIN PAGE</Text>

            </TouchableOpacity>
            </View>
            );
            };

            const styles = StyleSheet.create({

            screen: {
                flex: 1,
                // justifyContent: 'center',
                alignItems: 'center'
              },
              bt:{
                backgroundColor: "#3282b8",
                borderRadius: 20,
                paddingVertical: 20,
                paddingHorizontal: 12,
                width:150,
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
            
            export default welcome;