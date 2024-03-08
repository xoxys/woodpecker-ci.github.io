/*! For license information please see 4262c4b0.b3de3dc8.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[6990],{26263:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>i,default:()=>x,frontMatter:()=>c,metadata:()=>l,toc:()=>h});var d=r(13274),s=r(74169);const c={},i="Architecture",l={id:"development/architecture",title:"Architecture",description:"Package architecture",source:"@site/versioned_docs/version-2.0/92-development/05-architecture.md",sourceDirName:"92-development",slug:"/development/architecture",permalink:"/docs/2.0/development/architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-2.0/92-development/05-architecture.md",tags:[],version:"2.0",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Documentation",permalink:"/docs/2.0/development/docs"},next:{title:"Guides",permalink:"/docs/2.0/development/guides"}},t={},h=[{value:"Package architecture",id:"package-architecture",level:2},{value:"System architecture",id:"system-architecture",level:2},{value:"main package hierarchy",id:"main-package-hierarchy",level:3},{value:"Server",id:"server",level:3},{value:"Agent",id:"agent",level:3},{value:"CLI",id:"cli",level:3}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"architecture",children:"Architecture"}),"\n",(0,d.jsx)(n.h2,{id:"package-architecture",children:"Package architecture"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"Woodpecker architecture",src:r(21749).A+"",width:"1530",height:"1110"})}),"\n",(0,d.jsx)(n.h2,{id:"system-architecture",children:"System architecture"}),"\n",(0,d.jsx)(n.h3,{id:"main-package-hierarchy",children:"main package hierarchy"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"package"}),(0,d.jsx)(n.th,{children:"meaning"}),(0,d.jsx)(n.th,{children:"imports"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"cmd/**"})}),(0,d.jsx)(n.td,{children:"parse command-line args & environment to stat server/cli/agent"}),(0,d.jsx)(n.td,{children:"all other"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"agent/**"})}),(0,d.jsx)(n.td,{children:"code only agent (remote worker) will need"}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"pipeline"}),", ",(0,d.jsx)(n.code,{children:"shared"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"cli/**"})}),(0,d.jsx)(n.td,{children:"code only cli tool does need"}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"pipeline"}),", ",(0,d.jsx)(n.code,{children:"shared"}),", ",(0,d.jsx)(n.code,{children:"woodpecker-go"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"server/**"})}),(0,d.jsx)(n.td,{children:"code only server will need"}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"pipeline"}),", ",(0,d.jsx)(n.code,{children:"shared"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"shared/**"})}),(0,d.jsx)(n.td,{children:"code shared for all three main tools (go help utils)"}),(0,d.jsx)(n.td,{children:"only std and external libs"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"woodpecker-go/**"})}),(0,d.jsx)(n.td,{children:"go client for server rest api"}),(0,d.jsx)(n.td,{children:"std"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"server",children:"Server"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"package"}),(0,d.jsx)(n.th,{children:"meaning"}),(0,d.jsx)(n.th,{children:"imports"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"server/api/**"})}),(0,d.jsxs)(n.td,{children:["handle web requests from ",(0,d.jsx)(n.code,{children:"server/router"})]}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"pipeline"}),", ",(0,d.jsx)(n.code,{children:"../badges"}),", ",(0,d.jsx)(n.code,{children:"../ccmenue"}),", ",(0,d.jsx)(n.code,{children:"../logging"}),", ",(0,d.jsx)(n.code,{children:"../model"}),", ",(0,d.jsx)(n.code,{children:"../pubsub"}),", ",(0,d.jsx)(n.code,{children:"../queue"}),", ",(0,d.jsx)(n.code,{children:"../forge"}),", ",(0,d.jsx)(n.code,{children:"../shared"}),", ",(0,d.jsx)(n.code,{children:"../store"}),", ",(0,d.jsx)(n.code,{children:"shared"}),", (TODO: mv ",(0,d.jsx)(n.code,{children:"server/router/middleware/session"}),")"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"server/badges/**"})}),(0,d.jsx)(n.td,{children:"generate svg badges for pipelines"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"../model"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"server/ccmenu/**"})}),(0,d.jsx)(n.td,{children:"generate xml ccmenu for pipelines"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"../model"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"server/grpc/**"})}),(0,d.jsx)(n.td,{children:"gRPC server agents can connect to"}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"pipeline/rpc/**"}),", ",(0,d.jsx)(n.code,{children:"../logging"}),", ",(0,d.jsx)(n.code,{children:"../model"}),", ",(0,d.jsx)(n.code,{children:"../pubsub"}),", ",(0,d.jsx)(n.code,{children:"../queue"}),", ",(0,d.jsx)(n.code,{children:"../forge"}),", ",(0,d.jsx)(n.code,{children:"../pipeline"}),", ",(0,d.jsx)(n.code,{children:"../store"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"server/logging/**"})}),(0,d.jsx)(n.td,{children:"logging lib for gPRC server to stream logs while running"}),(0,d.jsx)(n.td,{children:"std"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"server/model/**"})}),(0,d.jsx)(n.td,{children:"structs for store (db) and api (json)"}),(0,d.jsx)(n.td,{children:"std"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"server/plugins/**"})}),(0,d.jsx)(n.td,{children:"plugins for server"}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"../model"}),", ",(0,d.jsx)(n.code,{children:"../forge"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"server/pipeline/**"})}),(0,d.jsx)(n.td,{children:"orchestrate pipelines"}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"pipeline"}),", ",(0,d.jsx)(n.code,{children:"../model"}),", ",(0,d.jsx)(n.code,{children:"../pubsub"}),", ",(0,d.jsx)(n.code,{children:"../queue"}),", ",(0,d.jsx)(n.code,{children:"../forge"}),", ",(0,d.jsx)(n.code,{children:"../store"}),", ",(0,d.jsx)(n.code,{children:"../plugins"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"server/pubsub/**"})}),(0,d.jsx)(n.td,{children:"pubsub lib for server to push changes to the WebUI"}),(0,d.jsx)(n.td,{children:"std"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"server/queue/**"})}),(0,d.jsx)(n.td,{children:"queue lib for server where agents pull new pipelines from via gRPC"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"server/model"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"server/forge/**"})}),(0,d.jsx)(n.td,{children:"forge lib for server to connect and handle forge specific stuff"}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"shared"}),", ",(0,d.jsx)(n.code,{children:"server/model"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"server/router/**"})}),(0,d.jsx)(n.td,{children:"handle requests to REST API (and all middleware) and serve UI and WebUI config"}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"shared"}),", ",(0,d.jsx)(n.code,{children:"../api"}),", ",(0,d.jsx)(n.code,{children:"../model"}),", ",(0,d.jsx)(n.code,{children:"../forge"}),", ",(0,d.jsx)(n.code,{children:"../store"}),", ",(0,d.jsx)(n.code,{children:"../web"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"server/store/**"})}),(0,d.jsx)(n.td,{children:"handle database"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"server/model"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"server/shared/**"})}),(0,d.jsxs)(n.td,{children:["TODO: move and split ",(0,d.jsx)(n.a,{href:"https://github.com/woodpecker-ci/woodpecker/issues/974",children:"#974"})]}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"server/web/**"})}),(0,d.jsx)(n.td,{children:"server SPA"}),(0,d.jsx)(n.td,{})]})]})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"../"})," = ",(0,d.jsx)(n.code,{children:"server/"})]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"agent",children:"Agent"}),"\n",(0,d.jsx)(n.p,{children:"TODO"}),"\n",(0,d.jsx)(n.h3,{id:"cli",children:"CLI"}),"\n",(0,d.jsx)(n.p,{children:"TODO"})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},78034:(e,n,r)=>{var d=r(79474),s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t={key:!0,ref:!0,__self:!0,__source:!0};function h(e,n,r){var d,c={},h=null,o=null;for(d in void 0!==r&&(h=""+r),void 0!==n.key&&(h=""+n.key),void 0!==n.ref&&(o=n.ref),n)i.call(n,d)&&!t.hasOwnProperty(d)&&(c[d]=n[d]);if(e&&e.defaultProps)for(d in n=e.defaultProps)void 0===c[d]&&(c[d]=n[d]);return{$$typeof:s,type:e,key:h,ref:o,props:c,_owner:l.current}}n.Fragment=c,n.jsx=h,n.jsxs=h},13274:(e,n,r)=>{e.exports=r(78034)},21749:(e,n,r)=>{r.d(n,{A:()=>d});const d=r.p+"assets/images/woodpecker-architecture-3929270c89a1fbf3a72f17aff8bd23e5.png"},74169:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var d=r(79474);const s={},c=d.createContext(s);function i(e){const n=d.useContext(c);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),d.createElement(c.Provider,{value:n},e.children)}}}]);