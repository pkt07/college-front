(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[55],{853:function(e,t,a){"use strict";a.r(t);var n=a(154),l=a(155),r=a(157),o=a(156),s=a(159),c=a(158),i=a(2),p=a.n(i),m=a(507),u=a(508),d=a(510),h=a(512),y=a(511),E=a(543),g=a(597),f=a(598),v=a(529),C=a(509),T=a(561),b=a.n(T),N=(a(562),a(817)),j=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(o.a)(t).call(this,e))).moneyType=["Money Given","Money Taken"],a.purposeType=["Student","Other"],a.state={type:null,amount:"",description:"",enrollment_id:"",purposeName:"",pType:null,enrollType:[]},a.handleChange=a.handleChange.bind(Object(s.a)(a)),a.register=a.register.bind(Object(s.a)(a)),a.handleChangeType=a.handleChangeType.bind(Object(s.a)(a)),a.handleChangePType=a.handleChangePType.bind(Object(s.a)(a)),a.handleChangeEnroll=a.handleChangeEnroll.bind(Object(s.a)(a)),a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.fetchOptions()}},{key:"fetchOptions",value:function(){var e=this;fetch("https://api.cedu.in/V2/api/getStudentEnrollment",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){var a=t;e.setState({enrollType:a.response})}))}},{key:"handleChangePType",value:function(e){this.setState({pType:e.value})}},{key:"handleChangeType",value:function(e){this.setState({type:e.value})}},{key:"handleChangeEnroll",value:function(e){console.log("dsfsd",e.value),this.setState({enrollment_id:e.value})}},{key:"handleChange",value:function(e,t){"purposeName"==t&&this.setState({purposeName:e.target.value}),"description"==t&&this.setState({description:e.target.value}),"amount"==t&&this.setState({amount:e.target.value})}},{key:"register",value:function(e){var t=this;fetch("https://api.cedu.in/V2/api/addMoney",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({type:this.state.type,description:this.state.description,amount:Number(this.state.amount),enrollment_id:this.state.enrollment_id,purposeName:this.state.purposeName,studentName:this.state.studentName})}).then((function(e){return e.json()})).then((function(e){console.log(e),200==e.response_code?(alert("Expenditure Added successfully"),t.props.history.push("/Dashboard")):(console.log("this.state",t.state),alert("Server error !!!!!Please Try Again"))}))}},{key:"render",value:function(){var e=this,t=this.state.enrollType.map((function(e){return{value:e.enrollment_id,label:e.enrollment_id}}));return p.a.createElement("div",{className:"animated fadeIn"},p.a.createElement(m.a,null,p.a.createElement(u.a,{xs:"12"},p.a.createElement(d.a,null,p.a.createElement(h.a,null,p.a.createElement("i",{className:"fa fa-edit"}),"Money Lent Form"),p.a.createElement(y.a,null,p.a.createElement(E.a,{className:"form-horizontal"},p.a.createElement(m.a,null,p.a.createElement(u.a,{xs:"12",md:"6"},p.a.createElement(g.a,null,p.a.createElement(f.a,{htmlFor:"prependedInput"},"Money Type"),p.a.createElement("div",{className:"controls"},p.a.createElement(b.a,{options:this.moneyType,onChange:this.handleChangeType,value:this.state.type})))),p.a.createElement(u.a,{xs:"12",md:"6"},p.a.createElement(g.a,null,p.a.createElement(f.a,{htmlFor:"prependedInput"},"Purpose Type"),p.a.createElement("div",{className:"controls"},p.a.createElement(b.a,{options:this.purposeType,onChange:this.handleChangePType,value:this.state.pType}))))),"Student"===this.state.pType?p.a.createElement(m.a,null,p.a.createElement(u.a,{xs:"12",md:"12"},p.a.createElement(g.a,null,p.a.createElement(f.a,{htmlFor:"prependedInput"},"Student Info"),p.a.createElement("div",{className:"controls"},console.log(t),p.a.createElement(N.a,{name:"form-field-name",onChange:this.handleChangeEnroll,labelKey:"name",valueKey:"countryCode",options:t}))))):null,p.a.createElement(m.a,null,p.a.createElement(u.a,{xs:"12",md:"6"},p.a.createElement(g.a,null,p.a.createElement(f.a,{htmlFor:"prependedInput"},"Purpose Name"),p.a.createElement("div",{className:"controls"},p.a.createElement(v.a,{id:"appendedInput",size:"16",type:"text",onChange:function(t){e.handleChange(t,"purposeName")}})))),p.a.createElement(u.a,{xs:"12",md:"6"},p.a.createElement(g.a,null,p.a.createElement(f.a,{htmlFor:"prependedInput"},"Amount"),p.a.createElement("div",{className:"controls"},p.a.createElement(v.a,{id:"appendedInput",size:"16",type:"text",onChange:function(t){e.handleChange(t,"amount")}}))))),p.a.createElement(m.a,null,p.a.createElement(u.a,{xs:"12",md:"12"},p.a.createElement(g.a,null,p.a.createElement(f.a,{htmlFor:"prependedInput"},"Description"),p.a.createElement("div",{className:"controls"},p.a.createElement(v.a,{id:"appendedInput",size:"16",type:"textarea",onChange:function(t){e.handleChange(t,"description")}}))))),p.a.createElement("div",{className:"form-actions"},p.a.createElement(C.a,{type:"submit",color:"primary",onClick:this.register},"Save changes"),p.a.createElement(C.a,{color:"secondary"},"Cancel"))))))))}}]),t}(i.Component);t.default=j}}]);
//# sourceMappingURL=55.7cf1f591.chunk.js.map