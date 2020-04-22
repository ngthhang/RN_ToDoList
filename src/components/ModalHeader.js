import React, {Component} from 'react';
import { Text, View} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import { styleModal } from '../styles/Index';
import { TouchableOpacity } from 'react-native-gesture-handler';

class ModalHeader extends Component {
    onPressBackButton = () => {
        this.props.navigation.goBack();
    }
    render() {
        return (
            <View style={styleModal.header}>
                <Text style={styleModal.headerText}>New Task</Text>
                <TouchableOpacity
                    onPress={this.onPressBackButton}
                >
                    <Icon style={styleModal.closeButton} name='close' size={25} color='#000000' />
                </TouchableOpacity>
            </View>
        );
    }
}

export default ModalHeader;