import React from 'react';
import { ScrollView, View, Image, StyleSheet, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { readDirectory } from '../utils/storage-utils';
import * as FileSystem from 'expo-file-system';
import { useIsFocused } from '@react-navigation/native';

const GalleryScreen = () => {
  console.log('in gallery');
  const isFocused = useIsFocused();
  const [isLoading, setIsLoading] = useState(true);

  const [allDogs, setAllDogs] = useState([]);

  const dogsDir = FileSystem.documentDirectory + 'dogs/';

  useEffect(() => {
    readDirectory()
      .then((dogArray) => {
        console.log(dogArray);
        setAllDogs(dogArray);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isFocused]);
  if (isLoading) {
    return <Text>...loading</Text>;
  }
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        {allDogs.map((imageUri) => {
          return (
            <Image
              style={{ width: 100, height: 100, margin: 5 }}
              source={{ uri: `${photoDir}/${imageUri}` }}
              key={imageUri}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b0e0e6',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
  title: {
    flex: 1,
    color: 'white',
    flexGrow: 1,
    position: 'absolute',
    paddingTop: 45,
    paddingBottom: 20,
  },
  scrollView: {
    height: '100%',
    width: '98%',
    margin: 20,
    alignSelf: 'center',
    padding: 20,
    borderWidth: 5,
    borderRadius: 5,
    borderColor: 'black',
    backgroundColor: '#008080',
  },
});

export default GalleryScreen;
