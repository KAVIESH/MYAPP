import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert} from 'react-native';

  export default class SettingsScreen extends React.Component{

constructor(){
    super();
    this.state = {
        emailId: '',
        firstName: '',
        lastName: '',
        Address: '',
        Contact: '',
        docId: '',
    }
}

userDetails = ()=>{
    db.collection('users').doc(this.state.docId)
    .update({
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        address: this.state.address,
        contact: this.state.contact,
    })

return  Alert.alert("Profile is updated Succefully")
}

componentDidMount(){
    this.userDetails()
}

getUserDetails = ()=>{
    var email = firebase.auth().currentUser.email;
        db.collection('users').where('email_id','==',email).get()
        .then(snapshot => {
            snapshot.forEach(doc =>{
                var data = doc.data()
this.setState({
emailId: data.email_Id,
firstName: data.first_name,
lastName: data.last_name,
Contact: data.contact,
Adress: data.address,
docId: doc.id,

})
            })
        })
}

render(){
    return(
        <View style= {styles.container}>
            <MyHeader title = "Settings" navigation = {this.props.navigation}/>
            <View stye = {styles.container}>
            <Text style = {styles.label}>First Name</Text>
<TextInput
          style={styles.formTextInput}
          placeholder ={"First Name"}
          maxLength ={8}
          onChangeText={(text)=>{
            this.setState({
              firstName: text
            })
          }}

value = {this.state.firstName}

        />

<Text style = {styles.label}>
    Last Name
    </Text>

    <TextInput style = {styles.formTextInput}
    placeholder = {"Last Name"}
    maxLength = {8}
    onChangeText = {(text)=>{
        this.setState({
            lastName: text
        })
    }}

value = {this.state.lastName}

    >

    </TextInput>

    <Text style = {styles.label}>
Contact

    </Text>

<TextInput style = {styles.formTextInput}
placeholder = {"Contact"}
maxLength = {10}
keyboardType = {'numeric'}
onChangeText = {(text)=>{
    this.setState({
contact: text
    })
}}

value = {this.state.contact}

>

</TextInput>

<Text style = {styles.label}>

    Address
</Text>

<TextInput style = {styles.formTextInput}
placeholder = {"Address"}
    multiline = {true}
    onChangeText = {(text)=>{
        this.setState({
            address: text
        })
    }}

value = {this.state.address}

>

</TextInput>

<TouchableOpacity style = {styles.button}
onPress = {()=>{
    this.userDetails()
}}
></TouchableOpacity>

            </View>
        </View>

    )
}

  }
      

  const styles = StyleSheet.create({ container : { flex:1, alignItems: 'center', justifyContent: 'center' },
  formContainer:{ flex:1, width:'100%', alignItems: 'center' },
  formTextInput:{ width:"75%", height:RFValue(35), alignSelf:'center', borderColor:'#ffab91', borderRadius:10, borderWidth:1, marginTop:20, padding:RFValue(10), },
  button:{
    width:300,
    height:RFValue(50),
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"#ff9800",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
       shadowOpacity: 0.30,
     shadowRadius: 10.32,
     elevation: 16,
     padding: RFValues(10)
    }},
  buttonText:{ fontSize:RFValue(25), fontWeight:"bold", color:"#fff" }, label:{
    fontSize: RFValue(18),
  color: 'red',
  fontWeight: bold,
  padding: RFValue(10),
  marginLeft: RFValue(20),
  
  } })