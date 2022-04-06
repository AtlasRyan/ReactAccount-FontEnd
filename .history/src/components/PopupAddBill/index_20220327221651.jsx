import React, { forwardRef, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Popup, Icon, Keyboard, Input  } from 'zarm';
import s from './style.module.less';
import dayjs from 'dayjs';
import PopupDate from '../PopupDate'
import CustomIcon from '../CustomIcon';
import { get, typeMap } from '@/utils';
import { Toast } from 'zarm';
import { post } from '@/utils';

const PopupAddBill = forwardRef(({ detail = {}, onReload }, ref) => {
  const [show, setShow] = useState(false) // 内部控制弹窗显示隐藏。
  const [payType, setPayType] = useState('expense'); // 支出或收入类型
  const [currentType, setCurrentType] = useState({}); // 当前选中账单类型
  const [expense, setExpense] = useState([]); // 支出类型数组
  const [income, setIncome] = useState([]); // 收入类型数组
  const dateRef = useRef();
  const [remark, setRemark] = useState(''); // 备注
  const [showRemark, setShowRemark] = useState(false); // 备注输入框
  const [date, setDate] = useState(new Date()); // 日期
  const [amount, setAmount] = useState(''); // 账单价格
  const id = detail && detail.id // 外部传进来的账单详情 id
  //console.log(JSON.stringify(detail))

  // 通过 forwardRef 拿到外部传入的 ref，并添加属性，使得父组件可以通过 ref 控制子组件。
  if (ref) {
    ref.current = {
      show: () => {
        setShow(true);
      },
      close: () => {
        setShow(false);
      }
    }
  };

  useEffect(() => {
    if (detail.id) {
      setPayType(detail.type == 1 ? 'expense' : 'income')
      setCurrentType({
        id: detail.label_id,
        name: detail.name
      })
      setRemark(detail.remarks)
      setAmount(detail.amount)
      setDate(dayjs(Number(detail.date)))
    }
  }, [detail])

  useEffect(async () => {
    const { data: { list } } = await get('/api/type/list');
    const _expense = list.filter(i => i.type == 1); // 支出类型
    const _income = list.filter(i => i.type == 2); // 收入类型
    setExpense(_expense);
    setIncome(_income);
    if (!id) {
      setCurrentType(_expense[0]); // 新建账单，类型默认是支出类型数组的第一项
    };
  }, [])

  // 切换收入还是支出
  const changeType = (type) => {
    setPayType(type);
    // 切换之后，默认给相应类型的第一个值
    if (type == 'expense') {
      setCurrentType(expense[0]);
    } else {
      setCurrentType(income[0]);
    }
  };

  // 日期弹窗
  const handleDatePop = () => {
    dateRef.current && dateRef.current.show()
  }

  // 日期选择回调
  const selectDate = (val) => {
    setDate(val);
  }

  // 选择账单类型
  const choseType = (item) => {
      setCurrentType(item)
  }

  // 监听输入框改变值
  const handleMoney = (value) => {
    value = String(value)
    if (value == 'close') return
    // 点击是删除按钮时
    if (value == 'delete') {
      let amounts= String(amount)
      let _amount = amounts.slice(0, amount.length - 1)
      //amount = Number(amount)
      setAmount(_amount)
      return
    }
    // 点击确认按钮时
    if (value == 'ok') {
      addBill()
      return
    }

    // 当输入的值为 '.' 且 已经存在 '.'，则不让其继续字符串相加。
    if (value == '.' && String(amount).includes('.')) return
    // 小数点后保留两位，当超过两位时，不让其字符串继续相加。
    if (value != '.' && String(amount).includes('.') && String(amount) && String(amount).split('.')[1].length >= 2) return
    // amount += value
    setAmount(amount + value)
  }

  // 添加账单
  const addBill = async () => {
    if (!amount) {
      Toast.show('请输入具体金额')
      return
    }
    console.log("1st"+date)
    const params = {
      amount: Number(amount).toFixed(2), // 账单金额小数点后保留两位
      label_id: currentType.id, // 账单种类id
      date: dayjs(date).unix() * 1000, // 日期传时间戳
      remarks: remark || '' // 备注
    }
    if (id) {
      console.log("2nd"+date)
      params.id = id;
      // 如果有 id 需要调用详情更新接口
      const result = await post('/api/bill/update', params);
      Toast.show('修改成功');
    } else {
      const result = await post('/api/bill/add', params);
      setAmount('');
      setPayType('expense');
      setCurrentType(expense[0]);
      setDate(new Date());
      setRemark('');
      Toast.show('添加成功');
    }
    setShow(false);
    if (onReload)onReload();
  }

  return <Popup
    visible={show}
    direction="bottom"
    onMaskClick={() => setShow(false)}
    destroy={false}
    mountContainer={() => document.body}
  >
    <div className={s.addWrap}>
      {/* 右上角关闭弹窗 */}
      <header className={s.header}>
        <span className={s.close} onClick={() => setShow(false)}><Icon type="wrong" /></span>
      </header>
       {/* 「收入」和「支出」类型切换 */}
      <div className={s.filter}>
        <div className={s.type}>
          <span onClick={() => changeType('expense')} className={cx({ [s.expense]: true, [s.active]: payType == 'expense' })}>支出</span>
          <span onClick={() => changeType('income')} className={cx({ [s.income]: true, [s.active]: payType == 'income' })}>收入</span>
        </div>
        <div className={s.time} onClick={handleDatePop}>{dayjs(date).format('MM-DD')}<Icon className={s.arrow} type="arrow-bottom" /></div>
      </div>
      <div className={s.money}>
        <span className={s.sufix}>¥</span>
        <span className={cx(s.amount, s.animation)}>{amount}</span>
      </div>
      <div className={s.typeWarp}>
        <div className={s.typeBody}>
          {
            (payType == 'expense' ? expense : income).map(item => <div onClick={() => choseType(item)} key={item.id} className={s.typeItem}>
              <span className={cx({[s.iconfontWrap]: true, [s.expense]: payType == 'expense', [s.income]: payType == 'income', [s.active]: currentType.id == item.id})}>
                <CustomIcon className={s.iconfont} type={typeMap[item.id].icon} />
              </span>
              <span>{item.name}</span>
            </div>)
          }
        </div>
      </div>
      <div className={s.remark}>
        {
          showRemark ? <Input
            autoHeight
            showLength
            maxLength={50}
            type="text"
            rows={3}
            value={remark}
            placeholder="请输入备注信息"
            onChange={(val) => setRemark(val)}
            onBlur={() => setShowRemark(false)}
          /> : <span onClick={() => setShowRemark(true)}>{remark || '添加备注'}</span>
        }
      </div>
      <Keyboard type="price" onKeyClick={(value) => handleMoney(value)} />
      <PopupDate ref={dateRef} onSelect={selectDate} />
    </div>
  </Popup>
})

export default PopupAddBill