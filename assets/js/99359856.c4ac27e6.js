/*! For license information please see 99359856.c4ac27e6.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[1038],{69424:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>t,contentTitle:()=>i,default:()=>x,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var d=n(2488),c=n(51520);const s={},i="Architecture",l={id:"development/architecture",title:"Architecture",description:"Package architecture",source:"@site/docs/92-development/05-architecture.md",sourceDirName:"92-development",slug:"/development/architecture",permalink:"/docs/next/development/architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/docs/92-development/05-architecture.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Documentation",permalink:"/docs/next/development/docs"},next:{title:"Guides",permalink:"/docs/next/development/guides"}},t={},h=[{value:"Package architecture",id:"package-architecture",level:2},{value:"System architecture",id:"system-architecture",level:2},{value:"main package hierarchy",id:"main-package-hierarchy",level:3},{value:"Server",id:"server",level:3},{value:"Agent",id:"agent",level:3},{value:"CLI",id:"cli",level:3}];function o(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.M)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.h1,{id:"architecture",children:"Architecture"}),"\n",(0,d.jsx)(r.h2,{id:"package-architecture",children:"Package architecture"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.img,{alt:"Woodpecker architecture",src:n(43644).c+"",width:"1530",height:"1110"})}),"\n",(0,d.jsx)(r.h2,{id:"system-architecture",children:"System architecture"}),"\n",(0,d.jsx)(r.h3,{id:"main-package-hierarchy",children:"main package hierarchy"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"package"}),(0,d.jsx)(r.th,{children:"meaning"}),(0,d.jsx)(r.th,{children:"imports"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"cmd/**"})}),(0,d.jsx)(r.td,{children:"parse command-line args & environment to stat server/cli/agent"}),(0,d.jsx)(r.td,{children:"all other"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"agent/**"})}),(0,d.jsx)(r.td,{children:"code only agent (remote worker) will need"}),(0,d.jsxs)(r.td,{children:[(0,d.jsx)(r.code,{children:"pipeline"}),", ",(0,d.jsx)(r.code,{children:"shared"})]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"cli/**"})}),(0,d.jsx)(r.td,{children:"code only cli tool does need"}),(0,d.jsxs)(r.td,{children:[(0,d.jsx)(r.code,{children:"pipeline"}),", ",(0,d.jsx)(r.code,{children:"shared"}),", ",(0,d.jsx)(r.code,{children:"woodpecker-go"})]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"server/**"})}),(0,d.jsx)(r.td,{children:"code only server will need"}),(0,d.jsxs)(r.td,{children:[(0,d.jsx)(r.code,{children:"pipeline"}),", ",(0,d.jsx)(r.code,{children:"shared"})]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"shared/**"})}),(0,d.jsx)(r.td,{children:"code shared for all three main tools (go help utils)"}),(0,d.jsx)(r.td,{children:"only std and external libs"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"woodpecker-go/**"})}),(0,d.jsx)(r.td,{children:"go client for server rest api"}),(0,d.jsx)(r.td,{children:"std"})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"server",children:"Server"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"package"}),(0,d.jsx)(r.th,{children:"meaning"}),(0,d.jsx)(r.th,{children:"imports"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"server/api/**"})}),(0,d.jsxs)(r.td,{children:["handle web requests from ",(0,d.jsx)(r.code,{children:"server/router"})]}),(0,d.jsxs)(r.td,{children:[(0,d.jsx)(r.code,{children:"pipeline"}),", ",(0,d.jsx)(r.code,{children:"../badges"}),", ",(0,d.jsx)(r.code,{children:"../ccmenue"}),", ",(0,d.jsx)(r.code,{children:"../logging"}),", ",(0,d.jsx)(r.code,{children:"../model"}),", ",(0,d.jsx)(r.code,{children:"../pubsub"}),", ",(0,d.jsx)(r.code,{children:"../queue"}),", ",(0,d.jsx)(r.code,{children:"../forge"}),", ",(0,d.jsx)(r.code,{children:"../shared"}),", ",(0,d.jsx)(r.code,{children:"../store"}),", ",(0,d.jsx)(r.code,{children:"shared"}),", (TODO: mv ",(0,d.jsx)(r.code,{children:"server/router/middleware/session"}),")"]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"server/badges/**"})}),(0,d.jsx)(r.td,{children:"generate svg badges for pipelines"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"../model"})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"server/ccmenu/**"})}),(0,d.jsx)(r.td,{children:"generate xml ccmenu for pipelines"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"../model"})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"server/grpc/**"})}),(0,d.jsx)(r.td,{children:"gRPC server agents can connect to"}),(0,d.jsxs)(r.td,{children:[(0,d.jsx)(r.code,{children:"pipeline/rpc/**"}),", ",(0,d.jsx)(r.code,{children:"../logging"}),", ",(0,d.jsx)(r.code,{children:"../model"}),", ",(0,d.jsx)(r.code,{children:"../pubsub"}),", ",(0,d.jsx)(r.code,{children:"../queue"}),", ",(0,d.jsx)(r.code,{children:"../forge"}),", ",(0,d.jsx)(r.code,{children:"../pipeline"}),", ",(0,d.jsx)(r.code,{children:"../store"})]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"server/logging/**"})}),(0,d.jsx)(r.td,{children:"logging lib for gPRC server to stream logs while running"}),(0,d.jsx)(r.td,{children:"std"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"server/model/**"})}),(0,d.jsx)(r.td,{children:"structs for store (db) and api (json)"}),(0,d.jsx)(r.td,{children:"std"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"server/plugins/**"})}),(0,d.jsx)(r.td,{children:"plugins for server"}),(0,d.jsxs)(r.td,{children:[(0,d.jsx)(r.code,{children:"../model"}),", ",(0,d.jsx)(r.code,{children:"../forge"})]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"server/pipeline/**"})}),(0,d.jsx)(r.td,{children:"orchestrate pipelines"}),(0,d.jsxs)(r.td,{children:[(0,d.jsx)(r.code,{children:"pipeline"}),", ",(0,d.jsx)(r.code,{children:"../model"}),", ",(0,d.jsx)(r.code,{children:"../pubsub"}),", ",(0,d.jsx)(r.code,{children:"../queue"}),", ",(0,d.jsx)(r.code,{children:"../forge"}),", ",(0,d.jsx)(r.code,{children:"../store"}),", ",(0,d.jsx)(r.code,{children:"../plugins"})]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"server/pubsub/**"})}),(0,d.jsx)(r.td,{children:"pubsub lib for server to push changes to the WebUI"}),(0,d.jsx)(r.td,{children:"std"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"server/queue/**"})}),(0,d.jsx)(r.td,{children:"queue lib for server where agents pull new pipelines from via gRPC"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"server/model"})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"server/forge/**"})}),(0,d.jsx)(r.td,{children:"forge lib for server to connect and handle forge specific stuff"}),(0,d.jsxs)(r.td,{children:[(0,d.jsx)(r.code,{children:"shared"}),", ",(0,d.jsx)(r.code,{children:"server/model"})]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"server/router/**"})}),(0,d.jsx)(r.td,{children:"handle requests to REST API (and all middleware) and serve UI and WebUI config"}),(0,d.jsxs)(r.td,{children:[(0,d.jsx)(r.code,{children:"shared"}),", ",(0,d.jsx)(r.code,{children:"../api"}),", ",(0,d.jsx)(r.code,{children:"../model"}),", ",(0,d.jsx)(r.code,{children:"../forge"}),", ",(0,d.jsx)(r.code,{children:"../store"}),", ",(0,d.jsx)(r.code,{children:"../web"})]})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"server/store/**"})}),(0,d.jsx)(r.td,{children:"handle database"}),(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"server/model"})})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"server/shared/**"})}),(0,d.jsxs)(r.td,{children:["TODO: move and split ",(0,d.jsx)(r.a,{href:"https://github.com/woodpecker-ci/woodpecker/issues/974",children:"#974"})]}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:(0,d.jsx)(r.code,{children:"server/web/**"})}),(0,d.jsx)(r.td,{children:"server SPA"}),(0,d.jsx)(r.td,{})]})]})]}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsxs)(r.li,{children:[(0,d.jsx)(r.code,{children:"../"})," = ",(0,d.jsx)(r.code,{children:"server/"})]}),"\n"]}),"\n",(0,d.jsx)(r.h3,{id:"agent",children:"Agent"}),"\n",(0,d.jsx)(r.p,{children:"TODO"}),"\n",(0,d.jsx)(r.h3,{id:"cli",children:"CLI"}),"\n",(0,d.jsx)(r.p,{children:"TODO"})]})}function x(e={}){const{wrapper:r}={...(0,c.M)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},38088:(e,r,n)=>{var d=n(96651),c=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t={key:!0,ref:!0,__self:!0,__source:!0};function h(e,r,n){var d,s={},h=null,o=null;for(d in void 0!==n&&(h=""+n),void 0!==r.key&&(h=""+r.key),void 0!==r.ref&&(o=r.ref),r)i.call(r,d)&&!t.hasOwnProperty(d)&&(s[d]=r[d]);if(e&&e.defaultProps)for(d in r=e.defaultProps)void 0===s[d]&&(s[d]=r[d]);return{$$typeof:c,type:e,key:h,ref:o,props:s,_owner:l.current}}r.Fragment=s,r.jsx=h,r.jsxs=h},2488:(e,r,n)=>{e.exports=n(38088)},43644:(e,r,n)=>{n.d(r,{c:()=>d});const d=n.p+"assets/images/woodpecker-architecture-3929270c89a1fbf3a72f17aff8bd23e5.png"},51520:(e,r,n)=>{n.d(r,{M:()=>i});var d=n(96651);const c={},s=d.createContext(c);function i(e){const r=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}}}]);