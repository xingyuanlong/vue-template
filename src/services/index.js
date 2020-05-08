import request from '@/utils/request';

/**
 * get
 */
export function getApi () {
  return request('/api/get');
}
/**
 * post
 */
export function postApi (params) {
  return request('/api/post', {
    method: 'POST',
    data: params
  });
}

/**
 * getFrontCategoryApi
 */
export function getFrontCategoryApi () {
  return request('/api/getFrontCategory');
}
