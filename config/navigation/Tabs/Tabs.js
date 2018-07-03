import { createMaterialTopTabNavigator } from 'react-navigation';
import { colors } from 'styles/base';

import { Tasks } from 'views/Tasks';
import { Schedule } from 'views/Schedule';

import style from './style';

const Tabs = createMaterialTopTabNavigator({
    Schedule: { screen: Schedule },
    Tasks: { screen: Tasks },
}, {
    animationEnabled: true,
    swipeEnabled: true,
    order: [ 'Schedule', 'Tasks' ],
    tabBarOptions: {
        upperCaseLabel: false,
        tabStyle: style.tab,
        style: style.tabBar,
        labelStyle: style.label,
        indicatorStyle: style.indicator,
        activeTintColor: colors.fontPrimary,
        inactiveTintColor: "#4E555F"
    }
});

export default Tabs;