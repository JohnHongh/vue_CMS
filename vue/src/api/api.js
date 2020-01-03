import axios from 'axios';

const request = axios.create({
  baseURL: '',
  timeout: 5000,
  'Content-Type': 'application/json;charset=UTF-8',
});

request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log(config)
  config.headers.token = 'token';
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

request.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  console.log(response)
  if (response.data.code === -1) {
    return Promise.reject(response.data.msg);
  }
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default request;