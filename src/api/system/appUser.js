import request from '@/utils/request'

// 查询【app用户】列表
export function listUser(query) {
  return request({
    url: '/system/appUser/list',
    method: 'get',
    params: query
  })
}

// 查询【app用户】详细
export function getUser(userId) {
  return request({
    url: '/system/appUser/' + userId,
    method: 'get'
  })
}

// 新增【app用户】
export function addUser(data) {
  return request({
    url: '/system/appUser',
    method: 'post',
    data: data
  })
}

// 修改【app用户】
export function updateUser(data) {
  return request({
    url: '/system/appUser',
    method: 'put',
    data: data
  })
}

// 删除【app用户】
export function delUser(userId) {
  return request({
    url: '/system/appUser/' + userId,
    method: 'delete'
  })
}
