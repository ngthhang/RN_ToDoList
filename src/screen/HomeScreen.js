import React ,{Component} from 'react';
import {View} from 'react-native';
import {styleHome} from '../styles/Index';
import HomeHeader from '../components/HomeHeader';
import HomeScrollView from '../components/HomeScrollView';
import FloatButton from '../components/FloatButton';
import { firebaseApp } from '../utils/FirebaseConfig';
import Loader from './Loader';


class HomeScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            email: 0,
            username: 0,
            isToast: false,
            isLoading: false,
            all: 0,
            work: 0,
            music: 0,
            home: 0,
            travel: 0,
            study: 0,
            shopping: 0,
            art: 0,     
        }
    }
    async componentDidMount(){
        this.writeUserData();
    }

    writeUserData = () => {
        this.setState({
            isLoading: true
        })
        const currentUser = firebaseApp.auth().currentUser; 
        if(currentUser){
            const email = currentUser.email;
            const username = email.replace('@gmail.com', '');
            const uid = currentUser.uid;
            const imageUrl = '';
            this.setState({
                username: username,
                email: email,
            })
            const database = firebaseApp.database();
            const user = database.ref('users');
            const taskDB = database.ref('users/' + uid + '/task');
            user.once('value').then(snapshot => {
                if(snapshot.hasChild(uid)){
                }
                else {
                    const item = {total: 0}
                    database.ref('users/' + uid).set({
                        username: username,
                        email: email,
                        profile_picture: imageUrl,
                    });
                    database.ref('users/' + uid + '/task').set({
                        all:item,
                        work: item,
                        music: item,
                        home: item,
                        travel: item,
                        study: item,
                        shopping: item,
                        art: item,                   
                    });
                }
                taskDB.on('value', snapshot => {
                    this.setState({
                        all: snapshot.child('all').val().total,
                        work: snapshot.child('work').val().total,
                        music: snapshot.child('music').val().total,
                        home: snapshot.child('home').val().total,
                        travel: snapshot.child('travel').val().total,
                        study: snapshot.child('study').val().total,
                        shopping: snapshot.child('shopping').val().total,
                        art: snapshot.child('art').val().total,
                    })
                })        
            })
             
            this.setState({
                isLoading: false
            })
        }
    }

    signOut = () => {
        this.setState({
            email: 0,
            username: 0,
            all: 0,
            work: 0,
            music: 0,
            home: 0,
            travel: 0,
            study: 0,
            shopping: 0,
            art: 0,    
        })
        firebaseApp.auth().signOut();
        this.props.navigation.navigate('log-in');
    }

    render(){
        const { username, isToast, isLoading, all, art, music, travel, study, home, shopping, work} = this.state;
        return(
            <View style={styleHome.container}>
                <Loader loading={isLoading} />
                <HomeHeader signOut={this.signOut} name={username} todayTask={all} />
                <HomeScrollView 
                    navigation={this.props.navigation} 
                    all={all}
                    art={art}
                    music={music}
                    work={work}
                    study={study}
                    travel={travel}
                    home={home}
                    shopping={shopping}
                />
                <FloatButton navigation={this.props.navigation}/>
            </View>
        );
    }
}
export default HomeScreen;