import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styleCategory } from '../styles/Index';
import {CheckBox} from 'react-native-elements';
import { firebaseApp } from '../utils/FirebaseConfig';

class TaskItem extends Component {
    constructor(props){
        super(props);
        this.state={
            checked: this.props.complete,
            key: this.props.id,
            task: this.props.task,
            category: this.props.category,
        }
    }

    onToggle = () => {
        const {key,task, checked, category} = this.state;
        const uid = firebaseApp.auth().currentUser.uid;
        const database = firebaseApp.database();
        var taskAll = database.ref('users/'+uid+'/task/all/' + key);
        if (category !== 'all'){
            var taskCategory = database.ref('users/' + uid + '/task/' + category + '/' + key );
            taskCategory.update({
                complete: !checked,
            })
        }
        taskAll.update({
            complete: !checked
        })
        this.setState({
            checked: !checked,

        })
    }

    render(){
        const {checked, task} = this.state;
        return (
            <View style={styleCategory.taskGroup}>
                <Text style={checked ? styleCategory.taskCompleteText : styleCategory.taskText}>{task}</Text>
                <CheckBox 
                    checkedIcon='check-square'
                    uncheckedIcon='square-o'
                    size={25}
                    checkedColor='#5786FF'
                    onPress={this.onToggle}
                    checked={checked}/>
            </View>
    );
}
}

export default TaskItem;