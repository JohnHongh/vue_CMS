import request from './api';

export function a(params){
  return request.get('/',{
    params
  });
}
export function b(params){
  return request.get('/',{params});
}