import React from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '10%',
    width: '100%',
    backgroundColor: 'blue',
  },
  historyButton: {
    alignSelf: 'flex-start',
    backgroundColor: 'green',
  },
  photoButton: {
    alignSelf: 'center',
    backgroundColor: 'red',
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
