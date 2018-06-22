import createStyles, {colors} from 'styles/base.js';

const style = createStyles({
    background: {
      backgroundColor: colors.bgPrimary,
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
      borderColor: colors.fontPrimary,
      borderWidth: 0.5,
      marginTop: 60,
      marginBottom: 30
    },
  });

export default style;