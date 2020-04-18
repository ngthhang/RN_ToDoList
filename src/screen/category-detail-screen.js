import React, {Component} from 'react';
import {View,Text} from 'react-native';
import {styleCategory} from '../styles/styles-index';
import ActionBar from '../components/action-bar';
import CategoryHeader from '../components/category-header';
import CategoryList from '../components/category-list';
import FloatButton from '../components/float-button';

class CategoryDetailScreen extends Component{
    render(){
        return(
            <View style={styleCategory.container}>
                <ActionBar />
                <CategoryHeader name='Study' totalTask={23} />
                <CategoryList />
                <FloatButton />
            </View>
        );
    }
}

export default CategoryDetailScreen;