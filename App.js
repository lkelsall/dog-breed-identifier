import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen';
import HistoryScreen from './components/HistoryScreen';
import Nav from './components/nav';

const Tab = createBottomTabNavigator();

export default function App() {
  const [currentDog, setCurrentDog] = useState(null);
  const [camera, setCamera] = useState(null);
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props, setParams) => {
          return (
            <Nav
              {...props}
              camera={camera}
              setCurrentDog={setCurrentDog}
              {...setParams}
            />
          );
        }}
      >
        <Tab.Screen name="Home">
          {(props) => <HomeScreen {...props} setCamera={setCamera} />}
        </Tab.Screen>
        <Tab.Screen name="History">
          {(props) => (
            <HistoryScreen
              {...props}
              currentDog={currentDog}
              setCurrentDog={setCurrentDog}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
