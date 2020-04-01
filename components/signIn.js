import * as React from 'react';
import { StyleSheet, View,AsyncStorage, Alert, Image, TextInput,ImageBackground,Dimensions, TouchableOpacity } from 'react-native';
import Header from './header';
import { Block,Text,theme } from 'galio-framework';
import Images from '../constants/Images';
const { height, width } = Dimensions.get('screen');

export default class SignIn extends React.Component {

  constructor(props){
    super(props)
    this.state={
      user:'',
      password:''
    }
  }

  login= () => {
    const {user,password}=this.state;
   
    fetch('https://oliversspa.com/login.php',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        //'credentials': 'include'
      },
      body: JSON.stringify({
        user:user,
        password:password,
      }),
    })
    .then((response) => response.json())
    .then((responseJson) => {
        // If server response message same as Data Matched
        if(responseJson === 'You are successfully logedin!'){
          AsyncStorage.setItem('user', JSON.stringify(user));
          //SecureStore.setItemAsync(key, value, options)
            //Then open Profile activity and send user email to profile activity.
            this.props.navigation.navigate('Dashboard', { User: user });
        }else if(responseJson === 'You are successfully logedin as an agent!'){
          AsyncStorage.setItem('user', JSON.stringify(agent));
          this.props.navigation.navigate('Agent', { Agent: agent });
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
            <Text style={styles.formHeader}>Sign In</Text>
            <TextInput style={styles.input} placeholder="Email or Phone Number" underlineColorAndroid={"transparent"} 
            onChangeText={user => this.setState({user})} />
            <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} underlineColorAndroid={"transparent"} 
            onChangeText={password => this.setState({password})} />
            <TouchableOpacity style={styles.button} onPress={this.login}>
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
      flex: 1
    },
    buttonText:{
      color:'#fff',
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
      margin: 50,
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
  