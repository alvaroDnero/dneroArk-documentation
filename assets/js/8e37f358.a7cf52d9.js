"use strict";(self.webpackChunkdnero_ark_documentation=self.webpackChunkdnero_ark_documentation||[]).push([[5698],{1051:(e,n,r)=>{r.r(n),r.d(n,{apiPath:()=>m,assets:()=>u,contentTitle:()=>d,default:()=>x,frontMatter:()=>l,metadata:()=>s,method:()=>h,toc:()=>p});const s=JSON.parse('{"id":"endpoints/Coins/coinPending","title":"Coins","description":"Header","source":"@site/docs/endpoints/Coins/coinPending.mdx","sourceDirName":"endpoints/Coins","slug":"/endpoints/Coins/coinPending","permalink":"/DneroArk-Documentation/docs/endpoints/Coins/coinPending","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/endpoints/Coins/coinPending.mdx","tags":[],"version":"current","frontMatter":{"id":"coinPending"},"sidebar":"apiSidebar","previous":{"title":"Drop A Coin","permalink":"/DneroArk-Documentation/docs/endpoints/Coins/coinDrop"},"next":{"title":"Number of coins to collect","permalink":"/DneroArk-Documentation/docs/endpoints/Coins/coinsNumberToCollect"}}');var i=r(4848),o=r(8453),a=r(2097),t=r(4203),c=r(5789);const l={id:"coinPending"},d="Coins",u={},m=t.y.coinsPending,h="GET",p=[{value:"Header",id:"header",level:3},{value:"Parameter",id:"parameter",level:3},{value:"JSON Response: Success",id:"json-response-success",level:3},{value:"JSON Response: Error",id:"json-response-error",level:3}];function g(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"coins",children:"Coins"})}),"\n",(0,i.jsxs)("div",{className:"highlight-box",children:[(0,i.jsx)(a.A,{method:h}),m]}),"\n",(0,i.jsx)(n.h3,{id:"header",children:"Header"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Key"}),(0,i.jsx)(n.th,{children:"Value"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Accept"})}),(0,i.jsx)(n.td,{children:"application/json"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Authorization"})}),(0,i.jsxs)(n.td,{children:["Bearer ",(0,i.jsx)(n.code,{children:"{accessToken}"})]})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"parameter",children:"Parameter"}),"\n",(0,i.jsx)("a",{href:`/DneroArk-Documentation/docs/${c.J.parameters}`,children:(0,i.jsx)(n.strong,{children:"Definition for this parameters"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("a",{href:`/DneroArk-Documentation/docs/${c.J.parameters}`,children:(0,i.jsx)(n.strong,{children:"verbose"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("a",{href:`/DneroArk-Documentation/docs/${c.J.parameters}`,children:(0,i.jsx)(n.strong,{children:"pageSize"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("a",{href:`/DneroArk-Documentation/docs/${c.J.parameters}`,children:(0,i.jsx)(n.strong,{children:"page"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("a",{href:`/DneroArk-Documentation/docs/${c.J.parameters}`,children:(0,i.jsx)(n.strong,{children:"sortOrder"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r,{className:"details-custom",children:[(0,i.jsx)("summary",{children:"Query parameters example: Only Paginator"}),(0,i.jsx)("div",{className:"examples-style",children:(0,i.jsxs)(n.p,{children:[m,(0,i.jsx)(n.code,{children:"?pageSize=10&page=2"})]})})]}),"\n",(0,i.jsxs)(r,{className:"details-custom",children:[(0,i.jsx)("summary",{children:"Query parameters example: Only Reverse Order"}),(0,i.jsx)("div",{className:"examples-style",children:(0,i.jsxs)(n.p,{children:[m,(0,i.jsx)(n.code,{children:"?reverseOrder=false"})]})})]}),"\n",(0,i.jsxs)(r,{className:"details-custom",children:[(0,i.jsx)("summary",{children:"Query parameters example: Only Verbose"}),(0,i.jsx)("div",{className:"examples-style",children:(0,i.jsxs)(n.p,{children:[m,(0,i.jsx)(n.code,{children:"?verbose=true"})]})})]}),"\n",(0,i.jsxs)(r,{className:"details-custom",children:[(0,i.jsx)("summary",{children:"Query parameters example: Status, Paginator, Reverse Order, Verbose"}),(0,i.jsx)("div",{className:"examples-style",children:(0,i.jsxs)(n.p,{children:[m,(0,i.jsx)(n.code,{children:"?statuses=1&pageSize=10&page=2&reverseOrder=false&verbose=true"})]})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"json-response-success",children:"JSON Response: Success"}),"\n",(0,i.jsxs)(n.p,{children:["It will return coins with ",(0,i.jsx)(n.a,{href:"/docs/coinsStatuses",children:"status 1."}),",  specifically those coins where the user is the recipient."]}),"\n",(0,i.jsxs)(n.p,{children:["The information will be the same as the ",(0,i.jsx)("a",{href:`/DneroArk-Documentation/docs/${c.J.coinsAll}`,children:(0,i.jsx)(n.strong,{children:t.y.coinsAll})})," endpoint."]}),"\n",(0,i.jsxs)(r,{className:"details-custom",children:[(0,i.jsx)("summary",{children:"200 OK: No paginator"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JSON",children:'[\r\n  {\r\n    "coinId": 123456789,\r\n    "coinStatus": 2,\r\n    "latitude": 37.7749,\r\n    "longitude": -122.4194,\r\n    "message": "Happy Birthday!",\r\n    "dollarAmount": 50.25,\r\n    "senderName": "Alice Smith"\r\n  },\r\n  {\r\n    "coinId": 987654321,\r\n    "coinStatus": 1,\r\n    "latitude": 40.7128,\r\n    "longitude": -74.0060,\r\n    "message": "Thank you for your help!",\r\n    "dollarAmount": 100.00,\r\n    "senderName": "Charlie Brown"\r\n  }\r\n]\r\n\r\n\n'})})]}),"\n",(0,i.jsxs)(r,{className:"details-custom",children:[(0,i.jsx)("summary",{children:"200 OK: Paginator"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "currentPage": 1,\r\n  "totalPages": 5,\r\n  "pageSize": 2,\r\n  "totalCoins": 10,\r\n  "coins": [\r\n    {\r\n      "coinId": 123456789,\r\n      "coinStatus": 2,\r\n      "latitude": 37.7749,\r\n      "longitude": -122.4194,\r\n      "message": "Happy Birthday!",\r\n      "dollarAmount": 50.25,\r\n      "senderName": "Alice Smith"\r\n    },\r\n    {\r\n      "coinId": 987654321,\r\n      "coinStatus": 1,\r\n      "latitude": 40.7128,\r\n      "longitude": -74.0060,\r\n      "message": "Thank you for your help!",\r\n      "dollarAmount": 100.00,\r\n      "senderName": "Charlie Brown"\r\n    }\r\n  ]\r\n}\r\n\r\n\n'})})]}),"\n",(0,i.jsxs)(r,{className:"details-custom",children:[(0,i.jsx)("summary",{children:"200 OK: Verbose without paginator"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JSON",children:'{\r\n"coins": \r\n[\r\n  {\r\n    "coinId": 101,\r\n    "coinStatus": 2,\r\n    "latitude": 40.7128,\r\n    "longitude": -74.0060,\r\n    "message": "Happy Birthday!",\r\n    "dollarAmount": 25.50,\r\n    "creationDate": "2024-11-20T10:00:00Z",\r\n    "expirationDate": "2024-12-01T00:00:00Z",\r\n    "redeemedDate": null,\r\n    "userSender": {\r\n      "userId": 1001,\r\n      "userName": "Alice Johnson",\r\n      "userImgUrl": "https://example.com/images/alice_johnson.jpg"\r\n    },\r\n    "userRecipient": {\r\n      "userId": 1002,\r\n      "userName": "Bob Williams",\r\n      "userImgUrl": "https://example.com/images/bob_williams.jpg"\r\n    }\r\n  },\r\n  {\r\n    "coinId": 102,\r\n    "coinStatus": 1,\r\n    "latitude": 34.0522,\r\n    "longitude": -118.2437,\r\n    "message": "Thank you for your help!",\r\n    "dollarAmount": 50.00,\r\n    "creationDate": "2024-11-18T15:30:00Z",\r\n    "expirationDate": "2024-11-30T00:00:00Z",\r\n    "redeemedDate": "2024-11-25T12:00:00Z",\r\n    "userSender": {\r\n      "userId": 1003,\r\n      "userName": "Charlie Davis",\r\n      "userImgUrl": "https://example.com/images/charlie_davis.jpg"\r\n    },\r\n    "userRecipient": {\r\n      "userId": 1004,\r\n      "userName": "Dana White",\r\n      "userImgUrl": "https://example.com/images/dana_white.jpg"\r\n    }\r\n  }\r\n]\r\n\r\n}\r\n\n'})})]}),"\n",(0,i.jsxs)(r,{className:"details-custom",children:[(0,i.jsx)("summary",{children:"200 OK: Verbose with paginator"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "currentPage": 1,\r\n  "totalPages": 5,\r\n  "pageSize": 2,\r\n  "totalCoins": 10,\r\n  "coins": \r\n  [\r\n    {\r\n      "coinId": 101,\r\n      "coinStatus": 1,\r\n      "latitude": 40.7128,\r\n      "longitude": -74.0060,\r\n      "message": "Happy Birthday!",\r\n      "dollarAmount": 25.50,\r\n      "creationDate": "2024-11-20T10:00:00Z",\r\n      "expirationDate": "2024-12-01T00:00:00Z",\r\n      "redeemedDate": null,\r\n      "userSender": {\r\n        "userId": 1001,\r\n        "userName": "Alice Johnson",\r\n        "userImgUrl": "https://example.com/images/alice_johnson.jpg"\r\n      },\r\n      "userRecipient": {\r\n        "userId": 1002,\r\n        "userName": "Bob Williams",\r\n        "userImgUrl": "https://example.com/images/bob_williams.jpg"\r\n      }\r\n    },\r\n    {\r\n      "coinId": 102,\r\n      "coinStatus": 2,\r\n      "latitude": 34.0522,\r\n      "longitude": -118.2437,\r\n      "message": "Thank you for your help!",\r\n      "dollarAmount": 50.00,\r\n      "creationDate": "2024-11-18T15:30:00Z",\r\n      "expirationDate": "2024-11-30T00:00:00Z",\r\n      "redeemedDate": "2024-11-25T12:00:00Z",\r\n      "userSender": {\r\n        "userId": 1003,\r\n        "userName": "Charlie Davis",\r\n        "userImgUrl": "https://example.com/images/charlie_davis.jpg"\r\n      },\r\n      "userRecipient": {\r\n        "userId": 1004,\r\n        "userName": "Dana White",\r\n        "userImgUrl": "https://example.com/images/dana_white.jpg"\r\n      }\r\n    }\r\n  ]\r\n\r\n}\r\n\n'})})]}),"\n",(0,i.jsxs)(n.h3,{id:"json-response-error",children:[(0,i.jsx)(n.a,{href:"/docs/Objects/genericResponse",children:"JSON Response"}),": Error"]}),"\n",(0,i.jsxs)(r,{className:"details-custom",children:[(0,i.jsx)("summary",{children:"400 Bad Request"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\r\n  "event": "INVALID_PARAMETERS",\r\n  "message": "One or more query parameters are invalid or malformed."\r\n}\n'})})]}),"\n",(0,i.jsxs)(r,{className:"details-custom",children:[(0,i.jsx)("summary",{children:"401 Unauthorized"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "event": "UNAUTHORIZED",\r\n  "message": "Authentication failed. Please provide a valid Bearer token."\r\n}\r\n\n'})})]}),"\n",(0,i.jsxs)(r,{className:"details-custom",children:[(0,i.jsx)("summary",{children:"403 Forbidden"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "event": "ACCESS_FORBIDDEN",\r\n  "message": "You do not have permission to access this resource."\r\n}\r\n\n'})})]}),"\n",(0,i.jsxs)(r,{className:"details-custom",children:[(0,i.jsx)("summary",{children:"404 Not Found"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "event": "RESOURCE_NOT_FOUND",\r\n  "message": "No coins were found for the provided filters."\r\n}\r\n\n'})})]}),"\n",(0,i.jsxs)(r,{className:"details-custom",children:[(0,i.jsx)("summary",{children:"422 Unprocessable Entity"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "event": "UNPROCESSABLE_ENTITY",\r\n  "message": "The provided pagination values (page or pageSize) are invalid."\r\n}\r\n\n'})})]}),"\n",(0,i.jsxs)(r,{className:"details-custom",children:[(0,i.jsx)("summary",{children:"429 Too Many Requests"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "event": "TOO_MANY_REQUESTS",\r\n  "message": "You have exceeded the rate limit. Please wait and try again later."\r\n}\r\n\n'})})]}),"\n",(0,i.jsxs)(r,{className:"details-custom",children:[(0,i.jsx)("summary",{children:"500 Internal Server Error"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "event": "INTERNAL_SERVER_ERROR",\r\n  "message": "An unexpected error occurred while processing the request. Please try again later."\r\n}\r\n\n'})})]})]})}function x(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},2097:(e,n,r)=>{r.d(n,{A:()=>i});r(6540);var s=r(4848);const i=e=>{let{method:n}=e;const r={GET:"green",POST:"blue",PUT:"orange",PATCH:"orange",DELETE:"red"};return(0,s.jsx)("span",{style:{backgroundColor:r[n]||"black",color:"white",fontWeight:"bold",padding:"0.2em 0.4em",border:`1px solid ${r[n]||"black"}`,borderRadius:"4px"},children:n})}},4203:(e,n,r)=>{r.d(n,{y:()=>s});const s={otp:"/DneroArk/login/otp",login:"/DneroArk/login",updateToken:"/DneroArk/login/updateToken",logout:"/DneroArk/logout",user:"/DneroArk/user",contact:"/DneroArk/user/contacts",transactionsAll:"/DneroArk/transactions",transactionIndividual:"/DneroArk/transactions/{transactionId}",notificationsAll:"/DneroArk/notifications",notificationsIndividual:"/DneroArk/notifications/{notificationId}",coinsAll:"/DneroArk/coins",coinsIndividual:"/DneroArk/coins/{coinId}",coinsDrop:"/DneroArk/coins/Drop",coinsRedeem:"/DneroArk/coins/reedem/{coinId}",coinsPending:"/DneroArk/coins/collectable/pending",coinsNumberToCollect:"/DneroArk/coins/collectable/count"}},5789:(e,n,r)=>{r.d(n,{J:()=>s});const s={overview:"Overview",parameters:"parameters",paginator:"paginator",coinStatuses:"coinsStatuses",userObject:"Objects/userObject",phoneObject:"Objects/phoneObject",genericResponse:"Objects/genericResponse",balanceObject:"Objects/balanceObject",dto:"DTO/dto",userDto:"DTO/Objects/userDTO",deviceInfoDto:"DTO/Objects/deviceInfoDto",genericResponseDto:"DTO/Objects/genericResponseDTO",balanceDto:"DTO/Objects/balanceDTO",endpoint:"endpoints",otp:"endpoints/login/phoneOTP",phone:"endpoints/login/phone",updateToken:"endpoints/login/accessToken",logout:"endpoints/login/logout",user:"endpoints/user/profile",contact:"endpoints/user/contacts",transactionsAll:"endpoints/transactions/TransactionsAll",transactionIndividual:"endpoints/transactions/TransactionsIndividual",notificationsAll:"endpoints/notifications/NotificationsAll",notificationsIndividual:"endpoints/notifications/NotificationsIndividual",coinsAll:"endpoints/Coins/coinsAll",coinsIndividual:"endpoints/Coins/coinsIndividual",coinsRedeem:"endpoints/Coins/coinsRedeem",coinsDrop:"endpoints/Coins/coinDrop",coinsPending:"endpoints/Coins/coinPending",coinsNumberToCollect:"endpoints/Coins/coinsNumberToCollect"}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>t});var s=r(6540);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);