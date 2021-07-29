import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

const HistoryScreen = ({ route }) => {
  const { dogUri } = route.params;

  return (
    <View>
      <Text>This is the history screen</Text>
      <Image style={{ width: 100, height: 100 }} source={{ uri: dogUri }} />
    </View>
  );
};

HistoryScreen.propTypes = {
  route: PropTypes.object,
};

export default HistoryScreen;
