import React from 'react'
import classnames from 'classnames'
import { Color } from '@/utils'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import styles from './sales.less'
interface SalesProps {
  data: any
}
const  Sales = ({ data }: SalesProps) => {
  return (
    <div className={styles.sales}>
      <div className={styles.title}>Yearly Sales</div>
      <ResponsiveContainer minHeight={360}>
        <LineChart data={data}>
          <Legend
            verticalAlign="top"
            content={prop => {
              const { payload }: any = prop
              return (
                <ul
                  className={classnames({
                    [styles.legend]: true,
                    clearfix: true,
                  })}
                >
                  {payload.map((item: { color: any; value: string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal | null | undefined }, key: React.Key | null | undefined) => (
                    <li key={key}>
                      <span
                        className={styles.radiusdot}
                        style={{ background: item.color }}
                      />
                      {item.value}
                    </li>
                  ))}
                </ul>
              )
            }}
          />
          <XAxis
            dataKey="name"
            axisLine={{ stroke: Color.borderBase, strokeWidth: 1 }}
            tickLine={false}
          />
          <YAxis axisLine={false} tickLine={false} />
          <CartesianGrid
            vertical={false}
            stroke={Color.borderBase}
            strokeDasharray="3 3"
          />
          <Tooltip
            wrapperStyle={{
              border: 'none',
              boxShadow: '4px 4px 40px rgba(0, 0, 0, 0.05)',
            }}
            content={content => {
              const list = (content as any).payload.map((item: { color: any; name: any; value: any }, key: React.Key | null | undefined) => (
                <li key={key} className={styles.tipitem}>
                  <span
                    className={styles.radiusdot}
                    style={{ background: item.color }}
                  />
                  {`${item.name}:${item.value}`}
                </li>
              ))
              return (
                <div className={styles.tooltip}>
                  <p className={styles.tiptitle}>{content.label}</p>
                  {content.payload && <ul>{list}</ul>}
                </div>
              )
            }}
          />
          <Line
            type="monotone"
            dataKey="Food"
            stroke={Color.purple}
            strokeWidth={3}
            dot={{ fill: Color.purple }}
            activeDot={{ r: 5, strokeWidth: 0 }}
          />
          <Line
            type="monotone"
            dataKey="Clothes"
            stroke={Color.red}
            strokeWidth={3}
            dot={{ fill: Color.red }}
            activeDot={{ r: 5, strokeWidth: 0 }}
          />
          <Line
            type="monotone"
            dataKey="Electronics"
            stroke={Color.green}
            strokeWidth={3}
            dot={{ fill: Color.green }}
            activeDot={{ r: 5, strokeWidth: 0 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Sales
