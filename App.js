import React from 'react';
import {createAppContainer, createSwitchNavigator,} from 'react-navigation'
import WelcomScreen from './Screens/WelcomeScreen'
import {AppDrawerNavigator} from './Components/AppdrawerNavigator'


export default function App() {
return(
  <AppContainer></AppContainer>
);
}

const switchNavigator = createSwitchNavigator({
  WelcomScreen: {screen: WelcomScreen},
  Drawer: {screen: AppDrawerNavigator}
})

const AppContainer = createAppContainer(switchNavigator);
