import React, {useState} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Images from '../constants/Images';

const Header=props => {
  return (
    <View style={styles.header}>
      <Image  source={Images.Logo} style={styles.logo}/>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  )

};
const styles = StyleSheet.create({
    header: {
    width: '100%',
    backgroundColor: '#cc0000',
    paddingTop: 36,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center'
    },
    headerTitle: {
        color: 'black',
        fontSize: 18
    }
    
});

export default Header;