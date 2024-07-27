import request from '@/utils/request'

// 查询订阅关系列表
export function listSubscriptions(query) {
  return request({
    url: '/system/subscriptions/list',
    method: 'get',
    params: query
  })
}

// 查询订阅关系详细
export function getSubscriptions(subscriptionId) {
  return request({
    url: '/system/subscriptions/' + subscriptionId,
    method: 'get'
  })
}

// 新增订阅关系
export function addSubscriptions(data) {
  return request({
    url: '/system/subscriptions',
    method: 'post',
    data: data
  })
}

// 修改订阅关系
export function updateSubscriptions(data) {
  return request({
    url: '/system/subscriptions',
    method: 'put',
    data: data
  })
}

// 删除订阅关系
export function delSubscriptions(subscriptionId) {
  return request({
    url: '/system/subscriptions/' + subscriptionId,
    method: 'delete'
  })
}
