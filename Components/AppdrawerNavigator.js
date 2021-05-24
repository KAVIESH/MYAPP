import React from 'react';
import {AppTabNavigator} from './AppTabNAvigator'
import CustomSideBarMenu from './CustomSideBarMenu'
import SettingsScreen from '../Screens/SettingScreen'
import PetRequest from '../Screens/PetRequest'
import Notification from '../Screens/NotificationScreen'
import GiveThePet from '../Screens/GiveThePet'

export const AppDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: AppTabNavigator,
        navigationOptions: {
            drawericon: <Icon name = 'home' type = 'font-awesome'/>
        }
    },

Notification: {
    screen: Notification,
    navigationOptions: {
    drawericon: <Icon name = 'bell' type = 'font-awesome'></Icon>,
    drawerLabel: 'Notification'
    }
},

GiveThePet: {
    screen: GiveThePet,
    navigationOptions: {
        drawericon: <Icon name = 'gift' type = 'font-awesome'></Icon>,
        drawerLabel: 'giveThePet'
    }
},

setting: {
    screen: SettingsScreen,
    navigationOptions:{
        drawericon: <Icon name = 'settings' type = 'font-awesome'></Icon>,
        drawerLable: 'settings'
    }
},

PetRequest: {
    screen: PetRequest,
    navigationOptions: {
        drawerIcon: <Icon name = 'request' type = 'font-awesome'></Icon>
    }
},
},

{
    contentComponent: CustomSideBarMenu

},

{initialRouteName: 'Home'}

)