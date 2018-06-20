import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import UserPhoto from 'components/user-photo.js';
import Category from 'components/category.js';
import Typography from 'styles/typography.js';
import Colors from 'styles/colors.js';

export default class Menu extends Component {
    render() {
        return (
            <View style={styles.background}>
                <UserPhoto/>
                <View style={{alignItems: 'center'}}>
                    <Text style={[Typography.header, styles.menuTitle]}>Hello, Kelt!</Text>
                    <Text style={[Typography.bodyWeak, styles.menuItem]}>Your schedule</Text>
                    <Text style={[Typography.bodyWeak, styles.menuItem]}>Your tasks</Text>
                </View>
                <View style={styles.hr}></View>
                <Category color="#5BD0C6" text="Work"/>
                <Category color="#D64713" text="School"/>
                <Category color="#FFAA35" text="Events"/>
                <Text style={[Typography.bodyWeak, styles.menuItem]}>Add new label</Text>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    background: {
      backgroundColor: Colors.bgPrimary,
      padding: 70,
      flex: 1,
      flexDirection: "column",
      alignItems: "center"
    },
    menuItem: {
      marginTop: 30,
      opacity: 0.5
    },
    hr: {
      width: '100%',
      opacity: 0.1,
      borderColor: Colors.fontPrimary,
      borderWidth: 0.5,
      marginTop: 60,
      marginBottom: 30
    },
  });