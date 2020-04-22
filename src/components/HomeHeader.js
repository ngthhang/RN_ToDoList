import React, { Component } from 'react';
import { Text, View , TouchableOpacity} from 'react-native';
import { styleHome } from '../styles/Index';
import { Avatar } from 'react-native-elements';

class HomeHeader extends Component {
    render() {
        return (
            <View style={styleHome.actionBar}>
                <View style={styleHome.homeHeaderTextGroup}>
                    <Text style={styleHome.userName}>Hello, {this.props.name}</Text>
                    <Text style={styleHome.todayTask}>You have {this.props.todayTask} tasks</Text>
                </View>
                <TouchableOpacity 
                    style={styleHome.headerAvatarContainer}
                    onPress={this.props.signOut}
                >
                    <Avatar 
                        rounded 
                        source={require('../assets/images/logo.png')}
                        overlayContainerStyle={{
                            backgroundColor: '#fff'
                        }}
                        size="medium" 
                        showEditButton
                        editButton={{ name: 'log-out', type: 'entypo', color: '#fff', underlayColor: '#fff' }}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

export default HomeHeader;