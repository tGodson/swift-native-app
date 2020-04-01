import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { MapView, Permissions } from 'expo';

export default class Gmap extends React.Component {

    state={
        latitude: null, //4.061536,
        longitude: null //9.786072,
    }

    async componentDidMount(){
        const status=await Permissions.getAsync(Permissions.LOCATION)
        if(status != 'granted'){
            const response = await Permissions.askAsync(Permissions.LOCATION)
        }
    }
  
    render(){
        return(
            <MapView
            style={{flex: 1}}
            initialRegion={{
                //latitude,
                //longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }}
            >
                
            </MapView>
        )
    }

}