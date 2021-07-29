import { storeDog } from './storage-utils/';

exports.snap = async (camera) => {
  let photo = await camera.takePictureAsync();
  let dogUri = await storeDog(photo.uri);
  console.log(dogUri);
  return dogUri;
};
