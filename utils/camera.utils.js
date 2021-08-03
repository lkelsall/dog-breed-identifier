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

  base64image;

  let dogUri = await storeDog(photo.uri);

  return dogUri;
};
