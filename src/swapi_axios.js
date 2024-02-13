//import axios from 'axios';

const BASE_URL = 'https://swapi.info/api/';

const getMovieCountAxios = () => {
  return axios.get(`${BASE_URL}/films/`).then((res) => console.log(res));
};

// With Axios, you can use axios.get(url) instead of fetch(url). The response
// object from Axios already contains parsed JSON under res.data, so you don't
// need to call res.json(). Error handling can be done in a catch block, which
// will handle network errors as well as request errors with a status code
// outside of the 2xx range. With fetch, network errors are rejected, but
// incorrect status codes still resolve and need to be handled separately.

const githubExample = async () => {
  const token =
    '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';
  try {
    const response = await axios.get('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data.avatar_url);
    return response.data.avatar_url;
  } catch (error) {
    console.error('Error: ', error);
  }
};

export default {
  getMovieCountAxios,
  githubExample,
};
