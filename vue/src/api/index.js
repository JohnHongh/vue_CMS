import request from './api';

export function a(){
  return request.get('/');
}