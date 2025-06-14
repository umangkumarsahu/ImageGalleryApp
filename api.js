import axios from 'axios';

export const fetchRecentImages = async () => {
  const URL = 'https://jsonplaceholder.typicode.com/photos?_limit=20';
  const response = await axios.get(URL);
  return response.data;
};