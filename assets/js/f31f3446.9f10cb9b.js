"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[513],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=i(r),d=o,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||s;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var i=2;i<s;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1043:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return i},toc:function(){return l},default:function(){return m}});var n=r(7462),o=r(3366),s=(r(7294),r(3905)),a=["components"],c={},u="Volumes",i={unversionedId:"usage/volumes",id:"usage/volumes",isDocsHomePage:!1,title:"Volumes",description:"Woodpecker gives the ability to define Docker volumes in the Yaml. You can use this parameter to mount files or folders on the host machine into your containers.",source:"@site/docs/20-usage/70-volumes.md",sourceDirName:"20-usage",slug:"/usage/volumes",permalink:"/docs/usage/volumes",editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/20-usage/70-volumes.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Services",permalink:"/docs/usage/services"},next:{title:"Project settings",permalink:"/docs/usage/project-settings"}},l=[],p={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"volumes"},"Volumes"),(0,s.kt)("p",null,"Woodpecker gives the ability to define Docker volumes in the Yaml. You can use this parameter to mount files or folders on the host machine into your containers."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Volumes are only available to trusted repositories and for security reasons should only be used in private environments. See ",(0,s.kt)("a",{parentName:"p",href:"/docs/usage/project-settings#trusted"},"project settings")," to enable trusted mode.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-diff"},"pipeline:\n  build:\n    image: docker\n    commands:\n      - docker build --rm -t octocat/hello-world .\n      - docker run --rm octocat/hello-world --test\n      - docker push octocat/hello-world\n      - docker rmi octocat/hello-world\n    volumes:\n+     - /var/run/docker.sock:/var/run/docker.sock\n")),(0,s.kt)("p",null,"Please note that Woodpecker mounts volumes on the host machine. This means you must use absolute paths when you configure volumes. Attempting to use relative paths will result in an error."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-diff"},"- volumes: [ ./certs:/etc/ssl/certs ]\n+ volumes: [ /etc/ssl/certs:/etc/ssl/certs ]\n")))}m.isMDXComponent=!0}}]);