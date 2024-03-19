/*! For license information please see 0c1c162f.b0aa6e7d.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[2549],{71873:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var n=t(13274),r=t(74169);const s={},i="Documentation",a={id:"development/docs",title:"Documentation",description:"The documentation is using docusaurus as framework. You can learn more about it from its official documentation.",source:"@site/versioned_docs/version-2.3/92-development/04-docs.md",sourceDirName:"92-development",slug:"/development/docs",permalink:"/docs/2.3/development/docs",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-2.3/92-development/04-docs.md",tags:[],version:"2.3",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"UI Development",permalink:"/docs/2.3/development/ui"},next:{title:"Architecture",permalink:"/docs/2.3/development/architecture"}},c={},d=[];function u(e){const o={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"documentation",children:"Documentation"}),"\n",(0,n.jsxs)(o.p,{children:["The documentation is using docusaurus as framework. You can learn more about it from its ",(0,n.jsx)(o.a,{href:"https://docusaurus.io/docs/",children:"official documentation"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["If you only want to change some text it probably is enough if you just search for the corresponding ",(0,n.jsx)(o.a,{href:"https://www.markdownguide.org/basic-syntax/",children:"Markdown"})," file inside the ",(0,n.jsx)(o.code,{children:"docs/docs/"})," folder and adjust it. If you want to change larger parts and test the rendered documentation you can run docusaurus locally. Similarly to the UI you need to install ",(0,n.jsx)(o.a,{href:"/docs/2.3/development/getting-started#install-nodejs--pnpm",children:"Node.js and pnpm"}),". After that you can run and build docusaurus locally by using the following commands:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"cd docs/\n\npnpm install\n\n# build plugins used by the docs\npnpm build:woodpecker-plugins\n\n# start docs with hot-reloading, so you can change the docs and directly see the changes in the browser without reloading it manually\npnpm start\n\n# or build the docs to deploy it to some static page hosting\npnpm build\n"})})]})}function l(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},78034:(e,o,t)=>{var n=t(79474),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,o,t){var n,s={},d=null,u=null;for(n in void 0!==t&&(d=""+t),void 0!==o.key&&(d=""+o.key),void 0!==o.ref&&(u=o.ref),o)i.call(o,n)&&!c.hasOwnProperty(n)&&(s[n]=o[n]);if(e&&e.defaultProps)for(n in o=e.defaultProps)void 0===s[n]&&(s[n]=o[n]);return{$$typeof:r,type:e,key:d,ref:u,props:s,_owner:a.current}}o.Fragment=s,o.jsx=d,o.jsxs=d},13274:(e,o,t)=>{e.exports=t(78034)},74169:(e,o,t)=>{t.d(o,{R:()=>i,x:()=>a});var n=t(79474);const r={},s=n.createContext(r);function i(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);