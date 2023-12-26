/*! For license information please see 4b329921.0a3ea668.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[682],{71317:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var n=i(11527),o=i(46224);const s={},r="Project settings",l={id:"usage/project-settings",title:"Project settings",description:"As the owner of a project in Woodpecker you can change project related settings via the web interface.",source:"@site/versioned_docs/version-2.1/20-usage/71-project-settings.md",sourceDirName:"20-usage",slug:"/usage/project-settings",permalink:"/docs/usage/project-settings",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-2.1/20-usage/71-project-settings.md",tags:[],version:"2.1",sidebarPosition:71,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Volumes",permalink:"/docs/usage/volumes"},next:{title:"Status Badges",permalink:"/docs/usage/badges"}},c={},a=[{value:"Pipeline path",id:"pipeline-path",level:2},{value:"Repository hooks",id:"repository-hooks",level:2},{value:"Project settings",id:"project-settings-1",level:2},{value:"Allow pull requests",id:"allow-pull-requests",level:3},{value:"Protected",id:"protected",level:3},{value:"Trusted",id:"trusted",level:3},{value:"Only inject netrc credentials into trusted containers",id:"only-inject-netrc-credentials-into-trusted-containers",level:3},{value:"Project visibility",id:"project-visibility",level:2},{value:"Timeout",id:"timeout",level:2},{value:"Cancel previous pipelines",id:"cancel-previous-pipelines",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"project-settings",children:"Project settings"}),"\n",(0,n.jsx)(t.p,{children:"As the owner of a project in Woodpecker you can change project related settings via the web interface."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"project settings",src:i(5232).Z+"",width:"1632",height:"1718"})}),"\n",(0,n.jsx)(t.h2,{id:"pipeline-path",children:"Pipeline path"}),"\n",(0,n.jsxs)(t.p,{children:["The path to the pipeline config file or folder. By default it is left empty which will use the following configuration resolution ",(0,n.jsx)(t.code,{children:".woodpecker/*.yml"})," -> ",(0,n.jsx)(t.code,{children:".woodpecker/*.yaml"})," -> ",(0,n.jsx)(t.code,{children:".woodpecker.yml"})," -> ",(0,n.jsx)(t.code,{children:".woodpecker.yaml"}),". If you set a custom path Woodpecker tries to load your configuration or fails if no configuration could be found at the specified location. To use a ",(0,n.jsx)(t.a,{href:"/docs/usage/workflows",children:"multiple workflows"})," with a custom path you have to change it to a folder path ending with a ",(0,n.jsx)(t.code,{children:"/"})," like ",(0,n.jsx)(t.code,{children:".woodpecker/"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"repository-hooks",children:"Repository hooks"}),"\n",(0,n.jsx)(t.p,{children:"Your Version-Control-System will notify Woodpecker about events via webhooks. If you want your pipeline to only run on specific webhooks, you can check them with this setting."}),"\n",(0,n.jsx)(t.h2,{id:"project-settings-1",children:"Project settings"}),"\n",(0,n.jsx)(t.h3,{id:"allow-pull-requests",children:"Allow pull requests"}),"\n",(0,n.jsx)(t.p,{children:"Enables handling webhook's pull request event. If disabled, then pipeline won't run for pull requests."}),"\n",(0,n.jsx)(t.h3,{id:"protected",children:"Protected"}),"\n",(0,n.jsx)(t.p,{children:"Every pipeline initiated by an webhook event needs to be approved by a project members with push permissions before being executed.\nThe protected option can be used as an additional review process before running potentially harmful pipelines. Especially if pipelines can be executed by third-parties through pull-requests."}),"\n",(0,n.jsx)(t.h3,{id:"trusted",children:"Trusted"}),"\n",(0,n.jsx)(t.p,{children:"If you set your project to trusted, a pipeline step and by this the underlying containers gets access to escalated capabilities like mounting volumes."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"Only server admins can set this option. If you are not a server admin this option won't be shown in your project settings."})}),"\n",(0,n.jsx)(t.h3,{id:"only-inject-netrc-credentials-into-trusted-containers",children:"Only inject netrc credentials into trusted containers"}),"\n",(0,n.jsxs)(t.p,{children:["Cloning pipeline step may need git credentials. They are injected via netrc. By default, they're only injected if this option is enabled, the repo is trusted (",(0,n.jsx)(t.a,{href:"#trusted",children:"see above"}),") or the image is a trusted clone image. If you uncheck the option, git credentials will be injected into any container in clone step."]}),"\n",(0,n.jsx)(t.h2,{id:"project-visibility",children:"Project visibility"}),"\n",(0,n.jsx)(t.p,{children:"You can change the visibility of your project by this setting. If a user has access to a project they can see all builds and their logs and artifacts. Settings, Secrets and Registries can only be accessed by owners."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Public"})," Every user can see your project without being logged in."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Internal"})," Only authenticated users of the Woodpecker instance can see this project."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Private"})," Only you and other owners of the repository can see this project."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"timeout",children:"Timeout"}),"\n",(0,n.jsx)(t.p,{children:"After this timeout a pipeline has to finish or will be treated as timed out."}),"\n",(0,n.jsx)(t.h2,{id:"cancel-previous-pipelines",children:"Cancel previous pipelines"}),"\n",(0,n.jsx)(t.p,{children:"By enabling this option for a pipeline event previous pipelines of the same event and context will be canceled before starting the newly triggered one."})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},3354:(e,t,i)=>{var n=i(50959),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,i){var n,s={},a=null,d=null;for(n in void 0!==i&&(a=""+i),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(d=t.ref),t)r.call(t,n)&&!c.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:o,type:e,key:a,ref:d,props:s,_owner:l.current}}t.Fragment=s,t.jsx=a,t.jsxs=a},11527:(e,t,i)=>{e.exports=i(3354)},5232:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/project-settings-688fc95b8efd14180831659798d43258.png"},46224:(e,t,i)=>{i.d(t,{Z:()=>l,a:()=>r});var n=i(50959);const o={},s=n.createContext(o);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);