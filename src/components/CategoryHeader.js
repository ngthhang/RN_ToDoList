import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styleCategory} from '../styles/Index';
import Icon from 'react-native-vector-icons/Entypo';
import categoryLayout from '../utils/category.json';
class CategoryHeader extends Component {
    render() {
        const currentCategory = categoryLayout.find(item => item.name === this.props.name);
        const {totalTask} = this.props;
        const task = totalTask < 2 ? (totalTask + ' task') : (totalTask + ' tasks');
        return (
            <View style={styleCategory.header}>
                <Icon name={currentCategory.icon} size={25} color='#5786FF' style={styleCategory.headerIcon}/>
                <Text style={styleCategory.categoryText}>{this.props.name}</Text>
                <Text style={styleCategory.countTaskText}>{task}</Text>
            </View>
        );
    }
}

export default CategoryHeader;