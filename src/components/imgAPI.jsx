 import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api';
const apiKey = '19511259-ed9d808c0bda1d8d4ca740649';
const fetchImg = (searchQuery, page = 1) => {
  return axios(
    `/?q=${searchQuery}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => response.data.hits);
};
export default { fetchImg };
