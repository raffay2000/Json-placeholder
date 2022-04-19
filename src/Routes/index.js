import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../Screens/Home'
import Post from '../Screens/Post'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PostComments from '../Screens/PostComments';
const Stack = createNativeStackNavigator();
const index = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator >
      <Stack.Screen name="Home" component={Home}  />
      <Stack.Screen name="Posts" component={Post}  />
      <Stack.Screen name="Posts Comments" component={PostComments}  />


    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default index

// const styles = StyleSheet.create({})