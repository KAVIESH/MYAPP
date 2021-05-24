import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import SettingScreen from '../Screens/SettingScreen'
import {createStackNavigator} from 'react-navigation-stack'
import GiveThePet from '../Screens/GiveThePet';
import ReceiverDetails from '../Screens/ReceiverDetailsScreen';


export const AppStackNavigator = createStackNavigator({
  petList: {
      screen: GiveThePet,
      navigationOptions: {
          headerShown: false,
      }
  },

  receiverDetails: {
      screen: ReceiverDetails,
      navigationOptions: {
          headerShown: false,
      }
  }
},
{
    initialRouteName : 'GiveThePet'
  })
