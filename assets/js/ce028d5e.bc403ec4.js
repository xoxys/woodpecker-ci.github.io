/*! For license information please see ce028d5e.bc403ec4.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[7578],{17250:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=n(11527),r=n(88672);const s={},a="Documentation",c={id:"development/docs",title:"Documentation",description:"The documentation is using docusaurus as framework. You can learn more about it from its official documentation.",source:"@site/docs/92-development/04-docs.md",sourceDirName:"92-development",slug:"/development/docs",permalink:"/docs/next/development/docs",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/docs/92-development/04-docs.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"UI Development",permalink:"/docs/next/development/ui"},next:{title:"Architecture",permalink:"/docs/next/development/architecture"}},i={},d=[];function u(e){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"documentation",children:"Documentation"}),"\n",(0,o.jsxs)(t.p,{children:["The documentation is using docusaurus as framework. You can learn more about it from its ",(0,o.jsx)(t.a,{href:"https://docusaurus.io/docs/",children:"official documentation"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["If you only want to change some text it probably is enough if you just search for the corresponding ",(0,o.jsx)(t.a,{href:"https://www.markdownguide.org/basic-syntax/",children:"Markdown"})," file inside the ",(0,o.jsx)(t.code,{children:"docs/docs/"})," folder and adjust it. If you want to change larger parts and test the rendered documentation you can run docusaurus locally. Similarly to the UI you need to install ",(0,o.jsx)(t.a,{href:"/docs/next/development/getting-started#install-nodejs--pnpm",children:"Node.js and pnpm"}),". After that you can run and build docusaurus locally by using the following commands:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"cd docs/\n\npnpm install\n\n# build plugins used by the docs\npnpm build:woodpecker-plugins\n\n# start docs with hot-reloading, so you can change the docs and directly see the changes in the browser without reloading it manually\npnpm start\n\n# or build the docs to deploy it to some static page hosting\npnpm build\n"})})]})}function l(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},3354:(e,t,n)=>{var o=n(50959),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var o,s={},d=null,u=null;for(o in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,o)&&!i.hasOwnProperty(o)&&(s[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===s[o]&&(s[o]=t[o]);return{$$typeof:r,type:e,key:d,ref:u,props:s,_owner:c.current}}t.Fragment=s,t.jsx=d,t.jsxs=d},11527:(e,t,n)=>{e.exports=n(3354)},88672:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>a});var o=n(50959);const r={},s=o.createContext(r);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);