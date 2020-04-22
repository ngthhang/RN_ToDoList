import React, {Component} from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { styleCategory, styleModal } from '../styles/Index';
import DatePicker from 'react-native-datepicker';
import TimePicker from 'react-native-24h-timepicker';
import categoryLayout from '../utils/category.json';
import { firebaseApp } from '../utils/FirebaseConfig';
import Toast from '../components/Toast';

class ModalContent extends Component {
    constructor(props) {
        super(props);
        this.selectCategory = this.selectCategory.bind(this);
        this.state = {
            task: '',
            isShowCategory: false,
            categoryItem: {
                "name": 'Category',
                "icon": 'attachment',
                "color": 'gray'
            },
            isToast: false
        }
    }

    // HANDLE SET CATEGORY
    setShowCategory = () => {
        this.setState({
            isShowCategory: !this.state.isShowCategory,
            isToast: false
        })
    }

    selectCategory = (item) =>{
        this.setState({
            categoryItem: item,
            isShowCategory: !this.state.isShowCategory,
        })
    }


    //HANDLE CHANGE TASK
    onChangeTask= (newTask) => {
        this.setState({
            task: newTask
        })
    }

    //ONCLICK CREATE BUTTON
    onClickButton = () => {
        const { categoryItem, task } = this.state;
        var categoryName = categoryItem.name.charAt(0).toLowerCase() + categoryItem.name.slice(1);
        if (categoryName =='category' || categoryName == 'all'){
            categoryName = 'all';
        }
        if (task === '' || task === null){
            alert('Task cant be null');
            return
        }
        var taskData = {
            task: task,
            category: categoryName,
            complete: false
        }
        const currentUser = firebaseApp.auth().currentUser;
        const database = firebaseApp.database();
        const uid = currentUser.uid;
        const taskDB = database.ref('users/' + uid + '/task');
        taskDB.once('value').then(snapshot => {
            var totalAll = snapshot.child('all').val().total;
            taskDB.child('all').update({
                total: totalAll + 1,
            })
            if (categoryName !== 'all'){
                var totalCategory = snapshot.child(categoryName).val().total;
                taskDB.child(categoryName).update({
                    total: totalCategory + 1,
            })
            }
        })
        var key = database.ref().child('users').child(uid).child('task').child('all').push().key;
        var updates={}
        if (categoryName !== 'all') {
            updates['/all/' + key] = taskData;
            updates['/' + categoryName + '/' + key] = taskData;
            
        }else{
            updates['/all/' + key] = taskData;
        }
        database.ref('users/' + uid + '/task').update(updates);
        this.setState({
            isToast: true,
            isShowCategory: false,
            categoryItem: {
                "name": 'Category',
                "icon": 'attachment',
                "color": 'gray'
            },
            task: ''
        })
    }

    onFocus = () => {
        this.setState({
            isToast: false
        })
    }

    render() {
        const { isShowCategory, categoryItem, isToast, task} = this.state;
        return (
            <View style={styleModal.content}>
                <Toast message='New Task added !!' visible={isToast} />
                <Text style={styleModal.contentHeaderText}>What are you planning?</Text>
                <TextInput
                    editable
                    maxLength={50}
                    value={task}
                    style={styleModal.taskInput}
                    onChangeText={(newTask) => this.onChangeTask(newTask)}
                    onFocus={this.onFocus}
                />
                <View style={styleModal.contentButtonGroup}>
                    <TouchableOpacity style={styleModal.button} onPress={this.setShowCategory}>
                        <Icon name={categoryItem.icon} size={25} color={categoryItem.color} style={{ paddingRight: 20 }} />
                        <Text style={[styleModal.categoryText, {color: categoryItem.color}]}>{categoryItem.name}</Text>
                    </TouchableOpacity>
                    {isShowCategory ?(
                       <View style={styleModal.categoryGroup}>
                            {categoryLayout.map(item => (
                                <TouchableOpacity 
                                    key={item.name}
                                    style={[styleModal.tagCatergory, {backgroundColor: item.color}]}
                                    onPress={()=>this.selectCategory(item)}
                                >
                                    <Icon name={item.icon} size={20} color='#ffffff' />
                                    <Text style={[styleCategory.labelText, {color: '#ffffff'}]}>{item.name}</Text>
                                </TouchableOpacity>
                            ))}
                       </View>
                    ): null}
                    <Button title="Create" onPress={this.onClickButton} />
                </View>
            </View>
        )
    }
}

export default ModalContent;