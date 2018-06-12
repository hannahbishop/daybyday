import React, { Component } from 'react';
import { AppRegistry, View, Text,  StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Circle from './circle.js';
import Typography from '../styles/typography.js';

const timeStyles = props => ([
    Typography.bodyWeak,
    (props.time? styles.time : undefined)
]);

const subtextStyles = props => ([
    Typography.bodyWeak,
    (props.subtext? styles.subtext : undefined)
]);

export default class CardEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {isExpanded: false};
        this.onPress = this.onPress.bind(this)
    };

    onPress() {
    this.setState(prevState => ({
        isExpanded: !prevState.isExpanded
        }));
    };

    render() {
        const details = this.state.isExpanded && (
            <View style={styles.details}>
                <Text style={Typography.bodyWeak}>{this.props.date}</Text>
                <Text style={Typography.bodyWeak}>{this.props.time}</Text>
            </View>
        );

        const time = this.state.isExpanded || (
            <Text style={timeStyles(this.props)}>{this.props.time}</Text> 
        );

        return (
        <TouchableWithoutFeedback onPress = { this.onPress }>
            <View style={styles.card}>
                <View style={styles.main}>
                    {time}
                    <Circle color={this.props.color}></Circle>
                    <View>
                        <Text style={Typography.body}>{this.props.text}</Text>
                        <Text style={subtextStyles(this.props)}>{this.props.subtext}</Text>
                    </View>
                </View>
                {details}
            </View>
        </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        paddingVertical: 40,
        paddingHorizontal: 30,
        marginVertical: 10,
        marginHorizontal: 20,
        backgroundColor:"#2C3440",
        borderRadius: 4,
        flexDirection: "column",
        alignItems: "stretch",
        elevation: 2,
    },
    main: {
        flexDirection: "row",
        alignItems: "center",
    },
    subtext: {
        marginTop: 10,
    },
    time: {
        marginRight: 30,
        maxWidth: 65,
    }
});