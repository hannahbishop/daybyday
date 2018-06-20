import React from 'react';
import { View } from 'react-native';
import style from './style';

const Circle = (props) => (
    <View style={style(props.color).circle}></View>
)

export default Circle;