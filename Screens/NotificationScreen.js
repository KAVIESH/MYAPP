import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  FlatList} from 'react-native';
import MyHeader from '../Components/MyHeader';

  export default class Notification extends React.Component{
      
   constructor(props){
       super(props);
       this.state = {
           userId: firebase.auth().currentUser.emailId,
           allNotification: []
       }
       this.notificationRef = null
   }

 
   notification = ()=>{
       this.notificationRef = db.collection("all_notifications").where(
           "notification_status", "==", "unread"
       )
       .where(
           "targeted_user_id", '==', this.state.userId
       )
       .onSnapshot(snapshot=>{
           var allNotification = []
           snapshot.docs.map(doc=>{
               var Notifications = doc.data()
               Notifications["doc_id"] = doc.doc_id
               allNotification.push(Notifications)
           })
       })


this.setState({
    allNotifications: allNotification,
})

   }

   keyExtractor = (item, index) => index.toString()

   renderItem = ({item, i}) => {
       return(
           <ListItem
           key = {i}
           title = {item.pet_name}
           subtitle = {item.message}
           leftElement = {<Icon name = "dog" type = "font-awesome" color = "red"/>}
           titleStyle = {{color: 'black', fontWeigth: 'bold'}}
   
           bottomDivder
           />
       )   
   }

   componentDidMount(){
       this.notification
   }

   componentWillUnmount(){
       this.notificationRef()
   }

   render(){
       return(
           <View style = {{flex:1}}>
               <MyHeader title = "Notifications" navigation = {this.props.navigation}/>
               <View style = {{flex: 1}}>
{
    this.state.allNotfifcations.length === 0
    ?(
        <View style = {styles.subContainer}>
<Text style = {{fontSize: 20}}>No Notification for you</Text>



        </View>
    )
    :(
        <FlatList 
        keyExtractor = {this.keyExtractor}
        data = {this.state.allNotificationLength}
        renderItem = {this.renderItem}
        ></FlatList>
    )
}
               </View>
           </View>
       )
   }
   

}


const styles = StyleSheet.create({
    subContainer: {flex: 1,}
})