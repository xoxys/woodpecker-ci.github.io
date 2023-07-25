"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[9727],{49613:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(59496);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,g=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return t?n.createElement(g,a(a({ref:r},l),{},{components:t})):n.createElement(g,a({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5312:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>y,contentTitle:()=>f,default:()=>v,frontMatter:()=>d,metadata:()=>g,toc:()=>m});var n=t(49613),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,l=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&l(e,t,r[t]);if(s)for(var t of s(r))p.call(r,t)&&l(e,t,r[t]);return e};const d={},f="Registries",g={unversionedId:"usage/registries",id:"version-1.0/usage/registries",title:"Registries",description:"Woodpecker provides the ability to add container registries in the settings of your repository. Adding a registry allows you to authenticate and pull private images from a container registry when using these images as a step inside your pipeline.",source:"@site/versioned_docs/version-1.0/20-usage/41-registries.md",sourceDirName:"20-usage",slug:"/usage/registries",permalink:"/docs/1.0/usage/registries",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/versioned_docs/version-1.0/20-usage/41-registries.md",tags:[],version:"1.0",sidebarPosition:41,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Secrets",permalink:"/docs/1.0/usage/secrets"},next:{title:"Cron",permalink:"/docs/1.0/usage/cron"}},y={},m=[],b={toc:m};function v(e){var r,t=e,{components:o}=t,l=((e,r)=>{var t={};for(var n in e)c.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&s)for(var n of s(e))r.indexOf(n)<0&&p.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(r=u(u({},b),l),i(r,a({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",u({},{id:"registries"}),"Registries"),(0,n.kt)("p",null,"Woodpecker provides the ability to add container registries in the settings of your repository. Adding a registry allows you to authenticate and pull private images from a container registry when using these images as a step inside your pipeline."))}v.isMDXComponent=!0}}]);