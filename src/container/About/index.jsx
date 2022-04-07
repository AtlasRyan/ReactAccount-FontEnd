import React from 'react'
import Header from '@/components/Header'

import s from './style.module.less'

const About = () => {
  return <>
    <Header title='关于' />
    <div className={s.about}>
      <h2>关于项目</h2>
      <article>学习项目。数据库采用mySQL。服务端采用 Node 架构 Egg.js，前端采用 React 框架 + Zarm 移动端组件库，使用pm2运行于服务器。</article>
      <h2>关于作者</h2>
      <article>have a try</article>
    </div>
  </>
};

export default About;