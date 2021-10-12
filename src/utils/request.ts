import axios, { AxiosRequestConfig } from 'axios'
import { cloneDeep } from 'lodash'
import { parse, compile } from 'path-to-regexp'
import { message } from 'antd'
import { CANCEL_REQUEST_MESSAGE } from '@/utils/constant'

const { CancelToken } = axios
window.cancelRequest = new Map()
type IData = {
  [propName: string] : any
}
interface IResult {
  list: any[]
  data: IData
}

export default function request(options: AxiosRequestConfig) {
  let { data, url } = options
  const cloneData = cloneDeep(data)

  try {
    let domain = ''
    if(url) {
      const urlMatch = url.match(/[a-zA-z]+:\/\/[^/]*/)
      if (urlMatch) {
        ;[domain] = urlMatch
        url = url.slice(domain.length)
      }
    }

    const match = parse(url as any)
    url = compile(url as any)(data)

    for (const item of match) {
      if (item instanceof Object && item.name in cloneData) {
        delete cloneData[item.name]
      }
    }
    url = domain + url
  } catch (e: any) {
    message.error(e.message)
  }

  options.url = url
  options.cancelToken = new CancelToken(cancel => {
    window.cancelRequest.set(Symbol(Date.now()), {
      pathname: window.location.pathname,
      cancel,
    })
  })

  return axios(options)
    .then(response => {
      const { statusText, status, data } = response

      let result: IResult = {
        list: [],
        data: {}
      }
      if (typeof data === 'object') {
        result = data
        if (Array.isArray(data)) {
          result.list = data
        }
      } else {
        result.data = data
      }

      return Promise.resolve({
        success: true,
        message: statusText,
        statusCode: status,
        ...result,
      })
    })
    .catch(error => {
      const { response, message } = error

      if (String(message) === CANCEL_REQUEST_MESSAGE) {
        return {
          success: false,
        }
      }

      let msg
      let statusCode

      if (response && response instanceof Object) {
        const { data, statusText } = response
        statusCode = response.status
        msg = data.message || statusText
      } else {
        statusCode = 600
        msg = error.message || 'Network Error'
      }

      /* eslint-disable */
      return Promise.reject({
        success: false,
        statusCode,
        message: msg,
      })
    })
}
