"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[4948],{9613:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>f});var r=o(9496);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(o),f=n,g=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return o?r.createElement(g,a(a({ref:t},c),{},{components:o})):r.createElement(g,a({ref:t},c))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var s=2;s<i;s++)a[s]=o[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},1241:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>k,contentTitle:()=>f,default:()=>m,frontMatter:()=>d,metadata:()=>g,toc:()=>O});var r=o(9613),n=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,o)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,u=(e,t)=>{for(var o in t||(t={}))p.call(t,o)&&c(e,o,t[o]);if(l)for(var o of l(t))s.call(t,o)&&c(e,o,t[o]);return e};const d={},f="Gogs",g={unversionedId:"administration/forges/gogs",id:"administration/forges/gogs",title:"Gogs",description:"Configuration",source:"@site/docs/30-administration/11-forges/70-gogs.md",sourceDirName:"30-administration/11-forges",slug:"/administration/forges/gogs",permalink:"/docs/next/administration/forges/gogs",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/30-administration/11-forges/70-gogs.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Bitbucket Server",permalink:"/docs/next/administration/forges/bitbucket_server"},next:{title:"Agent configuration",permalink:"/docs/next/administration/agent-config"}},k={},O=[{value:"Configuration",id:"configuration",level:2},{value:"<code>WOODPECKER_GOGS</code>",id:"woodpecker_gogs",level:3},{value:"<code>WOODPECKER_GOGS_URL</code>",id:"woodpecker_gogs_url",level:3},{value:"<code>WOODPECKER_GOGS_GIT_USERNAME</code>",id:"woodpecker_gogs_git_username",level:3},{value:"<code>WOODPECKER_GOGS_GIT_USERNAME_FILE</code>",id:"woodpecker_gogs_git_username_file",level:3},{value:"<code>WOODPECKER_GOGS_GIT_PASSWORD</code>",id:"woodpecker_gogs_git_password",level:3},{value:"<code>WOODPECKER_GOGS_GIT_PASSWORD_FILE</code>",id:"woodpecker_gogs_git_password_file",level:3},{value:"<code>WOODPECKER_GOGS_PRIVATE_MODE</code>",id:"woodpecker_gogs_private_mode",level:3},{value:"<code>WOODPECKER_GOGS_SKIP_VERIFY</code>",id:"woodpecker_gogs_skip_verify",level:3}],_={toc:O};function m(e){var t,o=e,{components:n}=o,c=((e,t)=>{var o={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(o[r]=e[r]);return o})(o,["components"]);return(0,r.kt)("wrapper",(t=u(u({},_),c),i(t,a({components:n,mdxType:"MDXLayout"}))),(0,r.kt)("h1",u({},{id:"gogs"}),"Gogs"),(0,r.kt)("h2",u({},{id:"configuration"}),"Configuration"),(0,r.kt)("p",null,"This is a full list of configuration options. Please note that many of these options use default configuration values that should work for the majority of installations."),(0,r.kt)("h3",u({},{id:"woodpecker_gogs"}),(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GOGS")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"))),(0,r.kt)("p",null,"Enables the Gogs driver."),(0,r.kt)("h3",u({},{id:"woodpecker_gogs_url"}),(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GOGS_URL")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://try.gogs.io"))),(0,r.kt)("p",null,"Configures the Gogs server address."),(0,r.kt)("h3",u({},{id:"woodpecker_gogs_git_username"}),(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GOGS_GIT_USERNAME")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,r.kt)("p",null,"This username is used to authenticate and clone all private repositories."),(0,r.kt)("h3",u({},{id:"woodpecker_gogs_git_username_file"}),(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GOGS_GIT_USERNAME_FILE")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,r.kt)("p",null,"Read the value for ",(0,r.kt)("inlineCode",{parentName:"p"},"WOODPECKER_GOGS_GIT_USERNAME")," from the specified filepath"),(0,r.kt)("h3",u({},{id:"woodpecker_gogs_git_password"}),(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GOGS_GIT_PASSWORD")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,r.kt)("p",null,"The password is used to authenticate and clone all private repositories."),(0,r.kt)("h3",u({},{id:"woodpecker_gogs_git_password_file"}),(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GOGS_GIT_PASSWORD_FILE")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,r.kt)("p",null,"Read the value for ",(0,r.kt)("inlineCode",{parentName:"p"},"WOODPECKER_GOGS_GIT_PASSWORD")," from the specified filepath"),(0,r.kt)("h3",u({},{id:"woodpecker_gogs_private_mode"}),(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GOGS_PRIVATE_MODE")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"))),(0,r.kt)("p",null,"TODO"),(0,r.kt)("h3",u({},{id:"woodpecker_gogs_skip_verify"}),(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GOGS_SKIP_VERIFY")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"))),(0,r.kt)("p",null,"Configure if SSL verification should be skipped."))}m.isMDXComponent=!0}}]);