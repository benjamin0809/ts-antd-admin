/*
 * @Author: your name
 * @Date: 2021-10-10 19:11:09
 * @LastEditTime: 2021-10-12 21:02:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ts-antd-admin\src\pages\dashboard\components\numberCard.tsx
 */
import React from 'react'
import { Card } from 'antd'
import CountUp from 'react-countup'
import iconMap from '@/utils/iconMap'
import styles from './numberCard.less'


const NumberCard = ({ icon, color, title, number, countUp }: NumberCardProps) =>  {
  return (
    <Card
      className={styles.numberCard}
      bordered={false}
      bodyStyle={{ padding: 10 }}
    >
      <span className={styles.iconWarp} style={{ color }}>
        {(iconMap as any)[icon]}
      </span>
      <div className={styles.content}>
        <p className={styles.title}>{title || 'No Title'}</p>
        <p className={styles.number}>
          <CountUp
            start={0}
            end={number}
            duration={2.75}
            useEasing
            useGrouping
            separator=","
            {...(countUp || {})}
          />
        </p>
      </div>
    </Card>
  )
}

interface NumberCardProps{
  icon: string
  color?: string
  title?: string
  number?: number
  countUp?: any
}

export default NumberCard
