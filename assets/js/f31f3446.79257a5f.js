"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[6672],{9656:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var s=t(13274),n=t(74169);const r={},c="Volumes",i={id:"usage/volumes",title:"Volumes",description:"Woodpecker gives the ability to define Docker volumes in the YAML. You can use this parameter to mount files or folders on the host machine into your containers.",source:"@site/docs/20-usage/70-volumes.md",sourceDirName:"20-usage",slug:"/usage/volumes",permalink:"/docs/next/usage/volumes",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/docs/20-usage/70-volumes.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Services",permalink:"/docs/next/usage/services"},next:{title:"Project settings",permalink:"/docs/next/usage/project-settings"}},a={},l=[];function u(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h1,{id:"volumes",children:"Volumes"}),"\n",(0,s.jsx)(o.p,{children:"Woodpecker gives the ability to define Docker volumes in the YAML. You can use this parameter to mount files or folders on the host machine into your containers."}),"\n",(0,s.jsx)(o.admonition,{type:"note",children:(0,s.jsxs)(o.p,{children:["Volumes are only available to trusted repositories and for security reasons should only be used in private environments. See ",(0,s.jsx)(o.a,{href:"/docs/next/usage/project-settings#trusted",children:"project settings"})," to enable trusted mode."]})}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-diff",children:" steps:\n   - name: build\n     image: docker\n     commands:\n       - docker build --rm -t octocat/hello-world .\n       - docker run --rm octocat/hello-world --test\n       - docker push octocat/hello-world\n       - docker rmi octocat/hello-world\n     volumes:\n+      - /var/run/docker.sock:/var/run/docker.sock\n"})}),"\n",(0,s.jsx)(o.p,{children:"Please note that Woodpecker mounts volumes on the host machine. This means you must use absolute paths when you configure volumes. Attempting to use relative paths will result in an error."}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-diff",children:"-volumes: [ ./certs:/etc/ssl/certs ]\n+volumes: [ /etc/ssl/certs:/etc/ssl/certs ]\n"})})]})}function d(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},74169:(e,o,t)=>{t.d(o,{R:()=>c,x:()=>i});var s=t(79474);const n={},r=s.createContext(n);function c(e){const o=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),s.createElement(r.Provider,{value:o},e.children)}}}]);