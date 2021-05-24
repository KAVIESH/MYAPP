import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert} from 'react-native';
  import db from '../Config';
  import firebase from 'firebase';
  import MyHeader from '../Components/MyHeader'

  export default class PetRequest extends React.Component{
 

constructor(){
   super();
   this.state = {  
       dogName: "",
       reasonToRequest: "",
       requestedDog: "",
       dogStatus: "",
       requestId: "",
       userDocId: "",
       docId: "",
       ImageLink: '',
       dataSource: "",
       requestedTime: "",
       dogBreed: "",
       isDogRequestActive: "",
    }
  

}

createUniqueId(){
    return Math.random().toString(38).substring(7);

}


addRequest = async (dogName, reasonToRequest)=>{
    var userid = this.state.userId
    var randomRequestId =  this.createUniqueId()
   db.collection('requested_dog').add({
       user_id: userId,
       "dog_name": dogName,
       "reason_to_request": reasonToRequest,
       "request_id": randomRequestId,
       dogStatus: "requested",
       date: firebase.firestore.FieldValue.serverTimeStamp(),
       image_link: dog.data[0].volumeInfo.ImageLinks.smallThumbnail
   })

await this.getDogRequest()
    db.collection('users').where('email_id', userId).get().then()
    .then(snapshot =>{
        snapshot.forEach(doc=>{
            db.collection('users').doc(doc.id).update({
                isDogRequestActive: true
            })
        })
    })

this.setState({
    dogName: '',
    reasonToRequest: '',
    requestId: randomRequestId,
})

return Alert.alert("Dog's safety is requested Successfully")

}

receivedTheDog = (dogName)=>{
    var userId = this.state.userId
    var requestId = this.state.requestId
    db.collection('received_the_dog').add({
      user_Id: userId,
      dog_Name: bookName,
      request_id: requestId,
      dogStatus: 'received'
    })  
  }


  getIsDogRequestActive = ()=>{
    db.collection('useres').where('email_id', '==', userId)
    .onSnapshot(snapshot=>{
      snapshot.forEach(doc=>{
        this.setState({
          isDogRequestActive: doc.data().isDogRequestActive,
          userDocId: doc.id
        })
      })
    })
}

getDogRequest = ()=>{
    var dogIsRequested = db.collection('requested_dog')
    .where('user_id', '==', this.state.userId).get().then(snapshot=>{
      snapshot.forEach(doc=>{
        if(doc.data().book_status!== "received"){
        this.setState({
          requestId: doc.data().request_id,
          requestedDogName: doc.data.dog_name,
          dogStatus: doc.data().dog_status,
          docId: doc.id
        })}
      })
  })}


  sendNotifictaions = ()=>{
    db.collection('users').where('email_Id', '==', this.state.userId).get().then(snapshot=>{
      snapshot.forEach(doc=>{
var name = doc.data().first_name
var lastName = doc.data().last_name
db.collection('all_notifications').where('request_id', '==', this.state.requestId).get().then(snapshot=>{
  snappshot.forEach(doc=>{
    var dog = doc.data().dog
    var dog_Name  = doc.data().dog_Name

    db.collection('all_notifications').add({
      targeted_user_id: dog,
      message: name + '' + lastName + "receive the book" + dog_Name,
      notifictaion_status: 'unread',
      dog_Name: dog_Name
    
    })
  })
})
      })
    })
  }



  componentDidMount(){
    this.getDogRequest()
    this.getIsDogRequestActive()
  }

  updateDogRequest = ()=>{
    db.collection('requested_dog').doc(this.state.docId).update({
      dog_status: 'received'
    })
    db.collection('users').where('email_id', '==', userId).get().then()
    .then(snapshot=>{
      snapshot.forEach(doc=>{
db.collection('users').doc(doc.id).update({
  isDogRequestActive: false
})
      })
    })
  
  }

    render(){
     render(
<View style = {{flex:1}}>
    <MyHeader title = "Request for a dog" navigation = {this.props.navigation}/>
    <KeyboardAvoidingView style = {styles.keyboardStyle}>
<TextInput style =  {styles.formTextInput}
placeholder = {"Enter the dog's name"}
onChangeText = {(text)=>{
    this.setState({
dogName: text
    })
}}

value = {this.state.dogName}


>

</TextInput>


<TextInput style = {styles.formTextInput}
multiline
numberOfLines = {8}
placeholder = {"Why do you need the dog"}
onChangeText = {(text)=>{
    this.setState({
        reasonToRequest: text
    })
}}
value = {this.state.reasonToRequest}
>

</TextInput>

<TextInput style = {styles.formTextInput}
placeholder = {"For how many days do you need the dog"}
numberOfLines = {8}
onChangeText = {(text)=>{
   this.setState({ requestedTime: text})
}}
></TextInput>

<TextInput style = {styles.formTextInput}
placeHolder = {"What is the breed of the dog"}
numberOfLines = {6}
onChangeText = {(text)=>{
    this.setState({
        dogBreed: text
    })
}}
>
    
</TextInput>

<TouchableOpacity
style = {styles.button}
onPress = {()=>{
    this.addRequest(this.state.dogName, this.state.reasonToRequest)

}}
>

<Text>
    Request
</Text>

</TouchableOpacity>

</KeyboardAvoidingView>

</View>
     )
 }
}

const styles = StyleSheet.create({
    keyboardStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
formTextInput: {
    width: "75%",
    height: 35,
    alignSelf: 'center',
    borderColor: 'yellow',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    padding: 10,

},

button: {
    width: "75%",
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: "#ff5722",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop:20
    },

}
)