/*! For license information please see 2a9c7718.3f8d2ec0.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[8529],{54013:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var n=r(13274),s=r(74169);const t={},i="Downloads",d={id:"downloads",title:"Downloads",description:"Which version of Woodpecker should I use?",source:"@site/versioned_docs/version-1.0/80-downloads.md",sourceDirName:".",slug:"/downloads",permalink:"/docs/1.0/downloads",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-1.0/80-downloads.md",tags:[],version:"1.0",sidebarPosition:80,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CLI",permalink:"/docs/1.0/cli"},next:{title:"Migrations",permalink:"/docs/1.0/migrations"}},c={},l=[{value:"Which version of Woodpecker should I use?",id:"which-version-of-woodpecker-should-i-use",level:2},{value:"Binaries &amp; DEB, RPM",id:"binaries--deb-rpm",level:2},{value:"Docker images",id:"docker-images",level:2}];function a(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"downloads",children:"Downloads"}),"\n",(0,n.jsx)(o.h2,{id:"which-version-of-woodpecker-should-i-use",children:"Which version of Woodpecker should I use?"}),"\n",(0,n.jsxs)(o.p,{children:["Woodpecker is having two different kinds of releases: ",(0,n.jsx)(o.strong,{children:"stable"})," and ",(0,n.jsx)(o.strong,{children:"next"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["To find out more about the differences between the two releases, please read the ",(0,n.jsx)(o.a,{href:"/faq",children:"FAQ"}),"."]}),"\n",(0,n.jsx)(o.h2,{id:"binaries--deb-rpm",children:"Binaries & DEB, RPM"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.a,{href:"https://github.com/woodpecker-ci/woodpecker/releases/latest",children:"Latest release"})}),"\n",(0,n.jsx)(o.h2,{id:"docker-images",children:"Docker images"}),"\n",(0,n.jsx)(o.p,{children:"Image variants:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["The ",(0,n.jsx)(o.code,{children:"latest"})," image is the latest stable release"]}),"\n",(0,n.jsxs)(o.li,{children:["The ",(0,n.jsx)(o.code,{children:"vX.X.X"})," images are stable releases"]}),"\n",(0,n.jsxs)(o.li,{children:["The ",(0,n.jsx)(o.code,{children:"vX.X"})," images are based on the current release branch (e.g. ",(0,n.jsx)(o.code,{children:"release/v1.0"}),") and can be used to get bugfixes asap"]}),"\n",(0,n.jsxs)(o.li,{children:["The ",(0,n.jsx)(o.code,{children:"next"})," images are based on the current ",(0,n.jsx)(o.code,{children:"main"})," branch and should not be used for production environments"]}),"\n"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"# server\ndocker pull woodpeckerci/woodpecker-server:latest\ndocker pull woodpeckerci/woodpecker-server:latest-alpine\n\n# agent\ndocker pull woodpeckerci/woodpecker-agent:latest\ndocker pull woodpeckerci/woodpecker-agent:latest-alpine\n\n# cli\ndocker pull woodpeckerci/woodpecker-cli:latest\ndocker pull woodpeckerci/woodpecker-cli:latest-alpine\n"})})]})}function p(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},78034:(e,o,r)=>{var n=r(79474),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,o,r){var n,t={},l=null,a=null;for(n in void 0!==r&&(l=""+r),void 0!==o.key&&(l=""+o.key),void 0!==o.ref&&(a=o.ref),o)i.call(o,n)&&!c.hasOwnProperty(n)&&(t[n]=o[n]);if(e&&e.defaultProps)for(n in o=e.defaultProps)void 0===t[n]&&(t[n]=o[n]);return{$$typeof:s,type:e,key:l,ref:a,props:t,_owner:d.current}}o.Fragment=t,o.jsx=l,o.jsxs=l},13274:(e,o,r)=>{e.exports=r(78034)},74169:(e,o,r)=>{r.d(o,{R:()=>i,x:()=>d});var n=r(79474);const s={},t=n.createContext(s);function i(e){const o=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(t.Provider,{value:o},e.children)}}}]);