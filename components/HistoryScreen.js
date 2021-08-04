import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import CardDisplay from './CardDisplay';
import Loading from './Loading';
import GalleryScreen from './GalleryScreen';

const HistoryScreen = ({ route, currentDog, setCurrentDog }) => {
  const { navFrom } = route.params;
  console.log('top of history');

  if (currentDog) {
    return (
      <View>
        <CardDisplay setCurrentDog={setCurrentDog} dogObject={currentDog} />
      </View>
    );
  } else if (!currentDog && navFrom === 'snap') {
    console.log(' from snap');
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
