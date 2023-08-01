"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[3297],{49613:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>g});var a=t(59496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(t),d=r,g=c["".concat(p,".").concat(d)]||c[d]||u[d]||o;return t?a.createElement(g,i(i({ref:n},m),{},{components:t})):a.createElement(g,i({ref:n},m))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},38125:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>f,default:()=>O,frontMatter:()=>g,metadata:()=>x,toc:()=>k});var a=t(49613),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,c=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&m(e,t,n[t]);if(l)for(var t of l(n))s.call(n,t)&&m(e,t,n[t]);return e},u=(e,n)=>o(e,i(n)),d=(e,n)=>{var t={};for(var a in e)p.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&l)for(var a of l(e))n.indexOf(a)<0&&s.call(e,a)&&(t[a]=e[a]);return t};const g={},f="Matrix workflows",x={unversionedId:"usage/matrix-workflows",id:"version-1.0/usage/matrix-workflows",title:"Matrix workflows",description:"Woodpecker has integrated support for matrix workflows. Woodpecker executes a separate workflow for each combination in the matrix, allowing you to build and test a single commit against multiple configurations.",source:"@site/versioned_docs/version-1.0/20-usage/30-matrix-workflows.md",sourceDirName:"20-usage",slug:"/usage/matrix-workflows",permalink:"/docs/usage/matrix-workflows",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-1.0/20-usage/30-matrix-workflows.md",tags:[],version:"1.0",sidebarPosition:30,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Workflows",permalink:"/docs/usage/workflows"},next:{title:"Advanced YAML syntax",permalink:"/docs/usage/advanced-yaml-syntax"}},b={},k=[{value:"Interpolation",id:"interpolation",level:2},{value:"Examples",id:"examples",level:2},{value:"Example matrix pipeline based on Docker image tag",id:"example-matrix-pipeline-based-on-docker-image-tag",level:3},{value:"Example matrix pipeline based on container image",id:"example-matrix-pipeline-based-on-container-image",level:3},{value:"Example matrix pipeline using multiple platforms",id:"example-matrix-pipeline-using-multiple-platforms",level:3}],y={toc:k},w="wrapper";function O(e){var n=e,{components:t}=n,r=d(n,["components"]);return(0,a.kt)(w,u(c(c({},y),r),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",c({},{id:"matrix-workflows"}),"Matrix workflows"),(0,a.kt)("p",null,"Woodpecker has integrated support for matrix workflows. Woodpecker executes a separate workflow for each combination in the matrix, allowing you to build and test a single commit against multiple configurations."),(0,a.kt)("p",null,"Example matrix definition:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),"matrix:\n  GO_VERSION:\n    - 1.4\n    - 1.3\n  REDIS_VERSION:\n    - 2.6\n    - 2.8\n    - 3.0\n")),(0,a.kt)("p",null,"Example matrix definition containing only specific combinations:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),"matrix:\n  include:\n    - GO_VERSION: 1.4\n      REDIS_VERSION: 2.8\n    - GO_VERSION: 1.5\n      REDIS_VERSION: 2.8\n    - GO_VERSION: 1.6\n      REDIS_VERSION: 3.0\n")),(0,a.kt)("h2",c({},{id:"interpolation"}),"Interpolation"),(0,a.kt)("p",null,"Matrix variables are interpolated in the YAML using the ",(0,a.kt)("inlineCode",{parentName:"p"},"${VARIABLE}")," syntax, before the YAML is parsed. This is an example YAML file before interpolating matrix parameters:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),"matrix:\n  GO_VERSION:\n    - 1.4\n    - 1.3\n  DATABASE:\n    - mysql:5.5\n    - mysql:6.5\n    - mariadb:10.1\n\nsteps:\n  build:\n    image: golang:${GO_VERSION}\n    commands:\n      - go get\n      - go build\n      - go test\n\nservices:\n  database:\n    image: ${DATABASE}\n")),(0,a.kt)("p",null,"Example YAML file after injecting the matrix parameters:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-diff"}),"steps:\n  build:\n-   image: golang:${GO_VERSION}\n+   image: golang:1.4\n    commands:\n      - go get\n      - go build\n      - go test\n+   environment:\n+     - GO_VERSION=1.4\n+     - DATABASE=mysql:5.5\n\nservices:\n  database:\n-   image: ${DATABASE}\n+   image: mysql:5.5\n")),(0,a.kt)("h2",c({},{id:"examples"}),"Examples"),(0,a.kt)("h3",c({},{id:"example-matrix-pipeline-based-on-docker-image-tag"}),"Example matrix pipeline based on Docker image tag"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),"matrix:\n  TAG:\n    - 1.7\n    - 1.8\n    - latest\n\nsteps:\n  build:\n    image: golang:${TAG}\n    commands:\n      - go build\n      - go test\n")),(0,a.kt)("h3",c({},{id:"example-matrix-pipeline-based-on-container-image"}),"Example matrix pipeline based on container image"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),"matrix:\n  IMAGE:\n    - golang:1.7\n    - golang:1.8\n    - golang:latest\n\nsteps:\n  build:\n    image: ${IMAGE}\n    commands:\n      - go build\n      - go test\n")),(0,a.kt)("h3",c({},{id:"example-matrix-pipeline-using-multiple-platforms"}),"Example matrix pipeline using multiple platforms"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),'matrix:\n  platform:\n    - linux/amd64\n    - linux/arm64\n\nplatform: ${platform}\n\nsteps:\n  test:\n    image: alpine\n    commands:\n      - echo "I am running on ${platform}"\n\n  test-arm-only:\n    image: alpine\n    commands:\n      - echo "I am running on ${platform}"\n      - echo "Arm is cool!"\n    when:\n      platform: linux/arm*\n')))}O.isMDXComponent=!0}}]);