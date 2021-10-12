/*
 * @Author: your name
 * @Date: 2021-10-10 19:11:09
 * @LastEditTime: 2021-10-12 19:40:51
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \ts-antd-admin\src\pages\dashboard\components\quote.tsx
 */
import React from 'react'
import styles from './quote.less'

const Quote = ({ name, content, title, avatar }: QuoteProps) => {
  return (
    <div className={styles.quote}>
      <div className={styles.inner}>{content}</div>
      <div className={styles.footer}>
        <div className={styles.description}>
          <p>-{name}-</p>
          <p>{title}</p>
        </div>
        <div
          className={styles.avatar}
          style={{ backgroundImage: `url(${avatar})` }}
        />
      </div>
    </div>
  )
}

interface QuoteProps {
  name: string
  content: string
  title: string
  avatar: string
}

export default Quote
