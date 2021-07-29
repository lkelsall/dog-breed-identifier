import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const HistoryScreen = ({ route }) => {
  const { photo } = route.params;
  console.log(photo);

  // const readPhoto = async (photo) => {
  //   const photoString = await FileSystem.readAsStringAsync(photo);
  // };

  // useEffect(() => {
  //   readPhoto();
  // });

  return (
    <View>
      <Text>This is the history screen</Text>
    </View>
  );
};

HistoryScreen.propTypes = {
  route: PropTypes.object,
};

export default HistoryScreen;
