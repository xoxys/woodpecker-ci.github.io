"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[7418],{86205:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=t(13274),n=t(74169);const s={},a="Autoscaler",c={id:"administration/autoscaler",title:"Autoscaler",description:"If your would like dynamically scale your agents with the load, you can use our autoscaler.",source:"@site/versioned_docs/version-2.3/30-administration/80-autoscaler.md",sourceDirName:"30-administration",slug:"/administration/autoscaler",permalink:"/docs/2.3/administration/autoscaler",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-2.3/30-administration/80-autoscaler.md",tags:[],version:"2.3",sidebarPosition:80,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Proxy",permalink:"/docs/2.3/administration/proxy"},next:{title:"Prometheus",permalink:"/docs/2.3/administration/prometheus"}},i={},d=[{value:"Setup",id:"setup",level:2},{value:"docker-compose",id:"docker-compose",level:3}];function l(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h1,{id:"autoscaler",children:"Autoscaler"}),"\n",(0,r.jsxs)(o.p,{children:["If your would like dynamically scale your agents with the load, you can use ",(0,r.jsx)(o.a,{href:"https://github.com/woodpecker-ci/autoscaler",children:"our autoscaler"}),"."]}),"\n",(0,r.jsxs)(o.p,{children:["Please note that the autoscaler is not feature-complete yet. You can follow the progress ",(0,r.jsx)(o.a,{href:"https://github.com/woodpecker-ci/autoscaler#roadmap",children:"here"}),"."]}),"\n",(0,r.jsx)(o.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsx)(o.h3,{id:"docker-compose",children:"docker-compose"}),"\n",(0,r.jsxs)(o.p,{children:["If you are using docker-compose you can add the following to your ",(0,r.jsx)(o.code,{children:"docker-compose.yaml"})," file:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-yaml",children:"version: '3'\n\nservices:\n  woodpecker-server:\n    image: woodpeckerci/woodpecker-server:next\n    [...]\n\n  woodpecker-autoscaler:\n    image: woodpeckerci/autoscaler:next\n    restart: always\n    depends_on:\n      - woodpecker-server\n    environment:\n      - WOODPECKER_SERVER=https://your-woodpecker-server.tld # the url of your woodpecker server / could also be a public url\n      - WOODPECKER_TOKEN=${WOODPECKER_TOKEN} # the api token you can get from the UI https://your-woodpecker-server.tld/user\n      - WOODPECKER_MIN_AGENTS=0\n      - WOODPECKER_MAX_AGENTS=3\n      - WOODPECKER_WORKFLOWS_PER_AGENT=2 # the number of workflows each agent can run at the same time\n      - WOODEPCKER_GRPC_ADDR=https://grpc.your-woodpecker-server.tld # the grpc address of your woodpecker server, publicly accessible from the agents\n      - WOODEPCKER_GRPC_SECURE=true\n      - WOODPECKER_AGENT_ENV= # optional environment variables to pass to the agents\n      - WOODPECKER_PROVIDER=hetznercloud # set the provider, you can find all the available ones down below\n      - WOODPECKER_HETZNERCLOUD_API_TOKEN=${WOODPECKER_HETZNERCLOUD_API_TOKEN} # your api token for the Hetzner cloud\n"})})]})}function u(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},74169:(e,o,t)=>{t.d(o,{R:()=>a,x:()=>c});var r=t(79474);const n={},s=r.createContext(n);function a(e){const o=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(s.Provider,{value:o},e.children)}}}]);