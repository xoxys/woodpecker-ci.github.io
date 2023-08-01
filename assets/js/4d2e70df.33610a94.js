"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[8386],{49613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),g=o,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},36893:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>f,default:()=>w,frontMatter:()=>m,metadata:()=>b,toc:()=>k});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&c(e,r,t[r]);return e},d=(e,t)=>a(e,i(t)),g=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const m={title:"Presenting Woodpecker 1.0.0",description:"Introducing Woodpecker 1.0.0 and its new features.",slug:"release-v1.0.0",authors:[{name:6543,title:"Maintainer of Woodpecker",url:"https://github.com/6543",image_url:"https://github.com/6543.png"}],tags:["release","stable"],hide_table_of_contents:!1},f=void 0,b={permalink:"/blog/release-v1.0.0",source:"@site/blog/2023-07-28-release-v1.0.0/index.md",title:"Presenting Woodpecker 1.0.0",description:"Introducing Woodpecker 1.0.0 and its new features.",date:"2023-07-28T00:00:00.000Z",formattedDate:"July 28, 2023",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"stable",permalink:"/blog/tags/stable"}],readingTime:1.62,hasTruncateMarker:!0,authors:[{name:"6543",title:"Maintainer of Woodpecker",url:"https://github.com/6543",image_url:"https://github.com/6543.png",imageURL:"https://github.com/6543.png"}],frontMatter:{title:"Presenting Woodpecker 1.0.0",description:"Introducing Woodpecker 1.0.0 and its new features.",slug:"release-v1.0.0",authors:[{name:"6543",title:"Maintainer of Woodpecker",url:"https://github.com/6543",image_url:"https://github.com/6543.png",imageURL:"https://github.com/6543.png"}],tags:["release","stable"],hide_table_of_contents:!1},nextItem:{title:"Welcome Woodpecker's blog",permalink:"/blog/hello-blog"}},h={authorsImageUrls:[void 0]},k=[{value:"Some picked highlights:",id:"some-picked-highlights",level:2},{value:"Add Support for Cron Jobs",id:"add-support-for-cron-jobs",level:3},{value:"YAML Map Merge, Overrides, and Sequence Merge Support",id:"yaml-map-merge-overrides-and-sequence-merge-support",level:3},{value:"Web-UI for Admins",id:"web-ui-for-admins",level:3},{value:"Localize Web-UI",id:"localize-web-ui",level:3},{value:"Add <code>evaluate</code> to <code>when</code> Filter",id:"add-evaluate-to-when-filter",level:3},{value:"Global- and Organization-Secrets",id:"global--and-organization-secrets",level:3},{value:"Changelog",id:"changelog",level:2}],v={toc:k},y="wrapper";function w(e){var t=e,{components:o}=t,a=g(t,["components"]);return(0,n.kt)(y,d(u(u({},v),a),{components:o,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"We are proud to present you Woodpecker v1.0.0.\nIt took us quite some time, but now we are sure it's ready, and you should really have a look at it."),(0,n.kt)("p",null,"We've refactored a lot of code, so contributing to the codebase should be much easier.",(0,n.kt)("br",{parentName:"p"}),"\n","Furthermore, a ton of bugs where addressed and various enhancements introduced, along with some highly anticipated features.",(0,n.kt)("br",{parentName:"p"}),"\n","With Woodpecker v1.0.0, you can now substantially improve and streamline your code pipelines,\nempowering you to automate and optimize workflows like never before."),(0,n.kt)("h2",u({},{id:"some-picked-highlights"}),"Some picked highlights:"),(0,n.kt)("h3",u({},{id:"add-support-for-cron-jobs"}),"Add Support for Cron Jobs"),(0,n.kt)("p",null,"Automate recurring tasks with ease using Woodpecker's new cron jobs feature.\nSchedule pipelines to run at specified intervals or times, optimizing repetitive workflows.\n",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/usage/cron"}),"Read more")),(0,n.kt)("h3",u({},{id:"yaml-map-merge-overrides-and-sequence-merge-support"}),"YAML Map Merge, Overrides, and Sequence Merge Support"),(0,n.kt)("p",null,"With enhanced YAML support, managing complex configurations becomes a breeze.",(0,n.kt)("br",{parentName:"p"}),"\n","Merge maps, apply overrides, and sequence merging\u2014all within your YAML files.\nThis is providing more flexibility and control over your pipelines.\n",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/usage/advanced-yaml-syntax"}),"Read more")),(0,n.kt)("h3",u({},{id:"web-ui-for-admins"}),"Web-UI for Admins"),(0,n.kt)("p",null,"Simplify administration tasks with Woodpecker's new Admin UI.",(0,n.kt)("br",{parentName:"p"}),"\n","Effortlessly manage user accounts, agents, and tasks, including adding new agents or pausing the task queue for maintenance."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image of admin queue view",src:r(46366).Z,width:"1065",height:"585"})),(0,n.kt)("h3",u({},{id:"localize-web-ui"}),"Localize Web-UI"),(0,n.kt)("p",null,"Embrace internationalization by changing your locale in the user settings.",(0,n.kt)("br",{parentName:"p"}),"\n","Interact with Woodpecker in the language of your choice, tailored to your preferences.",(0,n.kt)("br",{parentName:"p"}),"\n","If your language is not available or only partially translated, consider contributing to our ",(0,n.kt)("a",u({parentName:"p"},{href:"https://translate.woodpecker-ci.org/engage/woodpecker-ci/"}),"Weblate"),"."),(0,n.kt)("h3",u({},{id:"add-evaluate-to-when-filter"}),"Add ",(0,n.kt)("inlineCode",{parentName:"h3"},"evaluate")," to ",(0,n.kt)("inlineCode",{parentName:"h3"},"when")," Filter"),(0,n.kt)("p",null,'Enhance pipeline flexibility with the new "when evaluate" filter, enabling or disabling steps based on custom conditions.\nCustomize your workflows to dynamically respond to specific triggers and events.',(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",u({parentName:"p"},{href:"/docs/usage/pipeline-syntax#evaluate"}),"Read more")),(0,n.kt)("h3",u({},{id:"global--and-organization-secrets"}),"Global- and Organization-Secrets"),(0,n.kt)("p",null,"Save time and effort by declaring secrets for your entire instance or organization.",(0,n.kt)("br",{parentName:"p"}),"\n","Simplify your workflow and securely manage sensitive information across projects."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image of settings view of org secrets",src:r(6979).Z,width:"1076",height:"505"})),(0,n.kt)("h2",u({},{id:"changelog"}),"Changelog"),(0,n.kt)("p",null,"The full changelog can be viewed in our project source folder at ",(0,n.kt)("a",u({parentName:"p"},{href:"https://github.com/woodpecker-ci/woodpecker/blob/v1.0.0/CHANGELOG.md"}),"CHANGELOG.md")))}w.isMDXComponent=!0},46366:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/admin_queue_ui-c5e0269e25c87f84a340419b23f40cd9.png"},6979:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/org_secrets-d45bd15bb3334510f7068d0f7d39f6c2.png"}}]);