import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import CardDisplay from './CardDisplay';

const HistoryScreen = ({ route }) => {
  const { dogUri } = route.params;
  console.log(dogUri, 'in the history screen');
  if (!Array.isArray(dogUri)) {
    return (
      <View>
        <CardDisplay dogUri={dogUri} />
      </View>
    );
  }
  return (
    <View>
      <Image
        style={{ width: 100, height: 100 }}
        source={require('../dog-images/puppy.jpg')}
      />
    </View>
  );
};

HistoryScreen.propTypes = {
  route: PropTypes.object,
};

export default HistoryScreen;
