(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[46],{509:function(e,t,a){"use strict";var n=a(18),s=a(50),i=a(502),o=a(38),r=a(2),l=a.n(r),c=a(61),p=a.n(c),u=a(499),h=a.n(u),d=a(500),m={active:p.a.bool,"aria-label":p.a.string,block:p.a.bool,color:p.a.string,disabled:p.a.bool,outline:p.a.bool,tag:d.q,innerRef:p.a.oneOfType([p.a.object,p.a.func,p.a.string]),onClick:p.a.func,size:p.a.string,children:p.a.node,className:p.a.string,cssModule:p.a.object,close:p.a.bool},f=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(i.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],i=e.block,o=e.className,r=e.close,c=e.cssModule,p=e.color,u=e.outline,m=e.size,f=e.tag,g=e.innerRef,b=Object(s.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);r&&"undefined"===typeof b.children&&(b.children=l.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(u?"-outline":"")+"-"+p,O=Object(d.m)(h()(o,{close:r},r||"btn",r||v,!!m&&"btn-"+m,!!i&&"btn-block",{active:t,disabled:this.props.disabled}),c);b.href&&"button"===f&&(f="a");var T=r?"Close":null;return l.a.createElement(f,Object(n.a)({type:"button"===f&&b.onClick?"button":void 0},b,{className:O,ref:g,onClick:this.onClick,"aria-label":a||T}))},t}(l.a.Component);f.propTypes=m,f.defaultProps={color:"secondary",tag:"button"},t.a=f},532:function(e,t,a){"use strict";var n=a(18),s=a(50),i=a(506),o=a(2),r=a.n(o),l=a(61),c=a.n(l),p=a(499),u=a.n(p),h=a(530),d=a(500),m=Object(i.a)({},h.Transition.propTypes,{children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),tag:d.q,baseClass:c.a.string,baseClassActive:c.a.string,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])}),f=Object(i.a)({},h.Transition.defaultProps,{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:d.e.Fade,appear:!0,enter:!0,exit:!0,in:!0});function g(e){var t=e.tag,a=e.baseClass,i=e.baseClassActive,o=e.className,l=e.cssModule,c=e.children,p=e.innerRef,m=Object(s.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),f=Object(d.o)(m,d.c),g=Object(d.n)(m,d.c);return r.a.createElement(h.Transition,f,(function(e){var s="entered"===e,h=Object(d.m)(u()(o,a,s&&i),l);return r.a.createElement(t,Object(n.a)({className:h},g,{ref:p}),c)}))}g.propTypes=m,g.defaultProps=f,t.a=g},862:function(e,t,a){"use strict";a.r(t);var n=a(154),s=a(155),i=a(157),o=a(156),r=a(159),l=a(158),c=a(2),p=a.n(c),u=a(509),h=a(18),d=a(499),m=a.n(d),f=a(502),g=a(38),b=a(61),v=a.n(b),O=a(50),T=a(506),E=a(160),j=a.n(E),y=a(558),C=a(500),N=a(532);var w={children:v.a.node.isRequired,popperClassName:v.a.string,placement:v.a.string,placementPrefix:v.a.string,arrowClassName:v.a.string,hideArrow:v.a.bool,tag:C.q,isOpen:v.a.bool.isRequired,cssModule:v.a.object,offset:v.a.oneOfType([v.a.string,v.a.number]),fallbackPlacement:v.a.oneOfType([v.a.string,v.a.array]),flip:v.a.bool,container:C.r,target:C.r.isRequired,modifiers:v.a.object,boundariesElement:v.a.oneOfType([v.a.string,C.a]),onClosed:v.a.func,fade:v.a.bool,transition:v.a.shape(N.a.propTypes)},k={boundariesElement:"scrollParent",placement:"auto",hideArrow:!1,isOpen:!1,offset:0,fallbackPlacement:"flip",flip:!0,container:"body",modifiers:{},onClosed:function(){},fade:!0,transition:Object(T.a)({},N.a.defaultProps)},_=function(e){function t(t){var a;return(a=e.call(this,t)||this).setTargetNode=a.setTargetNode.bind(Object(f.a)(a)),a.getTargetNode=a.getTargetNode.bind(Object(f.a)(a)),a.getRef=a.getRef.bind(Object(f.a)(a)),a.onClosed=a.onClosed.bind(Object(f.a)(a)),a.state={isOpen:t.isOpen},a}Object(g.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.isOpen&&!t.isOpen?{isOpen:e.isOpen}:null};var a=t.prototype;return a.componentDidUpdate=function(){this._element&&this._element.childNodes&&this._element.childNodes[0]&&this._element.childNodes[0].focus&&this._element.childNodes[0].focus()},a.setTargetNode=function(e){this.targetNode="string"===typeof e?Object(C.j)(e):e},a.getTargetNode=function(){return this.targetNode},a.getContainerNode=function(){return Object(C.j)(this.props.container)},a.getRef=function(e){this._element=e},a.onClosed=function(){this.props.onClosed(),this.setState({isOpen:!1})},a.renderChildren=function(){var e=this.props,t=e.cssModule,a=e.children,n=e.isOpen,s=e.flip,i=(e.target,e.offset),o=e.fallbackPlacement,r=e.placementPrefix,l=e.arrowClassName,c=e.hideArrow,u=e.popperClassName,d=e.tag,f=(e.container,e.modifiers),g=e.boundariesElement,b=(e.onClosed,e.fade),v=e.transition,E=e.placement,j=Object(O.a)(e,["cssModule","children","isOpen","flip","target","offset","fallbackPlacement","placementPrefix","arrowClassName","hideArrow","popperClassName","tag","container","modifiers","boundariesElement","onClosed","fade","transition","placement"]),w=Object(C.m)(m()("arrow",l),t),k=Object(C.m)(m()(u,r?r+"-auto":""),this.props.cssModule),_=Object(T.a)({offset:{offset:i},flip:{enabled:s,behavior:o},preventOverflow:{boundariesElement:g}},f),P=Object(T.a)({},N.a.defaultProps,{},v,{baseClass:b?v.baseClass:"",timeout:b?v.timeout:0});return p.a.createElement(N.a,Object(h.a)({},P,j,{in:n,onExited:this.onClosed,tag:d}),p.a.createElement(y.a,{referenceElement:this.targetNode,modifiers:_,placement:E},(function(e){var t=e.ref,n=e.style,s=e.placement,i=e.arrowProps;return p.a.createElement("div",{ref:t,style:n,className:k,"x-placement":s},a,!c&&p.a.createElement("span",{ref:i.ref,className:w,style:i.style}))})))},a.render=function(){return this.setTargetNode(this.props.target),this.state.isOpen?"inline"===this.props.container?this.renderChildren():j.a.createPortal(p.a.createElement("div",{ref:this.getRef},this.renderChildren()),this.getContainerNode()):null},t}(p.a.Component);_.propTypes=w,_.defaultProps=k;var P=_,D={placement:v.a.oneOf(C.b),target:C.r.isRequired,container:C.r,isOpen:v.a.bool,disabled:v.a.bool,hideArrow:v.a.bool,boundariesElement:v.a.oneOfType([v.a.string,C.a]),className:v.a.string,innerClassName:v.a.string,arrowClassName:v.a.string,popperClassName:v.a.string,cssModule:v.a.object,toggle:v.a.func,autohide:v.a.bool,placementPrefix:v.a.string,delay:v.a.oneOfType([v.a.shape({show:v.a.number,hide:v.a.number}),v.a.number]),modifiers:v.a.object,offset:v.a.oneOfType([v.a.string,v.a.number]),innerRef:v.a.oneOfType([v.a.func,v.a.string,v.a.object]),trigger:v.a.string,fade:v.a.bool,flip:v.a.bool},M={show:0,hide:50},x={isOpen:!1,hideArrow:!1,autohide:!1,delay:M,toggle:function(){},trigger:"click",fade:!0};function R(e,t){return t&&(e===t||t.contains(e))}function q(e,t){return void 0===t&&(t=[]),t&&t.length&&t.find((function(t){return R(e,t)}))}var A=function(e){function t(t){var a;return(a=e.call(this,t)||this)._targets=[],a.currentTargetElement=null,a.addTargetEvents=a.addTargetEvents.bind(Object(f.a)(a)),a.handleDocumentClick=a.handleDocumentClick.bind(Object(f.a)(a)),a.removeTargetEvents=a.removeTargetEvents.bind(Object(f.a)(a)),a.toggle=a.toggle.bind(Object(f.a)(a)),a.showWithDelay=a.showWithDelay.bind(Object(f.a)(a)),a.hideWithDelay=a.hideWithDelay.bind(Object(f.a)(a)),a.onMouseOverTooltipContent=a.onMouseOverTooltipContent.bind(Object(f.a)(a)),a.onMouseLeaveTooltipContent=a.onMouseLeaveTooltipContent.bind(Object(f.a)(a)),a.show=a.show.bind(Object(f.a)(a)),a.hide=a.hide.bind(Object(f.a)(a)),a.onEscKeyDown=a.onEscKeyDown.bind(Object(f.a)(a)),a.getRef=a.getRef.bind(Object(f.a)(a)),a.state={isOpen:t.isOpen},a._isMounted=!1,a}Object(g.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){this._isMounted=!0,this.updateTarget()},a.componentWillUnmount=function(){this._isMounted=!1,this.removeTargetEvents(),this._targets=null,this.clearShowTimeout(),this.clearHideTimeout()},t.getDerivedStateFromProps=function(e,t){return e.isOpen&&!t.isOpen?{isOpen:e.isOpen}:null},a.onMouseOverTooltipContent=function(){this.props.trigger.indexOf("hover")>-1&&!this.props.autohide&&(this._hideTimeout&&this.clearHideTimeout(),this.state.isOpen&&!this.props.isOpen&&this.toggle())},a.onMouseLeaveTooltipContent=function(e){this.props.trigger.indexOf("hover")>-1&&!this.props.autohide&&(this._showTimeout&&this.clearShowTimeout(),e.persist(),this._hideTimeout=setTimeout(this.hide.bind(this,e),this.getDelay("hide")))},a.onEscKeyDown=function(e){"Escape"===e.key&&this.hide(e)},a.getRef=function(e){var t=this.props.innerRef;t&&("function"===typeof t?t(e):"object"===typeof t&&(t.current=e)),this._popover=e},a.getDelay=function(e){var t=this.props.delay;return"object"===typeof t?isNaN(t[e])?M[e]:t[e]:t},a.show=function(e){this.props.isOpen||(this.clearShowTimeout(),this.currentTargetElement=e&&e.currentTarget,this.toggle(e))},a.showWithDelay=function(e){this._hideTimeout&&this.clearHideTimeout(),this._showTimeout=setTimeout(this.show.bind(this,e),this.getDelay("show"))},a.hide=function(e){this.props.isOpen&&(this.clearHideTimeout(),this.currentTargetElement=null,this.toggle(e))},a.hideWithDelay=function(e){this._showTimeout&&this.clearShowTimeout(),this._hideTimeout=setTimeout(this.hide.bind(this,e),this.getDelay("hide"))},a.clearShowTimeout=function(){clearTimeout(this._showTimeout),this._showTimeout=void 0},a.clearHideTimeout=function(){clearTimeout(this._hideTimeout),this._hideTimeout=void 0},a.handleDocumentClick=function(e){var t=this.props.trigger.split(" ");t.indexOf("legacy")>-1&&(this.props.isOpen||q(e.target,this._targets))?(this._hideTimeout&&this.clearHideTimeout(),this.props.isOpen&&!R(e.target,this._popover)?this.hideWithDelay(e):this.props.isOpen||this.showWithDelay(e)):t.indexOf("click")>-1&&q(e.target,this._targets)&&(this._hideTimeout&&this.clearHideTimeout(),this.props.isOpen?this.hideWithDelay(e):this.showWithDelay(e))},a.addEventOnTargets=function(e,t,a){this._targets.forEach((function(n){n.addEventListener(e,t,a)}))},a.removeEventOnTargets=function(e,t,a){this._targets.forEach((function(n){n.removeEventListener(e,t,a)}))},a.addTargetEvents=function(){if(this.props.trigger){var e=this.props.trigger.split(" ");-1===e.indexOf("manual")&&((e.indexOf("click")>-1||e.indexOf("legacy")>-1)&&document.addEventListener("click",this.handleDocumentClick,!0),this._targets&&this._targets.length&&(e.indexOf("hover")>-1&&(this.addEventOnTargets("mouseover",this.showWithDelay,!0),this.addEventOnTargets("mouseout",this.hideWithDelay,!0)),e.indexOf("focus")>-1&&(this.addEventOnTargets("focusin",this.show,!0),this.addEventOnTargets("focusout",this.hide,!0)),this.addEventOnTargets("keydown",this.onEscKeyDown,!0)))}},a.removeTargetEvents=function(){this._targets&&(this.removeEventOnTargets("mouseover",this.showWithDelay,!0),this.removeEventOnTargets("mouseout",this.hideWithDelay,!0),this.removeEventOnTargets("keydown",this.onEscKeyDown,!0),this.removeEventOnTargets("focusin",this.show,!0),this.removeEventOnTargets("focusout",this.hide,!0)),document.removeEventListener("click",this.handleDocumentClick,!0)},a.updateTarget=function(){var e=Object(C.j)(this.props.target,!0);e!==this._targets&&(this.removeTargetEvents(),this._targets=e?Array.from(e):[],this.currentTargetElement=this.currentTargetElement||this._targets[0],this.addTargetEvents())},a.toggle=function(e){return this.props.disabled||!this._isMounted?e&&e.preventDefault():this.props.toggle(e)},a.render=function(){if(!this.props.isOpen)return null;this.updateTarget();var e=this.props,t=e.className,a=e.cssModule,n=e.innerClassName,s=e.isOpen,i=e.hideArrow,o=e.boundariesElement,r=e.placement,l=e.placementPrefix,c=e.arrowClassName,u=e.popperClassName,d=e.container,m=e.modifiers,f=e.offset,g=e.fade,b=e.flip,v=Object(C.n)(this.props,Object.keys(D)),O=Object(C.m)(u,a),T=Object(C.m)(n,a);return p.a.createElement(P,{className:t,target:this.currentTargetElement||this._targets[0],isOpen:s,hideArrow:i,boundariesElement:o,placement:r,placementPrefix:l,arrowClassName:c,popperClassName:O,container:d,modifiers:m,offset:f,cssModule:a,fade:g,flip:b},p.a.createElement("div",Object(h.a)({},v,{ref:this.getRef,className:T,role:"tooltip",onMouseOver:this.onMouseOverTooltipContent,onMouseLeave:this.onMouseLeaveTooltipContent,onKeyDown:this.onEscKeyDown})))},t}(p.a.Component);A.propTypes=D,A.defaultProps=x;var W=A,S=function(e){var t=m()("popover","show",e.popperClassName),a=m()("popover-inner",e.innerClassName);return p.a.createElement(W,Object(h.a)({},e,{popperClassName:t,innerClassName:a}))};S.propTypes=D,S.defaultProps={placement:"right",placementPrefix:"bs-popover",trigger:"click"};var L=S,H={tag:C.q,className:v.a.string,cssModule:v.a.object},K=function(e){var t=e.className,a=e.cssModule,n=e.tag,s=Object(O.a)(e,["className","cssModule","tag"]),i=Object(C.m)(m()(t,"popover-header"),a);return p.a.createElement(n,Object(h.a)({},s,{className:i}))};K.propTypes=H,K.defaultProps={tag:"h3"};var z=K,F={tag:C.q,className:v.a.string,cssModule:v.a.object},J=function(e){var t=e.className,a=e.cssModule,n=e.tag,s=Object(O.a)(e,["className","cssModule","tag"]),i=Object(C.m)(m()(t,"popover-body"),a);return p.a.createElement(n,Object(h.a)({},s,{className:i}))};J.propTypes=F,J.defaultProps={tag:"div"};var U=J,B=a(510),I=a(512),G=a(511),Q=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).toggle=a.toggle.bind(Object(r.a)(a)),a.state={popoverOpen:!1},a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"toggle",value:function(){this.setState({popoverOpen:!this.state.popoverOpen})}},{key:"render",value:function(){return p.a.createElement("span",null,p.a.createElement(u.a,{className:"mr-1",color:"secondary",id:"Popover-"+this.props.id,onClick:this.toggle},this.props.item.text),p.a.createElement(L,{placement:this.props.item.placement,isOpen:this.state.popoverOpen,target:"Popover-"+this.props.id,toggle:this.toggle,trigger:"legacy",delay:0},p.a.createElement(z,null,"Popover Title"),p.a.createElement(U,null,"Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.")))}}]),t}(c.Component),V=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).toggle=a.toggle.bind(Object(r.a)(a)),a.state={popoverOpen:!1,popovers:[{placement:"top",text:"Top"},{placement:"bottom",text:"Bottom"},{placement:"left",text:"Left"},{placement:"right",text:"Right"}]},a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"toggle",value:function(){this.setState({popoverOpen:!this.state.popoverOpen})}},{key:"render",value:function(){return p.a.createElement("div",{className:"animated fadeIn"},p.a.createElement(B.a,null,p.a.createElement(I.a,null,p.a.createElement("i",{className:"fa fa-align-justify"}),p.a.createElement("strong",null,"Popovers"),p.a.createElement("div",{className:"card-header-actions"},p.a.createElement("a",{href:"https://reactstrap.github.io/components/popovers/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},p.a.createElement("small",{className:"text-muted"},"docs")))),p.a.createElement(G.a,null,p.a.createElement(u.a,{id:"Popover1",onClick:this.toggle},"Launch Popover"),p.a.createElement(L,{placement:"bottom",isOpen:this.state.popoverOpen,target:"Popover1",toggle:this.toggle},p.a.createElement(z,null,"Popover Title"),p.a.createElement(U,null,"Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.")))),p.a.createElement(B.a,null,p.a.createElement(I.a,null,p.a.createElement("i",{className:"fa fa-align-justify"}),p.a.createElement("strong",null,"Popovers"),p.a.createElement("small",null," list")),p.a.createElement(G.a,null,this.state.popovers.map((function(e,t){return p.a.createElement(Q,{key:t,item:e,id:t})})))))}}]),t}(c.Component);t.default=V}}]);
//# sourceMappingURL=46.309dd8bb.chunk.js.map