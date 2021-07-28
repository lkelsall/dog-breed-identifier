import React from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '10%',
    width: '100%',
    backgroundColor: 'blue',
    flexDirection: 'row',
  },
  historyButton: {
    width: '20%',
    height: '100%',
    backgroundColor: 'green',
  },
  photoButton: {
    width: '40%',
    height: '100%',
    backgroundColor: 'red',
    marginLeft: '10%',
  },
});

const Nav = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.historyButton}>
        <Text>History</Text>
      </Pressable>
      <Pressable style={styles.photoButton}>
        <Text>Take photo</Text>
      </Pressable>
    </View>
  );
};

export default Nav;
