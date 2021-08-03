import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const Loading = () => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <Image source={require('../dog-images/Goodboy.jpg')}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
export default Loading;
