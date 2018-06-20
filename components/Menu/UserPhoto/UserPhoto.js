import React from 'react';
import { View , Image } from 'react-native';
import style from './style';
import shadow from 'images/user-shadow.png';
import userImg from 'images/user.png';

const UserPhoto = (props) => (
    <View style={style.userphoto}>
        <Image
            style={style.shadow}
            source={shadow}
        />
        <Image
            style={style.image}
            source={userImg}
        />
    </View>
);

export default UserPhoto;