import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { styleHome } from '../styles/Index';
import Icon from 'react-native-vector-icons/Entypo';


class FloatButton extends Component {
    onClickButton = () => {
        
        this.props.navigation.navigate('add-modal');
    }

    render() {
        return (
        <TouchableOpacity
            style={styleHome.addButton}
            onPress={this.onClickButton}
        >
            <Icon name="plus" size={35} color="#ffffff" />
        </TouchableOpacity>
    );}
}

export default FloatButton;