(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[4],{507:function(e,t,a){"use strict";var n=a(18),s=a(50),o=a(2),r=a.n(o),i=a(61),l=a.n(i),u=a(499),c=a.n(u),d=a(500),p=l.a.oneOfType([l.a.number,l.a.string]),f={tag:d.q,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:p,sm:p,md:p,lg:p,xl:p},h={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e){var t=e.className,a=e.cssModule,o=e.noGutters,i=e.tag,l=e.form,u=e.widths,p=Object(s.a)(e,["className","cssModule","noGutters","tag","form","widths"]),f=[];u.forEach((function(t,a){var n=e[t];if(delete p[t],n){var s=!a;f.push(s?"row-cols-"+n:"row-cols-"+t+"-"+n)}}));var h=Object(d.m)(c()(t,o?"no-gutters":null,l?"form-row":"row",f),a);return r.a.createElement(i,Object(n.a)({},p,{className:h}))};g.propTypes=f,g.defaultProps=h,t.a=g},508:function(e,t,a){"use strict";var n=a(18),s=a(50),o=a(2),r=a.n(o),i=a(61),l=a.n(i),u=a(499),c=a.n(u),d=a(500),p=l.a.oneOfType([l.a.number,l.a.string]),f=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:p,offset:p})]),h={tag:d.q,xs:f,sm:f,md:f,lg:f,xl:f,className:l.a.string,cssModule:l.a.object,widths:l.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},v=function(e){var t=e.className,a=e.cssModule,o=e.widths,i=e.tag,l=Object(s.a)(e,["className","cssModule","widths","tag"]),u=[];o.forEach((function(t,n){var s=e[t];if(delete l[t],s||""===s){var o=!n;if(Object(d.k)(s)){var r,i=o?"-":"-"+t+"-",p=b(o,t,s.size);u.push(Object(d.m)(c()(((r={})[p]=s.size||""===s.size,r["order"+i+s.order]=s.order||0===s.order,r["offset"+i+s.offset]=s.offset||0===s.offset,r)),a))}else{var f=b(o,t,s);u.push(f)}}})),u.length||u.push("col");var p=Object(d.m)(c()(t,u),a);return r.a.createElement(i,Object(n.a)({},l,{className:p}))};v.propTypes=h,v.defaultProps=g,t.a=v},509:function(e,t,a){"use strict";var n=a(18),s=a(50),o=a(502),r=a(38),i=a(2),l=a.n(i),u=a(61),c=a.n(u),d=a(499),p=a.n(d),f=a(500),h={active:c.a.bool,"aria-label":c.a.string,block:c.a.bool,color:c.a.string,disabled:c.a.bool,outline:c.a.bool,tag:f.q,innerRef:c.a.oneOfType([c.a.object,c.a.func,c.a.string]),onClick:c.a.func,size:c.a.string,children:c.a.node,className:c.a.string,cssModule:c.a.object,close:c.a.bool},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(o.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],o=e.block,r=e.className,i=e.close,u=e.cssModule,c=e.color,d=e.outline,h=e.size,g=e.tag,b=e.innerRef,v=Object(s.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);i&&"undefined"===typeof v.children&&(v.children=l.a.createElement("span",{"aria-hidden":!0},"\xd7"));var m="btn"+(d?"-outline":"")+"-"+c,y=Object(f.m)(p()(r,{close:i},i||"btn",i||m,!!h&&"btn-"+h,!!o&&"btn-block",{active:t,disabled:this.props.disabled}),u);v.href&&"button"===g&&(g="a");var O=i?"Close":null;return l.a.createElement(g,Object(n.a)({type:"button"===g&&v.onClick?"button":void 0},v,{className:y,ref:b,onClick:this.onClick,"aria-label":a||O}))},t}(l.a.Component);g.propTypes=h,g.defaultProps={color:"secondary",tag:"button"},t.a=g},510:function(e,t,a){"use strict";var n=a(18),s=a(50),o=a(2),r=a.n(o),i=a(61),l=a.n(i),u=a(499),c=a.n(u),d=a(500),p={tag:d.q,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},f=function(e){var t=e.className,a=e.cssModule,o=e.color,i=e.body,l=e.inverse,u=e.outline,p=e.tag,f=e.innerRef,h=Object(s.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),g=Object(d.m)(c()(t,"card",!!l&&"text-white",!!i&&"card-body",!!o&&(u?"border":"bg")+"-"+o),a);return r.a.createElement(p,Object(n.a)({},h,{className:g,ref:f}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},511:function(e,t,a){"use strict";var n=a(18),s=a(50),o=a(2),r=a.n(o),i=a(61),l=a.n(i),u=a(499),c=a.n(u),d=a(500),p={tag:d.q,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},f=function(e){var t=e.className,a=e.cssModule,o=e.innerRef,i=e.tag,l=Object(s.a)(e,["className","cssModule","innerRef","tag"]),u=Object(d.m)(c()(t,"card-body"),a);return r.a.createElement(i,Object(n.a)({},l,{className:u,ref:o}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},512:function(e,t,a){"use strict";var n=a(18),s=a(50),o=a(2),r=a.n(o),i=a(61),l=a.n(i),u=a(499),c=a.n(u),d=a(500),p={tag:d.q,className:l.a.string,cssModule:l.a.object},f=function(e){var t=e.className,a=e.cssModule,o=e.tag,i=Object(s.a)(e,["className","cssModule","tag"]),l=Object(d.m)(c()(t,"card-header"),a);return r.a.createElement(o,Object(n.a)({},i,{className:l}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},529:function(e,t,a){"use strict";var n=a(18),s=a(50),o=a(502),r=a(38),i=a(2),l=a.n(i),u=a(61),c=a.n(u),d=a(499),p=a.n(d),f=a(500),h={children:c.a.node,type:c.a.string,size:c.a.string,bsSize:c.a.string,valid:c.a.bool,invalid:c.a.bool,tag:f.q,innerRef:c.a.oneOfType([c.a.object,c.a.func,c.a.string]),plaintext:c.a.bool,addon:c.a.bool,className:c.a.string,cssModule:c.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(o.a)(a)),a.focus=a.focus.bind(Object(o.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.type,r=e.bsSize,i=e.valid,u=e.invalid,c=e.tag,d=e.addon,h=e.plaintext,g=e.innerRef,b=Object(s.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),v=["radio","checkbox"].indexOf(o)>-1,m=new RegExp("\\D","g"),y=c||("select"===o||"textarea"===o?o:"input"),O="form-control";h?(O+="-plaintext",y=c||"input"):"file"===o?O+="-file":v&&(O=d?null:"form-check-input"),b.size&&m.test(b.size)&&(Object(f.t)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=b.size,delete b.size);var j=Object(f.m)(p()(t,u&&"is-invalid",i&&"is-valid",!!r&&"form-control-"+r,O),a);return("input"===y||c&&"function"===typeof c)&&(b.type=o),b.children&&!h&&"select"!==o&&"string"===typeof y&&"select"!==y&&(Object(f.t)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),l.a.createElement(y,Object(n.a)({},b,{ref:g,className:j}))},t}(l.a.Component);g.propTypes=h,g.defaultProps={type:"text"},t.a=g},543:function(e,t,a){"use strict";var n=a(18),s=a(50),o=a(502),r=a(38),i=a(2),l=a.n(i),u=a(61),c=a.n(u),d=a(499),p=a.n(d),f=a(500),h={children:c.a.node,inline:c.a.bool,tag:f.q,innerRef:c.a.oneOfType([c.a.object,c.a.func,c.a.string]),className:c.a.string,cssModule:c.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(o.a)(a)),a.submit=a.submit.bind(Object(o.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.inline,r=e.tag,i=e.innerRef,u=Object(s.a)(e,["className","cssModule","inline","tag","innerRef"]),c=Object(f.m)(p()(t,!!o&&"form-inline"),a);return l.a.createElement(r,Object(n.a)({},u,{ref:i,className:c}))},t}(i.Component);g.propTypes=h,g.defaultProps={tag:"form"},t.a=g},595:function(e,t,a){var n,s,o;s=[e,t,a(2),a(61)],void 0===(o="function"===typeof(n=function(e,t,a,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=o(a);function o(e){return e&&e.__esModule?e:{default:e}}o(n);var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};function l(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}var u={className:"react-tagsinput-input",placeholder:"Add a tag"},c=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={tag:"",isFocused:!1},e.focus=e.focus.bind(e),e.blur=e.blur.bind(e),e}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"_getTagDisplayValue",value:function(e){var t=this.props.tagDisplayProp;return t?e[t]:e}},{key:"_makeTag",value:function(e){var t,a,n,s=this.props.tagDisplayProp;return s?(n=e,(a=s)in(t={})?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t):e}},{key:"_removeTag",value:function(e){var t=this.props.value.concat([]);if(e>-1&&e<t.length){var a=t.splice(e,1);this.props.onChange(t,a,[e])}}},{key:"_clearInput",value:function(){this.hasControlledInput()?this.props.onChangeInput(""):this.setState({tag:""})}},{key:"_tag",value:function(){return this.hasControlledInput()?this.props.inputValue:this.state.tag}},{key:"_addTags",value:function(e){var t=this,a=this.props,n=a.validationRegex,s=a.onChange,o=a.onValidationReject,r=a.onlyUnique,i=a.maxTags,l=a.value;r&&(e=(e=function(e){for(var t=[],a=0;a<e.length;a++)-1===t.indexOf(e[a])&&t.push(e[a]);return t}(e)).filter((function(e){return l.every((function(a){return t._getTagDisplayValue(a)!==t._getTagDisplayValue(e)}))})));var u=e.filter((function(e){return!n.test(t._getTagDisplayValue(e))}));if(e=(e=e.filter((function(e){return n.test(t._getTagDisplayValue(e))}))).filter((function(e){var a=t._getTagDisplayValue(e);return"function"===typeof a.trim?a.trim().length>0:a})),i>=0){var c=Math.max(i-l.length,0);e=e.slice(0,c)}if(o&&u.length>0&&o(u),e.length>0){for(var d=l.concat(e),p=[],f=0;f<e.length;f++)p.push(l.length+f);return s(d,e,p),this._clearInput(),!0}return!(u.length>0)&&(this._clearInput(),!1)}},{key:"_shouldPreventDefaultEventOnAdd",value:function(e,t,a){return!!e||13===a&&(this.props.preventSubmit||!this.props.preventSubmit&&!t)}},{key:"focus",value:function(){this.input&&"function"===typeof this.input.focus&&this.input.focus(),this.handleOnFocus()}},{key:"blur",value:function(){this.input&&"function"===typeof this.input.blur&&this.input.blur(),this.handleOnBlur()}},{key:"accept",value:function(){var e=this._tag();return""!==e&&(e=this._makeTag(e),this._addTags([e]))}},{key:"addTag",value:function(e){return this._addTags([e])}},{key:"clearInput",value:function(){this._clearInput()}},{key:"handlePaste",value:function(e){var t=this,a=this.props,n=a.addOnPaste,s=a.pasteSplit;if(n){e.preventDefault();var o=s(function(e){return window.clipboardData?window.clipboardData.getData("Text"):e.clipboardData?e.clipboardData.getData("text/plain"):""}(e)).map((function(e){return t._makeTag(e)}));this._addTags(o)}}},{key:"handleKeyDown",value:function(e){if(!e.defaultPrevented){var t=this.props,a=t.value,n=t.removeKeys,s=t.addKeys,o=""===this._tag(),r=e.keyCode,i=e.key,l=-1!==s.indexOf(r)||-1!==s.indexOf(i),u=-1!==n.indexOf(r)||-1!==n.indexOf(i);if(l){var c=this.accept();this._shouldPreventDefaultEventOnAdd(c,o,r)&&e.preventDefault()}u&&a.length>0&&o&&(e.preventDefault(),this._removeTag(a.length-1))}}},{key:"handleClick",value:function(e){e.target===this.div&&this.focus()}},{key:"handleChange",value:function(e){var t=this.props.onChangeInput,a=this.props.inputProps.onChange,n=e.target.value;a&&a(e),this.hasControlledInput()?t(n):this.setState({tag:n})}},{key:"handleOnFocus",value:function(e){var t=this.props.inputProps.onFocus;t&&t(e),this.setState({isFocused:!0})}},{key:"handleOnBlur",value:function(e){var t=this.props.inputProps.onBlur;if(this.setState({isFocused:!1}),null!=e&&(t&&t(e),this.props.addOnBlur)){var a=this._makeTag(e.target.value);this._addTags([a])}}},{key:"handleRemove",value:function(e){this._removeTag(e)}},{key:"inputProps",value:function(){var e=this.props.inputProps,t=(e.onChange,e.onFocus,e.onBlur,l(e,["onChange","onFocus","onBlur"])),a=i({},u,t);return this.props.disabled&&(a.disabled=!0),a}},{key:"inputValue",value:function(e){return e.currentValue||e.inputValue||""}},{key:"hasControlledInput",value:function(){var e=this.props,t=e.inputValue;return"function"===typeof e.onChangeInput&&"string"===typeof t}},{key:"componentDidMount",value:function(){this.hasControlledInput()||this.setState({tag:this.inputValue(this.props)})}},{key:"componentWillReceiveProps",value:function(e){this.hasControlledInput()||this.inputValue(e)&&this.setState({tag:this.inputValue(e)})}},{key:"render",value:function(){var e=this,t=this.props,a=t.value,n=(t.onChange,t.tagProps),o=t.renderLayout,r=t.renderTag,u=t.renderInput,c=(t.addKeys,t.removeKeys,t.className),d=t.focusedClassName,p=(t.addOnBlur,t.addOnPaste,t.inputProps,t.pasteSplit,t.onlyUnique,t.maxTags,t.validationRegex,t.disabled);t.tagDisplayProp,t.inputValue,t.onChangeInput,l(t,["value","onChange","tagProps","renderLayout","renderTag","renderInput","addKeys","removeKeys","className","focusedClassName","addOnBlur","addOnPaste","inputProps","pasteSplit","onlyUnique","maxTags","validationRegex","disabled","tagDisplayProp","inputValue","onChangeInput"]),this.state.isFocused&&(c+=" "+d);var f=a.map((function(t,a){return r(i({key:a,tag:t,onRemove:e.handleRemove.bind(e),disabled:p,getTagDisplayValue:e._getTagDisplayValue.bind(e)},n))})),h=u(i({ref:function(t){e.input=t},value:this._tag(),onPaste:this.handlePaste.bind(this),onKeyDown:this.handleKeyDown.bind(this),onChange:this.handleChange.bind(this),onFocus:this.handleOnFocus.bind(this),onBlur:this.handleOnBlur.bind(this),addTag:this.addTag.bind(this)},this.inputProps()));return s.default.createElement("div",{ref:function(t){e.div=t},onClick:this.handleClick.bind(this),className:c},o(f,h))}}]),t}(s.default.Component);c.defaultProps={className:"react-tagsinput",focusedClassName:"react-tagsinput--focused",addKeys:[9,13],addOnBlur:!1,addOnPaste:!1,inputProps:{},removeKeys:[8],renderInput:function(e){e.addTag;var t=l(e,["addTag"]),a=t.onChange,n=t.value,o=l(t,["onChange","value"]);return s.default.createElement("input",i({type:"text",onChange:a,value:n},o))},renderTag:function(e){var t=e.tag,a=e.key,n=e.disabled,o=e.onRemove,r=e.classNameRemove,u=e.getTagDisplayValue,c=l(e,["tag","key","disabled","onRemove","classNameRemove","getTagDisplayValue"]);return s.default.createElement("span",i({key:a},c),u(t),!n&&s.default.createElement("a",{className:r,onClick:function(e){return o(a)}}))},renderLayout:function(e,t){return s.default.createElement("span",null,e,t)},pasteSplit:function(e){return e.split(" ").map((function(e){return e.trim()}))},tagProps:{className:"react-tagsinput-tag",classNameRemove:"react-tagsinput-remove"},onlyUnique:!1,maxTags:-1,validationRegex:/.*/,disabled:!1,tagDisplayProp:null,preventSubmit:!0},t.default=c,e.exports=t.default})?n.apply(t,s):n)||(e.exports=o)},596:function(e,t,a){},597:function(e,t,a){"use strict";var n=a(18),s=a(50),o=a(2),r=a.n(o),i=a(61),l=a.n(i),u=a(499),c=a.n(u),d=a(500),p={children:l.a.node,row:l.a.bool,check:l.a.bool,inline:l.a.bool,disabled:l.a.bool,tag:d.q,className:l.a.string,cssModule:l.a.object},f=function(e){var t=e.className,a=e.cssModule,o=e.row,i=e.disabled,l=e.check,u=e.inline,p=e.tag,f=Object(s.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),h=Object(d.m)(c()(t,!!o&&"row",l?"form-check":"form-group",!(!l||!u)&&"form-check-inline",!(!l||!i)&&"disabled"),a);return"fieldset"===p&&(f.disabled=i),r.a.createElement(p,Object(n.a)({},f,{className:h}))};f.propTypes=p,f.defaultProps={tag:"div"},t.a=f},598:function(e,t,a){"use strict";var n=a(18),s=a(50),o=a(2),r=a.n(o),i=a(61),l=a.n(i),u=a(499),c=a.n(u),d=a(500),p=l.a.oneOfType([l.a.number,l.a.string]),f=l.a.oneOfType([l.a.string,l.a.number,l.a.shape({size:p,order:p,offset:p})]),h={children:l.a.node,hidden:l.a.bool,check:l.a.bool,size:l.a.string,for:l.a.string,tag:d.q,className:l.a.string,cssModule:l.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:l.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},v=function(e){var t=e.className,a=e.cssModule,o=e.hidden,i=e.widths,l=e.tag,u=e.check,p=e.size,f=e.for,h=Object(s.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),g=[];i.forEach((function(t,n){var s=e[t];if(delete h[t],s||""===s){var o,r=!n;if(Object(d.k)(s)){var i,l=r?"-":"-"+t+"-";o=b(r,t,s.size),g.push(Object(d.m)(c()(((i={})[o]=s.size||""===s.size,i["order"+l+s.order]=s.order||0===s.order,i["offset"+l+s.offset]=s.offset||0===s.offset,i))),a)}else o=b(r,t,s),g.push(o)}}));var v=Object(d.m)(c()(t,!!o&&"sr-only",!!u&&"form-check-label",!!p&&"col-form-label-"+p,g,!!g.length&&"col-form-label"),a);return r.a.createElement(l,Object(n.a)({htmlFor:f},h,{className:v}))};v.propTypes=h,v.defaultProps=g,t.a=v}}]);
//# sourceMappingURL=4.5375bab8.chunk.js.map