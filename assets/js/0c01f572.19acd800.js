/*! For license information please see 0c01f572.19acd800.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[1815],{39484:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=t(11527),s=t(88672);const r={},a="Translations",i={id:"development/translations",title:"Translations",description:"Woodpecker uses Vue I18n as translation library, thus you can easily translate the web UI into your language. Therefore, copy the file web/src/assets/locales/en.json to the same path with your language's code and .json as name.",source:"@site/versioned_docs/version-1.0/92-development/07-translations.md",sourceDirName:"92-development",slug:"/development/translations",permalink:"/docs/1.0/development/translations",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-1.0/92-development/07-translations.md",tags:[],version:"1.0",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Guides",permalink:"/docs/1.0/development/guides"},next:{title:"Swagger, API Spec and Code Generation",permalink:"/docs/1.0/development/swagger"}},l={},c=[];function d(e){const n={a:"a",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"translations",children:"Translations"}),"\n",(0,o.jsxs)(n.p,{children:["Woodpecker uses ",(0,o.jsx)(n.a,{href:"https://vue-i18n.intlify.dev/",children:"Vue I18n"})," as translation library, thus you can easily translate the web UI into your language. Therefore, copy the file ",(0,o.jsx)(n.code,{children:"web/src/assets/locales/en.json"})," to the same path with your language's code and ",(0,o.jsx)(n.code,{children:".json"})," as name.\nThen, translate content of this file, but only the values:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "dont_translate": "Only translate this text"\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"To add support for time formatting, import the language into two files:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"web/src/compositions/useDate.ts"}),": Just add a line like ",(0,o.jsx)(n.code,{children:"import 'dayjs/locale/en';"})," to the first block of ",(0,o.jsx)(n.code,{children:"import"})," statements and replace ",(0,o.jsx)(n.code,{children:"en"})," with your language's code."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"web/src/utils/timeAgo.ts"}),": Add a line like ",(0,o.jsx)(n.code,{children:"import en from 'javascript-time-ago/locale/en.json';"})," to the other ",(0,o.jsx)(n.code,{children:"import"}),"-statements and replace both ",(0,o.jsx)(n.code,{children:"en"}),"s with your language's code. Then, add the line ",(0,o.jsx)(n.code,{children:"TimeAgo.addDefaultLocale(en);"})," to the other lines of them, and replace ",(0,o.jsx)(n.code,{children:"en"})," with your language's code."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Then, the web UI should be available in your language. You should open a pull request to our repository to get your changes into the next release."})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},3354:(e,n,t)=>{var o=t(50959),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var o,r={},c=null,d=null;for(o in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)a.call(n,o)&&!l.hasOwnProperty(o)&&(r[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===r[o]&&(r[o]=n[o]);return{$$typeof:s,type:e,key:c,ref:d,props:r,_owner:i.current}}n.Fragment=r,n.jsx=c,n.jsxs=c},11527:(e,n,t)=>{e.exports=t(3354)},88672:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var o=t(50959);const s={},r=o.createContext(s);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);