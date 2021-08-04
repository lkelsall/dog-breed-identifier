import { storeDogPic } from './storage-utils/';
import * as ImageManipulator from 'expo-image-manipulator';
import * as FileSystem from 'expo-file-system';
import axios from 'axios';
import { storeDogObj } from './storage-utils';

exports.snap = async (camera, navigation) => {
  let newDog = {};

  let photo = await camera.takePictureAsync();
  navigation.navigate('History', {
    navFrom: 'snap',
  });
  const smallPhoto = await ImageManipulator.manipulateAsync(photo.uri, [
    { resize: { width: 400 } },
  ]);

  let options = { encoding: FileSystem.EncodingType.Base64 };
  const base64image = await FileSystem.readAsStringAsync(
    smallPhoto.uri,
    options
  );

  let dogPicUri = await storeDogPic(photo.uri);
  return axios
    .post('https://dog-identifier-api.herokuapp.com/api/photo', {
      base64: base64image,
    })
    .then((response) => {
      console.log(response.data.prediction, 'in api request');
      newDog = { ...response.data.prediction };

      newDog = { ...newDog, photoUri: dogPicUri };

      return storeDogObj(newDog);
    })
    .then((newDog) => {
      return newDog;
    })
    .catch((err) => {
      console.log('fetch error:', err);
    });
};
