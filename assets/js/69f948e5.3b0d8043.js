/*! For license information please see 69f948e5.3b0d8043.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[9071],{99430:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var i=n(11527),o=n(88672);const r={},s="GitHub",c={id:"administration/forges/github",title:"GitHub",description:"Woodpecker comes with built-in support for GitHub and GitHub Enterprise.",source:"@site/versioned_docs/version-2.0/30-administration/11-forges/20-github.md",sourceDirName:"30-administration/11-forges",slug:"/administration/forges/github",permalink:"/docs/2.0/administration/forges/github",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-2.0/30-administration/11-forges/20-github.md",tags:[],version:"2.0",sidebarPosition:20,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/2.0/administration/forges/overview"},next:{title:"Gitea / Forgejo",permalink:"/docs/2.0/administration/forges/gitea"}},l={},a=[{value:"App Settings",id:"app-settings",level:2},{value:"Client Secret Creation",id:"client-secret-creation",level:2},{value:"All GitHub Configuration Options",id:"all-github-configuration-options",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"github",children:"GitHub"}),"\n",(0,i.jsx)(t.p,{children:"Woodpecker comes with built-in support for GitHub and GitHub Enterprise.\nTo use Woodpecker with GitHub the following environment variables should be set for the server component:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"WOODPECKER_GITHUB=true\nWOODPECKER_GITHUB_CLIENT=YOUR_GITHUB_CLIENT_ID\nWOODPECKER_GITHUB_SECRET=YOUR_GITHUB_CLIENT_SECRET\n"})}),"\n",(0,i.jsx)(t.p,{children:"You will get these values from GitHub when you register your OAuth application.\nTo do so, go to Settings -> Developer Settings -> GitHub Apps -> New Oauth2 App."}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:'Do not use a "GitHub App" instead of an Oauth2 app as the former will not work correctly with Woodpecker right now (because user access tokens are not being refreshed automatically)'})}),"\n",(0,i.jsx)(t.h2,{id:"app-settings",children:"App Settings"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Name: An arbitrary name for your App"}),"\n",(0,i.jsx)(t.li,{children:"Homepage URL: The URL of your Woodpecker instance"}),"\n",(0,i.jsxs)(t.li,{children:["Callback URL: ",(0,i.jsx)(t.code,{children:"https://<your-woodpecker-instance>/authorize"})]}),"\n",(0,i.jsxs)(t.li,{children:["(optional) Upload the Woodpecker Logo: ",(0,i.jsx)(t.a,{href:"https://avatars.githubusercontent.com/u/84780935?s=200&v=4",children:"https://avatars.githubusercontent.com/u/84780935?s=200&v=4"})]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"client-secret-creation",children:"Client Secret Creation"}),"\n",(0,i.jsxs)(t.p,{children:["After your App has been created, you can generate a client secret.\nUse this one for the ",(0,i.jsx)(t.code,{children:"WOODPECKER_GITHUB_SECRET"})," environment variable."]}),"\n",(0,i.jsx)(t.h2,{id:"all-github-configuration-options",children:"All GitHub Configuration Options"}),"\n",(0,i.jsx)(t.p,{children:"This is a full list of configuration options. Please note that many of these options use default configuration values that should work for the majority of installations."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"WOODPECKER_GITHUB"})," - Enables the GitHub driver (Default: ",(0,i.jsx)(t.code,{children:"false"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"WOODPECKER_GITHUB_URL"})," - Configures the GitHub server address (Default: ",(0,i.jsx)(t.code,{children:"https://github.com"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"WOODPECKER_GITHUB_CLIENT"})," - Configures the GitHub OAuth client id to authorize access (Default: empty)"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"WOODPECKER_GITHUB_CLIENT_FILE"})," - Read the value for ",(0,i.jsx)(t.code,{children:"WOODPECKER_GITHUB_CLIENT"})," from the specified filepath (Default: empty)"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"WOODPECKER_GITHUB_SECRET"})," - Configures the GitHub OAuth client secret. This is used to authorize access. (Default: empty)"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"WOODPECKER_GITHUB_SECRET_FILE"})," - Read the value for ",(0,i.jsx)(t.code,{children:"WOODPECKER_GITHUB_SECRET"})," from the specified filepath (Default: empty)"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"WOODPECKER_GITHUB_MERGE_REF"})," - (Default: ",(0,i.jsx)(t.code,{children:"true"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"WOODPECKER_GITHUB_SKIP_VERIFY"})," - Configure if SSL verification should be skipped (Default: ",(0,i.jsx)(t.code,{children:"false"}),")"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},3354:(e,t,n)=>{var i=n(50959),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var i,r={},a=null,d=null;for(i in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,i)&&!l.hasOwnProperty(i)&&(r[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===r[i]&&(r[i]=t[i]);return{$$typeof:o,type:e,key:a,ref:d,props:r,_owner:c.current}}t.Fragment=r,t.jsx=a,t.jsxs=a},11527:(e,t,n)=>{e.exports=n(3354)},88672:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>s});var i=n(50959);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);