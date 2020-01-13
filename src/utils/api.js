import axios from 'axios';

function call(url, params) {
  return axios({
    ...params,
    url: process.env.VUE_APP_API_URL + url,
  });
}

export default {
  call,
};
