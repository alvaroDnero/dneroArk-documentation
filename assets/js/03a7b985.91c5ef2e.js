"use strict";(self.webpackChunkdnero_ark_documentation=self.webpackChunkdnero_ark_documentation||[]).push([[7218],{257:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"DTO/coins/allCoins/verbose","title":"All Coins Verbose","description":"| Name                  | Type       | Description                                                                                  |","source":"@site/docs/DTO/coins/allCoins/verbose.mdx","sourceDirName":"DTO/coins/allCoins","slug":"/DTO/coins/allCoins/verbose","permalink":"/DneroArk-Documentation/docs/DTO/coins/allCoins/verbose","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DTO/coins/allCoins/verbose.mdx","tags":[],"version":"current","frontMatter":{}}');var s=n(4848),a=n(8453),i=n(1517),l=n(5594);const o={},c="All Coins Verbose",d={},u=[];function h(e){const r={a:"a",code:"code",h1:"h1",header:"header",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"all-coins-verbose",children:"All Coins Verbose"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"coinId"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"long"})}),(0,s.jsx)(r.td,{children:"Unique identifier of the coin."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"coinStatus"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"int"})}),(0,s.jsxs)(r.td,{children:["Coin status must not be zero. For detailed information, see the ",(0,s.jsx)(r.a,{href:"/docs/coinsStatuses",children:"Status Codes page."})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"latitude"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"double"})}),(0,s.jsx)(r.td,{children:"Latitude of the location where the coin was sent or collected."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"longitude"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"double"})}),(0,s.jsx)(r.td,{children:"Longitude of the location where the coin was sent or collected."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"message"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"string"})}),(0,s.jsx)(r.td,{children:"An optional message or metadata associated with the coin."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"cashAmount"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"double"})}),(0,s.jsx)(r.td,{children:"The dollar equivalent value of the coin."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"creationDate"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"DateTime"})}),(0,s.jsx)(r.td,{children:"The date and time when the coin was created."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"expirationDate"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"DateTime"})}),(0,s.jsx)(r.td,{children:"The date and time when the coin will expire. If it does not expire, this value is null."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"redeemedDate"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"DateTime"})}),(0,s.jsx)(r.td,{children:"The date and time when the coin was redeemed. If it has not been redeemed, this value is null."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"userSender"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Object"})}),(0,s.jsxs)(r.td,{children:["Information about the user who sent the coin. See ",(0,s.jsx)(r.a,{href:"/docs/Objects/userObject",children:"User Object Details."})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"userRecipient"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Object"})}),(0,s.jsxs)(r.td,{children:["Information about the user who received the coin. See ",(0,s.jsx)(r.a,{href:"/docs/Objects/userObject",children:"User Object Details."})]})]})]})]}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(l.A,{value:"json",label:"Json",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-JSON",children:'{\r\n  \r\n    {\r\n      "coinId": 101,\r\n      "coinStatus": 2,\r\n      "latitude": 40.7128,\r\n      "longitude": -74.0060,\r\n      "message": "Happy Birthday!",\r\n      "cashAmount": 25.50,\r\n      "creationDate": "2024-11-20T10:00:00Z",\r\n      "expirationDate": "2024-12-01T00:00:00Z",\r\n      "redeemedDate": null,\r\n      "userSender": {\r\n        "userId": 1001,\r\n        "userName": "Alice Johnson",\r\n        "userImgUrl": "https://example.com/images/alice_johnson.jpg"\r\n      },\r\n      "userRecipient": {\r\n        "userId": 1002,\r\n        "userName": "Bob Williams",\r\n        "userImgUrl": "https://example.com/images/bob_williams.jpg"\r\n      }\r\n    },\r\n    {\r\n      "coinId": 102,\r\n      "coinStatus": 1,\r\n      "latitude": 34.0522,\r\n      "longitude": -118.2437,\r\n      "message": "Thank you for your help!",\r\n      "cashAmount": 50.00,\r\n      "creationDate": "2024-11-18T15:30:00Z",\r\n      "expirationDate": "2024-11-30T00:00:00Z",\r\n      "redeemedDate": "2024-11-25T12:00:00Z",\r\n      "userSender": {\r\n        "userId": 1003,\r\n        "userName": "Charlie Davis",\r\n        "userImgUrl": "https://example.com/images/charlie_davis.jpg"\r\n      },\r\n      "userRecipient": {\r\n        "userId": 1004,\r\n        "userName": "Dana White",\r\n        "userImgUrl": "https://example.com/images/dana_white.jpg"\r\n      }\r\n    }\r\n}\n'})})}),(0,s.jsx)(l.A,{value:"c#",label:"Json Paginator",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-JSON",children:'{\r\n  "currentPage": 1,\r\n  "totalPages": 5,\r\n  "pageSize": 2,\r\n  "totalElements": 10,\r\n  "coins": \r\n  [\r\n    {\r\n      "coinId": 101,\r\n      "coinStatus": 2,\r\n      "latitude": 40.7128,\r\n      "longitude": -74.0060,\r\n      "message": "Happy Birthday!",\r\n      "cashAmount": 25.50,\r\n      "creationDate": "2024-11-20T10:00:00Z",\r\n      "expirationDate": "2024-12-01T00:00:00Z",\r\n      "redeemedDate": null,\r\n      "userSender": {\r\n        "userId": 1001,\r\n        "userName": "Alice Johnson",\r\n        "userImgUrl": "https://example.com/images/alice_johnson.jpg"\r\n      },\r\n      "userRecipient": {\r\n        "userId": 1002,\r\n        "userName": "Bob Williams",\r\n        "userImgUrl": "https://example.com/images/bob_williams.jpg"\r\n      }\r\n    },\r\n    {\r\n      "coinId": 102,\r\n      "coinStatus": 1,\r\n      "latitude": 34.0522,\r\n      "longitude": -118.2437,\r\n      "message": "Thank you for your help!",\r\n      "cashAmount": 50.00,\r\n      "creationDate": "2024-11-18T15:30:00Z",\r\n      "expirationDate": "2024-11-30T00:00:00Z",\r\n      "redeemedDate": "2024-11-25T12:00:00Z",\r\n      "userSender": {\r\n        "userId": 1003,\r\n        "userName": "Charlie Davis",\r\n        "userImgUrl": "https://example.com/images/charlie_davis.jpg"\r\n      },\r\n      "userRecipient": {\r\n        "userId": 1004,\r\n        "userName": "Dana White",\r\n        "userImgUrl": "https://example.com/images/dana_white.jpg"\r\n      }\r\n    }\r\n  ]\r\n\r\n}\r\n\n'})})})]})]})}function m(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},5594:(e,r,n)=>{n.d(r,{A:()=>i});n(6540);var t=n(4164);const s={tabItem:"tabItem__kUE"};var a=n(4848);function i(e){let{children:r,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,i),hidden:n,children:r})}},1517:(e,r,n)=>{n.d(r,{A:()=>D});var t=n(6540),s=n(4164),a=n(3104),i=n(6347),l=n(205),o=n(7485),c=n(1682),d=n(679);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return u(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:s}}=e;return{value:r,label:n,attributes:t,default:s}}))}(n);return function(e){const r=(0,c.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function m(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:n}=e;const s=(0,i.W6)(),a=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,o.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(s.location.search);r.set(a,e),s.replace({...s.location,search:r.toString()})}),[a,s])]}function p(e){const{defaultValue:r,queryString:n=!1,groupId:s}=e,a=h(e),[i,o]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:a}))),[c,u]=x({queryString:n,groupId:s}),[p,j]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,a]=(0,d.Dv)(n);return[s,(0,t.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),b=(()=>{const e=c??p;return m({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),j(e)}),[u,j,a]),tabValues:a}}var j=n(2303);const b={tabList:"tabList_fbd4",tabItem:"tabItem_v5XY"};var f=n(4848);function g(e){let{className:r,block:n,selectedValue:t,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const r=e.currentTarget,n=o.indexOf(r),s=l[n].value;s!==t&&(c(r),i(s))},u=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;r=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;r=o[n]??o[o.length-1];break}}r?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},r),children:l.map((e=>{let{value:r,label:n,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>o.push(e),onKeyDown:u,onClick:d,...a,className:(0,s.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function v(e){let{lazy:r,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=i.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function I(e){const r=p(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,f.jsx)(g,{...r,...e}),(0,f.jsx)(v,{...r,...e})]})}function D(e){const r=(0,j.A)();return(0,f.jsx)(I,{...e,children:u(e.children)},String(r))}},8453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>l});var t=n(6540);const s={},a=t.createContext(s);function i(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);