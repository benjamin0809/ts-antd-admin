/*
 * @Author: your name
 * @Date: 2021-10-10 19:11:09
 * @LastEditTime: 2021-10-11 21:21:19
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \ts-antd-admin\src\pages\post\index.tsx
 */
import React, { PureComponent } from 'react'
import { connect } from 'umi'
import { Tabs } from 'antd'
import { history } from 'umi'
import { stringify } from 'qs'
import { t } from "@lingui/macro"
import { Page } from '@/components'
import List from './components/List'

const { TabPane } = Tabs

const EnumPostStatus = {
  UNPUBLISH: 1,
  PUBLISHED: 2,
}
interface Location {
  query: {
    [propName: string]: any
  }
  pathname: string
}
interface PostProps {
  location: Location
  post: any
  loading: any
}

// @ts-ignore
@connect(({ post, loading }) => ({ post, loading }))
class Post extends PureComponent<PostProps> {
  handleTabClick = (key: any) => {
    const { pathname } = this.props.location

    history.push({
      pathname,
      search: stringify({
        status: key,
      }),
    })
  }

  get listProps() {
    const { post, loading, location } = this.props
    const { list, pagination } = post
    const { query, pathname } = location

    return {
      pagination,
      dataSource: list,
      loading: loading.effects['post/query'],
      onChange(page: { current: any; pageSize: any }) {
        history.push({
          pathname,
          search: stringify({
            ...query,
            page: page.current,
            pageSize: page.pageSize,
          }),
        })
      },
    }
  }

  render() {
    const { location } = this.props
    const { query } = location

    return (
      <Page inner>
        <Tabs
          activeKey={
            query.status === String(EnumPostStatus.UNPUBLISH)
              ? String(EnumPostStatus.UNPUBLISH)
              : String(EnumPostStatus.PUBLISHED)
          }
          onTabClick={this.handleTabClick}
        >
          <TabPane
            tab={t`Publised`}
            key={String(EnumPostStatus.PUBLISHED)}
          >
            <List {...this.listProps} />
          </TabPane>
          <TabPane
            tab={t`Unpublished`}
            key={String(EnumPostStatus.UNPUBLISH)}
          >
            <List {...this.listProps} />
          </TabPane>
        </Tabs>
      </Page>
    )
  }
}


export default Post
