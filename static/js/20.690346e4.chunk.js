(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[20],{507:function(e,a,t){"use strict";var n=t(18),l=t(50),r=t(2),o=t.n(r),c=t(61),s=t.n(c),i=t(499),u=t.n(i),m=t(500),d=s.a.oneOfType([s.a.number,s.a.string]),p={tag:m.q,noGutters:s.a.bool,className:s.a.string,cssModule:s.a.object,form:s.a.bool,xs:d,sm:d,md:d,lg:d,xl:d},f={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e){var a=e.className,t=e.cssModule,r=e.noGutters,c=e.tag,s=e.form,i=e.widths,d=Object(l.a)(e,["className","cssModule","noGutters","tag","form","widths"]),p=[];i.forEach((function(a,t){var n=e[a];if(delete d[a],n){var l=!t;p.push(l?"row-cols-"+n:"row-cols-"+a+"-"+n)}}));var f=Object(m.m)(u()(a,r?"no-gutters":null,s?"form-row":"row",p),t);return o.a.createElement(c,Object(n.a)({},d,{className:f}))};g.propTypes=p,g.defaultProps=f,a.a=g},508:function(e,a,t){"use strict";var n=t(18),l=t(50),r=t(2),o=t.n(r),c=t(61),s=t.n(c),i=t(499),u=t.n(i),m=t(500),d=s.a.oneOfType([s.a.number,s.a.string]),p=s.a.oneOfType([s.a.bool,s.a.number,s.a.string,s.a.shape({size:s.a.oneOfType([s.a.bool,s.a.number,s.a.string]),order:d,offset:d})]),f={tag:m.q,xs:p,sm:p,md:p,lg:p,xl:p,className:s.a.string,cssModule:s.a.object,widths:s.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},E=function(e){var a=e.className,t=e.cssModule,r=e.widths,c=e.tag,s=Object(l.a)(e,["className","cssModule","widths","tag"]),i=[];r.forEach((function(a,n){var l=e[a];if(delete s[a],l||""===l){var r=!n;if(Object(m.k)(l)){var o,c=r?"-":"-"+a+"-",d=b(r,a,l.size);i.push(Object(m.m)(u()(((o={})[d]=l.size||""===l.size,o["order"+c+l.order]=l.order||0===l.order,o["offset"+c+l.offset]=l.offset||0===l.offset,o)),t))}else{var p=b(r,a,l);i.push(p)}}})),i.length||i.push("col");var d=Object(m.m)(u()(a,i),t);return o.a.createElement(c,Object(n.a)({},s,{className:d}))};E.propTypes=f,E.defaultProps=g,a.a=E},510:function(e,a,t){"use strict";var n=t(18),l=t(50),r=t(2),o=t.n(r),c=t(61),s=t.n(c),i=t(499),u=t.n(i),m=t(500),d={tag:m.q,inverse:s.a.bool,color:s.a.string,body:s.a.bool,outline:s.a.bool,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},p=function(e){var a=e.className,t=e.cssModule,r=e.color,c=e.body,s=e.inverse,i=e.outline,d=e.tag,p=e.innerRef,f=Object(l.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),g=Object(m.m)(u()(a,"card",!!s&&"text-white",!!c&&"card-body",!!r&&(i?"border":"bg")+"-"+r),t);return o.a.createElement(d,Object(n.a)({},f,{className:g,ref:p}))};p.propTypes=d,p.defaultProps={tag:"div"},a.a=p},511:function(e,a,t){"use strict";var n=t(18),l=t(50),r=t(2),o=t.n(r),c=t(61),s=t.n(c),i=t(499),u=t.n(i),m=t(500),d={tag:m.q,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},p=function(e){var a=e.className,t=e.cssModule,r=e.innerRef,c=e.tag,s=Object(l.a)(e,["className","cssModule","innerRef","tag"]),i=Object(m.m)(u()(a,"card-body"),t);return o.a.createElement(c,Object(n.a)({},s,{className:i,ref:r}))};p.propTypes=d,p.defaultProps={tag:"div"},a.a=p},512:function(e,a,t){"use strict";var n=t(18),l=t(50),r=t(2),o=t.n(r),c=t(61),s=t.n(c),i=t(499),u=t.n(i),m=t(500),d={tag:m.q,className:s.a.string,cssModule:s.a.object},p=function(e){var a=e.className,t=e.cssModule,r=e.tag,c=Object(l.a)(e,["className","cssModule","tag"]),s=Object(m.m)(u()(a,"card-header"),t);return o.a.createElement(r,Object(n.a)({},c,{className:s}))};p.propTypes=d,p.defaultProps={tag:"div"},a.a=p},527:function(e,a,t){"use strict";function n(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function l(e){this.setState(function(a){var t=this.constructor.getDerivedStateFromProps(e,a);return null!==t&&void 0!==t?t:null}.bind(this))}function r(e,a){try{var t=this.props,n=this.state;this.props=e,this.state=a,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(t,n)}finally{this.props=t,this.state=n}}function o(e){var a=e.prototype;if(!a||!a.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof e.getDerivedStateFromProps&&"function"!==typeof a.getSnapshotBeforeUpdate)return e;var t=null,o=null,c=null;if("function"===typeof a.componentWillMount?t="componentWillMount":"function"===typeof a.UNSAFE_componentWillMount&&(t="UNSAFE_componentWillMount"),"function"===typeof a.componentWillReceiveProps?o="componentWillReceiveProps":"function"===typeof a.UNSAFE_componentWillReceiveProps&&(o="UNSAFE_componentWillReceiveProps"),"function"===typeof a.componentWillUpdate?c="componentWillUpdate":"function"===typeof a.UNSAFE_componentWillUpdate&&(c="UNSAFE_componentWillUpdate"),null!==t||null!==o||null!==c){var s=e.displayName||e.name,i="function"===typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+s+" uses "+i+" but also contains the following legacy lifecycles:"+(null!==t?"\n  "+t:"")+(null!==o?"\n  "+o:"")+(null!==c?"\n  "+c:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof e.getDerivedStateFromProps&&(a.componentWillMount=n,a.componentWillReceiveProps=l),"function"===typeof a.getSnapshotBeforeUpdate){if("function"!==typeof a.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");a.componentWillUpdate=r;var u=a.componentDidUpdate;a.componentDidUpdate=function(e,a,t){var n=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:t;u.call(this,e,a,n)}}return e}t.r(a),t.d(a,"polyfill",(function(){return o})),n.__suppressDeprecationWarning=!0,l.__suppressDeprecationWarning=!0,r.__suppressDeprecationWarning=!0},528:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(2),l=t.n(n).a.createContext({})},584:function(e,a,t){"use strict";var n=t(18),l=t(38),r=t(2),o=t.n(r),c=t(527),s=t(61),i=t.n(s),u=t(499),m=t.n(u),d=t(528),p=t(500),f={tag:p.q,activeTab:i.a.any,className:i.a.string,cssModule:i.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={activeTab:t.props.activeTab},t}return Object(l.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},a.prototype.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.tag,r=Object(p.n)(this.props,Object.keys(f)),c=Object(p.m)(m()("tab-content",a),t);return o.a.createElement(d.a.Provider,{value:{activeTabId:this.state.activeTab}},o.a.createElement(l,Object(n.a)({},r,{className:c})))},a}(r.Component);Object(c.polyfill)(g),a.a=g,g.propTypes=f,g.defaultProps={tag:"div"}},585:function(e,a,t){"use strict";t.d(a,"a",(function(){return f}));var n=t(18),l=t(50),r=t(2),o=t.n(r),c=t(61),s=t.n(c),i=t(499),u=t.n(i),m=t(528),d=t(500),p={tag:d.q,className:s.a.string,cssModule:s.a.object,tabId:s.a.any};function f(e){var a=e.className,t=e.cssModule,r=e.tabId,c=e.tag,s=Object(l.a)(e,["className","cssModule","tabId","tag"]),i=function(e){return Object(d.m)(u()("tab-pane",a,{active:r===e}),t)};return o.a.createElement(m.a.Consumer,null,(function(e){var a=e.activeTabId;return o.a.createElement(c,Object(n.a)({},s,{className:i(a)}))}))}f.propTypes=p,f.defaultProps={tag:"div"}},640:function(e,a,t){"use strict";var n=t(18),l=t(50),r=t(2),o=t.n(r),c=t(61),s=t.n(c),i=t(499),u=t.n(i),m=t(500),d={tag:m.q,flush:s.a.bool,className:s.a.string,cssModule:s.a.object,horizontal:s.a.oneOfType([s.a.bool,s.a.string])},p=function(e){var a=e.className,t=e.cssModule,r=e.tag,c=e.flush,s=e.horizontal,i=Object(l.a)(e,["className","cssModule","tag","flush","horizontal"]),d=Object(m.m)(u()(a,"list-group",c?"list-group-flush":function(e){return!1!==e&&(!0===e||"xs"===e?"list-group-horizontal":"list-group-horizontal-"+e)}(s)),t);return o.a.createElement(r,Object(n.a)({},i,{className:d}))};p.propTypes=d,p.defaultProps={tag:"ul",horizontal:!1},a.a=p},641:function(e,a,t){"use strict";var n=t(18),l=t(50),r=t(2),o=t.n(r),c=t(61),s=t.n(c),i=t(499),u=t.n(i),m=t(500),d={tag:m.q,active:s.a.bool,disabled:s.a.bool,color:s.a.string,action:s.a.bool,className:s.a.any,cssModule:s.a.object},p=function(e){e.preventDefault()},f=function(e){var a=e.className,t=e.cssModule,r=e.tag,c=e.active,s=e.disabled,i=e.action,d=e.color,f=Object(l.a)(e,["className","cssModule","tag","active","disabled","action","color"]),g=Object(m.m)(u()(a,!!c&&"active",!!s&&"disabled",!!i&&"list-group-item-action",!!d&&"list-group-item-"+d,"list-group-item"),t);return s&&(f.onClick=p),o.a.createElement(r,Object(n.a)({},f,{className:g}))};f.propTypes=d,f.defaultProps={tag:"li"},a.a=f},868:function(e,a,t){"use strict";t.r(a);var n=t(154),l=t(155),r=t(157),o=t(156),c=t(159),s=t(158),i=t(2),u=t.n(i),m=t(507),d=t(508),p=t(510),f=t(512),g=t(511),b=t(640),E=t(641),v=t(826),h=t(18),j=t(50),y=t(61),N=t.n(y),O=t(499),M=t.n(O),T=t(500),x={tag:T.q,className:N.a.any,cssModule:N.a.object},P=function(e){var a=e.className,t=e.cssModule,n=e.tag,l=Object(j.a)(e,["className","cssModule","tag"]),r=Object(T.m)(M()(a,"list-group-item-heading"),t);return u.a.createElement(n,Object(h.a)({},l,{className:r}))};P.propTypes=x,P.defaultProps={tag:"h5"};var q=P,w={tag:T.q,className:N.a.any,cssModule:N.a.object},D=function(e){var a=e.className,t=e.cssModule,n=e.tag,l=Object(j.a)(e,["className","cssModule","tag"]),r=Object(T.m)(M()(a,"list-group-item-text"),t);return u.a.createElement(n,Object(h.a)({},l,{className:r}))};D.propTypes=w,D.defaultProps={tag:"p"};var S=D,U=t(584),C=t(585),_=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(r.a)(this,Object(o.a)(a).call(this,e))).toggle=t.toggle.bind(Object(c.a)(t)),t.state={activeTab:1},t}return Object(s.a)(a,e),Object(l.a)(a,[{key:"toggle",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(m.a,null,u.a.createElement(d.a,{sm:"12",xl:"6"},u.a.createElement(p.a,null,u.a.createElement(f.a,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"List Group"),u.a.createElement("div",{className:"card-header-actions"},u.a.createElement("a",{href:"https://reactstrap.github.io/components/listgroup/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},u.a.createElement("small",{className:"text-muted"},"docs")))),u.a.createElement(g.a,null,u.a.createElement(b.a,null,u.a.createElement(E.a,null,"Cras justo odio"),u.a.createElement(E.a,null,"Dapibus ac facilisis in"),u.a.createElement(E.a,null,"Morbi leo risus"),u.a.createElement(E.a,null,"Porta ac consectetur ac"),u.a.createElement(E.a,null,"Vestibulum at eros"))))),u.a.createElement(d.a,{sm:"12",xl:"6"},u.a.createElement(p.a,null,u.a.createElement(f.a,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"List Group"),u.a.createElement("small",null," tags")),u.a.createElement(g.a,null,u.a.createElement(b.a,null,u.a.createElement(E.a,{className:"justify-content-between"},"Cras justo odio ",u.a.createElement(v.a,{className:"float-right",pill:!0},"14")),u.a.createElement(E.a,{className:"justify-content-between"},"Dapibus ac facilisis in ",u.a.createElement(v.a,{className:"float-right",pill:!0},"2")),u.a.createElement(E.a,{className:"justify-content-between"},"Morbi leo risus ",u.a.createElement(v.a,{className:"float-right",pill:!0,color:"warning"},"1"))))))),u.a.createElement(m.a,null,u.a.createElement(d.a,{sm:"12",xl:"6"},u.a.createElement(p.a,null,u.a.createElement(f.a,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"List Group"),u.a.createElement("small",null," disabled items")),u.a.createElement(g.a,null,u.a.createElement(b.a,null,u.a.createElement(E.a,{disabled:!0,tag:"a",href:"#"},"Cras justo odio"),u.a.createElement(E.a,{tag:"a",href:"#"},"Dapibus ac facilisis in"),u.a.createElement(E.a,{disabled:!0,tag:"a",href:"#"},"Morbi leo risus"),u.a.createElement(E.a,{tag:"a",href:"#"},"Porta ac consectetur ac"),u.a.createElement(E.a,{tag:"a",href:"#"},"Vestibulum at eros"))))),u.a.createElement(d.a,{sm:"12",xl:"6"},u.a.createElement(p.a,null,u.a.createElement(f.a,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"List Group"),u.a.createElement("small",null," contextual classes")),u.a.createElement(g.a,null,u.a.createElement(b.a,null,u.a.createElement(E.a,{action:!0,color:"success"},"Cras justo odio"),u.a.createElement(E.a,{action:!0,color:"info"},"Dapibus ac facilisis in"),u.a.createElement(E.a,{action:!0,color:"warning"},"Morbi leo risus"),u.a.createElement(E.a,{action:!0,color:"danger"},"Porta ac consectetur ac")))))),u.a.createElement(m.a,null,u.a.createElement(d.a,{sm:"12",xl:"6"},u.a.createElement(p.a,null,u.a.createElement(f.a,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"List Group"),u.a.createElement("small",null," anchors")),u.a.createElement(g.a,null,u.a.createElement("p",null,"Be sure to ",u.a.createElement("strong",null,"not use the standard ",u.a.createElement("code",null,".btn")," classes here"),"."),u.a.createElement(b.a,null,u.a.createElement(E.a,{active:!0,tag:"a",href:"#",action:!0},"Cras justo odio"),u.a.createElement(E.a,{tag:"a",href:"#",action:!0},"Dapibus ac facilisis in"),u.a.createElement(E.a,{tag:"a",href:"#",action:!0},"Morbi leo risus"),u.a.createElement(E.a,{tag:"a",href:"#",action:!0},"Porta ac consectetur ac"),u.a.createElement(E.a,{disabled:!0,tag:"a",href:"#",action:!0},"Vestibulum at eros")),u.a.createElement("p",null)))),u.a.createElement(d.a,{sm:"12",xl:"6"},u.a.createElement(p.a,null,u.a.createElement(f.a,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"List Group"),u.a.createElement("small",null," buttons")),u.a.createElement(g.a,null,u.a.createElement(b.a,null,u.a.createElement(E.a,{active:!0,tag:"button",action:!0},"Cras justo odio"),u.a.createElement(E.a,{tag:"button",action:!0},"Dapibus ac facilisis in"),u.a.createElement(E.a,{tag:"button",action:!0},"Morbi leo risus"),u.a.createElement(E.a,{tag:"button",action:!0},"Porta ac consectetur ac"),u.a.createElement(E.a,{disabled:!0,tag:"button",action:!0},"Vestibulum at eros")))))),u.a.createElement(m.a,null,u.a.createElement(d.a,{sm:"12",xl:"6"},u.a.createElement(p.a,null,u.a.createElement(f.a,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"List Group"),u.a.createElement("small",null," custom content")),u.a.createElement(g.a,null,u.a.createElement(b.a,null,u.a.createElement(E.a,{active:!0,action:!0},u.a.createElement(q,null,"List group item heading"),u.a.createElement(S,null,"Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")),u.a.createElement(E.a,{action:!0},u.a.createElement(q,null,"List group item heading"),u.a.createElement(S,null,"Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")),u.a.createElement(E.a,{action:!0},u.a.createElement(q,null,"List group item heading"),u.a.createElement(S,null,"Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit."))))))),u.a.createElement(m.a,null,u.a.createElement(d.a,null,u.a.createElement(p.a,null,u.a.createElement(f.a,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"List Group")," ",u.a.createElement("small",null,"with TabPanes"),u.a.createElement("div",{className:"card-header-actions"},u.a.createElement(v.a,null,"NEW"))),u.a.createElement(g.a,null,u.a.createElement(m.a,null,u.a.createElement(d.a,{xs:"4"},u.a.createElement(b.a,{id:"list-tab",role:"tablist"},u.a.createElement(E.a,{onClick:function(){return e.toggle(0)},action:!0,active:0===this.state.activeTab},"Home"),u.a.createElement(E.a,{onClick:function(){return e.toggle(1)},action:!0,active:1===this.state.activeTab},"Profile"),u.a.createElement(E.a,{onClick:function(){return e.toggle(2)},action:!0,active:2===this.state.activeTab},"Messages"),u.a.createElement(E.a,{onClick:function(){return e.toggle(3)},action:!0,active:3===this.state.activeTab},"Settings"))),u.a.createElement(d.a,{xs:"8"},u.a.createElement(U.a,{activeTab:this.state.activeTab},u.a.createElement(C.a,{tabId:0},u.a.createElement("p",null,"Velit aute mollit ipsum ad dolor consectetur nulla officia culpa adipisicing exercitation fugiat tempor. Voluptate deserunt sit sunt nisi aliqua fugiat proident ea ut. Mollit voluptate reprehenderit occaecat nisi ad non minim tempor sunt voluptate consectetur exercitation id ut nulla. Ea et fugiat aliquip nostrud sunt incididunt consectetur culpa aliquip eiusmod dolor. Anim ad Lorem aliqua in cupidatat nisi enim eu nostrud do aliquip veniam minim.")),u.a.createElement(C.a,{tabId:1},u.a.createElement("p",null,"Cupidatat quis ad sint excepteur laborum in esse qui. Et excepteur consectetur ex nisi eu do cillum ad laborum. Mollit et eu officia dolore sunt Lorem culpa qui commodo velit ex amet id ex. Officia anim incididunt laboris deserunt anim aute dolor incididunt veniam aute dolore do exercitation. Dolor nisi culpa ex ad irure in elit eu dolore. Ad laboris ipsum reprehenderit irure non commodo enim culpa commodo veniam incididunt veniam ad.")),u.a.createElement(C.a,{tabId:2},u.a.createElement("p",null,"Ut ut do pariatur aliquip aliqua aliquip exercitation do nostrud commodo reprehenderit aute ipsum voluptate. Irure Lorem et laboris nostrud amet cupidatat cupidatat anim do ut velit mollit consequat enim tempor. Consectetur est minim nostrud nostrud consectetur irure labore voluptate irure. Ipsum id Lorem sit sint voluptate est pariatur eu ad cupidatat et deserunt culpa sit eiusmod deserunt. Consectetur et fugiat anim do eiusmod aliquip nulla laborum elit adipisicing pariatur cillum.")),u.a.createElement(C.a,{tabId:3},u.a.createElement("p",null,"Irure enim occaecat labore sit qui aliquip reprehenderit amet velit. Deserunt ullamco ex elit nostrud ut dolore nisi officia magna sit occaecat laboris sunt dolor. Nisi eu minim cillum occaecat aute est cupidatat aliqua labore aute occaecat ea aliquip sunt amet. Aute mollit dolor ut exercitation irure commodo non amet consectetur quis amet culpa. Quis ullamco nisi amet qui aute irure eu. Magna labore dolor quis ex labore id nostrud deserunt dolor eiusmod eu pariatur culpa mollit in irure."))))))))))}}]),a}(i.Component);a.default=_}}]);
//# sourceMappingURL=20.690346e4.chunk.js.map