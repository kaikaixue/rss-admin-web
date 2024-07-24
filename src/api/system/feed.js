import request from '@/utils/request'

// 查询订阅源列表
export function listFeed(query) {
  return request({
    url: '/system/feed/list',
    method: 'get',
    params: query
  })
}

// 查询订阅源详细
export function getFeed(feedId) {
  return request({
    url: '/system/feed/' + feedId,
    method: 'get'
  })
}

// 新增订阅源
export function addFeed(data) {
  return request({
    url: '/system/feed',
    method: 'post',
    data: data
  })
}

// 修改订阅源
export function updateFeed(data) {
  return request({
    url: '/system/feed',
    method: 'put',
    data: data
  })
}

// 删除订阅源
export function delFeed(feedId) {
  return request({
    url: '/system/feed/' + feedId,
    method: 'delete'
  })
}
