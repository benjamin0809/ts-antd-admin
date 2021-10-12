/*
 * @Author: your name
 * @Date: 2021-10-10 19:11:09
 * @LastEditTime: 2021-10-12 19:45:27
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \ts-antd-admin\src\pages\dashboard\components\weather.tsx
 */
import React from 'react'
import { Spin } from 'antd'
import styles from './weather.less'

const Weather = ({ city, icon, dateTime, temperature, name, loading }: WeatherProps) => {
  return (
    <Spin spinning={loading}>
      <div className={styles.weather}>
        <div className={styles.left}>
          <div
            className={styles.icon}
            style={{
              backgroundImage: `url(${icon})`,
            }}
          />
          <p>{name}</p>
        </div>
        <div className={styles.right}>
          <h1 className={styles.temperature}>{`${temperature}°`}</h1>
          <p className={styles.description}>
            {city},{dateTime}
          </p>
        </div>
      </div>
    </Spin>
  )
}

interface WeatherProps {
  city: string
  icon: string
  dateTime: string
  temperature: string
  name: string
  loading: boolean
}

export default Weather
