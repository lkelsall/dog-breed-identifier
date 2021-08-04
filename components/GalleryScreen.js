import React from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useState, useEffect } from 'react';
import { readDirectory } from '../utils/storage-utils';
import Loading from './Loading';

const GalleryScreen = ({ setCurrentDog }) => {
  const [isLoading, setIsLoading] = useState(true);

  const [allDogs, setAllDogs] = useState([]);

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
    return (
      <View>
        <Loading />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        {allDogs.map((dogObject) => {
          return (
            <TouchableOpacity
              key={dogObject.photoUri}
              onPress={() => {
                setCurrentDog(dogObject);
              }}
            >
              <Image
                style={{ width: 100, height: 100, margin: 5 }}
                source={{ uri: dogObject.photoUri }}
              />
            </TouchableOpacity>
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

GalleryScreen.propTypes = {
  setCurrentDog: PropTypes.func,
};

export default GalleryScreen;
