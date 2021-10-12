/*
 * @Author: your name
 * @Date: 2021-10-10 19:11:09
 * @LastEditTime: 2021-10-10 23:54:26
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \ts-antd-admin\src\pages\user\[id]\index.tsx
 */
import React, { PureComponent } from 'react'
import { connect } from 'umi'
import { Page } from '@/components'
import styles from './index.less'

interface UserDetailProps {
  userDetail: any
}

// @ts-ignore
@connect(({ userDetail }) => ({ userDetail }))
class UserDetail extends PureComponent<UserDetailProps> {
  render() {
    const { userDetail } = this.props
    const { data } = userDetail
    const content = []
    for (let key in data) {
      if ({}.hasOwnProperty.call(data, key)) {
        content.push(
          <div key={key} className={styles.item}>
            <div>{key}</div>
            <div>{String(data[key])}</div>
          </div>
        )
      }
    }
    return (
      <Page inner>
        <div className={styles.content}>{content}</div>
      </Page>
    )
  }
}


export default UserDetail
