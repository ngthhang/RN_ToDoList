import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styleHome } from '../styles/styles-index';
import Icon from 'react-native-vector-icons/Entypo';
import categoryLayout from '../utils/category.json';

class HomeCategory extends Component {
    render() {
        const currentCategory = categoryLayout.find(item => item.name===this.props.name);
        return (
            <TouchableOpacity style={styleHome.taskContainer}>
                <Icon name={currentCategory.icon} size={28} color={currentCategory.color} />
                <Text style={styleHome.taskContainerHeader}>{this.props.name}</Text>
                <Text style={styleHome.totalTaskText}>{this.props.totalTask} Tasks</Text>
            </TouchableOpacity>
        );
    }
}

export default HomeCategory;