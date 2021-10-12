/*
 * @Author: your name
 * @Date: 2021-10-10 19:11:09
 * @LastEditTime: 2021-10-12 00:17:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ts-antd-admin\src\pages\dashboard\model.js
 */
import { parse } from 'qs'
import modelExtend from 'dva-model-extend'
import api from '@/services/index'
import { pathToRegexp } from 'path-to-regexp'
import { model } from '@/utils/model'
import { SubscriptionAPI, EffectsCommandMap, EffectsMapObject } from 'dva'
const { queryDashboard } = api as any
const avatar = '//cdn.antd-admin.zuiidea.com/bc442cf0cc6f7940dcc567e465048d1a8d634493198c4-sPx5BR_fw236.jpeg'

export default modelExtend(model, {
  namespace: 'dashboard',
  state: {
    weather: {
      city: '深圳',
      temperature: '30',
      name: '晴',
      icon: '//cdn.antd-admin.zuiidea.com/sun.png',
    },
    sales: [],
    quote: {
      avatar,
    },
    numbers: [],
    recentSales: [],
    comments: [],
    completed: [],
    browser: [],
    cpu: {},
    user: {
      avatar,
    },
  },
  subscriptions: {
    setup({ dispatch, history }: SubscriptionAPI) {
      history.listen(({ pathname }) => {
        if (
          pathToRegexp('/dashboard').exec(pathname) ||
          pathToRegexp('/').exec(pathname)
        ) {
          dispatch({ type: 'query' })
          // dispatch({ type: 'queryWeather' })
        }
      })
    },
  },
  effects: {
    *query({ payload }: EffectsMapObject, { call, put }: EffectsCommandMap) : any {
      const data = yield call(queryDashboard, parse(payload as any))
      yield put({
        type: 'updateState',
        payload: data,
      })
    }
  }
})
