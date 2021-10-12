/*
 * @Author: your name
 * @Date: 2021-10-10 19:11:09
 * @LastEditTime: 2021-10-10 22:34:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ts-antd-admin\src\services\index.ts
 */
import request from '@/utils/request'
import { apiPrefix } from '@/utils/config'

import api from './api'
import { Method } from 'axios'

const gen = (params: string) => {
  let url = apiPrefix + params
  let method: Method = 'GET'

  const paramsArray = params.split(' ')
  if (paramsArray.length === 2) {
    method = paramsArray[0] as Method
    url = apiPrefix + paramsArray[1]
  }

  return function(data: any) {
    // @ts-ignore
    return request({
      url,
      data,
      method,
    })
  }
}

const APIFunction = {}
for (const key in api) {
  APIFunction[key] = gen(api[key])
}


export default APIFunction
