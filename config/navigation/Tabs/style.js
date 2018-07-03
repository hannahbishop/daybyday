import createStyles, { colors, baseStyles } from 'styles/base';

const style = createStyles({
    label: {
        fontFamily: baseStyles.header.fontFamily,
        fontSize: baseStyles.header.fontSize,
    },
    tab: {

    },
    tabBar: {
        backgroundColor: colors.bgPrimary,
        elevation: 0,
    },
    indicator: {
        height: 0
    }
});

export default style;