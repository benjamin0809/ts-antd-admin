/*
 * @Author: your name
 * @Date: 2021-10-10 19:11:09
 * @LastEditTime: 2021-10-12 19:43:00
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \ts-antd-admin\src\pages\dashboard\components\recentSales.tsx
 */
import React from 'react'
import moment from 'moment'
import { Table, Tag } from 'antd'
import { Color } from '@/utils'
import styles from './recentSales.less'

const status = {
  1: {
    color: Color.green,
    text: 'SALE',
  },
  2: {
    color: Color.yellow,
    text: 'REJECT',
  },
  3: {
    color: Color.red,
    text: 'TAX',
  },
  4: {
    color: Color.blue,
    text: 'EXTENDED',
  },
}
interface RecentSalesProps {
  data: any[]
}

const RecentSales = ({ data }: RecentSalesProps) => {
  const columns = [
    {
      title: 'NAME',
      dataIndex: 'name',
    },
    {
      title: 'STATUS',
      dataIndex: 'status',
      render: (text: string | number) => <Tag color={status[text].color}>{status[text].text}</Tag>,
    },
    {
      title: 'DATE',
      dataIndex: 'date',
      render: (text: moment.MomentInput) => moment(text).format('YYYY-MM-DD'),
    },
    {
      title: 'PRICE',
      dataIndex: 'price',
      render: (text: string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal | null | undefined, it: { status: string | number }) => (
        <span style={{ color: status[it.status].color }}>${text}</span>
      ),
    },
  ]
  return (
    <div className={styles.recentsales}>
      <Table
        pagination={false}
        columns={columns}
        rowKey='id'
        dataSource={data.filter((item, key) => key < 5)}
      />
    </div>
  )
}

export default RecentSales
