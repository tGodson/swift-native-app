import * as React from 'react';
import { StyleSheet, Button, View, Image, TouchableOpacity, ImageBackground, TextInput, Dimensions} from 'react-native';
import Header from './header';
import { Block,Text,theme } from 'galio-framework';
import Images from '../constants/Images';
const { height, width } = Dimensions.get('screen');

export default class Track extends React.Component {
  render(){
    return (
      <View style={styles.screen}>
        {/*<ImageBackground  source={Images.Onboarding} style= {styles.backgroundImage}>
        <Image  source={Images.Logo} style={styles.logo}/>*/}
        <Header />
        <View  style={styles.form}>
          <Text style={styles.formHeader}>Track Package</Text>
          <View style={styles.track}>
            <TextInput style={styles.input} placeholder="Tracking Number" underlineColorAndroid={"transparent"} />
            <TouchableOpacity style={styles.trackButton} onPress={() => this.props.navigation.navigate('Map')}>
              <Text  style={styles.buttonText}>TRACK</Text>
            </TouchableOpacity>
          </View>
          <Text>You can also track your package by clicking on the button below to scan the bar code on your receipt.</Text>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Scan')}>
            <Text style={styles.buttonText}>SCAN TO TRACK</Text>
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
      backgroundColor:'#fff'
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
    backgroundImage: {
      flex: 1,
      alignSelf: 'stretch',
      height: height, width: width, zIndex: 1,
    },
    trackButton:{
      backgroundColor:'#cc0000',justifyContent: 'center',
      alignItems: 'center',padding: 10,borderRadius: 10,
      shadowColor: 'black',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
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
      width:200,
      marginBottom: 20,
      borderBottomColor: 'black',
      borderBottomWidth: 1,
    },
    track: {
      flexDirection: 'row',
      paddingTop:30, 
      width:'100%',
      justifyContent: 'space-between', 
      
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