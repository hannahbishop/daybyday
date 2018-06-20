import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Typography from 'styles/typography.js';
import Circle from 'components/circle.js';

const Category = (props) => (
    <View style={styles.category}>
        <Circle style={styles.circle} color={props.color}></Circle>
        <Text style={[Typography.bodyWeak, styles.menuItem]}>{props.text}</Text>
    </View>
);

const styles = StyleSheet.create({
    menuItem: {
        opacity: 0.5,
        marginLeft: 10
    },
    circle: {
        
    },
    category: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 30
    }
})

export default Category;