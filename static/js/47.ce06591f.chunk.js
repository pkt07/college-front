(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[47],{720:function(e,t,n){},848:function(e,t,n){"use strict";n.r(t);var o=n(154),r=n(155),a=n(157),c=n(156),s=n(158),i=n(2),u=n.n(i),p=n(581),l=(n(720),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(a.a)(this,Object(c.a)(t).call(this,e))).state={columns:[{field:"amount",label:"Amount",sort:"asc"},{field:"purposeName",label:"Purpose Name",sort:"asc"},{field:"description",label:"Description",sort:"asc"},{field:"createdAt",label:"Date",sort:"asc"}],rows:[]},n.getMoney=function(){fetch("https://api.cedu.in/V2/api/moneyList",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){var t=[];console.log(e),e.response.forEach((function(e){return t.push({purposeName:e.purposeName,amount:e.amount,description:e.description,createdAt:e.createdAt})})),n.setState({rows:t})})).catch((function(e){return console.error(e)}))},n}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.getMoney()}},{key:"render",value:function(){return u.a.createElement(p.d,{striped:!0,bordered:!0,hover:!0,order:["updateAt","asc"],data:{columns:this.state.columns,rows:this.state.rows}})}}]),t}(i.Component));t.default=l}}]);
//# sourceMappingURL=47.ce06591f.chunk.js.map