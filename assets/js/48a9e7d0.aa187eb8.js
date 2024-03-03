/*! For license information please see 48a9e7d0.aa187eb8.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[5096],{45348:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>n,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var r=s(2488),o=s(51520);const a={},n="Status Badges",d={id:"usage/badges",title:"Status Badges",description:"Woodpecker has integrated support for repository status badges. These badges can be added to your website or project readme file to display the status of your code.",source:"@site/versioned_docs/version-0.15/20-usage/80-badges.md",sourceDirName:"20-usage",slug:"/usage/badges",permalink:"/docs/0.15/usage/badges",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-0.15/20-usage/80-badges.md",tags:[],version:"0.15",sidebarPosition:80,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Project settings",permalink:"/docs/0.15/usage/project-settings"},next:{title:"Setup",permalink:"/docs/0.15/administration/setup"}},i={},c=[{value:"Badge endpoint",id:"badge-endpoint",level:2}];function u(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"status-badges",children:"Status Badges"}),"\n",(0,r.jsx)(t.p,{children:"Woodpecker has integrated support for repository status badges. These badges can be added to your website or project readme file to display the status of your code."}),"\n",(0,r.jsx)(t.h2,{id:"badge-endpoint",children:"Badge endpoint"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:"<scheme>://<hostname>/api/badges/<owner>/<repo>/status.svg\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The status badge displays the status for the latest build to your default branch (e.g. master). You can customize the branch by adding the ",(0,r.jsx)(t.code,{children:"branch"})," query parameter."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-diff",children:"-<scheme>://<hostname>/api/badges/<owner>/<repo>/status.svg\n+<scheme>://<hostname>/api/badges/<owner>/<repo>/status.svg?branch=<branch>\n"})}),"\n",(0,r.jsx)(t.p,{children:"Please note status badges do not include pull request results, since the status of a pull request does not provide an accurate representation of your repository state."})]})}function p(e={}){const{wrapper:t}={...(0,o.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},38088:(e,t,s)=>{var r=s(96651),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,s){var r,a={},c=null,u=null;for(r in void 0!==s&&(c=""+s),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)n.call(t,r)&&!i.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:u,props:a,_owner:d.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},2488:(e,t,s)=>{e.exports=s(38088)},51520:(e,t,s)=>{s.d(t,{M:()=>n});var r=s(96651);const o={},a=r.createContext(o);function n(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}}}]);