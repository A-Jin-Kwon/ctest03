
import React, { Component } from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

function DailySc() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }

  const Stack = createStackNavigator();
  
  class App extends Component {
   render() {
      return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="CalendarSc">
          <Stack.Screen name="CalendarSc" component={CalendarScreen} />
          <Stack.Screen name="DailyScreen" component={DailySc} />
        </Stack.Navigator>
        </NavigationContainer>
      )
    }
  }
  
  export default App;
  