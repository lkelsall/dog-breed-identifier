import * as FileSystem from 'expo-file-system';

const dogsDir = FileSystem.documentDirectory + 'dogs/';
const photoDir = FileSystem.documentDirectory + 'dogs/pics/';

export const storeDogPic = async (uri) => {
  const newUri = `${photoDir}/${Date.now()}.jpg`;
  const directoryInfo = await FileSystem.getInfoAsync(photoDir);
  if (!directoryInfo.exists) {
    await FileSystem.makeDirectoryAsync(photoDir, { intermediates: true });
  }
  await FileSystem.moveAsync({
    from: uri,
    to: newUri,
  });
  return newUri;
};

export const storeDogObj = async (dogObj) => {
  const newUri = `${dogsDir}/${Date.now()}.txt`;
  const directoryInfo = await FileSystem.getInfoAsync(dogsDir);
  if (!directoryInfo.exist) {
    await FileSystem.makeDirectoryAsync(dogsDir, { intermediates: true });
  }
  await FileSystem.writeAsStringAsync(newUri, dogObj);
  return newUri;
};
