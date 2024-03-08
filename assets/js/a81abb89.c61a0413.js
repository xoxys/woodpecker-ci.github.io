/*! For license information please see a81abb89.c61a0413.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[4763],{23212:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>t,toc:()=>c});var r=i(13274),o=i(74169);const s={},l="Welcome to Woodpecker",t={id:"intro",title:"Welcome to Woodpecker",description:"Woodpecker is a simple CI engine with great extensibility. It runs your pipelines inside Docker containers, so if you are already using them in your daily workflow, you'll love Woodpecker for sure.",source:"@site/versioned_docs/version-0.15/10-intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/0.15/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-0.15/10-intro.md",tags:[],version:"0.15",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",next:{title:"Getting started",permalink:"/docs/0.15/usage/intro"}},a={},c=[{value:".woodpecker.yml",id:"woodpeckeryml",level:2},{value:"Build steps are containers",id:"build-steps-are-containers",level:3},{value:"File changes are incremental",id:"file-changes-are-incremental",level:3},{value:"Plugins are straightforward",id:"plugins-are-straightforward",level:2},{value:"Continue reading",id:"continue-reading",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"welcome-to-woodpecker",children:"Welcome to Woodpecker"}),"\n",(0,r.jsxs)(n.p,{children:["Woodpecker is a simple CI engine with great extensibility. It runs your pipelines inside ",(0,r.jsx)(n.a,{href:"https://www.docker.com/",children:"Docker"})," containers, so if you are already using them in your daily workflow, you'll love Woodpecker for sure."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"woodpecker",src:i(23439).A+"",width:"1920",height:"1003"})}),"\n",(0,r.jsx)(n.h2,{id:"woodpeckeryml",children:".woodpecker.yml"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Place your pipeline in a file named ",(0,r.jsx)(n.code,{children:".woodpecker.yml"})," in your repository"]}),"\n",(0,r.jsx)(n.li,{children:"Pipeline steps can be named as you like"}),"\n",(0,r.jsx)(n.li,{children:"Run any command in the commands section"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'# .woodpecker.yml\npipeline:\n  build:\n    image: debian\n    commands:\n      - echo "This is the build step"\n  a-test-step:\n    image: debian\n    commands:\n      - echo "Testing.."\n'})}),"\n",(0,r.jsx)(n.h3,{id:"build-steps-are-containers",children:"Build steps are containers"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Define any Docker image as context\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"either use your own and install the needed tools in custom Docker images, or"}),"\n",(0,r.jsxs)(n.li,{children:["search ",(0,r.jsx)(n.a,{href:"https://hub.docker.com/search?type=image",children:"Docker Hub"})," for images that are already tailored for your needs"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"List the commands that should be executed in your container, in order to build or test your application"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:"pipeline:\n  build:\n-   image: debian\n+   image: mycompany/image-with-awscli\n    commands:\n      - aws help\n"})}),"\n",(0,r.jsx)(n.h3,{id:"file-changes-are-incremental",children:"File changes are incremental"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Woodpecker clones the source code in the beginning pipeline"}),"\n",(0,r.jsx)(n.li,{children:"Changes to files are persisted through steps as the same volume is mounted to all steps"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"# .woodpecker.yml\npipeline:\n  build:\n    image: debian\n    commands:\n      - touch myfile\n  a-test-step:\n    image: debian\n    commands:\n      - cat myfile\n"})}),"\n",(0,r.jsx)(n.h2,{id:"plugins-are-straightforward",children:"Plugins are straightforward"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If you copy the same shell script from project to project"}),"\n",(0,r.jsx)(n.li,{children:"Pack it into a plugin instead"}),"\n",(0,r.jsx)(n.li,{children:"And make the yaml declarative"}),"\n",(0,r.jsx)(n.li,{children:"Plugins are Docker images with your script as an entrypoint"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Dockerfile",children:'# Dockerfile\nFROM laszlocloud/kubectl\nCOPY deploy /usr/local/deploy\nENTRYPOINT ["/usr/local/deploy"]\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# deploy\nkubectl apply -f $PLUGIN_TEMPLATE\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"# .woodpecker.yml\npipeline:\n  deploy-to-k8s:\n    image: laszlocloud/my-k8s-plugin\n    template: config/k8s/service.yml\n"})}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"/docs/0.15/usage/plugins/plugins",children:"plugin docs"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"continue-reading",children:"Continue reading"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/0.15/usage/intro",children:"Create a Woodpecker pipeline for your repository"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/0.15/administration/setup",children:"Setup your own Woodpecker instance"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},78034:(e,n,i)=>{var r=i(79474),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,t=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,i){var r,s={},c=null,d=null;for(r in void 0!==i&&(c=""+i),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)l.call(n,r)&&!a.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:o,type:e,key:c,ref:d,props:s,_owner:t.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},13274:(e,n,i)=>{e.exports=i(78034)},23439:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/woodpecker-4c7b028122f13b47b001c676fbf6917f.png"},74169:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>t});var r=i(79474);const o={},s=r.createContext(o);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);