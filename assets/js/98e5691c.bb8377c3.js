"use strict";(self.webpackChunkdnero_ark_documentation=self.webpackChunkdnero_ark_documentation||[]).push([[7105],{3470:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>x,frontMatter:()=>o,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"DTO/coins/single/verbose","title":"Coin Individual DTO","description":"| Name                  | Type       | Description                                                                                  |","source":"@site/docs/DTO/coins/single/verbose.mdx","sourceDirName":"DTO/coins/single","slug":"/DTO/coins/single/verbose","permalink":"/DneroArk-Documentation/docs/DTO/coins/single/verbose","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DTO/coins/single/verbose.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"apiSidebar","previous":{"title":"Normal DTO","permalink":"/DneroArk-Documentation/docs/DTO/coins/single/normal"},"next":{"title":"Number of coins to collect DTO","permalink":"/DneroArk-Documentation/docs/DTO/coins/numberOfCoinsToCollect"}}');var s=n(4848),a=n(8453),i=n(1517),l=n(5594);const o={},c="Coin Individual DTO",d={},u=[];function h(e){const t={a:"a",code:"code",h1:"h1",header:"header",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"coin-individual-dto",children:"Coin Individual DTO"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"coinId"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"long"})}),(0,s.jsx)(t.td,{children:"Unique identifier of the coin."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"coinStatus"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"int"})}),(0,s.jsxs)(t.td,{children:["Coin status must not be zero. For detailed information, see the ",(0,s.jsx)(t.a,{href:"/docs/coinsStatuses",children:"Status Codes page."})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"latitude"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"double"})}),(0,s.jsx)(t.td,{children:"Latitude of the location where the coin was sent or collected."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"longitude"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"double"})}),(0,s.jsx)(t.td,{children:"Longitude of the location where the coin was sent or collected."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"message"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"string"})}),(0,s.jsx)(t.td,{children:"An optional message or metadata associated with the coin."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"dollarAmount"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"double"})}),(0,s.jsx)(t.td,{children:"The dollar equivalent value of the coin."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"creationDate"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"DateTime"})}),(0,s.jsx)(t.td,{children:"The date and time when the coin was created."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"expirationDate"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"DateTime"})}),(0,s.jsx)(t.td,{children:"The date and time when the coin will expire. If it does not expire, this value is null."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"redeemedDate"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"DateTime"})}),(0,s.jsx)(t.td,{children:"The date and time when the coin was redeemed. If it has not been redeemed, this value is null."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"userSender"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Object"})}),(0,s.jsxs)(t.td,{children:["Information about the user who sent the coin. See ",(0,s.jsx)(t.a,{href:"/docs/Objects/userObject",children:"User Object Details."})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"userRecipient"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Object"})}),(0,s.jsxs)(t.td,{children:["Information about the user who received the coin. See ",(0,s.jsx)(t.a,{href:"/docs/Objects/userObject",children:"User Object Details."})]})]})]})]}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(l.A,{value:"json",label:"Json",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-JSON",children:' {\r\n    "coinId": 101,\r\n    "coinStatus": 2,\r\n    "latitude": 40.7128,\r\n    "longitude": -74.0060,\r\n    "message": "Happy Birthday!",\r\n    "dollarAmount": 25.50,\r\n    "creationDate": "2024-11-20T10:00:00Z",\r\n    "expirationDate": "2024-12-01T00:00:00Z",\r\n    "redeemedDate": null,\r\n    "userSender": {\r\n      "userId": 1001,\r\n      "userName": "Alice Johnson",\r\n      "userImgUrl": "https://example.com/images/alice_johnson.jpg"\r\n    },\r\n    "userRecipient": {\r\n      "userId": 1002,\r\n      "userName": "Bob Williams",\r\n      "userImgUrl": "https://example.com/images/bob_williams.jpg"\r\n    }\r\n  }\n'})})}),(0,s.jsx)(l.A,{value:"c#",label:"C#",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c#"})})})]})]})}function x(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},5594:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var r=n(4164);const s={tabItem:"tabItem__kUE"};var a=n(4848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,i),hidden:n,children:t})}},1517:(e,t,n)=>{n.d(t,{A:()=>T});var r=n(6540),s=n(4164),a=n(3104),i=n(6347),l=n(205),o=n(7485),c=n(1682),d=n(679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function x(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:n}=e;const s=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=h(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,u]=j({queryString:n,groupId:s}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,d.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),p=(()=>{const e=c??m;return x({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{p&&o(p)}),[p]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,a]),tabValues:a}}var b=n(2303);const p={tabList:"tabList_fbd4",tabItem:"tabItem_v5XY"};var f=n(4848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const t=e.currentTarget,n=o.indexOf(t),s=l[n].value;s!==r&&(c(t),i(s))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:u,onClick:d,...a,className:(0,s.A)("tabs__item",p.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function D(e){const t=m(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",p.tabList),children:[(0,f.jsx)(v,{...t,...e}),(0,f.jsx)(g,{...t,...e})]})}function T(e){const t=(0,b.A)();return(0,f.jsx)(D,{...e,children:u(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var r=n(6540);const s={},a=r.createContext(s);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);