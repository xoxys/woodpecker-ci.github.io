"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[8981],{49613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(59496);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),f=c,m=s["".concat(l,".").concat(f)]||s[f]||d[f]||o;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=r.length,a=new Array(o);a[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:c,a[1]=i;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},69434:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>k,frontMatter:()=>m,metadata:()=>y,toc:()=>h});var n=r(49613),c=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&u(e,r,t[r]);return e},d=(e,t)=>o(e,a(t)),f=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const m={},v="Architecture",y={unversionedId:"development/architecture",id:"version-0.15/development/architecture",title:"Architecture",description:"Package architecture",source:"@site/versioned_docs/version-0.15/92-development/05-architecture.md",sourceDirName:"92-development",slug:"/development/architecture",permalink:"/docs/0.15/development/architecture",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-0.15/92-development/05-architecture.md",tags:[],version:"0.15",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Documentation",permalink:"/docs/0.15/development/docs"},next:{title:"Guides",permalink:"/docs/0.15/development/guides"}},b={},h=[{value:"Package architecture",id:"package-architecture",level:2},{value:"System architecture",id:"system-architecture",level:2}],O={toc:h},g="wrapper";function k(e){var t=e,{components:c}=t,o=f(t,["components"]);return(0,n.kt)(g,d(s(s({},O),o),{components:c,mdxType:"MDXLayout"}),(0,n.kt)("h1",s({},{id:"architecture"}),"Architecture"),(0,n.kt)("h2",s({},{id:"package-architecture"}),"Package architecture"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Woodpecker architecture",src:r(24570).Z,width:"1530",height:"1110"})),(0,n.kt)("h2",s({},{id:"system-architecture"}),"System architecture"),(0,n.kt)("p",null,"TODO"))}k.isMDXComponent=!0},24570:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/woodpecker-architecture-3929270c89a1fbf3a72f17aff8bd23e5.png"}}]);