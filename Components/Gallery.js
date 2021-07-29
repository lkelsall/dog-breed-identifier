import React, { useEffect } from 'react';
//import { useState } from 'react';
import { View, Image, Text } from 'react-native';
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

  // const [dogPictures] = useState([
  //   {
  //     dogImage: require('../dog-images/dalmation.jpg'),
  //     characteristic1: 'Happy nature',
  //     createdAt: '27-07-2021-15-10',
  //     breed: 'dalmation',
  //   },
  //   {
  //     dogImage: require('../dog-images/husky.jpeg'),
  //     characteristic1: 'Happy nature',
  //     createdAt: '27-07-2021-15-15',
  //     breed: 'dalmation',
  //   },
  //   {
  //     dogImage: require('../dog-images/labrador.jpg'),
  //     characteristic1: 'Happy nature',
  //     createdAt: '27-07-2021-15-20',
  //     breed: 'dalmation',
  //   },
  //   {
  //     dogImage: require('../dog-images/pug.jpg'),
  //     characteristic1: 'Happy nature',
  //     createdAt: '27-07-2021-15-30',
  //     breed: 'dalmation',
  //   },
  //   {
  //     dogImage: require('../dog-images/puppy.jpg'),
  //     characteristic1: 'Happy nature',
  //     createdAt: '27-07-2021-15-40',
  //     breed: 'dalmation',
  //   },
  // ]);
  // const listDogs = () => {
  //   return dogPictures.map((dog) => {
  return (
    <View>
      <Text>It's working</Text>
    </View>
  );
  //   });
  // };

  // return <View>{listDogs()}</View>;
};
export default Gallery;
