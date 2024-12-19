"use strict";(self.webpackChunkdnero_ark_documentation=self.webpackChunkdnero_ark_documentation||[]).push([[1722],{9427:(e,n,r)=>{r.r(n),r.d(n,{apiPath:()=>p,assets:()=>m,contentTitle:()=>h,default:()=>b,frontMatter:()=>u,metadata:()=>s,method:()=>x,toc:()=>j});const s=JSON.parse('{"id":"endpoints/Coins/coinsAll","title":"Coins","description":"Header","source":"@site/docs/endpoints/Coins/coinsAll.mdx","sourceDirName":"endpoints/Coins","slug":"/endpoints/Coins/coinsAll","permalink":"/DneroArk-Documentation/docs/endpoints/Coins/coinsAll","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/endpoints/Coins/coinsAll.mdx","tags":[],"version":"current","frontMatter":{"id":"coinsAll"},"sidebar":"apiSidebar","previous":{"title":"Get A Transaction","permalink":"/DneroArk-Documentation/docs/endpoints/transactions/TransactionsIndividual"},"next":{"title":"Get A Coin","permalink":"/DneroArk-Documentation/docs/endpoints/Coins/coinsIndividual"}}');var t=r(4848),o=r(8453),i=r(1517),a=r(5594),l=r(2097),c=r(4203),d=r(5789);const u={id:"coinsAll"},h="Coins",m={},p=c.y.coinsAll,x="GET",j=[{value:"Header",id:"header",level:3},{value:"Parameter",id:"parameter",level:3},{value:"JSON Response: Success",id:"json-response-success",level:3},{value:"JSON Response: Error",id:"json-response-error",level:3}];function g(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"coins",children:"Coins"})}),"\n",(0,t.jsxs)("div",{className:"highlight-box",children:[(0,t.jsx)(l.A,{method:x}),p]}),"\n",(0,t.jsx)(n.h3,{id:"header",children:"Header"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Key"}),(0,t.jsx)(n.th,{children:"Value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Accept"})}),(0,t.jsx)(n.td,{children:"application/json"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Authorization"})}),(0,t.jsxs)(n.td,{children:["Bearer ",(0,t.jsx)(n.code,{children:"{accessToken}"})]})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"parameter",children:"Parameter"}),"\n",(0,t.jsx)("a",{href:`/DneroArk-Documentation/docs/${d.J.parameters}`,children:(0,t.jsx)(n.strong,{children:"Definition for this parameters"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("a",{href:`/DneroArk-Documentation/docs/${d.J.parameters}`,children:(0,t.jsx)(n.strong,{children:"statuses"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("a",{href:`/DneroArk-Documentation/docs/${d.J.parameters}`,children:(0,t.jsx)(n.strong,{children:"pageSize"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("a",{href:`/DneroArk-Documentation/docs/${d.J.parameters}`,children:(0,t.jsx)(n.strong,{children:"page"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("a",{href:`/DneroArk-Documentation/docs/${d.J.parameters}`,children:(0,t.jsx)(n.strong,{children:"sortOrder"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("a",{href:`/DneroArk-Documentation/docs/${d.J.parameters}`,children:(0,t.jsx)(n.strong,{children:"verbose"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r,{className:"details-custom",children:[(0,t.jsx)("summary",{children:"Query parameters example: Only Status"}),(0,t.jsx)("div",{className:"examples-style",children:(0,t.jsxs)(n.p,{children:[p,(0,t.jsx)(n.code,{children:"?statuses=1,3"})]})})]}),"\n",(0,t.jsxs)(r,{className:"details-custom",children:[(0,t.jsx)("summary",{children:"Query parameters example: Only Paginator"}),(0,t.jsx)("div",{className:"examples-style",children:(0,t.jsxs)(n.p,{children:[p,(0,t.jsx)(n.code,{children:"?pageSize=10&page=2"})]})})]}),"\n",(0,t.jsxs)(r,{className:"details-custom",children:[(0,t.jsx)("summary",{children:"Query parameters example: Only Sort Order"}),(0,t.jsx)("div",{className:"examples-style",children:(0,t.jsxs)(n.p,{children:[p,(0,t.jsx)(n.code,{children:"?sortOrder=DESC"})]})})]}),"\n",(0,t.jsxs)(r,{className:"details-custom",children:[(0,t.jsx)("summary",{children:"Query parameters example: Only Verbose"}),(0,t.jsx)("div",{className:"examples-style",children:(0,t.jsxs)(n.p,{children:[p,(0,t.jsx)(n.code,{children:"?verbose=true"})]})})]}),"\n",(0,t.jsxs)(r,{className:"details-custom",children:[(0,t.jsx)("summary",{children:"Query parameters example: Status, Paginator, Reverse Order, Verbose"}),(0,t.jsx)("div",{className:"examples-style",children:(0,t.jsxs)(n.p,{children:[p,(0,t.jsx)(n.code,{children:"?statuses=1&pageSize=10&page=2&reverseOrder=false&verbose=true"})]})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"json-response-success",children:"JSON Response: Success"}),"\n",(0,t.jsx)("div",{className:"table-title",children:(0,t.jsx)(n.p,{children:"Simple Coin Informations"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"coinId"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"long"})}),(0,t.jsx)(n.td,{children:"Unique identifier of the coin."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"coinStatus"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"int"})}),(0,t.jsxs)(n.td,{children:["Coin status must not be zero. For detailed information, see the ",(0,t.jsx)(n.a,{href:"/docs/coinsStatuses",children:"Status Codes page."})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"latitude"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"double"})}),(0,t.jsx)(n.td,{children:"Latitude of the location where the coin was sent or collected."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"longitude"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"double"})}),(0,t.jsx)(n.td,{children:"Longitude of the location where the coin was sent or collected."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"message"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"An optional message or metadata associated with the coin."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"cashAmount"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"double"})}),(0,t.jsx)(n.td,{children:"The dollar equivalent value of the coin."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"senderName"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"Name of the person who sent the coin."})]})]})]}),"\n",(0,t.jsxs)(r,{className:"details-custom",open:!0,children:[(0,t.jsx)("summary",{children:"200 OK"}),(0,t.jsxs)(i.A,{children:[(0,t.jsx)(a.A,{value:"json",label:"No Paginator",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JSON",children:'[\r\n  {\r\n    "coinId": 123456789,\r\n    "coinStatus": 2,\r\n    "latitude": 37.7749,\r\n    "longitude": -122.4194,\r\n    "message": "Happy Birthday!",\r\n    "cashAmount": 50.25,\r\n    "senderName": "Alice Smith"\r\n  },\r\n  {\r\n    "coinId": 987654321,\r\n    "coinStatus": 1,\r\n    "latitude": 40.7128,\r\n    "longitude": -74.0060,\r\n    "message": "Thank you for your help!",\r\n    "cashAmount": 100.00,\r\n    "senderName": "Charlie Brown"\r\n  }\r\n]\n'})})}),(0,t.jsx)(a.A,{value:"c#",label:"Paginator",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "currentPage": 1,\r\n  "totalPages": 5,\r\n  "pageSize": 2,\r\n  "totalCoins": 10,\r\n  "coins": [\r\n    {\r\n      "coinId": 123456789,\r\n      "coinStatus": 2,\r\n      "latitude": 37.7749,\r\n      "longitude": -122.4194,\r\n      "message": "Happy Birthday!",\r\n      "cashAmount": 50.25,\r\n      "senderName": "Alice Smith"\r\n    },\r\n    {\r\n      "coinId": 987654321,\r\n      "coinStatus": 1,\r\n      "latitude": 40.7128,\r\n      "longitude": -74.0060,\r\n      "message": "Thank you for your help!",\r\n      "cashAmount": 100.00,\r\n      "senderName": "Charlie Brown"\r\n    }\r\n  ]\r\n}\n'})})})]})]}),"\n",(0,t.jsx)("div",{className:"table-title",children:(0,t.jsx)(n.p,{children:"Coin Verbose Information"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"coinId"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"long"})}),(0,t.jsx)(n.td,{children:"Unique identifier of the coin."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"coinStatus"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"int"})}),(0,t.jsxs)(n.td,{children:["Coin status must not be zero. For detailed information, see the ",(0,t.jsx)(n.a,{href:"/docs/coinsStatuses",children:"Status Codes page."})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"latitude"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"double"})}),(0,t.jsx)(n.td,{children:"Latitude of the location where the coin was sent or collected."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"longitude"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"double"})}),(0,t.jsx)(n.td,{children:"Longitude of the location where the coin was sent or collected."})]})]})]}),"\n",(0,t.jsxs)(r,{className:"details-custom",open:!0,children:[(0,t.jsx)("summary",{children:"200 OK"}),(0,t.jsxs)(i.A,{children:[(0,t.jsx)(a.A,{value:"json",label:"No Paginator",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JSON",children:'{\r\n  \r\n    {\r\n      "coinId": 101,\r\n      "coinStatus": 2,\r\n      "latitude": 40.7128,\r\n      "longitude": -74.0060,\r\n      \r\n    },\r\n    {\r\n      "coinId": 102,\r\n      "coinStatus": 1,\r\n      "latitude": 34.0522,\r\n      "longitude": -118.2437,\r\n      \r\n    }\r\n}\n'})})}),(0,t.jsx)(a.A,{value:"c#",label:"Paginator",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "currentPage": 1,\r\n  "totalPages": 5,\r\n  "pageSize": 2,\r\n  "totalElements": 10,\r\n  "coins": \r\n  [\r\n    {\r\n      "coinId": 101,\r\n      "coinStatus": 2,\r\n      "latitude": 40.7128,\r\n      "longitude": -74.0060,\r\n      "message": "Happy Birthday!",\r\n      "cashAmount": 25.50,\r\n      "creationDate": "2024-11-20T10:00:00Z",\r\n      "expirationDate": "2024-12-01T00:00:00Z",\r\n      "redeemedDate": null,\r\n      "userSender": {\r\n        "userId": 1001,\r\n        "userName": "Alice Johnson",\r\n        "userImgUrl": "https://example.com/images/alice_johnson.jpg"\r\n      },\r\n      "userRecipient": {\r\n        "userId": 1002,\r\n        "userName": "Bob Williams",\r\n        "userImgUrl": "https://example.com/images/bob_williams.jpg"\r\n      }\r\n    },\r\n    {\r\n      "coinId": 102,\r\n      "coinStatus": 1,\r\n      "latitude": 34.0522,\r\n      "longitude": -118.2437,\r\n      "message": "Thank you for your help!",\r\n      "cashAmount": 50.00,\r\n      "creationDate": "2024-11-18T15:30:00Z",\r\n      "expirationDate": "2024-11-30T00:00:00Z",\r\n      "redeemedDate": "2024-11-25T12:00:00Z",\r\n      "userSender": {\r\n        "userId": 1003,\r\n        "userName": "Charlie Davis",\r\n        "userImgUrl": "https://example.com/images/charlie_davis.jpg"\r\n      },\r\n      "userRecipient": {\r\n        "userId": 1004,\r\n        "userName": "Dana White",\r\n        "userImgUrl": "https://example.com/images/dana_white.jpg"\r\n      }\r\n    }\r\n  ]\r\n\r\n}\r\n\n'})})})]})]}),"\n",(0,t.jsxs)(n.h3,{id:"json-response-error",children:[(0,t.jsx)(n.a,{href:"/docs/DTO/Objects/genericResponseDTO",children:"JSON Response"}),": Error"]}),"\n",(0,t.jsxs)(r,{className:"details-custom",children:[(0,t.jsx)("summary",{children:"400 Bad Request"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\r\n "event": "INVALID_PARAMETERS",\r\n  "message": "One or more query parameters are invalid or malformed."\r\n}\n'})})]}),"\n",(0,t.jsxs)(r,{className:"details-custom",children:[(0,t.jsx)("summary",{children:"401 Unauthorized"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JSON",children:'{\r\n "event": "UNAUTHORIZED",\r\n  "message": "Authentication failed. Please provide a valid Bearer token."\r\n}\r\n\n'})})]}),"\n",(0,t.jsxs)(r,{className:"details-custom",children:[(0,t.jsx)("summary",{children:"403 Forbidden"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JSON",children:'{\r\n "event": "ACCESS_FORBIDDEN",\r\n  "message": "You do not have permission to access this resource."\r\n}\r\n\n'})})]}),"\n",(0,t.jsxs)(r,{className:"details-custom",children:[(0,t.jsx)("summary",{children:"404 Not Found"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JSON",children:'{\r\n "event": "RESOURCE_NOT_FOUND",\r\n  "message": "No coins were found for the provided filters."\r\n}\r\n\n'})})]}),"\n",(0,t.jsxs)(r,{className:"details-custom",children:[(0,t.jsx)("summary",{children:"422 Unprocessable Entity"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JSON",children:'{\r\n "event": "UNPROCESSABLE_ENTITY",\r\n  "message": "The provided pagination values (page or pageSize) are invalid."\r\n}\r\n\n'})})]}),"\n",(0,t.jsxs)(r,{className:"details-custom",children:[(0,t.jsx)("summary",{children:"429 Too Many Requests"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JSON",children:'{\r\n "event": "TOO_MANY_REQUESTS",\r\n  "message": "You have exceeded the rate limit. Please wait and try again later."\r\n}\r\n\n'})})]}),"\n",(0,t.jsxs)(r,{className:"details-custom",children:[(0,t.jsx)("summary",{children:"500 Internal Server Error"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JSON",children:'{\r\n "event": "INTERNAL_SERVER_ERROR",\r\n  "message": "An unexpected error occurred while processing the request. Please try again later."\r\n}\r\n\n'})})]})]})}function b(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},5594:(e,n,r)=>{r.d(n,{A:()=>i});r(6540);var s=r(4164);const t={tabItem:"tabItem__kUE"};var o=r(4848);function i(e){let{children:n,hidden:r,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,i),hidden:r,children:n})}},1517:(e,n,r)=>{r.d(n,{A:()=>T});var s=r(6540),t=r(4164),o=r(3104),i=r(6347),a=r(205),l=r(7485),c=r(1682),d=r(679);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:t}}=e;return{value:n,label:r,attributes:s,default:t}}))}(r);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function m(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:r}=e;const t=(0,i.W6)(),o=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l.aZ)(o),(0,s.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(t.location.search);n.set(o,e),t.replace({...t.location,search:n.toString()})}),[o,t])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,o=h(e),[i,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:o}))),[c,u]=p({queryString:r,groupId:t}),[x,j]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,o]=(0,d.Dv)(r);return[t,(0,s.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:t}),g=(()=>{const e=c??x;return m({value:e,tabValues:o})?e:null})();(0,a.A)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),j(e)}),[u,j,o]),tabValues:o}}var j=r(2303);const g={tabList:"tabList_fbd4",tabItem:"tabItem_v5XY"};var b=r(4848);function f(e){let{className:n,block:r,selectedValue:s,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const n=e.currentTarget,r=l.indexOf(n),t=a[r].value;t!==s&&(c(n),i(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:a.map((e=>{let{value:n,label:r,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...o,className:(0,t.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":s===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:o}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===o));return e?(0,s.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function D(e){const n=x(e);return(0,b.jsxs)("div",{className:(0,t.A)("tabs-container",g.tabList),children:[(0,b.jsx)(f,{...n,...e}),(0,b.jsx)(v,{...n,...e})]})}function T(e){const n=(0,j.A)();return(0,b.jsx)(D,{...e,children:u(e.children)},String(n))}},2097:(e,n,r)=>{r.d(n,{A:()=>t});r(6540);var s=r(4848);const t=e=>{let{method:n}=e;const r={GET:"green",POST:"blue",PUT:"orange",PATCH:"orange",DELETE:"red"};return(0,s.jsx)("span",{style:{backgroundColor:r[n]||"black",color:"white",fontWeight:"bold",padding:"0.2em 0.4em",border:`1px solid ${r[n]||"black"}`,borderRadius:"4px"},children:n})}},4203:(e,n,r)=>{r.d(n,{y:()=>s});const s={otp:"/DneroArk/login/otp",login:"/DneroArk/login",updateToken:"/DneroArk/login/updateToken",logout:"/DneroArk/logout",user:"/DneroArk/user",contact:"/DneroArk/user/contacts",transactionsAll:"/DneroArk/transactions",transactionIndividual:"/DneroArk/transactions/{transactionId}",notificationsAll:"/DneroArk/notifications",notificationsIndividual:"/DneroArk/notifications/{notificationId}",coinsAll:"/DneroArk/coins",coinsIndividual:"/DneroArk/coins/{coinId}",coinsDrop:"/DneroArk/coins/Drop",coinsRedeem:"/DneroArk/coins/redeem/{coinId}",coinsPending:"/DneroArk/coins/pending",coinsNumberToCollect:"/DneroArk/coins/pending/count",coinRecieveWebhook:"/DneroArk/coins/CoinRecieveWebhook"}},5789:(e,n,r)=>{r.d(n,{J:()=>s});const s={overview:"Overview",parameters:"parameters",paginator:"paginator",coinStatuses:"coinsStatuses",userObject:"Objects/userObject",phoneObject:"Objects/phoneObject",genericResponse:"Objects/genericResponse",balanceObject:"Objects/balanceObject",dto:"DTO/dto",userDto:"DTO/Objects/userDTO",deviceInfoDto:"DTO/Objects/deviceInfoDto",genericResponseDto:"DTO/Objects/genericResponseDTO",balanceDto:"DTO/Objects/balanceDTO",otpDtoBody:"DTO/login/generateOTP/body",otpDtoResponse:"DTO/login/generateOTP/response",phoneDtoBody:"DTO/login/confirmOTP/body",phoneDtoResponse:"DTO/login/confirmOTP/response",phoneDtoBody:"DTO/login/confirmOTP/body",phoneDtoResponse:"DTO/login/confirmOTP/response",updateTokenDtoBody:"DTO/login/accessToken/body",updateTokenDtoResponse:"DTO/login/accessToken/response",userProfileDto:"DTO/user/userProfile",contactDtoBody:"DTO/user/contacts/body",contactDtoResponse:"DTO/user/contacts/response",transactionsAllDto:"DTO/transactions/allTransactions",transactionIndividualDto:"DTO/transactions/transactionIndividual",coinsAllDtoNormal:"DTO/coins/allCoins/normal",coinsAllDtoVerbose:"DTO/coins/allCoins/verbose",coinsIndividualDtoNormal:"DTO/coins/single/normal",coinsIndividualDtoVerbose:"DTO/coins/single/verbose",coinsNumberToCollectDto:"DTO/coins/numberOfCoinsToCollect",endpoint:"endpoints",otp:"endpoints/login/phoneOTP",phone:"endpoints/login/phone",updateToken:"endpoints/login/accessToken",logout:"endpoints/login/logout",user:"endpoints/user/profile",contact:"endpoints/user/contacts",transactionsAll:"endpoints/transactions/TransactionsAll",transactionIndividual:"endpoints/transactions/TransactionsIndividual",notificationsAll:"endpoints/notifications/NotificationsAll",notificationsIndividual:"endpoints/notifications/NotificationsIndividual",coinsAll:"endpoints/Coins/coinsAll",coinsIndividual:"endpoints/Coins/coinsIndividual",coinsRedeem:"endpoints/Coins/coinsRedeem",coinsDrop:"endpoints/Coins/coinDrop",coinsPending:"endpoints/Coins/coinPending",coinsNumberToCollect:"endpoints/Coins/coinsNumberToCollect",coinRecieveWebhook:"endpoints/Coins/CoinRecieveWebhook"}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>a});var s=r(6540);const t={},o=s.createContext(t);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);