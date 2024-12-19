"use strict";(self.webpackChunkdnero_ark_documentation=self.webpackChunkdnero_ark_documentation||[]).push([[3283],{9976:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>u,contentTitle:()=>a,default:()=>D,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"coinsStatuses","title":"Coin Statuses","description":"| Status Code | Description                                                                 |","source":"@site/docs/coinStatus.mdx","sourceDirName":".","slug":"/coinsStatuses","permalink":"/DneroArk-Documentation/docs/coinsStatuses","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/coinStatus.mdx","tags":[],"version":"current","frontMatter":{"id":"coinsStatuses"},"sidebar":"apiSidebar","previous":{"title":"Paginator","permalink":"/DneroArk-Documentation/docs/paginator"},"next":{"title":"Endpoints","permalink":"/DneroArk-Documentation/docs/endpoints"}}');var t=o(4848),i=o(8453),r=o(2097),c=o(5789),d=o(4203);const l={id:"coinsStatuses"},a="Coin Statuses",u={},h=[{value:"It is used in the following endpoints.",id:"it-is-used-in-the-following-endpoints",level:2},{value:"Transactions",id:"transactions",level:3},{value:"Coins",id:"coins",level:3}];function p(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"coin-statuses",children:"Coin Statuses"})}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{style:{textAlign:"center"},children:(0,t.jsx)(e.strong,{children:"Status Code"})}),(0,t.jsx)(e.th,{children:(0,t.jsx)(e.strong,{children:"Description"})})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{style:{textAlign:"center"},children:(0,t.jsx)(e.code,{children:"0"})}),(0,t.jsxs)(e.td,{children:["Status zero does not exist, but if used as a ",(0,t.jsx)("a",{href:`./${c.J.parameters}`,children:(0,t.jsx)(e.strong,{children:"parameter"})}),", it will return coins from all statuses."]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{style:{textAlign:"center"},children:(0,t.jsx)(e.code,{children:"1"})}),(0,t.jsx)(e.td,{children:"Pending."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{style:{textAlign:"center"},children:(0,t.jsx)(e.code,{children:"2"})}),(0,t.jsx)(e.td,{children:"Collected."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{style:{textAlign:"center"},children:(0,t.jsx)(e.code,{children:"3"})}),(0,t.jsx)(e.td,{children:"Expired."})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"it-is-used-in-the-following-endpoints",children:"It is used in the following endpoints."}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.h3,{id:"transactions",children:"Transactions"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)("div",{className:"endpoint-list",children:[(0,t.jsxs)("div",{className:"highlight-box get",children:[(0,t.jsx)(r.A,{method:"GET"}),(0,t.jsx)("a",{href:`./${c.J.transactionsAll}`,children:(0,t.jsx)(e.strong,{children:d.y.transactionsAll})})]}),(0,t.jsxs)("div",{className:"highlight-box get",children:[(0,t.jsx)(r.A,{method:"GET"}),(0,t.jsx)("a",{href:`./${c.J.transactionIndividual}`,children:(0,t.jsx)(e.strong,{children:d.y.transactionIndividual})})]})]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.h3,{id:"coins",children:"Coins"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)("div",{className:"endpoint-list",children:(0,t.jsxs)("div",{className:"highlight-box get",children:[(0,t.jsx)(r.A,{method:"GET"}),(0,t.jsx)("a",{href:`./${c.J.coinsAll}`,children:(0,t.jsx)(e.strong,{children:d.y.coinsAll})})]})})]})}function D(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(p,{...n})}):p(n)}},2097:(n,e,o)=>{o.d(e,{A:()=>t});o(6540);var s=o(4848);const t=n=>{let{method:e}=n;const o={GET:"green",POST:"blue",PUT:"orange",PATCH:"orange",DELETE:"red"};return(0,s.jsx)("span",{style:{backgroundColor:o[e]||"black",color:"white",fontWeight:"bold",padding:"0.2em 0.4em",border:`1px solid ${o[e]||"black"}`,borderRadius:"4px"},children:e})}},4203:(n,e,o)=>{o.d(e,{y:()=>s});const s={otp:"/DneroArk/login/otp",login:"/DneroArk/login",updateToken:"/DneroArk/login/updateToken",logout:"/DneroArk/logout",user:"/DneroArk/user",contact:"/DneroArk/user/contacts",transactionsAll:"/DneroArk/transactions",transactionIndividual:"/DneroArk/transactions/{transactionId}",notificationsAll:"/DneroArk/notifications",notificationsIndividual:"/DneroArk/notifications/{notificationId}",coinsAll:"/DneroArk/coins",coinsIndividual:"/DneroArk/coins/{coinId}",coinsDrop:"/DneroArk/coins/Drop",coinsRedeem:"/DneroArk/coins/redeem/{coinId}",coinsPending:"/DneroArk/coins/pending",coinsNumberToCollect:"/DneroArk/coins/pending/count",coinRecieveWebhook:"/DneroArk/coins/CoinRecieveWebhook"}},5789:(n,e,o)=>{o.d(e,{J:()=>s});const s={overview:"Overview",parameters:"parameters",paginator:"paginator",coinStatuses:"coinsStatuses",userObject:"Objects/userObject",phoneObject:"Objects/phoneObject",genericResponse:"Objects/genericResponse",balanceObject:"Objects/balanceObject",dto:"DTO/dto",userDto:"DTO/Objects/userDTO",deviceInfoDto:"DTO/Objects/deviceInfoDto",genericResponseDto:"DTO/Objects/genericResponseDTO",balanceDto:"DTO/Objects/balanceDTO",otpDtoBody:"DTO/login/generateOTP/body",otpDtoResponse:"DTO/login/generateOTP/response",phoneDtoBody:"DTO/login/confirmOTP/body",phoneDtoResponse:"DTO/login/confirmOTP/response",phoneDtoBody:"DTO/login/confirmOTP/body",phoneDtoResponse:"DTO/login/confirmOTP/response",updateTokenDtoBody:"DTO/login/accessToken/body",updateTokenDtoResponse:"DTO/login/accessToken/response",userProfileDto:"DTO/user/userProfile",contactDtoBody:"DTO/user/contacts/body",contactDtoResponse:"DTO/user/contacts/response",transactionsAllDto:"DTO/transactions/allTransactions",transactionIndividualDto:"DTO/transactions/transactionIndividual",coinsAllDtoNormal:"DTO/coins/allCoins/normal",coinsAllDtoVerbose:"DTO/coins/allCoins/verbose",coinsIndividualDtoNormal:"DTO/coins/single/normal",coinsIndividualDtoVerbose:"DTO/coins/single/verbose",coinsNumberToCollectDto:"DTO/coins/numberOfCoinsToCollect",endpoint:"endpoints",otp:"endpoints/login/phoneOTP",phone:"endpoints/login/phone",updateToken:"endpoints/login/accessToken",logout:"endpoints/login/logout",user:"endpoints/user/profile",contact:"endpoints/user/contacts",transactionsAll:"endpoints/transactions/TransactionsAll",transactionIndividual:"endpoints/transactions/TransactionsIndividual",notificationsAll:"endpoints/notifications/NotificationsAll",notificationsIndividual:"endpoints/notifications/NotificationsIndividual",coinsAll:"endpoints/Coins/coinsAll",coinsIndividual:"endpoints/Coins/coinsIndividual",coinsRedeem:"endpoints/Coins/coinsRedeem",coinsDrop:"endpoints/Coins/coinDrop",coinsPending:"endpoints/Coins/coinPending",coinsNumberToCollect:"endpoints/Coins/coinsNumberToCollect",coinRecieveWebhook:"endpoints/Coins/CoinRecieveWebhook"}},8453:(n,e,o)=>{o.d(e,{R:()=>r,x:()=>c});var s=o(6540);const t={},i=s.createContext(t);function r(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);