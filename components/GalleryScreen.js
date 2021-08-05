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
                style={styles.image}
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
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#008080',
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
  image: {
    width: 105,
    height: 105,
    margin: 3,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ffebcd',
  },
});

GalleryScreen.propTypes = {
  setCurrentDog: PropTypes.func,
};

export default GalleryScreen;
