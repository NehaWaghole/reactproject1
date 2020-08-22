import React from 'react';
import { View, Text, StyleSheet ,TouchableOpacity} from 'react-native';

const MenuScreen = props => {
  return (
    <View style={styles.screen}>
      
      <TouchableOpacity  style={styles.bt} 
      
      onPress={()=>{
          props.navigation.navigate('flex');
      }}>
      <Text style={styles.appButtonText}>FLEX</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.bt} 
      
      onPress={()=>{
          props.navigation.navigate('hello');
      }}>
      <Text style={styles.appButtonText}>HELLO</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.bt} 
      
      onPress={()=>{
          props.navigation.navigate('Dice');
      }}>
      <Text style={styles.appButtonText}>DICE GAME</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.bt} 
      
      onPress={()=>{
          props.navigation.navigate('currency');
      }}>
      <Text style={styles.appButtonText}>CONVERT CURRENCY</Text>
      </TouchableOpacity>
      
      {/* <Button title="TO DO LIST"
      onPress={()=>{
          props.navigation.replace('MealDetail');
      }}
      /> */}
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

export default MenuScreen;