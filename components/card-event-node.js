import React from 'react';
import { Text } from 'react-native';
import CardEvent from './card-event.js';

const CardEventNode = (props) => {
    keys = Object.getOwnPropertyNames(props.date.events);
    events = props.date.events;
    return (
        <Text>Um</Text>
        /*
        keys.map((k) => {
            <Text>{props.date.events[0].name}</Text>
        })
        */
    )
}

export default CardEventNode;
//<CardEvent color={props.date.events[k].label} text="{events[k].name}" date="{props.date}"></CardEvent>