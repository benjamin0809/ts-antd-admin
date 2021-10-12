import React from 'react'
import classnames from 'classnames'
import { Color } from '@/utils'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import styles from './completed.less'
interface CompletedProps {
  data: any[]
}
const Completed = ({ data }: CompletedProps) => {
  return (
    <div className={styles.sales}>
      <div className={styles.title}>TEAM TOTAL COMPLETED</div>
      <ResponsiveContainer minHeight={360}>
        <AreaChart data={data}>
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
          <Area
            type="monotone"
            dataKey="Task complete"
            stroke={Color.grass}
            fill={Color.grass}
            strokeWidth={2}
            dot={{ fill: '#fff' }}
            activeDot={{ r: 5, fill: '#fff', stroke: Color.green }}
          />
          <Area
            type="monotone"
            dataKey="Cards Complete"
            stroke={Color.sky}
            fill={Color.sky}
            strokeWidth={2}
            dot={{ fill: '#fff' }}
            activeDot={{ r: 5, fill: '#fff', stroke: Color.blue }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}


export default Completed
