import { StyleSheet } from 'react-native';

const style = color => StyleSheet.create({
    circle: {
        backgroundColor: color,
        height: 8,
        width: 8,
        borderRadius: 5,
      }
});

export default style;