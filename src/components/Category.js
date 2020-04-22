import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styleHome } from '../styles/Index';
import Icon from 'react-native-vector-icons/Entypo';
import categoryLayout from '../utils/category.json';

class HomeCategory extends Component {
    constructor(props){
        super(props);
        this.state={
            category: this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)
        }
    }

    onPress = () => {
        const {category} = this.state;
        this.props.navigation.navigate('category-details', {
            name: category,
            totalTask: this.props.totalTask
        });
    }

    render() {
        const {category} = this.state;
        const currentCategory = categoryLayout.find(item => item.name===category);
        const {totalTask} = this.props;
        const task = totalTask < 2 ? (totalTask + ' task' ): (totalTask + ' tasks');
        return (
            <TouchableOpacity 
                style={styleHome.taskContainer}
                onPress={this.onPress}
            >
                <Icon name={currentCategory.icon} size={28} color={currentCategory.color} />
                <Text style={styleHome.taskContainerHeader}>{category}</Text>
                <Text style={styleHome.totalTaskText}>{task}</Text>
            </TouchableOpacity>
        );
    }
}

export default HomeCategory;