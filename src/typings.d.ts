/*
 * @Author: your name
 * @Date: 2021-09-17 20:41:31
 * @LastEditTime: 2021-10-11 23:40:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antd-admin\src\typings.d.ts
 */
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';

declare const REACT_APP_ENV: 'test' | 'dev' | 'pre' | false;


declare module 'dva-model-extend';
declare module 'enquire-js';
declare module 'draftjs-to-markdown';
declare module 'draftjs-to-html';
declare module 'draft-js';
declare module 'react-draft-wysiwyg';

declare module 'store';
interface Window {
  cancelRequest: Map
}
