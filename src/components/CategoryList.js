import React, { Component } from 'react';
import { View, Text, ScrollView, } from 'react-native';
import { styleCategory } from '../styles/Index';
import TaskItem from './TaskItem';
import Loader from '../screen/Loader';
import { firebaseApp } from '../utils/FirebaseConfig';

class CategoryList extends Component {
    constructor(props){
        super(props);
        this.state={
            listData: []
        }
    }


    async componentDidMount(){
        this.getData();
    }

    getData =async () => {
        var tempData = [];
        const { name } = this.props;
        const currentUser = firebaseApp.auth().currentUser;
        const uid = currentUser.uid;
        const database = firebaseApp.database();
        const categoryName = name.charAt(0).toLowerCase() + name.slice(1);
        const taskDB = database.ref('users/' + uid + '/task/' + categoryName);
        taskDB.once('value').then(snapshot => {
            if (snapshot.child('total').val() != 0){
                snapshot.forEach((child) => {
                    if(child.key == 'total'){}
                    else{
                        tempData.push({
                            key: child.key,
                            task: child.val().task,
                            complete: child.val().complete,
                            category: child.val().category
                        })
                        this.setState({
                            listData: tempData
                        })
                    }}
                )
            }
        })
    }

    render() {
        const {listData} = this.state;
        return (
            <View style={styleCategory.content}>
                <ScrollView contentContainerStyle={styleCategory.scrollView}>
                    <Text style={styleCategory.labelText}>All tasks</Text>
                    {listData.map((item) => (
                        <TaskItem task={item.task} category={item.category} id
                        ={item.key} key={item.key} complete={item.complete} />
                    ))}
                </ScrollView>
            </View>
        );
    }
}

export default CategoryList;