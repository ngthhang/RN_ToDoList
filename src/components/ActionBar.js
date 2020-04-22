import React, {Component} from 'react';
import {View} from 'react-native';
import { styleCategory} from '../styles/Index';
import Icon from 'react-native-vector-icons/Entypo';
import { TouchableOpacity } from 'react-native-gesture-handler';
class ActionBar extends Component{

    onPressBackButton = () => {
        this.props.navigation.goBack();
    }
    render(){
        return(
            <View style={styleCategory.actionBar}>
                <TouchableOpacity
                    onPress={this.onPressBackButton}
                >
                    <Icon name='chevron-thin-left' size={23} color='#ffffff' />
                </TouchableOpacity>
                <Icon name='dots-three-vertical' size={23} color='#ffffff' />
            </View>
        );
    }
}

export default ActionBar;