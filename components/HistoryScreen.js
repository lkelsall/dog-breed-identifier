import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import CardDisplay from './CardDisplay';
import { useState } from 'react';
import { useEffect } from 'react';
import { readDogObject } from '../utils/storage-utils';

const HistoryScreen = ({ route }) => {
  const [currentDog, setCurrentDog] = useState(null);
  const { dogUri } = route.params;

  useEffect(() => {
    if (dogUri) {
      readDogObject(dogUri).then((dogObject) => {
        setCurrentDog(dogObject);
        console.log(currentDog, 'in the HS');
      });
    }
  }, [dogUri]);

  return (
    <View>
      {currentDog ? <CardDisplay dogObject={currentDog} /> : <View></View>}
    </View>
  );
};

HistoryScreen.propTypes = {
  route: PropTypes.object,
};

export default HistoryScreen;
