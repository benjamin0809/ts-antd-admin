/*
 * @Author: your name
 * @Date: 2021-10-10 19:11:09
 * @LastEditTime: 2021-10-28 23:12:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ts-antd-admin\src\utils\iconMap.tsx
 */
import UserInfoIcon from '@/icons/UserInfo';
import Icon, {
  PayCircleOutlined,
  ShoppingCartOutlined,
  MessageOutlined,
  TeamOutlined,
  UserOutlined,
  DashboardOutlined,
  ApiOutlined,
  CameraOutlined,
  EditOutlined,
  CodeOutlined,
  LineOutlined,
  BarChartOutlined,
  AreaChartOutlined,
  // createFromIconfontCN
} from '@ant-design/icons'
import React from 'react'

// const IconFont = createFromIconfontCN({
//   scriptUrl: '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js',
// });

const HeartSvg = () => (
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
    <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
  </svg>
);

<svg t="1635433486510" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4329" width="200" height="200"><path d="M962.6 774.9H417.1c-33.8 0-61.4 25-61.4 55.8v66.6c0 30.8 27.5 55.8 61.4 55.8h545.5c33.8 0 61.4-25 61.4-55.8v-66.6c0-30.8-27.5-55.8-61.4-55.8z m16.9 122.4c0 5.4-7 11.3-16.9 11.3H417.1c-10 0-16.9-6-16.9-11.3v-66.6c0-5.4 7-11.3 16.9-11.3h545.5c10 0 16.9 6 16.9 11.3v66.6zM164.8 748.2h-98C30 748.2 0 778.1 0 815v98c0 36.9 30 66.8 66.9 66.8h98c36.8 0 66.8-29.9 66.7-66.8v-98c0-36.8-29.9-66.8-66.8-66.8zM187.1 913c0 12.3-10 22.3-22.3 22.3h-98c-12.3 0-22.3-10-22.3-22.3v-98c0-12.3 10-22.3 22.3-22.3h98c12.3 0 22.3 10 22.3 22.3v98zM962.6 70.9H417.1c-33.8 0-61.4 25-61.4 55.8v66.6c0 30.8 27.5 55.8 61.4 55.8h545.5c33.8 0 61.4-25 61.4-55.8v-66.6c0-30.8-27.5-55.8-61.4-55.8z m16.9 122.5c0 5.4-7 11.3-16.9 11.3H417.1c-10 0-16.9-6-16.9-11.3v-66.6c0-5.4 7-11.3 16.9-11.3h545.5c10 0 16.9 6 16.9 11.3v66.6zM164.8 44.2h-98C30 44.2 0 74.1 0 111v98c0 36.9 30 66.9 66.9 66.9h98c36.8 0 66.8-30 66.7-66.9v-98c0-36.8-29.9-66.8-66.8-66.8zM187.1 209c0 12.3-10 22.3-22.3 22.3h-98c-12.3 0-22.3-10-22.3-22.3v-98c0-12.3 10-22.3 22.3-22.3h98c12.3 0 22.3 10 22.3 22.3v98z m775.5 213.9H417.1c-33.8 0-61.4 25-61.4 55.8v66.6c0 30.8 27.5 55.8 61.4 55.8h545.5c33.8 0 61.4-25 61.4-55.8v-66.6c0-30.8-27.5-55.8-61.4-55.8z m16.9 122.4c0 5.4-7 11.3-16.9 11.3H417.1c-10 0-16.9-6-16.9-11.3v-66.6c0-5.4 7-11.3 16.9-11.3h545.5c10 0 16.9 6 16.9 11.3v66.6zM164.8 396.2h-98C30 396.2 0 426.1 0 463v98c0 36.9 30 66.8 66.9 66.8h98c36.8 0 66.8-29.9 66.7-66.8v-98c0-36.8-29.9-66.8-66.8-66.8zM187.1 561c0 12.3-10 22.3-22.3 22.3h-98c-12.3 0-22.3-10-22.3-22.3v-98c0-12.3 10-22.3 22.3-22.3h98c12.3 0 22.3 10 22.3 22.3v98z" fill="#707070" p-id="4330"></path></svg>

const HeartIcon = (props: any) => <Icon component={HeartSvg} {...props} />;

// const HeartIcon = (props: any)=>   <IconFont type="icon-javascript" />


export default {
  'pay-circle-o': <PayCircleOutlined />,
  'shopping-cart': <ShoppingCartOutlined />,
  'camera-o': <CameraOutlined />,
  'line-chart': <LineOutlined />,
  'code-o': <CodeOutlined />,
  'area-chart': <AreaChartOutlined />,
  'bar-chart': <BarChartOutlined />,
  message: <MessageOutlined />,
  team: <TeamOutlined />,
  dashboard: <DashboardOutlined />,
  user: <UserOutlined />,
  api: <ApiOutlined />,
  heart:  <HeartIcon />,
  edit: <EditOutlined />,
  userinfo: <UserInfoIcon style={{ fontSize: '16px', color: '#08c' }}/>
}
