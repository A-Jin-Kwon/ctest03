
import React, { Component } from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';


export default function DailySc() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>안녕</Text>
      </View>
    );
}
