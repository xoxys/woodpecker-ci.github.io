/*! For license information please see df76a6ce.2c55544b.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[1613],{56255:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=t(11527),i=t(88672);const o={},c="SSL",s={id:"administration/ssl",title:"SSL",description:"Woodpecker supports two ways of enabling SSL communication. You can either use Let's Encrypt to get automated SSL support with",source:"@site/versioned_docs/version-2.2/30-administration/60-ssl.md",sourceDirName:"30-administration",slug:"/administration/ssl",permalink:"/docs/2.2/administration/ssl",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-2.2/30-administration/60-ssl.md",tags:[],version:"2.2",sidebarPosition:60,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Secrets encryption",permalink:"/docs/2.2/administration/encryption"},next:{title:"Proxy",permalink:"/docs/2.2/administration/proxy"}},a={},d=[{value:"Let&#39;s Encrypt",id:"lets-encrypt",level:2},{value:"Certificate Cache",id:"certificate-cache",level:3},{value:"Certificate Updates",id:"certificate-updates",level:3},{value:"SSL with own certificates",id:"ssl-with-own-certificates",level:2},{value:"Certificate Chain",id:"certificate-chain",level:3},{value:"Certificate Errors",id:"certificate-errors",level:3},{value:"Running in containers",id:"running-in-containers",level:3}];function l(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"ssl",children:"SSL"}),"\n",(0,n.jsx)(r.p,{children:"Woodpecker supports two ways of enabling SSL communication. You can either use Let's Encrypt to get automated SSL support with\nrenewal or provide your own SSL certificates."}),"\n",(0,n.jsx)(r.h2,{id:"lets-encrypt",children:"Let's Encrypt"}),"\n",(0,n.jsx)(r.p,{children:"Woodpecker supports automated SSL configuration and updates using Let's Encrypt."}),"\n",(0,n.jsx)(r.p,{children:"You can enable Let's Encrypt by making the following modifications to your server configuration:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ini",children:"WOODPECKER_LETS_ENCRYPT=true\nWOODPECKER_LETS_ENCRYPT_EMAIL=ssl-admin@example.tld\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Note that Woodpecker uses the hostname from the ",(0,n.jsx)(r.code,{children:"WOODPECKER_HOST"})," environment variable when requesting certificates. For example, if ",(0,n.jsx)(r.code,{children:"WOODPECKER_HOST=https://example.com"})," is set the certificate is requested for ",(0,n.jsx)(r.code,{children:"example.com"}),". To receive emails before certificates expire Let's Encrypt requires an email address. You can set it with ",(0,n.jsx)(r.code,{children:"WOODPECKER_LETS_ENCRYPT_EMAIL=ssl-admin@example.tld"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["The SSL certificates are stored in ",(0,n.jsx)(r.code,{children:"$HOME/.local/share/certmagic"})," for binary versions of Woodpecker and in ",(0,n.jsx)(r.code,{children:"/var/lib/woodpecker"})," for the Container versions of it. You can set a custom path by setting ",(0,n.jsx)(r.code,{children:"XDG_DATA_HOME"})," if required."]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"Once enabled you can visit the Woodpecker UI with http and the HTTPS address. HTTP will be redirected to HTTPS."}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"certificate-cache",children:"Certificate Cache"}),"\n",(0,n.jsxs)(r.p,{children:["Woodpecker writes the certificates to ",(0,n.jsx)(r.code,{children:"/var/lib/woodpecker/certmagic/"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"certificate-updates",children:"Certificate Updates"}),"\n",(0,n.jsx)(r.p,{children:"Woodpecker uses the official Go acme library which will handle certificate upgrades. There should be no addition configuration or management required."}),"\n",(0,n.jsx)(r.h2,{id:"ssl-with-own-certificates",children:"SSL with own certificates"}),"\n",(0,n.jsx)(r.p,{children:"Woodpecker supports SSL configuration by mounting certificates into your container."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ini",children:"WOODPECKER_SERVER_CERT=/etc/certs/woodpecker.example.com/server.crt\nWOODPECKER_SERVER_KEY=/etc/certs/woodpecker.example.com/server.key\n"})}),"\n",(0,n.jsx)(r.h3,{id:"certificate-chain",children:"Certificate Chain"}),"\n",(0,n.jsx)(r.p,{children:"The most common problem encountered is providing a certificate file without the intermediate chain."}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"LoadX509KeyPair reads and parses a public/private key pair from a pair of files. The files must contain PEM encoded data. The certificate file may contain intermediate certificates following the leaf certificate to form a certificate chain."}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"certificate-errors",children:"Certificate Errors"}),"\n",(0,n.jsxs)(r.p,{children:["SSL support is provided using the ",(0,n.jsx)(r.a,{href:"https://golang.org/pkg/net/http/#ListenAndServeTLS",children:"ListenAndServeTLS"})," function from the Go standard library. If you receive certificate errors or warnings please examine your configuration more closely."]}),"\n",(0,n.jsx)(r.h3,{id:"running-in-containers",children:"Running in containers"}),"\n",(0,n.jsx)(r.p,{children:"Update your configuration to expose the following ports:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-diff",metastring:'title="docker-compose.yaml"',children:" version: '3'\n\n services:\n   woodpecker-server:\n     [...]\n     ports:\n+      - 80:80\n+      - 443:443\n       - 9000:9000\n"})}),"\n",(0,n.jsx)(r.p,{children:"Update your configuration to mount your certificate and key:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-diff",metastring:'title="docker-compose.yaml"',children:" version: '3'\n\n services:\n   woodpecker-server:\n     [...]\n     volumes:\n+      - /etc/certs/woodpecker.example.com/server.crt:/etc/certs/woodpecker.example.com/server.crt\n+      - /etc/certs/woodpecker.example.com/server.key:/etc/certs/woodpecker.example.com/server.key\n"})}),"\n",(0,n.jsx)(r.p,{children:"Update your configuration to provide the paths of your certificate and key:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",metastring:'title="docker-compose.yaml"',children:" version: '3'\n\n services:\n   woodpecker-server:\n     [...]\n     environment:\n+      - WOODPECKER_SERVER_CERT=/etc/certs/woodpecker.example.com/server.crt\n+      - WOODPECKER_SERVER_KEY=/etc/certs/woodpecker.example.com/server.key\n"})})]})}function p(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},3354:(e,r,t)=>{var n=t(50959),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var n,o={},d=null,l=null;for(n in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(l=r.ref),r)c.call(r,n)&&!a.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:i,type:e,key:d,ref:l,props:o,_owner:s.current}}r.Fragment=o,r.jsx=d,r.jsxs=d},11527:(e,r,t)=>{e.exports=t(3354)},88672:(e,r,t)=>{t.d(r,{Z:()=>s,a:()=>c});var n=t(50959);const i={},o=n.createContext(i);function c(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);