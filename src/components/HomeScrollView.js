import React, { Component } from 'react';
import {View, ScrollView } from 'react-native';
import { styleHome } from '../styles/Index';
import Category from './Category';

class HomeScrollView extends Component {
    render() {
        const { all, art, music, travel, study, home, shopping, work } = this.props;
        return (
            <View style={styleHome.content}>
                <ScrollView contentContainerStyle={styleHome.scrollView}>
                    <View style={styleHome.taskContainerRow}>
                        <Category name='All' totalTask={all} navigation={this.props.navigation}/>
                        <Category name='Work' totalTask={work} navigation={this.props.navigation} />
                    </View>
                    <View style={styleHome.taskContainerRow}>
                        <Category name='Home' totalTask={home} navigation={this.props.navigation} />
                        <Category name='Study' totalTask={study} navigation={this.props.navigation} />
                    </View>
                    <View style={styleHome.taskContainerRow}>
                        <Category name='Shopping' totalTask={shopping} navigation={this.props.navigation} />
                        <Category name='Art' totalTask={art} navigation={this.props.navigation} />
                    </View>
                    <View style={styleHome.taskContainerRow}>
                        <Category name='Music' totalTask={music} navigation={this.props.navigation} />
                        <Category name='Travel' totalTask={travel} navigation={this.props.navigation} />
                    </View>
                </ScrollView>
            </View>        
        );
    }
}

export default HomeScrollView;