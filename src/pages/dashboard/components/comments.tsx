/*
 * @Author: your name
 * @Date: 2021-10-10 19:11:09
 * @LastEditTime: 2021-10-12 19:30:24
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \ts-antd-admin\src\pages\dashboard\components\comments.tsx
 */
import React from 'react'
import { Table, Tag } from 'antd'
import { Color } from '@/utils'
import styles from './comments.less'

const status = {
  1: {
    color: Color.green,
    text: 'APPROVED',
  },
  2: {
    color: Color.yellow,
    text: 'PENDING',
  },
  3: {
    color: Color.red,
    text: 'REJECTED',
  },
}
interface CommentsProps {
  data: any[]
}
const Comments = ({ data }: CommentsProps) => {
  const columns = [
    {
      title: 'avatar',
      dataIndex: 'avatar',
      width: 48,
      className: styles.avatarcolumn,
      render: (text: any) => (
        <span
          style={{ backgroundImage: `url(${text})` }}
          className={styles.avatar}
        />
      ),
    },
    {
      title: 'content',
      dataIndex: 'content',
      render: (text: any, it: { name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; content: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; status: string | number; date: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined }) => (
        <div>
          <h5 className={styles.name}>{it.name}</h5>
          <p className={styles.content}>{it.content}</p>
          <div className={styles.daterow}>
            <Tag color={status[it.status].color}>{status[it.status].text}</Tag>
            <span className={styles.date}>{it.date}</span>
          </div>
        </div>
      ),
    },
  ]
  return (
    <div className={styles.comments}>
      <Table
        pagination={false}
        showHeader={false}
        columns={columns}
        rowKey='avatar'
        dataSource={data.filter((item, key) => key < 3)}
      />
    </div>
  )
}



export default Comments
