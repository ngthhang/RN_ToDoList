import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';
import CategoryDetailScreen from '../screen/CategoryDetailScreen';

const MainStack = createStackNavigator();

class MainStackScreen extends Component {
    render(){
        return(
            <MainStack.Navigator
                initialRouteName='home'
            >
                <MainStack.Screen
                    name='home'
                    component={HomeScreen}
                    options ={{headerShown:false}}
                />
                <MainStack.Screen 
                    name='category-details'
                    component={CategoryDetailScreen}
                    options={{ headerShown: false }}
                />
            </MainStack.Navigator>
        )
    }
}

export default MainStackScreen;