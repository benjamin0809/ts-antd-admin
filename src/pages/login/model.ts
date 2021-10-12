/*
 * @Author: your name
 * @Date: 2021-10-10 19:11:09
 * @LastEditTime: 2021-10-11 21:26:46
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \ts-antd-admin\src\pages\login\model.ts
 */
import { history } from 'umi'
import { pathToRegexp } from 'path-to-regexp'
import api from '@/services/index'

const { loginUser } = api as any
import { SubscriptionAPI, EffectsCommandMap, EffectsMapObject } from 'dva'
export default {
  namespace: 'login',

  state: {},
  // subscriptions: {
  //   setup({ dispatch, history }) {
  //     history.listen(location => {
  //       if (pathToRegexp('/login').exec(location.pathname)) {
  //       }
  //     })
  //   },
  // },
  effects: {
    *login({ payload }: EffectsMapObject, { put, call, select }: EffectsCommandMap): any {
      const data = yield call(loginUser, payload)
      const { locationQuery } = yield select((_: { app: any }) => _.app)
      if (data.success) {
        const { from } = locationQuery
        yield put({ type: 'app/query' })
        if (!pathToRegexp('/login').exec(from)) {
          if (['', '/'].includes(from)) history.push('/dashboard')
          else history.push(from)
        } else {
          history.push('/dashboard')
        }
      } else {
        throw data
      }
    },
  },
}
