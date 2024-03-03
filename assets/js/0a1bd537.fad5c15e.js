/*! For license information please see 0a1bd537.fad5c15e.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[6744],{40612:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var n=t(2488),i=t(51520);const r={},s="Getting started",a={id:"usage/intro",title:"Getting started",description:"Repository Activation",source:"@site/versioned_docs/version-1.0/20-usage/10-intro.md",sourceDirName:"20-usage",slug:"/usage/intro",permalink:"/docs/1.0/usage/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-1.0/20-usage/10-intro.md",tags:[],version:"1.0",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Welcome to Woodpecker",permalink:"/docs/1.0/intro"},next:{title:"Terminology",permalink:"/docs/1.0/usage/terminology"}},c={},l=[{value:"Repository Activation",id:"repository-activation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Execution",id:"execution",level:2}];function d(e){const o={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,i.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"getting-started",children:"Getting started"}),"\n",(0,n.jsx)(o.h2,{id:"repository-activation",children:"Repository Activation"}),"\n",(0,n.jsx)(o.p,{children:"To activate your project navigate to your account settings. You will see a list of repositories which can be activated with a simple toggle. When you activate your repository, Woodpecker automatically adds webhooks to your forge (e.g. GitHub, Gitea, ...)."}),"\n",(0,n.jsx)(o.p,{children:"Webhooks are used to trigger pipeline executions. When you push code to your repository, open a pull request, or create a tag, your forge will automatically send a webhook to Woodpecker which will in turn trigger the pipeline execution."}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"repository list",src:t(5076).c+"",width:"1128",height:"745"})}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:"Required Permissions"}),"\n",(0,n.jsxs)(o.p,{children:["The user who enables a repo in Woodpecker must have ",(0,n.jsx)(o.code,{children:"Admin"})," rights on that repo, so that Woodpecker can add the webhook."]}),"\n",(0,n.jsx)(o.p,{children:"Note that manually creating webhooks yourself is not possible. This is because webhooks are signed using a per-repository secret key which is not exposed to end users."}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsxs)(o.p,{children:["To configure your pipeline you must create a ",(0,n.jsx)(o.code,{children:".woodpecker.yml"})," file in the root of your repository. The ",(0,n.jsx)(o.code,{children:".woodpecker.yml"})," file is used to define your pipeline steps."]}),"\n",(0,n.jsx)(o.admonition,{type:"note",children:(0,n.jsxs)(o.p,{children:["We support most of YAML 1.2, but preserve some behavior from 1.1 for backward compatibility.\nRead more at: ",(0,n.jsx)(o.a,{href:"https://github.com/go-yaml/yaml/tree/v3",children:"https://github.com/go-yaml/yaml"})]})}),"\n",(0,n.jsx)(o.p,{children:"Example pipeline configuration:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-yaml",children:"steps:\n  build:\n    image: golang\n    commands:\n      - go get\n      - go build\n      - go test\n\nservices:\n  postgres:\n    image: postgres:9.4.5\n    environment:\n      - POSTGRES_USER=myapp\n"})}),"\n",(0,n.jsx)(o.p,{children:"Example pipeline configuration with multiple, serial steps:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-yaml",children:"steps:\n  backend:\n    image: golang\n    commands:\n      - go get\n      - go build\n      - go test\n\n  frontend:\n    image: node:6\n    commands:\n      - npm install\n      - npm test\n\n  notify:\n    image: plugins/slack\n    channel: developers\n    username: woodpecker\n"})}),"\n",(0,n.jsx)(o.h2,{id:"execution",children:"Execution"}),"\n",(0,n.jsx)(o.p,{children:"To trigger your first pipeline execution you can push code to your repository, open a pull request, or push a tag. Any of these events triggers a webhook from your forge and execute your pipeline."})]})}function p(e={}){const{wrapper:o}={...(0,i.M)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},38088:(e,o,t)=>{var n=t(96651),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,o,t){var n,r={},l=null,d=null;for(n in void 0!==t&&(l=""+t),void 0!==o.key&&(l=""+o.key),void 0!==o.ref&&(d=o.ref),o)s.call(o,n)&&!c.hasOwnProperty(n)&&(r[n]=o[n]);if(e&&e.defaultProps)for(n in o=e.defaultProps)void 0===r[n]&&(r[n]=o[n]);return{$$typeof:i,type:e,key:l,ref:d,props:r,_owner:a.current}}o.Fragment=r,o.jsx=l,o.jsxs=l},2488:(e,o,t)=>{e.exports=t(38088)},5076:(e,o,t)=>{t.d(o,{c:()=>n});const n=t.p+"assets/images/repo-list-41c8340b0eb48a098ad2fbfcd820adc9.png"},51520:(e,o,t)=>{t.d(o,{M:()=>s});var n=t(96651);const i={},r=n.createContext(i);function s(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}}}]);