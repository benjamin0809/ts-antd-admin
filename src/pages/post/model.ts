/*
 * @Author: your name
 * @Date: 2021-10-10 19:11:09
 * @LastEditTime: 2021-10-11 21:17:36
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \ts-antd-admin\src\pages\post\model.ts
 */
import modelExtend from 'dva-model-extend'
import api from '@/services/index'
import { pathToRegexp }from 'path-to-regexp'
import { pageModel } from '@/utils/model'
import { SubscriptionAPI, EffectsCommandMap, EffectsMapObject } from 'dva'
const { queryPostList } = api as any

export default modelExtend(pageModel, {
  namespace: 'post',

  subscriptions: {
    setup({ dispatch, history }: SubscriptionAPI) {
      history.listen(location => {
        if (pathToRegexp('/post').exec(location.pathname)) {
          dispatch({
            type: 'query',
            payload: {
              status: 2,
              ...(location as any).query,
            },
          })
        }
      })
    },
  },

  effects: {
    *query({ payload }: EffectsMapObject & { payload: { page: number, pageSize: number } }, { call, put }: EffectsCommandMap): any {
      const data = yield call(queryPostList, payload)
      if (data.success) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.data,
            pagination: {
              current: Number(payload.page) || 1,
              pageSize: Number(payload.pageSize) || 10,
              total: data.total,
            },
          },
        })
      } else {
        throw data
      }
    },
  },
})
