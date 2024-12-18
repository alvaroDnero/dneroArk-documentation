"use strict";(self.webpackChunkdnero_ark_documentation=self.webpackChunkdnero_ark_documentation||[]).push([[9626],{438:(e,n,s)=>{s.r(n),s.d(n,{apiPath:()=>j,assets:()=>h,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>i,method:()=>x,toc:()=>u});const i=JSON.parse('{"id":"endpoints/Coins/coinsIndividual","title":"Coin","description":"Enpoint example","source":"@site/docs/endpoints/Coins/coinsIndividual.mdx","sourceDirName":"endpoints/Coins","slug":"/endpoints/Coins/coinsIndividual","permalink":"/DneroArk-Documentation/docs/endpoints/Coins/coinsIndividual","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/endpoints/Coins/coinsIndividual.mdx","tags":[],"version":"current","frontMatter":{"id":"coinsIndividual"},"sidebar":"apiSidebar","previous":{"title":"Get Coins","permalink":"/DneroArk-Documentation/docs/endpoints/Coins/coinsAll"},"next":{"title":"Redeem A Coin","permalink":"/DneroArk-Documentation/docs/endpoints/Coins/coinsRedeem"}}');var o=s(4848),r=s(8453),t=s(2097),d=s(4203),c=s(5789);const l={id:"coinsIndividual"},a="Coin",h={},j=d.y.coinsIndividual,x="GET",u=[{value:"Header",id:"header",level:3},{value:"Parameter",id:"parameter",level:3},{value:"JSON Response: Success",id:"json-response-success",level:3},{value:"JSON Response: Error",id:"json-response-error",level:3}];function m(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"coin",children:"Coin"})}),"\n",(0,o.jsxs)("div",{className:"highlight-box",children:[(0,o.jsx)(t.A,{method:x}),j]}),"\n",(0,o.jsxs)(s,{className:"details-custom",children:[(0,o.jsx)("summary",{children:"Enpoint example"}),(0,o.jsx)("div",{className:"examples-style",children:j.replace("{coinId}","444")})]}),"\n",(0,o.jsx)(n.h3,{id:"header",children:"Header"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Key"}),(0,o.jsx)(n.th,{children:"Value"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Accept"})}),(0,o.jsx)(n.td,{children:"application/json"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Authorization"})}),(0,o.jsxs)(n.td,{children:["Bearer ",(0,o.jsx)(n.code,{children:"{accessToken}"})]})]})]})]}),"\n",(0,o.jsx)(n.h3,{id:"parameter",children:"Parameter"}),"\n",(0,o.jsx)("a",{href:`/DneroArk-Documentation/docs/${c.J.parameters}`,children:(0,o.jsx)(n.strong,{children:"Definition for this parameters"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)("a",{href:`/DneroArk-Documentation/docs/${c.J.parameters}`,children:(0,o.jsx)(n.strong,{children:"verbose"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(s,{className:"details-custom",children:[(0,o.jsx)("summary",{children:"Query parameters example: Only Verbose"}),(0,o.jsx)("div",{className:"examples-style",children:(0,o.jsxs)(n.p,{children:[j,(0,o.jsx)(n.code,{children:"?verbose=true"})]})})]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"json-response-success",children:"JSON Response: Success"}),"\n",(0,o.jsx)("div",{className:"table-title",children:(0,o.jsx)(n.p,{children:"Simple Coin Informations"})}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Name"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"coinId"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"long"})}),(0,o.jsx)(n.td,{children:"Unique identifier of the coin."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"coinStatus"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"int"})}),(0,o.jsxs)(n.td,{children:["Coin status must not be zero. For detailed information, see the ",(0,o.jsx)(n.a,{href:"/docs/coinsStatuses",children:"Status Codes page."})]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"latitude"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"double"})}),(0,o.jsx)(n.td,{children:"Latitude of the location where the coin was sent or collected."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"longitude"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"double"})}),(0,o.jsx)(n.td,{children:"Longitude of the location where the coin was sent or collected."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"message"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"string"})}),(0,o.jsx)(n.td,{children:"An optional message or metadata associated with the coin."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"cashAmount"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"double"})}),(0,o.jsx)(n.td,{children:"The dollar equivalent value of the coin."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"senderName"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"string"})}),(0,o.jsx)(n.td,{children:"Name of the person who sent the coin."})]})]})]}),"\n",(0,o.jsxs)(s,{className:"details-custom",open:!0,children:[(0,o.jsx)("summary",{children:"200 OK"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-JSON",children:'{\r\n    "coinId": 123456789,\r\n    "coinStatus": 2,\r\n    "latitude": 37.7749,\r\n    "longitude": -122.4194,\r\n    "message": "Happy Birthday!",\r\n    "cashAmount": 50.25,\r\n    "senderName": "Alice Smith"\r\n}\n'})})]}),"\n",(0,o.jsx)("div",{className:"table-title",children:(0,o.jsx)(n.p,{children:"Coin Verbose Information"})}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Name"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"coinId"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"long"})}),(0,o.jsx)(n.td,{children:"Unique identifier of the coin."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"coinStatus"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"int"})}),(0,o.jsxs)(n.td,{children:["Coin status must not be zero. For detailed information, see the ",(0,o.jsx)(n.a,{href:"/docs/coinsStatuses",children:"Status Codes page."})]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"latitude"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"double"})}),(0,o.jsx)(n.td,{children:"Latitude of the location where the coin was sent or collected."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"longitude"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"double"})}),(0,o.jsx)(n.td,{children:"Longitude of the location where the coin was sent or collected."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"message"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"string"})}),(0,o.jsx)(n.td,{children:"An optional message or metadata associated with the coin."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"cashAmount"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"double"})}),(0,o.jsx)(n.td,{children:"The dollar equivalent value of the coin."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"creationDate"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"DateTime"})}),(0,o.jsx)(n.td,{children:"The date and time when the coin was created."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"expirationDate"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"DateTime"})}),(0,o.jsx)(n.td,{children:"The date and time when the coin will expire. If it does not expire, this value is null."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"redeemedDate"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"DateTime"})}),(0,o.jsx)(n.td,{children:"The date and time when the coin was redeemed. If it has not been redeemed, this value is null."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"userSender"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Object"})}),(0,o.jsxs)(n.td,{children:["Information about the user who sent the coin. See ",(0,o.jsx)(n.a,{href:"/docs/DTO/Objects/userDTO",children:"User Object Details."})]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"userRecipient"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Object"})}),(0,o.jsxs)(n.td,{children:["Information about the user who received the coin. See ",(0,o.jsx)(n.a,{href:"/docs/DTO/Objects/userDTO",children:"User Object Details."})]})]})]})]}),"\n",(0,o.jsxs)(s,{className:"details-custom",open:!0,children:[(0,o.jsx)("summary",{children:"200 OK"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "coinId": 101,\r\n  "coinStatus": 2,\r\n  "latitude": 40.7128,\r\n  "longitude": -74.0060,\r\n  "message": "Happy Birthday!",\r\n  "cashAmount": 25.50,\r\n  "creationDate": "2024-11-20T10:00:00Z",\r\n  "expirationDate": "2024-12-01T00:00:00Z",\r\n  "redeemedDate": null,\r\n  "userSender": {\r\n    "userId": 1001,\r\n    "userName": "Alice Johnson",\r\n    "userImgUrl": "https://example.com/images/alice_johnson.jpg"\r\n  },\r\n  "userRecipient": {\r\n    "userId": 1002,\r\n    "userName": "Bob Williams",\r\n    "userImgUrl": "https://example.com/images/bob_williams.jpg"\r\n  }\r\n}\r\n\r\n\n'})})]}),"\n",(0,o.jsxs)(n.h3,{id:"json-response-error",children:[(0,o.jsx)(n.a,{href:"/docs/DTO/Objects/genericResponseDTO",children:"JSON Response"}),": Error"]}),"\n",(0,o.jsxs)(s,{className:"details-custom",children:[(0,o.jsx)("summary",{children:"400 Bad Request"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\r\n  "event": "INVALID_PARAMETERS",\r\n  "message": "One or more query parameters are invalid or malformed."\r\n}\n'})})]}),"\n",(0,o.jsxs)(s,{className:"details-custom",children:[(0,o.jsx)("summary",{children:"401 Unauthorized"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "event": "UNAUTHORIZED",\r\n  "message": "Authentication failed. Please provide a valid Bearer token."\r\n}\r\n\n'})})]}),"\n",(0,o.jsxs)(s,{className:"details-custom",children:[(0,o.jsx)("summary",{children:"403 Forbidden"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "event": "ACCESS_FORBIDDEN",\r\n  "message": "You do not have permission to access this resource."\r\n}\r\n\n'})})]}),"\n",(0,o.jsxs)(s,{className:"details-custom",children:[(0,o.jsx)("summary",{children:"404 Not Found"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "event": "RESOURCE_NOT_FOUND",\r\n  "message": "No coins were found for the provided filters."\r\n}\r\n\n'})})]}),"\n",(0,o.jsxs)(s,{className:"details-custom",children:[(0,o.jsx)("summary",{children:"422 Unprocessable Entity"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "event": "UNPROCESSABLE_ENTITY",\r\n  "message": "The provided pagination values (page or pageSize) are invalid."\r\n}\r\n\n'})})]}),"\n",(0,o.jsxs)(s,{className:"details-custom",children:[(0,o.jsx)("summary",{children:"429 Too Many Requests"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "event": "TOO_MANY_REQUESTS",\r\n  "message": "You have exceeded the rate limit. Please wait and try again later."\r\n}\r\n\n'})})]}),"\n",(0,o.jsxs)(s,{className:"details-custom",children:[(0,o.jsx)("summary",{children:"500 Internal Server Error"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "event": "INTERNAL_SERVER_ERROR",\r\n  "message": "An unexpected error occurred while processing the request. Please try again later."\r\n}\r\n\n'})})]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},2097:(e,n,s)=>{s.d(n,{A:()=>o});s(6540);var i=s(4848);const o=e=>{let{method:n}=e;const s={GET:"green",POST:"blue",PUT:"orange",PATCH:"orange",DELETE:"red"};return(0,i.jsx)("span",{style:{backgroundColor:s[n]||"black",color:"white",fontWeight:"bold",padding:"0.2em 0.4em",border:`1px solid ${s[n]||"black"}`,borderRadius:"4px"},children:n})}},4203:(e,n,s)=>{s.d(n,{y:()=>i});const i={otp:"/DneroArk/login/otp",login:"/DneroArk/login",updateToken:"/DneroArk/login/updateToken",logout:"/DneroArk/logout",user:"/DneroArk/user",contact:"/DneroArk/user/contacts",transactionsAll:"/DneroArk/transactions",transactionIndividual:"/DneroArk/transactions/{transactionId}",notificationsAll:"/DneroArk/notifications",notificationsIndividual:"/DneroArk/notifications/{notificationId}",coinsAll:"/DneroArk/coins",coinsIndividual:"/DneroArk/coins/{coinId}",coinsDrop:"/DneroArk/coins/Drop",coinsRedeem:"/DneroArk/coins/redeem/{coinId}",coinsPending:"/DneroArk/coins/pending",coinsNumberToCollect:"/DneroArk/coins/pending/count",coinRecieveWebhook:"/DneroArk/coins/CoinRecieveWebhook"}},5789:(e,n,s)=>{s.d(n,{J:()=>i});const i={overview:"Overview",parameters:"parameters",paginator:"paginator",coinStatuses:"coinsStatuses",userObject:"Objects/userObject",phoneObject:"Objects/phoneObject",genericResponse:"Objects/genericResponse",balanceObject:"Objects/balanceObject",dto:"DTO/dto",userDto:"DTO/Objects/userDTO",deviceInfoDto:"DTO/Objects/deviceInfoDto",genericResponseDto:"DTO/Objects/genericResponseDTO",balanceDto:"DTO/Objects/balanceDTO",otpDtoBody:"DTO/login/generateOTP/body",otpDtoResponse:"DTO/login/generateOTP/response",phoneDtoBody:"DTO/login/confirmOTP/body",phoneDtoResponse:"DTO/login/confirmOTP/response",phoneDtoBody:"DTO/login/confirmOTP/body",phoneDtoResponse:"DTO/login/confirmOTP/response",updateTokenDtoBody:"DTO/login/accessToken/body",updateTokenDtoResponse:"DTO/login/accessToken/response",userProfileDto:"DTO/user/userProfile",contactDtoBody:"DTO/user/contacts/body",contactDtoResponse:"DTO/user/contacts/response",transactionsAllDto:"DTO/transactions/allTransactions",transactionIndividualDto:"DTO/transactions/transactionIndividual",coinsAllDtoNormal:"DTO/coins/allCoins/normal",coinsAllDtoVerbose:"DTO/coins/allCoins/verbose",coinsIndividualDtoNormal:"DTO/coins/single/normal",coinsIndividualDtoVerbose:"DTO/coins/single/verbose",coinsNumberToCollectDto:"DTO/coins/numberOfCoinsToCollect",endpoint:"endpoints",otp:"endpoints/login/phoneOTP",phone:"endpoints/login/phone",updateToken:"endpoints/login/accessToken",logout:"endpoints/login/logout",user:"endpoints/user/profile",contact:"endpoints/user/contacts",transactionsAll:"endpoints/transactions/TransactionsAll",transactionIndividual:"endpoints/transactions/TransactionsIndividual",notificationsAll:"endpoints/notifications/NotificationsAll",notificationsIndividual:"endpoints/notifications/NotificationsIndividual",coinsAll:"endpoints/Coins/coinsAll",coinsIndividual:"endpoints/Coins/coinsIndividual",coinsRedeem:"endpoints/Coins/coinsRedeem",coinsDrop:"endpoints/Coins/coinDrop",coinsPending:"endpoints/Coins/coinPending",coinsNumberToCollect:"endpoints/Coins/coinsNumberToCollect",coinRecieveWebhook:"endpoints/Coins/CoinRecieveWebhook"}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>d});var i=s(6540);const o={},r=i.createContext(o);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);