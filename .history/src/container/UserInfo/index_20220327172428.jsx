import React from 'react';
import { FilePicker, Button } from 'zarm';

import s from './style.module.less';

const UserInfo = () => {

  const handleSelect = (file) => {
    console.log('file', file)
  }
  return <div className={s.userinfo}>
    <FilePicker onChange={handleSelect} accept="image/*">
      <Button theme='primary' size='xs'>点击上传</Button>
    </FilePicker>
  </div>
};

export default UserInfo;