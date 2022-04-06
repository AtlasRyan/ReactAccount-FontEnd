import React, { useEffect, useState } from 'react';
import { Button, FilePicker, Input, Toast } from 'zarm';
import Header from '@/components/Header'; // 由于是内页，使用到公用头部
import axios from 'axios'; // // 由于采用 form-data 传递参数，所以直接只用 axios 进行请求
import { get, post } from '@/utils';
import { baseUrl } from 'config';  // 由于直接使用 axios 进行请求，统一封装了请求 baseUrl
import s from './style.module.less';

const UserInfo = () => {

  const handleSelect = (file) => {
    console.log('file', file)
    let formData = new FormData()
    formData.append('file', file.file)
  }
  return <div className={s.userinfo}>
    <FilePicker onChange={handleSelect} accept="image/*">
      <Button theme='primary' size='xs'>点击上传</Button>
    </FilePicker>
  </div>
};

export default UserInfo;