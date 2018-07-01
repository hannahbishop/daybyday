import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet, FlatList, Button } from 'react-native';
//import realm from 'realm.js';
import { CardEvent } from "components/CardEvent";
import { Menu } from 'components/Menu';

//let dates = realm.objects('Date');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creatingNewItem: false,
      showMenu: false
    };
    this.handleAddPress = this.handleAddPress.bind(this);
    this.menuStateOpen = this.menuStateOpen.bind(this);
    this.menuStateClosed = this.menuStateClosed.bind(this);
  }

  handleAddPress() {
    this.setState({creatingNewItem: true});
  }

  menuStateOpen() {
    this.setState({showMenu: true});
  }

  menuStateClosed() {
    this.setState({showMenu: false});
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
        <View style={styles.background}>
          <Button onPress={this.menuStateOpen} title="Show Menu"/>
          { this.state.showMenu && <Menu handleCloseMenu={this.menuStateClosed} /> }
        </View>
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