import React from 'react'
import Header from '@/components/Header'

import s from './style.module.less'

const About = () => {
  return <>
    <Header title='关于' />
    <div className={s.about}>
      <h2>关于项目</h2>
      <article>全栈学习项目。</article>
      <article>数据库采用mySQL。</article>
      <article>服务端采用 Node 架构 Egg.js</article>
      <article>前端采用 React 框架（HOOKS） + Zarm 移动端组件库 + vite开发构建工具。</article>
      <h2>关于作者</h2>
      <article>have a try</article>
    </div>
  </>
};

export default About;