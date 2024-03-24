"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[2649],{73710:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>s,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=n(13274),o=n(74169);const r={toc_max_heading_level:2},s="GitHub",c={id:"administration/forges/github",title:"GitHub",description:"Woodpecker comes with built-in support for GitHub and GitHub Enterprise.",source:"@site/versioned_docs/version-2.3/30-administration/11-forges/20-github.md",sourceDirName:"30-administration/11-forges",slug:"/administration/forges/github",permalink:"/docs/2.3/administration/forges/github",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-2.3/30-administration/11-forges/20-github.md",tags:[],version:"2.3",sidebarPosition:20,frontMatter:{toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"Forges",permalink:"/docs/2.3/administration/forges/overview"},next:{title:"Gitea / Forgejo",permalink:"/docs/2.3/administration/forges/gitea"}},d={},l=[{value:"App Settings",id:"app-settings",level:2},{value:"Client Secret Creation",id:"client-secret-creation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"<code>WOODPECKER_GITHUB</code>",id:"woodpecker_github",level:3},{value:"<code>WOODPECKER_GITHUB_URL</code>",id:"woodpecker_github_url",level:3},{value:"<code>WOODPECKER_GITHUB_CLIENT</code>",id:"woodpecker_github_client",level:3},{value:"<code>WOODPECKER_GITHUB_CLIENT_FILE</code>",id:"woodpecker_github_client_file",level:3},{value:"<code>WOODPECKER_GITHUB_SECRET</code>",id:"woodpecker_github_secret",level:3},{value:"<code>WOODPECKER_GITHUB_SECRET_FILE</code>",id:"woodpecker_github_secret_file",level:3},{value:"<code>WOODPECKER_GITHUB_MERGE_REF</code>",id:"woodpecker_github_merge_ref",level:3},{value:"<code>WOODPECKER_GITHUB_SKIP_VERIFY</code>",id:"woodpecker_github_skip_verify",level:3}];function h(e){const i={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"github",children:"GitHub"}),"\n",(0,t.jsx)(i.p,{children:"Woodpecker comes with built-in support for GitHub and GitHub Enterprise.\nTo use Woodpecker with GitHub the following environment variables should be set for the server component:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-ini",children:"WOODPECKER_GITHUB=true\nWOODPECKER_GITHUB_CLIENT=YOUR_GITHUB_CLIENT_ID\nWOODPECKER_GITHUB_SECRET=YOUR_GITHUB_CLIENT_SECRET\n"})}),"\n",(0,t.jsx)(i.p,{children:"You will get these values from GitHub when you register your OAuth application.\nTo do so, go to Settings -> Developer Settings -> GitHub Apps -> New Oauth2 App."}),"\n",(0,t.jsx)(i.admonition,{type:"warning",children:(0,t.jsx)(i.p,{children:'Do not use a "GitHub App" instead of an Oauth2 app as the former will not work correctly with Woodpecker right now (because user access tokens are not being refreshed automatically)'})}),"\n",(0,t.jsx)(i.h2,{id:"app-settings",children:"App Settings"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Name: An arbitrary name for your App"}),"\n",(0,t.jsx)(i.li,{children:"Homepage URL: The URL of your Woodpecker instance"}),"\n",(0,t.jsxs)(i.li,{children:["Callback URL: ",(0,t.jsx)(i.code,{children:"https://<your-woodpecker-instance>/authorize"})]}),"\n",(0,t.jsxs)(i.li,{children:["(optional) Upload the Woodpecker Logo: ",(0,t.jsx)(i.a,{href:"https://avatars.githubusercontent.com/u/84780935?s=200&v=4",children:"https://avatars.githubusercontent.com/u/84780935?s=200&v=4"})]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"client-secret-creation",children:"Client Secret Creation"}),"\n",(0,t.jsxs)(i.p,{children:["After your App has been created, you can generate a client secret.\nUse this one for the ",(0,t.jsx)(i.code,{children:"WOODPECKER_GITHUB_SECRET"})," environment variable."]}),"\n",(0,t.jsx)(i.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(i.p,{children:"This is a full list of configuration options. Please note that many of these options use default configuration values that should work for the majority of installations."}),"\n",(0,t.jsx)(i.h3,{id:"woodpecker_github",children:(0,t.jsx)(i.code,{children:"WOODPECKER_GITHUB"})}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsxs)(i.p,{children:["Default: ",(0,t.jsx)(i.code,{children:"false"})]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Enables the GitHub driver."}),"\n",(0,t.jsx)(i.h3,{id:"woodpecker_github_url",children:(0,t.jsx)(i.code,{children:"WOODPECKER_GITHUB_URL"})}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsxs)(i.p,{children:["Default: ",(0,t.jsx)(i.code,{children:"https://github.com"})]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Configures the GitHub server address."}),"\n",(0,t.jsx)(i.h3,{id:"woodpecker_github_client",children:(0,t.jsx)(i.code,{children:"WOODPECKER_GITHUB_CLIENT"})}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsx)(i.p,{children:"Default: empty"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Configures the GitHub OAuth client id to authorize access."}),"\n",(0,t.jsx)(i.h3,{id:"woodpecker_github_client_file",children:(0,t.jsx)(i.code,{children:"WOODPECKER_GITHUB_CLIENT_FILE"})}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsx)(i.p,{children:"Default: empty"}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["Read the value for ",(0,t.jsx)(i.code,{children:"WOODPECKER_GITHUB_CLIENT"})," from the specified filepath."]}),"\n",(0,t.jsx)(i.h3,{id:"woodpecker_github_secret",children:(0,t.jsx)(i.code,{children:"WOODPECKER_GITHUB_SECRET"})}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsx)(i.p,{children:"Default: empty"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Configures the GitHub OAuth client secret. This is used to authorize access."}),"\n",(0,t.jsx)(i.h3,{id:"woodpecker_github_secret_file",children:(0,t.jsx)(i.code,{children:"WOODPECKER_GITHUB_SECRET_FILE"})}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsx)(i.p,{children:"Default: empty"}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["Read the value for ",(0,t.jsx)(i.code,{children:"WOODPECKER_GITHUB_SECRET"})," from the specified filepath."]}),"\n",(0,t.jsx)(i.h3,{id:"woodpecker_github_merge_ref",children:(0,t.jsx)(i.code,{children:"WOODPECKER_GITHUB_MERGE_REF"})}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsxs)(i.p,{children:["Default: ",(0,t.jsx)(i.code,{children:"true"})]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"woodpecker_github_skip_verify",children:(0,t.jsx)(i.code,{children:"WOODPECKER_GITHUB_SKIP_VERIFY"})}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsxs)(i.p,{children:["Default: ",(0,t.jsx)(i.code,{children:"false"})]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Configure if SSL verification should be skipped."})]})}function a(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},74169:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>c});var t=n(79474);const o={},r=t.createContext(o);function s(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);