import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import CardDisplay from './CardDisplay';
import { useState } from 'react';
import { useEffect } from 'react';
import { readDogObject } from '../utils/storage-utils';
import Loading from './Loading';
import GalleryScreen from './GalleryScreen';

const HistoryScreen = ({ route, currentDog, setCurrentDog }) => {
  const { dogUri, navFrom } = route.params;

  useEffect(() => {
    console.log('dogUri from history screen', dogUri);
    if (dogUri) {
      readDogObject(dogUri).then((dogObject) => {
        setCurrentDog(dogObject);
      });
    }
  }, []);

  if (currentDog) {
    return (
      <View>
        <CardDisplay dogObject={currentDog} />
      </View>
    );
  } else if (!currentDog && navFrom === 'snap') {
    return (
      <View>
        <Loading />
      </View>
    );
  } else if (!currentDog && navFrom !== 'snap') {
    return (
      <View>
        <GalleryScreen setCurrentDog={setCurrentDog} />
      </View>
    );
  }
};

HistoryScreen.propTypes = {
  route: PropTypes.object,
};

export default HistoryScreen;
