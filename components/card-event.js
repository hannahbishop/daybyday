import React from 'react';
import { View, Text,  StyleSheet } from 'react-native';
import Label from './label.js';
import Typography from '../styles/typography.js';

const timeStyles = props => ([
    Typography.bodyWeak,
    (props.time? styles.time : undefined)
]);

const subtextStyles = props => ([
    Typography.bodyWeak,
    (props.subtext? styles.subtext : undefined)
]);

const CardEvent = (props) => (
    <View style={styles.card}>
        <Text style={timeStyles(props)}>{props.time}</Text>
        <Label color={props.label}></Label>
        <View>
            <Text style={Typography.body}>{props.text}</Text>
            <Text style={subtextStyles(props)}>{props.subtext}</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    card: {
        paddingVertical: 40,
        paddingHorizontal: 30,
        marginVertical: 10,
        marginHorizontal: 20,
        backgroundColor:"#2C3440",
        borderRadius: 4,
        flexDirection: "row",
        alignItems: "center",
        elevation: 2
    },
    subtext: {
        marginTop: 10
    },
    time: {
        marginRight: 30,
        maxWidth: 65
    }
});

export default CardEvent;