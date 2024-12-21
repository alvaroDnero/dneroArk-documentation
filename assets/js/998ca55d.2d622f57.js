"use strict";(self.webpackChunkdnero_ark_documentation=self.webpackChunkdnero_ark_documentation||[]).push([[2247],{5472:(e,n,s)=>{s.r(n),s.d(n,{apiPath:()=>u,assets:()=>h,contentTitle:()=>l,default:()=>j,frontMatter:()=>d,metadata:()=>r,method:()=>p,toc:()=>m});const r=JSON.parse('{"id":"endpoints/transactions/TransactionsAll","title":"Transactions","description":"Receives a list of transactions, starting from the most recent to the oldest.","source":"@site/docs/endpoints/transactions/TransactionsAll.mdx","sourceDirName":"endpoints/transactions","slug":"/endpoints/transactions/TransactionsAll","permalink":"/DneroArk-Documentation/docs/endpoints/transactions/TransactionsAll","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/endpoints/transactions/TransactionsAll.mdx","tags":[],"version":"current","frontMatter":{"id":"TransactionsAll"},"sidebar":"apiSidebar","previous":{"title":"Validate Phones","permalink":"/DneroArk-Documentation/docs/endpoints/user/contacts"},"next":{"title":"Get A Transaction","permalink":"/DneroArk-Documentation/docs/endpoints/transactions/TransactionsIndividual"}}');var t=s(4848),o=s(8453),i=s(2097),a=s(5789),c=s(4203);const d={id:"TransactionsAll"},l="Transactions",h={},u=c.y.transactionsAll,p="GET",m=[{value:"Header",id:"header",level:3},{value:"Parameter",id:"parameter",level:3},{value:"JSON Response: Success",id:"json-response-success",level:3},{value:"JSON Response: Error",id:"json-response-error",level:3}];function x(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"transactions",children:"Transactions"})}),"\n",(0,t.jsxs)("div",{className:"highlight-box",children:[(0,t.jsx)(i.A,{method:p}),u]}),"\n",(0,t.jsx)(n.p,{children:"Receives a list of transactions, starting from the most recent to the oldest."}),"\n",(0,t.jsx)(n.p,{children:"If no parameters are provided, it returns all notifications from the most recent to the oldest by defaul."}),"\n",(0,t.jsx)(n.h3,{id:"header",children:"Header"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Key"}),(0,t.jsx)(n.th,{children:"Value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Accept"})}),(0,t.jsx)(n.td,{children:"application/json"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Authorization"})}),(0,t.jsxs)(n.td,{children:["Bearer ",(0,t.jsx)(n.code,{children:"{accessToken}"})]})]})]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"parameter",children:"Parameter"}),"\n",(0,t.jsx)("a",{href:`/DneroArk-Documentation/docs/${a.J.parameters}`,children:(0,t.jsx)(n.strong,{children:"Definition for this parameters"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("a",{href:`/DneroArk-Documentation/docs/${a.J.parameters}`,children:(0,t.jsx)(n.strong,{children:"statuses"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("a",{href:`/DneroArk-Documentation/docs/${a.J.parameters}`,children:(0,t.jsx)(n.strong,{children:"pageSize"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("a",{href:`/DneroArk-Documentation/docs/${a.J.parameters}`,children:(0,t.jsx)(n.strong,{children:"page"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("a",{href:`/DneroArk-Documentation/docs/${a.J.parameters}`,children:(0,t.jsx)(n.strong,{children:"sortOrder"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s,{className:"details-custom",children:[(0,t.jsx)("summary",{children:"Query parameters example: Only Status"}),(0,t.jsx)("div",{className:"examples-style",children:(0,t.jsxs)(n.p,{children:[u,(0,t.jsx)(n.code,{children:"?statuses=1,3"})]})})]}),"\n",(0,t.jsxs)(s,{className:"details-custom",children:[(0,t.jsx)("summary",{children:"Query parameters example: Only Paginator"}),(0,t.jsx)("div",{className:"examples-style",children:(0,t.jsxs)(n.p,{children:[u,(0,t.jsx)(n.code,{children:"?pageSize=10&page=2"})]})})]}),"\n",(0,t.jsxs)(s,{className:"details-custom",children:[(0,t.jsx)("summary",{children:"Query parameters example: Only Sort Order"}),(0,t.jsx)("div",{className:"examples-style",children:(0,t.jsxs)(n.p,{children:[u,(0,t.jsx)(n.code,{children:"?sortOrder=DESC"})]})})]}),"\n",(0,t.jsxs)(s,{className:"details-custom",children:[(0,t.jsx)("summary",{children:"Query parameters example: Status & Paginator & Reverse Order"}),(0,t.jsx)("div",{className:"examples-style",children:(0,t.jsxs)(n.p,{children:[u,(0,t.jsx)(n.code,{children:"?statuses=1,2&pageSize=10&page=2&sortOrder=DESC"})]})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"json-response-success",children:"JSON Response: Success"}),"\n",(0,t.jsx)("div",{className:"table-title",children:(0,t.jsx)(n.p,{children:"Transactions values"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"transactionId"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"long"})}),(0,t.jsx)(n.td,{children:"Unique identifier of the transaction notification."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"interactionType"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"int"})}),(0,t.jsxs)(n.td,{children:["Possible values: ",(0,t.jsx)(n.code,{children:"0"})," for sent or ",(0,t.jsx)(n.code,{children:"1"})," received."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"amount"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"The amount of money involved in the transaction."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"coinStatus"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"int"})}),(0,t.jsxs)(n.td,{children:["Coin status must not be zero. For detailed information, see the ",(0,t.jsx)(n.a,{href:"/docs/coinsStatuses",children:"Status Codes page."})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"expirationDate"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"DateTime"})}),(0,t.jsx)(n.td,{children:"Expiration date of the coin."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"capturedDate"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"DateTime"})}),(0,t.jsx)(n.td,{children:"Date when the coin was captured."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"createDate"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"DateTime"})}),(0,t.jsx)(n.td,{children:"Date when the coin was created."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"user"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"object"})}),(0,t.jsxs)(n.td,{children:["If ",(0,t.jsx)(n.code,{children:"interactionType"})," is ",(0,t.jsx)(n.code,{children:"0"})," it\u2019s the recipient's information, ; if ",(0,t.jsx)(n.code,{children:"1"}),", it\u2019s the sender's information. See ",(0,t.jsx)(n.a,{href:"/docs/Objects/userObject",children:" User Object Details."})]})]})]})]}),"\n",(0,t.jsxs)(s,{className:"details-custom",open:!0,children:[(0,t.jsx)("summary",{children:"200 OK: No paginator"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JSON",children:'\r\n{\r\n  "transactions":  \r\n  [\r\n    {\r\n      "transactionId": 301,\r\n      "interactionType": 0,      \r\n      "amount": "50.00",\r\n      "coinStatus": 1,\r\n      "expirationDate": "2024-12-01T00:00:00Z",\r\n      "capturedDate": null,\r\n      "createDate": "2024-11-20T10:00:00Z",\r\n      "user": {\r\n        "userId": 1001,\r\n        "userName": "Alice Johnson",\r\n        "userImgUrl": "https://example.com/images/alice_johnson.jpg"\r\n      }\r\n    },\r\n    {\r\n      "transactionId": 302,\r\n      "interactionType": 1,      \r\n      "amount": "75.25",\r\n      "coinStatus": 2,\r\n      "expirationDate": "2024-12-05T00:00:00Z",\r\n      "capturedDate": "2024-11-27T09:00:00Z",\r\n      "createDate": "2024-11-19T15:45:00Z",\r\n      "user": {\r\n        "userId": 1002,\r\n        "userName": "Bob Williams",\r\n        "userImgUrl": "https://example.com/images/bob_williams.jpg"\r\n      }\r\n    },\r\n    {\r\n      "transactionId": 303,\r\n      "interactionType": 0,      \r\n      "amount": "100.00",\r\n      "coinStatus": 3,\r\n      "expirationDate": "2024-11-30T00:00:00Z",\r\n      "capturedDate": null,\r\n      "createDate": "2024-11-18T12:30:00Z",\r\n      "user": {\r\n        "userId": 1003,\r\n        "userName": "Charlie Davis",\r\n        "userImgUrl": "https://example.com/images/charlie_davis.jpg"\r\n      }\r\n    }\r\n  ]\r\n\r\n}\n'})})]}),"\n",(0,t.jsxs)(s,{className:"details-custom",open:!0,children:[(0,t.jsx)("summary",{children:"200 OK: Paginator"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JSON",children:'\r\n{\r\n  "currentPage": 2,\r\n  "totalPages": 5,\r\n  "pageSize": 10,\r\n  "totalElements": 45,\r\n  "transactions":  \r\n  [\r\n    {\r\n      "transactionId": 301,\r\n      "interactionType": 0,\r\n      "user": {\r\n        "userId": 1001,\r\n        "userName": "Alice Johnson",\r\n        "userImgUrl": "https://example.com/images/alice_johnson.jpg"\r\n      },\r\n      "amount": "50.00",\r\n      "coinStatus": 1,\r\n      "expirationDate": "2024-12-01T00:00:00Z",\r\n      "capturedDate": null,\r\n      "createDate": "2024-11-20T10:00:00Z"\r\n    },\r\n    {\r\n      "transactionId": 302,\r\n      "interactionType": 1,\r\n      "user": {\r\n        "userId": 1002,\r\n        "userName": "Bob Williams",\r\n        "userImgUrl": "https://example.com/images/bob_williams.jpg"\r\n      },\r\n      "amount": "75.25",\r\n      "coinStatus": 2,\r\n      "expirationDate": "2024-12-05T00:00:00Z",\r\n      "capturedDate": "2024-11-27T09:00:00Z",\r\n      "createDate": "2024-11-19T15:45:00Z"\r\n    },\r\n    {\r\n      "transactionId": 303,\r\n      "interactionType": 0,\r\n      "user": {\r\n        "userId": 1003,\r\n        "userName": "Charlie Davis",\r\n        "userImgUrl": "https://example.com/images/charlie_davis.jpg"\r\n      },\r\n      "amount": "100.00",\r\n      "coinStatus": 3,\r\n      "expirationDate": "2024-11-30T00:00:00Z",\r\n      "capturedDate": null,\r\n      "createDate": "2024-11-18T12:30:00Z"\r\n    }\r\n  ]\r\n\r\n}\n'})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.h3,{id:"json-response-error",children:[(0,t.jsx)(n.a,{href:"/docs/Objects/genericResponse",children:"JSON Response"}),": Error"]}),"\n",(0,t.jsxs)(s,{className:"details-custom",children:[(0,t.jsx)("summary",{children:"400 Bad Request"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "event": "INVALID_STATUSES",\r\n  "message": "The provided statuses are invalid or malformed."\r\n}\r\n\n'})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "event": "MISSING_PAGINATION",\r\n  "message": "Both \'pageSize\' and \'page\' are required when using the paginator."\r\n}\r\n\n'})})]}),"\n",(0,t.jsxs)(s,{className:"details-custom",children:[(0,t.jsx)("summary",{children:"401 Unauthorized"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "event": "UNAUTHORIZED",\r\n  "message": "Authentication failed. Please provide a valid Bearer token."\r\n}\r\n\r\n\n'})})]}),"\n",(0,t.jsxs)(s,{className:"details-custom",children:[(0,t.jsx)("summary",{children:"403 Forbidden"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "event": "ACCESS_FORBIDDEN",\r\n  "message": "You do not have permission to access these transactions."\r\n}\r\n\n'})})]}),"\n",(0,t.jsxs)(s,{className:"details-custom",children:[(0,t.jsx)("summary",{children:"404 Not Found"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "event": "TRANSACTIONS_NOT_FOUND",\r\n  "message": "No transactions were found for the given criteria."\r\n}\r\n\n'})})]}),"\n",(0,t.jsxs)(s,{className:"details-custom",children:[(0,t.jsx)("summary",{children:"422 Unprocessable Entity"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "event": "INVALID_PAGE",\r\n  "message": "The page number must be a positive integer starting from 1."\r\n}\r\n\n'})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "event": "INVALID_PAGE_SIZE",\r\n  "message": "The page size must be a positive integer."\r\n}\r\n\n'})})]}),"\n",(0,t.jsxs)(s,{className:"details-custom",children:[(0,t.jsx)("summary",{children:" 500 Internal Server Error"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "event": "INTERNAL_SERVER_ERROR",\r\n  "message": "An unexpected error occurred while validating the OTP. Please try again later."\r\n}\n'})})]})]})}function j(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},2097:(e,n,s)=>{s.d(n,{A:()=>t});s(6540);var r=s(4848);const t=e=>{let{method:n}=e;const s={GET:"green",POST:"blue",PUT:"orange",PATCH:"orange",DELETE:"red"};return(0,r.jsx)("span",{style:{backgroundColor:s[n]||"black",color:"white",fontWeight:"bold",padding:"0.2em 0.4em",border:`1px solid ${s[n]||"black"}`,borderRadius:"4px"},children:n})}},4203:(e,n,s)=>{s.d(n,{y:()=>r});const r={otp:"/DneroArk/login/otp",login:"/DneroArk/login",updateToken:"/DneroArk/login/updateToken",logout:"/DneroArk/logout",user:"/DneroArk/user",balance:"/DneroArk/balance",contact:"/DneroArk/user/contacts",transactionsAll:"/DneroArk/transactions",transactionIndividual:"/DneroArk/transactions/{transactionId}",notificationsAll:"/DneroArk/notifications",notificationsIndividual:"/DneroArk/notifications/{notificationId}",coinsAll:"/DneroArk/coins",coinsIndividual:"/DneroArk/coins/{coinId}",coinsDrop:"/DneroArk/coins/Drop",coinsRedeem:"/DneroArk/coins/redeem/{coinId}",coinsPending:"/DneroArk/coins/pending",coinsNumberToCollect:"/DneroArk/coins/pending/count",coinRecieveWebhook:"/DneroArk/coins/Webhook/Recieve"}},5789:(e,n,s)=>{s.d(n,{J:()=>r});const r={overview:"Overview",parameters:"parameters",paginator:"paginator",coinStatuses:"coinsStatuses",userObject:"Objects/userObject",phoneObject:"Objects/phoneObject",genericResponse:"Objects/genericResponse",balanceObject:"Objects/balanceObject",dto:"DTO/dto",userDto:"DTO/Objects/userDTO",deviceInfoDto:"DTO/Objects/deviceInfoDto",genericResponseDto:"DTO/Objects/genericResponseDTO",balanceDto:"DTO/Objects/balanceDTO",otpDtoBody:"DTO/login/generateOTP/body",otpDtoResponse:"DTO/login/generateOTP/response",phoneDtoBody:"DTO/login/confirmOTP/body",phoneDtoResponse:"DTO/login/confirmOTP/response",phoneDtoBody:"DTO/login/confirmOTP/body",phoneDtoResponse:"DTO/login/confirmOTP/response",updateTokenDtoBody:"DTO/login/accessToken/body",updateTokenDtoResponse:"DTO/login/accessToken/response",userProfileDto:"DTO/user/userProfile",contactDtoBody:"DTO/user/contacts/body",contactDtoResponse:"DTO/user/contacts/response",transactionsAllDto:"DTO/transactions/allTransactions",transactionIndividualDto:"DTO/transactions/transactionIndividual",coinsAllDtoNormal:"DTO/coins/allCoins/normal",coinsAllDtoVerbose:"DTO/coins/allCoins/verbose",coinsIndividualDtoNormal:"DTO/coins/single/normal",coinsIndividualDtoVerbose:"DTO/coins/single/verbose",coinsNumberToCollectDto:"DTO/coins/numberOfCoinsToCollect",endpoint:"endpoints",otp:"endpoints/login/phoneOTP",phone:"endpoints/login/phone",updateToken:"endpoints/login/accessToken",logout:"endpoints/login/logout",user:"endpoints/user/profile",balance:"endpoints/user/balance",contact:"endpoints/user/contacts",transactionsAll:"endpoints/transactions/TransactionsAll",transactionIndividual:"endpoints/transactions/TransactionsIndividual",notificationsAll:"endpoints/notifications/NotificationsAll",notificationsIndividual:"endpoints/notifications/NotificationsIndividual",coinsAll:"endpoints/Coins/coinsAll",coinsIndividual:"endpoints/Coins/coinsIndividual",coinsRedeem:"endpoints/Coins/coinsRedeem",coinsDrop:"endpoints/Coins/coinDrop",coinsPending:"endpoints/Coins/coinPending",coinsNumberToCollect:"endpoints/Coins/coinsNumberToCollect",coinRecieveWebhook:"endpoints/Coins/CoinRecieveWebhook"}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var r=s(6540);const t={},o=r.createContext(t);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);