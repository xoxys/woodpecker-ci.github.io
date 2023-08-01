"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[3238],{49613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14395:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>O,frontMatter:()=>f,metadata:()=>b,toc:()=>h});var r=n(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(c)for(var n of c(t))l.call(t,n)&&u(e,n,t[n]);return e},p=(e,t)=>a(e,i(t)),m=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n};const f={},y="Documentation",b={unversionedId:"development/docs",id:"version-0.15/development/docs",title:"Documentation",description:"The documentation is using docusaurus as framework. You can learn more about it from its official documentation.",source:"@site/versioned_docs/version-0.15/92-development/04-docs.md",sourceDirName:"92-development",slug:"/development/docs",permalink:"/docs/0.15/development/docs",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-0.15/92-development/04-docs.md",tags:[],version:"0.15",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"UI Development",permalink:"/docs/0.15/development/ui"},next:{title:"Architecture",permalink:"/docs/0.15/development/architecture"}},g={},h=[],v={toc:h},w="wrapper";function O(e){var t=e,{components:n}=t,o=m(t,["components"]);return(0,r.kt)(w,p(d(d({},v),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",d({},{id:"documentation"}),"Documentation"),(0,r.kt)("p",null,"The documentation is using docusaurus as framework. You can learn more about it from its ",(0,r.kt)("a",d({parentName:"p"},{href:"https://docusaurus.io/docs/"}),"official documentation"),"."),(0,r.kt)("p",null,"If you only want to change some text it probably is enough if you just search for the corresponding ",(0,r.kt)("a",d({parentName:"p"},{href:"https://www.markdownguide.org/basic-syntax/"}),"Markdown")," file inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"docs/docs/")," folder and adjust it. If you want to change larger parts and test the rendered documentation you can run docusaurus locally. Similarly to the UI you need to install ",(0,r.kt)("a",d({parentName:"p"},{href:"/docs/0.15/development/getting-started#nodejs--yarn"}),"Node.js and Yarn"),". After that you can run and build docusaurus locally by using the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"cd docs/\n\nyarn install\n\n# build plugins used by the docs\nyarn build:woodpecker-plugins\n\n# start docs with hot-reloading, so you can change the docs and directly see the changes in the browser without reloading it manually\nyarn start\n\n# or build the docs to deploy it to some static page hosting\nyarn build\n")))}O.isMDXComponent=!0}}]);