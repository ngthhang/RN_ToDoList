import React, { Component } from 'react';
import { ActivityIndicator, ImageBackground, Image } from 'react-native';
import {firebaseApp} from '../utils/FirebaseConfig';

class SplashScreen extends Component {
    async componentDidMount(){
        const currentUser = firebaseApp.auth().currentUser;
        const isShow = await this.performingSplashScreen();
        if(isShow !== null){
            if (currentUser) {
                this.props.navigation.navigate('main');
            }
            else {
                this.props.navigation.navigate('log-in');
            }
        }
    }

    performingSplashScreen = async () => {
        return new Promise((resolve) =>
            setTimeout(
                () => { resolve('result') },
                2000
            )
        )
    }
    render() {
        return (
            <ImageBackground 
                source={require('../assets/images/bg_sky.jpg')}
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"}}>
                <Image 
                    source={require('../assets/images/logo.png')}
                    style={{
                        width: 150,
                        height: 150,
                    }} />
                <ActivityIndicator size='large' />
            </ImageBackground>
        )
    }
}

export default SplashScreen;