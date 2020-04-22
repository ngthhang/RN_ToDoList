import React, {Component} from 'react';
import {View,Text} from 'react-native';
import {styleCategory} from '../styles/Index';
import ActionBar from '../components/ActionBar';
import CategoryHeader from '../components/CategoryHeader';
import CategoryList from '../components/CategoryList';
import FloatButton from '../components/FloatButton';

class CategoryDetailScreen extends Component{

    render(){
        const {totalTask,name} = this.props.route.params;
        return(
            <View style={styleCategory.container}>
                <ActionBar navigation={this.props.navigation} />
                <CategoryHeader name={name} totalTask={totalTask} />
                <CategoryList name={name} />
                <FloatButton navigation={this.props.navigation} />
            </View>
        );
    }
}

export default CategoryDetailScreen;