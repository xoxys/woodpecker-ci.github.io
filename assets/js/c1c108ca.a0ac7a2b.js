/*! For license information please see c1c108ca.a0ac7a2b.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[1622],{42646:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var i=o(11527),n=o(88672);const s={},r="Project settings",c={id:"usage/project-settings",title:"Project settings",description:"As the owner of a project in Woodpecker you can change project related settings via the web interface.",source:"@site/versioned_docs/version-0.15/20-usage/71-project-settings.md",sourceDirName:"20-usage",slug:"/usage/project-settings",permalink:"/docs/0.15/usage/project-settings",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-0.15/20-usage/71-project-settings.md",tags:[],version:"0.15",sidebarPosition:71,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Volumes",permalink:"/docs/0.15/usage/volumes"},next:{title:"Status Badges",permalink:"/docs/0.15/usage/badges"}},l={},a=[{value:"Pipeline path",id:"pipeline-path",level:2},{value:"Repository hooks",id:"repository-hooks",level:2},{value:"Project settings",id:"project-settings-1",level:2},{value:"Protected",id:"protected",level:3},{value:"Trusted",id:"trusted",level:3},{value:"Project visibility",id:"project-visibility",level:2},{value:"Timeout",id:"timeout",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"project-settings",children:"Project settings"}),"\n",(0,i.jsx)(t.p,{children:"As the owner of a project in Woodpecker you can change project related settings via the web interface."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"project settings",src:o(52435).Z+"",width:"933",height:"759"})}),"\n",(0,i.jsx)(t.h2,{id:"pipeline-path",children:"Pipeline path"}),"\n",(0,i.jsxs)(t.p,{children:["The path to the pipeline config file or folder. By default it is left empty which will use the following configuration resolution ",(0,i.jsx)(t.code,{children:".woodpecker/*.yml"})," -> ",(0,i.jsx)(t.code,{children:".woodpecker.yml"})," -> ",(0,i.jsx)(t.code,{children:".drone.yml"}),". If you set a custom path Woodpecker tries to load your configuration or fails if no configuration could be found at the specified location. To use a ",(0,i.jsx)(t.a,{href:"/docs/0.15/usage/multi-pipeline",children:"multi pipeline"})," you have to change it to a folder path ending with a ",(0,i.jsx)(t.code,{children:"/"})," like ",(0,i.jsx)(t.code,{children:".woodpecker/"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"repository-hooks",children:"Repository hooks"}),"\n",(0,i.jsx)(t.p,{children:"Your Version-Control-System will notify Woodpecker about events via webhooks. If you want your pipeline to only run on specific webhooks, you can check them with this setting."}),"\n",(0,i.jsx)(t.h2,{id:"project-settings-1",children:"Project settings"}),"\n",(0,i.jsx)(t.h3,{id:"protected",children:"Protected"}),"\n",(0,i.jsx)(t.p,{children:"Every build initiated by a user (not including the project owner) needs to be approved by the owner before being executed. This can be used if your repository is public to protect the pipeline configuration from running unauthorized changes on third-party pull requests."}),"\n",(0,i.jsx)(t.h3,{id:"trusted",children:"Trusted"}),"\n",(0,i.jsx)(t.p,{children:"If you set your project to trusted, a pipeline step and by this the underlying containers gets access to escalated capabilities like mounting volumes."}),"\n",(0,i.jsx)(t.h2,{id:"project-visibility",children:"Project visibility"}),"\n",(0,i.jsx)(t.p,{children:"You can change the visibility of your project by this setting. If a user has access to a project he can see all builds and their logs and artifacts. Settings, Secrets and Registries can only be accessed by owners."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Public"})," Every user can see your project without being logged in."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Private"})," Only authenticated users of the Woodpecker instance can see this project."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Internal"})," Only you and other owners of the repository can see this project."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"timeout",children:"Timeout"}),"\n",(0,i.jsx)(t.p,{children:"After this timeout a pipeline has to finish or will be treated as timed out."})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},3354:(e,t,o)=>{var i=o(50959),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,o){var i,s={},a=null,d=null;for(i in void 0!==o&&(a=""+o),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(d=t.ref),t)r.call(t,i)&&!l.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===s[i]&&(s[i]=t[i]);return{$$typeof:n,type:e,key:a,ref:d,props:s,_owner:c.current}}t.Fragment=s,t.jsx=a,t.jsxs=a},11527:(e,t,o)=>{e.exports=o(3354)},52435:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/project-settings-cac7b98f9da71f12d7b3f01389e4758c.png"},88672:(e,t,o)=>{o.d(t,{Z:()=>c,a:()=>r});var i=o(50959);const n={},s=i.createContext(n);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);