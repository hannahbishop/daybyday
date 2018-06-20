import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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