import React, { Component } from 'react';
 
import { AppRegistry,AsyncStorage, StyleSheet, ActivityIndicator, Text, View, Alert } from 'react-native';
import ListView from "deprecated-react-native-listview";
 
export default class Transaction extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      user:'',
    }
  }
GetItem (name) {
   
  Alert.alert(name);
 
  }
 
  async componentDidMount() {
    try{
        let user=JSON.parse(await AsyncStorage.getItem('user'));
        //alert(JSON.parse(user));
        this.setState({user:user});
      }catch(error){
        alert(error);
      }
      
      const request=this.state.user;
    return fetch('https://oliversspa.com/transaction.php')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, function() {
          // In this block you can do something with new state.
        });
        //Alert.alert(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }
 
  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: .5,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  }
 
 
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
 
    return (
 
      <View style={styles.MainContainer}>
 
        <ListView
 
          dataSource={this.state.dataSource}
 
          renderSeparator= {this.ListViewItemSeparator}
 
          renderRow={(rowData) => <Text style={styles.rowViewContainer} 
          onPress={this.GetItem.bind(this, rowData.name)} >{rowData.name}</Text>}
 
        />
 
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
 
MainContainer :{
 
// Setting up View inside content in Vertically center.
justifyContent: 'center',
flex:1,
margin: 10
 
},
 
   rowViewContainer: {
        fontSize: 20,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
      }
 
});
 
//AppRegistry.registerComponent('Transaction', () => Transaction);