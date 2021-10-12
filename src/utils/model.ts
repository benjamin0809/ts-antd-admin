/*
 * @Author: your name
 * @Date: 2021-10-10 19:11:10
 * @LastEditTime: 2021-10-10 22:17:03
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \ts-antd-admin\src\utils\model.ts
 */
import modelExtend from 'dva-model-extend'
type IState = {
  [propName: string]: any
}

interface IPayload {
  payload: IState
}
export const model = {
  reducers: {
    updateState(state: IState, { payload }: IPayload) {
      return {
        ...state,
        ...payload,
      }
    },
  },
}

export const pageModel = modelExtend(model, {
  state: {
    list: [],
    pagination: {
      showSizeChanger: true,
      showQuickJumper: true,
      current: 1,
      total: 0,
      pageSize: 10,
    },
  },

  reducers: {
    querySuccess(state: IState, { payload }: IPayload) {
      const { list, pagination } = payload
      return {
        ...state,
        list,
        pagination: {
          ...state.pagination,
          ...pagination,
        },
      }
    },
  },
})
