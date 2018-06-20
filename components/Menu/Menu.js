import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Category } from './Category';
import { UserPhoto } from './UserPhoto';
import Typography from 'styles/typography.js';
import style from './style';

export default class Menu extends Component {
    render() {
        return (
            <View style={style.background}>
                <UserPhoto/>
                <View style={{alignItems: 'center'}}>
                    <Text style={[Typography.header, style.menuTitle]}>Hello, Kelt!</Text>
                    <Text style={[Typography.bodyWeak, style.menuItem]}>Your schedule</Text>
                    <Text style={[Typography.bodyWeak, style.menuItem]}>Your tasks</Text>
                </View>
                <View style={style.hr}></View>
                <Category color="#5BD0C6" text="Work"/>
                <Category color="#D64713" text="School"/>
                <Category color="#FFAA35" text="Events"/>
                <Text style={[Typography.bodyWeak, style.menuItem]}>Add new label</Text>
            </View>
        )
    }
};