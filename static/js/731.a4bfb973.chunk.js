"use strict";(self.webpackChunkreact_qa_test=self.webpackChunkreact_qa_test||[]).push([[731],{3713:function(e,n,t){t.d(n,{Z:function(){return l}});var r={backdrop:"Modal_backdrop__sVPQZ",modal:"Modal_modal__yEgVW",opacity:"Modal_opacity__aq1ar",modalInner:"Modal_modalInner__EBJXI",button:"Modal_button__FFRRp"},a=t(4164),i=t(2791),s=t(3329),o=document.querySelector("#modal-root");function l(e){var n=e.handleModalToggle,t=e.children;function l(e){"Escape"===e.code&&n()}(0,i.useEffect)((function(){return window.addEventListener("keydown",l),function(){window.removeEventListener("keydown",l)}}),[]);var d=function(e){e.target===e.currentTarget&&n()};return(0,a.createPortal)((0,s.jsx)("div",{className:r.backdrop,onClick:d,children:(0,s.jsxs)("div",{className:r.modal,children:[(0,s.jsx)("button",{onClick:d,className:r.button}),(0,s.jsx)("div",{className:r.modalInner,children:t})]})}),o)}},239:function(e,n,t){t.r(n),t.d(n,{default:function(){return q}});var r=t(9434),a=t(2791),i={wrapper:"PlanningHeader_wrapper__u4AHq",dates:"PlanningHeader_dates__2zGU9",rewards:"PlanningHeader_rewards__pBGaH",rewardsPlanned:"PlanningHeader_rewardsPlanned__rcGrS"},s=t(9439),o={wrapper:"AddCustomTask_wrapper__UHvKY",button:"AddCustomTask_button__69Ln1"},l=t(3713),d=t(3329),p=t(4088),c=function(){return c=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},c.apply(this,arguments)};function u(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}var f,h,x,v,m,g=(0,p.css)(f||(f=u(["\n  display: flex;\n  align-items: center;\n  min-width: 322px;\n  max-width: 508px;\n  height: 48px;\n  border: dashed 2px ",";\n  padding: 8px 16px 8px 8px;\n  border-radius: 5px;\n  cursor: pointer;\n  flex-grow: 0;\n\n  &.is-disabled {\n    border: dashed 2px ",";\n    cursor: no-drop;\n    svg {\n      fill: ",";\n      color: ",";\n      path {\n        fill: ",";\n        color: ",";\n      }\n    }\n  }\n"],["\n  display: flex;\n  align-items: center;\n  min-width: 322px;\n  max-width: 508px;\n  height: 48px;\n  border: dashed 2px ",";\n  padding: 8px 16px 8px 8px;\n  border-radius: 5px;\n  cursor: pointer;\n  flex-grow: 0;\n\n  &.is-disabled {\n    border: dashed 2px ",";\n    cursor: no-drop;\n    svg {\n      fill: ",";\n      color: ",";\n      path {\n        fill: ",";\n        color: ",";\n      }\n    }\n  }\n"])),"#0658c2","#666","#666","#666","#666","#666"),w=p.default.label(h||(h=u(["\n  position: relative;\n  ",";\n  &:focus-within {\n    outline: 2px solid black;\n  }\n  & > input {\n    display: block;\n    opacity: 0;\n    position: absolute;\n    pointer-events: none;\n  }\n"],["\n  position: relative;\n  ",";\n  &:focus-within {\n    outline: 2px solid black;\n  }\n  & > input {\n    display: block;\n    opacity: 0;\n    position: absolute;\n    pointer-events: none;\n  }\n"])),(function(e){return e.overRide?"":g})),j=p.default.div(x||(x=u(["\n  border: dashed 2px ",";\n  border-radius: 5px;\n  background-color: ",";\n  opacity: 0.5;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  & > span {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translateX(-50%) translateY(-50%);\n  }\n"],["\n  border: dashed 2px ",";\n  border-radius: 5px;\n  background-color: ",";\n  opacity: 0.5;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  & > span {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translateX(-50%) translateY(-50%);\n  }\n"])),"#666","#999"),b=p.default.div(v||(v=u(["\n  display: flex;\n  justify-content: space-between;\n  flex-grow: 1;\n  & > span {\n    font-size: 12px;\n    color: ",";\n  }\n  .file-types {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    max-width: 100px;\n  }\n"],["\n  display: flex;\n  justify-content: space-between;\n  flex-grow: 1;\n  & > span {\n    font-size: 12px;\n    color: ",";\n  }\n  .file-types {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    max-width: 100px;\n  }\n"])),(function(e){return e.error?"red":"#666"})),k=p.default.span(m||(m=u(["\n  font-size: 14px;\n  color: ",";\n  span {\n    text-decoration: underline;\n  }\n"],["\n  font-size: 14px;\n  color: ",";\n  span {\n    text-decoration: underline;\n  }\n"])),"#666"),_=function(e){return e/1e3/1e3};function C(e){var n=e.types,t=e.minSize,r=e.maxSize;if(n){var a=n.toString(),i="";return r&&(i+="size >= ".concat(r,", ")),t&&(i+="size <= ".concat(t,", ")),(0,d.jsx)("span",c({title:"".concat(i,"types: ").concat(a),className:"file-types"},{children:a}),void 0)}return null}function y(){return(0,d.jsxs)("svg",c({width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:[(0,d.jsx)("path",{d:"M5.33317 6.66667H22.6665V16H25.3332V6.66667C25.3332 5.196 24.1372 4 22.6665 4H5.33317C3.8625 4 2.6665 5.196 2.6665 6.66667V22.6667C2.6665 24.1373 3.8625 25.3333 5.33317 25.3333H15.9998V22.6667H5.33317V6.66667Z",fill:"#0658C2"},void 0),(0,d.jsx)("path",{d:"M10.6665 14.6667L6.6665 20H21.3332L15.9998 12L11.9998 17.3333L10.6665 14.6667Z",fill:"#0658C2"},void 0),(0,d.jsx)("path",{d:"M25.3332 18.6667H22.6665V22.6667H18.6665V25.3333H22.6665V29.3333H25.3332V25.3333H29.3332V22.6667H25.3332V18.6667Z",fill:"#0658C2"},void 0)]}),void 0)}var N=0,H=function(e,n,t,r,a){return t?(0,d.jsx)("span",{children:"File type/size error, Hovered on types!"},void 0):(0,d.jsx)(k,{children:r?(0,d.jsx)("span",{children:"Upload disabled"},void 0):e||n?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("span",{children:"Uploaded Successfully!"},void 0)," Upload another?"]},void 0):(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(d.Fragment,a?{children:[(0,d.jsx)("span",{children:a.split(" ")[0]},void 0)," ",a.substr(a.indexOf(" ")+1)]}:{children:[(0,d.jsx)("span",{children:"Upload"},void 0)," or drop a file right here"]},void 0)},void 0)},void 0)},L=function(e){var n,t=e.name,r=e.hoverTitle,i=e.types,s=e.handleChange,o=e.classes,l=e.children,p=e.maxSize,u=e.minSize,f=e.fileOrFiles,h=e.onSizeError,x=e.onTypeError,v=e.onSelect,m=e.onDrop,g=e.disabled,k=e.label,L=e.multiple,S=e.required,M=e.onDraggingStateChange,T=e.dropMessageStyle,V=(0,a.useRef)(null),E=(0,a.useRef)(null),F=(0,a.useState)(!1),P=F[0],z=F[1],Z=(0,a.useState)(null),U=Z[0],D=Z[1],O=(0,a.useState)(!1),W=O[0],q=O[1],R=function(e){return i&&!function(e,n){var t=e.name.split(".").pop();return n.map((function(e){return e.toLowerCase()})).includes(t.toLowerCase())}(e,i)?(q(!0),x&&x("File type is not supported"),!1):p&&_(e.size)>p?(q(!0),h&&h("File size is too big"),!1):!(u&&_(e.size)<u)||(q(!0),h&&h("File size is too small"),!1)},A=function(e){var n=!1;if(e){if(e instanceof File)n=!R(e);else for(var t=0;t<e.length;t++){var r=e[t];n=!R(r)||n}return!n&&(s&&s(e),D(e),z(!0),q(!1),!0)}return!1},I=function(e){var n=e.labelRef,t=e.inputRef,r=e.multiple,i=e.handleChanges,s=e.onDrop,o=(0,a.useState)(!1),l=o[0],d=o[1],p=(0,a.useCallback)((function(){t.current.click()}),[t]),c=(0,a.useCallback)((function(e){e.preventDefault(),e.stopPropagation(),N++,e.dataTransfer.items&&0!==e.dataTransfer.items.length&&d(!0)}),[]),u=(0,a.useCallback)((function(e){e.preventDefault(),e.stopPropagation(),--N>0||d(!1)}),[]),f=(0,a.useCallback)((function(e){e.preventDefault(),e.stopPropagation()}),[]),h=(0,a.useCallback)((function(e){e.preventDefault(),e.stopPropagation(),d(!1),N=0;var n=e.dataTransfer.files;if(n&&n.length>0){var t=r?n:n[0],a=i(t);s&&a&&s(t)}}),[i]);return(0,a.useEffect)((function(){var e=n.current;return e.addEventListener("click",p),e.addEventListener("dragenter",c),e.addEventListener("dragleave",u),e.addEventListener("dragover",f),e.addEventListener("drop",h),function(){e.removeEventListener("click",p),e.removeEventListener("dragenter",c),e.removeEventListener("dragleave",u),e.removeEventListener("dragover",f),e.removeEventListener("drop",h)}}),[p,c,u,f,h,n]),l}({labelRef:V,inputRef:E,multiple:L,handleChanges:A,onDrop:m});return(0,a.useEffect)((function(){null==M||M(I)}),[I]),(0,a.useEffect)((function(){f?(z(!0),D(f)):(E.current&&(E.current.value=""),z(!1),D(null))}),[f]),(0,d.jsxs)(w,c({overRide:l,className:"".concat(o||""," ").concat(g?"is-disabled":""),ref:V,htmlFor:t,onClick:function(e){e.preventDefault(),e.stopPropagation()}},{children:[(0,d.jsx)("input",{onClick:function(e){e.stopPropagation(),E&&E.current&&E.current.click()},onChange:function(e){var n=e.target.files,t=L?n:n[0],r=A(t);v&&r&&v(t)},accept:(n=i,void 0===n?"":n.map((function(e){return".".concat(e.toLowerCase())})).join(",")),ref:E,type:"file",name:t,disabled:g,multiple:L,required:S},void 0),I&&(0,d.jsx)(j,c({style:T},{children:(0,d.jsx)("span",{children:r||"Drop Here"},void 0)}),void 0),!l&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(y,{},void 0),(0,d.jsxs)(b,c({error:W},{children:[H(U,P,W,g,k),(0,d.jsx)(C,{types:i,minSize:u,maxSize:p},void 0)]}),void 0)]},void 0),l]}),void 0)},S=t(1413),M=function(e){return(0,d.jsxs)("svg",(0,S.Z)((0,S.Z)({width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),{},{children:[(0,d.jsx)("mask",{id:"mask0_1358_2908",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:3,y:3,width:18,height:18,children:(0,d.jsx)("path",{d:"M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11Z",fill:"#000000"})}),(0,d.jsx)("g",{mask:"url(#mask0_1358_2908)",children:(0,d.jsx)("path",{d:"M12.8982 14.788L4.30976 5.34073C4.11247 5.12372 3.8328 5 3.53951 5C2.22574 5 1.24039 3.79807 1.49804 2.5098L1.89709 0.514565C2.24766 -1.23828 3.78671 -2.5 5.57426 -2.5H14.2922C18.1528 -2.5 20.0831 -2.5 21.2606 -1.29194C22.438 -0.0838838 22.3886 1.84576 22.2896 5.70506L22 17L18.1773 13.8144C17.9625 13.6354 17.8551 13.546 17.7631 13.4851C16.835 12.871 15.5841 13.1327 14.9799 14.0673C14.92 14.1599 14.8575 14.2849 14.7325 14.535C14.6616 14.6769 14.6261 14.7478 14.5934 14.7974C14.2609 15.3023 13.5599 15.399 13.1032 15.003C13.0583 14.9641 13.0049 14.9054 12.8982 14.788L12.8982 14.788Z",fill:"#2A4157",fillOpacity:.24,stroke:"#222222",strokeWidth:1.2,strokeLinecap:"round"})}),(0,d.jsx)("path",{d:"M3 13V11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H12",stroke:"#222222",strokeWidth:1.2}),(0,d.jsx)("circle",{cx:16.5,cy:7.5,r:1.5,fill:"#222222"}),(0,d.jsx)("path",{d:"M8 16V15.4H8.6V16H8ZM3.37482 20.4685C3.11606 20.6755 2.73848 20.6336 2.53148 20.3748C2.32447 20.1161 2.36643 19.7385 2.62518 19.5315L3.37482 20.4685ZM7.4 21V16H8.6V21H7.4ZM8 16.6H3V15.4H8V16.6ZM8.37482 16.4685L3.37482 20.4685L2.62518 19.5315L7.62518 15.5315L8.37482 16.4685Z",fill:"#222222"})]}))},T=t.p+"static/media/fileUploader.01015b3f84865b71a763.png",V={wrapper:"NewTaskModal_wrapper__jUOhT",taskForm:"NewTaskModal_taskForm__OnhHx",fileUploaderWrapper:"NewTaskModal_fileUploaderWrapper__ALa23",inputWrapper:"NewTaskModal_inputWrapper__qkyC7",image:"NewTaskModal_image__wnxFm",imageShow:"NewTaskModal_imageShow__4LpV4",imageShowBTN:"NewTaskModal_imageShowBTN__3BJvw"},E=t(8427),F=t(2553),P=["JPG","PNG"];function z(e){var n=e.handleModalToggle,t=(0,r.I0)(),i=(0,a.useState)(null),o=(0,s.Z)(i,2),l=o[0],p=o[1],c=(0,a.useState)(!0),u=(0,s.Z)(c,2),f=u[0],h=u[1];return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var r=e.currentTarget,a=new FormData;a.append("title",r.elements.task.value),a.append("reward",+r.elements.point.value),l&&a.append("file",l),t((0,E.vr)(a)).unwrap(),r.reset(),n()},autoComplete:"off",className:V.taskForm,children:[(0,d.jsxs)("div",{className:V.fileUploaderWrapper,children:[(0,d.jsx)("img",{className:"".concat(V.image," ").concat(f&&V.imageShow),src:T,alt:"Add new task",width:"300",height:"150"}),(0,d.jsx)(L,{handleChange:function(e){p(e)},name:"file",type:"file",maxSize:1,classes:"fileUploader",types:P}),(0,d.jsx)("div",{role:"button",title:"You can upload an image",className:V.imageShowBTN,onClick:function(){h((function(e){return!e}))},children:(0,d.jsx)(M,{})})]}),(0,d.jsxs)("div",{className:V.inputWrapper,children:[(0,d.jsx)("input",{className:V.taskFormInput,type:"text",name:"task",placeholder:"Add task...",required:!0}),(0,d.jsx)("input",{className:V.taskFormInput,type:"number",name:"point",placeholder:"Add points...",min:"1",max:"500",required:!0}),(0,d.jsx)("button",{type:"submit",children:"Ok"})]})]})})}function Z(){var e=(0,a.useState)(!1),n=(0,s.Z)(e,2),t=n[0],r=n[1],i=function(){r((function(e){return!e}))};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:o.wrapper,children:[(0,d.jsx)("p",{children:"If you want to get more prizes - add tasks :)"}),(0,d.jsx)("button",{className:o.button,onClick:function(){i()},role:""})]}),t&&(0,d.jsx)(l.Z,{handleModalToggle:i,children:(0,d.jsx)(z,{handleModalToggle:i})})]})}var U=t(4217);function D(){var e=(0,r.v9)(U.rl).rewardsPlanned,n=(0,r.v9)(F.Xg),t=n.length>0&&n[0].date.split("-").reverse()[0],a=n.length>0&&n[6].date.split("-").reverse().join(".");return(0,d.jsxs)("div",{className:i.wrapper,children:[(0,d.jsx)("div",{className:i.col,children:a&&(0,d.jsxs)("p",{children:["Plan for the week",(0,d.jsxs)("span",{className:i.dates,children:[t&&t," - ",a]})]})}),(0,d.jsx)("div",{className:i.col,children:e>0&&(0,d.jsxs)("p",{className:i.rewards,children:["Defined tasks for"," ",(0,d.jsx)("span",{className:i.rewardsPlanned,children:e})," ","points"]})}),(0,d.jsx)("div",{className:i.col,children:(0,d.jsx)(Z,{})})]})}var O=t(6225),W=t(968),q=function(){var e=(0,r.v9)(F.Ak),n=(0,r.I0)();return(0,a.useEffect)((function(){n((0,W.ss)())}),[]),(0,d.jsx)("div",{className:"contentMaxWidth",children:(0,d.jsxs)("div",{className:"pageWrapper",children:[(0,d.jsx)(D,{}),(0,d.jsx)(O.Z,{items:e,page:"planning"})]})})}}}]);
//# sourceMappingURL=731.a4bfb973.chunk.js.map