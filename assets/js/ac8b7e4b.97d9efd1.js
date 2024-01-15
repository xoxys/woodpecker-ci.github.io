/*! For license information please see ac8b7e4b.97d9efd1.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[3652],{70653:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var s=o(11527),r=o(88672);const i={},t="Setup",a={id:"administration/setup",title:"Setup",description:"A Woodpecker deployment consists of two parts:",source:"@site/versioned_docs/version-0.15/30-administration/00-setup.md",sourceDirName:"30-administration",slug:"/administration/setup",permalink:"/docs/0.15/administration/setup",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-0.15/30-administration/00-setup.md",tags:[],version:"0.15",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Status Badges",permalink:"/docs/0.15/usage/badges"},next:{title:"Server configuration",permalink:"/docs/0.15/administration/server-config"}},c={},d=[{value:"Which version of Woodpecker should I use?",id:"which-version-of-woodpecker-should-i-use",level:2},{value:"Installation",id:"installation",level:2},{value:"docker-compose",id:"docker-compose",level:3},{value:"Authentication",id:"authentication",level:2},{value:"Database",id:"database",level:2},{value:"SSL",id:"ssl",level:2},{value:"Metrics",id:"metrics",level:2},{value:"Behind a proxy",id:"behind-a-proxy",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"setup",children:"Setup"}),"\n",(0,s.jsx)(n.p,{children:"A Woodpecker deployment consists of two parts:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"A server which is the heart of Woodpecker and ships the webinterface."}),"\n",(0,s.jsx)(n.li,{children:"Next to one server you can deploy any number of agents which will run the pipelines."}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Each agent is able to process one pipeline step by default."}),"\n",(0,s.jsx)(n.p,{children:"If you have 4 agents installed and connected to the Woodpecker server, your system will process 4 builds in parallel."}),"\n",(0,s.jsxs)(n.p,{children:["You can add more agents to increase the number of parallel builds or set the agent's ",(0,s.jsx)(n.code,{children:"WOODPECKER_MAX_PROCS=1"})," environment variable to increase the number of parallel builds for that agent."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"which-version-of-woodpecker-should-i-use",children:"Which version of Woodpecker should I use?"}),"\n",(0,s.jsxs)(n.p,{children:["Woodpecker is having two different kinds of releases: ",(0,s.jsx)(n.strong,{children:"stable"})," and ",(0,s.jsx)(n.strong,{children:"next"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["To find out more about the differences between the two releases, please read the ",(0,s.jsx)(n.a,{href:"/faq",children:"FAQ"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.p,{children:"You can install Woodpecker on multiple ways:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Using ",(0,s.jsx)(n.a,{href:"#docker-compose",children:"docker-compose"})," with the official ",(0,s.jsx)(n.a,{href:"/docs/0.15/downloads#docker-images",children:"docker images"})]}),"\n",(0,s.jsxs)(n.li,{children:["By deploying to a ",(0,s.jsx)(n.a,{href:"/docs/0.15/administration/kubernetes",children:"Kubernetes"})," with manifests or Woodpeckers official Helm charts"]}),"\n",(0,s.jsxs)(n.li,{children:["Using ",(0,s.jsx)(n.a,{href:"/docs/0.15/downloads",children:"binaries"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"docker-compose",children:"docker-compose"}),"\n",(0,s.jsxs)(n.p,{children:["The below ",(0,s.jsx)(n.a,{href:"https://docs.docker.com/compose/",children:"docker-compose"})," configuration can be used to start a Woodpecker server with a single agent."]}),"\n",(0,s.jsxs)(n.p,{children:["It relies on a number of environment variables that you must set before running ",(0,s.jsx)(n.code,{children:"docker-compose up"}),". The variables are described below."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    image: woodpeckerci/woodpecker-server:latest\n    ports:\n      - 8000:8000\n    volumes:\n      - woodpecker-server-data:/var/lib/woodpecker/\n    environment:\n      - WOODPECKER_OPEN=true\n      - WOODPECKER_HOST=${WOODPECKER_HOST}\n      - WOODPECKER_GITHUB=true\n      - WOODPECKER_GITHUB_CLIENT=${WOODPECKER_GITHUB_CLIENT}\n      - WOODPECKER_GITHUB_SECRET=${WOODPECKER_GITHUB_SECRET}\n      - WOODPECKER_AGENT_SECRET=${WOODPECKER_AGENT_SECRET}\n\n  woodpecker-agent:\n    image: woodpeckerci/woodpecker-agent:latest\n    command: agent\n    restart: always\n    depends_on:\n      - woodpecker-server\n    volumes:\n      - /var/run/docker.sock:/var/run/docker.sock\n    environment:\n      - WOODPECKER_SERVER=woodpecker-server:9000\n      - WOODPECKER_AGENT_SECRET=${WOODPECKER_AGENT_SECRET}\n\nvolumes:\n  woodpecker-server-data:\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Woodpecker needs to know its own address. You must therefore provide the public address of it in ",(0,s.jsx)(n.code,{children:"<scheme>://<hostname>"})," format. Please omit trailing slashes:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    environment:\n      - [...]\n+     - WOODPECKER_HOST=${WOODPECKER_HOST}\n"})}),"\n",(0,s.jsx)(n.p,{children:"As agents run pipeline steps as docker containers they require access to the host machine's Docker daemon:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:"# docker-compose.yml\nversion: '3'\n\nservices:\n  [...]\n  woodpecker-agent:\n    [...]\n+   volumes:\n+     - /var/run/docker.sock:/var/run/docker.sock\n"})}),"\n",(0,s.jsx)(n.p,{children:"Agents require the server address for agent-to-server communication:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-agent:\n    [...]\n    environment:\n+     - WOODPECKER_SERVER=woodpecker-server:9000\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The server and agents use a shared secret to authenticate communication. This should be a random string of your choosing and should be kept private. You can generate such string with ",(0,s.jsx)(n.code,{children:"openssl rand -hex 32"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    environment:\n      - [...]\n+     - WOODPECKER_AGENT_SECRET=${WOODPECKER_AGENT_SECRET}\n  woodpecker-agent:\n    [...]\n    environment:\n      - [...]\n+     - WOODPECKER_AGENT_SECRET=${WOODPECKER_AGENT_SECRET}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"authentication",children:"Authentication"}),"\n",(0,s.jsx)(n.p,{children:"Authentication is done using OAuth and is delegated to one of multiple version control providers, configured using environment variables. The example above demonstrates basic GitHub integration."}),"\n",(0,s.jsxs)(n.p,{children:["See the complete reference for all supported version control systems ",(0,s.jsx)(n.a,{href:"/docs/0.15/administration/vcs/overview",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"database",children:"Database"}),"\n",(0,s.jsxs)(n.p,{children:["By default Woodpecker uses a sqlite database which requires zero installation or configuration. See the ",(0,s.jsx)(n.a,{href:"/docs/0.15/administration/database",children:"database settings"})," page to further configure it or use MySQL or Postgres."]}),"\n",(0,s.jsx)(n.h2,{id:"ssl",children:"SSL"}),"\n",(0,s.jsxs)(n.p,{children:["Woodpecker supports ssl configuration by using Let's encrypt or by using own certificates. See the ",(0,s.jsx)(n.a,{href:"/docs/0.15/administration/ssl",children:"SSL guide"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"metrics",children:"Metrics"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.a,{href:"/docs/0.15/administration/prometheus",children:"Prometheus endpoint"})," is exposed."]}),"\n",(0,s.jsx)(n.h2,{id:"behind-a-proxy",children:"Behind a proxy"}),"\n",(0,s.jsxs)(n.p,{children:["See the ",(0,s.jsx)(n.a,{href:"/docs/0.15/administration/proxy",children:"proxy guide"})," if you want to see a setup behind Apache, Nginx, Caddy or ngrok."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},3354:(e,n,o)=>{var s=o(50959),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,o){var s,i={},d=null,l=null;for(s in void 0!==o&&(d=""+o),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)t.call(n,s)&&!c.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:r,type:e,key:d,ref:l,props:i,_owner:a.current}}n.Fragment=i,n.jsx=d,n.jsxs=d},11527:(e,n,o)=>{e.exports=o(3354)},88672:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>t});var s=o(50959);const r={},i=s.createContext(r);function t(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);