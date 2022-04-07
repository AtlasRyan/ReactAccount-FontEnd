import React from 'react'
import Header from '@/components/Header'

import s from './style.module.less'

const About = () => {
  return <>
    <Header title='关于' />
    <div className={s.about}>
      <h2>关于项目</h2>
      <article>学习项目。数据库采用mySQL。服务端采用 Node 架构 Egg.js，前端采用 React 框架 + Zarm 移动端组件库，使用pushstate-server + pm2运行于服务器。</article>
      <h2>关于作者</h2>
      <article>have a try</article>
      <h2>还未能的问题</h2>
      <article>pm2自动化部署无法实现，仍需要手动推到代码库，再从服务器拉去来更新项目</article>
      <article>Zarm组件库keyboard删除按键调试</article>
    </div>
  </>
};

export default About;