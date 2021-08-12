import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import CardDisplay from './CardDisplay';
import Loading from './Loading';
import Gallery from './GalleryScreen';

const HistoryScreen = ({ route, currentDog, setCurrentDog, navigation }) => {
  const { navFrom } = route.params;

  if (currentDog) {
    return (
      <CardDisplay
        setCurrentDog={setCurrentDog}
        dogObject={currentDog}
        navigation={navigation}
      />
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
        <Gallery setCurrentDog={setCurrentDog} />
      </View>
    );
  }
};

HistoryScreen.propTypes = {
  route: PropTypes.object,
};

export default HistoryScreen;
