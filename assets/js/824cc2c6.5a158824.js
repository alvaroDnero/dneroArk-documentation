"use strict";(self.webpackChunkdnero_ark_documentation=self.webpackChunkdnero_ark_documentation||[]).push([[810],{1436:(e,n,s)=>{s.r(n),s.d(n,{apiPath:()=>u,assets:()=>l,contentTitle:()=>d,default:()=>j,frontMatter:()=>a,metadata:()=>o,method:()=>h,toc:()=>p});const o=JSON.parse('{"id":"endpoints/Coins/coinsRedeem","title":"Redeem Coin","description":"Enpoint example","source":"@site/docs/endpoints/Coins/coinRedeem.mdx","sourceDirName":"endpoints/Coins","slug":"/endpoints/Coins/coinsRedeem","permalink":"/DneroArk-Documentation/docs/endpoints/Coins/coinsRedeem","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/endpoints/Coins/coinRedeem.mdx","tags":[],"version":"current","frontMatter":{"id":"coinsRedeem"},"sidebar":"apiSidebar","previous":{"title":"Get A Coin","permalink":"/DneroArk-Documentation/docs/endpoints/Coins/coinsIndividual"},"next":{"title":"Drop A Coin","permalink":"/DneroArk-Documentation/docs/endpoints/Coins/coinDrop"}}');var r=s(4848),i=s(8453),t=s(2097),c=s(4203);s(5789);const a={id:"coinsRedeem"},d="Redeem Coin",l={},u=c.y.coinsRedeem,h="POST",p=[{value:"Header",id:"header",level:2},{value:"JSON Response: Success",id:"json-response-success",level:3},{value:"JSON Response: Error",id:"json-response-error",level:3}];function m(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"redeem-coin",children:"Redeem Coin"})}),"\n",(0,r.jsxs)("div",{className:"highlight-box",children:[(0,r.jsx)(t.A,{method:h}),u]}),"\n",(0,r.jsxs)(s,{className:"details-custom",children:[(0,r.jsx)("summary",{children:"Enpoint example"}),(0,r.jsx)("div",{className:"examples-style",children:u.replace("{coinId}","444")})]}),"\n",(0,r.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Key"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Authorization"})}),(0,r.jsxs)(n.td,{children:["Bearer ",(0,r.jsx)(n.code,{children:"{accessToken}"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Accept"})}),(0,r.jsx)(n.td,{children:"application/json"})]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.h3,{id:"json-response-success",children:[(0,r.jsx)(n.a,{href:"/docs/Objects/genericResponse",children:"JSON Response"}),": Success"]}),"\n",(0,r.jsxs)(s,{className:"details-custom",children:[(0,r.jsx)("summary",{children:"200 OK"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "event": "REDEEM_SUCCESS",\r\n  "message": "Coin successfully redeemed."\r\n}\n'})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.h3,{id:"json-response-error",children:[(0,r.jsx)(n.a,{href:"/docs/Objects/genericResponse",children:"JSON Response"}),": Error"]}),"\n",(0,r.jsxs)(s,{className:"details-custom",children:[(0,r.jsx)("summary",{children:"400 Bad Request"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "event": "COIN_ALREADY_REDEEMED",\r\n  "message": "The coin has already been redeemed."\r\n}\r\n\n'})})]}),"\n",(0,r.jsxs)(s,{className:"details-custom",children:[(0,r.jsx)("summary",{children:"403 Forbidden: Unauthorized Access"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "event": "UNAUTHORIZED_ACCESS",\r\n  "message": "You do not have the necessary permissions to access this resource."\r\n}\r\n\r\n\n'})})]}),"\n",(0,r.jsxs)(s,{className:"details-custom",children:[(0,r.jsx)("summary",{children:" 404 Not Found"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "event": "COIN_NOT_FOUND",\r\n  "message": "The specified coin does not exist."\r\n}\r\n\n'})})]}),"\n",(0,r.jsxs)(s,{className:"details-custom",children:[(0,r.jsx)("summary",{children:"409 Conflict: Concurrent Requests"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "event": "CONCURRENT_REQUESTS",\r\n  "message": "Two requests were made simultaneously for the same resource. Please retry one of them."\r\n}\r\n\r\n\n'})})]}),"\n",(0,r.jsxs)(s,{className:"details-custom",children:[(0,r.jsx)("summary",{children:"429 Too Many Requests"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "event": "TOO_MANY_REQUESTS",\r\n  "message": "You have exceeded the allowed number of requests. Please wait before trying again."\r\n}\r\n\n'})})]}),"\n",(0,r.jsxs)(s,{className:"details-custom",children:[(0,r.jsx)("summary",{children:" 500 Internal Server Error"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "event": "INTERNAL_SERVER_ERROR",\r\n  "message": "An unexpected error occurred. Please try again later."\r\n}\r\n\n'})})]})]})}function j(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},2097:(e,n,s)=>{s.d(n,{A:()=>r});s(6540);var o=s(4848);const r=e=>{let{method:n}=e;const s={GET:"green",POST:"blue",PUT:"orange",PATCH:"orange",DELETE:"red"};return(0,o.jsx)("span",{style:{backgroundColor:s[n]||"black",color:"white",fontWeight:"bold",padding:"0.2em 0.4em",border:`1px solid ${s[n]||"black"}`,borderRadius:"4px"},children:n})}},4203:(e,n,s)=>{s.d(n,{y:()=>o});const o={otp:"/DneroArk/login/otp",login:"/DneroArk/login",updateToken:"/DneroArk/login/updateToken",logout:"/DneroArk/logout",user:"/DneroArk/user",contact:"/DneroArk/user/contacts",transactionsAll:"/DneroArk/transactions",transactionIndividual:"/DneroArk/transactions/{transactionId}",notificationsAll:"/DneroArk/notifications",notificationsIndividual:"/DneroArk/notifications/{notificationId}",coinsAll:"/DneroArk/coins",coinsIndividual:"/DneroArk/coins/{coinId}",coinsDrop:"/DneroArk/coins/Drop",coinsRedeem:"/DneroArk/coins/reedem/{coinId}",coinsPending:"/DneroArk/coins/collectable/pending",coinsNumberToCollect:"/DneroArk/coins/collectable/count"}},5789:(e,n,s)=>{s.d(n,{J:()=>o});const o={overview:"Overview",parameters:"parameters",paginator:"paginator",coinStatuses:"coinsStatuses",userObject:"Objects/userObject",phoneObject:"Objects/phoneObject",genericResponse:"Objects/genericResponse",balanceObject:"Objects/balanceObject",dto:"DTO/dto",userDto:"DTO/Objects/userDTO",deviceInfoDto:"DTO/Objects/deviceInfoDto",genericResponseDto:"DTO/Objects/genericResponseDTO",balanceDto:"DTO/Objects/balanceDTO",endpoint:"endpoints",otp:"endpoints/login/phoneOTP",phone:"endpoints/login/phone",updateToken:"endpoints/login/accessToken",logout:"endpoints/login/logout",user:"endpoints/user/profile",contact:"endpoints/user/contacts",transactionsAll:"endpoints/transactions/TransactionsAll",transactionIndividual:"endpoints/transactions/TransactionsIndividual",notificationsAll:"endpoints/notifications/NotificationsAll",notificationsIndividual:"endpoints/notifications/NotificationsIndividual",coinsAll:"endpoints/Coins/coinsAll",coinsIndividual:"endpoints/Coins/coinsIndividual",coinsRedeem:"endpoints/Coins/coinsRedeem",coinsDrop:"endpoints/Coins/coinDrop",coinsPending:"endpoints/Coins/coinPending",coinsNumberToCollect:"endpoints/Coins/coinsNumberToCollect"}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var o=s(6540);const r={},i=o.createContext(r);function t(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);