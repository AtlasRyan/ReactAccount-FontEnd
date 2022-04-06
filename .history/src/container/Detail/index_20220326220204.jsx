import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import qs from 'query-string';
import Header from '@/components/Header';
import { get } from '@/utils';

import s from './style.module.less';

const Detail = () => {
  return <div className={s.detail}>
    <Header title='账单详情' />
  </div>
}

export default Detail