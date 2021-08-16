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

const Gallery = ({ setCurrentDog }) => {
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
            <Image style={styles.image} source={{ uri: dogObject.photoUri }} />
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    height: '100%',
    width: '100%',
    backgroundColor: '#008080',
  },
  contentContainer: {
    margin: '5%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  image: {
    width: 105,
    height: 105,
    borderWidth: 1,
    borderColor: 'white',
    marginHorizontal: '1%',
    marginVertical: '5%',
  },
});

Gallery.propTypes = {
  setCurrentDog: PropTypes.func,
};

export default Gallery;
