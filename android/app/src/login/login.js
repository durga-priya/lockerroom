import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  ImageBackground
} from 'react-native';
//import { StackNavigator } from "react-navigation";

export default class LoginView extends Component {
  constructor(props) {
    super(props);
    state = {
      email   : '',
      password: '',
    }
//           const { navigate } = props.navigation;
  }
   
 render() {
    return (
       <ImageBackground  source={require('./bgImage.jpg')}  style={styles.container}>     
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              placeholderTextColor="white"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              placeholderTextColor="white"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>
        
        <TouchableHighlight style={styles.buttonContainer} >
            <Text style={styles.pwdStyle}>Forgot your password?</Text>
        </TouchableHighlight>
        
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]}>
          <Text style={styles.loginText} >Sign In</Text>
        </TouchableHighlight>

        

        <TouchableHighlight style={styles.buttonContainer}  >
            <Text>Don't have an account?<Text style={styles.TextStyle}> sign up</Text></Text>
        </TouchableHighlight>
      </View>
</ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
     width: null,
    height: null
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
    backgroundImage: {
         flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    width: null,
    height: null,
    },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: 'black',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  pwdStyle:{
     flex:1,
   textAlign:'right',
     
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  TextStyle: {
 
    color: '#E91E63',
    textDecorationLine: 'underline'
 
  },
  loginButton: {
    backgroundColor: "#FF4DFF",
  },
  loginText: {
    color: 'white',
  }
});