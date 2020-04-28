import {StyleSheet} from 'react-native';

const styleModal = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20
    },
    headerText:{
        fontSize: 18,
    },
    contentHeaderText:{
        fontSize: 15,
        color: 'gray',
        paddingTop: 15,
    },
    content:{
        flex: 8,
        textAlign: "center",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    taskInput:{
        flex: 2,
        textAlignVertical: 'top',
        alignContent: "flex-start",
        justifyContent: "flex-start",
        fontSize: 18,
    },
    contentButtonGroup:{
        flex: 3,
        flexDirection: "column",
        justifyContent:"flex-start",
        alignItems: "stretch",
        borderTopWidth: 1,
        borderColor: 'gray',
        width: '100%'
    },
    button:{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingVertical:20,
    },
    datePicker: {
        paddingVertical:20,
    },
    categoryText:{
        fontSize: 16,
        color: 'gray'
    }, 
    categoryGroup: {
        flex: 1,
        flexWrap: "wrap",
        alignItems:"stretch",
        justifyContent: "flex-start",
    },
    tagCatergory:{
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: "center",
        width: 100,
        height: 40,
        margin: 5,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})

const styleCategory = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: "column",
        backgroundColor: '#5786FF'
    },
    actionBar: { 
        flex: 1, 
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    header:{
        flex: 2,
        flexDirection: "column",
        alignItems: 'flex-start',
        justifyContent: "flex-start",
        paddingHorizontal: 40,
    },
    headerIcon:{
        padding: 10,
        borderRadius: 50,
        backgroundColor: '#ffffff',
        marginBottom: 25,
    },
    categoryText:{
        fontSize: 35,
        fontWeight: "bold",
        color: "white",
    },
    countTaskText:{
        fontSize: 15,
        color: "#FBFBFB"
    },
    content: {
        flex: 5,
        flexDirection: "column",
        backgroundColor: '#FBFBFB',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    scrollView:{
        paddingHorizontal: 40,
        marginBottom:20,
        marginTop:10,
        paddingBottom: 50,
    },
    taskGroup:{
        flex:1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    labelText:{
        fontSize: 15,
        color: 'gray',
        paddingVertical:15
    },
    timeText:{
        fontSize: 14,
        color: 'gray',
    },
    timeLateText:{
        fontSize: 14,
        color: '#EE4266',
    },
    taskText:{
        fontSize: 16,
        color: '#000000'
    },
    taskCompleteText:{
        fontSize: 16,
        color: '#5786FF',
        textDecorationStyle: "solid",
        textDecorationLine: "line-through"
    }
})

const styleHome = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FBFBFB'
    },
    actionBar: {
        flex:2,
        flexDirection: "row",
        alignItems:"center",
        justifyContent: "space-between"
    },
    homeHeaderTextGroup:{
        flex:3,
        flexDirection: "column",
        alignItems:"flex-start",
        paddingLeft: 20,
    },
    headerAvatarContainer:{
        flex: 1,
        alignItems:"center",
        padding:10,
    },
    userName:{
        fontSize:20,
        fontWeight: "normal",
    },  
    todayTask:{
        color: 'gray',
    },
    avatar:{
        width: "80%",
        height: "80%",
        borderRadius: 50,
    },
    content:{
        flex: 10,
    },
    addButton:{
        borderWidth: 1,
        borderColor: '#5786FF',
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        position: 'absolute',
        bottom: 10,
        right: 10,
        height: 70,
        backgroundColor: '#5786FF',
        borderRadius: 100,
    },
    taskContainerRow:{
        flex:1,
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    taskContainer:{
        flex:1,
        alignItems:"flex-start",
        justifyContent:"flex-start",
        backgroundColor: '#FFFFFF',
        marginHorizontal:8,
        marginVertical:10,
        paddingHorizontal:20,
        paddingVertical: 20,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    }, 
    taskContainerHeader:{
        fontSize:20,
        paddingTop: 30,
    },
    totalTaskText:{
        color: 'gray',
    },
})

const styleLogin = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FBFBFB',
    },
    logoApp:{
        width: 150,
        height: 150,
        marginBottom: 20,
        alignSelf: "center"
    },
    imageBackground:{
        flex: 1,
        marginVertical:20,
        justifyContent: "flex-end",
        flexDirection:"column",
    },
    welcomeText:{
        fontSize: 30,
        fontWeight: "bold",
        paddingHorizontal: 20,
    },
    loginText:{
        color: 'gray',
        fontSize: 15,
        paddingHorizontal: 20,
        marginBottom: 30,
    },
    labelText:{
        marginLeft: 15,
        fontSize: 20,
        color: "#F2F4F7",
        fontWeight: "bold",
        fontFamily: "Roboto"
    },
    inputFocus:{
        fontSize: 17,
        marginVertical: 10,
        marginHorizontal: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignSelf: "stretch",
        justifyContent: "center",
        height: 55,
        borderWidth: 2,
        borderRadius: 30,
        borderColor: "#017CFD",
        color: "#017CFD",
        backgroundColor: '#ffffff',
        fontWeight: "normal",
    },
    input:{
        fontSize: 17,
        marginVertical: 10,
        marginHorizontal: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignSelf: "stretch",
        justifyContent: "center",
        height: 55,
        borderWidth: 2,
        borderRadius: 30,
        borderColor: "#ffffff",
        color: "#017CFD",
        backgroundColor: '#ffffff',
        fontWeight: "normal",
    },
    button: {
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
        marginHorizontal:70,
        paddingHorizontal: 20,
        borderRadius: 30,
        backgroundColor: '#0148A4',
        height: 55,
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
    buttonText:{
        textAlign:"center",
        fontSize: 15,
        fontWeight: "bold",
        letterSpacing: 5,
        color: "#ffffff",
    },
    avatarContainer:{
        alignSelf: "center",
        paddingVertical:30,
    },
    noAccountText:{
        fontSize: 15,
        paddingHorizontal: 10,
        color: '#000',
    },
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    activityIndicatorWrapper:{
        backgroundColor: '#FFFFFF',
        height: 100,
        width: 100,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
}) 

export {styleLogin,styleHome,styleCategory, styleModal};