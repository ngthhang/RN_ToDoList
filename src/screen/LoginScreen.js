import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity,Image, ImageBackground, Alert} from 'react-native';
import {styleLogin} from '../styles/Index';
import { firebaseApp } from '../utils/FirebaseConfig';

class LoginScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
      emailLogin: '',
      password: '',
      focusPass: false,
      focusEmail: false
    }
  }

  onChangeEmail = (email) => {
    this.setState({
      emailLogin: email
    })
  }

  onChangePassword = (pass) => {
    this.setState({
      password: pass
    })
  }

  goSignUp = () => {
    this.props.navigation.navigate('sign-up');
  }

  onSignIn= () => {
    const { emailLogin,password} = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(emailLogin, password).then(() => {
      Alert.alert(
        "Alert Title",
        "Log in Successfully: " ,
        [
          { text: 'OK', 
            onPress: () => this.props.navigation.navigate('main') },
        ],
        { cancelable: false }
      )
      this.setState({
        emailLogin: '',
        password: '',
      })
    })
    .catch(function (error) {  
      Alert.alert(
        "Alert Title",
        "Error in sign in: " + error.message,
        [
          { text: 'OK' },
        ],
        { cancelable: false }
      )
    })
  }

  onFocusMail = () => {
    this.setState({
      focusEmail: true
    })
  }

  onFocusPass = () => {
    this.setState({
      focusPass: true
    })
  }

  onBlurMail = () => {
    this.setState({
      focusEmail: false
    })
  }

  onBlurPass = () => {
    this.setState({
      focusPass: false
    })
  }


  render(){
    const { emailLogin, password, focusEmail, focusPass} = this.state;
    return (
      <View style={styleLogin.container}>
        <ImageBackground style={styleLogin.imageBackground}>
            <Image 
              source={require('../assets/images/logo.png')} 
              style={styleLogin.logoApp}
            />
            <Text style={styleLogin.welcomeText}>Welcome Back!</Text>
            <Text style={styleLogin.loginText}>Log in into your existance account on TodoList</Text>
            <TextInput 
              style={focusEmail ? styleLogin.inputFocus : styleLogin.input} 
              value={emailLogin}
              autoCompleteType='email'
              placeholder="Email"
              onChangeText={this.onChangeEmail}
              onFocus={this.onFocusMail}
              onBlur={this.onBlurMail}
            />
            <TextInput 
              style={focusPass ? styleLogin.inputFocus : styleLogin.input} 
              value={password}
              secureTextEntry={true} 
              autoCompleteType='password'
              placeholder="Password"
              onChangeText = {this.onChangePassword}
              onFocus={this.onFocusPass}
              onBlur={this.onBlurPass}
            />
            <TouchableOpacity
              style={{
                marginBottom: 20,
                alignItems: 'flex-end',
                marginHorizontal: 20,

              }}
              onPress={this.goSignUp}
            >
              <Text style={styleLogin.noAccountText}>Don't have account? Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styleLogin.button]}
              onPress={this.onSignIn}
            >
                <Text style={styleLogin.buttonText}>LOG IN</Text>
            </TouchableOpacity>
        </ImageBackground>
      </View>
    )
  }
}

export default LoginScreen;
