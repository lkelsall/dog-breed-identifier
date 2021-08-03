import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import CardDisplay from './CardDisplay';

const HistoryScreen = ({ route }) => {
  const { dogUri } = route.params;

  return (
    <View>
      <CardDisplay dogUri={dogUri} />
    </View>
  );
};

HistoryScreen.propTypes = {
  route: PropTypes.object,
};

export default HistoryScreen;
