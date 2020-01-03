import axios from 'axios';
import config from './api.config';

let CancelToken = axios.CancelToken;
let cancel;
let urlCancel = {};

const request = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? config.BASE_URL_DEV : config.BASE_URL_PROD,
  timeout: config.TIME_OUT,
  'Content-Type': 'application/json;charset=UTF-8',
  cancelToken: new CancelToken(function executor(c) {
    cancel = c;
  })
});

request.interceptors.request.use(function (config) {
  if(urlCancel[config.url]){
    urlCancel[config.url]('取消请求');
    urlCancel[config.url] = cancel;
  }else{
    urlCancel[req.url] = cancel;
  }
  console.log(config)
  config.headers.token = 'token';
  return config;
}, function (error) {
  return Promise.reject(error);
});

request.interceptors.response.use(function (response) {
  if(urlCancel[res.url]){
    delete urlCancel[res.url];
  }
  if (response.data.code === -1) {
    return Promise.reject(response.data.msg);
  }
  return response;
}, function (error) {
  if(urlCancel[res.url]){
    delete urlCancel[res.url];
  }
  return Promise.reject(error);
});

export default request;
