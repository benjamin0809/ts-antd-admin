import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Table, Modal, Avatar } from 'antd'
import { DropOption } from '@/components'
import { t } from "@lingui/macro"
import { Trans } from "@lingui/macro"
import { Link } from 'umi'
import styles from './List.less'

const { confirm } = Modal

interface ListProps {
  onEditItem: Function
  onDeleteItem: Function
}

class List extends PureComponent<ListProps> {
  handleMenuClick = (record: { id: any }, e: { key: string }) => {
    const { onDeleteItem, onEditItem } = this.props

    if (e.key === '1') {
      onEditItem(record)
    } else if (e.key === '2') {
      confirm({
        title: t`Are you sure delete this record?`,
        onOk() {
          onDeleteItem(record.id)
        },
      })
    }
  }

  render() {
    const { onDeleteItem, onEditItem, ...tableProps } = this.props

    const columns = [
      {
        title: <Trans>Avatar</Trans>,
        dataIndex: 'avatar',
        key: 'avatar',
        width: '7%',
        fixed: 'left',
        render: (text: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => <Avatar style={{ marginLeft: 8 }} src={text} />,
      },
      {
        title: <Trans>Name</Trans>,
        dataIndex: 'name',
        key: 'name',
        render: (text: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined, record: { id: any }) => <Link to={`user/${record.id}`}>{text}</Link>,
      },
      {
        title: <Trans>NickName</Trans>,
        dataIndex: 'nickName',
        key: 'nickName',
      },
      {
        title: <Trans>Age</Trans>,
        dataIndex: 'age',
        width: '6%',
        key: 'age',
      },
      {
        title: <Trans>Gender</Trans>,
        dataIndex: 'isMale',
        key: 'isMale',
        width: '7%',
        render: (text: any) => <span>{text ? 'Male' : 'Female'}</span>,
      },
      {
        title: <Trans>Phone</Trans>,
        dataIndex: 'phone',
        key: 'phone',
      },
      {
        title: <Trans>Email</Trans>,
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: <Trans>Address</Trans>,
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: <Trans>CreateTime</Trans>,
        dataIndex: 'createTime',
        key: 'createTime',
      },
      {
        title: <Trans>Operation</Trans>,
        key: 'operation',
        fixed: 'right',
        width: '8%',
        render: (text: any, record: { id: any }) => {
          return (
            <DropOption
              onMenuClick={e => this.handleMenuClick(record, e)}
              menuOptions={[
                { key: '1', name: t`Update` },
                { key: '2', name: t`Delete` },
              ]}
            />
          )
        },
      },
    ]

    return (
      <Table
        {...tableProps}
        pagination={{
          ... (tableProps as any).pagination,
          showTotal: total => t`Total ${total} Items`,
        }}
        className={styles.table}
        bordered
        scroll={{ x: 1200 }}
        columns={columns as any}
        rowKey={record => record.id}
      />
    )
  }
}


export default List
