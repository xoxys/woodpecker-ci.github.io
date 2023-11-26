/*! For license information please see 6fdb3cd1.15d0beac.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[6230],{6781:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var t=o(11527),i=o(63883);const r={},s="Deployment",d={id:"administration/deployment/overview",title:"Deployment",description:"A Woodpecker deployment consists of two parts:",source:"@site/docs/30-administration/00-deployment/00-overview.md",sourceDirName:"30-administration/00-deployment",slug:"/administration/deployment/overview",permalink:"/docs/next/administration/deployment/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/docs/30-administration/00-deployment/00-overview.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Advanced usage",permalink:"/docs/next/usage/advanced-usage"},next:{title:"docker-compose",permalink:"/docs/next/administration/deployment/docker-compose"}},a={},l=[{value:"Which version of Woodpecker should I use?",id:"which-version-of-woodpecker-should-i-use",level:2},{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Database",id:"database",level:2},{value:"SSL",id:"ssl",level:2},{value:"Metrics",id:"metrics",level:2},{value:"Behind a proxy",id:"behind-a-proxy",level:2},{value:"Third-party installation methods",id:"third-party-installation-methods",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"deployment",children:"Deployment"}),"\n",(0,t.jsx)(n.p,{children:"A Woodpecker deployment consists of two parts:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A server which is the heart of Woodpecker and ships the web interface."}),"\n",(0,t.jsx)(n.li,{children:"Next to one server you can deploy any number of agents which will run the pipelines."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Each agent is able to process one pipeline step by default.\nIf you have 4 agents installed and connected to the Woodpecker server, your system will process 4 workflows in parallel."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["You can add more agents to increase the number of parallel workflows or set the agent's ",(0,t.jsx)(n.code,{children:"WOODPECKER_MAX_WORKFLOWS=1"})," environment variable to increase the number of parallel workflows for that agent."]})}),"\n",(0,t.jsx)(n.h2,{id:"which-version-of-woodpecker-should-i-use",children:"Which version of Woodpecker should I use?"}),"\n",(0,t.jsxs)(n.p,{children:["Woodpecker is having two different kinds of releases: ",(0,t.jsx)(n.strong,{children:"stable"})," and ",(0,t.jsx)(n.strong,{children:"next"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["To find out more about the differences between the two releases, please read the ",(0,t.jsx)(n.a,{href:"/faq#which-version-of-woodpecker-should-i-use",children:"FAQ"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"hardware-requirements",children:"Hardware Requirements"}),"\n",(0,t.jsx)(n.p,{children:"Below are minimal resources requirements for Woodpecker components itself:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Component"}),(0,t.jsx)(n.th,{children:"Memory"}),(0,t.jsx)(n.th,{children:"CPU"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Server"}),(0,t.jsx)(n.td,{children:"200 MB"}),(0,t.jsx)(n.td,{children:"1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Agent"}),(0,t.jsx)(n.td,{children:"32 MB"}),(0,t.jsx)(n.td,{children:"1"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Note, that those values do not include the operating system or workload (pipelines execution) resources consumption."}),"\n",(0,t.jsx)(n.p,{children:"In addition you need at least some kind of database which requires additional resources depending on the selected database system."}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.p,{children:"You can install Woodpecker on multiple ways:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Using ",(0,t.jsx)(n.a,{href:"/docs/next/administration/deployment/docker-compose",children:"docker-compose"})," with the official ",(0,t.jsx)(n.a,{href:"/docs/next/administration/deployment/docker-compose#docker-images",children:"container images"})]}),"\n",(0,t.jsxs)(n.li,{children:["Using ",(0,t.jsx)(n.a,{href:"/docs/next/administration/deployment/kubernetes",children:"Kubernetes"})," via the Woodpecker Helm chart"]}),"\n",(0,t.jsxs)(n.li,{children:["Using binaries, DEBs or RPMs you can download from ",(0,t.jsx)(n.a,{href:"https://github.com/woodpecker-ci/woodpecker/releases/latest",children:"latest release"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"authentication",children:"Authentication"}),"\n",(0,t.jsx)(n.p,{children:"Authentication is done using OAuth and is delegated to your forge which is configured using environment variables."}),"\n",(0,t.jsxs)(n.p,{children:["See the complete reference for all supported forges ",(0,t.jsx)(n.a,{href:"/docs/next/administration/forges/overview",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"database",children:"Database"}),"\n",(0,t.jsxs)(n.p,{children:["By default Woodpecker uses a SQLite database which requires zero installation or configuration. See the ",(0,t.jsx)(n.a,{href:"/docs/next/administration/database",children:"database settings"})," page to further configure it or use MySQL or Postgres."]}),"\n",(0,t.jsx)(n.h2,{id:"ssl",children:"SSL"}),"\n",(0,t.jsxs)(n.p,{children:["Woodpecker supports SSL configuration by using Let's encrypt or by using own certificates. See the ",(0,t.jsx)(n.a,{href:"/docs/next/administration/ssl",children:"SSL guide"}),". You can also put it behind a ",(0,t.jsx)(n.a,{href:"#behind-a-proxy",children:"reverse proxy"})]}),"\n",(0,t.jsx)(n.h2,{id:"metrics",children:"Metrics"}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.a,{href:"/docs/next/administration/prometheus",children:"Prometheus endpoint"})," is exposed."]}),"\n",(0,t.jsx)(n.h2,{id:"behind-a-proxy",children:"Behind a proxy"}),"\n",(0,t.jsxs)(n.p,{children:["See the ",(0,t.jsx)(n.a,{href:"/docs/next/administration/proxy",children:"proxy guide"})," if you want to see a setup behind Apache, Nginx, Caddy or ngrok."]}),"\n",(0,t.jsxs)(n.p,{children:["In the case you need to use Woodpecker with a URL path prefix (like: ",(0,t.jsx)(n.a,{href:"https://example.org/woodpecker/",children:"https://example.org/woodpecker/"}),"), you can use the option ",(0,t.jsx)(n.a,{href:"/docs/next/administration/server-config#woodpecker_root_path",children:(0,t.jsx)(n.code,{children:"WOODPECKER_ROOT_PATH"})}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"third-party-installation-methods",children:"Third-party installation methods"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"These installation methods are not officially supported. If you experience issues with them, please open issues in the specific repositories."})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Using ",(0,t.jsx)(n.a,{href:"/docs/next/administration/deployment/nixos",children:"NixOS"})," via the ",(0,t.jsx)(n.a,{href:"https://search.nixos.org/options?channel=unstable&size=200&sort=relevance&query=woodpecker",children:"NixOS module"})]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://apps.yunohost.org/app/woodpecker",children:"Using YunoHost"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.cloudron.io/store/org.woodpecker_ci.cloudronapp.html",children:"On Cloudron"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},3354:(e,n,o)=>{var t=o(50959),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,o){var t,r={},l=null,c=null;for(t in void 0!==o&&(l=""+o),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(c=n.ref),n)s.call(n,t)&&!a.hasOwnProperty(t)&&(r[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===r[t]&&(r[t]=n[t]);return{$$typeof:i,type:e,key:l,ref:c,props:r,_owner:d.current}}n.Fragment=r,n.jsx=l,n.jsxs=l},11527:(e,n,o)=>{e.exports=o(3354)},63883:(e,n,o)=>{o.d(n,{Z:()=>d,a:()=>s});var t=o(50959);const i={},r=t.createContext(i);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);