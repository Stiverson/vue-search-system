import axios from 'axios';

export const fetchSearchResults = async (query) => {
  try {
    const { data } = await axios.get(`https://api.example.com/search?q=${query}`);
    return data.results;
  } catch (error) {
    console.error('API Error:', error);
    return [];
  }
};
