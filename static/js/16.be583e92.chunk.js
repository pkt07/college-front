(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[16],{506:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(514);function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?Object(arguments[t]):{},o=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),o.forEach((function(t){Object(n.a)(e,t,a[t])}))}return e}},507:function(e,t,a){"use strict";var n=a(18),o=a(50),r=a(2),l=a.n(r),c=a(61),s=a.n(c),i=a(499),d=a.n(i),u=a(500),p=s.a.oneOfType([s.a.number,s.a.string]),m={tag:u.q,noGutters:s.a.bool,className:s.a.string,cssModule:s.a.object,form:s.a.bool,xs:p,sm:p,md:p,lg:p,xl:p},f={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e){var t=e.className,a=e.cssModule,r=e.noGutters,c=e.tag,s=e.form,i=e.widths,p=Object(o.a)(e,["className","cssModule","noGutters","tag","form","widths"]),m=[];i.forEach((function(t,a){var n=e[t];if(delete p[t],n){var o=!a;m.push(o?"row-cols-"+n:"row-cols-"+t+"-"+n)}}));var f=Object(u.m)(d()(t,r?"no-gutters":null,s?"form-row":"row",m),a);return l.a.createElement(c,Object(n.a)({},p,{className:f}))};b.propTypes=m,b.defaultProps=f,t.a=b},508:function(e,t,a){"use strict";var n=a(18),o=a(50),r=a(2),l=a.n(r),c=a(61),s=a.n(c),i=a(499),d=a.n(i),u=a(500),p=s.a.oneOfType([s.a.number,s.a.string]),m=s.a.oneOfType([s.a.bool,s.a.number,s.a.string,s.a.shape({size:s.a.oneOfType([s.a.bool,s.a.number,s.a.string]),order:p,offset:p})]),f={tag:u.q,xs:m,sm:m,md:m,lg:m,xl:m,className:s.a.string,cssModule:s.a.object,widths:s.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},h=function(e){var t=e.className,a=e.cssModule,r=e.widths,c=e.tag,s=Object(o.a)(e,["className","cssModule","widths","tag"]),i=[];r.forEach((function(t,n){var o=e[t];if(delete s[t],o||""===o){var r=!n;if(Object(u.k)(o)){var l,c=r?"-":"-"+t+"-",p=g(r,t,o.size);i.push(Object(u.m)(d()(((l={})[p]=o.size||""===o.size,l["order"+c+o.order]=o.order||0===o.order,l["offset"+c+o.offset]=o.offset||0===o.offset,l)),a))}else{var m=g(r,t,o);i.push(m)}}})),i.length||i.push("col");var p=Object(u.m)(d()(t,i),a);return l.a.createElement(c,Object(n.a)({},s,{className:p}))};h.propTypes=f,h.defaultProps=b,t.a=h},509:function(e,t,a){"use strict";var n=a(18),o=a(50),r=a(502),l=a(38),c=a(2),s=a.n(c),i=a(61),d=a.n(i),u=a(499),p=a.n(u),m=a(500),f={active:d.a.bool,"aria-label":d.a.string,block:d.a.bool,color:d.a.string,disabled:d.a.bool,outline:d.a.bool,tag:m.q,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),onClick:d.a.func,size:d.a.string,children:d.a.node,className:d.a.string,cssModule:d.a.object,close:d.a.bool},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(r.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],r=e.block,l=e.className,c=e.close,i=e.cssModule,d=e.color,u=e.outline,f=e.size,b=e.tag,g=e.innerRef,h=Object(o.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);c&&"undefined"===typeof h.children&&(h.children=s.a.createElement("span",{"aria-hidden":!0},"\xd7"));var E="btn"+(u?"-outline":"")+"-"+d,O=Object(m.m)(p()(l,{close:c},c||"btn",c||E,!!f&&"btn-"+f,!!r&&"btn-block",{active:t,disabled:this.props.disabled}),i);h.href&&"button"===b&&(b="a");var v=c?"Close":null;return s.a.createElement(b,Object(n.a)({type:"button"===b&&h.onClick?"button":void 0},h,{className:O,ref:g,onClick:this.onClick,"aria-label":a||v}))},t}(s.a.Component);b.propTypes=f,b.defaultProps={color:"secondary",tag:"button"},t.a=b},510:function(e,t,a){"use strict";var n=a(18),o=a(50),r=a(2),l=a.n(r),c=a(61),s=a.n(c),i=a(499),d=a.n(i),u=a(500),p={tag:u.q,inverse:s.a.bool,color:s.a.string,body:s.a.bool,outline:s.a.bool,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},m=function(e){var t=e.className,a=e.cssModule,r=e.color,c=e.body,s=e.inverse,i=e.outline,p=e.tag,m=e.innerRef,f=Object(o.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(u.m)(d()(t,"card",!!s&&"text-white",!!c&&"card-body",!!r&&(i?"border":"bg")+"-"+r),a);return l.a.createElement(p,Object(n.a)({},f,{className:b,ref:m}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},511:function(e,t,a){"use strict";var n=a(18),o=a(50),r=a(2),l=a.n(r),c=a(61),s=a.n(c),i=a(499),d=a.n(i),u=a(500),p={tag:u.q,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},m=function(e){var t=e.className,a=e.cssModule,r=e.innerRef,c=e.tag,s=Object(o.a)(e,["className","cssModule","innerRef","tag"]),i=Object(u.m)(d()(t,"card-body"),a);return l.a.createElement(c,Object(n.a)({},s,{className:i,ref:r}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},512:function(e,t,a){"use strict";var n=a(18),o=a(50),r=a(2),l=a.n(r),c=a(61),s=a.n(c),i=a(499),d=a.n(i),u=a(500),p={tag:u.q,className:s.a.string,cssModule:s.a.object},m=function(e){var t=e.className,a=e.cssModule,r=e.tag,c=Object(o.a)(e,["className","cssModule","tag"]),s=Object(u.m)(d()(t,"card-header"),a);return l.a.createElement(r,Object(n.a)({},c,{className:s}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},514:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))},522:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(523),o=a.n(n),r=a(518),l=a.n(r),c=a(104),s=a.n(c),i=a(519),d=a.n(i),u=a(2),p=a(520),m=a.n(p),f=a(517),b=a(524),g=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return t=e.call.apply(e,[this].concat(n))||this,d()(l()(t),"refHandler",(function(e){Object(b.b)(t.props.innerRef,e),Object(b.a)(t.props.setReferenceNode,e)})),t}s()(t,e);var a=t.prototype;return a.componentWillUnmount=function(){Object(b.b)(this.props.innerRef,null)},a.render=function(){return m()(Boolean(this.props.setReferenceNode),"`Reference` should not be used outside of a `Manager` component."),Object(b.c)(this.props.children)({ref:this.refHandler})},t}(u.Component);function h(e){return u.createElement(f.b.Consumer,null,(function(t){return u.createElement(g,o()({setReferenceNode:t},e))}))}},535:function(e,t,a){"use strict";var n=a(18),o=a(50),r=a(502),l=a(38),c=a(2),s=a.n(c),i=a(61),d=a.n(i),u=a(499),p=a.n(u),m=a(522),f=a(513),b=a(500),g=a(509),h={caret:d.a.bool,color:d.a.string,children:d.a.node,className:d.a.string,cssModule:d.a.object,disabled:d.a.bool,onClick:d.a.func,"aria-haspopup":d.a.bool,split:d.a.bool,tag:b.q,nav:d.a.bool},E=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(r.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled||this.context.disabled?e.preventDefault():(this.props.nav&&!this.props.tag&&e.preventDefault(),this.props.onClick&&this.props.onClick(e),this.context.toggle(e))},a.render=function(){var e,t=this,a=this.props,r=a.className,l=a.color,c=a.cssModule,i=a.caret,d=a.split,u=a.nav,f=a.tag,h=a.innerRef,E=Object(o.a)(a,["className","color","cssModule","caret","split","nav","tag","innerRef"]),O=E["aria-label"]||"Toggle Dropdown",v=Object(b.m)(p()(r,{"dropdown-toggle":i||d,"dropdown-toggle-split":d,"nav-link":u}),c),j=E.children||s.a.createElement("span",{className:"sr-only"},O);return u&&!f?(e="a",E.href="#"):f?e=f:(e=g.a,E.color=l,E.cssModule=c),this.context.inNavbar?s.a.createElement(e,Object(n.a)({},E,{className:v,onClick:this.onClick,"aria-expanded":this.context.isOpen,children:j})):s.a.createElement(m.a,{innerRef:h},(function(a){var o,r=a.ref;return s.a.createElement(e,Object(n.a)({},E,((o={})["string"===typeof e?"ref":"innerRef"]=r,o),{className:v,onClick:t.onClick,"aria-expanded":t.context.isOpen,children:j}))}))},t}(s.a.Component);E.propTypes=h,E.defaultProps={"aria-haspopup":!0,color:"secondary"},E.contextType=f.a,t.a=E},536:function(e,t,a){"use strict";var n=a(18),o=a(506),r=a(50),l=a(38),c=a(2),s=a.n(c),i=a(61),d=a.n(i),u=a(499),p=a.n(u),m=a(558),f=a(513),b=a(500),g={tag:b.q,children:d.a.node.isRequired,right:d.a.bool,flip:d.a.bool,modifiers:d.a.object,className:d.a.string,cssModule:d.a.object,persist:d.a.bool,positionFixed:d.a.bool},h={flip:{enabled:!1}},E={up:"top",left:"left",right:"right",down:"bottom"},O=function(e){function t(){return e.apply(this,arguments)||this}return Object(l.a)(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.className,l=t.cssModule,c=t.right,i=t.tag,d=t.flip,u=t.modifiers,f=t.persist,g=t.positionFixed,O=Object(r.a)(t,["className","cssModule","right","tag","flip","modifiers","persist","positionFixed"]),v=Object(b.m)(p()(a,"dropdown-menu",{"dropdown-menu-right":c,show:this.context.isOpen}),l),j=i;if(f||this.context.isOpen&&!this.context.inNavbar){var y=(E[this.context.direction]||"bottom")+"-"+(c?"end":"start"),w=d?u:Object(o.a)({},u,{},h),N=!!g;return s.a.createElement(m.a,{placement:y,modifiers:w,positionFixed:N},(function(t){var a=t.ref,o=t.style,r=t.placement;return s.a.createElement(j,Object(n.a)({tabIndex:"-1",role:"menu",ref:a,style:o},O,{"aria-hidden":!e.context.isOpen,className:v,"x-placement":r}))}))}return s.a.createElement(j,Object(n.a)({tabIndex:"-1",role:"menu"},O,{"aria-hidden":!this.context.isOpen,className:v,"x-placement":O.placement}))},t}(s.a.Component);O.propTypes=g,O.defaultProps={tag:"div",flip:!0},O.contextType=f.a,t.a=O},537:function(e,t,a){"use strict";var n=a(18),o=a(50),r=a(502),l=a(38),c=a(2),s=a.n(c),i=a(61),d=a.n(i),u=a(499),p=a.n(u),m=a(513),f=a(500),b={children:d.a.node,active:d.a.bool,disabled:d.a.bool,divider:d.a.bool,tag:f.q,header:d.a.bool,onClick:d.a.func,className:d.a.string,cssModule:d.a.object,toggle:d.a.bool},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(r.a)(a)),a.getTabIndex=a.getTabIndex.bind(Object(r.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled||this.props.header||this.props.divider?e.preventDefault():(this.props.onClick&&this.props.onClick(e),this.props.toggle&&this.context.toggle(e))},a.getTabIndex=function(){return this.props.disabled||this.props.header||this.props.divider?"-1":"0"},a.render=function(){var e=this.getTabIndex(),t=e>-1?"menuitem":void 0,a=Object(f.n)(this.props,["toggle"]),r=a.className,l=a.cssModule,c=a.divider,i=a.tag,d=a.header,u=a.active,m=Object(o.a)(a,["className","cssModule","divider","tag","header","active"]),b=Object(f.m)(p()(r,{disabled:m.disabled,"dropdown-item":!c&&!d,active:u,"dropdown-header":d,"dropdown-divider":c}),l);return"button"===i&&(d?i="h6":c?i="div":m.href&&(i="a")),s.a.createElement(i,Object(n.a)({type:"button"===i&&(m.onClick||this.props.toggle)?"button":void 0},m,{tabIndex:e,role:t,className:b,onClick:this.onClick}))},t}(s.a.Component);g.propTypes=b,g.defaultProps={tag:"button",toggle:!0},g.contextType=m.a,t.a=g},586:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(506),o=a(18),r=a(502),l=a(38),c=a(2),s=a.n(c),i=a(61),d=a.n(i),u=a(534),p=a(500),m=["defaultOpen"],f=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isOpen:t.defaultOpen||!1},a.toggle=a.toggle.bind(Object(r.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.toggle=function(e){this.setState({isOpen:!this.state.isOpen}),this.props.onToggle&&this.props.onToggle(e,!this.state.isOpen)},a.render=function(){return s.a.createElement(u.a,Object(o.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(p.n)(this.props,m)))},t}(c.Component);f.propTypes=Object(n.a)({defaultOpen:d.a.bool,onToggle:d.a.func},u.a.propTypes)},838:function(e,t,a){"use strict";a.r(t);var n=a(154),o=a(155),r=a(157),l=a(156),c=a(159),s=a(158),i=a(2),d=a.n(i),u=a(507),p=a(508),m=a(510),f=a(512),b=a(511),g=a(534),h=a(535),E=a(536),O=a(537),v=a(586),j=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(l.a)(t).call(this,e))).toggle=a.toggle.bind(Object(c.a)(a)),a.state={dropdownOpen:new Array(6).fill(!1)},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"toggle",value:function(e){var t=this.state.dropdownOpen.map((function(t,a){return a===e&&!t}));this.setState({dropdownOpen:t})}},{key:"render",value:function(){var e=this;return d.a.createElement("div",{className:"animated fadeIn"},d.a.createElement(u.a,null,d.a.createElement(p.a,{xs:"12"},d.a.createElement(m.a,null,d.a.createElement(f.a,null,d.a.createElement("i",{className:"fa fa-align-justify"}),d.a.createElement("strong",null,"Dropdowns"),d.a.createElement("div",{className:"card-header-actions"},d.a.createElement("a",{href:"https://reactstrap.github.io/components/dropdowns/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},d.a.createElement("small",{className:"text-muted"},"docs")))),d.a.createElement(b.a,null,d.a.createElement(g.a,{isOpen:this.state.dropdownOpen[0],toggle:function(){e.toggle(0)}},d.a.createElement(h.a,{caret:!0},"Dropdown"),d.a.createElement(E.a,null,d.a.createElement(O.a,{header:!0},"Header"),d.a.createElement(O.a,{disabled:!0},"Action"),d.a.createElement(O.a,null,"Another Action"),d.a.createElement(O.a,{divider:!0}),d.a.createElement(O.a,null,"Another Action"))))),d.a.createElement(m.a,null,d.a.createElement(f.a,null,d.a.createElement("i",{className:"fa fa-align-justify"}),d.a.createElement("strong",null,"Dropdowns"),d.a.createElement("small",null," alignment")),d.a.createElement(b.a,null,d.a.createElement(g.a,{isOpen:this.state.dropdownOpen[1],toggle:function(){e.toggle(1)}},d.a.createElement(h.a,{caret:!0},"This dropdown's menu is right-aligned"),d.a.createElement(E.a,{right:!0,style:{right:"auto"}},d.a.createElement(O.a,{header:!0},"Header"),d.a.createElement(O.a,{disabled:!0},"Action"),d.a.createElement(O.a,null,"Another Action"),d.a.createElement(O.a,{divider:!0}),d.a.createElement(O.a,null,"Another Action"))))),d.a.createElement(m.a,null,d.a.createElement(f.a,null,d.a.createElement("i",{className:"fa fa-align-justify"}),d.a.createElement("strong",null,"Dropdowns"),d.a.createElement("small",null," sizing")),d.a.createElement(b.a,null,d.a.createElement(g.a,{isOpen:this.state.dropdownOpen[2],toggle:function(){e.toggle(2)},size:"lg",className:"mb-3"},d.a.createElement(h.a,{caret:!0},"Large Dropdown"),d.a.createElement(E.a,null,d.a.createElement(O.a,{header:!0},"Header"),d.a.createElement(O.a,{disabled:!0},"Action"),d.a.createElement(O.a,null,"Another Action"),d.a.createElement(O.a,{divider:!0}),d.a.createElement(O.a,null,"Another Action"))),d.a.createElement(g.a,{isOpen:this.state.dropdownOpen[3],toggle:function(){e.toggle(3)},className:"mb-3"},d.a.createElement(h.a,{caret:!0},"Normal Dropdown"),d.a.createElement(E.a,null,d.a.createElement(O.a,{header:!0},"Header"),d.a.createElement(O.a,{disabled:!0},"Action"),d.a.createElement(O.a,null,"Another Action"),d.a.createElement(O.a,{divider:!0}),d.a.createElement(O.a,null,"Another Action"))),d.a.createElement(g.a,{isOpen:this.state.dropdownOpen[4],toggle:function(){e.toggle(4)},size:"sm"},d.a.createElement(h.a,{caret:!0},"Small Dropdown"),d.a.createElement(E.a,null,d.a.createElement(O.a,{header:!0},"Header"),d.a.createElement(O.a,{disabled:!0},"Action"),d.a.createElement(O.a,null,"Another Action"),d.a.createElement(O.a,{divider:!0}),d.a.createElement(O.a,null,"Another Action"))))),d.a.createElement(m.a,null,d.a.createElement(f.a,null,d.a.createElement("i",{className:"fa fa-align-justify"}),d.a.createElement("strong",null,"Custom Dropdowns")),d.a.createElement(b.a,null,d.a.createElement(g.a,{isOpen:this.state.dropdownOpen[5],toggle:function(){e.toggle(5)}},d.a.createElement(h.a,{tag:"span",onClick:function(){e.toggle(5)},"data-toggle":"dropdown","aria-expanded":this.state.dropdownOpen[5]},"Custom Dropdown Content ",d.a.createElement("strong",null," * ")),d.a.createElement(E.a,null,d.a.createElement("div",{className:"dropdown-item",onClick:function(){e.toggle(5)}},"Custom dropdown item 1"),d.a.createElement("div",{className:"dropdown-item",onClick:function(){e.toggle(5)}},"Custom dropdown item 2"),d.a.createElement("div",{className:"dropdown-item-text",onClick:function(){e.toggle(5)}},"Custom dropdown text 3"),d.a.createElement("hr",{className:"my-0 dropdown-item-text"}),d.a.createElement("div",{onClick:function(){e.toggle(5)}},"Custom dropdown item 4"))))),d.a.createElement(m.a,null,d.a.createElement(f.a,null,d.a.createElement("i",{className:"fa fa-align-justify"}),d.a.createElement("strong",null,"Uncontrolled Dropdown")),d.a.createElement(b.a,null,d.a.createElement(v.a,null,d.a.createElement(h.a,{caret:!0},"Uncontrolled Dropdown"),d.a.createElement(E.a,null,d.a.createElement(O.a,{header:!0},"Header"),d.a.createElement(O.a,{disabled:!0},"Action"),d.a.createElement(O.a,null,"Another Action"),d.a.createElement(O.a,{divider:!0}),d.a.createElement(O.a,null,"Another Action"))))))))}}]),t}(i.Component);t.default=j}}]);
//# sourceMappingURL=16.be583e92.chunk.js.map