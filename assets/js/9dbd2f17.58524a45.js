"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[326],{49613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(59496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(t),d=i,f=c["".concat(p,".").concat(d)]||c[d]||g[d]||a;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},95442:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>m,default:()=>O,frontMatter:()=>f,metadata:()=>y,toc:()=>k});var r=t(49613),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,c=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&u(e,t,n[t]);if(l)for(var t of l(n))s.call(n,t)&&u(e,t,n[t]);return e},g=(e,n)=>a(e,o(n)),d=(e,n)=>{var t={};for(var r in e)p.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&l)for(var r of l(e))n.indexOf(r)<0&&s.call(e,r)&&(t[r]=e[r]);return t};const f={},m="Plugins",y={unversionedId:"usage/plugins/plugins",id:"version-1.0/usage/plugins/plugins",title:"Plugins",description:"Plugins are pipeline steps that perform pre-defined tasks and are configured as steps in your pipeline. Plugins can be used to deploy code, publish artifacts, send notification, and more.",source:"@site/versioned_docs/version-1.0/20-usage/51-plugins/10-plugins.md",sourceDirName:"20-usage/51-plugins",slug:"/usage/plugins/plugins",permalink:"/docs/usage/plugins/plugins",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-1.0/20-usage/51-plugins/10-plugins.md",tags:[],version:"1.0",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Environment variables",permalink:"/docs/usage/environment"},next:{title:"Example plugin",permalink:"/docs/usage/plugins/sample-plugin"}},b={},k=[{value:"Plugin Isolation",id:"plugin-isolation",level:2},{value:"Finding Plugins",id:"finding-plugins",level:2},{value:"Creating a plugin",id:"creating-a-plugin",level:2}],h={toc:k},v="wrapper";function O(e){var n=e,{components:t}=n,i=d(n,["components"]);return(0,r.kt)(v,g(c(c({},h),i),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",c({},{id:"plugins"}),"Plugins"),(0,r.kt)("p",null,"Plugins are pipeline steps that perform pre-defined tasks and are configured as steps in your pipeline. Plugins can be used to deploy code, publish artifacts, send notification, and more."),(0,r.kt)("p",null,"They are automatically pulled from the default container registry the agent's have configured."),(0,r.kt)("p",null,"Example pipeline using the Docker and Slack plugins:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),"steps:\n  build:\n    image: golang\n    commands:\n      - go build\n      - go test\n\n  publish:\n    image: plugins/docker\n    settings:\n      repo: foo/bar\n      tags: latest\n\n  notify:\n    image: plugins/slack\n    settings:\n      channel: dev\n")),(0,r.kt)("h2",c({},{id:"plugin-isolation"}),"Plugin Isolation"),(0,r.kt)("p",null,"Plugins are just pipeline steps. They share the build workspace, mounted as a volume, and therefore have access to your source tree."),(0,r.kt)("h2",c({},{id:"finding-plugins"}),"Finding Plugins"),(0,r.kt)("p",null,"For official plugins, you can use the Woodpecker plugin index:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://woodpecker-ci.org/plugins"}),"Official Woodpecker Plugins"))),(0,r.kt)("admonition",c({},{type:"tip"}),(0,r.kt)("p",{parentName:"admonition"},"There are also other plugin lists with additional plugins. Keep in mind that ",(0,r.kt)("a",c({parentName:"p"},{href:"https://www.drone.io/"}),"Drone")," plugins are generally supported, but could need some adjustments and tweaking."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"http://plugins.drone.io"}),"Drone Plugins")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://drone-plugin-index.geekdocs.de/plugins/drone-matrix/"}),"The Geek Lab Drone Plugins")))),(0,r.kt)("h2",c({},{id:"creating-a-plugin"}),"Creating a plugin"),(0,r.kt)("p",null,"See a ",(0,r.kt)("a",c({parentName:"p"},{href:"/docs/usage/plugins/sample-plugin"}),"detailed plugin example"),"."))}O.isMDXComponent=!0}}]);