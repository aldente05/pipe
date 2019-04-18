/**
 * Created by f.putra on 27/11/18.
 */
import {createAppContainer, createBottomTabNavigator, createStackNavigator} from 'react-navigation';

const bottomTabNavigator = createBottomTabNavigator({
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
            activeTintColor: 'rgb(170, 207, 202)',
            inactiveTintColor: 'transparent',
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

const navigationStack = createStackNavigator({
        Home: bottomTabNavigator,
        Create: {
            screen: require('./views/Pipeline/Create').default
        },
        LinkPerson: {
            screen: require('./views/Pipeline/LinkPerson').default
        },
        LinkOrganisation: {
            screen: require('./views/Pipeline/LinkOrganisation').default
        },
        DetailDeal: {
            screen: require('./views/Pipeline/DetailDeal').default
        },
    },
    {
        initialRouteName: "Home",
        headerMode: 'none',
    }
)

export default createAppContainer(navigationStack);
