import axios from 'axios';

export const getDogInfo = async (breed) => {
  const { data } = await axios.get(
    `https://dog-identifier-api.herokuapp.com/api/breeds/${breed}`
  );
  console.log(data, 'in utils');
  return data;
};
