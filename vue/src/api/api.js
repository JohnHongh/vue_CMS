import axios from 'axios';
import config from './api.config';

let CancelToken = axios.CancelToken;
let urlCancel = {};

const request = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? config.BASE_URL_DEV : config.BASE_URL_PROD,
  timeout: config.TIME_OUT,
  'Content-Type': 'application/json;charset=UTF-8',
});

request.interceptors.request.use(function (config) {
  if(urlCancel[config.url]){
    urlCancel[config.url](config.url);
  }
  config.cancelToken=new CancelToken(function executor(c) {
    urlCancel[config.url] = c;
  })
  config.headers.token = 'token';
  return config;
}, function (error) {
  return Promise.reject(error);
});

request.interceptors.response.use(function (response) {
  if(urlCancel[response.config.url]){
    delete urlCancel[response.config.url];
  }
  if (response.data.code === -1) {
    return Promise.reject(response.data.msg);
  }
  return response;
}, function (error) {
  return Promise.reject(error);
});

export default request;
