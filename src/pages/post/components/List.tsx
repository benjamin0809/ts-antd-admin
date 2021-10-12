/*
 * @Author: your name
 * @Date: 2021-10-10 19:11:09
 * @LastEditTime: 2021-10-11 21:24:25
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \ts-antd-admin\src\pages\post\components\List.tsx
 */
import React, { PureComponent } from 'react'
import { Table, Avatar } from 'antd'
import { t } from "@lingui/macro"
import { Ellipsis } from '@/components'
import styles from './List.less'

interface ListProps {

}
class List extends PureComponent<ListProps> {
  render() {
    const { ...tableProps } = this.props
    const columns = [
      {
        title: t`Image`,
        dataIndex: 'image',
        render: (text: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => <Avatar shape="square" src={text} />,
      },
      {
        title: t`Title`,
        dataIndex: 'title',
        render: (text: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => (
          <Ellipsis tooltip length={30}>
            {text}
          </Ellipsis>
        ),
      },
      {
        title: t`Author`,
        dataIndex: 'author',
      },
      {
        title: t`Categories`,
        dataIndex: 'categories',
      },
      {
        title: t`Tags`,
        dataIndex: 'tags',
      },
      {
        title: t`Visibility`,
        dataIndex: 'visibility',
      },
      {
        title: t`Comments`,
        dataIndex: 'comments',
      },
      {
        title: t`Views`,
        dataIndex: 'views',
      },
      {
        title: t`Publish Date`,
        dataIndex: 'date',
      },
    ]

    return (
      <Table
        {...tableProps}
        pagination={{
          ...(tableProps as any).pagination,
          showTotal: total => t`Total ${total} Items`,
        }}
        bordered
        scroll={{ x: 1200 }}
        className={styles.table}
        columns={columns}
        rowKey={record => record.id}
      />
    )
  }
}

export default List
