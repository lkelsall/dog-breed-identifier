import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen';
import HistoryScreen from './components/HistoryScreen';
import Nav from './components/nav';

const Tab = createBottomTabNavigator();

export default function App() {
  const setCamera = useState(null)[1];
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props) => {
          return <Nav {...props} />;
        }}
      >
        <Tab.Screen name="Home">
          {(props) => <HomeScreen {...props} setCamera={setCamera} />}
        </Tab.Screen>
        <Tab.Screen name="History" component={HistoryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
