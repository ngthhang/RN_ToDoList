import React, {Component} from 'react';
import {Text, View, Image, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import {styleLogin} from '../styles/styles-index';
import { Avatar } from 'react-native-elements';

class LoginScreen extends Component{
  render(){
    return (
      <View style={styleLogin.container}>
        <ImageBackground source={require('../assets/images/background.jpg')} style={styleLogin.imageBackground}>
          <View style={styleLogin.formContainer}>
            <View style={styleLogin.avatarContainer}>
              <Avatar
                rounded
                source={require('../assets/images/img_avatar.png')}
                size="large"
              />
            </View>
            <TextInput 
              style={styleLogin.input} 
              autoCompleteType='email'
              placeholder="Email"
            />
            <TextInput 
              style={styleLogin.input} 
              secureTextEntry={true} 
              autoCompleteType='password'
              placeholder="Password"
            />
            <TouchableOpacity style={[styleLogin.input, { marginBottom: 200, backgroundColor: '#5786FF'}]}>
                <Text style={styleLogin.buttonText}>LOG IN</Text>
              </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

export default LoginScreen;
