(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[46],{719:function(e,t,a){},846:function(e,t,a){"use strict";a.r(t);var n=a(154),o=a(155),r=a(157),s=a(156),c=a(158),i=a(2),u=a.n(i),l=a(581),f=(a(719),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(s.a)(t).call(this,e))).state={columns:[{field:"name",label:"Course Name",sort:"asc"},{field:"fees",label:"Fees",sort:"asc"},{field:"duration",label:"Duration",sort:"asc"},{field:"availableSeat",label:"Available Seat",sort:"asc"}],rows:[]},a.getMoney=function(){fetch("https://api.cedu.in/V2/api/getCourse",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){var t=[];console.log(e),e.response.forEach((function(e){return t.push({name:e.name,fees:e.fees,availableSeat:e.availableSeat,duration:e.duration})})),a.setState({rows:t})})).catch((function(e){return console.error(e)}))},a}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getMoney()}},{key:"render",value:function(){return u.a.createElement(l.d,{striped:!0,bordered:!0,hover:!0,order:["updateAt","asc"],data:{columns:this.state.columns,rows:this.state.rows}})}}]),t}(i.Component));t.default=f}}]);
//# sourceMappingURL=46.e97a81e8.chunk.js.map