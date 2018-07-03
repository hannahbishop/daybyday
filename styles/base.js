import { StyleSheet } from 'react-native';

export const colors = {
    fontPrimary: '#FBFBFB',
    bgPrimary: '#2C3440',
    bgSecondary: '#3B434E',
};

export const baseStyles = {
    header: {
        fontFamily: "ProximaNova-Semibold",
        fontSize: 27,
        color: colors.fontPrimary
    },
    body: {
        color: colors.fontPrimary,
        fontFamily: "ProximaNova-Semibold",
        fontSize: 15,
        letterSpacing: 0.5,
        marginTop: 3
    },
    bodyWeak: {
        color: colors.fontPrimary,
        opacity: 0.3,
        fontFamily: "ProximaNova-Semibold",
        fontSize: 15,
        letterSpacing: 0.5,
    }
};

export default function createStyles(overrides = {}) {
    return StyleSheet.create({...baseStyles, ...overrides});
}; 

