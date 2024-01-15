/*! For license information please see eeb8f9a2.0f6f260b.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[8166],{92522:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=r(11527),n=r(88672);const i={},t="Terminology",l={id:"usage/terminology",title:"Terminology",description:"Glossary",source:"@site/versioned_docs/version-1.0/20-usage/15-terminology.md",sourceDirName:"20-usage",slug:"/usage/terminology",permalink:"/docs/1.0/usage/terminology",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-1.0/20-usage/15-terminology.md",tags:[],version:"1.0",sidebarPosition:15,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/docs/1.0/usage/intro"},next:{title:"Pipeline syntax",permalink:"/docs/1.0/usage/pipeline-syntax"}},a={},c=[{value:"Glossary",id:"glossary",level:2},{value:"Terms",id:"terms",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"terminology",children:"Terminology"}),"\n",(0,o.jsx)(s.h2,{id:"glossary",children:"Glossary"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Woodpecker CI"}),": The project name around Woodpecker."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Woodpecker"}),": An open-source tool that executes ",(0,o.jsx)(s.a,{href:"/docs/1.0/usage/pipeline-syntax",children:"pipelines"})," on your code."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Server"}),": The component of Woodpecker that handles webhooks from forges, orchestrates agents, and sends status back. It also serves the API and web UI for administration and configuration."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Agent"}),": A component of Woodpecker that executes ",(0,o.jsx)(s.a,{href:"/docs/1.0/usage/pipeline-syntax",children:"pipelines"})," (specifically one or more ",(0,o.jsx)(s.a,{href:"/docs/1.0/usage/workflows",children:"workflows"}),") with a specific backend (e.g. ",(0,o.jsx)(s.a,{href:"/docs/1.0/administration/backends/docker",children:"Docker"}),", Kubernetes, ",(0,o.jsx)(s.a,{href:"/docs/1.0/administration/backends/local",children:"local"}),"). It connects to the server via GRPC."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"CLI"}),": The Woodpecker command-line interface (CLI) is a terminal tool used to administer the server, to execute pipelines locally for debugging / testing purposes, and to perform tasks like linting pipelines."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Pipeline"}),": A sequence of ",(0,o.jsx)(s.a,{href:"/docs/1.0/usage/workflows",children:"workflows"})," that are executed on the code. ",(0,o.jsx)(s.a,{href:"/docs/1.0/usage/pipeline-syntax",children:"Pipelines"})," are triggered by events."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Workflow"}),": A sequence of steps and services that are executed as part of a ",(0,o.jsx)(s.a,{href:"/docs/1.0/usage/pipeline-syntax",children:"pipeline"}),". Workflows are represented by YAML files. Each ",(0,o.jsx)(s.a,{href:"/docs/1.0/usage/workflows",children:"workflow"})," has its own isolated ",(0,o.jsx)(s.a,{href:"/docs/1.0/usage/pipeline-syntax#workspace",children:"workspace"}),", and often additional resources like a shared network (docker)."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Steps"}),": Individual commands, actions or tasks within a ",(0,o.jsx)(s.a,{href:"/docs/1.0/usage/workflows",children:"workflow"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Code"}),": Refers to the files tracked by the version control system used by the ",(0,o.jsx)(s.a,{href:"/docs/1.0/administration/forges/overview",children:"forge"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Repos"}),": Short for repositories, these are storage locations where code is stored."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Forge"}),": The hosting platform or service where the repositories are hosted."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Workspace"}),": A folder shared between all steps of a ",(0,o.jsx)(s.a,{href:"/docs/1.0/usage/workflows",children:"workflow"})," containing the repository and all the generated data from previous steps."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Event"}),": Triggers the execution of a ",(0,o.jsx)(s.a,{href:"/docs/1.0/usage/pipeline-syntax",children:"pipeline"}),", such as a ",(0,o.jsx)(s.a,{href:"/docs/1.0/administration/forges/overview",children:"forge"})," event like ",(0,o.jsx)(s.code,{children:"push"}),", or ",(0,o.jsx)(s.code,{children:"manual"})," triggered manually from the UI."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Commit"}),": A defined state of the code, usually associated with a version control system like Git."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Matrix"}),": A configuration option that allows the execution of ",(0,o.jsx)(s.a,{href:"/docs/1.0/usage/workflows",children:"workflows"})," for each value in the ",(0,o.jsx)(s.a,{href:"/docs/1.0/usage/matrix-workflows",children:"matrix"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Service"}),": A service is a step that is executed from the start of a ",(0,o.jsx)(s.a,{href:"/docs/1.0/usage/workflows",children:"workflow"})," until its end. It can be accessed by name via the network from other steps within the same ",(0,o.jsx)(s.a,{href:"/docs/1.0/usage/workflows",children:"workflow"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Plugins"}),": ",(0,o.jsx)(s.a,{href:"/docs/1.0/usage/plugins/plugins",children:"Plugins"})," are extensions that provide pre-defined actions or commands for a step in a ",(0,o.jsx)(s.a,{href:"/docs/1.0/usage/workflows",children:"workflow"}),". They can be configured via settings."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Container"}),": A lightweight and isolated environment where commands are executed."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"YAML File"}),": A file format used to define and configure ",(0,o.jsx)(s.a,{href:"/docs/1.0/usage/workflows",children:"workflows"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Dependency"}),": ",(0,o.jsx)(s.a,{href:"/docs/1.0/usage/workflows",children:"Workflows"})," can depend on each other, and if possible, they are executed in parallel."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Status"}),": Status refers to the outcome of a step or ",(0,o.jsx)(s.a,{href:"/docs/1.0/usage/workflows",children:"workflow"})," after it has been executed, determined by the internal command exit code. At the end of a ",(0,o.jsx)(s.a,{href:"/docs/1.0/usage/workflows",children:"workflow"}),", its status is sent to the ",(0,o.jsx)(s.a,{href:"/docs/1.0/administration/forges/overview",children:"forge"}),"."]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"terms",children:"Terms"}),"\n",(0,o.jsx)(s.p,{children:"Sometimes there exist multiple terms that can be used for a thing, we try to define it here once and stick to it."}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["environment variables ",(0,o.jsx)(s.code,{children:"*_LINK"})," should be ",(0,o.jsx)(s.code,{children:"*_URL"}),", also in code, use ",(0,o.jsx)(s.code,{children:"URL()"})," instead of ",(0,o.jsx)(s.code,{children:"Link"})," (",(0,o.jsx)(s.a,{href:"https://framadate.org/jVSQHwIGfJYy82IL",children:"Vote"}),")"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Pipelines"})," were previously called ",(0,o.jsx)(s.strong,{children:"builds"})]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Steps"})," were previously called ",(0,o.jsx)(s.strong,{children:"jobs"})]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},3354:(e,s,r)=>{var o=r(50959),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,l=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,s,r){var o,i={},c=null,d=null;for(o in void 0!==r&&(c=""+r),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(d=s.ref),s)t.call(s,o)&&!a.hasOwnProperty(o)&&(i[o]=s[o]);if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===i[o]&&(i[o]=s[o]);return{$$typeof:n,type:e,key:c,ref:d,props:i,_owner:l.current}}s.Fragment=i,s.jsx=c,s.jsxs=c},11527:(e,s,r)=>{e.exports=r(3354)},88672:(e,s,r)=>{r.d(s,{Z:()=>l,a:()=>t});var o=r(50959);const n={},i=o.createContext(n);function t(e){const s=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),o.createElement(i.Provider,{value:s},e.children)}}}]);