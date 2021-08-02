import React from 'react';
import { View, Image } from 'react-native';
import { useState, useEffect } from 'react';
import { readDirectory } from '../utils/storage-utils';

const GalleryScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [allDogs, setAllDogs] = useState([]);

  useEffect(() => {
    readDirectory()
      .then((dogArray) => {
        console.log(dogArray, 'In the useEffect');
        setAllDogs(dogArray);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (isLoading) {
    console.log('Loading');
  }
  return (
    <View>
      {allDogs.map((imageUri) => {
        return <Image source={{ uri: imageUri }} key={imageUri} />;
      })}
    </View>
  );
};

export default GalleryScreen;
