import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect, Dispatch } from 'umi'
import { Button, Row, Input, Form } from 'antd'
import { GlobalFooter } from '@/components'
import { GithubOutlined } from '@ant-design/icons'
import { t } from "@lingui/macro"
import { Trans } from "@lingui/macro"
import { setLocale } from '@/utils'
import config from '@/utils/config'

import styles from './index.less'

interface LoginProps {
  dispatch: Dispatch
  loading: any
}
const FormItem = Form.Item
// @ts-ignore
@connect(({ loading, dispatch }) => ({ loading, dispatch }))
class Login extends PureComponent<LoginProps> {

  render() {
    const { dispatch, loading } = this.props

    const handleOk = (values: any) => {
      dispatch({ type: 'login/login', payload: values })
    }
    let footerLinks = [
      {
        key: 'github',
        title: <GithubOutlined />,
        href: 'https://github.com/zuiidea/antd-admin',
        blankTarget: true,
      },
    ]

    if (config.i18n) {
      footerLinks = (footerLinks as any).concat(
        config.i18n.languages.map((item: any) => ({
          key: item.key,
          title: (
            <span onClick={setLocale.bind(null, item.key)}>{item.title}</span>
          ),
        }))
      )
    }

    return (
      <Fragment>
        <div className={styles.form}>
          <div className={styles.logo}>
            <img alt="logo" src={config.logoPath} />
            <span>{config.siteName}</span>
          </div>
          <Form
            onFinish={handleOk}
            >
            <FormItem name="username"
              rules={[{ required: true }]} hasFeedback>
                <Input
                  placeholder={t`Username`}
                />
            </FormItem>
            <FormItem name="password"
              rules={[{ required: true }]} hasFeedback>
                <Input
                  type="password"
                  placeholder={t`Password`}
                />
            </FormItem>
            <Row>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading.effects.login}
              >
                <Trans>Sign in</Trans>
              </Button>
              <p>
                <span className="margin-right">
                  <Trans>Username</Trans>
                  ：guest
                </span>
                <span>
                  <Trans>Password</Trans>
                  ：guest
                </span>
              </p>
            </Row>
          </Form>
        </div>
        <div className={styles.footer}>
          <GlobalFooter links={footerLinks} copyright={config.copyright} />
        </div>
      </Fragment>
    )
  }
}

export default Login
