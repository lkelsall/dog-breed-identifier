import { storeDog } from './storage-utils/';
import * as ImageManipulator from 'expo-image-manipulator';
import * as FileSystem from 'expo-file-system';
import axios from 'axios';

exports.snap = async (camera) => {
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
      console.log('log in snap:', response.data);
    })
    .catch((err) => {
      console.log('fetch error:', err);
    });

  let dogUri = await storeDog(photo.uri);

  return dogUri;
};
