"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[667],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return g}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var u=n.createContext({}),l=function(e){var t=n.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(o),g=r,m=d["".concat(u,".").concat(g)]||d[g]||p[g]||i;return o?n.createElement(m,a(a({ref:t},c),{},{components:o})):n.createElement(m,a({ref:t},c))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=o[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},4558:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var n=o(7462),r=o(3366),i=(o(7294),o(3905)),a=["components"],s={},u="Getting started",l={unversionedId:"usage/intro",id:"usage/intro",isDocsHomePage:!1,title:"Getting started",description:"Repository Activation",source:"@site/docs/20-usage/10-intro.md",sourceDirName:"20-usage",slug:"/usage/intro",permalink:"/docs/usage/intro",editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/20-usage/10-intro.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Welcome to Woodpecker",permalink:"/docs/intro"},next:{title:"Pipeline syntax",permalink:"/docs/usage/pipeline-syntax"}},c=[{value:"Repository Activation",id:"repository-activation",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Execution",id:"execution",children:[]}],p={toc:c};function d(e){var t=e.components,s=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting started"),(0,i.kt)("h2",{id:"repository-activation"},"Repository Activation"),(0,i.kt)("p",null,"To activate your project navigate to your account settings. You will see a list of repositories which can be activated with a simple toggle. When you activate your repository, Woodpecker automatically adds webhooks to your version control system (e.g. GitHub)."),(0,i.kt)("p",null,"Webhooks are used to trigger pipeline executions. When you push code to your repository, open a pull request, or create a tag, your version control system will automatically send a webhook to Woodpecker which will in turn trigger pipeline execution."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"repository list",src:o(5188).Z})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Required Permissions"),(0,i.kt)("p",{parentName:"blockquote"},"The user who enables a repo in Woodpecker must have ",(0,i.kt)("inlineCode",{parentName:"p"},"Admin")," rights on that repo, so that Woodpecker can add the webhook."),(0,i.kt)("p",{parentName:"blockquote"},"Note that manually creating webhooks yourself is not possible. This is because webhooks are signed using a per-repository secret key which is not exposed to end users.")),(0,i.kt)("h1",{id:"webhooks"},"Webhooks"),(0,i.kt)("p",null,"When you activate your repository Woodpecker automatically add webhooks to your version control system (e.g. GitHub). There is no manual configuration required."),(0,i.kt)("p",null,"Webhooks are used to trigger pipeline executions. When you push code to your repository, open a pull request, or create a tag, your version control system will automatically send a webhook to Woodpecker which will in turn trigger pipeline execution."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"To configure you pipeline you should place a ",(0,i.kt)("inlineCode",{parentName:"p"},".woodpecker.yml")," file in the root of your repository. The .woodpecker.yml file is used to define your pipeline steps. It is a superset of the widely used docker-compose file format."),(0,i.kt)("p",null,"Example pipeline configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"pipeline:\n  build:\n    image: golang\n    commands:\n      - go get\n      - go build\n      - go test\n\nservices:\n  postgres:\n    image: postgres:9.4.5\n    environment:\n      - POSTGRES_USER=myapp\n")),(0,i.kt)("p",null,"Example pipeline configuration with multiple, serial steps:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"pipeline:\n  backend:\n    image: golang\n    commands:\n      - go get\n      - go build\n      - go test\n\n  frontend:\n    image: node:6\n    commands:\n      - npm install\n      - npm test\n\n  notify:\n    image: plugins/slack\n    channel: developers\n    username: woodpecker\n")),(0,i.kt)("h2",{id:"execution"},"Execution"),(0,i.kt)("p",null,"To trigger your first pipeline execution you can push code to your repository, open a pull request, or push a tag. Any of these events triggers a webhook from your version control system and execute your pipeline."))}d.isMDXComponent=!0},5188:function(e,t,o){t.Z=o.p+"assets/images/repo-list-946397246f2e10713d05f8f927d85c64.png"}}]);