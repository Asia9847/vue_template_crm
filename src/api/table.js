import request from '@/util/request'

export function getList(params) {
  const res = request({
    url: '/table/list',
    method: 'get',
    params
  })
  console.log(res)
  return request({
    url: '/table/list',
    method: 'get',
    params
  })
}
