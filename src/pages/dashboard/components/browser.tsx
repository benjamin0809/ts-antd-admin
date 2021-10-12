/*
 * @Author: your name
 * @Date: 2021-10-10 19:11:09
 * @LastEditTime: 2021-10-12 19:28:00
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \ts-antd-admin\src\pages\dashboard\components\browser.tsx
 */
import React from 'react'
import { Table, Tag } from 'antd'
import { Color } from '@/utils'
import styles from './browser.less'

const status = {
  1: {
    color: Color.green,
  },
  2: {
    color: Color.red,
  },
  3: {
    color: Color.blue,
  },
  4: {
    color: Color.yellow,
  },
}

const Browser = ({ data }: BrowserProps) => {
  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      className: styles.name,
    },
    {
      title: 'percent',
      dataIndex: 'percent',
      className: styles.percent,
      render: (text: string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal | null | undefined, it: { status: string | number }) => <Tag color={status[it.status].color}>{text}%</Tag>,
    },
  ]
  return (
    <Table
      pagination={false}
      showHeader={false}
      columns={columns}
      rowKey='name'
      dataSource={data}
    />
  )
}

interface BrowserProps {
  data: any[]
}

export default Browser
