import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
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
        setAllDogs(dogArray);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (isLoading) {
    return <Text>...loading</Text>;
  }
  return (
    <View style={styles.container}>
      {allDogs.map((imageUri) => {
        return (
          <Image
            style={{ width: 100, height: 100, margin: 5 }}
            source={{ uri: `${photoDir}/${imageUri}` }}
            key={imageUri}
          />
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5f9ea0',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
});

export default GalleryScreen;
