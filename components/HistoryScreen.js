import React from 'react';
import { View, Text } from 'react-native';
import CardDisplay from './CardDisplay';

const HistoryScreen = () => {
  return (
    <View>
      <CardDisplay>{CardDisplay}</CardDisplay>
      <Text>This is the history screen</Text>
    </View>
  );
};

export default HistoryScreen;
