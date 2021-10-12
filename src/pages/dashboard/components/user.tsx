/*
 * @Author: your name
 * @Date: 2021-10-10 19:11:09
 * @LastEditTime: 2021-10-12 19:46:33
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \ts-antd-admin\src\pages\dashboard\components\user.tsx
 */
import React from 'react'
import { Button, Avatar } from 'antd'
import CountUp from 'react-countup'
import { Color } from '@/utils'
import styles from './user.less'

const countUpProps = {
  start: 0,
  duration: 2.75,
  useEasing: true,
  useGrouping: true,
  separator: ',',
}

const User = ({ avatar, username, sales = 0, sold = 0 }: UserProps) => {
  return (
    <div className={styles.user}>
      <div className={styles.header}>
        <div className={styles.headerinner}>
          <Avatar size="large" src={avatar} />
          <h5 className={styles.name}>{username}</h5>
        </div>
      </div>
      <div className={styles.number}>
        <div className={styles.item}>
          <p>EARNING SALES</p>
          <p style={{ color: Color.green }}>
            <CountUp end={sales} prefix="$" {...countUpProps} />
          </p>
        </div>
        <div className={styles.item}>
          <p>ITEM SOLD</p>
          <p style={{ color: Color.blue }}>
            <CountUp end={sold} {...countUpProps} />
          </p>
        </div>
      </div>
      <div className={styles.footer}>
        <Button type="ghost" size="large">
          View Profile
        </Button>
      </div>
    </div>
  )
}

interface UserProps {
  avatar: string
  username: string
  sales: number
  sold: number
}

export default User
