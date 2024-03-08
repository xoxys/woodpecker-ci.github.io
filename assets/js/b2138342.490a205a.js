/*! For license information please see b2138342.490a205a.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[5042],{40788:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var o=n(13274),r=n(74169);const s={},i="Kubernetes",c={id:"administration/deployment/kubernetes",title:"Kubernetes",description:"We recommended to deploy Woodpecker using the Woodpecker helm chart.",source:"@site/versioned_docs/version-2.3/30-administration/00-deployment/20-kubernetes.md",sourceDirName:"30-administration/00-deployment",slug:"/administration/deployment/kubernetes",permalink:"/docs/administration/deployment/kubernetes",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-2.3/30-administration/00-deployment/20-kubernetes.md",tags:[],version:"2.3",sidebarPosition:20,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"docker-compose",permalink:"/docs/administration/deployment/docker-compose"},next:{title:"NixOS",permalink:"/docs/administration/deployment/nixos"}},d={},a=[];function l(e){const t={a:"a",code:"code",h1:"h1",p:"p",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"kubernetes",children:"Kubernetes"}),"\n",(0,o.jsxs)(t.p,{children:["We recommended to deploy Woodpecker using the ",(0,o.jsx)(t.a,{href:"https://github.com/woodpecker-ci/helm",children:"Woodpecker helm chart"}),".\nHave a look at the ",(0,o.jsx)(t.a,{href:"https://github.com/woodpecker-ci/helm/blob/main/charts/woodpecker/values.yaml",children:(0,o.jsx)(t.code,{children:"values.yaml"})})," config files for all available settings."]}),"\n",(0,o.jsxs)(t.p,{children:["The chart contains two subcharts, ",(0,o.jsx)(t.code,{children:"server"})," and ",(0,o.jsx)(t.code,{children:"agent"})," which are automatically configured as needed.\nThe chart started off with two independent charts but was merged into one to simplify the deployment at start of 2023."]}),"\n",(0,o.jsxs)(t.p,{children:["A couple of backend-specific config env vars exists which are described in the ",(0,o.jsx)(t.a,{href:"/docs/administration/backends/kubernetes",children:"kubernetes backend docs"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},78034:(e,t,n)=>{var o=n(79474),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var o,s={},a=null,l=null;for(o in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,o)&&!d.hasOwnProperty(o)&&(s[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===s[o]&&(s[o]=t[o]);return{$$typeof:r,type:e,key:a,ref:l,props:s,_owner:c.current}}t.Fragment=s,t.jsx=a,t.jsxs=a},13274:(e,t,n)=>{e.exports=n(78034)},74169:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var o=n(79474);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);