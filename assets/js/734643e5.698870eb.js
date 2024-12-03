"use strict";(self.webpackChunkdnero_ark_documentation=self.webpackChunkdnero_ark_documentation||[]).push([[1722],{9427:(e,n,r)=>{r.r(n),r.d(n,{apiPath:()=>x,assets:()=>h,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>s,method:()=>j,toc:()=>u});const s=JSON.parse('{"id":"endpoints/Coins/coinsAll","title":"Coins","description":"Header","source":"@site/docs/endpoints/Coins/coinsAll.mdx","sourceDirName":"endpoints/Coins","slug":"/endpoints/Coins/coinsAll","permalink":"/DneroArk-Documentation/docs/endpoints/Coins/coinsAll","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/endpoints/Coins/coinsAll.mdx","tags":[],"version":"current","frontMatter":{"id":"coinsAll"},"sidebar":"apiSidebar","previous":{"title":"Notification","permalink":"/DneroArk-Documentation/docs/endpoints/notifications/NotificationsIndividual"},"next":{"title":"Coin","permalink":"/DneroArk-Documentation/docs/endpoints/Coins/coinsIndividual"}}');var i=r(4848),d=r(8453),t=r(2097),l=r(4203),o=r(5789);const c={id:"coinsAll"},a="Coins",h={},x=l.y.coinsAll,j="GET",u=[{value:"Header",id:"header",level:3},{value:"Parameter",id:"parameter",level:3},{value:"JSON Response: Success",id:"json-response-success",level:3},{value:"JSON Response: Error",id:"json-response-error",level:3}];function m(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"coins",children:"Coins"})}),"\n",(0,i.jsxs)("div",{className:"highlight-box",children:[(0,i.jsx)(t.A,{method:j}),x]}),"\n",(0,i.jsx)(n.h3,{id:"header",children:"Header"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Key"}),(0,i.jsx)(n.th,{children:"Value"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Accept"})}),(0,i.jsx)(n.td,{children:"application/json"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Authorization"})}),(0,i.jsx)(n.td,{children:"Bearer key"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"parameter",children:"Parameter"}),"\n",(0,i.jsx)("a",{href:`/DneroArk-Documentation/docs/${o.J.parameters}`,children:(0,i.jsx)(n.strong,{children:"Definition for this parameters"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"statuses"}),"\n",(0,i.jsx)(n.li,{children:"pageSize"}),"\n",(0,i.jsx)(n.li,{children:"page"}),"\n",(0,i.jsx)(n.li,{children:"reverseOrder"}),"\n",(0,i.jsx)(n.li,{children:"verbose"}),"\n"]}),"\n",(0,i.jsxs)(r,{className:"details-custom",children:[(0,i.jsx)("summary",{children:"Query parameters example: Only Status"}),(0,i.jsx)("div",{className:"examples-style",children:(0,i.jsxs)(n.p,{children:[x,(0,i.jsx)(n.code,{children:"?statuses=1,3"})]})})]}),"\n",(0,i.jsxs)(r,{className:"details-custom",children:[(0,i.jsx)("summary",{children:"Query parameters example: Only Paginator"}),(0,i.jsx)("div",{className:"examples-style",children:(0,i.jsxs)(n.p,{children:[x,(0,i.jsx)(n.code,{children:"?pageSize=10&page=2"})]})})]}),"\n",(0,i.jsxs)(r,{className:"details-custom",children:[(0,i.jsx)("summary",{children:"Query parameters example: Only Reverse Order"}),(0,i.jsx)("div",{className:"examples-style",children:(0,i.jsxs)(n.p,{children:[x,(0,i.jsx)(n.code,{children:"?reverseOrder=false"})]})})]}),"\n",(0,i.jsxs)(r,{className:"details-custom",children:[(0,i.jsx)("summary",{children:"Query parameters example: Only Verbose"}),(0,i.jsx)("div",{className:"examples-style",children:(0,i.jsxs)(n.p,{children:[x,(0,i.jsx)(n.code,{children:"?verbose=true"})]})})]}),"\n",(0,i.jsxs)(r,{className:"details-custom",children:[(0,i.jsx)("summary",{children:"Query parameters example: Status, Paginator, Reverse Order, Verbose"}),(0,i.jsx)("div",{className:"examples-style",children:(0,i.jsxs)(n.p,{children:[x,(0,i.jsx)(n.code,{children:"?statuses=1&pageSize=10&page=2&reverseOrder=false&verbose=true"})]})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"json-response-success",children:"JSON Response: Success"}),"\n",(0,i.jsx)("div",{className:"table-title",children:(0,i.jsx)(n.p,{children:"Simple Coin Informations"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"coinId"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"long"})}),(0,i.jsx)(n.td,{children:"Unique identifier of the coin."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"coinStatus"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"int"})}),(0,i.jsxs)(n.td,{children:["Coin status must not be zero. For detailed information, see the ",(0,i.jsx)(n.a,{href:"/docs/coinsStatuses",children:"Status Codes page."})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"latitude"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"double"})}),(0,i.jsx)(n.td,{children:"Latitude of the location where the coin was sent or collected."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"longitude"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"double"})}),(0,i.jsx)(n.td,{children:"Longitude of the location where the coin was sent or collected."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"message"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"An optional message or metadata associated with the coin."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"dollarAmount"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"double"})}),(0,i.jsx)(n.td,{children:"The dollar equivalent value of the coin."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"senderName"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"Name of the person who sent the coin."})]})]})]}),"\n",(0,i.jsxs)(r,{className:"details-custom",children:[(0,i.jsx)("summary",{children:"200 OK: No paginator"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JSON",children:'[\r\n  {\r\n    "coinId": 123456789,\r\n    "coinStatus": 1,\r\n    "latitude": 37.7749,\r\n    "longitude": -122.4194,\r\n    "message": "Happy Birthday!",\r\n    "dollarAmount": 50.25,\r\n    "senderName": "Alice Smith"\r\n  },\r\n  {\r\n    "coinId": 987654321,\r\n    "coinStatus": 2,\r\n    "latitude": 40.7128,\r\n    "longitude": -74.0060,\r\n    "message": "Thank you for your help!",\r\n    "dollarAmount": 100.00,\r\n    "senderName": "Charlie Brown"\r\n  }\r\n]\r\n\r\n\n'})})]}),"\n",(0,i.jsxs)(r,{className:"details-custom",children:[(0,i.jsx)("summary",{children:"200 OK: Paginator"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "currentPage": 1,\r\n  "totalPages": 5,\r\n  "pageSize": 2,\r\n  "totalCoins": 10,\r\n  "coins": [\r\n    {\r\n      "coinId": 123456789,\r\n      "coinStatus": 1,\r\n      "latitude": 37.7749,\r\n      "longitude": -122.4194,\r\n      "message": "Happy Birthday!",\r\n      "dollarAmount": 50.25,\r\n      "senderName": "Alice Smith"\r\n    },\r\n    {\r\n      "coinId": 987654321,\r\n      "coinStatus": 2,\r\n      "latitude": 40.7128,\r\n      "longitude": -74.0060,\r\n      "message": "Thank you for your help!",\r\n      "dollarAmount": 100.00,\r\n      "senderName": "Charlie Brown"\r\n    }\r\n  ]\r\n}\r\n\r\n\n'})})]}),"\n",(0,i.jsx)("div",{className:"table-title",children:(0,i.jsx)(n.p,{children:"Coin Verbose Information"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"coinId"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"long"})}),(0,i.jsx)(n.td,{children:"Unique identifier of the coin."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"coinStatus"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"int"})}),(0,i.jsxs)(n.td,{children:["Coin status must not be zero. For detailed information, see the ",(0,i.jsx)(n.a,{href:"/docs/coinsStatuses",children:"Status"})," Codes page."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"latitude"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"double"})}),(0,i.jsx)(n.td,{children:"Latitude of the location where the coin was sent or collected."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"longitude"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"double"})}),(0,i.jsx)(n.td,{children:"Longitude of the location where the coin was sent or collected."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"message"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"An optional message or metadata associated with the coin."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"dollarAmount"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"double"})}),(0,i.jsx)(n.td,{children:"The dollar equivalent value of the coin."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"creationDate"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"DateTime"})}),(0,i.jsx)(n.td,{children:"The date and time when the coin was created."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"expirationDate"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"DateTime"})}),(0,i.jsx)(n.td,{children:"The date and time when the coin will expire. If it does not expire, this value is null."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"redeemedDate"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"DateTime"})}),(0,i.jsx)(n.td,{children:"The date and time when the coin was redeemed. If it has not been redeemed, this value is null."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"userSender"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Object"})}),(0,i.jsx)(n.td,{children:"Information about the user who sent the coin."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"userReciver"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Object"})}),(0,i.jsx)(n.td,{children:"Information about the user who received the coin."})]})]})]}),"\n",(0,i.jsx)("div",{className:"table-title",children:(0,i.jsx)(n.p,{children:"User Information"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"userId"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"Unique identifier of the user."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"userName"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"Name of the user."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"userImgUrl"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"URL of the user's profile image."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"userIdReciver"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Object"})}),(0,i.jsx)(n.td,{children:"Information about the recipient's user ID."})]})]})]}),"\n",(0,i.jsxs)(r,{className:"details-custom",children:[(0,i.jsx)("summary",{children:"200 OK: Verbose without paginator"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JSON",children:'[\r\n{\r\n  "coinId": 123456789,\r\n  "coinStatus": 1,\r\n  "latitude": 37.7749,\r\n  "longitude": -122.4194,\r\n  "message": "Happy Birthday!",\r\n  "dollarAmount": 50.25,\r\n  "creationDate": "2023-11-24T10:00:00Z",\r\n  "expirationDate": "2023-12-01T23:59:59Z",\r\n  "redeemedDate": null,\r\n  "userSender": {\r\n    "userId": "12345",\r\n    "userName": "Alice Smith",\r\n    "userImgUrl": "https://example.com/images/alice.jpg"\r\n  },\r\n  "userReciver": {\r\n    "userId": "67890",\r\n    "userName": "Bob Johnson",\r\n    "userImgUrl": "https://example.com/images/bob.jpg"\r\n  }\r\n},\r\n{\r\n  "coinId": 987654321,\r\n  "coinStatus": 2,\r\n  "latitude": 40.7128,\r\n  "longitude": -74.0060,\r\n  "message": "Thank you for your help!",\r\n  "dollarAmount": 100.00,\r\n  "creationDate": "2023-11-22T14:30:00Z",\r\n  "expirationDate": null,\r\n  "redeemedDate": "2023-11-23T16:00:00Z",\r\n  "userSender": {\r\n    "userId": "54321",\r\n    "userName": "Charlie Brown",\r\n    "userImgUrl": "https://example.com/images/charlie.jpg"\r\n  },\r\n  "userReciver": {\r\n    "userId": "09876",\r\n    "userName": "Dana White",\r\n    "userImgUrl": "https://example.com/images/dana.jpg"\r\n  }\r\n}\r\n]\r\n\r\n\n'})})]}),"\n",(0,i.jsxs)(r,{className:"details-custom",children:[(0,i.jsx)("summary",{children:"200 OK: Verbose without paginator"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "currentPage": 1,\r\n  "totalPages": 5,\r\n  "pageSize": 2,\r\n  "totalCoins": 10,\r\n  "coins": [\r\n    {\r\n      "coinId": 123456789,\r\n      "coinStatus": 1,\r\n      "latitude": 37.7749,\r\n      "longitude": -122.4194,\r\n      "message": "Happy Birthday!",\r\n      "dollarAmount": 50.25,\r\n      "creationDate": "2023-11-24T10:00:00Z",\r\n      "expirationDate": "2023-12-01T23:59:59Z",\r\n      "redeemedDate": null,\r\n      "userSender": {\r\n        "userId": "12345",\r\n        "userName": "Alice Smith",\r\n        "userImgUrl": "https://example.com/images/alice.jpg"\r\n      },\r\n      "userReciver": {\r\n        "userId": "67890",\r\n        "userName": "Bob Johnson",\r\n        "userImgUrl": "https://example.com/images/bob.jpg"\r\n      }\r\n    },\r\n    {\r\n      "coinId": 987654321,\r\n      "coinStatus": 2,\r\n      "latitude": 40.7128,\r\n      "longitude": -74.0060,\r\n      "message": "Thank you for your help!",\r\n      "dollarAmount": 100.00,\r\n      "creationDate": "2023-11-22T14:30:00Z",\r\n      "expirationDate": null,\r\n      "redeemedDate": "2023-11-23T16:00:00Z",\r\n      "userSender": {\r\n        "userId": "54321",\r\n        "userName": "Charlie Brown",\r\n        "userImgUrl": "https://example.com/images/charlie.jpg"\r\n      },\r\n      "userReciver": {\r\n        "userId": "09876",\r\n        "userName": "Dana White",\r\n        "userImgUrl": "https://example.com/images/dana.jpg"\r\n      }\r\n    }\r\n  ]\r\n}\r\n\n'})})]}),"\n",(0,i.jsx)(n.h3,{id:"json-response-error",children:"JSON Response: Error"}),"\n",(0,i.jsxs)(r,{className:"details-custom",children:[(0,i.jsx)("summary",{children:"400 Bad Request"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\r\n  "code": "INVALID_PARAMETERS",\r\n  "message": "One or more query parameters are invalid or malformed."\r\n}\n'})})]}),"\n",(0,i.jsxs)(r,{className:"details-custom",children:[(0,i.jsx)("summary",{children:"401 Unauthorized"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "code": "UNAUTHORIZED",\r\n  "message": "Authentication failed. Please provide a valid Bearer token."\r\n}\r\n\n'})})]}),"\n",(0,i.jsxs)(r,{className:"details-custom",children:[(0,i.jsx)("summary",{children:"403 Forbidden"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "code": "ACCESS_FORBIDDEN",\r\n  "message": "You do not have permission to access this resource."\r\n}\r\n\n'})})]}),"\n",(0,i.jsxs)(r,{className:"details-custom",children:[(0,i.jsx)("summary",{children:"404 Not Found"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "code": "RESOURCE_NOT_FOUND",\r\n  "message": "No coins were found for the provided filters."\r\n}\r\n\n'})})]}),"\n",(0,i.jsxs)(r,{className:"details-custom",children:[(0,i.jsx)("summary",{children:"422 Unprocessable Entity"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "code": "UNPROCESSABLE_ENTITY",\r\n  "message": "The provided pagination values (page or pageSize) are invalid."\r\n}\r\n\n'})})]}),"\n",(0,i.jsxs)(r,{className:"details-custom",children:[(0,i.jsx)("summary",{children:"429 Too Many Requests"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "code": "TOO_MANY_REQUESTS",\r\n  "message": "You have exceeded the rate limit. Please wait and try again later."\r\n}\r\n\n'})})]}),"\n",(0,i.jsxs)(r,{className:"details-custom",children:[(0,i.jsx)("summary",{children:"500 Internal Server Error"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "code": "INTERNAL_SERVER_ERROR",\r\n  "message": "An unexpected error occurred while processing the request. Please try again later."\r\n}\r\n\n'})})]})]})}function p(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},2097:(e,n,r)=>{r.d(n,{A:()=>i});r(6540);var s=r(4848);const i=e=>{let{method:n}=e;const r={GET:"green",POST:"blue",PUT:"orange",PATCH:"orange",DELETE:"red"};return(0,s.jsx)("span",{style:{backgroundColor:r[n]||"black",color:"white",fontWeight:"bold",padding:"0.2em 0.4em",border:`1px solid ${r[n]||"black"}`,borderRadius:"4px"},children:n})}},4203:(e,n,r)=>{r.d(n,{y:()=>s});const s={otp:"/DneroArk/login/otp",login:"/DneroArk/login",updateToken:"/DneroArk/login/updateToken",logout:"/DneroArk/logout",user:"/DneroArk/user",transactionsAll:"/DneroArk/transactions",transactionIndividual:"/DneroArk/transactions/{int}",notificationsAll:"/DneroArk/notifications",notificationsIndividual:"/DneroArk/notifications/{int}",coinsAll:"/DneroArk/coins",coinsIndividual:"/DneroArk/coins/{int}"}},5789:(e,n,r)=>{r.d(n,{J:()=>s});const s={overview:"Overview",parameters:"parameters",paginator:"paginator",coinStatuses:"coinsStatuses",scopes:"scopes",otp:"endpoints/login/phoneOTP",phone:"endpoints/login/phone",updateToken:"endpoints/login/accessToken",logout:"endpoints/login/logout",user:"endpoints/user/profile",transactionsAll:"endpoints/transactions/TransactionsAll",transactionIndividual:"endpoints/transactions/TransactionsIndividual",notificationsAll:"endpoints/notifications/NotificationsAll",notificationsIndividual:"endpoints/notifications/NotificationsIndividual",coinsAll:"endpoints/Coins/coinsAll",coinsIndividual:"endpoints/Coins/coinsIndividual"}},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>l});var s=r(6540);const i={},d=s.createContext(i);function t(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);