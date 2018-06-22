import createStyles from 'styles/base';

const style = color => createStyles({
    circle: {
        backgroundColor: color,
        height: 8,
        width: 8,
        borderRadius: 5,
      }
});

export default style;