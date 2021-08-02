import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const GalleryScreen = ({ route }) => {
  const { dogFileStrings } = route.params;
  console.log(dogFileStrings, 'in the gallery');
  return (
    <View>
      <Text>In the gallery</Text>
    </View>
  );
};
GalleryScreen.propTypes = {
  route: PropTypes.object,
};

export default GalleryScreen;
