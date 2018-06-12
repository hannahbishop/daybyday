import React from 'react';
import { StyleSheet } from 'react-native';
import Colors from './colors.js';

const typog = StyleSheet.create({
    header: {
        fontFamily: "ProximaNova-Semibold",
        fontSize: 36,
        color: Colors.fontPrimary
    },
    body: {
        color: Colors.fontPrimary,
        fontFamily: "ProximaNova-Semibold",
        fontSize: 15,
        letterSpacing: 0.5,
        marginTop: 3
    },
    bodyWeak: {
        color: Colors.fontPrimary,
        opacity: 0.3,
        fontFamily: "ProximaNova-Semibold",
        fontSize: 15,
        letterSpacing: 0.5,
    }
});

export default typog;