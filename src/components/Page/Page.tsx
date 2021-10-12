/*
 * @Author: your name
 * @Date: 2021-10-10 19:11:09
 * @LastEditTime: 2021-10-12 00:37:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ts-antd-admin\src\components\Page\Page.tsx
 */
import React, { Component } from 'react'
import classnames from 'classnames'
import Loader from '../Loader/Loader'
import styles from './Page.less'

export default class Page extends Component<PageProps> {
  render() {
    const { className, children, loading = false, inner = false } = this.props
    const loadingStyle = {
      height: 'calc(100vh - 184px)',
      overflow: 'hidden',
    }
    return (
      <div
        className={classnames(className, {
          [styles.contentInner]: inner,
        })}
        style={loading ? loadingStyle : undefined}
      >
        {loading ? <Loader spinning /> : ''}
        {children}
      </div>
    )
  }
}

interface PageProps {
  className?: string,
  children?: any
  loading?: boolean,
  inner?: boolean,
}
