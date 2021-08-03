import { storeDogPic } from './storage-utils/';
import * as ImageManipulator from 'expo-image-manipulator';
import * as FileSystem from 'expo-file-system';
import axios from 'axios';
import { storeDogObj } from './storage-utils';

exports.snap = async (camera) => {
  let newDog = {};

  let photo = await camera.takePictureAsync();
  const smallPhoto = await ImageManipulator.manipulateAsync(photo.uri, [
    { resize: { width: 400 } },
  ]);

  let options = { encoding: FileSystem.EncodingType.Base64 };
  const base64image = await FileSystem.readAsStringAsync(
    smallPhoto.uri,
    options
  );

  axios
    .post('https://dog-identifier-api.herokuapp.com/api/photo', {
      base64: base64image,
    })
    .then((response) => {
      newDog = { ...response.data.prediction };
    })
    .catch((err) => {
      console.log('fetch error:', err);
    });

  let dogPicUri = await storeDogPic(photo.uri);
  newDog = { ...newDog, photoUri: dogPicUri };

  const dogObjUri = await storeDogObj(newDog);

  return dogObjUri;
};
