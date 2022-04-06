import React from 'react'
import { Button } from 'zarm'

import s from './style.module.less'

export default function Index() {
  return (<div className={s.index}>
    <span>样式</span>
    <Button variant="contained">你好，世界</Button>
  </div>)
}

// const Index=()=>{
//     return (<div>
//         Index
//       </div>)
// }
// export default Index;