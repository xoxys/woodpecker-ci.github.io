/*! For license information please see 86045f5c.a1f569cf.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[2087],{98313:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=i(11527),r=i(63883);const s={},o="Example plugin",l={id:"usage/plugins/sample-plugin",title:"Example plugin",description:"This provides a brief tutorial for creating a Woodpecker webhook plugin, using simple shell scripting, to make an http requests during the build pipeline.",source:"@site/docs/20-usage/51-plugins/20-sample-plugin.md",sourceDirName:"20-usage/51-plugins",slug:"/usage/plugins/sample-plugin",permalink:"/docs/next/usage/plugins/sample-plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/docs/20-usage/51-plugins/20-sample-plugin.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Plugins",permalink:"/docs/next/usage/plugins/plugins"},next:{title:"Terminology",permalink:"/docs/next/usage/terminiology/"}},a={},c=[{value:"What end users will see",id:"what-end-users-will-see",level:2},{value:"Write the logic",id:"write-the-logic",level:2},{value:"Package it",id:"package-it",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"example-plugin",children:"Example plugin"}),"\n",(0,t.jsx)(n.p,{children:"This provides a brief tutorial for creating a Woodpecker webhook plugin, using simple shell scripting, to make an http requests during the build pipeline."}),"\n",(0,t.jsx)(n.h2,{id:"what-end-users-will-see",children:"What end users will see"}),"\n",(0,t.jsx)(n.p,{children:"The below example demonstrates how we might configure a webhook plugin in the YAML file:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"steps:\n  webhook:\n    image: foo/webhook\n    settings:\n      url: http://example.com\n      method: post\n      body: |\n        hello world\n"})}),"\n",(0,t.jsx)(n.h2,{id:"write-the-logic",children:"Write the logic"}),"\n",(0,t.jsxs)(n.p,{children:["Create a simple shell script that invokes curl using the YAML configuration parameters, which are passed to the script as environment variables in uppercase and prefixed with ",(0,t.jsx)(n.code,{children:"PLUGIN_"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"#!/bin/sh\n\ncurl \\\n  -X ${PLUGIN_METHOD} \\\n  -d ${PLUGIN_BODY} \\\n  ${PLUGIN_URL}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"package-it",children:"Package it"}),"\n",(0,t.jsx)(n.p,{children:"Create a Dockerfile that adds your shell script to the image, and configures the image to execute your shell script as the main entrypoint."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dockerfile",children:"FROM alpine\nADD script.sh /bin/\nRUN chmod +x /bin/script.sh\nRUN apk -Uuv add curl ca-certificates\nENTRYPOINT /bin/script.sh\n"})}),"\n",(0,t.jsx)(n.p,{children:"Build and publish your plugin to the Docker registry. Once published your plugin can be shared with the broader Woodpecker community."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-nohighlight",children:"docker build -t foo/webhook .\ndocker push foo/webhook\n"})}),"\n",(0,t.jsx)(n.p,{children:"Execute your plugin locally from the command line to verify it is working:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-nohighlight",children:'docker run --rm \\\n  -e PLUGIN_METHOD=post \\\n  -e PLUGIN_URL=http://example.com \\\n  -e PLUGIN_BODY="hello world" \\\n  foo/webhook\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},3354:(e,n,i)=>{var t=i(50959),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,i){var t,s={},c=null,p=null;for(t in void 0!==i&&(c=""+i),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(p=n.ref),n)o.call(n,t)&&!a.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:r,type:e,key:c,ref:p,props:s,_owner:l.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},11527:(e,n,i)=>{e.exports=i(3354)},63883:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>o});var t=i(50959);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);