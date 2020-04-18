import React, { Component } from 'react';
import { View, Text, ScrollView, CheckBox, FlatList } from 'react-native';
import { styleCategory, styleHome } from '../styles/styles-index';
import TaskItem from './task-item';

class CategoryList extends Component {
    render() {
        return (
            <View style={styleCategory.content}>
                <ScrollView contentContainerStyle={styleCategory.scrollView}>
                    <Text style={styleCategory.labelText}>Late</Text>
                    <TaskItem task='Do hoursehold' time='April 12 12:30' late={true} complete={false} />
                    <TaskItem task='Do hoursehold' time='April 12 12:30' late={true} complete={false} />
                    <Text style={styleCategory.labelText}>Today</Text>
                    <TaskItem task='Do hoursehold' time='12:30' late={false} complete={false} />
                    <TaskItem task='Do hoursehold' time='11:30' late={false} complete={false} />
                    <Text style={styleCategory.labelText}>Done</Text>
                    <TaskItem task='Do hoursehold' time='12:30' late={false} complete={true}  />
                </ScrollView>
            </View>
        );
    }
}

export default CategoryList;