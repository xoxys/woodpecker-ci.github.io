/*! For license information please see e9dd4284.05ab08d6.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[6658],{27909:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var i=o(11527),r=o(88672);const t={},s="Addons",d={id:"administration/addons/overview",title:"Addons",description:"Addons are still experimental. Their implementation can change and break at any time.",source:"@site/versioned_docs/version-2.2/30-administration/75-addons/00-overview.md",sourceDirName:"30-administration/75-addons",slug:"/administration/addons/overview",permalink:"/docs/2.2/administration/addons/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-2.2/30-administration/75-addons/00-overview.md",tags:[],version:"2.2",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"NixOS",permalink:"/docs/2.2/administration/deployment/nixos"},next:{title:"Creating addons",permalink:"/docs/2.2/administration/addons/creating-addons"}},a={},c=[{value:"Restrictions",id:"restrictions",level:2},{value:"Usage",id:"usage",level:2},{value:"Bug reports",id:"bug-reports",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"addons",children:"Addons"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Addons are still experimental. Their implementation can change and break at any time."})}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsx)(n.p,{children:"You need to trust the author of the addons you use. Depending on their type, addons can access forge authentication codes, your secrets or other sensitive information."})}),"\n",(0,i.jsxs)(n.p,{children:["To adapt Woodpecker to your needs beyond the ",(0,i.jsx)(n.a,{href:"/docs/2.2/administration/server-config",children:"configuration"}),", Woodpecker has its own ",(0,i.jsx)(n.strong,{children:"addon"})," system, built ontop of ",(0,i.jsx)(n.a,{href:"https://go.dev/pkg/plugin",children:"Go's internal plugin system"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Addons can be used for:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Forges"}),"\n",(0,i.jsx)(n.li,{children:"Agent backends"}),"\n",(0,i.jsx)(n.li,{children:"Config services"}),"\n",(0,i.jsx)(n.li,{children:"Secret services"}),"\n",(0,i.jsx)(n.li,{children:"Environment services"}),"\n",(0,i.jsx)(n.li,{children:"Registry services"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"restrictions",children:"Restrictions"}),"\n",(0,i.jsx)(n.p,{children:"Addons are restricted by how Go plugins work. This includes the following restrictions:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"only supported on Linux, FreeBSD, and macOS"}),"\n",(0,i.jsx)(n.li,{children:"addons must have been built for the correct Woodpecker version. If an addon is not provided specifically for this version, you likely won't be able to use it."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.p,{children:"To use an addon, download the addon version built for your Woodpecker version. Then, you can add the following to your configuration:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ini",children:"WOODPECKER_ADDONS=/path/to/your/addon/file.so\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In case you run Woodpecker as container, you probably want to mount the addon binaries to ",(0,i.jsx)(n.code,{children:"/opt/addons/"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"You can list multiple addons, Woodpecker will automatically determine their type. If you specify multiple addons with the same type, only the first one will be used."}),"\n",(0,i.jsx)(n.p,{children:"Using an addon always overwrites Woodpecker's internal setup. This means, that a forge addon will be used if specified, no matter what's configured for the forges natively supported by Woodpecker."}),"\n",(0,i.jsx)(n.h3,{id:"bug-reports",children:"Bug reports"}),"\n",(0,i.jsxs)(n.p,{children:["If you experience bugs, please check which component has the issue. If it's the addon, ",(0,i.jsx)(n.strong,{children:"do not raise an issue in the main repository"}),", but rather use the separate addon repositories. To check which component is responsible for the bug, look at the logs. Logs from addons are marked with a special field ",(0,i.jsx)(n.code,{children:"addon"})," containing their addon file name."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},3354:(e,n,o)=>{var i=o(50959),r=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,d=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,o){var i,t={},c=null,l=null;for(i in void 0!==o&&(c=""+o),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)s.call(n,i)&&!a.hasOwnProperty(i)&&(t[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===t[i]&&(t[i]=n[i]);return{$$typeof:r,type:e,key:c,ref:l,props:t,_owner:d.current}}n.Fragment=t,n.jsx=c,n.jsxs=c},11527:(e,n,o)=>{e.exports=o(3354)},88672:(e,n,o)=>{o.d(n,{Z:()=>d,a:()=>s});var i=o(50959);const r={},t=i.createContext(r);function s(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);