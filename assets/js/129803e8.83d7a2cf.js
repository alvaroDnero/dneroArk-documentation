"use strict";(self.webpackChunkdnero_ark_documentation=self.webpackChunkdnero_ark_documentation||[]).push([[3697],{3344:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>h,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>o,toc:()=>p});const o=JSON.parse('{"id":"endpoints","title":"Endpoints","description":"Here is a list of the scopes you require to access the API Endpoints and Webhook Events.","source":"@site/docs/endpoints.mdx","sourceDirName":".","slug":"/endpoints","permalink":"/DneroArk-Documentation/docs/endpoints","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/endpoints.mdx","tags":[],"version":"current","frontMatter":{"id":"endpoints"},"sidebar":"apiSidebar","previous":{"title":"Generic Request Response","permalink":"/DneroArk-Documentation/docs/Objects/genericResponse"},"next":{"title":"Generate OTP","permalink":"/DneroArk-Documentation/docs/endpoints/login/phoneOTP"}}');var i=s(4848),t=s(8453),r=s(2097),c=s(5789),d=s(4203);const a={id:"endpoints"},l="Endpoints",h={},p=[{value:"Login",id:"login",level:2},{value:"User",id:"user",level:2},{value:"Transactions",id:"transactions",level:2},{value:"Coins",id:"coins",level:2}];function u(n){const e={h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"endpoints",children:"Endpoints"})}),"\n",(0,i.jsx)(e.p,{children:"Here is a list of the scopes you require to access the API Endpoints and Webhook Events."}),"\n",(0,i.jsx)(e.h2,{id:"login",children:"Login"}),"\n",(0,i.jsxs)("div",{className:"endpoint-list",children:[(0,i.jsxs)("div",{className:"highlight-box post",children:[(0,i.jsx)(r.A,{method:"POST"}),(0,i.jsx)("a",{href:`./${c.J.otp}`,children:(0,i.jsx)(e.strong,{children:d.y.otp})})]}),(0,i.jsxs)("div",{className:"highlight-box post",children:[(0,i.jsx)(r.A,{method:"POST"}),(0,i.jsx)("a",{href:`./${c.J.phone}`,children:(0,i.jsx)(e.strong,{children:d.y.login})})]}),(0,i.jsxs)("div",{className:"highlight-box post",children:[(0,i.jsx)(r.A,{method:"POST"}),(0,i.jsx)("a",{href:`./${c.J.updateToken}`,children:(0,i.jsx)(e.strong,{children:d.y.updateToken})})]}),(0,i.jsxs)("div",{className:"highlight-box post",children:[(0,i.jsx)(r.A,{method:"POST"}),(0,i.jsx)("a",{href:`./${c.J.logout}`,children:(0,i.jsx)(e.strong,{children:d.y.logout})})]})]}),"\n",(0,i.jsx)(e.h2,{id:"user",children:"User"}),"\n",(0,i.jsx)("div",{className:"endpoint-list",children:(0,i.jsxs)("div",{className:"highlight-box get",children:[(0,i.jsx)(r.A,{method:"GET"}),(0,i.jsx)("a",{href:`./${c.J.user}`,children:(0,i.jsx)(e.strong,{children:d.y.user})})]})}),"\n",(0,i.jsx)("div",{className:"endpoint-list",children:(0,i.jsxs)("div",{className:"highlight-box get",children:[(0,i.jsx)(r.A,{method:"POST"}),(0,i.jsx)("a",{href:`./${c.J.contact}`,children:(0,i.jsx)(e.strong,{children:d.y.contact})})]})}),"\n",(0,i.jsx)(e.h2,{id:"transactions",children:"Transactions"}),"\n",(0,i.jsxs)("div",{className:"endpoint-list",children:[(0,i.jsxs)("div",{className:"highlight-box get",children:[(0,i.jsx)(r.A,{method:"GET"}),(0,i.jsx)("a",{href:`./${c.J.transactionsAll}`,children:(0,i.jsx)(e.strong,{children:d.y.transactionsAll})})]}),(0,i.jsxs)("div",{className:"highlight-box get",children:[(0,i.jsx)(r.A,{method:"GET"}),(0,i.jsx)("a",{href:`./${c.J.transactionIndividual}`,children:(0,i.jsx)(e.strong,{children:d.y.transactionIndividual})})]})]}),"\n",(0,i.jsx)(e.h2,{id:"coins",children:"Coins"}),"\n",(0,i.jsxs)("div",{className:"endpoint-list",children:[(0,i.jsxs)("div",{className:"highlight-box get",children:[(0,i.jsx)(r.A,{method:"GET"}),(0,i.jsx)("a",{href:`./${c.J.coinsAll}`,children:(0,i.jsx)(e.strong,{children:d.y.coinsAll})})]}),(0,i.jsxs)("div",{className:"highlight-box get",children:[(0,i.jsx)(r.A,{method:"GET"}),(0,i.jsx)("a",{href:`./${c.J.coinsIndividual}`,children:(0,i.jsx)(e.strong,{children:d.y.coinsIndividual})})]}),(0,i.jsxs)("div",{className:"highlight-box get",children:[(0,i.jsx)(r.A,{method:"POST"}),(0,i.jsx)("a",{href:`./${c.J.coinsRedeem}`,children:(0,i.jsx)(e.strong,{children:d.y.coinsRedeem})})]}),(0,i.jsxs)("div",{className:"highlight-box get",children:[(0,i.jsx)(r.A,{method:"POST"}),(0,i.jsx)("a",{href:`./${c.J.coinsDrop}`,children:(0,i.jsx)(e.strong,{children:d.y.coinsDrop})})]})]})]})}function g(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},2097:(n,e,s)=>{s.d(e,{A:()=>i});s(6540);var o=s(4848);const i=n=>{let{method:e}=n;const s={GET:"green",POST:"blue",PUT:"orange",PATCH:"orange",DELETE:"red"};return(0,o.jsx)("span",{style:{backgroundColor:s[e]||"black",color:"white",fontWeight:"bold",padding:"0.2em 0.4em",border:`1px solid ${s[e]||"black"}`,borderRadius:"4px"},children:e})}},4203:(n,e,s)=>{s.d(e,{y:()=>o});const o={otp:"/DneroArk/login/otp",login:"/DneroArk/login",updateToken:"/DneroArk/login/updateToken",logout:"/DneroArk/logout",user:"/DneroArk/user",contact:"/DneroArk/user/contacts",transactionsAll:"/DneroArk/transactions",transactionIndividual:"/DneroArk/transactions/{transactionId}",notificationsAll:"/DneroArk/notifications",notificationsIndividual:"/DneroArk/notifications/{notificationId}",coinsAll:"/DneroArk/coins",coinsIndividual:"/DneroArk/coins/{coinId}",coinsDrop:"/DneroArk/coins/Drop",coinsRedeem:"/DneroArk/coins/reedem/{coinId}",coinsPending:"/DneroArk/coins/collectable/pending",coinsNumberToCollect:"/DneroArk/coins/collectable/count"}},5789:(n,e,s)=>{s.d(e,{J:()=>o});const o={overview:"Overview",parameters:"parameters",paginator:"paginator",coinStatuses:"coinsStatuses",userObject:"Objects/userObject",phoneObject:"Objects/phoneObject",genericResponse:"Objects/genericResponse",balanceObject:"Objects/balanceObject",dto:"DTO/dto",userDto:"DTO/Objects/userDTO",deviceInfoDto:"DTO/Objects/deviceInfoDto",genericResponseDto:"DTO/Objects/genericResponseDTO",balanceDto:"DTO/Objects/balanceDTO",endpoint:"endpoints",otp:"endpoints/login/phoneOTP",phone:"endpoints/login/phone",updateToken:"endpoints/login/accessToken",logout:"endpoints/login/logout",user:"endpoints/user/profile",contact:"endpoints/user/contacts",transactionsAll:"endpoints/transactions/TransactionsAll",transactionIndividual:"endpoints/transactions/TransactionsIndividual",notificationsAll:"endpoints/notifications/NotificationsAll",notificationsIndividual:"endpoints/notifications/NotificationsIndividual",coinsAll:"endpoints/Coins/coinsAll",coinsIndividual:"endpoints/Coins/coinsIndividual",coinsRedeem:"endpoints/Coins/coinsRedeem",coinsDrop:"endpoints/Coins/coinDrop",coinsPending:"endpoints/Coins/coinPending",coinsNumberToCollect:"endpoints/Coins/coinsNumberToCollect"}},8453:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>c});var o=s(6540);const i={},t=o.createContext(i);function r(n){const e=o.useContext(t);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),o.createElement(t.Provider,{value:e},n.children)}}}]);