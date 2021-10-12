/*
 * @Author: your name
 * @Date: 2021-10-10 19:11:09
 * @LastEditTime: 2021-10-10 22:03:54
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \ts-antd-admin\src\plugins\onError.ts
 */
import { message, MessageArgsProps } from 'antd'
import { ReactChild, ReactFragment, ReactPortal } from 'react'

export default {
  onError(e: { preventDefault: () => void; message: boolean | ReactChild | ReactFragment | ReactPortal | MessageArgsProps | null | undefined }, a: any) {
    e.preventDefault()
    if (e.message) {
      message.error(e.message)
    } else {
      /* eslint-disable */
      console.error(e)
    }
  },
}
