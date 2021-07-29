import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import PropTypes from 'prop-types';

const HomeScreen = ({ setCamera }) => {
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null || hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>
          This App requires access to your phone&apos;s camera in order to
          identify dogs!
        </Text>
      </View>
    );
  }
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
};

export default HomeScreen;
