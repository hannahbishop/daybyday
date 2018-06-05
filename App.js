import React, { Component } from 'react';
import { AppRegistry, Image, View, StyleSheet, Text } from 'react-native';
import CardEvent from './components/card-event.js';

export default class App extends Component {

  render() {
    return(
      <View style={styles.background}>
        <CardEvent label="#5BD0C6" text="Mother's Day"></CardEvent>
        <CardEvent label="#FFAA35" time="Morning" text="Breakfast with Bear" subtext="3 year anniversary"></CardEvent>
        <CardEvent label="#FF636C" time="3:30pm 4:30pm" text="Design meeting"></CardEvent>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#3B434E",
    flex: 1
  },
});

AppRegistry.registerComponent('App', () => App);