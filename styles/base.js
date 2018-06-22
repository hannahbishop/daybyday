import { StyleSheet } from 'react-native';

export const colors = {
    fontPrimary: '#FBFBFB',
    bgPrimary: '#2C3440',
    bgSecondary: '#3B434E',
};

const baseStyles = {
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
};

export default function createStyles(overrides = {}) {
    return StyleSheet.create({...baseStyles, ...overrides});
}; 

