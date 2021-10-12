/*
 * @Author: your name
 * @Date: 2021-10-10 19:11:09
 * @LastEditTime: 2021-10-11 23:46:53
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \ts-antd-admin\src\components\FilterItem\FilterItem.tsx
 */
import React from 'react'
import styles from './FilterItem.less'

interface FilterItemProps {
  label: string,
  children: any,
}
const FilterItem = ({ label = '', children }: FilterItemProps) => {
  const labelArray = label.split('')
  return (
    <div className={styles.filterItem}>
      {labelArray.length > 0 && (
        <div className={styles.labelWrap}>
          {labelArray.map((item, index) => (
            <span className="labelText" key={index}>
              {item}
            </span>
          ))}
        </div>
      )}
      <div className={styles.item}>{children}</div>
    </div>
  )
}


export default FilterItem
