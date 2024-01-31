/*! For license information please see b734b971.285ee01b.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[1588],{86468:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var i=s(11527),r=s(88672);const l={},t="Creating plugins",o={id:"usage/plugins/creating-plugins",title:"Creating plugins",description:"Creating a new plugin is simple: Build a Docker container which uses your plugin logic as the ENTRYPOINT.",source:"@site/versioned_docs/version-2.3/20-usage/51-plugins/20-creating-plugins.md",sourceDirName:"20-usage/51-plugins",slug:"/usage/plugins/creating-plugins",permalink:"/docs/usage/plugins/creating-plugins",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-2.3/20-usage/51-plugins/20-creating-plugins.md",tags:[],version:"2.3",sidebarPosition:20,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Plugins",permalink:"/docs/usage/plugins/overview"},next:{title:"Terminology",permalink:"/docs/usage/terminiology/"}},c={},d=[{value:"Settings",id:"settings",level:2},{value:"Basic settings",id:"basic-settings",level:3},{value:"Complex settings",id:"complex-settings",level:3},{value:"Secrets",id:"secrets",level:3},{value:"Plugin library",id:"plugin-library",level:2},{value:"Example plugin",id:"example-plugin",level:2},{value:"What end users will see",id:"what-end-users-will-see",level:3},{value:"Write the logic",id:"write-the-logic",level:3},{value:"Package it",id:"package-it",level:3},{value:"Best practices",id:"best-practices",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"creating-plugins",children:"Creating plugins"}),"\n",(0,i.jsx)(n.p,{children:"Creating a new plugin is simple: Build a Docker container which uses your plugin logic as the ENTRYPOINT."}),"\n",(0,i.jsx)(n.h2,{id:"settings",children:"Settings"}),"\n",(0,i.jsxs)(n.p,{children:["To allow users to configure the behavior of your plugin, you should use ",(0,i.jsx)(n.code,{children:"settings:"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["These are passed to your plugin as uppercase env vars with a ",(0,i.jsx)(n.code,{children:"PLUGIN_"})," prefix.\nUsing a setting like ",(0,i.jsx)(n.code,{children:"url"})," results in an env var named ",(0,i.jsx)(n.code,{children:"PLUGIN_URL"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Characters like ",(0,i.jsx)(n.code,{children:"-"})," are converted to an underscore (",(0,i.jsx)(n.code,{children:"_"}),"). ",(0,i.jsx)(n.code,{children:"some_String"})," gets ",(0,i.jsx)(n.code,{children:"PLUGIN_SOME_STRING"}),".\nCamelCase is not respected, ",(0,i.jsx)(n.code,{children:"anInt"})," get ",(0,i.jsx)(n.code,{children:"PLUGIN_ANINT"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"basic-settings",children:"Basic settings"}),"\n",(0,i.jsx)(n.p,{children:"Using any basic YAML type (scalar) will be converted into a string:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Setting"}),(0,i.jsx)(n.th,{children:"Environment value"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"some-bool: false"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:'PLUGIN_SOME_BOOL="false"'})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"some_String: hello"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:'PLUGIN_SOME_STRING="hello"'})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"anInt: 3"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:'PLUGIN_ANINT="3"'})})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"complex-settings",children:"Complex settings"}),"\n",(0,i.jsx)(n.p,{children:"It's also possible to use complex settings like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"steps:\n  - name: plugin\n    image: foo/plugin\n    settings:\n      complex:\n        abc: 2\n        list:\n          - 2\n          - 3\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Values like this are converted to JSON and then passed to your plugin. In the example above, the environment variable ",(0,i.jsx)(n.code,{children:"PLUGIN_COMPLEX"})," would contain ",(0,i.jsx)(n.code,{children:'{"abc": "2", "list": [ "2", "3" ]}'}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"secrets",children:"Secrets"}),"\n",(0,i.jsxs)(n.p,{children:["Secrets should be passed as settings too. Therefore, users should use ",(0,i.jsx)(n.a,{href:"/docs/usage/secrets#use-secrets-in-settings",children:(0,i.jsx)(n.code,{children:"from_secret"})}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"plugin-library",children:"Plugin library"}),"\n",(0,i.jsxs)(n.p,{children:["For Go, we provide a plugin library you can use to get easy access to internal env vars and your settings. See ",(0,i.jsx)(n.a,{href:"https://codeberg.org/woodpecker-plugins/go-plugin",children:"https://codeberg.org/woodpecker-plugins/go-plugin"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"example-plugin",children:"Example plugin"}),"\n",(0,i.jsx)(n.p,{children:"This provides a brief tutorial for creating a Woodpecker webhook plugin, using simple shell scripting, to make HTTP requests during the build pipeline."}),"\n",(0,i.jsx)(n.h3,{id:"what-end-users-will-see",children:"What end users will see"}),"\n",(0,i.jsx)(n.p,{children:"The below example demonstrates how we might configure a webhook plugin in the YAML file:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"steps:\n  - name: webhook\n    image: foo/webhook\n    settings:\n      url: https://example.com\n      method: post\n      body: |\n        hello world\n"})}),"\n",(0,i.jsx)(n.h3,{id:"write-the-logic",children:"Write the logic"}),"\n",(0,i.jsxs)(n.p,{children:["Create a simple shell script that invokes curl using the YAML configuration parameters, which are passed to the script as environment variables in uppercase and prefixed with ",(0,i.jsx)(n.code,{children:"PLUGIN_"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"#!/bin/sh\n\ncurl \\\n  -X ${PLUGIN_METHOD} \\\n  -d ${PLUGIN_BODY} \\\n  ${PLUGIN_URL}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"package-it",children:"Package it"}),"\n",(0,i.jsx)(n.p,{children:"Create a Dockerfile that adds your shell script to the image, and configures the image to execute your shell script as the main entrypoint."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dockerfile",children:"# please pin the version, e.g. alpine:3.19\nFROM alpine\nADD script.sh /bin/\nRUN chmod +x /bin/script.sh\nRUN apk -Uuv add curl ca-certificates\nENTRYPOINT /bin/script.sh\n"})}),"\n",(0,i.jsx)(n.p,{children:"Build and publish your plugin to the Docker registry. Once published, your plugin can be shared with the broader Woodpecker community."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"docker build -t foo/webhook .\ndocker push foo/webhook\n"})}),"\n",(0,i.jsx)(n.p,{children:"Execute your plugin locally from the command line to verify it is working:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'docker run --rm \\\n  -e PLUGIN_METHOD=post \\\n  -e PLUGIN_URL=https://example.com \\\n  -e PLUGIN_BODY="hello world" \\\n  foo/webhook\n'})}),"\n",(0,i.jsx)(n.h2,{id:"best-practices",children:"Best practices"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Build your plugin for different architectures to allow many users to use them.\nAt least, you should support ",(0,i.jsx)(n.code,{children:"amd64"})," and ",(0,i.jsx)(n.code,{children:"arm64"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Provide binaries for users using the ",(0,i.jsx)(n.code,{children:"local"})," backend.\nThese should also be built for different OS/architectures."]}),"\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.a,{href:"/docs/usage/environment#built-in-environment-variables",children:"built-in env vars"})," where possible."]}),"\n",(0,i.jsxs)(n.li,{children:["Do not use any configuration except settings (and internal env vars). This means: Don't require using ",(0,i.jsx)(n.a,{href:"/docs/usage/environment",children:(0,i.jsx)(n.code,{children:"environment"})})," and don't require specific secret names."]}),"\n",(0,i.jsxs)(n.li,{children:["Add a ",(0,i.jsx)(n.code,{children:"docs.md"})," file, listing all your settings and plugin metadata (",(0,i.jsx)(n.a,{href:"https://codeberg.org/woodpecker-plugins/plugin-docker-buildx/src/branch/main/docs.md",children:"example"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:["Add your plugin to the ",(0,i.jsx)(n.a,{href:"/plugins",children:"plugin index"})," using your ",(0,i.jsx)(n.code,{children:"docs.md"})," (",(0,i.jsx)(n.a,{href:"https://woodpecker-ci.org/plugins/Docker%20Buildx",children:"the example above in the index"}),")."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},3354:(e,n,s)=>{var i=s(50959),r=Symbol.for("react.element"),l=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,s){var i,l={},d=null,a=null;for(i in void 0!==s&&(d=""+s),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(a=n.ref),n)t.call(n,i)&&!c.hasOwnProperty(i)&&(l[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===l[i]&&(l[i]=n[i]);return{$$typeof:r,type:e,key:d,ref:a,props:l,_owner:o.current}}n.Fragment=l,n.jsx=d,n.jsxs=d},11527:(e,n,s)=>{e.exports=s(3354)},88672:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>t});var i=s(50959);const r={},l=i.createContext(r);function t(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);