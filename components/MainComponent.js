import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView  } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Match from './MatchComponent';
import TheLab from './TheLabComponent';
import WarmUp from './WarmUpComponent';

const MainNavigator = createDrawerNavigator(
    {
        Login: {
            screen: WarmUp,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='sign-in'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
    }
);

const WarmUpNavigator = createStackNavigator(
    {
        WarmUp: { screen: WarmUp }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='sign-in'
                type='font-awesome'
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const AppNavigator = createAppContainer(MainNavigator)

class Main extends Component {
    
    render(){
        return(
            <View style={{
                flex: 1,
                paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
            }}>
                <AppNavigator/>
                <Match/>
            </View>
        );
    }
}

export default Main;