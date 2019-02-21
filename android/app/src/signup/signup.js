import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Linking,
  ImageBackground,
  Alert,
  SideMenu,
  List,
  ListItem
} from 'react-native';

export default class SignUp extends Component {

  constructor(props) {
    super(props);
    state = {
      fullName: '',
      email   : '',
      password: '',
    }
    
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }
//   signIn = (viewId) => {
//    Alert.alert("Alert", "Button pressed "+viewId);
//  }
static navigationOptioImageBackgroundns = {
  title: 'Property Finder',
};

  render() {
    return (
      
    
      <ImageBackground  source={require('./bgImage.jpg')}  style={styles.container}>    
      <View style={styles.container}>
     
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Full name"
              placeholderTextColor="white"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(fullName) => this.setState({fullName})}/>
        </View>

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
        
         <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/calendar/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Date of Birth"
              placeholderTextColor="white"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(dob) => this.setState({dob})}/>
        </View>
        
         
         
        <TouchableHighlight style= {[styles.buttonContainer, styles.signupButton]} >
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableHighlight>
        
        <Text style={styles.signUpText}>Have an account? <Text style={styles.TextStyle} >sign in</Text></Text>
         
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
  
  TextStyle: {
 
    color: '#E91E63',
    textDecorationLine: 'underline'
 
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
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  signupButton: {
    backgroundColor: "#FF4DFF",
  },
  signUpText: {
    color: 'white',
  }
});