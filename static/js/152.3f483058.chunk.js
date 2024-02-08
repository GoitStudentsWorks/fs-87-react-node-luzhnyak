"use strict";(self.webpackChunkaqua_frontend=self.webpackChunkaqua_frontend||[]).push([[152],{9200:(a,e,t)=>{t.d(e,{c:()=>V});var r,o,s,i,n=t(9060),c=t(2622),l=t(12),m=t(4568),u=t(4980),d=t(9560);function h(){return h=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(a[r]=t[r])}return a},h.apply(this,arguments)}function _(a,e){let{title:t,titleId:c,...l}=a;return n.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",width:2443,height:2500,preserveAspectRatio:"xMidYMid",viewBox:"0 0 256 262",ref:e,"aria-labelledby":c},l),t?n.createElement("title",{id:c},t):null,r||(r=n.createElement("path",{fill:"#4285F4",d:"M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"})),o||(o=n.createElement("path",{fill:"#34A853",d:"M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"})),s||(s=n.createElement("path",{fill:"#FBBC05",d:"M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"})),i||(i=n.createElement("path",{fill:"#EB4335",d:"M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"})))}const p=n.forwardRef(_),x=(t.p,"AuthForm_form__N+Fyz"),g="AuthForm_formControl__VYgdV",j="AuthForm_formTitle__0PyEt",w="AuthForm_formLabel__F52GG",N="AuthForm_stack__Vuhvv",f="AuthForm_input__dB7h2",F="AuthForm_inputBox__yk1gs",v="AuthForm_inputBoxRep__hDfDU",z="AuthForm_iconeye__t4-zU",A="AuthForm_inputpassword__vsklt",b="AuthForm_button__+RFEI",y="AuthForm_googleText__BflEO",P="AuthForm_googleLogin__PKj3V",q="AuthForm_errormessage__DNtrg",E="AuthForm_errorBorder__kBgak",k="AuthForm_errorInput__Pe3yE",S="AuthForm_signup__RwzVe",B="AuthForm_signupText__IUjJs",R="AuthForm_signin__SLR7t",T="AuthForm_signinText__lcC-y",C="AuthForm_forgotPassword__5joJ+",I="AuthForm_wraplink__+UEao",M="AuthForm_googleIcon__g+782";var L=t(9204),O=t(2496);const V=a=>{let{formTitle:e,onSubmit:t}=a;const{t:r}=(0,L.Gy)(),[o,s]=(0,n.useState)(!1),[i,h]=(0,n.useState)(!1),_={email:"",password:"",...e==="".concat(r("authorization.register"))&&{repeatPassword:""}},V=m.kt({email:m.Qb().email("".concat(r("authorization.errors.validEmail"))).required("".concat(r("authorization.errors.emailReq"))),password:m.Qb().required("".concat(r("authorization.errors.passwordReq"))).min(8,"".concat(r("authorization.errors.passwordLeast"))).max(64,"".concat(r("authorization.errors.passwordLess"))),...e==="".concat(r("authorization.register"))&&{repeatPassword:m.Qb().oneOf([m.IL("password"),void 0],"".concat(r("authorization.errors.passwordMatch"))).required("".concat(r("authorization.errors.repeatPasswordReq")))}});return(0,O.jsx)(c.QJ,{initialValues:_,validationSchema:V,onSubmit:t,children:a=>{let{errors:t,touched:n}=a;return(0,O.jsxs)(c.QF,{className:x,children:[(0,O.jsx)("h1",{className:j,children:e}),(0,O.jsxs)("div",{className:g,children:[(0,O.jsxs)("div",{className:N,children:[(0,O.jsx)("label",{className:w,htmlFor:"unique-id1",children:r("authorization.email")}),(0,O.jsx)(c.IN,{id:"unique-id1",className:"".concat(f," ").concat(t.email&&n.email?E:""," ").concat(t.email&&n.email?k:""),name:"email",type:"email",placeholder:r("authorization.emailText")}),(0,O.jsx)(c.mS,{name:"email",component:"div",className:q})]}),(0,O.jsxs)("div",{className:N,children:[(0,O.jsx)("label",{className:w,htmlFor:"unique-id2",children:r("authorization.password")}),(0,O.jsxs)("div",{className:"".concat(F," ").concat(t.password&&n.password?E:""),children:[(0,O.jsx)(c.IN,{id:"unique-id2",className:"".concat(A,"  ").concat(t.password&&n.password?k:""),name:"password",type:o?"text":"password",placeholder:r("authorization.passwordText")}),(0,O.jsx)("div",{className:z,onClick:()=>s(!o),style:{cursor:"pointer",marginTop:"auto",marginBottom:"auto"},children:o?(0,O.jsx)(d._,{}):(0,O.jsx)(u._,{})})]}),(0,O.jsx)(c.mS,{name:"password",component:"div",className:q})]}),e==="".concat(r("authorization.register"))&&(0,O.jsxs)("div",{className:N,children:[(0,O.jsx)("label",{className:w,htmlFor:"unique-id3",children:r("authorization.repeat")}),(0,O.jsxs)("div",{className:"".concat(v," ").concat(t.repeatPassword&&n.repeatPassword?E:""),children:[(0,O.jsx)(c.IN,{id:"unique-id3",className:"".concat(A,"  ").concat(t.repeatPassword&&n.repeatPassword?k:""),name:"repeatPassword",type:i?"text":"password",placeholder:r("authorization.repeatText")}),(0,O.jsx)("div",{className:z,onClick:()=>h(!i),style:{cursor:"pointer",marginTop:"auto",marginBottom:"auto"},children:i?(0,O.jsx)(d._,{}):(0,O.jsx)(u._,{})})]}),(0,O.jsx)(c.mS,{name:"repeatPassword",component:"div",className:q})]}),(0,O.jsx)("button",{className:b,type:"submit",children:e==="".concat(r("authorization.login"))?"".concat(r("authorization.login")):"".concat(r("authorization.register"))}),(0,O.jsxs)("a",{href:"https://aqua-backend-ieu7.onrender.com/auth/google",className:P,children:[(0,O.jsx)(p,{className:M}),(0,O.jsx)("p",{className:y,children:r("authorization.enterWithGoogle")})]}),(0,O.jsx)("div",{className:I,children:e==="".concat(r("authorization.login"))?(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(l.cH,{to:"/signup",className:S,children:(0,O.jsx)("p",{className:B,children:r("authorization.register")})}),(0,O.jsx)(l.cH,{to:"/forgot-password",className:C,children:(0,O.jsxs)("p",{className:B,children:[r("authorization.forgot"),"?"]})})]}):(0,O.jsx)(l.cH,{to:"/signin",className:R,children:(0,O.jsx)("p",{className:T,children:r("authorization.login")})})})]})]})}})}},4152:(a,e,t)=>{t.r(e),t.d(e,{default:()=>_});var r=t(9060),o=t(1560),s=t(624),i=t(6480),n=t(8568),c=t(9200),l=t(9908),m=t(9252),u=t(9204),d=t(8420),h=t(2496);const _=()=>{const{t:a}=(0,u.Gy)(),e=(0,s.OY)(),[t,_]=(0,r.useState)(!1),p=(0,s.w1)(d.gp),x=(0,s.w1)(d.mE),g=(0,r.useRef)(!1);return(0,r.useEffect)((()=>{g.current&&400===(null===x||void 0===x?void 0:x.errorCode)&&i.m4.error("".concat(a("authorization.notification.errorReg"))),g.current=!0}),[x,a]),t?(0,h.jsx)(o.YX,{to:"/signin"}):(0,h.jsx)("section",{className:m.c.section,children:(0,h.jsx)("div",{className:m.c.container,children:(0,h.jsxs)("div",{className:m.c.mainstr,children:[(0,h.jsx)(c.c,{formTitle:a("authorization.register"),onSubmit:async(t,r)=>{let{resetForm:o}=r;const{repeatPassword:s,...n}=t;await e((0,l.SY)(n)),o(),_(!0),i.m4.success("".concat(a("authorization.notification.successReg")))}}),p&&(0,h.jsx)(n.c,{})]})})})}},9252:(a,e,t)=>{t.d(e,{c:()=>r});const r={section:"AuthPage_section__05Tdp",container:"AuthPage_container__YIM88",mainstr:"AuthPage_mainstr__D49SA"}}}]);
//# sourceMappingURL=152.3f483058.chunk.js.map