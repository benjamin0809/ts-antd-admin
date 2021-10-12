/*
 * @Author: your name
 * @Date: 2021-10-10 19:11:08
 * @LastEditTime: 2021-10-12 00:25:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ts-antd-admin\src\components\Editor\Editor.tsx
 */
import React from 'react'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import styles from './Editor.less'

const DraftEditor = (props: any) => {
  return (
    <Editor
      toolbarClassName={styles.toolbar}
      wrapperClassName={styles.wrapper}
      editorClassName={styles.editor}
      {...props}
    />
  )
}

export default DraftEditor
