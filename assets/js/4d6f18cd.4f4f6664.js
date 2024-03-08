/*! For license information please see 4d6f18cd.4f4f6664.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[4201],{88435:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>a});var r=n(13274),t=n(74169);const i={},c="Docker backend",s={id:"administration/backends/docker",title:"Docker backend",description:"This is the original backend used with Woodpecker. The docker backend executes each step inside a separate container started on the agent.",source:"@site/versioned_docs/version-1.0/30-administration/22-backends/10-docker.md",sourceDirName:"30-administration/22-backends",slug:"/administration/backends/docker",permalink:"/docs/1.0/administration/backends/docker",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-1.0/30-administration/22-backends/10-docker.md",tags:[],version:"1.0",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Agent configuration",permalink:"/docs/1.0/administration/agent-config"},next:{title:"Local backend",permalink:"/docs/1.0/administration/backends/local"}},d={},a=[{value:"Configuration",id:"configuration",level:2},{value:"<code>WOODPECKER_BACKEND_DOCKER_NETWORK</code>",id:"woodpecker_backend_docker_network",level:3},{value:"<code>WOODPECKER_BACKEND_DOCKER_ENABLE_IPV6</code>",id:"woodpecker_backend_docker_enable_ipv6",level:3},{value:"<code>WOODPECKER_BACKEND_DOCKER_VOLUMES</code>",id:"woodpecker_backend_docker_volumes",level:3},{value:"Docker credentials",id:"docker-credentials",level:2},{value:"Podman support",id:"podman-support",level:2},{value:"Image Cleanup",id:"image-cleanup",level:2},{value:"Remove all unused images",id:"remove-all-unused-images",level:3},{value:"Remove Woodpecker Volumes",id:"remove-woodpecker-volumes",level:3}];function l(e){const o={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h1,{id:"docker-backend",children:"Docker backend"}),"\n",(0,r.jsx)(o.p,{children:"This is the original backend used with Woodpecker. The docker backend executes each step inside a separate container started on the agent."}),"\n",(0,r.jsx)(o.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(o.h3,{id:"woodpecker_backend_docker_network",children:(0,r.jsx)(o.code,{children:"WOODPECKER_BACKEND_DOCKER_NETWORK"})}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsx)(o.p,{children:"Default: empty"}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"Set to the name of an existing network which will be attached to all your pipeline containers (steps). Please be careful as this allows the containers of different pipelines to access each other!"}),"\n",(0,r.jsx)(o.h3,{id:"woodpecker_backend_docker_enable_ipv6",children:(0,r.jsx)(o.code,{children:"WOODPECKER_BACKEND_DOCKER_ENABLE_IPV6"})}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsxs)(o.p,{children:["Default: ",(0,r.jsx)(o.code,{children:"false"})]}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"Enable IPv6 for the networks used by pipeline containers (steps). Make sure you configured your docker daemon to support IPv6."}),"\n",(0,r.jsx)(o.h3,{id:"woodpecker_backend_docker_volumes",children:(0,r.jsx)(o.code,{children:"WOODPECKER_BACKEND_DOCKER_VOLUMES"})}),"\n",(0,r.jsxs)(o.blockquote,{children:["\n",(0,r.jsx)(o.p,{children:"Default: empty"}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:["List of default volumes separated by comma to be mounted to all pipeline containers (steps). For example to use custom CA\ncertificates installed on host and host timezone use ",(0,r.jsx)(o.code,{children:"/etc/ssl/certs:/etc/ssl/certs:ro,/etc/timezone:/etc/timezone"}),"."]}),"\n",(0,r.jsx)(o.h2,{id:"docker-credentials",children:"Docker credentials"}),"\n",(0,r.jsxs)(o.p,{children:["Woodpecker supports ",(0,r.jsx)(o.a,{href:"https://github.com/docker/docker-credential-helpers",children:"Docker credentials"})," to securely store registry credentials. Install your corresponding credential helper and configure it in your Docker config file passed via ",(0,r.jsx)(o.a,{href:"/docs/1.0/administration/server-config#woodpecker_docker_config",children:(0,r.jsx)(o.code,{children:"WOODPECKER_DOCKER_CONFIG"})}),"."]}),"\n",(0,r.jsx)(o.p,{children:"To add your credential helper to the Woodpecker server container you could use the following code to build a custom image:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-dockerfile",children:"FROM woodpeckerci/woodpecker-server:latest-alpine\n\nRUN apk add -U --no-cache docker-credential-ecr-login\n"})}),"\n",(0,r.jsx)(o.h2,{id:"podman-support",children:"Podman support"}),"\n",(0,r.jsxs)(o.p,{children:["While the agent was developed with Docker/Moby, Podman can also be used by setting the environment variable ",(0,r.jsx)(o.code,{children:"DOCKER_HOST"})," to point to the Podman socket. In order to work without workarounds, Podman 4.0 (or above) is required."]}),"\n",(0,r.jsx)(o.h2,{id:"image-cleanup",children:"Image Cleanup"}),"\n",(0,r.jsxs)(o.p,{children:["The agent ",(0,r.jsx)(o.strong,{children:"will not"})," automatically remove images from the host. This task should be managed by the host system. For example, you can use a cron job to periodically do clean-up tasks for the CI runner."]}),"\n",(0,r.jsx)(o.admonition,{type:"danger",children:(0,r.jsxs)(o.p,{children:["The following commands ",(0,r.jsx)(o.strong,{children:"are destructive"})," and ",(0,r.jsx)(o.strong,{children:"irreversible"})," it is highly recommended that you test these commands on your system before running them in production via a cron job or other automation."]})}),"\n",(0,r.jsx)(o.h3,{id:"remove-all-unused-images",children:"Remove all unused images"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-sh",children:'docker image rm $(docker images --filter "dangling=true" -q --no-trunc)\n'})}),"\n",(0,r.jsx)(o.h3,{id:"remove-woodpecker-volumes",children:"Remove Woodpecker Volumes"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-sh",children:"docker volume rm $(docker volume ls --filter name=^wp_* --filter dangling=true  -q)\n"})})]})}function u(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},78034:(e,o,n)=>{var r=n(79474),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,o,n){var r,i={},a=null,l=null;for(r in void 0!==n&&(a=""+n),void 0!==o.key&&(a=""+o.key),void 0!==o.ref&&(l=o.ref),o)c.call(o,r)&&!d.hasOwnProperty(r)&&(i[r]=o[r]);if(e&&e.defaultProps)for(r in o=e.defaultProps)void 0===i[r]&&(i[r]=o[r]);return{$$typeof:t,type:e,key:a,ref:l,props:i,_owner:s.current}}o.Fragment=i,o.jsx=a,o.jsxs=a},13274:(e,o,n)=>{e.exports=n(78034)},74169:(e,o,n)=>{n.d(o,{R:()=>c,x:()=>s});var r=n(79474);const t={},i=r.createContext(t);function c(e){const o=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(i.Provider,{value:o},e.children)}}}]);