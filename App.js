import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet, FlatList } from 'react-native';
//import realm from 'realm.js';
import { CardEvent } from "components/CardEvent";
import { Menu } from 'components/Menu';

//let dates = realm.objects('Date');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {creatingNewItem: false};
    this.handleAddPress = this.handleAddPress.bind(this);
  }

  handleAddPress() {
    this.setState({creatingNewItem: true});
  }

  render() {
    return (
      /*
      <FlatList 
        style={styles.background}
        data={dates}
        renderItem={({item}) => (
          <View>
            {
              item.events.map((event) => (
                <CardEvent color={event.label} text={event.name} time={event.time}></CardEvent>
              ))
            }
          </View>
        )}
        />*/
        <Menu/>
        /*
        <TouchableWithoutFeedback onPress={this.handleAddPress}><Text>+</Text></TouchableWithoutFeedback>
        {
          this.state.creatingNewItem && (
          <View style={styles.overlayBackground}>
            <EventCalendar></EventCalendar>
          </View>
          )
        }
        */
    )
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#3B434E",
    flex: 1,
  },
  overlayBackground: {
    height: "100%",
    width: "100%",
    position: "absolute",
    opacity: 0.5,
    backgroundColor: "#3B434E",
  }
});

AppRegistry.registerComponent('App', () => App);