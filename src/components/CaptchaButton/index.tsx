import { Button } from "antd"
import React, { useState, useEffect } from "react"
import store from 'store'
/*
 * @Author: your name
 * @Date: 2021-10-18 19:42:01
 * @LastEditTime: 2021-10-18 23:50:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ts-antd-admin\src\components\CaptchaButton\index.tsx
 */
interface CaptchaButtonProps {
  timestamp?: number
  countdown?: number
  disabled?: boolean
  uniqueKey: string
  phone: string
}

const CaptchaButton: React.FC<CaptchaButtonProps> = (props) => {
  const { countdown, disabled, uniqueKey } = props
  const _cd = countdown || 60

  const [timestamp, setTimestamp] = useState(0)
  const [CD, setCD] = useState(0)
  const [captchaStr, setCaptchaStr] = useState('获取验证码')
  const [loading, setLoading] = useState(false)



  const fetchCaptcha = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1)
      }, 1500)
    })
  }

  const getCaptcha = async () => {
    setLoading(true)
    const res = await fetchCaptcha()
    if (res) {
      setTimestamp(Date.now())
      setLoading(false)
    }
  }


  useEffect(() => {
    console.log('initial effect;')
    const timestamp = store.get('countdown:' + uniqueKey)
    if (timestamp > 0) {
      console.log('setTimestamp:', timestamp)
      setTimestamp(timestamp)
    }
  }, [])
  useEffect(() => {
    console.log('CD effect;',CD)
    if (CD > 0) {
      setCaptchaStr(`${CD} 秒后再试`)
      const f = () => {
        setTimeout(() => {
          if (CD > 0) {
            if(CD - 1 === 0) {
              store.remove('countdown:' + uniqueKey, timestamp)
            }
            setCD(CD - 1)
          }
        }, 1000)
      }
      f()
    } else {
      setCaptchaStr('Get captcha')
    }
  }, [CD])

  useEffect(() => {
    console.log('timestamp effect;',timestamp)
    if (timestamp && timestamp > 0) {
      const seconds = Math.floor((Date.now() - timestamp) / 1000)
      console.log('seconds:', seconds)
      if (seconds < _cd) {
        store.set('countdown:' + uniqueKey, timestamp)
        setCD(_cd - seconds)
      } else {
        store.remove('countdown:' + uniqueKey, timestamp)
      }
    } else {
      setCaptchaStr('获取验证码')
    }
  }, [timestamp])


  return (
    <Button type="link" disabled={CD > 0 || disabled} onClick={getCaptcha} loading={loading}>
      {captchaStr}
    </Button>
  )
}

export default CaptchaButton

