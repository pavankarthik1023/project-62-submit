import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import db from '../config'

export default class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>SCHOOL ATTENDANCE</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'darkblue',
  },
  text:{
    color: "#ff00ff",
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    fontStyle:"italic"
  }
});

