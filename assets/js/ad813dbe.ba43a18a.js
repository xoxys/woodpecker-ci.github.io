"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[1236],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=c(r),f=o,g=l["".concat(i,".").concat(f)]||l[f]||d[f]||a;return r?n.createElement(g,s(s({ref:t},p),{},{components:r})):n.createElement(g,s({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=l;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,s[1]=u;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},1540:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),s=["components"],u={},i="Status Badges",c={unversionedId:"usage/badges",id:"usage/badges",title:"Status Badges",description:"Woodpecker has integrated support for repository status badges. These badges can be added to your website or project readme file to display the status of your code.",source:"@site/docs/20-usage/80-badges.md",sourceDirName:"20-usage",slug:"/usage/badges",permalink:"/docs/usage/badges",editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/20-usage/80-badges.md",tags:[],version:"current",sidebarPosition:80,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Project settings",permalink:"/docs/usage/project-settings"},next:{title:"Setup",permalink:"/docs/administration/setup"}},p={},d=[{value:"Badge endpoint",id:"badge-endpoint",level:2}],l={toc:d};function f(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"status-badges"},"Status Badges"),(0,a.kt)("p",null,"Woodpecker has integrated support for repository status badges. These badges can be added to your website or project readme file to display the status of your code."),(0,a.kt)("h2",{id:"badge-endpoint"},"Badge endpoint"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"<scheme>://<hostname>/api/badges/<owner>/<repo>/status.svg\n")),(0,a.kt)("p",null,"The status badge displays the status for the latest build to your default branch (e.g. master). You can customize the branch by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"branch")," query parameter."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"-<scheme>://<hostname>/api/badges/<owner>/<repo>/status.svg\n+<scheme>://<hostname>/api/badges/<owner>/<repo>/status.svg?branch=<branch>\n")),(0,a.kt)("p",null,"Please note status badges do not include pull request results, since the status of a pull request does not provide an accurate representation of your repository state."))}f.isMDXComponent=!0}}]);