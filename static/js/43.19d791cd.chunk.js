(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[43],{664:function(e,t,a){},836:function(e,t,a){"use strict";a.r(t);var n=a(154),o=a(155),r=a(157),s=a(156),c=a(158),i=a(2),l=a.n(i),d=a(581),u=(a(664),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(s.a)(t).call(this,e))).state={columns:[{field:"enrollmentId",label:"S.No",sort:"asc"},{field:"name",label:"Name",sort:"asc"},{field:"fatherName",label:"Father Name",sort:"asc"},{field:"courseName",label:"Course Name",sort:"asc"},{field:"motherName",label:"Mother Name",sort:"asc"},{field:"address",label:"Address",sort:"asc"},{field:"phone",label:"Phone",sort:"asc"},{field:"minor",label:"Minor",sort:"asc"},{field:"disable",label:"Disable",sort:"asc"},{field:"sex",label:"Sex",sort:"asc"},{field:"category",label:"Category",sort:"asc"},{field:"edit",label:"Edit",sort:"asc"},{field:"delete",label:"Delete"}],rows:[]},a.getStudent=function(){fetch("https://api.cedu.in/V2/api/getStudent",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){var t=[];console.log(e),e.response.forEach((function(e){return t.push({id:e._id,enrollmentId:e.enrollment_id,name:e.name,fatherName:e.fatherName,phone:e.phone,courseName:e.courseName,motherName:e.motherName,address:e.address,sex:e.sex,minor:e.minor,category:e.category,disable:e.disable,delete:l.a.createElement(d.c,{onClick:function(){return a.deleteStudent(e._id)}},l.a.createElement("i",{className:"fa fa-trash"})),edit:l.a.createElement(d.c,{onClick:function(){return a.editStudent(e._id)}},l.a.createElement("i",{className:"fa fa-edit"}))})})),a.setState({rows:t})})).catch((function(e){return console.error(e)}))},a.deleteStudent=function(e){fetch("https://api.cedu.in/V2/api/deleteStudent",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({_id:e})}).then((function(e){return e.json()})).then((function(e){200==e.response_code&&a.getStudent()})).catch((function(e){return console.error(e)}))},a}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getStudent()}},{key:"render",value:function(){return l.a.createElement(d.d,{className:"myTable",striped:!0,bordered:!0,hover:!0,order:["courseName","asc"],data:{columns:this.state.columns,rows:this.state.rows}})}}]),t}(i.Component));t.default=u}}]);
//# sourceMappingURL=43.19d791cd.chunk.js.map