import * as FileSystem from 'expo-file-system';

const photoDir = FileSystem.documentDirectory + 'dogs/';

export const storeDog = async (uri) => {
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
export const readDirectory = async () => {
  const arrFileNameStrings = await FileSystem.readDirectoryAsync(photoDir);

  return arrFileNameStrings;
};
