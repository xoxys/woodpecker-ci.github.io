/*! For license information please see a699c852.2b5efe28.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[2131],{33435:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=n(11527),o=n(88672);const r={},s="GitHub",c={id:"administration/vcs/github",title:"GitHub",description:"Woodpecker comes with built-in support for GitHub and GitHub Enterprise. To enable GitHub you should configure the Woodpecker server using the following environment variables:",source:"@site/versioned_docs/version-0.15/30-administration/11-vcs/20-github.md",sourceDirName:"30-administration/11-vcs",slug:"/administration/vcs/github",permalink:"/docs/0.15/administration/vcs/github",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-0.15/30-administration/11-vcs/20-github.md",tags:[],version:"0.15",sidebarPosition:20,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/0.15/administration/vcs/overview"},next:{title:"Gitea",permalink:"/docs/0.15/administration/vcs/gitea"}},d={},l=[{value:"Registration",id:"registration",level:2},{value:"Configuration",id:"configuration",level:2},{value:"<code>WOODPECKER_GITHUB</code>",id:"woodpecker_github",level:3},{value:"<code>WOODPECKER_GITHUB_URL</code>",id:"woodpecker_github_url",level:3},{value:"<code>WOODPECKER_GITHUB_CLIENT</code>",id:"woodpecker_github_client",level:3},{value:"<code>WOODPECKER_GITHUB_SECRET</code>",id:"woodpecker_github_secret",level:3},{value:"<code>WOODPECKER_GITHUB_MERGE_REF</code>",id:"woodpecker_github_merge_ref",level:3},{value:"<code>WOODPECKER_GITHUB_SKIP_VERIFY</code>",id:"woodpecker_github_skip_verify",level:3}];function a(e){const i={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"github",children:"GitHub"}),"\n",(0,t.jsx)(i.p,{children:"Woodpecker comes with built-in support for GitHub and GitHub Enterprise. To enable GitHub you should configure the Woodpecker server using the following environment variables:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-diff",children:"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    environment:\n      - [...]\n+     - WOODPECKER_GITHUB=true\n+     - WOODPECKER_GITHUB_CLIENT=${WOODPECKER_GITHUB_CLIENT}\n+     - WOODPECKER_GITHUB_SECRET=${WOODPECKER_GITHUB_SECRET}\n\n  woodpecker-agent:\n    [...]\n"})}),"\n",(0,t.jsx)(i.h2,{id:"registration",children:"Registration"}),"\n",(0,t.jsxs)(i.p,{children:["Register your application with GitHub to create your client id and secret. It is very import the authorization callback URL matches your http(s) scheme and hostname exactly with ",(0,t.jsx)(i.code,{children:"<scheme>://<host>/authorize"})," as the path."]}),"\n",(0,t.jsx)(i.p,{children:"Please use this screenshot for reference:"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"github oauth setup",src:n(39643).Z+"",width:"789",height:"787"})}),"\n",(0,t.jsx)(i.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(i.p,{children:"This is a full list of configuration options. Please note that many of these options use default configuration values that should work for the majority of installations."}),"\n",(0,t.jsx)(i.h3,{id:"woodpecker_github",children:(0,t.jsx)(i.code,{children:"WOODPECKER_GITHUB"})}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsxs)(i.p,{children:["Default: ",(0,t.jsx)(i.code,{children:"false"})]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Enables the GitHub driver."}),"\n",(0,t.jsx)(i.h3,{id:"woodpecker_github_url",children:(0,t.jsx)(i.code,{children:"WOODPECKER_GITHUB_URL"})}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsxs)(i.p,{children:["Default: ",(0,t.jsx)(i.code,{children:"https://github.com"})]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Configures the GitHub server address."}),"\n",(0,t.jsx)(i.h3,{id:"woodpecker_github_client",children:(0,t.jsx)(i.code,{children:"WOODPECKER_GITHUB_CLIENT"})}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsx)(i.p,{children:"Default: empty"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Configures the GitHub OAuth client id. This is used to authorize access."}),"\n",(0,t.jsx)(i.h3,{id:"woodpecker_github_secret",children:(0,t.jsx)(i.code,{children:"WOODPECKER_GITHUB_SECRET"})}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsx)(i.p,{children:"Default: empty"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Configures the GitHub OAuth client secret. This is used to authorize access."}),"\n",(0,t.jsx)(i.h3,{id:"woodpecker_github_merge_ref",children:(0,t.jsx)(i.code,{children:"WOODPECKER_GITHUB_MERGE_REF"})}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsxs)(i.p,{children:["Default: ",(0,t.jsx)(i.code,{children:"true"})]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"TODO"}),"\n",(0,t.jsx)(i.h3,{id:"woodpecker_github_skip_verify",children:(0,t.jsx)(i.code,{children:"WOODPECKER_GITHUB_SKIP_VERIFY"})}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsxs)(i.p,{children:["Default: ",(0,t.jsx)(i.code,{children:"false"})]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Configure if SSL verification should be skipped."})]})}function u(e={}){const{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},3354:(e,i,n)=>{var t=n(50959),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,i,n){var t,r={},l=null,a=null;for(t in void 0!==n&&(l=""+n),void 0!==i.key&&(l=""+i.key),void 0!==i.ref&&(a=i.ref),i)s.call(i,t)&&!d.hasOwnProperty(t)&&(r[t]=i[t]);if(e&&e.defaultProps)for(t in i=e.defaultProps)void 0===r[t]&&(r[t]=i[t]);return{$$typeof:o,type:e,key:l,ref:a,props:r,_owner:c.current}}i.Fragment=r,i.jsx=l,i.jsxs=l},11527:(e,i,n)=>{e.exports=n(3354)},39643:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/github_oauth-c5a964d7dc0bf3ca699b2ebf1d00e797.png"},88672:(e,i,n)=>{n.d(i,{Z:()=>c,a:()=>s});var t=n(50959);const o={},r=t.createContext(o);function s(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);