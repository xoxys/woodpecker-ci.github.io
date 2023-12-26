/*! For license information please see dcc3b06f.867e091f.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[6211],{15038:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=t(11527),i=t(46224);const o={},a="External Configuration API",s={id:"administration/external-configuration-api",title:"External Configuration API",description:"To provide additional management and preprocessing capabilities for pipeline configurations Woodpecker supports an HTTP API which can be enabled to call an external config service.",source:"@site/versioned_docs/version-2.0/30-administration/100-external-configuration-api.md",sourceDirName:"30-administration",slug:"/administration/external-configuration-api",permalink:"/docs/2.0/administration/external-configuration-api",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-2.0/30-administration/100-external-configuration-api.md",tags:[],version:"2.0",sidebarPosition:100,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Prometheus",permalink:"/docs/2.0/administration/prometheus"},next:{title:"CLI",permalink:"/docs/2.0/cli"}},c={},d=[{value:"Config",id:"config",level:2},{value:"Example request made by Woodpecker",id:"example-request-made-by-woodpecker",level:3},{value:"Example response structure",id:"example-response-structure",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"external-configuration-api",children:"External Configuration API"}),"\n",(0,r.jsxs)(n.p,{children:["To provide additional management and preprocessing capabilities for pipeline configurations Woodpecker supports an HTTP API which can be enabled to call an external config service.\nBefore the run or restart of any pipeline Woodpecker will make a POST request to an external HTTP API sending the current repository, build information and all current config files retrieved from the repository. The external API can then send back new pipeline configurations that will be used immediately or respond with ",(0,r.jsx)(n.code,{children:"HTTP 204"})," to tell the system to use the existing configuration."]}),"\n",(0,r.jsxs)(n.p,{children:["Every request sent by Woodpecker is signed using a ",(0,r.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/draft-cavage-http-signatures",children:"http-signature"})," by a private key (ed25519) generated on the first start of the Woodpecker server. You can get the public key for the verification of the http-signature from ",(0,r.jsx)(n.code,{children:"http(s)://your-woodpecker-server/api/signature/public-key"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["A simplistic example configuration service can be found here: ",(0,r.jsx)(n.a,{href:"https://github.com/woodpecker-ci/example-config-service",children:"https://github.com/woodpecker-ci/example-config-service"})]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"You need to trust the external config service as it is getting secret information about the repository and pipeline and has the ability to change pipeline configs that could run malicious tasks."})}),"\n",(0,r.jsx)(n.h2,{id:"config",children:"Config"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Server\n# ...\nWOODPECKER_CONFIG_SERVICE_ENDPOINT=https://example.com/ciconfig\n"})}),"\n",(0,r.jsx)(n.h3,{id:"example-request-made-by-woodpecker",children:"Example request made by Woodpecker"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "repo": {\n    "id": 100,\n    "uid": "",\n    "user_id": 0,\n    "namespace": "",\n    "name": "woodpecker-testpipe",\n    "slug": "",\n    "scm": "git",\n    "git_http_url": "",\n    "git_ssh_url": "",\n    "link": "",\n    "default_branch": "",\n    "private": true,\n    "visibility": "private",\n    "active": true,\n    "config": "",\n    "trusted": false,\n    "protected": false,\n    "ignore_forks": false,\n    "ignore_pulls": false,\n    "cancel_pulls": false,\n    "timeout": 60,\n    "counter": 0,\n    "synced": 0,\n    "created": 0,\n    "updated": 0,\n    "version": 0\n  },\n  "pipeline": {\n    "author": "myUser",\n    "author_avatar": "https://myforge.com/avatars/d6b3f7787a685fcdf2a44e2c685c7e03",\n    "author_email": "my@email.com",\n    "branch": "main",\n    "changed_files": ["somefilename.txt"],\n    "commit": "2fff90f8d288a4640e90f05049fe30e61a14fd50",\n    "created_at": 0,\n    "deploy_to": "",\n    "enqueued_at": 0,\n    "error": "",\n    "event": "push",\n    "finished_at": 0,\n    "id": 0,\n    "link_url": "https://myforge.com/myUser/woodpecker-testpipe/commit/2fff90f8d288a4640e90f05049fe30e61a14fd50",\n    "message": "test old config\\n",\n    "number": 0,\n    "parent": 0,\n    "ref": "refs/heads/main",\n    "refspec": "",\n    "clone_url": "",\n    "reviewed_at": 0,\n    "reviewed_by": "",\n    "sender": "myUser",\n    "signed": false,\n    "started_at": 0,\n    "status": "",\n    "timestamp": 1645962783,\n    "title": "",\n    "updated_at": 0,\n    "verified": false\n  },\n  "configs": [\n    {\n      "name": ".woodpecker.yml",\n      "data": "steps:\\n  backend:\\n    image: alpine\\n    commands:\\n      - echo \\"Hello there from Repo (.woodpecker.yml)\\"\\n"\n    }\n  ]\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"example-response-structure",children:"Example response structure"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "configs": [\n    {\n      "name": "central-override",\n      "data": "steps:\\n  backend:\\n    image: alpine\\n    commands:\\n      - echo \\"Hello there from ConfigAPI\\"\\n"\n    }\n  ]\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},3354:(e,n,t)=>{var r=t(50959),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,o={},d=null,l=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)a.call(n,r)&&!c.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:i,type:e,key:d,ref:l,props:o,_owner:s.current}}n.Fragment=o,n.jsx=d,n.jsxs=d},11527:(e,n,t)=>{e.exports=t(3354)},46224:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var r=t(50959);const i={},o=r.createContext(i);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);