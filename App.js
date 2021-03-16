import React, {Component} from "react";
import {View, Text, TouchableOpacity, StyleSheet, TextInput} from "react-native"
import db from "./config"
import firebase from "firebase";
import WelcomeScreen from "./screens/welcomeScreen";
import {AppDrawerNavigator} from "./components/AppDrawerNavigator"
import {createSwitchNavigator, createAppContainer} from "react-navigation"

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const switchNavigator = createSwitchNavigator({
  welcomeScreen: {screen: WelcomeScreen},
  drawer: {screen: AppDrawerNavigator},
})

const AppContainer = createAppContainer(switchNavigator)