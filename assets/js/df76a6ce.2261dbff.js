"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[6767],{5964:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=i(13274),n=i(74169);const o={},c="SSL",s={id:"administration/ssl",title:"SSL",description:"Woodpecker supports two ways of enabling SSL communication. You can either use Let's Encrypt to get automated SSL support with",source:"@site/versioned_docs/version-2.2/30-administration/60-ssl.md",sourceDirName:"30-administration",slug:"/administration/ssl",permalink:"/docs/2.2/administration/ssl",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-2.2/30-administration/60-ssl.md",tags:[],version:"2.2",sidebarPosition:60,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Secrets encryption",permalink:"/docs/2.2/administration/encryption"},next:{title:"Proxy",permalink:"/docs/2.2/administration/proxy"}},a={},d=[{value:"Let&#39;s Encrypt",id:"lets-encrypt",level:2},{value:"Certificate Cache",id:"certificate-cache",level:3},{value:"Certificate Updates",id:"certificate-updates",level:3},{value:"SSL with own certificates",id:"ssl-with-own-certificates",level:2},{value:"Certificate Chain",id:"certificate-chain",level:3},{value:"Certificate Errors",id:"certificate-errors",level:3},{value:"Running in containers",id:"running-in-containers",level:3}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"ssl",children:"SSL"}),"\n",(0,r.jsx)(t.p,{children:"Woodpecker supports two ways of enabling SSL communication. You can either use Let's Encrypt to get automated SSL support with\nrenewal or provide your own SSL certificates."}),"\n",(0,r.jsx)(t.h2,{id:"lets-encrypt",children:"Let's Encrypt"}),"\n",(0,r.jsx)(t.p,{children:"Woodpecker supports automated SSL configuration and updates using Let's Encrypt."}),"\n",(0,r.jsx)(t.p,{children:"You can enable Let's Encrypt by making the following modifications to your server configuration:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ini",children:"WOODPECKER_LETS_ENCRYPT=true\nWOODPECKER_LETS_ENCRYPT_EMAIL=ssl-admin@example.tld\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Note that Woodpecker uses the hostname from the ",(0,r.jsx)(t.code,{children:"WOODPECKER_HOST"})," environment variable when requesting certificates. For example, if ",(0,r.jsx)(t.code,{children:"WOODPECKER_HOST=https://example.com"})," is set the certificate is requested for ",(0,r.jsx)(t.code,{children:"example.com"}),". To receive emails before certificates expire Let's Encrypt requires an email address. You can set it with ",(0,r.jsx)(t.code,{children:"WOODPECKER_LETS_ENCRYPT_EMAIL=ssl-admin@example.tld"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["The SSL certificates are stored in ",(0,r.jsx)(t.code,{children:"$HOME/.local/share/certmagic"})," for binary versions of Woodpecker and in ",(0,r.jsx)(t.code,{children:"/var/lib/woodpecker"})," for the Container versions of it. You can set a custom path by setting ",(0,r.jsx)(t.code,{children:"XDG_DATA_HOME"})," if required."]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Once enabled you can visit the Woodpecker UI with http and the HTTPS address. HTTP will be redirected to HTTPS."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"certificate-cache",children:"Certificate Cache"}),"\n",(0,r.jsxs)(t.p,{children:["Woodpecker writes the certificates to ",(0,r.jsx)(t.code,{children:"/var/lib/woodpecker/certmagic/"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"certificate-updates",children:"Certificate Updates"}),"\n",(0,r.jsx)(t.p,{children:"Woodpecker uses the official Go acme library which will handle certificate upgrades. There should be no addition configuration or management required."}),"\n",(0,r.jsx)(t.h2,{id:"ssl-with-own-certificates",children:"SSL with own certificates"}),"\n",(0,r.jsx)(t.p,{children:"Woodpecker supports SSL configuration by mounting certificates into your container."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ini",children:"WOODPECKER_SERVER_CERT=/etc/certs/woodpecker.example.com/server.crt\nWOODPECKER_SERVER_KEY=/etc/certs/woodpecker.example.com/server.key\n"})}),"\n",(0,r.jsx)(t.h3,{id:"certificate-chain",children:"Certificate Chain"}),"\n",(0,r.jsx)(t.p,{children:"The most common problem encountered is providing a certificate file without the intermediate chain."}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"LoadX509KeyPair reads and parses a public/private key pair from a pair of files. The files must contain PEM encoded data. The certificate file may contain intermediate certificates following the leaf certificate to form a certificate chain."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"certificate-errors",children:"Certificate Errors"}),"\n",(0,r.jsxs)(t.p,{children:["SSL support is provided using the ",(0,r.jsx)(t.a,{href:"https://golang.org/pkg/net/http/#ListenAndServeTLS",children:"ListenAndServeTLS"})," function from the Go standard library. If you receive certificate errors or warnings please examine your configuration more closely."]}),"\n",(0,r.jsx)(t.h3,{id:"running-in-containers",children:"Running in containers"}),"\n",(0,r.jsx)(t.p,{children:"Update your configuration to expose the following ports:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-diff",metastring:'title="docker-compose.yaml"',children:" version: '3'\n\n services:\n   woodpecker-server:\n     [...]\n     ports:\n+      - 80:80\n+      - 443:443\n       - 9000:9000\n"})}),"\n",(0,r.jsx)(t.p,{children:"Update your configuration to mount your certificate and key:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-diff",metastring:'title="docker-compose.yaml"',children:" version: '3'\n\n services:\n   woodpecker-server:\n     [...]\n     volumes:\n+      - /etc/certs/woodpecker.example.com/server.crt:/etc/certs/woodpecker.example.com/server.crt\n+      - /etc/certs/woodpecker.example.com/server.key:/etc/certs/woodpecker.example.com/server.key\n"})}),"\n",(0,r.jsx)(t.p,{children:"Update your configuration to provide the paths of your certificate and key:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",metastring:'title="docker-compose.yaml"',children:" version: '3'\n\n services:\n   woodpecker-server:\n     [...]\n     environment:\n+      - WOODPECKER_SERVER_CERT=/etc/certs/woodpecker.example.com/server.crt\n+      - WOODPECKER_SERVER_KEY=/etc/certs/woodpecker.example.com/server.key\n"})})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},74169:(e,t,i)=>{i.d(t,{R:()=>c,x:()=>s});var r=i(79474);const n={},o=r.createContext(n);function c(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);