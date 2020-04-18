import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styleCategory } from '../styles/styles-index';
import {CheckBox} from 'react-native-elements';

class TaskItem extends Component {
    render(){
        const styleText = this.props.late ? styleCategory.timeLateText: styleCategory.timeText;
        const styleTask = this.props.complete ? styleCategory.taskCompleteText : styleCategory.taskText;
        const checked = this.props.complete ? true: false;
        return (
            <View style={styleCategory.taskGroup}>
                <View style={styleCategory.taskTextGroup}>
                    <Text style={styleTask}>{this.props.task}</Text>
                    <Text style={styleText}>{this.props.time}</Text>
                </View>
                <CheckBox 
                    checkedIcon='check-square'
                    uncheckedIcon='square-o'
                    size={25}
                    checkedColor='#5786FF'
                    checked={checked}/>
            </View>
    );
}
}

export default TaskItem;