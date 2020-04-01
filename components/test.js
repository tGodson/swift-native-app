import React, { Component } from 'react';
 
import { AppRegistry, StyleSheet, TextInput, View, Alert, Button } from 'react-native';
 
export default class MainProject extends React.Component {
 
constructor(props) {
 
    super(props)
 
    this.state = {
 
      TextInputName: '',
      TextInputEmail: '',
      TextInputPhoneNumber: ''
 
    }
 
  }
 
  InsertDataToServer = () =>{

 
 const { TextInputName }  = this.state ;
 const { TextInputEmail }  = this.state ;
 const { TextInputPhoneNumber }  = this.state ;

 

fetch('https://reactnativecode.000webhostapp.com/submit_user_info.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({

    name: TextInputName,

    email: TextInputEmail,

    phone_number: TextInputPhoneNumber

  })

}).then((response) => response.json())
      .then((responseJson) => {

// Showing response message coming from server after inserting records.
        Alert.alert(responseJson);

      }).catch((error) => {
        console.error(error);
      });
 
 
  }
 
  render() {
    return (
 
<View style={styles.MainContainer}>
  
        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter Name"
 
          onChangeText={TextInputName => this.setState({TextInputName})}

          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />

        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter Email"
 
          onChangeText={TextInputEmail => this.setState({TextInputEmail})}

          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />

        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter Phone Number"
 
          onChangeText={TextInputPhoneNumber => this.setState({TextInputPhoneNumber})}

          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />
 
        <Button title="Insert Text Input Data to Server" onPress={this.InsertDataToServer} color="#2196F3" />
      
  
 
</View>
            
    );
  }
}
 
const styles = StyleSheet.create({
 
MainContainer :{
 
justifyContent: 'center',
flex:1,
margin: 10
},

TextInputStyleClass: {

textAlign: 'center',
marginBottom: 7,
height: 40,
borderWidth: 1,
// Set border Hex Color Code Here.
 borderColor: '#FF5722',
 
// Set border Radius.
 //borderRadius: 10 ,
}
 
});
 
AppRegistry.registerComponent('MainProject', () => MainProject);
