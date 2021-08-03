import { storeDog } from './storage-utils/';
import * as ImageManipulator from 'expo-image-manipulator';
import * as FileSystem from 'expo-file-system';

exports.snap = async (camera) => {
  let photo = await camera.takePictureAsync();
  const smallPhoto = await ImageManipulator.manipulateAsync(photo.uri, [
    { resize: { width: 200 } },
  ]);

  let options = { encoding: FileSystem.EncodingType.Base64 };
  const base64image = await FileSystem.readAsStringAsync(
    smallPhoto.uri,
    options
  );

  fetch('https://dog-identifier-api.herokuapp.com/api/breeds', {
    method: 'GET',
    body: JSON.stringify({ base64image }),
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    })
    .catch((err) => {
      console.log('fetch error:', err);
    });

  let dogUri = await storeDog(photo.uri);

  return dogUri;
};
