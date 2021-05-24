import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert} from 'react-native';

  import firebase from 'firebase'
  import MyHeader from '../Components/MyHeader'
  import ReceiverDetails from  './ReceiverDetails'

  export default class GiveThePet extends React.Component{

    constructor(){
        super();
        this.state = {
requestedPetList: []
        }
        this.requestRef = null
    }

    getRequestedPetList = ()=>{
      this.requestRef = db.collection("requested_pet_list")
      .onSnapshot((snapshot)=>{
        var requestedPetList = snapshot.docs.map(document => document.data());
        this.setState({
          requestedPetList: requestedPetList
        });
      })
    }

    componentDidMount(){
      this.getRequestedPetList()
    }

    componentWillUnmount(){
      this.requestRef();
    }
      

keyExtractor = ({item, index}) => index.toString()

renderItem = ({item, i}) => {
  return(
    <ListItem
    key = {i}
    tite = {item.dog_name}
    subtitle = {item.reason_to_request}
    titleStyle = {{color: 'black', fontWeight: 'bold'}}
    leftElement = {<Image style = {{heigth: 50, width: 50}}
  source = {{uri: item.image_link}}
  />
  }

  rigthElemnt = {<TouchableOpacity style = {styles.button}
  onPress = {()=>{
    this.props.navigation.navigate('ReceiverDetails', {
      "details": item
    })
  }}
  >

    <Text style = {{color: '#ffff'}}></Text>
    
    </TouchableOpacity>}
    bottomDivider
/>
  )

}

render(){
  return(
    <View style = {{flex: 1}}>
 <MyHeader title="Give The Pet" navigation ={this.props.navigation}/>
        <View style={{flex:1}}></View>
{
  this.state.requestedPetList.length === 0 
  ?(
    <View style = {styles.subContainer}>
      <Text style = {{fontSize: 20}}>List Of Times You Have Given Your Petto Someone Else</Text>
    </View>
  )
  :(
    <FlatList
    keyExtractor = {this.state.keyExtractor}
    data = {this.state.requestedPetList}
    renderItem = {this.renderItem}
    />
  )
}
    </View>
   
  )
}

}

const styles = StyleSheet.create({
  subContainer:{
    flex:1,
    fontSize: 20,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    width:100,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8
     }
  }
})