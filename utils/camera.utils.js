exports.snap = async (camera) => {
  let photo = await camera.takePictureAsync();
  return photo;
};
