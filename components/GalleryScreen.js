import React from 'react';
import { View, Image } from 'react-native';
import { useState, useEffect } from 'react';
import { readDirectory } from '../utils/storage-utils';
import * as FileSystem from 'expo-file-system';

const GalleryScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [allDogs, setAllDogs] = useState([]);
  const photoDir = FileSystem.documentDirectory + 'dogs/';

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
        console.log(`${photoDir}/${imageUri}`);
        return (
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: `${photoDir}/${imageUri}` }}
            key={imageUri}
          />
        );
      })}
    </View>
  );
};

export default GalleryScreen;
