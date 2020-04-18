import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { styleHome } from '../styles/styles-index';
import Icon from 'react-native-vector-icons/Entypo';


class FloatButton extends Component {
    render() {
        return (
        <TouchableOpacity
            style={styleHome.addButton}
        >
            <Icon name="plus" size={35} color="#ffffff" />
        </TouchableOpacity>
    );}
}

export default FloatButton;