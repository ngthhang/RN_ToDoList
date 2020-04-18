import React, { Component } from 'react';
import {View, ScrollView } from 'react-native';
import { styleHome } from '../styles/styles-index';
import Category from './home-category';


class HomeScrollView extends Component {
    render() {
        return (
            <View style={styleHome.content}>
                <ScrollView contentContainerStyle={styleHome.scrollView}>
                    <View style={styleHome.taskContainerRow}>
                        <Category name='All' totalTask={23} />
                        <Category name='Work' totalTask={2} />
                    </View>
                    <View style={styleHome.taskContainerRow}>
                        <Category name='Home' totalTask={3} />
                        <Category name='Study' totalTask={7} />
                    </View>
                    <View style={styleHome.taskContainerRow}>
                        <Category name='Shopping' totalTask={5} />
                        <Category name='Art' totalTask={2} />
                    </View>
                    <View style={styleHome.taskContainerRow}>
                        <Category name='Music' totalTask={3} />
                        <Category name='Travel' totalTask={2} />
                    </View>
                </ScrollView>
            </View>        
        );
    }
}

export default HomeScrollView;