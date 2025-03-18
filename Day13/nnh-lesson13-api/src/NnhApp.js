import React from 'react'
import NnhReadApiLocal from './components/NnhReadApiLocal';
import NnhReadMockApi from './components/NnhReadMockApi';
import NnhCreateMockApi from './components/NnhCreateMockApi';
import './style.css';


export default function NnhApp() {
  return (
    <div className='container border my-3 p-3'>
        <h1>ReactJS - API - Nguyen Ngoc Hieu</h1>
        <hr/>
        <NnhReadApiLocal/>
        <hr/>
        <h1>Đọc dữ liệu từ mockAPI</h1>
        <NnhReadMockApi/>
        <NnhCreateMockApi/>
    </div>
  )
}
