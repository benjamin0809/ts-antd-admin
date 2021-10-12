/*
 * @Author: your name
 * @Date: 2021-10-10 19:11:09
 * @LastEditTime: 2021-10-11 23:52:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ts-antd-admin\src\components\Loader\Loader.tsx
 */
import React from 'react'
import classNames from 'classnames'
import styles from './Loader.less'

const Loader = ({ spinning = false, fullScreen } : LoaderProps) => {
  return (
    <div
      className={classNames(styles.loader, {
        [styles.hidden]: !spinning,
        [styles.fullScreen]: fullScreen,
      })}
    >
      <div className={styles.warpper}>
        <div className={styles.inner} />
        <div className={styles.text}>LOADING</div>
      </div>
    </div>
  )
}

interface LoaderProps {
  spinning: boolean,
  fullScreen?: boolean,
}

export default Loader
