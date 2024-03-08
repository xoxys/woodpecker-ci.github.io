/*! For license information please see ff8e7962.d28afc4d.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[7090],{23888:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=i(13274),t=i(74169);const r={},o="Plugins",l={id:"usage/plugins/overview",title:"Plugins",description:"Plugins are pipeline steps that perform pre-defined tasks and are configured as steps in your pipeline. Plugins can be used to deploy code, publish artifacts, send notification, and more.",source:"@site/versioned_docs/version-2.2/20-usage/51-plugins/10-overview.md",sourceDirName:"20-usage/51-plugins",slug:"/usage/plugins/overview",permalink:"/docs/2.2/usage/plugins/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-2.2/20-usage/51-plugins/10-overview.md",tags:[],version:"2.2",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/docs/2.2/usage/intro"},next:{title:"Creating plugins",permalink:"/docs/2.2/usage/plugins/creating-plugins"}},a={},d=[{value:"Plugin Isolation",id:"plugin-isolation",level:2},{value:"Finding Plugins",id:"finding-plugins",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"plugins",children:"Plugins"}),"\n",(0,s.jsx)(n.p,{children:"Plugins are pipeline steps that perform pre-defined tasks and are configured as steps in your pipeline. Plugins can be used to deploy code, publish artifacts, send notification, and more."}),"\n",(0,s.jsx)(n.p,{children:"They are automatically pulled from the default container registry the agent's have configured."}),"\n",(0,s.jsx)(n.p,{children:"Example pipeline using the Docker and Slack plugins:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"steps:\n  build:\n    image: golang\n    commands:\n      - go build\n      - go test\n\n  publish:\n    image: plugins/docker\n    settings:\n      repo: foo/bar\n      tags: latest\n\n  notify:\n    image: plugins/slack\n    settings:\n      channel: dev\n"})}),"\n",(0,s.jsx)(n.h2,{id:"plugin-isolation",children:"Plugin Isolation"}),"\n",(0,s.jsx)(n.p,{children:"Plugins are just pipeline steps. They share the build workspace, mounted as a volume, and therefore have access to your source tree."}),"\n",(0,s.jsx)(n.h2,{id:"finding-plugins",children:"Finding Plugins"}),"\n",(0,s.jsx)(n.p,{children:"For official plugins, you can use the Woodpecker plugin index:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://woodpecker-ci.org/plugins",children:"Official Woodpecker Plugins"})}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["There are also other plugin lists with additional plugins. Keep in mind that ",(0,s.jsx)(n.a,{href:"https://www.drone.io/",children:"Drone"})," plugins are generally supported, but could need some adjustments and tweaking."]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"http://plugins.drone.io",children:"Drone Plugins"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://woodpecker-plugins.geekdocs.de/",children:"Geeklab Woodpecker Plugins"})}),"\n"]})]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},78034:(e,n,i)=>{var s=i(79474),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,i){var s,r={},d=null,u=null;for(s in void 0!==i&&(d=""+i),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(u=n.ref),n)o.call(n,s)&&!a.hasOwnProperty(s)&&(r[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===r[s]&&(r[s]=n[s]);return{$$typeof:t,type:e,key:d,ref:u,props:r,_owner:l.current}}n.Fragment=r,n.jsx=d,n.jsxs=d},13274:(e,n,i)=>{e.exports=i(78034)},74169:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var s=i(79474);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);