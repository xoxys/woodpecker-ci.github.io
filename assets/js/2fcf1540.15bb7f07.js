/*! For license information please see 2fcf1540.15bb7f07.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[5730],{27925:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>i});var r=o(11527),s=o(63883);const c={},t="docker-compose",a={id:"administration/deployment/docker-compose",title:"docker-compose",description:"The below docker-compose configuration can be used to start a Woodpecker server with a single agent.",source:"@site/docs/30-administration/00-deployment/10-docker-compose.md",sourceDirName:"30-administration/00-deployment",slug:"/administration/deployment/docker-compose",permalink:"/docs/next/administration/deployment/docker-compose",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/docs/30-administration/00-deployment/10-docker-compose.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deployment",permalink:"/docs/next/administration/deployment/overview"},next:{title:"Kubernetes",permalink:"/docs/next/administration/deployment/kubernetes"}},d={},i=[{value:"Docker images",id:"docker-images",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"docker-compose",children:"docker-compose"}),"\n",(0,r.jsxs)(n.p,{children:["The below ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/compose/",children:"docker-compose"})," configuration can be used to start a Woodpecker server with a single agent."]}),"\n",(0,r.jsxs)(n.p,{children:["It relies on a number of environment variables that you must set before running ",(0,r.jsx)(n.code,{children:"docker-compose up"}),". The variables are described below."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    image: woodpeckerci/woodpecker-server:latest\n    ports:\n      - 8000:8000\n    volumes:\n      - woodpecker-server-data:/var/lib/woodpecker/\n    environment:\n      - WOODPECKER_OPEN=true\n      - WOODPECKER_HOST=${WOODPECKER_HOST}\n      - WOODPECKER_GITHUB=true\n      - WOODPECKER_GITHUB_CLIENT=${WOODPECKER_GITHUB_CLIENT}\n      - WOODPECKER_GITHUB_SECRET=${WOODPECKER_GITHUB_SECRET}\n      - WOODPECKER_AGENT_SECRET=${WOODPECKER_AGENT_SECRET}\n\n  woodpecker-agent:\n    image: woodpeckerci/woodpecker-agent:latest\n    command: agent\n    restart: always\n    depends_on:\n      - woodpecker-server\n    volumes:\n      - woodpecker-agent-config:/etc/woodpecker\n      - /var/run/docker.sock:/var/run/docker.sock\n    environment:\n      - WOODPECKER_SERVER=woodpecker-server:9000\n      - WOODPECKER_AGENT_SECRET=${WOODPECKER_AGENT_SECRET}\n\nvolumes:\n  woodpecker-server-data:\n  woodpecker-agent-config:\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Woodpecker needs to know its own address. You must therefore provide the public address of it in ",(0,r.jsx)(n.code,{children:"<scheme>://<hostname>"})," format. Please omit trailing slashes:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    environment:\n      - [...]\n+     - WOODPECKER_HOST=${WOODPECKER_HOST}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Woodpecker can also have its port's configured. It uses a separate port for gRPC and for HTTP. The agent performs gRPC calls and connects to the gRPC port.\nThey can be configured with ADDR variables:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:"# docker-compose.yml\nversion: '3'\nservices:\n  woodpecker-server:\n    [...]\n    environment:\n      - [...]\n+     - WOODPECKER_GRPC_ADDR=${WOODPECKER_GRPC_ADDR}\n+     - WOODPECKER_SERVER_ADDR=${WOODPECKER_HTTP_ADDR}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Reverse proxying can also be ",(0,r.jsx)(n.a,{href:"../proxy#caddy",children:"configured for gRPC"}),". If the agents are connecting over the internet, it should also be SSL encrypted. The agent then needs to be configured to be secure:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:"# docker-compose.yml\nversion: '3'\nservices:\n  woodpecker-server:\n    [...]\n    environment:\n      - [...]\n+     - WOODPECKER_GRPC_SECURE=true # defaults to false\n+     - WOODPECKER_GRPC_VERIFY=true # default\n"})}),"\n",(0,r.jsx)(n.p,{children:"As agents run pipeline steps as docker containers they require access to the host machine's Docker daemon:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:"# docker-compose.yml\nversion: '3'\n\nservices:\n  [...]\n  woodpecker-agent:\n    [...]\n+   volumes:\n+     - /var/run/docker.sock:/var/run/docker.sock\n"})}),"\n",(0,r.jsx)(n.p,{children:"Agents require the server address for agent-to-server communication. The agent connects to the server's gRPC port:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-agent:\n    [...]\n    environment:\n+     - WOODPECKER_SERVER=woodpecker-server:9000\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The server and agents use a shared secret to authenticate communication. This should be a random string of your choosing and should be kept private. You can generate such string with ",(0,r.jsx)(n.code,{children:"openssl rand -hex 32"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    environment:\n      - [...]\n+     - WOODPECKER_AGENT_SECRET=${WOODPECKER_AGENT_SECRET}\n  woodpecker-agent:\n    [...]\n    environment:\n      - [...]\n+     - WOODPECKER_AGENT_SECRET=${WOODPECKER_AGENT_SECRET}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"docker-images",children:"Docker images"}),"\n",(0,r.jsx)(n.p,{children:"Image variants:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"latest"})," image is the latest stable release"]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"vX.X.X"})," images are stable releases"]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"vX.X"})," images are based on the current release branch (e.g. ",(0,r.jsx)(n.code,{children:"release/v1.0"}),") and can be used to get bugfixes asap"]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"next"})," images are based on the current ",(0,r.jsx)(n.code,{children:"main"})," branch and should not be used for production environments"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# server\ndocker pull woodpeckerci/woodpecker-server:latest\ndocker pull woodpeckerci/woodpecker-server:latest-alpine\n\n# agent\ndocker pull woodpeckerci/woodpecker-agent:latest\ndocker pull woodpeckerci/woodpecker-agent:latest-alpine\n\n# cli\ndocker pull woodpeckerci/woodpecker-cli:latest\ndocker pull woodpeckerci/woodpecker-cli:latest-alpine\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},3354:(e,n,o)=>{var r=o(50959),s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,o){var r,c={},i=null,l=null;for(r in void 0!==o&&(i=""+o),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(l=n.ref),n)t.call(n,r)&&!d.hasOwnProperty(r)&&(c[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===c[r]&&(c[r]=n[r]);return{$$typeof:s,type:e,key:i,ref:l,props:c,_owner:a.current}}n.Fragment=c,n.jsx=i,n.jsxs=i},11527:(e,n,o)=>{e.exports=o(3354)},63883:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>t});var r=o(50959);const s={},c=r.createContext(s);function t(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);