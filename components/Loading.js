import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const Loading = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../dog-images/Goodboy.jpg')}></Image>
      <Text style={styles.text}>Fetching...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    backgroundColor: '#FBFBFB',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
  },
});
export default Loading;
