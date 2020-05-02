import axios from 'axios';

// let isReqEnvHref = false;
// const ENV_HREF = '/api/privileges/getEnvHref';
axios.interceptors.request.use(
  (config) => {
    if (config.method === 'get') {
      config.params = {
        timestamp: Date.parse(`${new Date()}`) / 1000,
        ...config.params
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error.request);
  }
);

axios.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // if (error.response && error.response.status === 401) {
    //   if (window.envHref) {
    //     window.location.href = window.envHref.login;
    //   }
    //   if (isReqEnvHref) {
    //     return Promise.reject(error.response);
    //   }
    //   isReqEnvHref = true;
    //   request(ENV_HREF).then((res) => {
    //     isReqEnvHref = false;
    //     window.envHref = res.result;
    //     window.location.href = res.result.login;
    //   });
    // }
    return Promise.reject(error.response);
  }
);

axios.defaults = {
  validateStatus (status) {
    return status >= 200 && status < 300;
  },
  timeout: 10000
};

export default function request (url, params) {
  let options = {
    url,
    headers: {
      'X-Requested-With': 'XMLHttpRequest'
    },
    ...params
  };

  return axios(options);
}
