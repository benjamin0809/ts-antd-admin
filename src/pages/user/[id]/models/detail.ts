/*
 * @Author: your name
 * @Date: 2021-10-10 19:11:09
 * @LastEditTime: 2021-10-10 23:52:53
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \ts-antd-admin\src\pages\user\[id]\models\detail.ts
 */
import { pathToRegexp } from 'path-to-regexp'
import api from '@/services/index'
import { SubscriptionAPI, EffectsCommandMap, EffectsMapObject,} from 'dva'
const { queryUser } = api as any

export default {
  namespace: 'userDetail',

  state: {
    data: {},
  },

  subscriptions: {
    setup({ dispatch, history }: SubscriptionAPI ) {
      history.listen(({ pathname }) => {
        const match = pathToRegexp('/user/:id').exec(pathname)
        if (match) {
          dispatch({ type: 'query', payload: { id: match[1] } })
        }
      })
    },
  },

  effects: {
    *query({ payload }: EffectsMapObject, { call, put }: EffectsCommandMap): any{
      const data = yield call(queryUser, payload)
      const { success, message, status, ...other } = data
      if (success) {
        yield put({
          type: 'querySuccess',
          payload: {
            data: other,
          },
        })
      } else {
        throw data
      }
    },
  },

  reducers: {
    querySuccess(state: EffectsMapObject, { payload } : { payload: EffectsMapObject}) {
      const { data } = payload
      return {
        ...state,
        data,
      }
    },
  },
}
