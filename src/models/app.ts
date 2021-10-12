/* global window */

import { history } from 'umi'
import { SubscriptionAPI, EffectsCommandMap, EffectsMapObject } from 'dva'
import { stringify } from 'qs'
import store from 'store'
import { pathToRegexp } from "path-to-regexp"
import { ROLE_TYPE } from '@/utils/constant'
import { queryLayout } from '@/utils'
import { CANCEL_REQUEST_MESSAGE } from '@/utils/constant'
import api from '@/services/index'
import config from '@/utils/config'

type IPayload = {
  [propName: string] : any
}
// @ts-ignore
const { queryRouteList, logoutUser, queryUserInfo } = api

const goDashboard = () => {
  if (pathToRegexp(['/', '/login']).exec(window.location.pathname)) {
    history.push({
      pathname: '/dashboard',
    })
  }
}

export default {
  namespace: 'app',
  state: {
    routeList: [
      {
        id: '1',
        icon: 'laptop',
        name: 'Dashboard',
        zhName: '仪表盘',
        router: '/dashboard',
      },
    ],
    locationPathname: '',
    locationQuery: {},
    theme: store.get('theme') || 'light',
    collapsed: store.get('collapsed') || false,
    notifications: [
      {
        title: 'New User is registered.',
        date: new Date(Date.now() - 10000000),
      },
      {
        title: 'Application has been approved.',
        date: new Date(Date.now() - 50000000),
      },
    ],
  },
  subscriptions: {
    setup({ dispatch }: SubscriptionAPI) {
      dispatch({ type: 'query' })
    },
    setupHistory({ dispatch, history }: SubscriptionAPI) {
      history.listen(location => {
        dispatch({
          type: 'updateState',
          payload: {
            locationPathname: location.pathname,
            locationQuery: (location as any).query,
          },
        })
      })
    },

    setupRequestCancel({ history }: SubscriptionAPI) {
      history.listen(() => {
        const { cancelRequest = new Map() } = window

        cancelRequest.forEach((value: { pathname: string; cancel: (arg0: string) => void }, key: any) => {
          if (value.pathname !== window.location.pathname) {
            value.cancel(CANCEL_REQUEST_MESSAGE)
            cancelRequest.delete(key)
          }
        })
      })
    },
  },
  effects: {
    *query({ payload }: EffectsMapObject, { call, put, select }: EffectsCommandMap) {
      // store isInit to prevent query trigger by refresh
      const isInit = store.get('isInit')
      if (isInit) {
        goDashboard()
        return
      }
      const { locationPathname } = yield select((_: { app: any }) => _.app)
      const { success, user } = yield call(queryUserInfo, payload)
      if (success && user) {
        const { list } = yield call(queryRouteList)
        const { permissions } = user
        let routeList = list
        if (
          permissions.role === ROLE_TYPE.ADMIN ||
          permissions.role === ROLE_TYPE.DEVELOPER
        ) {
          permissions.visit = list.map((item: { id: any }) => item.id)
        } else {
          routeList = list.filter((item: { id: any; mpid: string; bpid: any }) => {
            const cases = [
              permissions.visit.includes(item.id),
              item.mpid
                ? permissions.visit.includes(item.mpid) || item.mpid === '-1'
                : true,
              item.bpid ? permissions.visit.includes(item.bpid) : true,
            ]
            return cases.every(_ => _)
          })
        }
        store.set('routeList', routeList)
        store.set('permissions', permissions)
        store.set('user', user)
        store.set('isInit', true)
        goDashboard()
      } else if (queryLayout(config.layouts, locationPathname) !== 'public') {
        history.push({
          pathname: '/login',
          search: stringify({
            from: locationPathname,
          }),
        })
      }
    },

    *signOut({ payload }: EffectsMapObject, { call, put }: EffectsCommandMap): any {
      const data = yield call(logoutUser)
      if (data.success) {
        store.set('routeList', [])
        store.set('permissions', { visit: [] })
        store.set('user', {})
        store.set('isInit', false)
        yield put({ type: 'query' })
      } else {
        throw data
      }
    },
  },
  reducers: {
    updateState(state: EffectsCommandMap, { payload }: {payload: IPayload} ) {
      return {
        ...state,
        ...payload,
      }
    },

    handleThemeChange(state: EffectsCommandMap, { payload }: {payload: IPayload}) {
      store.set('theme', payload)
      state.theme = payload
    },

    handleCollapseChange(state: EffectsCommandMap, { payload }: {payload: IPayload}) {
      store.set('collapsed', payload)
      state.collapsed = payload
    },

    allNotificationsRead(state: EffectsCommandMap) {
      state.notifications = []
    },
  },
}
