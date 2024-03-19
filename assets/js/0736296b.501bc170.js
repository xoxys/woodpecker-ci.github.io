/*! For license information please see 0736296b.501bc170.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[260],{95730:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>n,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var o=s(13274),r=s(74169);const a={},n="Status Badges",d={id:"usage/badges",title:"Status Badges",description:"Woodpecker has integrated support for repository status badges. These badges can be added to your website or project readme file to display the status of your code.",source:"@site/versioned_docs/version-2.4/20-usage/80-badges.md",sourceDirName:"20-usage",slug:"/usage/badges",permalink:"/docs/usage/badges",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-2.4/20-usage/80-badges.md",tags:[],version:"2.4",sidebarPosition:80,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Project settings",permalink:"/docs/usage/project-settings"},next:{title:"Advanced usage",permalink:"/docs/usage/advanced-usage"}},i={},c=[{value:"Badge endpoint",id:"badge-endpoint",level:2}];function u(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"status-badges",children:"Status Badges"}),"\n",(0,o.jsx)(t.p,{children:"Woodpecker has integrated support for repository status badges. These badges can be added to your website or project readme file to display the status of your code."}),"\n",(0,o.jsx)(t.h2,{id:"badge-endpoint",children:"Badge endpoint"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-uri",children:"<scheme>://<hostname>/api/badges/<repo-id>/status.svg\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The status badge displays the status for the latest build to your default branch (e.g. main). You can customize the branch by adding the ",(0,o.jsx)(t.code,{children:"branch"})," query parameter."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-diff",children:"-<scheme>://<hostname>/api/badges/<repo-id>/status.svg\n+<scheme>://<hostname>/api/badges/<repo-id>/status.svg?branch=<branch>\n"})}),"\n",(0,o.jsx)(t.p,{children:"Please note status badges do not include pull request results, since the status of a pull request does not provide an accurate representation of your repository state."})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},78034:(e,t,s)=>{var o=s(79474),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,d=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,s){var o,a={},c=null,u=null;for(o in void 0!==s&&(c=""+s),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)n.call(t,o)&&!i.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===a[o]&&(a[o]=t[o]);return{$$typeof:r,type:e,key:c,ref:u,props:a,_owner:d.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},13274:(e,t,s)=>{e.exports=s(78034)},74169:(e,t,s)=>{s.d(t,{R:()=>n,x:()=>d});var o=s(79474);const r={},a=o.createContext(r);function n(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);