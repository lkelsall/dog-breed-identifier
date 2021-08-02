import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen';
import HistoryScreen from './components/HistoryScreen';
import GalleryScreen from './components/GalleryScreen';
import Nav from './components/nav';

const Tab = createBottomTabNavigator();

export default function App() {
  const [camera, setCamera] = useState(null);
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props, setParams) => {
          return <Nav {...props} camera={camera} {...setParams} />;
        }}
      >
        <Tab.Screen name="Home">
          {(props) => <HomeScreen {...props} setCamera={setCamera} />}
        </Tab.Screen>
        <Tab.Screen name="History" component={HistoryScreen} />
        <Tab.Screen name="Gallery" component={GalleryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
