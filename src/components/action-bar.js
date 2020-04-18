import React, {Component} from 'react';
import {View} from 'react-native';
import { styleCategory} from '../styles/styles-index';
import Icon from 'react-native-vector-icons/Entypo';


class ActionBar extends Component{
    render(){
        return(
            <View style={styleCategory.actionBar}>
                <Icon name='chevron-thin-left' size={23} color='#ffffff' />
                <Icon name='dots-three-vertical' size={23} color='#ffffff' />
            </View>
        );
    }
}

export default ActionBar;