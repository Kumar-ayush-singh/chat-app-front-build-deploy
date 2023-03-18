"use strict";(self.webpackChunkchat=self.webpackChunkchat||[]).push([[483],{3483:function(n,e,a){a.r(e),a.d(e,{default:function(){return N}});var r,t,o,i=a(168),s=a(9439),l=a(2791),c=a(7692),d=a(6444),p=a(2440),m=a(1413),h=a(9434),x=a(9341),u=a(7689),g=a(4872),f=a(184),v=d.ZP.section(r||(r=(0,i.Z)(["\n.form-row{\n    label{\n        display: block;\n        padding-bottom: 5px;\n    }\n    input{\n        border: none;\n        outline: none;\n        border-radius: 5px;\n        background: var(--thm-transparent2-color);\n        color: white;\n        font-size: 15px;\n\n        &::placeholder{\n            color: var(--thm-transparent2-color);\n            font-style: italic;\n        }\n    }\n}\n  .submit {\n    width: 100%;\n    font-size: 15px;\n    margin-top: 30px;\n  }\n"]))),j=function(){(0,u.s0)();var n=(0,h.I0)(),e=(0,h.v9)((function(n){return n.user})).isLogedIn;console.log(e);var a=(0,l.useState)({email:"",password:""}),r=(0,s.Z)(a,2),t=r[0],o=r[1];console.log(t);var i=function(n){var e=n.target.name,a=n.target.value;console.log(e,a),t[e]=a,o((0,m.Z)({},t))};return(0,f.jsxs)(v,{children:[e&&(0,f.jsx)(u.Fg,{to:"/chat-page",replace:!0}),(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(t),n((0,x.pH)((0,m.Z)({},t)))},children:[(0,f.jsxs)("div",{className:"form-row",children:[(0,f.jsx)("label",{htmlFor:"",children:"Email"}),(0,f.jsx)("input",{type:"text",className:"form-input",value:t.email,onChange:i,name:"email",placeholder:"Type Email"})]}),(0,f.jsxs)("div",{className:"form-row",children:[(0,f.jsx)("label",{htmlFor:"",children:"Password"}),(0,f.jsx)("input",{type:"text",className:"form-input",name:"password",value:t.password,onChange:i,placeholder:"Type Password"})]}),(0,f.jsx)(g.Z,{btn_name:"Continue",className:"submit"})]})]})},b=d.ZP.section(t||(t=(0,i.Z)(["\n.form-row{\n    label{\n        display: block;\n        padding-bottom: 5px;\n    }\n    input{\n        border: none;\n        outline: none;\n        border-radius: 5px;\n        background: var(--thm-transparent2-color);\n        color: white;\n        font-size: 15px;\n\n        &::placeholder{\n            color: var(--thm-transparent2-color);\n            font-style: italic;\n        }\n    }\n}\n  .submit {\n    width: 100%;\n    font-size: 15px;\n    margin-top: 30px;\n  }\n"]))),w=function(){var n=(0,h.I0)(),e=((0,u.s0)(),(0,l.useState)({name:"",email:"",password:""})),a=(0,s.Z)(e,2),r=a[0],t=a[1],o=(0,h.v9)((function(n){return n.user})).isLogedIn,i=function(n){var e=n.target.name,a=n.target.value;console.log(e,a),r[e]=a,t((0,m.Z)({},r))};return(0,f.jsxs)(b,{children:[o&&(0,f.jsx)(u.Fg,{to:"/select-avatar",replace:!0}),(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(r),n((0,x.a$)((0,m.Z)((0,m.Z)({},r),{},{email:r.email})))},children:[(0,f.jsxs)("div",{className:"form-row",children:[(0,f.jsx)("label",{htmlFor:"",children:"Name"}),(0,f.jsx)("input",{type:"text",className:"form-input",name:"name",value:r.name,onChange:i,placeholder:"Type Name"})]}),(0,f.jsxs)("div",{className:"form-row",children:[(0,f.jsx)("label",{htmlFor:"",children:"Email"}),(0,f.jsx)("input",{type:"text",className:"form-input",name:"email",value:r.email,onChange:i,placeholder:"Type Email"})]}),(0,f.jsxs)("div",{className:"form-row",children:[(0,f.jsx)("label",{htmlFor:"",children:"Password"}),(0,f.jsx)("input",{type:"text",className:"form-input",name:"password",value:r.password,onChange:i,placeholder:"Type Password"})]}),(0,f.jsx)(g.Z,{btn_name:"Continue",className:"submit"})]})]})},y=d.ZP.section(o||(o=(0,i.Z)(["\n--container-padding: 20px;\nwidth: 100%;\ndisplay: flex;\njustify-content: center;\npadding: 50px 0px;\ncolor: white;\nfont-size: 16px;\nfont-weight: 500;\n\n\n.container{\n  background: var(--thm-transparent-color);\n  max-width: 600px;\n  min-width: 350px;\n  border-radius: 15px;\n  overflow: hidden;\n  \n  .head{\n    padding: var(--container-padding);\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    align-items: center;\n    position: relative;\n    font-size: 20px;\n    font-weight: 700;\n  \n    svg{\n      width: 100px;\n      height: 100px;\n    }\n\n    .background{\n      position: absolute;\n      top: -90%;\n      left: -25px;\n      background: var(--thm-gradient);\n      width: calc(100% + 50px);\n      height: 200%;\n      border-radius: 50%;\n      z-index: -1;\n    }\n  }\n\n\n  .form-container{\n    margin-top: 30px;\n    padding: var(--container-padding);\n\n    article{\n      font-style: italic;\n      font-weight: lighter;\n      font-size: 0.9em;\n      margin-top: 10px;\n      \n      p{\n        margin: 0;\n      }\n      \n      span{\n        color: var(--btn-color);\n        cursor: pointer;\n        font-style: normal;\n        margin-left: 10px;\n        text-decoration: underline;\n\n        &:hover{\n          font-weight: 500;\n        }\n      }\n    } \n  }\n}\n"]))),N=function(){var n=(0,l.useState)(!0),e=(0,s.Z)(n,2),a=e[0],r=e[1],t=function(){r(!a)};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(p.Z,{}),(0,f.jsx)(y,{children:(0,f.jsxs)("div",{className:"container",children:[(0,f.jsxs)("div",{className:"head",children:[(0,f.jsx)(c.EDj,{}),a?"Member LogIn":"Member Register",(0,f.jsx)("div",{className:"background"})]}),(0,f.jsxs)("div",{className:"form-container",children:[a?(0,f.jsx)(j,{}):(0,f.jsx)(w,{}),(0,f.jsx)("div",{children:a?(0,f.jsx)("article",{children:(0,f.jsxs)("p",{children:["Not a member? ",(0,f.jsx)("span",{onClick:t,children:" Register"})]})}):(0,f.jsxs)("article",{children:["Already a member? ",(0,f.jsx)("span",{onClick:t,children:" Log in"})]})})]})]})})]})}}}]);
//# sourceMappingURL=483.2bceef2e.chunk.js.map