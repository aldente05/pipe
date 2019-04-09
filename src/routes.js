/**
 * Created by f.putra on 27/11/18.
 */
import {createAppContainer, createBottomTabNavigator} from 'react-navigation';


const navigationStack = createBottomTabNavigator({
        LandingPage: {
            screen: require('./views/Home/LandingPage').default
        },
        Pipeline: {
            screen: require('./views/Pipeline/Pipeline').default
        },
    Calendar: {
            screen: require('./views/Calendar/Calendar').default
        },
    Profile: {
            screen: require('./views/Profile/Profile').default
        },
    Menu: {
            screen: require('./views/Menu/Menu').default
        }
    }, {
        tabBarPosition: 'bottom',
        initialRouteName: "Pipeline",
        animationEnabled: true,
        tabBarOptions: {
            showLabel: false,
            showIcon: true,
            activeTintColor: '#cf2b5d',
            inactiveTintColor: '#C7CCCF',
            labelStyle: {
                fontSize: 8,
            },
            iconStyle: {
                marginTop: 3,
            },
            style: {
                backgroundColor: '#f5f5f5',
            }, indicatorStyle: {
                backgroundColor: '#cf2b5d',
            }, tabStyle: {
                borderTopWidth: 1,
                borderTopColor: '#ebebf2',

            },
        },

    }
)

export default createAppContainer(navigationStack);
