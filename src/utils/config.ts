/*
 * @Author: your name
 * @Date: 2021-10-10 19:11:09
 * @LastEditTime: 2021-10-10 22:23:38
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \ts-antd-admin\src\utils\config.js
 */
export const siteName = 'AntD Admin'
export const copyright = 'Ant Design Admin  ©2020 zuiidea'
export const logoPath = '/logo.svg'
export const apiPrefix = '/api/v1'
export const fixedHeader = true // sticky primary layout header
/* Layout configuration, specify which layout to use for route. */
export const layouts = [
  {
    name: 'primary',
    include: [/.*/],
    exclude: [/(\/(en|zh))*\/login/],
  }
]

export const i18n = {
  /* Countrys flags: https://www.flaticon.com/packs/countrys-flags */
  languages: [
    {
      key: 'pt-br',
      title: 'Português',
      flag: '/portugal.svg',
    },
    {
      key: 'en',
      title: 'English',
      flag: '/america.svg',
    },
    {
      key: 'zh',
      title: '中文',
      flag: '/china.svg',
    },
  ],
  defaultLanguage: 'en',
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  siteName,
  copyright,
  logoPath,
  apiPrefix,
  fixedHeader,
  layouts,
  i18n
}
