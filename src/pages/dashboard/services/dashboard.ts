/*
 * @Author: your name
 * @Date: 2021-10-10 19:11:09
 * @LastEditTime: 2021-10-12 21:04:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ts-antd-admin\src\pages\dashboard\services\dashboard.js
 */
// @ts-ignore
import { request, config } from 'utils'

const { api } = config
const { dashboard } = api
// @ts-ignore
export function query(params) {
  console.log(config)
  return request({
    url: dashboard,
    method: 'get',
    data: params,
  })
}
