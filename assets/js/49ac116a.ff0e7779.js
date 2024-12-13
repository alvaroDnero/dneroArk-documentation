"use strict";(self.webpackChunkdnero_ark_documentation=self.webpackChunkdnero_ark_documentation||[]).push([[1739],{7822:(e,n,o)=>{o.r(n),o.d(n,{apiPath:()=>u,assets:()=>d,contentTitle:()=>l,default:()=>j,frontMatter:()=>a,metadata:()=>s,method:()=>p,toc:()=>h});const s=JSON.parse('{"id":"endpoints/Coins/coinsNumberToCollect","title":"Coin","description":"Header","source":"@site/docs/endpoints/Coins/coinsNumberToCollect.mdx","sourceDirName":"endpoints/Coins","slug":"/endpoints/Coins/coinsNumberToCollect","permalink":"/DneroArk-Documentation/docs/endpoints/Coins/coinsNumberToCollect","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/endpoints/Coins/coinsNumberToCollect.mdx","tags":[],"version":"current","frontMatter":{"id":"coinsNumberToCollect"},"sidebar":"apiSidebar","previous":{"title":"Coins To Collet","permalink":"/DneroArk-Documentation/docs/endpoints/Coins/coinPending"},"next":{"title":"User Profile DTO","permalink":"/DneroArk-Documentation/docs/DTO/Objects/userDTO"}}');var r=o(4848),t=o(8453),i=o(2097),c=o(4203);o(5789);const a={id:"coinsNumberToCollect"},l="Coin",d={},u=c.y.coinsNumberToCollect,p="GET",h=[{value:"Header",id:"header",level:3},{value:"JSON Response: Success",id:"json-response-success",level:3},{value:"JSON Response: Error",id:"json-response-error",level:3}];function m(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components},{Details:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"coin",children:"Coin"})}),"\n",(0,r.jsxs)("div",{className:"highlight-box",children:[(0,r.jsx)(i.A,{method:p}),u]}),"\n",(0,r.jsx)(n.h3,{id:"header",children:"Header"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Key"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Accept"})}),(0,r.jsx)(n.td,{children:"application/json"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Authorization"})}),(0,r.jsxs)(n.td,{children:["Bearer ",(0,r.jsx)(n.code,{children:"{accessToken}"})]})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"json-response-success",children:"JSON Response: Success"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"count"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"int"})}),(0,r.jsx)(n.td,{children:"The total number of coins available for collection."})]})})]}),"\n",(0,r.jsxs)(o,{className:"details-custom",open:!0,children:[(0,r.jsx)("summary",{children:"200 OK"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "count": 42\r\n}\n'})})]}),"\n",(0,r.jsxs)(n.h3,{id:"json-response-error",children:[(0,r.jsx)(n.a,{href:"/docs/Objects/genericResponse",children:"JSON Response"}),": Error"]}),"\n",(0,r.jsxs)(o,{className:"details-custom",children:[(0,r.jsx)("summary",{children:"400 Bad Request"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\r\n  "event": "INVALID_PARAMETERS",\r\n  "message": "One or more query parameters are invalid or malformed."\r\n}\n'})})]}),"\n",(0,r.jsxs)(o,{className:"details-custom",children:[(0,r.jsx)("summary",{children:"401 Unauthorized"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\r\n  "event": "UNAUTHORIZED",\r\n  "message": "Authentication failed. Please provide a valid Bearer token."\r\n}\n'})})]}),"\n",(0,r.jsxs)(o,{className:"details-custom",children:[(0,r.jsx)("summary",{children:"403 Forbidden"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\r\n  "event": "FORBIDDEN",\r\n  "message": "You do not have the necessary permissions to access this resource."\r\n}\n'})})]}),"\n",(0,r.jsxs)(o,{className:"details-custom",children:[(0,r.jsx)("summary",{children:"404 Not Found"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\r\n  "event": "RESOURCE_NOT_FOUND",\r\n  "message": "The requested resource could not be found."\r\n}\n'})})]}),"\n",(0,r.jsxs)(o,{className:"details-custom",children:[(0,r.jsx)("summary",{children:"429 Too Many Requests"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\r\n  "event": "RATE_LIMIT_EXCEEDED",\r\n  "message": "You have exceeded the maximum number of allowed requests. Please try again later."\r\n}\n'})})]}),"\n",(0,r.jsxs)(o,{className:"details-custom",children:[(0,r.jsx)("summary",{children:"500 Internal Server Error"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\r\n  "event": "INTERNAL_SERVER_ERROR",\r\n  "message": "An unexpected error occurred. Please try again later."\r\n}\n'})})]})]})}function j(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},2097:(e,n,o)=>{o.d(n,{A:()=>r});o(6540);var s=o(4848);const r=e=>{let{method:n}=e;const o={GET:"green",POST:"blue",PUT:"orange",PATCH:"orange",DELETE:"red"};return(0,s.jsx)("span",{style:{backgroundColor:o[n]||"black",color:"white",fontWeight:"bold",padding:"0.2em 0.4em",border:`1px solid ${o[n]||"black"}`,borderRadius:"4px"},children:n})}},4203:(e,n,o)=>{o.d(n,{y:()=>s});const s={otp:"/DneroArk/login/otp",login:"/DneroArk/login",updateToken:"/DneroArk/login/updateToken",logout:"/DneroArk/logout",user:"/DneroArk/user",contact:"/DneroArk/user/contacts",transactionsAll:"/DneroArk/transactions",transactionIndividual:"/DneroArk/transactions/{transactionId}",notificationsAll:"/DneroArk/notifications",notificationsIndividual:"/DneroArk/notifications/{notificationId}",coinsAll:"/DneroArk/coins",coinsIndividual:"/DneroArk/coins/{coinId}",coinsDrop:"/DneroArk/coins/Drop",coinsRedeem:"/DneroArk/coins/reedem/{coinId}",coinsPending:"/DneroArk/coins/collectable/pending",coinsNumberToCollect:"/DneroArk/coins/collectable/count"}},5789:(e,n,o)=>{o.d(n,{J:()=>s});const s={overview:"Overview",parameters:"parameters",paginator:"paginator",coinStatuses:"coinsStatuses",userObject:"Objects/userObject",phoneObject:"Objects/phoneObject",genericResponse:"Objects/genericResponse",balanceObject:"Objects/balanceObject",dto:"DTO/dto",userDto:"DTO/Objects/userDTO",deviceInfoDto:"DTO/Objects/deviceInfoDto",genericResponseDto:"DTO/Objects/genericResponseDTO",balanceDto:"DTO/Objects/balanceDTO",otpDtoBody:"DTO/login/generateOTP/body",otpDtoResponse:"DTO/login/generateOTP/response",phoneDtoBody:"DTO/login/confirmOTP/body",phoneDtoResponse:"DTO/login/confirmOTP/response",phoneDtoBody:"DTO/login/confirmOTP/body",phoneDtoResponse:"DTO/login/confirmOTP/response",updateTokenDtoBody:"DTO/login/accessToken/body",updateTokenDtoResponse:"DTO/login/accessToken/response",userProfileDto:"DTO/user/userProfile",contactDtoBody:"DTO/user/contacts/body",contactDtoResponse:"DTO/user/contacts/response",transactionsAllDto:"DTO/transactions/allTransactions",transactionIndividualDto:"DTO/transactions/transactionIndividual",coinsAllDtoNormal:"DTO/coins/allCoins/normal",coinsAllDtoVerbose:"DTO/coins/allCoins/verbose",coinsIndividualDtoNormal:"DTO/coins/single/normal",coinsIndividualDtoVerbose:"DTO/coins/single/verbose",coinsNumberToCollectDto:"DTO/coins/numberOfCoinsToCollect",endpoint:"endpoints",otp:"endpoints/login/phoneOTP",phone:"endpoints/login/phone",updateToken:"endpoints/login/accessToken",logout:"endpoints/login/logout",user:"endpoints/user/profile",contact:"endpoints/user/contacts",transactionsAll:"endpoints/transactions/TransactionsAll",transactionIndividual:"endpoints/transactions/TransactionsIndividual",notificationsAll:"endpoints/notifications/NotificationsAll",notificationsIndividual:"endpoints/notifications/NotificationsIndividual",coinsAll:"endpoints/Coins/coinsAll",coinsIndividual:"endpoints/Coins/coinsIndividual",coinsRedeem:"endpoints/Coins/coinsRedeem",coinsDrop:"endpoints/Coins/coinDrop",coinsPending:"endpoints/Coins/coinPending",coinsNumberToCollect:"endpoints/Coins/coinsNumberToCollect"}},8453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>c});var s=o(6540);const r={},t=s.createContext(r);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);