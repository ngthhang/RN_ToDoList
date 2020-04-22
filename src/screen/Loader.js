import React, {Component} from 'react';
import {Modal, ActivityIndicator, View} from 'react-native';
import { styleLogin } from '../styles/Index';

class Loader extends Component {
    render(){
        return(
            <Modal
                transparent={true}
                animationType='none'
                visible={this.props.loading}
            >
                <View style={styleLogin.modalBackground}>
                    <View style={styleLogin.activityIndicatorWrapper}>
                        <ActivityIndicator
                            animating={this.props.loading} />
                    </View>
                </View>
            </Modal>
        )
    }
}

export default Loader