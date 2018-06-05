import React from 'react';
import { View , StyleSheet } from 'react-native';

const Label = (props) => (
    <View style={styles(props.color).label}></View>
)

const styles = color => StyleSheet.create({
    label: {
        backgroundColor: color,
        height: 10,
        width: 10,
        borderRadius: 5,
        marginRight: 30
      }
});

export default Label;
