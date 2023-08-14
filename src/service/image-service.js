import axios from 'axios';

const API_KEY = '36167969-d84c67dd790c21bb587af6711';

export const getImages = async (query, page) => {
  const result = await axios.get(
    `https://pixabay.com/api/?q=${query}}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return result.data;
};
