import * as React from 'react';
import { StyleSheet, View, Alert, Image, TextInput,ImageBackground,Dimensions, TouchableOpacity } from 'react-native';
import Header from './header';
import { Block,Text,theme } from 'galio-framework';
import Images from '../constants/Images';
const { height, width } = Dimensions.get('screen');

export default class SignUp extends React.Component {
    constructor(props){
        super(props)
        this.state={
            fullName:'',
            phoneNumber:'',
            location:'',
            email:'',
            password:''
        }
    }
    registration= () => {
        
    const {fullName,phoneNumber,location,email,password}=this.state;
   
      fetch('https://oliversspa.com/register.php',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
         name:fullName,
         number:phoneNumber,
         location:location,
         email:email,
         password:password,
      }),
    })
    .then((response) => response.json())
    .then((responseJson) => {
      Alert.alert(responseJson);
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
          <Text style={styles.formHeader}>Sign Up</Text>
          <TextInput style={styles.input} placeholder="Full Name" underlineColorAndroid={"transparent"} 
          onChangeText={fullName => this.setState({fullName})} />
          <TextInput style={styles.input} placeholder="Telephone Number" underlineColorAndroid={"transparent"} 
          onChangeText={phoneNumber => this.setState({phoneNumber})} />
          <TextInput style={styles.input} placeholder="Location" underlineColorAndroid={"transparent"} 
          onChangeText={location => this.setState({location})} />
          <TextInput style={styles.input} placeholder="Email" underlineColorAndroid={"transparent"} 
          onChangeText={email => this.setState({email})} />
          <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} underlineColorAndroid={"transparent"} 
          onChangeText={password => this.setState({password})} />
          <TouchableOpacity style={styles.button} onPress={this.registration}>
            <Text style={styles.buttonText}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
        {/*</View></ImageBackground>*/}
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
    logo: {
      marginLeft: '39%',
      zIndex: 2,
      position: 'relative',
      marginTop: '5%'
    },
    form: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: 50,
    },
    backgroundImage: {
      flex: 1,
      alignSelf: 'stretch',
      height: height, width: width, zIndex: 1,
    },
    formHeader: {
      fontSize: 24,
      borderBottomWidth: 1,
      borderBottomColor: 'black',
      paddingBottom: 10,
      marginBottom: 20,
      marginTop: 10,
    },
    input: {
      alignSelf: "stretch",
      height: 40,
      marginBottom: 10,
      borderBottomColor: 'black',
      borderBottomWidth: 1,
    },
    button: {
      width: 160,
      borderRadius: 30,
      margin: 25,
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
  