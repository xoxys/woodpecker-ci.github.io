/*! For license information please see 2b483317.e263bf8a.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[510],{19055:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var n=o(11527),i=o(88672);const a={},s="Guides",r={id:"development/guides",title:"Guides",description:"ORM",source:"@site/versioned_docs/version-2.2/92-development/06-guides.md",sourceDirName:"92-development",slug:"/development/guides",permalink:"/docs/2.2/development/guides",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-2.2/92-development/06-guides.md",tags:[],version:"2.2",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/docs/2.2/development/architecture"},next:{title:"Translations",permalink:"/docs/2.2/development/translations"}},d={},c=[{value:"ORM",id:"orm",level:2},{value:"Add a new migration",id:"add-a-new-migration",level:2},{value:"Constants of official images",id:"constants-of-official-images",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"guides",children:"Guides"}),"\n",(0,n.jsx)(t.h2,{id:"orm",children:"ORM"}),"\n",(0,n.jsxs)(t.p,{children:["Woodpecker uses ",(0,n.jsx)(t.a,{href:"https://xorm.io/",children:"Xorm"})," as ORM for the database connection.\nYou can find its documentation at ",(0,n.jsx)(t.a,{href:"https://gobook.io/read/gitea.com/xorm/manual-en-US/",children:"gobook.io/read/gitea.com/xorm"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"add-a-new-migration",children:"Add a new migration"}),"\n",(0,n.jsxs)(t.p,{children:["Woodpecker uses migrations to change the database schema if a database model has been changed. Add the new migration task into ",(0,n.jsx)(t.code,{children:"server/store/datastore/migration/"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Adding new properties to models will be handled automatically by the underlying ",(0,n.jsx)(t.a,{href:"#orm",children:"ORM"})," based on the ",(0,n.jsx)(t.a,{href:"https://stackoverflow.com/questions/10858787/what-are-the-uses-for-tags-in-go",children:"struct field tags"})," of the model. If you add a completely new model, you have to add it to the ",(0,n.jsx)(t.code,{children:"allBeans"})," variable at ",(0,n.jsx)(t.code,{children:"server/store/datastore/migration/migration.go"})," to get a new table created."]})}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsxs)(t.p,{children:["You should not use ",(0,n.jsx)(t.code,{children:"sess.Begin()"}),", ",(0,n.jsx)(t.code,{children:"sess.Commit()"})," or ",(0,n.jsx)(t.code,{children:"sess.Close()"})," inside a migration. Session / transaction handling will be done by the underlying migration manager."]})}),"\n",(0,n.jsxs)(t.p,{children:["To automatically execute the migration after the start of the server, the new migration needs to be added to the end of ",(0,n.jsx)(t.code,{children:"migrationTasks"})," in ",(0,n.jsx)(t.code,{children:"server/store/datastore/migration/migration.go"}),". After a successful execution of that transaction the server will automatically add the migration to a list, so it won't be executed again on the next start."]}),"\n",(0,n.jsx)(t.h2,{id:"constants-of-official-images",children:"Constants of official images"}),"\n",(0,n.jsxs)(t.p,{children:["All official default images, are saved in ",(0,n.jsx)(t.a,{href:"https://github.com/woodpecker-ci/woodpecker/blob/main/shared/constant/constant.go",children:"shared/constant/constant.go"})," and must be pinned by an exact tag."]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},3354:(e,t,o)=>{var n=o(50959),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,r=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,o){var n,a={},c=null,l=null;for(n in void 0!==o&&(c=""+o),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,n)&&!d.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:i,type:e,key:c,ref:l,props:a,_owner:r.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},11527:(e,t,o)=>{e.exports=o(3354)},88672:(e,t,o)=>{o.d(t,{Z:()=>r,a:()=>s});var n=o(50959);const i={},a=n.createContext(i);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);