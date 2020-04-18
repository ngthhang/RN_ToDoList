import React, {Component} from 'react';
import { Text, View} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import { styleModal } from '../styles/styles-index';

class ModalHeader extends Component {
    render() {
        return (
            <View style={styleModal.header}>
                <Text style={styleModal.headerText}>New Task</Text>
                <Icon style={styleModal.closeButton} name='close' size={25} color='#000000' />
            </View>
        );
    }
}

export default ModalHeader;