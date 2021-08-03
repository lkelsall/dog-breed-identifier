import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import CardDisplay from './CardDisplay';
import { useState } from 'react';
import { useEffect } from 'react';
import { readDogObject } from '../utils/storage-utils';

const HistoryScreen = ({ route }) => {
  const [currentDog, setCurrentDog] = useState({});
  const { dogUri } = route.params;

  useEffect(() => {
    if (dogUri) {
      readDogObject(dogUri).then((dogObject) => {
        console.log(dogUri);
        setCurrentDog(dogObject);
      });
    }
  }, []);

  return (
    <View>
      <CardDisplay dogObject={currentDog} />
    </View>
  );
};

HistoryScreen.propTypes = {
  route: PropTypes.object,
};

export default HistoryScreen;
