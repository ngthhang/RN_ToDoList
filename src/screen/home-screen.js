import React ,{Component} from 'react';
import {View} from 'react-native';
import {styleHome} from '../styles/styles-index';
import HomeHeader from '../components/home-header';
import HomeScrollView from '../components/home-scroll-view';
import FloatButton from '../components/float-button';

class HomeScreen extends Component{
    render(){
        return(
            <View style={styleHome.container}>
                <HomeHeader name='Nguyen Thuy Hang' todayTask={4} />
                <HomeScrollView />
                <FloatButton />
            </View>
        );
    }
}
export default HomeScreen;