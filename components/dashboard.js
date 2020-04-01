import * as React from 'react';
//import { confirmAlert } from 'react-confirm-alert'; // Import
//import '../node_modules/react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { StyleSheet, AsyncStorage, View, Image, TouchableOpacity, ImageBackground, Alert, Dimensions, Platform} from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import Header from './header';
import argonTheme from '../constants/Theme';
import Images from '../constants/Images';
const { height, width } = Dimensions.get('screen');

export default class Dashboard extends React.Component {

  constructor(props){
    super(props)
    this.state={
      user:'',
    }
  }
  
  async componentDidMount() {
    try{
      let user=JSON.parse(await AsyncStorage.getItem('user'));
      //alert(JSON.parse(user));
      this.setState({user:user});
    }catch(error){
      alert(error);
    }
    
  }


  request= (status) => {
    
    const request=this.state.user;
   
      fetch('https://oliversspa.com/user-request.php',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
         user:request,
         status:status,
      }),
    })
    .then((response) => response.json())
    .then((responseJson) => {
       // If server response message same as Data Matched
      
        Alert.alert(responseJson);
     
    })
    .catch((error)=>{
      console.error(error);
    });
    //this.props.navigation.navigate("Home")
  }

  confirm() {
    Alert.alert(
      'Confirmation',
      'Please confirm your request for package delivery',
      [
        {text: 'Cancel', onPress: () => this, style: 'cancel'},
        {text: 'Confirm', onPress: () => this.request('sender')},
      ]
    );
  }
  confirm2() {
    Alert.alert(
      'Confirmation',
      'Please confirm your request for package delivery',
      [
        {text: 'Cancel', onPress: () => this, style: 'cancel'},
        {text: 'Confirm', onPress: () => this.request('receiver')},
      ]
    );
  }

    render(){
        return (
          <View style={styles.screen}>
            {/*<ImageBackground  source={Images.Onboarding} style= {styles.backgroundImage}>
          <Image  source={Images.Logo} style={styles.logo}/>*/}
          <Header />
          <View style={styles.container}>
              <View style={styles.package}>
                <TouchableOpacity style={styles.button} onPress={() => this.confirm()}>
                  <Text style={styles.buttonText}>SEND PACKAGE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => this.confirm2()}>
                <Text style={styles.buttonText}>RECEIVE PACKAGE</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.track} onPress={() => this.props.navigation.navigate('Scan')}>
                <Text style={styles.buttonText}>SCAN TO TRACK</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.history}>
            <TouchableOpacity style={styles.track}  onPress={() => this.props.navigation.navigate('Transaction')}>
              <Text style={styles.buttonText}>TRACKING HISTORY</Text>
            </TouchableOpacity>
            </View>
            {/*</ImageBackground>*/}
          </View>
        );
    } 
}
const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 60,
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
  history: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 30,
    padding: 50,
    width: '100%'
    
  },
  package: {
    flexDirection: 'row',
    paddingBottom: 40,
    justifyContent: 'space-around',
    
  
  },
  screen: {
    flex: 1
  },
  button: {
    width: 140,
    borderRadius: 20,
    backgroundColor:'#333399',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
  },
  track:{
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20, backgroundColor:'#333399',padding: 12,
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
 }

});
