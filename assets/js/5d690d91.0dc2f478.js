/*! For license information please see 5d690d91.0dc2f478.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[2449],{33171:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=i(13274),o=i(74169);const s={toc_max_heading_level:2},r="Bitbucket",c={id:"administration/forges/bitbucket",title:"Bitbucket",description:"Woodpecker comes with built-in support for Bitbucket Cloud. To enable Bitbucket Cloud you should configure the Woodpecker container using the following environment variables:",source:"@site/versioned_docs/version-2.3/30-administration/11-forges/50-bitbucket.md",sourceDirName:"30-administration/11-forges",slug:"/administration/forges/bitbucket",permalink:"/docs/2.3/administration/forges/bitbucket",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-2.3/30-administration/11-forges/50-bitbucket.md",tags:[],version:"2.3",sidebarPosition:50,frontMatter:{toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"GitLab",permalink:"/docs/2.3/administration/forges/gitlab"},next:{title:"Agent configuration",permalink:"/docs/2.3/administration/agent-config"}},d={},l=[{value:"Registration",id:"registration",level:2},{value:"Configuration",id:"configuration",level:2},{value:"<code>WOODPECKER_BITBUCKET</code>",id:"woodpecker_bitbucket",level:3},{value:"<code>WOODPECKER_BITBUCKET_CLIENT</code>",id:"woodpecker_bitbucket_client",level:3},{value:"<code>WOODPECKER_BITBUCKET_CLIENT_FILE</code>",id:"woodpecker_bitbucket_client_file",level:3},{value:"<code>WOODPECKER_BITBUCKET_SECRET</code>",id:"woodpecker_bitbucket_secret",level:3},{value:"<code>WOODPECKER_BITBUCKET_SECRET_FILE</code>",id:"woodpecker_bitbucket_secret_file",level:3},{value:"Missing Features",id:"missing-features",level:2}];function a(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"bitbucket",children:"Bitbucket"}),"\n",(0,n.jsx)(t.p,{children:"Woodpecker comes with built-in support for Bitbucket Cloud. To enable Bitbucket Cloud you should configure the Woodpecker container using the following environment variables:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ini",children:'WOODPECKER_BITBUCKET=true\nWOODPECKER_BITBUCKET_CLIENT=... # called "Key" in Bitbucket\nWOODPECKER_BITBUCKET_SECRET=...\n'})}),"\n",(0,n.jsx)(t.h2,{id:"registration",children:"Registration"}),"\n",(0,n.jsxs)(t.p,{children:["You must register an OAuth application at Bitbucket in order to get a key and secret combination for woodpecker. Navigate to your workspace settings and choose ",(0,n.jsx)(t.code,{children:"OAuth consumers"})," from the menu, and finally click ",(0,n.jsx)(t.code,{children:"Add Consumer"})," (the url should be like: ",(0,n.jsx)(t.code,{children:"https://bitbucket.org/[your-project-name]/workspace/settings/api"}),")."]}),"\n",(0,n.jsxs)(t.p,{children:["Please set a name and set the ",(0,n.jsx)(t.code,{children:"Callback URL"})," like this:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-uri",children:"https://<your-woodpecker-address>/authorize\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"bitbucket oauth setup",src:i(2827).A+"",width:"826",height:"905"})}),"\n",(0,n.jsx)(t.p,{children:"Please also be sure to check the following permissions:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Account: Email, Read"}),"\n",(0,n.jsx)(t.li,{children:"Workspace membership: Read"}),"\n",(0,n.jsx)(t.li,{children:"Projects: Read"}),"\n",(0,n.jsx)(t.li,{children:"Repositories: Read"}),"\n",(0,n.jsx)(t.li,{children:"Pull requests: Read"}),"\n",(0,n.jsx)(t.li,{children:"Webhooks: Read and Write"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"bitbucket permissions",src:i(93358).A+"",width:"851",height:"529"})}),"\n",(0,n.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsx)(t.p,{children:"This is a full list of configuration options. Please note that many of these options use default configuration values that should work for the majority of installations."}),"\n",(0,n.jsx)(t.h3,{id:"woodpecker_bitbucket",children:(0,n.jsx)(t.code,{children:"WOODPECKER_BITBUCKET"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["Default: ",(0,n.jsx)(t.code,{children:"false"})]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Enables the Bitbucket driver."}),"\n",(0,n.jsx)(t.h3,{id:"woodpecker_bitbucket_client",children:(0,n.jsx)(t.code,{children:"WOODPECKER_BITBUCKET_CLIENT"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Default: empty"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Configures the Bitbucket OAuth client key. This is used to authorize access."}),"\n",(0,n.jsx)(t.h3,{id:"woodpecker_bitbucket_client_file",children:(0,n.jsx)(t.code,{children:"WOODPECKER_BITBUCKET_CLIENT_FILE"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Default: empty"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Read the value for ",(0,n.jsx)(t.code,{children:"WOODPECKER_BITBUCKET_CLIENT"})," from the specified filepath"]}),"\n",(0,n.jsx)(t.h3,{id:"woodpecker_bitbucket_secret",children:(0,n.jsx)(t.code,{children:"WOODPECKER_BITBUCKET_SECRET"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Default: empty"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Configures the Bitbucket OAuth client secret. This is used to authorize access."}),"\n",(0,n.jsx)(t.h3,{id:"woodpecker_bitbucket_secret_file",children:(0,n.jsx)(t.code,{children:"WOODPECKER_BITBUCKET_SECRET_FILE"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Default: empty"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Read the value for ",(0,n.jsx)(t.code,{children:"WOODPECKER_BITBUCKET_SECRET"})," from the specified filepath"]}),"\n",(0,n.jsx)(t.h2,{id:"missing-features",children:"Missing Features"}),"\n",(0,n.jsxs)(t.p,{children:["Path filters for pull requests are not supported. We are interested in patches to include this functionality.\nIf you are interested in contributing to Woodpecker and submitting a patch please ",(0,n.jsx)(t.strong,{children:"contact us"})," via ",(0,n.jsx)(t.a,{href:"https://discord.gg/fcMQqSMXJy",children:"Discord"})," or ",(0,n.jsx)(t.a,{href:"https://matrix.to/#/#WoodpeckerCI-Develop:obermui.de",children:"Matrix"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},78034:(e,t,i)=>{var n=i(79474),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,i){var n,s={},l=null,a=null;for(n in void 0!==i&&(l=""+i),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(a=t.ref),t)r.call(t,n)&&!d.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:a,props:s,_owner:c.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},13274:(e,t,i)=>{e.exports=i(78034)},2827:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/bitbucket_oauth-fa2bb88f9a455135d26209d7609ef98d.png"},93358:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/bitbucket_permissions-2d732e3a898624c63badc4a15549adcc.png"},74169:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>c});var n=i(79474);const o={},s=n.createContext(o);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);