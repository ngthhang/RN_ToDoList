import React, { Component } from 'react';
import { View } from 'react-native';
import { styleHome } from '../styles/Index';
import ModalContent from '../components/ModalContent';
import ModalHeader from '../components/ModalHeader';

class ModalScreen extends Component {
    render() {
        return (
            <View style={styleHome.container}>
                <ModalHeader navigation={this.props.navigation} />
                <ModalContent />
            </View>
        );
    }
}

export default ModalScreen;