import React from 'react';
import { View, Text } from 'react-native';
import { Circle } from 'components/Circle';
import style from './style';

const Category = (props) => (
    <View style={style.category}>
        <Circle style={style.circle} color={props.color}></Circle>
        <Text style={[style.bodyWeak, style.menuItem]}>{props.text}</Text>
    </View>
);

export default Category;