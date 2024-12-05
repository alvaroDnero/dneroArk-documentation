"use strict";(self.webpackChunkdnero_ark_documentation=self.webpackChunkdnero_ark_documentation||[]).push([[8097],{4067:(e,n,s)=>{s.r(n),s.d(n,{apiPath:()=>h,assets:()=>a,contentTitle:()=>t,default:()=>p,frontMatter:()=>l,metadata:()=>r,method:()=>x,toc:()=>j});const r=JSON.parse('{"id":"endpoints/login/phone","title":"Login","description":"Confirm the OTP to log in.","source":"@site/docs/endpoints/login/LoginPhone.mdx","sourceDirName":"endpoints/login","slug":"/endpoints/login/phone","permalink":"/DneroArk-Documentation/docs/endpoints/login/phone","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/endpoints/login/LoginPhone.mdx","tags":[],"version":"current","frontMatter":{"id":"phone"},"sidebar":"apiSidebar","previous":{"title":"OTP","permalink":"/DneroArk-Documentation/docs/endpoints/login/phoneOTP"},"next":{"title":"Update Tokens","permalink":"/DneroArk-Documentation/docs/endpoints/login/accessToken"}}');var d=s(4848),i=s(8453),o=s(2097),c=s(4203);const l={id:"phone"},t="Login",a={},h=c.y.login,x="POST",j=[{value:"Header",id:"header",level:3},{value:"JSON Body",id:"json-body",level:3},{value:"JSON Response: Success",id:"json-response-success",level:3},{value:"JSON Response: Error",id:"json-response-error",level:3}];function m(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"login",children:"Login"})}),"\n",(0,d.jsxs)("div",{className:"highlight-box",children:[(0,d.jsx)(o.A,{method:x}),h]}),"\n",(0,d.jsx)(n.p,{children:"Confirm the OTP to log in."}),"\n",(0,d.jsx)(n.h3,{id:"header",children:"Header"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Key"}),(0,d.jsx)(n.th,{children:"Value"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Content-Type"})}),(0,d.jsx)(n.td,{children:"application/json"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"Accept"})}),(0,d.jsx)(n.td,{children:"application/json"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"json-body",children:"JSON Body"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Name"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Required"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"phone"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string"})}),(0,d.jsx)(n.td,{children:"\u2705"}),(0,d.jsx)(n.td,{children:"User's phone number."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"countryCode"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string"})}),(0,d.jsx)(n.td,{children:"\u2705"}),(0,d.jsx)(n.td,{children:"Country code."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"otp"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string"})}),(0,d.jsx)(n.td,{children:"\u2705"}),(0,d.jsx)(n.td,{children:"Code received via OTP."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"deviceID"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string"})}),(0,d.jsx)(n.td,{children:"\u274c"}),(0,d.jsx)(n.td,{children:"Device ID to prevent open sessions on multiple devices."})]})]})]}),"\n",(0,d.jsxs)(s,{className:"details-custom",children:[(0,d.jsx)("summary",{children:"Body example"}),(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "phone": "7149816149",\r\n  "countryCode": "1",\r\n  "otp": "999999",\r\n  "deviceID": "192.168.0.0"\r\n}\r\n\n'})})]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h3,{id:"json-response-success",children:"JSON Response: Success"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Name"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"accessToken"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string"})}),(0,d.jsx)(n.td,{children:"Short-lived token containing user information."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"refreshToken"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"string"})}),(0,d.jsx)(n.td,{children:"Long-lived token."})]})]})]}),"\n",(0,d.jsxs)(s,{className:"details-custom",children:[(0,d.jsx)("summary",{children:"200 OK"}),(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-JSON",children:'{\r\n    "userId": 55555,\r\n    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBNb2JpbGVSZWZyZXNoVG9rZW4iOiIxNmFhNmIzMzEyZjg0NDVmODE4MjJmZjM1ZWIzNTMwZiIsIkFwcE1vYmlsZVRva2VuIjoiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SlZjMlZ5UVdOamIzVnVkRWxrSWpvaU5Ua3hNU0lzSWxWelpYSlFjbTltYVd4bFNXUWlPaUkxT1RFeElpd2lRWEJ3VG1GdFpTSTZJa1J1WlhKdlFYQndJaXdpUlc1MmFYSnZibTFsYm5RaU9pSlFjbTlrZFdOMGFXOXVJaXdpYm1KbUlqb3hOekk0TkRFNE9EQTJMQ0psZUhBaU9qRTNNamcxTURnNE1EWXNJbUYxWkNJNklrUnVaWEp2VW1WemRFRndhU0o5LmVhVGVxckNISW1mcVRMS3V5cFR2QkRUS1pMTEpkTEJFQnlzU3J5Y0Z0WTAiLCJVc2VyQWNjb3VudElkIjoiNTkxMSIsIlVzZXJQcm9maWxlSWQiOiI1OTExIiwiQXBwTmFtZSI6IkRuZXJvQVJLIiwiRW52aXJvbm1lbnQiOiJQcm9kdWN0aW9uIiwibmJmIjoxNzI4NDE4ODA2LCJleHAiOjE3Mjg1MDg4MDYsImF1ZCI6IkFSS1Jlc3RBcGkifQ.6LAi38NlECH-EOOM4N7a8efogIH-byOQ6VdYqRT4Vx0",\r\n    "refreshToken": "c9c3cf26afbb436d93d40ae2ed77fab3",\r\n\r\n}\r\n\n'})})]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsxs)(n.h3,{id:"json-response-error",children:[(0,d.jsx)(n.a,{href:"/docs/genericResponse",children:"JSON Response"}),": Error"]}),"\n",(0,d.jsxs)(s,{className:"details-custom",children:[(0,d.jsx)("summary",{children:"400 Bad Request"}),(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-JSON",children:"{\r\n  \"code\": \"MISSING_FIELDS\",\r\n  \"message\": \"The fields 'phone', 'countryCode', 'otp', and 'deviceID' are required.\"\r\n}\n"})}),(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "code": "INVALID_PHONE",\r\n  "message": "The provided phone number is invalid."\r\n}\n'})}),(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "code": "INVALID_COUNTRY_CODE",\r\n  "message": "The provided country code is invalid."\r\n}\n'})}),(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "code": "INVALID_OTP_FORMAT",\r\n  "message": "The OTP must be a numeric string of six digits."\r\n}\n'})})]}),"\n",(0,d.jsxs)(s,{className:"details-custom",children:[(0,d.jsx)("summary",{children:"401 Unauthorized"}),(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"401 Unauthorized"}),"\n"]}),(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "code": "INVALID_OTP",\r\n  "message": "The OTP is incorrect. Please try again."\r\n}\n'})}),(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "code": "EXPIRED_OTP",\r\n  "message": "The OTP has expired. Please request a new one."\r\n}\n'})})]}),"\n",(0,d.jsxs)(s,{className:"details-custom",children:[(0,d.jsx)("summary",{children:"403 Forbidden"}),(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "code": "PHONE_BLOCKED",\r\n  "message": "The phone number is blocked from performing this action."\r\n}\n'})}),(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "code": "DEVICE_BLACKLISTED",\r\n  "message": "This device is blacklisted and cannot perform OTP verification."\r\n}\n'})})]}),"\n",(0,d.jsxs)(s,{className:"details-custom",children:[(0,d.jsx)("summary",{children:" 422 Unprocessable Entity"}),(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "code": "UNSUPPORTED_COUNTRY_CODE",\r\n  "message": "The provided country code is not supported."\r\n}\r\n\n'})}),(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "code": "OTP_ALREADY_USED",\r\n  "message": "The OTP has already been used. Please request a new one."\r\n}\r\n\n'})})]}),"\n",(0,d.jsxs)(s,{className:"details-custom",children:[(0,d.jsx)("summary",{children:" 429 Too Many Requests"}),(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "code": "TOO_MANY_REQUESTS",\r\n  "message": "You have attempted to validate the OTP too many times. Please wait 2 minutes before trying again."\r\n}\r\n\n'})})]}),"\n",(0,d.jsxs)(s,{className:"details-custom",children:[(0,d.jsx)("summary",{children:" 500 Internal Server Error"}),(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "code": "INTERNAL_SERVER_ERROR",\r\n  "message": "An unexpected error occurred while validating the OTP. Please try again later."\r\n}\r\n\n'})})]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(m,{...e})}):m(e)}},2097:(e,n,s)=>{s.d(n,{A:()=>d});s(6540);var r=s(4848);const d=e=>{let{method:n}=e;const s={GET:"green",POST:"blue",PUT:"orange",PATCH:"orange",DELETE:"red"};return(0,r.jsx)("span",{style:{backgroundColor:s[n]||"black",color:"white",fontWeight:"bold",padding:"0.2em 0.4em",border:`1px solid ${s[n]||"black"}`,borderRadius:"4px"},children:n})}},4203:(e,n,s)=>{s.d(n,{y:()=>r});const r={otp:"/DneroArk/login/otp",login:"/DneroArk/login",updateToken:"/DneroArk/login/updateToken",logout:"/DneroArk/logout",user:"/DneroArk/user",contact:"/DneroArk/user/contacts",transactionsAll:"/DneroArk/transactions",transactionIndividual:"/DneroArk/transactions/{transactionId}",notificationsAll:"/DneroArk/notifications",notificationsIndividual:"/DneroArk/notifications/{notificationId}",coinsAll:"/DneroArk/coins",coinsIndividual:"/DneroArk/coins/{coinId}",coinsRedeem:"/DneroArk/coins/{coinId}/reedem",coinsDrop:"/DneroArk/coins/coinsDrop"}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var r=s(6540);const d={},i=r.createContext(d);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);