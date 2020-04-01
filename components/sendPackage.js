import * as React from 'react';
import { StyleSheet, View, Alert, Image, TextInput,ImageBackground,Dimensions, TouchableOpacity } from 'react-native';
import Header from './header';
import { Block,Text,theme } from 'galio-framework';
import Images from '../constants/Images';
const { height, width } = Dimensions.get('screen');


export default class SendPackage extends React.Component{
  constructor(props){
    super(props)
    this.state={
        fullName:'',
        phoneNumber:'',
        location:'',
        status:'sender',
        email:''
      
    }
  }
sender= () => {
const {fullName,phoneNumber,location,status,email}=this.state;

  fetch('https://oliversspa.com/request.php',{
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
     name:fullName,
     number:phoneNumber,
     location:location,
     status:status,
     email:email,
  }),
})
.then((response) => response.json())
.then((responseJson) => {
   // If server response message same as Data Matched
   if(responseJson === 'Thank you!..you will recieve a call from one of our agents in a moment.'){
    //Then open Profile activity and send user email to profile activity.
    this.props.navigation.navigate('Home');
    Alert.alert(responseJson);
  }else{
    Alert.alert(responseJson);
  }
  
})
.catch((error)=>{
  console.error(error);
});
//this.props.navigation.navigate("Home")
}
render(){
    return (
      <View style={styles.screen}>
        {/*<ImageBackground  source={Images.Onboarding} style= {styles.backgroundImage}>
        <Image  source={Images.Logo} style={styles.logo}/>*/}
        <Header />
        <View style={styles.form}>
          <Text style={styles.formHeader}>Sender's Info</Text>
          <TextInput style={styles.input} placeholder="Name" underlineColorAndroid={"transparent"} 
          onChangeText={fullName => this.setState({fullName})} />
          <TextInput style={styles.input} placeholder="Telephone Number" underlineColorAndroid={"transparent"} 
          onChangeText={phoneNumber => this.setState({phoneNumber})} />
          <TextInput style={styles.input} placeholder="Current location" underlineColorAndroid={"transparent"} 
           onChangeText={location => this.setState({location})} />
          <TextInput style={styles.input} placeholder="Email" underlineColorAndroid={"transparent"} 
          onChangeText={email => this.setState({email})} />
          <TouchableOpacity style={styles.button} onPress={this.sender}>
            <Text style={styles.buttonText}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
        {/*</ImageBackground>*/}
      </View>
    
    );
  }
}
const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: '#fff'
    },
    buttonText:{
      color:'#fff',
    },
    backgroundImage: {
      flex: 1,
      alignSelf: 'stretch',
      height: height, width: width, zIndex: 1,
    },
    logo: {
      marginLeft: '39%',
      zIndex: 2,
      position: 'relative',
      marginTop: '10%'
    },
    form: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: 50,
    },
    formHeader: {
      fontSize: 24,
      borderBottomWidth: 1,
      borderBottomColor: 'black',
      paddingBottom: 10,
      marginBottom: 20,
    },
    input: {
      alignSelf: "stretch",
      height: 40,
      marginBottom: 20,
      borderBottomColor: 'black',
      borderBottomWidth: 1,
    },
    button: {
      width: 160,
      borderRadius: 30,
      margin: 30,
      backgroundColor:'#cc0000',
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center', 
      shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
    }
  
  });
  