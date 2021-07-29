import React, { useEffect } from 'react';
//import { useState } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Gallery = () => {
  const saveDogs = async () => {
    await AsyncStorage.setItem(
      Date.now().toString(),
      JSON.stringify({
        dogImage: '../dog-images/dalmation.jpg',
        characteristic1: 'Happy nature',
        createdAt: '27-07-2021-15-10',
        breed: 'dalmation',
      })
    );
  };
  useEffect(() => {
    saveDogs();
    AsyncStorage.getAllKeys().then((response) => {
      console.log(response);
    });
  }, []); //this represents card images being saved to Async storage on phone-key value storage system

  return (
    <View>
      <Text>Its working</Text>
    </View>
  );
};
export default Gallery;
