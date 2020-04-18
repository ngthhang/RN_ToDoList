import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styleHome } from '../styles/styles-index';
import { Avatar } from 'react-native-elements';


class HomeHeader extends Component {
    render() {
        return (
            <View style={styleHome.actionBar}>
                <View style={styleHome.homeHeaderTextGroup}>
                    <Text style={styleHome.userName}>Hello, {this.props.name}</Text>
                    <Text style={styleHome.todayTask}>You have {this.props.todayTask} tasks today!</Text>
                </View>
                <View style={styleHome.headerAvatarContainer}>
                    <Avatar rounded source={require('../assets/images/avatar.jpg')} size="medium" />
                </View>
            </View>
        );
    }
}

export default HomeHeader;