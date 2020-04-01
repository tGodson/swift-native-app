// In App.js in a new project
import * as React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import { StyleSheet, View, AsyncStorage, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/homeScreen';
import SignIn from './components/signIn';
import SignUp from './components/signUp.js';
import SendPackage from './components/sendPackage';
import ReceivePackage from './components/receivePackage';
import Track from './components/trackPackage';
import Map from './components/map';
import Dashboard from './components/dashboard';
import Scan from './components/scan';
import Transaction from './components/transaction';


//const path='Home';
<View>
<HomeScreen />
<SignIn />
<SignUp />
<SendPackage />
<ReceivePackage />
<Track />

</View>

const Stack = createStackNavigator();

class App extends React.Component {

  constructor(){
    super();
    this.state={
      path: 'Home',
      isLoaded: false
    }
  }

  componentDidMount() {
    AsyncStorage.getItem('user').then((token) => {
      if(token){
        this.setState({path: 'Dashboard', isLoaded: true})
      }
    });
  }
 
  render(){
    if (!this.state.isLoaded) {
      return (
        <ActivityIndicator />
      )
    } else {
  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName={this.state.path} style={styles.screen}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SendPackage" component={SendPackage} />
        <Stack.Screen name="ReceivePackage" component={ReceivePackage} />
        <Stack.Screen name="Track" component={Track} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Scan" component={Scan} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Transaction" component={Transaction} />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
    }
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
export default App;