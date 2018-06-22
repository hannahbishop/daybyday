import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { Circle } from 'components/Circle';
import style from "./style";
import baseStyles from 'styles/base.js';

const timeStyles = props => ([
    baseStyles.bodyWeak,
    (props.time? style.time : undefined)
]);

const subtextStyles = props => ([
    baseStyles.bodyWeak,
    (props.subtext? style.subtext : undefined)
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
            <View style={style.details}>
                <Text style={baseStyles.bodyWeak}>{this.props.date}</Text>
                <Text style={baseStyles.bodyWeak}>{this.props.time}</Text>
            </View>
        );

        const time = this.state.isExpanded || (
            <Text style={timeStyles(this.props)}>{this.props.time}</Text> 
        );

        return (
        <TouchableWithoutFeedback onPress = { this.onPress }>
            <View style={style.card}>
                <View style={style.main}>
                    {time}
                    <Circle color={this.props.color}></Circle>
                    <View>
                        <Text style={baseStyles.body}>{this.props.text}</Text>
                        <Text style={subtextStyles(this.props)}>{this.props.subtext}</Text>
                    </View>
                </View>
                {details}
            </View>
        </TouchableWithoutFeedback>
        )
    }
}