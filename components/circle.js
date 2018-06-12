import React from 'react';
import { View , StyleSheet } from 'react-native';

const Circle = (props) => (
    <View style={styles(props.color).circle}></View>
)

const styles = color => StyleSheet.create({
    circle: {
        backgroundColor: color,
        height: 8,
        width: 8,
        borderRadius: 5,
      }
});

export default Circle;
