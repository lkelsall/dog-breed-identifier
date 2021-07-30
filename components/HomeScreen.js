import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import PropTypes from 'prop-types';

const HomeScreen = ({ setCamera, navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    navigation.addListener('focus', () => {
      setIsFocused(true);
    });
    navigation.addListener('blur', () => {
      setIsFocused(false);
    })(async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  } else if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>
          This App requires access to your phone&apos;s camera in order to
          identify dogs!
        </Text>
      </View>
    );
  } else if (isFocused === true) {
    return (
      <View style={styles.container}>
        <Camera
          style={styles.camera}
          type={Camera.Constants.Type.back}
          ref={(r) => {
            setCamera(r);
          }}
        />
      </View>
    );
  }

  return <View />;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  camera: {
    width: '100%',
    height: '100%',
  },
  error: {
    margin: '10%',
    fontSize: 32,
  },
});

HomeScreen.propTypes = {
  setCamera: PropTypes.func,
  navigation: PropTypes.object,
};

export default HomeScreen;
