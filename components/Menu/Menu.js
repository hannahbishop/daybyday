import React, { Component } from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { Category } from './Category';
import { UserPhoto } from './UserPhoto';
import closeIcon from 'images/close-icon.png';
import style from './style';

export default class Menu extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <View style={style.background}>
                <TouchableOpacity onPress={this.props.handleCloseMenu}>
                    <Image source={closeIcon}/>
                </TouchableOpacity>
                <UserPhoto/>
                <View style={{alignItems: 'center'}}>
                    <Text style={[style.header, style.menuTitle]}>Hello, Kelt!</Text>
                    <Text style={[style.bodyWeak, style.menuItem]}>Your schedule</Text>
                    <Text style={[style.bodyWeak, style.menuItem]}>Your tasks</Text>
                </View>
                <View style={style.hr}></View>
                <Category color="#5BD0C6" text="Work"/>
                <Category color="#D64713" text="School"/>
                <Category color="#FFAA35" text="Events"/>
                <Text style={[style.bodyWeak, style.menuItem]}>Add new label</Text>
            </View>
        )
    }
};