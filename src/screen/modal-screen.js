import React, { Component } from 'react';
import { View } from 'react-native';
import { styleHome } from '../styles/styles-index';
import ModalContent from '../components/modal-content';
import ModalHeader from '../components/modal-header';

class ModalScreen extends Component {
    render() {
        return (
            <View style={styleHome.container}>
                <ModalHeader />
                <ModalContent />
            </View>
        );
    }
}

export default ModalScreen;