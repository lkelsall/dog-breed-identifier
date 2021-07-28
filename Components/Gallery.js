import React from 'react';
import { useState } from 'react';
import { View, Image } from 'react-native';
const Gallery = () => {
  const [dogPictures] = useState([
    {
      dogImage: require('../dog-images/dalmation.jpg'),
      characteristic1: 'Happy nature',
      createdAt: '27-07-2021-15-10',
      breed: 'dalmation',
    },
    {
      dogImage: require('../dog-images/husky.jpeg'),
      characteristic1: 'Happy nature',
      createdAt: '27-07-2021-15-15',
      breed: 'dalmation',
    },
    {
      dogImage: require('../dog-images/labrador.jpg'),
      characteristic1: 'Happy nature',
      createdAt: '27-07-2021-15-20',
      breed: 'dalmation',
    },
    {
      dogImage: require('../dog-images/pug.jpg'),
      characteristic1: 'Happy nature',
      createdAt: '27-07-2021-15-30',
      breed: 'dalmation',
    },
    {
      dogImage: require('../dog-images/puppy.jpg'),
      characteristic1: 'Happy nature',
      createdAt: '27-07-2021-15-40',
      breed: 'dalmation',
    },
  ]);
  const listDogs = () => {
    return dogPictures.map((dog) => {
      return (
        <View key={dog.createdAt}>
          <Image style={{ width: 200, height: 100 }} source={dog.dogImage} />
        </View>
      );
    });
  };

  return <View>{listDogs()}</View>;
};
export default Gallery;
