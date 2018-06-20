import { StyleSheet } from 'react-native';
import Colors from 'styles/colors.js';

export default StyleSheet.create({
    background: {
      backgroundColor: Colors.bgPrimary,
      padding: 70,
      flex: 1,
      flexDirection: "column",
      alignItems: "center"
    },
    menuItem: {
      marginTop: 30,
      opacity: 0.5
    },
    hr: {
      width: '100%',
      opacity: 0.1,
      borderColor: Colors.fontPrimary,
      borderWidth: 0.5,
      marginTop: 60,
      marginBottom: 30
    },
  });