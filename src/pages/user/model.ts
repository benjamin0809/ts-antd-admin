import modelExtend from 'dva-model-extend'
import { pathToRegexp } from 'path-to-regexp'
import api from '@/services/index'
import { pageModel } from '@/utils/model'
import { SubscriptionAPI, EffectsCommandMap, EffectsMapObject, Effect, EffectWithType } from 'dva'

const {
  queryUserList,
  createUser,
  removeUser,
  updateUser,
  removeUserList,
} = api as any

export default modelExtend(pageModel, {
  namespace: 'user',

  state: {
    currentItem: {},
    modalVisible: false,
    modalType: 'create',
    selectedRowKeys: [],
  },

  subscriptions: {
    setup({ dispatch, history }: SubscriptionAPI) {
      history.listen(location => {
        if (pathToRegexp('/user').exec(location.pathname)) {
          const payload = (location as any).query || { page: 1, pageSize: 10 }
          dispatch({
            type: 'query',
            payload,
          })
        }
      })
    },
  },

  effects: {
    *query({ payload = {} } : any, { call, put }: EffectsCommandMap): any {
      const data = yield call(queryUserList, payload)
      if (data) {
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
      }
    },

    *delete({ payload }: EffectsMapObject, { call, put, select } : EffectsCommandMap): any {
      const data = yield call(removeUser, { id: payload })
      const { selectedRowKeys } = yield select((_: { user: any }) => _.user)
      if (data.success) {
        yield put({
          type: 'updateState',
          payload: {
            selectedRowKeys: selectedRowKeys.filter((_: Effect | EffectWithType) => _ !== payload),
          },
        })
      } else {
        throw data
      }
    },

    *multiDelete({ payload }: EffectsMapObject, { call, put }: EffectsCommandMap): any  {
      const data = yield call(removeUserList, payload)
      if (data.success) {
        yield put({ type: 'updateState', payload: { selectedRowKeys: [] } })
      } else {
        throw data
      }
    },

    *create({ payload }: EffectsMapObject, { call, put } : EffectsCommandMap): any  {
      const data = yield call(createUser, payload)
      if (data.success) {
        yield put({ type: 'hideModal' })
      } else {
        throw data
      }
    },

    *update({ payload }: EffectsMapObject, { select, call, put } : EffectsCommandMap): any  {
      const id = yield select(({ user } : any) => user.currentItem.id)
      const newUser = { ...payload, id }
      const data = yield call(updateUser, newUser)
      if (data.success) {
        yield put({ type: 'hideModal' })
      } else {
        throw data
      }
    },
  },

  reducers: {
    showModal(state: EffectsMapObject, { payload }: { payload: EffectsMapObject }) {
      return { ...state, ...payload, modalVisible: true }
    },

    hideModal(state: EffectsMapObject) {
      return { ...state, modalVisible: false }
    },
  },
})
