import React, {Component} from 'react';
import {Text, View, TextInput,Image, TouchableOpacity, ImageBackground, Alert} from 'react-native';
import {styleLogin} from '../styles/Index';
import {firebaseApp} from '../utils/FirebaseConfig';


class SignUpScreen extends Component{
  constructor(props){
    super(props);
    this.state={
      email : '',
      password : '',
      focusPass: false,
      focusEmail: false
    }
  }

  goSignIn = () => {
    this.props.navigation.navigate('log-in')
  }

  onChangeEmail = (text) => {
    this.setState({
        email: text
    })
  }

  onChangePassword = (pass) => {
    this.setState({
      password: pass
    })
  }

  onSignUp = () => {
    const {email,password} = this.state;

    if (email == '' || password == ''){
      alert('Missing information to register');
      return
    }
    else if (email.includes("@") == false){
      alert('Invalid email');
      return
    }
    else if ( password.length < 6){
      alert('Your password must be at least 6 characters');
      return
    }
    firebaseApp.auth().createUserWithEmailAndPassword(email,password).then(()=>{
      Alert.alert(
        "Alert Title",
        "Sign Up Succesfully: " + email,
        [
          { text: 'Cancel' },
          { text: 'OK', onPress: () => this.props.navigation.navigate('log-in') }
        ],
        { cancelable: false }
      )
      this.setState({
        email: '',
        password: '',
      })
    })
    .catch(function(error){
      Alert.alert(
        "Alert Title",
        "Error in Sign Up: " + error.message,
        [
          { text: 'OK' }
        ],
        {cancelable: false}
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
    const {email,password, focusEmail, focusPass} = this.state;
    return (
      <View style={styleLogin.container}>
        <ImageBackground style={styleLogin.imageBackground}>
            <Image
              source={require('../assets/images/logo.png')}
              style={styleLogin.logoApp}
            />
            <Text style={styleLogin.welcomeText}>Let's get started</Text>
            <Text style={styleLogin.loginText}>Create an account to use our TodoList</Text>
            <TextInput 
              value={email}
              style={focusEmail ? styleLogin.inputFocus : styleLogin.input } 
              autoCompleteType='email'
              placeholder="Email"
              onChangeText={this.onChangeEmail}
              onFocus={this.onFocusMail}
              onBlur={this.onBlurMail}
            />
            <TextInput 
              value = {password}
              style={focusPass ? styleLogin.inputFocus : styleLogin.input } 
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
            onPress={this.goSignIn}
          >
            <Text style={styleLogin.noAccountText}>Already have account? Sign in</Text>
          </TouchableOpacity>
            <TouchableOpacity
              onPress = {this.onSignUp}
              style={[styleLogin.button]}
            >
                <Text style={styleLogin.buttonText}>SIGN UP</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    )
  }
}

export default SignUpScreen;
