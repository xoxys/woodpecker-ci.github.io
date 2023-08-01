"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[4231],{49613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var o=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||n;return r?o.createElement(k,i(i({ref:t},c),{},{components:r})):o.createElement(k,i({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<n;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},78348:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>v,frontMatter:()=>k,metadata:()=>h,toc:()=>w});var o=r(49613),a=Object.defineProperty,n=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&c(e,r,t[r]);return e},d=(e,t)=>n(e,i(t)),m=(e,t)=>{var r={};for(var o in e)p.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&l)for(var o of l(e))t.indexOf(o)<0&&s.call(e,o)&&(r[o]=e[o]);return r};const k={},f="Awesome Woodpecker",h={unversionedId:"awesome",id:"awesome",title:"Awesome Woodpecker",description:"A curated list of awesome things related to Woodpecker-CI.",source:"@site/docs/92-awesome.md",sourceDirName:".",slug:"/awesome",permalink:"/docs/next/awesome",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/docs/92-awesome.md",tags:[],version:"current",sidebarPosition:92,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Migrations",permalink:"/docs/next/migrations"},next:{title:"Getting started",permalink:"/docs/next/development/getting-started"}},b={},w=[{value:"Official Resources",id:"official-resources",level:2},{value:"Projects using Woodpecker",id:"projects-using-woodpecker",level:2},{value:"Tools",id:"tools",level:2},{value:"Templates",id:"templates",level:2},{value:"Pipelines",id:"pipelines",level:2},{value:"Posts &amp; tutorials",id:"posts--tutorials",level:2},{value:"Videos",id:"videos",level:2},{value:"Plugins",id:"plugins",level:2}],g={toc:w},y="wrapper";function v(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,o.kt)(y,d(u(u({},g),a),{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",u({},{id:"awesome-woodpecker"}),"Awesome Woodpecker"),(0,o.kt)("p",null,"A curated list of awesome things related to Woodpecker-CI."),(0,o.kt)("p",null,"If you have some missing resources, please feel free to ",(0,o.kt)("a",u({parentName:"p"},{href:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/docs/92-awesome.md"}),"open a pull-request")," and add them."),(0,o.kt)("h2",u({},{id:"official-resources"}),"Official Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",u({parentName:"li"},{href:"https://github.com/woodpecker-ci/woodpecker/tree/main/.woodpecker"}),"Woodpecker CI pipeline configs")," - Complex setup containing different kind of pipelines",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",u({parentName:"li"},{href:"https://github.com/woodpecker-ci/woodpecker/blob/main/.woodpecker/test.yml"}),"Golang tests")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",u({parentName:"li"},{href:"https://github.com/woodpecker-ci/woodpecker/blob/main/.woodpecker/web.yml"}),"Typescript, eslint & Vue")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",u({parentName:"li"},{href:"https://github.com/woodpecker-ci/woodpecker/blob/main/.woodpecker/docs.yml"}),"Docusaurus & publishing to GitHub Pages")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",u({parentName:"li"},{href:"https://github.com/woodpecker-ci/woodpecker/blob/main/.woodpecker/docker.yml"}),"Docker container building")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",u({parentName:"li"},{href:"https://github.com/woodpecker-ci/woodpecker/blob/main/.woodpecker/helm.yml"}),"Helm chart linting & releasing"))))),(0,o.kt)("h2",u({},{id:"projects-using-woodpecker"}),"Projects using Woodpecker"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",u({parentName:"li"},{href:"https://github.com/woodpecker-ci/woodpecker/tree/main/.woodpecker"}),"Woodpecker-CI")," itself"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",u({parentName:"li"},{href:"https://github.com/woodpecker-ci?q=plugin&type=all"}),"All official plugins")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",u({parentName:"li"},{href:"https://github.com/dessalines/thumb-key/blob/main/.woodpecker.yml"}),"dessalines/thumb-key")," - Android Jetpack compose linting and building")),(0,o.kt)("h2",u({},{id:"tools"}),"Tools"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",u({parentName:"li"},{href:"https://codeberg.org/lafriks/woodpecker-pipeline-transform"}),"Convert Drone CI pipelines to Woodpecker CI")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",u({parentName:"li"},{href:"https://github.com/davestephens/ansible-nas/"}),"Ansible NAS")," - a homelab Ansible playbook that can set up Woodpecker-CI and Gitea"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",u({parentName:"li"},{href:"https://github.com/windsource/picus"}),"picus")," - Picus connects to a Woodpecker CI server and creates an agent in the cloud when there are pending workflows."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",u({parentName:"li"},{href:"https://www.hetzner.com/cloud"}),"Hetzner cloud")," based ",(0,o.kt)("a",u({parentName:"li"},{href:"https://git.ljoonal.xyz/ljoonal/hetzner-ci-autoscaler"}),"Woodpecker compatible autoscaler")," - Creates and destroys VPS instances based on the count of pending & running jobs.")),(0,o.kt)("h2",u({},{id:"templates"}),"Templates"),(0,o.kt)("h2",u({},{id:"pipelines"}),"Pipelines"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",u({parentName:"li"},{href:"https://codeberg.org/Codeberg-CI/examples"}),"Collection of pipeline examples"))),(0,o.kt)("h2",u({},{id:"posts--tutorials"}),"Posts & tutorials"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",u({parentName:"li"},{href:"https://containers.fan/posts/setup-gitea-with-woodpecker-ci/"}),"Setup Gitea with Woodpecker CI")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",u({parentName:"li"},{href:"https://devforth.io/blog/step-by-step-guide-to-modern-secure-ci-setup/"}),"Step-by-step guide to modern, secure and Open-source CI setup")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",u({parentName:"li"},{href:"https://jan.wildeboer.net/2022/07/Woodpecker-CI-Jekyll/"}),"Using Woodpecker CI for my static sites")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",u({parentName:"li"},{href:"https://www.sarkasti.eu/articles/post/woodpecker/"}),"Woodpecker CI @ Codeberg")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",u({parentName:"li"},{href:"https://hinty.io/vverenko/deploy-docker-compose-using-woodpecker-ci/"}),"Deploy Docker/Compose using Woodpecker CI")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",u({parentName:"li"},{href:"https://pwa.io/articles/installing-woodpecker-in-your-homelab/"}),"Installing Woodpecker CI in your personal homelab"))),(0,o.kt)("h2",u({},{id:"videos"}),"Videos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",u({parentName:"li"},{href:"https://www.youtube.com/watch?v=d610YPvCB0E"}),"Replace Ansible Semaphore with Woodpecker CI"))),(0,o.kt)("h2",u({},{id:"plugins"}),"Plugins"),(0,o.kt)("p",null,"We have a separate ",(0,o.kt)("a",u({parentName:"p"},{href:"/plugins"}),"index")," for plugins."))}v.isMDXComponent=!0}}]);