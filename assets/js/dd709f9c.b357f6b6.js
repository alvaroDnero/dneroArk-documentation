"use strict";(self.webpackChunkdnero_ark_documentation=self.webpackChunkdnero_ark_documentation||[]).push([[4943],{1276:(e,n,o)=>{o.r(n),o.d(n,{apiPath:()=>u,assets:()=>l,contentTitle:()=>d,default:()=>g,frontMatter:()=>a,metadata:()=>s,method:()=>h,toc:()=>p});const s=JSON.parse('{"id":"endpoints/login/logout","title":"Logout","description":"Header","source":"@site/docs/endpoints/login/LoginLogout.mdx","sourceDirName":"endpoints/login","slug":"/endpoints/login/logout","permalink":"/DneroArk-Documentation/docs/endpoints/login/logout","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/endpoints/login/LoginLogout.mdx","tags":[],"version":"current","frontMatter":{"id":"logout"},"sidebar":"apiSidebar","previous":{"title":"Update User Tokens","permalink":"/DneroArk-Documentation/docs/endpoints/login/accessToken"},"next":{"title":"User Profile","permalink":"/DneroArk-Documentation/docs/endpoints/user/profile"}}');var r=o(4848),t=o(8453),i=o(2097),c=o(4203);const a={id:"logout"},d="Logout",l={},u=c.y.logout,h="POST",p=[{value:"Header",id:"header",level:3},{value:"JSON Response: Success",id:"json-response-success",level:3},{value:"JSON Response: Error",id:"json-response-error",level:3}];function m(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",hr:"hr",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components},{Details:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"logout",children:"Logout"})}),"\n",(0,r.jsxs)("div",{className:"highlight-box",children:[(0,r.jsx)(i.A,{method:h}),u]}),"\n",(0,r.jsx)(n.h3,{id:"header",children:"Header"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Key"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Authorization"})}),(0,r.jsxs)(n.td,{children:["Bearer ",(0,r.jsx)(n.code,{children:"{accessToken}"})]})]})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.h3,{id:"json-response-success",children:[(0,r.jsx)(n.a,{href:"/docs/Objects/genericResponse",children:"JSON Response"}),": Success"]}),"\n",(0,r.jsxs)(o,{className:"details-custom",open:!0,children:[(0,r.jsx)("summary",{children:"200 OK"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "type": "LOGOUT_SUCCESS",\r\n  "message": "The session was successfully terminated."\r\n}\n'})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.h3,{id:"json-response-error",children:[(0,r.jsx)(n.a,{href:"/docs/Objects/genericResponse",children:"JSON Response"}),": Error"]}),"\n",(0,r.jsxs)(o,{className:"details-custom",children:[(0,r.jsx)("summary",{children:"400 Bad Request"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "type": "INVALID_REQUEST",\r\n  "message": "The authorization token is required."\r\n}\n'})})]}),"\n",(0,r.jsxs)(o,{className:"details-custom",children:[(0,r.jsx)("summary",{children:"401 Unauthorized"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "type": "TOKEN_INVALID",\r\n  "message": "The authorization token is invalid or has expired."\r\n}\n'})})]}),"\n",(0,r.jsxs)(o,{className:"details-custom",children:[(0,r.jsx)("summary",{children:" 403 Forbidden"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "type": "TOKEN_FORBIDDEN",\r\n  "message": "You do not have permission to log out from this session."\r\n}\r\n\n'})})]}),"\n",(0,r.jsxs)(o,{className:"details-custom",children:[(0,r.jsx)("summary",{children:" 500 Internal Server Error"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "event": "INTERNAL_SERVER_ERROR",\r\n  "message": "An unexpected error occurred while validating the OTP. Please try again later."\r\n}\r\n\n'})})]})]})}function g(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},2097:(e,n,o)=>{o.d(n,{A:()=>r});o(6540);var s=o(4848);const r=e=>{let{method:n}=e;const o={GET:"green",POST:"blue",PUT:"orange",PATCH:"orange",DELETE:"red"};return(0,s.jsx)("span",{style:{backgroundColor:o[n]||"black",color:"white",fontWeight:"bold",padding:"0.2em 0.4em",border:`1px solid ${o[n]||"black"}`,borderRadius:"4px"},children:n})}},4203:(e,n,o)=>{o.d(n,{y:()=>s});const s={otp:"/DneroArk/login/otp",login:"/DneroArk/login",updateToken:"/DneroArk/login/updateToken",logout:"/DneroArk/logout",user:"/DneroArk/user",contact:"/DneroArk/user/contacts",transactionsAll:"/DneroArk/transactions",transactionIndividual:"/DneroArk/transactions/{transactionId}",notificationsAll:"/DneroArk/notifications",notificationsIndividual:"/DneroArk/notifications/{notificationId}",coinsAll:"/DneroArk/coins",coinsIndividual:"/DneroArk/coins/{coinId}",coinsDrop:"/DneroArk/coins/Drop",coinsRedeem:"/DneroArk/coins/reedem/{coinId}",coinsPending:"/DneroArk/coins/collectable/pending",coinsNumberToCollect:"/DneroArk/coins/collectable/count"}},8453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>c});var s=o(6540);const r={},t=s.createContext(r);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);