import React, {Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {firebaseApp} from '../utils/FirebaseConfig';
import ModalScreen from '../screen/ModalScreen';
import MainStackScreen from './MainStack';
import LoginScreen from '../screen/LoginScreen';
import SignUpScreen from '../screen/SignUpScreen';
import SplashScreen from '../screen/SplashScreen';

const RootStack = createStackNavigator();

class RootStackScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            user : null
        }
    }
    render(){
        return(
            <RootStack.Navigator headerMode='none'>
                <RootStack.Screen
                    name='loading'
                    component={SplashScreen}
                />
                <RootStack.Screen
                    name='sign-up'
                    component={SignUpScreen}
                />
                <RootStack.Screen 
                    name='log-in'
                    component={LoginScreen}
                />
                <RootStack.Screen
                    name = 'main'
                    component={MainStackScreen}
                />
                <RootStack.Screen 
                    name='add-modal'
                    component={ModalScreen}
                />
            </RootStack.Navigator>
        )
    }
}

export default RootStackScreen;