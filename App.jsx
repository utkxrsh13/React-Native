import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Home from './src/screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './src/screens/Profile';
import Search from './src/screens/Search';
import { NavigationContainer } from '@react-navigation/native';


const MyStack = createNativeStackNavigator();

const StackNavigator = () =>{
  return(
    <MyStack.Navigator>
      <MyStack.Screen name="Home" component={Home}/>
      <MyStack.Screen name="Profile" component={Profile}/>
      <MyStack.Screen name="Search" component={Search}/>
    </MyStack.Navigator>
  )
}

const App = () => {
  
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dadada",
    justifyContent: "center",
    alignItems: "center",
    color: "red"
  },
  input: {
    width: "100%",
    padding: 20,
    paddingVertical: 20,
  }
});
