exports.snap = async (camera) => {
  let photo = await camera.takePictureAsync({ base64: true });
  return photo;
};
