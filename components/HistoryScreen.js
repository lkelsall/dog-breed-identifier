import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import CardDisplay from './CardDisplay';

const HistoryScreen = () => {
  // const { dogUri } = route.params;

  return (
    <View>
      <CardDisplay>{CardDisplay}</CardDisplay>
      <Text>This is the history screen</Text>
    </View>
  );
};

HistoryScreen.propTypes = {
  route: PropTypes.object,
};

export default HistoryScreen;
