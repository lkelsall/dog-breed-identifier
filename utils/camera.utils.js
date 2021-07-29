import AsyncStorage from '@react-native-async-storage/async-storage';

exports.snap = async (camera) => {
  let photo = await camera.takePictureAsync({ base64: true });
  const key = String(Date.now());
  await AsyncStorage.setItem(key, photo.base64);
  return key;
};
