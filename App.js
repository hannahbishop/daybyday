import React, { Component } from 'react';
import { AppRegistry, Image, View, StyleSheet, Text } from 'react-native';
import CardEvent from './components/card-event.js';

const Realm = require('realm');

let realm = new Realm({
  schema: [{name: 'Dog', properties: {name: 'string'}}]
})

realm.write(() => {
   realm.create('Dog', {name: 'Rex'});
})

export default class App extends Component {
  render() {
    return (
      <View style={styles.background}>
        <CardEvent color="#5BD0C6" text={realm.objects('Dog')[1].name} date="May 13"></CardEvent>
        <CardEvent color="#FFAA35" time="Morning" text="Breakfast with Bear" date="May 13" subtext="3 year anniversary"></CardEvent>
        <CardEvent color="#FF636C" time="3:30pm 4:30pm" text="Design meeting" date="May 13"></CardEvent>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#3B434E",
    flex: 1
  },
});

AppRegistry.registerComponent('App', () => App);