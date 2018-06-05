import request from '@/utils/request'

// 登录
export function loginByUsername(userInfo) {
  return request({
    url: '/user/login',
    method: 'post',
    data: userInfo
  })
}
export function getUserInfo(token) {
  return request({
    url: '/userLogin/tokenLogin',
    method: 'get',
    params: {
      token
    }
  })
}
