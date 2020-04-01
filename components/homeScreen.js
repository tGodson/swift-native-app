import * as React from 'react';
import { StyleSheet, Button, View, Image, TouchableOpacity, ImageBackground, StatusBar, Dimensions, Platform} from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from './header';
//import argonTheme from '../constants/Theme';
//import Images from '../constants/Images';
const { height, width } = Dimensions.get('screen');
//const myIcon = <Icon name="rocket" size={30} color="#900" />;

export default class HomeScreen extends React.Component {
  
  render(){
  
      return (
      
        <View style={styles.screen}>
         {/*<ImageBackground  source={Images.Onboarding} style= {styles.backgroundImage}>*/}
         {/*<Image  source={Images.Logo} style={styles.logo}/>*/}
         <Header />
        <View style={styles.container}>
        
            <View style={styles.package} > 
              <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('SendPackage')}>
              <Text style={{color: '#fff'}}>Request a pickup for your package at your current location, anytime</Text>
                <View style={{width:'100%'}}>
                <Text style={styles.packageB}>SEND PACKAGE</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('ReceivePackage')}>
              <Text style={{color: '#fff'}}>Request a pickup for your package at your senders location, anytime</Text>
                <View style={{width:'100%'}}>
                <Text style={styles.packageB}>RECEIVE PACKAGE</Text>
                </View>
              </TouchableOpacity>
              
            </View>
            <TouchableOpacity style={styles.track} 
              onPress={() => this.props.navigation.navigate('Track')}>
              <Text style={styles.buttonText}>
                TRACK PACKAGE
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sign}>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('SignIn')}>
              <Text style={styles.buttonText}>SIGN IN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('SignUp')}>
              <Text style={styles.buttonText}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
        {/*</ImageBackground>*/}
        </View>
      );
    }
}

  const styles = StyleSheet.create({

    backgroundImage: {
      flex: 1,
      alignSelf: 'stretch',
      height: height, width: width, zIndex: 1,
    },
    packageB:{
      width:'100%',
      borderRadius: 5,
      backgroundColor:'#cc0000',
      padding: 5,
      justifyContent: 'center',
      alignItems: 'center',
      color:'#fff',
    },
    logo: {
      marginLeft: '39%',
      zIndex: 2,
      position: 'relative',
      marginTop: '10%'
    },
    container: {
      padding: 20,
      marginTop: 20,
      //backgroundColor: theme.COLORS.BLACK,
    },
    sign: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      position: 'absolute',
      bottom: 30,
      padding: 20,
      width: '100%'
    },
    buttonText:{
      color:'#fff',
      fontSize:16

    },
    package: {
      flexDirection: 'row',
      paddingBottom: 40,
      justifyContent: 'space-around',
    
    },
    screen: {
      flex: 1,
    //backgroundColor: theme.COLORS.WHITE,
    },
    button: {
     width: 150,
      borderRadius: 20,
      backgroundColor:'#333399',
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
    
    },
   track:{
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20, backgroundColor:'#333399',padding: 10,
      shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
   }
  
  });
 