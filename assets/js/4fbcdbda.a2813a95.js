/*! For license information please see 4fbcdbda.a2813a95.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[7958],{97895:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>c,contentTitle:()=>t,default:()=>g,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=i(11527),n=i(46224);const o={},t="Registries",a={id:"usage/registries",title:"Registries",description:"Woodpecker provides the ability to add container registries in the settings of your repository. Adding a registry allows you to authenticate and pull private images from a container registry when using these images as a step inside your pipeline. Using registry credentials can also help you avoid rate limiting when pulling images from public registries.",source:"@site/versioned_docs/version-2.1/20-usage/41-registries.md",sourceDirName:"20-usage",slug:"/usage/registries",permalink:"/docs/usage/registries",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-2.1/20-usage/41-registries.md",tags:[],version:"2.1",sidebarPosition:41,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Secrets",permalink:"/docs/usage/secrets"},next:{title:"Cron",permalink:"/docs/usage/cron"}},c={},l=[{value:"Images from private registries",id:"images-from-private-registries",level:2},{value:"Global registry support",id:"global-registry-support",level:2},{value:"GCR registry support",id:"gcr-registry-support",level:2},{value:"Local Images",id:"local-images",level:2}];function d(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"registries",children:"Registries"}),"\n",(0,s.jsx)(r.p,{children:"Woodpecker provides the ability to add container registries in the settings of your repository. Adding a registry allows you to authenticate and pull private images from a container registry when using these images as a step inside your pipeline. Using registry credentials can also help you avoid rate limiting when pulling images from public registries."}),"\n",(0,s.jsx)(r.h2,{id:"images-from-private-registries",children:"Images from private registries"}),"\n",(0,s.jsx)(r.p,{children:"You must provide registry credentials in the UI in order to pull private container images defined in your YAML configuration file."}),"\n",(0,s.jsx)(r.p,{children:"These credentials are never exposed to your steps, which means they cannot be used to push, and are safe to use with pull requests, for example. Pushing to a registry still requires setting credentials for the appropriate plugin."}),"\n",(0,s.jsx)(r.p,{children:"Example configuration using a private image:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-diff",children:" steps:\n   build:\n+    image: gcr.io/custom/golang\n     commands:\n       - go build\n       - go test\n"})}),"\n",(0,s.jsx)(r.p,{children:"Woodpecker matches the registry hostname to each image in your YAML. If the hostnames match, the registry credentials are used to authenticate to your registry and pull the image. Note that registry credentials are used by the Woodpecker agent and are never exposed to your build containers."}),"\n",(0,s.jsx)(r.p,{children:"Example registry hostnames:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Image ",(0,s.jsx)(r.code,{children:"gcr.io/foo/bar"})," has hostname ",(0,s.jsx)(r.code,{children:"gcr.io"})]}),"\n",(0,s.jsxs)(r.li,{children:["Image ",(0,s.jsx)(r.code,{children:"foo/bar"})," has hostname ",(0,s.jsx)(r.code,{children:"docker.io"})]}),"\n",(0,s.jsxs)(r.li,{children:["Image ",(0,s.jsx)(r.code,{children:"qux.com:8000/foo/bar"})," has hostname ",(0,s.jsx)(r.code,{children:"qux.com:8000"})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Example registry hostname matching logic:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Hostname ",(0,s.jsx)(r.code,{children:"gcr.io"})," matches image ",(0,s.jsx)(r.code,{children:"gcr.io/foo/bar"})]}),"\n",(0,s.jsxs)(r.li,{children:["Hostname ",(0,s.jsx)(r.code,{children:"docker.io"})," matches ",(0,s.jsx)(r.code,{children:"golang"})]}),"\n",(0,s.jsxs)(r.li,{children:["Hostname ",(0,s.jsx)(r.code,{children:"docker.io"})," matches ",(0,s.jsx)(r.code,{children:"library/golang"})]}),"\n",(0,s.jsxs)(r.li,{children:["Hostname ",(0,s.jsx)(r.code,{children:"docker.io"})," matches ",(0,s.jsx)(r.code,{children:"bradyrydzewski/golang"})]}),"\n",(0,s.jsxs)(r.li,{children:["Hostname ",(0,s.jsx)(r.code,{children:"docker.io"})," matches ",(0,s.jsx)(r.code,{children:"bradyrydzewski/golang:latest"})]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"global-registry-support",children:"Global registry support"}),"\n",(0,s.jsxs)(r.p,{children:["To make a private registry globally available, check the ",(0,s.jsx)(r.a,{href:"/docs/administration/server-config#global-registry-setting",children:"server configuration docs"}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"gcr-registry-support",children:"GCR registry support"}),"\n",(0,s.jsxs)(r.p,{children:["For specific details on configuring access to Google Container Registry, please view the docs ",(0,s.jsx)(r.a,{href:"https://cloud.google.com/container-registry/docs/advanced-authentication#using_a_json_key_file",children:"here"}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"local-images",children:"Local Images"}),"\n",(0,s.jsx)(r.admonition,{type:"warning",children:(0,s.jsx)(r.p,{children:"For this, privileged rights are needed only available to admins. In addition, this only works when using a single agent."})}),"\n",(0,s.jsx)(r.p,{children:"It's possible to build a local image by mounting the docker socket as a volume."}),"\n",(0,s.jsxs)(r.p,{children:["With a ",(0,s.jsx)(r.code,{children:"Dockerfile"})," at the root of the project:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-diff",children:"steps:\n  build-image:\n    image: docker\n    commands:\n      - docker build --rm -t local/project-image .\n    volumes:\n      - /var/run/docker.sock:/var/run/docker.sock\n\n  build-project:\n    image: local/project-image\n    commands:\n      - ./build.sh\n"})})]})}function g(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},3354:(e,r,i)=>{var s=i(50959),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,i){var s,o={},l=null,d=null;for(s in void 0!==i&&(l=""+i),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(d=r.ref),r)t.call(r,s)&&!c.hasOwnProperty(s)&&(o[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===o[s]&&(o[s]=r[s]);return{$$typeof:n,type:e,key:l,ref:d,props:o,_owner:a.current}}r.Fragment=o,r.jsx=l,r.jsxs=l},11527:(e,r,i)=>{e.exports=i(3354)},46224:(e,r,i)=>{i.d(r,{Z:()=>a,a:()=>t});var s=i(50959);const n={},o=s.createContext(n);function t(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);