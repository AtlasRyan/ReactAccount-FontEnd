var Ne=Object.defineProperty;var fe=Object.getOwnPropertySymbols;var Be=Object.prototype.hasOwnProperty,Ae=Object.prototype.propertyIsEnumerable;var Fe=(a,u,r)=>u in a?Ne(a,u,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[u]=r,J=(a,u)=>{for(var r in u||(u={}))Be.call(u,r)&&Fe(a,r,u[r]);if(fe)for(var r of fe(u))Ae.call(u,r)&&Fe(a,r,u[r]);return a};import{a as R,T as y,I as W,P as O,r as s,u as K,j as t,b as e,C as $,F as Q,d as I,c as de,e as C,D as De,f as M,K as ke,g as Se,h as $e,B as ee,M as ge,i as Te,k as Ie,N as Re,l as xe,m as Me,n as We,o as se,p as Pe,q as Ye,R as je,s as ze,t as Le,v as qe,w as Ue}from"./vendor.7668394c.js";const He=function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const _ of n.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&i(_)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}};He();R.defaults.baseURL="http://47.94.199.134:7001";R.defaults.withCredentials=!1;R.defaults.headers["X-Requested-With"]="XMLHttpRequest";R.defaults.headers.Authorization=`${localStorage.getItem("token")||null}`;R.defaults.headers.post["Content-Type"]="application/json";R.interceptors.response.use(a=>typeof a.data!="object"?(y.show("\u670D\u52A1\u7AEF\u5F02\u5E38\uFF01"),Promise.reject(a)):a.data.code!=200?(a.data.msg&&y.show(a.data.msg),a.data.code==401&&(window.location.href="/login"),Promise.reject(a.data)):a.data);const Ee="http://47.94.199.134:7001",U=R.get,H=R.post,ne={1:{icon:"canyin"},2:{icon:"fushi"},3:{icon:"jiaotong"},4:{icon:"riyong"},5:{icon:"gouwu"},6:{icon:"xuexi"},7:{icon:"yiliao"},8:{icon:"lvxing"},9:{icon:"qita"},10:{icon:"gongzi"},11:{icon:"zhuanzhang"},12:{icon:"licai"},13:{icon:"tuikuang"},14:{icon:"qita"}},te={normal:0,pull:1,drop:2,loading:3,success:4,failure:5},pe={normal:0,abort:1,loading:2,success:3,failure:4,complete:5},ye=a=>(a&&a.startsWith("http")||(a=`${Ee}${a}`),a);var N=W.createFromIconfont("//at.alicdn.com/t/font_2236655_w1mpqp7n1ni.js");const Oe="_item_mkxeh_1",Ke="_header-date_mkxeh_7",Xe="_date_mkxeh_18",Ve="_money_mkxeh_22",Ze="_item-icon_mkxeh_37";var X={item:Oe,headerDate:Ke,date:Xe,money:Ve,itemIcon:Ze};const Ce=({bill:a})=>{const[u,r]=s.exports.useState(0),[i,o]=s.exports.useState(0),n=K();s.exports.useEffect(()=>{const l=a.bills.filter(m=>m.type==2).reduce((m,E)=>(m+=Number(E.amount),m),0);r(l);const f=a.bills.filter(m=>m.type==1).reduce((m,E)=>(m+=Number(E.amount),m),0);o(f)},[a.bills]);const _=l=>{n(`/detail?id=${l.id}`)};return t("div",{className:X.item,children:[t("div",{className:X.headerDate,children:[e("div",{className:X.date,children:a.date}),t("div",{className:X.money,children:[t("span",{children:[e("img",{src:"//s.yezgea02.com/1615953405599/zhi%402x.png",alt:"\u652F"}),t("span",{children:["\xA5",i.toFixed(2)]})]}),t("span",{children:[e("img",{src:"//s.yezgea02.com/1615953405599/shou%402x.png",alt:"\u6536"}),t("span",{children:["\xA5",u.toFixed(2)]})]})]})]}),a&&a.bills.map(l=>e($,{className:X.bill,onClick:()=>_(l),title:t(Q,{children:[e(N,{className:X.itemIcon,type:l.label_id?ne[l.label_id].icon:1}),e("span",{children:l.name})]}),description:e("span",{style:{color:l.type==2?"red":"#39be77"},children:`${l.type==1?"-":"+"}${l.amount}`}),help:t("div",{children:[I(Number(l.date)).format("HH:mm")," ",l.remarks?`| ${l.remarks}`:""]})},l.id))]})};Ce.propTypes={bill:O.object};const Ge="_popup-type_xuces_1",Je="_header_xuces_7",Qe="_cross_xuces_20",et="_content_xuces_28",tt="_all_xuces_32",at="_title_xuces_39",st="_expense-wrap_xuces_44",nt="_income-wrap_xuces_45",ot="_active_xuces_60";var k={popupType:Ge,header:Je,cross:Qe,content:et,all:tt,title:at,expenseWrap:st,incomeWrap:nt,active:ot};const ve=s.exports.forwardRef(({onSelect:a},u)=>{const[r,i]=s.exports.useState(!1),[o,n]=s.exports.useState("all"),[_,l]=s.exports.useState([]),[f,m]=s.exports.useState([]);s.exports.useEffect(()=>{(async()=>{const{data:{list:d}}=await U("/api/type/list");l(d.filter(x=>x.type==1)),m(d.filter(x=>x.type==2))})()},[]),u&&(u.current={show:()=>{i(!0)},close:()=>{i(!1)}});const E=d=>{n(d.id),i(!1),a(d)};return e(de,{visible:r,direction:"bottom",onMaskClick:()=>i(!1),destroy:!1,mountContainer:()=>document.body,children:t("div",{className:k.popupType,children:[t("div",{className:k.header,children:["\u8BF7\u9009\u62E9\u7C7B\u578B",e(W,{type:"wrong",className:k.cross,onClick:()=>i(!1)})]}),t("div",{className:k.content,children:[e("div",{onClick:()=>E({id:"all"}),className:C({[k.all]:!0,[k.active]:o=="all"}),children:"\u5168\u90E8\u7C7B\u578B"}),e("div",{className:k.title,children:"\u652F\u51FA"}),e("div",{className:k.expenseWrap,children:_.map((d,x)=>e("p",{onClick:()=>E(d),className:C({[k.active]:o==d.id}),children:d.name},x))}),e("div",{className:k.title,children:"\u6536\u5165"}),e("div",{className:k.incomeWrap,children:f.map((d,x)=>e("p",{onClick:()=>E(d),className:C({[k.active]:o==d.id}),children:d.name},x))})]})]})})});ve.propTypes={onSelect:O.func};const oe=s.exports.forwardRef(({onSelect:a,mode:u="datetime"},r)=>{const[i,o]=s.exports.useState(!1),[n,_]=s.exports.useState(new Date),l=f=>{_(f),o(!1),u=="month"?a(I(f).format("YYYY-MM")):u=="date"?a(I(f).format("YYYY-MM-DD")):u=="datetime"&&a(I(f).format("YYYY-MM-DD HH:mm"))};return r&&(r.current={show:()=>{o(!0)},close:()=>{o(!1)}}),e(de,{visible:i,direction:"bottom",onMaskClick:()=>o(!1),destroy:!1,mountContainer:()=>document.body,children:e("div",{children:e(De,{visible:i,value:n,mode:u,onOk:l,onCancel:()=>o(!1)})})})});oe.propTypes={mode:O.string,onSelect:O.func};const ut="_add-wrap_11omu_1",ct="_header_11omu_7",rt="_close_11omu_10",it="_filter_11omu_15",lt="_type_11omu_21",dt="_expense_11omu_30",pt="_active_11omu_33",mt="_income_11omu_38",ht="_time_11omu_43",_t="_arrow_11omu_52",ft="_money_11omu_56",Ft="_sufix_11omu_61",gt="_amount_11omu_66",xt="_type-warp_11omu_70",Et="_type-body_11omu_79",yt="_type-item_11omu_83",Ct="_iconfont-wrap_11omu_90",vt="_iconfont_11omu_90",wt="_remark_11omu_116";var F={addWrap:ut,header:ct,close:rt,filter:it,type:lt,expense:dt,active:pt,income:mt,time:ht,arrow:_t,money:ft,sufix:Ft,amount:gt,typeWarp:xt,typeBody:Et,typeItem:yt,iconfontWrap:Ct,iconfont:vt,remark:wt};const we=s.exports.forwardRef(({detail:a={},onReload:u},r)=>{const[i,o]=s.exports.useState(!1),[n,_]=s.exports.useState("expense"),[l,f]=s.exports.useState({}),[m,E]=s.exports.useState([]),[d,x]=s.exports.useState([]),w=s.exports.useRef(),[D,g]=s.exports.useState(""),[Z,Y]=s.exports.useState(!1),[j,z]=s.exports.useState(new Date),[v,h]=s.exports.useState(""),b=a&&a.id;r&&(r.current={show:()=>{o(!0)},close:()=>{o(!1)}}),s.exports.useEffect(()=>{a.id&&(_(a.type==1?"expense":"income"),f({id:a.label_id,name:a.name}),g(a.remarks),h(a.amount),z(I(Number(a.date))))},[a]),s.exports.useEffect(async()=>{const{data:{list:c}}=await U("/api/type/list"),G=c.filter(le=>le.type==1),ie=c.filter(le=>le.type==2);E(G),x(ie),b||f(G[0])},[]);const L=c=>{_(c),c=="expense"?f(m[0]):f(d[0])},S=()=>{w.current&&w.current.show()},q=c=>{z(c)},ue=c=>{f(c)},ce=c=>{if(c=String(c),c!="close"){if(c=="delete"){let ie=String(v).slice(0,v.length-1);h(ie);return}if(c=="ok"){re();return}c=="."&&String(v).includes(".")||c!="."&&String(v).includes(".")&&String(v)&&String(v).split(".")[1].length>=2||h(v+c)}},re=async()=>{if(!v){y.show("\u8BF7\u8F93\u5165\u5177\u4F53\u91D1\u989D");return}const c={amount:Number(v).toFixed(2),label_id:l.id,date:I(j).unix()*1e3,remarks:D||""};b?(c.id=b,await H("/api/bill/update",c),y.show("\u4FEE\u6539\u6210\u529F")):(await H("/api/bill/add",c),h(""),_("expense"),f(m[0]),z(new Date),g(""),y.show("\u6DFB\u52A0\u6210\u529F")),o(!1),u&&u()};return e(de,{visible:i,direction:"bottom",onMaskClick:()=>o(!1),destroy:!1,mountContainer:()=>document.body,children:t("div",{className:F.addWrap,children:[e("header",{className:F.header,children:e("span",{className:F.close,onClick:()=>o(!1),children:e(W,{type:"wrong"})})}),t("div",{className:F.filter,children:[t("div",{className:F.type,children:[e("span",{onClick:()=>L("expense"),className:C({[F.expense]:!0,[F.active]:n=="expense"}),children:"\u652F\u51FA"}),e("span",{onClick:()=>L("income"),className:C({[F.income]:!0,[F.active]:n=="income"}),children:"\u6536\u5165"})]}),t("div",{className:F.time,onClick:S,children:[I(j).format("MM-DD"),e(W,{className:F.arrow,type:"arrow-bottom"})]})]}),t("div",{className:F.money,children:[e("span",{className:F.sufix,children:"\xA5"}),e("span",{className:C(F.amount,F.animation),children:v})]}),e("div",{className:F.typeWarp,children:e("div",{className:F.typeBody,children:(n=="expense"?m:d).map(c=>t("div",{onClick:()=>ue(c),className:F.typeItem,children:[e("span",{className:C({[F.iconfontWrap]:!0,[F.expense]:n=="expense",[F.income]:n=="income",[F.active]:l.id==c.id}),children:e(N,{className:F.iconfont,type:ne[c.id].icon})}),e("span",{children:c.name})]},c.id))})}),e("div",{className:F.remark,children:Z?e(M,{autoHeight:!0,showLength:!0,maxLength:50,type:"text",rows:3,value:D,placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8\u4FE1\u606F",onChange:c=>g(c),onBlur:()=>Y(!1)}):e("span",{onClick:()=>Y(!0),children:D||"\u6DFB\u52A0\u5907\u6CE8"})}),e(ke,{type:"price",onKeyClick:c=>ce(c)}),e(oe,{ref:w,onSelect:q})]})})}),bt="_home_6bcn7_1",Nt="_header_6bcn7_7",Bt="_data-wrap_6bcn7_22",At="_type-wrap_6bcn7_38",Dt="_left_6bcn7_50",kt="_arrow_6bcn7_53",St="_content-wrap_6bcn7_57",$t="_add_6bcn7_67";var B={home:bt,header:Nt,dataWrap:Bt,typeWrap:At,left:Dt,arrow:kt,contentWrap:St,add:$t};const Tt=()=>{const[a,u]=s.exports.useState(I().format("YYYY-MM")),[r,i]=s.exports.useState([]),[o,n]=s.exports.useState(1),[_,l]=s.exports.useState(0),[f,m]=s.exports.useState(te.normal),[E,d]=s.exports.useState(pe.normal),x=s.exports.useRef(),w=s.exports.useRef(),[D,g]=s.exports.useState({}),[Z,Y]=s.exports.useState(0),[j,z]=s.exports.useState(0),v=s.exports.useRef();s.exports.useEffect(()=>{h()},[o,D,a]);const h=async()=>{const{data:c}=await U(`/api/bill/list?page=${o}&page_size=5&date=${a}&label_id=${D.id||"all"}`);o==1?i(c.list):i(r.concat(c.list)),Y(c.totalExpense.toFixed(2)),z(c.totalIncome.toFixed(2)),l(c.totalPage),d(pe.success),m(te.success)},b=()=>{m(te.loading),o!=1?n(1):h()},L=()=>{o<_&&(d(pe.loading),n(o+1))},S=()=>{x.current&&x.current.show()},q=c=>{c!=D&&m(te.loading),n(1),g(c)},ue=()=>{w.current&&w.current.show()},ce=c=>{c!=a&&m(te.loading),n(1),u(c)},re=()=>{v.current&&v.current.show()};return t("div",{className:B.home,children:[t("div",{className:B.header,children:[t("div",{className:B.dataWrap,children:[t("span",{className:B.expense,children:["\u603B\u652F\u51FA\uFF1A",t("b",{children:["\xA5 ",Z]})]}),t("span",{className:B.income,children:["\u603B\u6536\u5165\uFF1A",t("b",{children:["\xA5 ",j]})]})]}),t("div",{className:B.typeWrap,children:[e("div",{className:B.left,onClick:S,children:t("span",{className:B.title,children:[D.name||"\u5168\u90E8\u7C7B\u578B"," ",e(W,{className:B.arrow,type:"arrow-bottom"})]})}),e("div",{className:B.right,children:t("span",{className:B.time,onClick:ue,children:[a,e(W,{className:B.arrow,type:"arrow-bottom"})]})})]})]}),e("div",{className:B.contentWrap,children:r.length?e(Se,{animationDuration:200,stayTime:400,refresh:{state:f,handler:b},load:{state:E,distance:200,handler:L},children:r.map((c,G)=>e(Ce,{bill:c},G))}):null}),e(ve,{ref:x,onSelect:q}),e(oe,{ref:w,mode:"month",onSelect:ce}),e("div",{className:B.add,onClick:re,children:e(N,{type:"tianjia"})}),e(we,{ref:v,onReload:b})]})},It="_data_1h2fb_1",Rt="_total_1h2fb_5",Mt="_time_1h2fb_13",Wt="_date_1h2fb_35",Pt="_title_1h2fb_39",Yt="_expense_1h2fb_45",jt="_income_1h2fb_51",zt="_structure_1h2fb_55",Lt="_head_1h2fb_60",qt="_tab_1h2fb_70",Ut="_active_1h2fb_80",Ht="_content_1h2fb_88",Ot="_item_1h2fb_88",Kt="_left_1h2fb_93",Xt="_type_1h2fb_100",Vt="_name_1h2fb_115",Zt="_right_1h2fb_124",Gt="_percent_1h2fb_129",Jt="_momey_1h2fb_135",Qt="_proportion_1h2fb_138";var p={data:It,total:Rt,time:Mt,date:Wt,title:Pt,expense:Yt,income:jt,structure:zt,head:Lt,tab:qt,active:Ut,content:Ht,item:Ot,left:Kt,type:Xt,name:Vt,right:Zt,percent:Gt,momey:Jt,proportion:Qt};let me=null;const ea=()=>{const a=s.exports.useRef(),[u,r]=s.exports.useState(I().format("YYYY-MM")),[i,o]=s.exports.useState("expense"),[n,_]=s.exports.useState(0),[l,f]=s.exports.useState(0),[m,E]=s.exports.useState([]),[d,x]=s.exports.useState([]),[w,D]=s.exports.useState("expense");s.exports.useEffect(()=>(Z(),()=>{me.dispose()}),[u]);const g=h=>{window.echarts&&(me=echarts.init(document.getElementById("proportion")),me.setOption({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{data:h.map(b=>b.name)},series:[{name:"\u652F\u51FA",type:"pie",radius:"55%",data:h.map(b=>({value:b.number,name:b.name})),emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}))},Z=async()=>{const{data:h}=await U(`/api/bill/data?date=${u}`);_(h.total_expense),f(h.total_income);const b=h.total_data.filter(S=>S.type==1).sort((S,q)=>q.number-S.number),L=h.total_data.filter(S=>S.type==2).sort((S,q)=>q.number-S.number);E(b),x(L),g(w=="expense"?b:L)},Y=h=>{o(h)},j=h=>{D(h),g(h=="expense"?m:d)},z=()=>{a.current&&a.current.show()},v=h=>{r(h)};return t("div",{className:p.data,children:[t("div",{className:p.total,children:[t("div",{className:p.time,onClick:z,children:[e("span",{children:u}),e(W,{className:p.date,type:"date"})]}),e("div",{className:p.title,children:"\u5171\u652F\u51FA"}),t("div",{className:p.expense,children:["\xA5",n]}),t("div",{className:p.income,children:["\u5171\u6536\u5165\xA5",l]})]}),t("div",{className:p.structure,children:[t("div",{className:p.head,children:[e("span",{className:p.title,children:"\u6536\u652F\u6784\u6210"}),t("div",{className:p.tab,children:[e("span",{onClick:()=>Y("expense"),className:C({[p.expense]:!0,[p.active]:i=="expense"}),children:"\u652F\u51FA"}),e("span",{onClick:()=>Y("income"),className:C({[p.income]:!0,[p.active]:i=="income"}),children:"\u6536\u5165"})]})]}),e("div",{className:p.content,children:(i=="expense"?m:d).map(h=>t("div",{className:p.item,children:[t("div",{className:p.left,children:[t("div",{className:p.type,children:[e("span",{className:C({[p.expense]:i=="expense",[p.income]:i=="income"}),children:e(N,{type:h.label_id?ne[h.label_id].icon:1})}),e("span",{className:p.name,children:h.type_name})]}),t("div",{className:p.progress,children:["\xA5",Number(h.number).toFixed(2)||0]})]}),e("div",{className:p.right,children:e("div",{className:p.percent,children:e($e,{shape:"line",percent:Number(h.number/Number(i=="expense"?n:l)*100).toFixed(2),theme:"primary"})})})]},h.label_id))}),t("div",{className:p.proportion,children:[t("div",{className:p.head,children:[e("span",{className:p.title,children:"\u6536\u652F\u6784\u6210"}),t("div",{className:p.tab,children:[e("span",{onClick:()=>j("expense"),className:C({[p.expense]:!0,[p.active]:w=="expense"}),children:"\u652F\u51FA"}),e("span",{onClick:()=>j("income"),className:C({[p.income]:!0,[p.active]:w=="income"}),children:"\u6536\u5165"})]})]}),e("div",{id:"proportion"})]})]}),e(oe,{ref:a,mode:"month",onSelect:v})]})},ta="_user_1d4b2_1",aa="_head_1d4b2_5",sa="_info_1d4b2_14",na="_content_1d4b2_33",oa="_logout_1d4b2_43";var V={user:ta,head:aa,info:sa,content:na,logout:oa};const ua=()=>{const[a,u]=s.exports.useState({}),[r,i]=s.exports.useState(""),o=K();s.exports.useEffect(()=>{n()},[]);const n=async()=>{const{data:l}=await U("/api/user/get_userinfo");u(l),i(l.avatar)},_=()=>{ge.confirm({title:"\u9000\u51FA",content:"\u786E\u8BA4\u9000\u51FA\uFF1F",onOk:async()=>{localStorage.removeItem("token"),o("/login")}})};return t("div",{className:V.user,children:[t("div",{className:V.head,children:[t("div",{className:V.info,children:[t("span",{children:["\u6635\u79F0\uFF1A",a.username||"--"]}),t("span",{children:[e("img",{style:{width:30,height:30,verticalAlign:"-10px"},src:"//s.yezgea02.com/1615973630132/geqian.png",alt:""}),e("b",{children:a.signature||"\u6682\u65E0\u4E2A\u7B7E"})]})]}),e("img",{className:V.avatar,style:{width:60,height:60,borderRadius:8},src:a.avatar||"",alt:""})]}),t("div",{className:V.content,children:[e($,{hasArrow:!0,title:"\u7528\u6237\u4FE1\u606F\u4FEE\u6539",onClick:()=>o("/userinfo"),icon:e("img",{style:{width:20,verticalAlign:"-7px"},src:"//s.yezgea02.com/1615974766264/gxqm.png",alt:""})}),e($,{hasArrow:!0,title:"\u91CD\u7F6E\u5BC6\u7801",onClick:()=>o("/account"),icon:e("img",{style:{width:20,verticalAlign:"-7px"},src:"//s.yezgea02.com/1615974766264/zhaq.png",alt:""})}),e($,{hasArrow:!0,title:"\u5173\u4E8E",onClick:()=>o("/about"),icon:e("img",{style:{width:20,verticalAlign:"-7px"},src:"//s.yezgea02.com/1615975178434/lianxi.png",alt:""})})]}),e(ee,{className:V.logout,block:!0,theme:"danger",onClick:_,children:"\u9000\u51FA\u767B\u5F55"})]})},ca="_auth_1o0xf_1",ra="_head_1o0xf_5",ia="_tab_1o0xf_15",la="_avtive_1o0xf_24",da="_form_1o0xf_29",pa="_operation_1o0xf_38",ma="_agree_1o0xf_41";var P={auth:ca,head:ra,tab:ia,avtive:la,form:da,operation:pa,agree:ma};const ha=()=>{const a=s.exports.useRef(),[u,r]=s.exports.useState("login"),[i,o]=s.exports.useState(""),[n,_]=s.exports.useState(""),[l,f]=s.exports.useState(""),[m,E]=s.exports.useState(""),[d,x]=s.exports.useState(""),w=async()=>{if(!i){y.show("\u8BF7\u8F93\u5165\u8D26\u53F7");return}if(!n){y.show("\u8BF7\u8F93\u5165\u5BC6\u7801");return}try{if(u=="login"){const{data:g}=await H("/api/user/login",{user_name:i,password:n});console.log("data",g),localStorage.setItem("token",g.token),window.location.href="/"}else{if(n!==l){y.show("\u4E24\u6B21\u5BC6\u7801\u4E0D\u4E00\u81F4");return}if(!m){y.show("\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801");return}if(m!=d){console.log(m),console.log(d),y.show("\u9A8C\u8BC1\u7801\u9519\u8BEF");return}if(!document.getElementById("agreement").checked){y.show("\u8BF7\u540C\u610F\u6761\u6B3E");return}const{data:g}=await H("/api/user/register",{user_name:i,password:n});y.show("\u6CE8\u518C\u6210\u529F"),r("login")}}catch{y.show("\u7CFB\u7EDF\u9519\u8BEF")}};s.exports.useEffect(()=>{document.title=u=="login"?"\u767B\u5F55":"\u6CE8\u518C"},[u]);const D=s.exports.useCallback(g=>{x(g)},[]);return t("div",{className:P.auth,children:[e("div",{className:P.head}),t("div",{className:P.tab,children:[e("span",{className:C({[P.active]:u=="login"}),onClick:()=>r("login"),children:"\u767B\u5F55"}),e("span",{className:C({[P.active]:u=="register"}),onClick:()=>r("register"),children:"\u6CE8\u518C"})]}),t("div",{className:P.form,children:[e($,{icon:e(N,{type:"zhanghao"}),children:e(M,{clearable:!0,type:"text",placeholder:"\u8BF7\u8F93\u5165\u8D26\u53F7",onChange:g=>o(g)})}),e($,{icon:e(N,{type:"mima"}),children:e(M,{clearable:!0,type:"password",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",onChange:g=>_(g)})}),u=="register"?e($,{icon:e(N,{type:"mima"}),children:e(M,{clearable:!0,type:"password",placeholder:"\u8BF7\u91CD\u65B0\u8F93\u5165\u5BC6\u7801",onChange:g=>f(g)})}):null,u=="register"?t($,{icon:e(N,{type:"mima"}),children:[e(M,{clearable:!0,type:"text",placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",onChange:g=>E(g)}),e(Te,{ref:a,charNum:4,onChange:D})]}):null]}),t("div",{className:P.operation,children:[u=="register"?t("div",{className:P.agree,children:[e(Ie,{id:"agreement"}),t("label",{className:"text-light",children:["\u9605\u8BFB\u5E76\u540C\u610F",e("a",{children:"\u300A\u6761\u6B3E\u300B"})]})]}):null,e(ee,{onClick:w,block:!0,theme:"primary",children:u=="login"?"\u767B\u5F55":"\u6CE8\u518C"})]})]})},_a="_header-warp_12wcp_1",fa="_block_12wcp_4",Fa="_header_12wcp_1",ga="_more_12wcp_21";var he={headerWarp:_a,block:fa,header:Fa,more:ga};const ae=({title:a=""})=>{const u=K();return e("div",{className:he.headerWarp,children:e("div",{className:he.block,children:e(Re,{className:he.header,left:e(W,{type:"arrow-left",theme:"primary",onClick:()=>u(-1)}),title:a})})})};ae.propTypes={title:O.string};const xa="_detail_1wagh_1",Ea="_card_1wagh_8",ya="_type_1wagh_16",Ca="_expense_1wagh_29",va="_income_1wagh_32",wa="_iconfont_1wagh_35",ba="_amount_1wagh_38",Na="_info_1wagh_43",Ba="_time_1wagh_48",Aa="_remark_1wagh_61",Da="_operation_1wagh_75",ka="_van-icon_1wagh_82";var A={detail:xa,card:Ea,type:ya,expense:Ca,income:va,iconfont:wa,amount:ba,info:Na,time:Ba,remark:Aa,operation:Da,vanIcon:ka};const Sa=()=>{const r=xe().search.replace(/[^0-9]/ig,""),i=K(),o=s.exports.useRef(),[n,_]=s.exports.useState({});s.exports.useEffect(()=>{l()},[]);const l=async()=>{const{data:E}=await U(`/api/bill/detail?id=${r}`),d=J({},E)["0"];_(d)},f=()=>{ge.confirm({title:"\u5220\u9664",content:"\u786E\u8BA4\u5220\u9664\u8D26\u5355\uFF1F",onOk:async()=>{await H("/api/bill/delete",{id:r}),y.show("\u5220\u9664\u6210\u529F"),i("/")}})},m=()=>{o.current&&o.current.show()};return t("div",{className:A.detail,children:[e(ae,{title:"\u8D26\u5355\u8BE6\u60C5"}),t("div",{className:A.card,children:[t("div",{className:A.type,children:[e("span",{className:C({[A.expense]:n.type==1,[A.income]:n.type==2}),children:e(N,{className:A.iconfont,type:n.label_id?ne[n.label_id].icon:1})}),e("span",{children:n.name||""})]}),n.type==1?t("div",{className:C(A.amount,A.expense),children:["-",n.amount]}):t("div",{className:C(A.amount,A.income),children:["+",n.amount]}),t("div",{className:A.info,children:[t("div",{className:A.time,children:[e("span",{children:"\u8BB0\u5F55\u65F6\u95F4"}),e("span",{children:I(Number(n.date)).format("YYYY-MM-DD HH:mm")})]}),t("div",{className:A.remark,children:[e("span",{children:"\u5907\u6CE8"}),e("span",{children:n.remarks||""})]})]}),t("div",{className:A.operation,children:[t("span",{onClick:f,children:[e(N,{type:"shanchu"}),"\u5220\u9664"]}),t("span",{onClick:m,children:[e(N,{type:"tianjia"}),"\u7F16\u8F91"]})]})]}),e(we,{ref:o,detail:n,onReload:l})]})},$a="_userinfo_1ieid_1",Ta="_item_1ieid_8",Ia="_title_1ieid_12",Ra="_avatar_1ieid_17",Ma="_avatar-url_1ieid_21",Wa="_desc_1ieid_27",Pa="_upload_1ieid_33",Ya="_signature_1ieid_36";var T={userinfo:$a,item:Ta,title:Ia,avatar:Ra,avatarUrl:Ma,desc:Wa,upload:Pa,signature:Ya};const ja=()=>{const a=K(),[u,r]=s.exports.useState({}),[i,o]=s.exports.useState(""),[n,_]=s.exports.useState(""),l=localStorage.getItem("token");s.exports.useEffect(()=>{f()},[]);const f=async()=>{const{data:d}=await U("/api/user/get_userinfo");r(d),o(ye(d.avatar)),_(d.signature)},m=d=>{if(d&&d.file.size>200*1024){y.show("\u4E0A\u4F20\u5934\u50CF\u4E0D\u5F97\u8D85\u8FC7 200 KB\uFF01\uFF01");return}let x=new FormData;x.append("file",d.file),R({method:"post",url:`${Ee}/upload`,data:x,headers:{"Content-Type":"multipart/form-data",Authorization:l}}).then(w=>{o(ye(w.data))})},E=async()=>{await H("/api/user/edit_userinfo",{signature:n,avatar:i}),y.show("\u4FEE\u6539\u6210\u529F"),a(-1)};return t(Q,{children:[e(ae,{title:"\u7528\u6237\u4FE1\u606F"}),t("div",{className:T.userinfo,children:[e("h1",{children:"\u4E2A\u4EBA\u8D44\u6599"}),t("div",{className:T.item,children:[e("div",{className:T.title,children:"\u5934\u50CF"}),t("div",{className:T.avatar,children:[e("img",{className:T.avatarUrl,src:i,alt:""}),t("div",{className:T.desc,children:[e("span",{children:"\u652F\u6301 jpg\u3001png\u3001jpeg \u683C\u5F0F\u5927\u5C0F 200KB \u4EE5\u5185\u7684\u56FE\u7247"}),e(Me,{className:T.filePicker,onChange:m,accept:"image/*",children:e(ee,{className:T.upload,theme:"primary",size:"xs",children:"\u70B9\u51FB\u4E0A\u4F20"})})]})]})]}),t("div",{className:T.item,children:[e("div",{className:T.title,children:"\u4E2A\u6027\u7B7E\u540D"}),e("div",{className:T.signature,children:e(M,{clearable:!0,type:"text",value:n,placeholder:"\u8BF7\u8F93\u5165\u4E2A\u6027\u7B7E\u540D",onChange:d=>_(d)})})]}),e(ee,{onClick:E,style:{marginTop:50},block:!0,theme:"primary",children:"\u4FDD\u5B58"})]})]})},za="_account_k3p1j_1",La="_form_k3p1j_4",qa="_btn_k3p1j_9";var _e={account:za,form:La,btn:qa};const Ua=a=>{const{getFieldProps:u,getFieldError:r}=a.form,i=()=>{a.form.validateFields(async(o,n)=>{if(!o){if(console.log(n),n.newpass!=n.newpass2){y.show("\u65B0\u5BC6\u7801\u8F93\u5165\u4E0D\u4E00\u81F4");return}await H("/api/user/modify_pass",{old_password:n.oldpass,new_password:n.newpass,new_password2:n.newpass2}),y.show("\u4FEE\u6539\u6210\u529F")}})};return t(Q,{children:[e(ae,{title:"\u91CD\u5236\u5BC6\u7801"}),t("div",{className:_e.account,children:[t("div",{className:_e.form,children:[e($,{title:"\u539F\u5BC6\u7801",children:e(M,J({clearable:!0,type:"text",placeholder:"\u8BF7\u8F93\u5165\u539F\u5BC6\u7801"},u("oldpass",{rules:[{required:!0}]})))}),e($,{title:"\u65B0\u5BC6\u7801",children:e(M,J({clearable:!0,type:"text",placeholder:"\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801"},u("newpass",{rules:[{required:!0}]})))}),e($,{title:"\u786E\u8BA4\u5BC6\u7801",children:e(M,J({clearable:!0,type:"text",placeholder:"\u8BF7\u518D\u6B64\u8F93\u5165\u65B0\u5BC6\u7801\u786E\u8BA4"},u("newpass2",{rules:[{required:!0}]})))})]}),e(ee,{className:_e.btn,block:!0,theme:"primary",onClick:i,children:"\u63D0\u4EA4"})]})]})};var Ha=We()(Ua);const Oa="_about_1urnl_1";var Ka={about:Oa};const Xa=()=>t(Q,{children:[e(ae,{title:"\u5173\u4E8E\u6211\u4EEC"}),t("div",{className:Ka.about,children:[e("h2",{children:"\u5173\u4E8E\u9879\u76EE"}),e("article",{children:"\u8FD9\u4E2A\u9879\u76EE\u7684\u521D\u8877\uFF0C\u662F\u60F3\u8BA9\u4ECE\u4E8B\u524D\u7AEF\u5F00\u53D1\u7684\u540C\u5B66\uFF0C\u8FDB\u5165\u5168\u6808\u5F00\u53D1\u7684\u9886\u57DF\u3002\u5F53\u7136\uFF0C\u4E0D\u80FD\u8BF4\u5B66\u5B8C\u672C\u6559\u7A0B\u4F60\u5C31\u80FD\u80DC\u4EFB\u4EFB\u4F55\u5168\u6808\u5F00\u53D1\u3002\u4F46\u81F3\u5C11\uFF0C\u4F60\u5DF2\u7ECF\u53EF\u4EE5\u4ECE\u8BBE\u8BA1\u6570\u636E\u5E93\u8868\u5F00\u59CB\uFF0C\u628A\u81EA\u5DF1\u7684\u4E00\u4E2A\u60F3\u6CD5\u8F6C\u5316\u6210\u5B9E\u9645\u53EF\u89C1\u7684\u9879\u76EE\u3002"}),e("h2",{children:"\u5173\u4E8E\u4F5C\u8005"}),e("article",{children:"\u4ECE 2015 \u5E74\u5B9E\u4E60\u5F00\u59CB\u81F3\u4ECA\uFF0C\u6709 6 \u5E74\u524D\u7AEF\u5F00\u53D1\u7ECF\u9A8C\u3002\u867D\u7136\u6CA1\u6709\u5728\u5927\u5382\u5446\u8FC7\uFF0C\u4F46\u662F\u6B63\u56E0\u5982\u6B64\uFF0C\u6211\u6DF1\u77E5\u594B\u6218\u5728\u4E2D\u5C0F\u5382\u7684\u524D\u7AEF\u5F00\u53D1\u5728\u4ECE\u4E1A 1 \u5230 3 \u5E74\u540E\uFF0C\u4F1A\u9047\u5230\u4EC0\u4E48\u74F6\u9888\uFF0C\u5C0F\u518C\u4E2D\u4E5F\u8BE6\u7EC6\u7684\u63CF\u8FF0\u4E86\u600E\u6837\u4ECE\u521D\u7EA7\u5230\u4E2D\u7EA7\u7684\u8FDB\u9636\u4E4B\u8DEF\u3002"}),e("h2",{children:"\u5173\u4E8E\u5C0F\u518C"}),e("article",{children:"\u8FD9\u662F\u4E00\u672C\u5168\u6808\u5C0F\u518C\uFF0C\u670D\u52A1\u7AEF\u91C7\u7528 Node \u4E0A\u5C42\u67B6\u6784 Egg.js\uFF0C\u524D\u7AEF\u91C7\u7528 React \u6846\u67B6 + Zarm \u79FB\u52A8\u7AEF\u7EC4\u4EF6\u5E93\u3002\u672C\u5C0F\u518C\u81F4\u529B\u4E8E\u8BA9\u540C\u5B66\u4EEC\u5B66\u4F1A\u670D\u52A1\u7AEF\u7684\u5F00\u53D1\u6D41\u7A0B\uFF0C\u4ECE\u8BBE\u8BA1\u6570\u636E\u5E93\u5230\u63A5\u53E3\u7684\u7F16\u5199\uFF0C\u524D\u7AEF\u7684\u63A5\u53E3\u6570\u636E\u5BF9\u63A5\u548C\u9875\u9762\u5236\u4F5C\uFF0C\u518D\u5230\u7EBF\u4E0A\u73AF\u5883\u7684\u90E8\u7F72\u3002\u7531\u4E8E\u672C\u4EBA\u7528\u7684\u662F Mac\uFF0C\u4E3A\u4E86\u7167\u987E\u5230 Windows \u7CFB\u7EDF\u7684\u540C\u5B66\uFF0C\u5168\u7A0B\u5173\u952E\u6B65\u9AA4\u90FD\u4F1A\u6709 Windows \u90E8\u5206\u7684\u8BB2\u89E3\u3002"})]})]}),Va=[{path:"/",component:Tt},{path:"/data",component:ea},{path:"/user",component:ua},{path:"/login",component:ha},{path:"/detail",component:Sa},{path:"/account",component:Ha},{path:"/about",component:Xa},{path:"/userinfo",component:ja}];var Za={};const be=({showNav:a})=>{const[u,r]=s.exports.useState("/"),i=K(),o=n=>{r(n),i(n)};return t(se,{visible:a,className:Za.tab,activeKey:u,onChange:o,children:[e(se.Item,{itemKey:"/",title:"\u8D26\u5355",icon:e(N,{type:"zhangdan"})}),e(se.Item,{itemKey:"/data",title:"\u7EDF\u8BA1",icon:e(N,{type:"tongji"})}),e(se.Item,{itemKey:"/user",title:"\u6211\u7684",icon:e(N,{type:"wode"})})]})};be.propTypes={showNav:O.bool};function Ga(){const a=xe(),{pathname:u}=a,r=["/","/data","/user"],[i,o]=s.exports.useState(!1);return s.exports.useEffect(()=>{o(r.includes(u))},[u]),t(Q,{children:[e(Pe,{primaryColor:"#007fff",locale:Ye,children:e(je,{children:Va.map(n=>e(ze,{exact:!0,path:n.path,element:e(n.component,{})},n.path))})}),e(be,{showNav:i})]})}Le.render(e(qe.StrictMode,{children:e(Ue,{children:e(Ga,{})})}),document.getElementById("root"));
