/*
 * @Author: your name
 * @Date: 2021-10-10 19:11:09
 * @LastEditTime: 2021-10-10 23:08:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ts-antd-admin\src\layouts\BaseLayout.tsx
 */
import React, { PureComponent, Fragment } from 'react'
import { connect } from 'umi'
import { Helmet } from 'react-helmet'
import { Loader } from '@/components'
import { queryLayout } from '@/utils'
import NProgress from 'nprogress'
import config from '@/utils/config'
import { withRouter } from 'umi'

import PublicLayout from './PublicLayout'
import PrimaryLayout from './PrimaryLayout'
import './BaseLayout.less'

const LayoutMap = {
  primary: PrimaryLayout,
  public: PublicLayout,
}

interface BaseLayoutProps {
  loading?: any,
  location?: any
}
// @ts-ignore
@withRouter
// @ts-ignore
@connect(({ loading }) => ({ loading }))
class BaseLayout extends PureComponent<BaseLayoutProps> {
  previousPath = ''

  render() {
    const { loading, children, location } = this.props
    const Container = LayoutMap[queryLayout(config.layouts, location.pathname)]

    const currentPath = location.pathname + location.search
    if (currentPath !== this.previousPath) {
      NProgress.start()
    }

    if (!loading.global) {
      NProgress.done()
      this.previousPath = currentPath
    }

    return (
      <Fragment>
        <Helmet>
          <title>{config.siteName}</title>
        </Helmet>
        <Loader fullScreen spinning={loading.effects['app/query']} />
        <Container>{children}</Container>
      </Fragment>
    )
  }
}

export default BaseLayout
