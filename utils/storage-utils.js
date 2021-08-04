import * as FileSystem from 'expo-file-system';

const dogsDir = FileSystem.documentDirectory + 'dogs/';
const photoDir = FileSystem.documentDirectory + 'pics/';

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
  await FileSystem.writeAsStringAsync(newUri, JSON.stringify(dogObj));
  return newUri;
};
export const readDogObject = async (dogUri) => {
  const dogObject = await FileSystem.readAsStringAsync(dogUri);
  return JSON.parse(dogObject);
};

export const readDirectory = async () => {
  const dogObjectsArray = await FileSystem.readDirectoryAsync(dogsDir);
  const dogPromises = dogObjectsArray.map((dogFile) => {
    return FileSystem.readAsStringAsync(`${dogsDir}${dogFile}`).then(
      (result) => {
        return JSON.parse(result);
      }
    );
  });
  return Promise.all(dogPromises);
};
