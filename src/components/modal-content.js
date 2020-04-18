import React, {Component} from 'react';
import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { styleCategory, styleModal } from '../styles/styles-index';
import DatePicker from 'react-native-datepicker';
import TimePicker from 'react-native-24h-timepicker';
import categoryLayout from '../utils/category.json';


class ModalContent extends Component {
    constructor(props) {
        super(props);
        this.selectCategory = this.selectCategory.bind(this);
        this.state = {
            task: '',
            isShowCategory: false,
            date: new Date(),
            time: 'Pick time',
            categoryItem: {
                "name": 'Category',
                "icon": 'attachment',
                "color": 'gray'
            }
        }
    }

    // HANDLE SET CATEGORY
    setShowCategory = () => {
        this.setState({
            isShowCategory: !this.state.isShowCategory
        })
    }

    selectCategory = (item) =>{
        this.setState({
            categoryItem: item,
            isShowCategory: !this.state.isShowCategory
        })
    }

    //HANDLE TIME PICKER
    showTimePicker = () => {
        this.TimePicker.open()    
    }
    
    onCancel = () => {
        this.TimePicker.close()
    }

    onConfirm(hour, minute) {
        if (hour == 0 || minute == 0){}
        else{
        this.setState({ time: `${hour}:${minute}` });
        }
        this.TimePicker.close();
    }

    //HANDLE CHANGE TASK
    onChangeTask= (newTask) => {
        this.setState({
            task: newTask
        })
    }

    //ONCLICK CREATE BUTTON
    onClickButton = () => {
        const {categoryItem, date, time, task} = this.state;
        console.log("task");
        console.log(task);
        console.log("date time");
        console.log(date + " , " + time);
        console.log("category");
        console.log(categoryItem);
    }

    render() {
        
        const { isShowCategory, categoryItem,time, date} = this.state;
        return (
            <View style={styleModal.content}>
                <Text style={styleModal.contentHeaderText}>What are you planning?</Text>
                <TextInput
                    editable
                    maxLength={50}
                    style={styleModal.taskInput}
                    onChangeText={(newTask) => this.onChangeTask(newTask)}
                />
                <View style={styleModal.contentButtonGroup}>
                    <DatePicker
                        style={styleModal.datePicker}
                        date={date}
                        mode="date"
                        format="DD-MM-YYYY"
                        confirmBtnText="OK"
                        cancelBtnText="Cancel"
                        placeholder='Select date'
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36,
                                borderWidth: 0,
                                fontSize: 18,
                            }
                        }}
                        onDateChange={(date) => { this.setState({ date: date }) }}
                    />
                    <TouchableOpacity 
                        style={styleModal.button}
                        onPress={this.showTimePicker}
                    >
                        <Icon name='stopwatch' size={25} color='#5786FF' style={{ paddingRight: 20 }} />
                        <Text style={styleCategory.taskText}>{time}</Text>
                    </TouchableOpacity>
                    <TimePicker
                        ref={ref => {
                            this.TimePicker = ref;
                        }}
                        onCancel={() => this.onCancel()}
                        onConfirm={(hour, minute) => this.onConfirm(hour, minute)}
                    />
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