"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[9652],{49613:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,c(c({ref:t},l),{},{components:r})):n.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[d]="string"==typeof e?e:o,c[1]=a;for(var p=2;p<i;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3147:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>k,default:()=>b,frontMatter:()=>f,metadata:()=>v,toc:()=>h});var n=r(49613),o=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&l(e,r,t[r]);if(a)for(var r of a(t))p.call(t,r)&&l(e,r,t[r]);return e},u=(e,t)=>i(e,c(t)),m=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&a)for(var n of a(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const f={},k="SSL",v={unversionedId:"administration/ssl",id:"version-0.15/administration/ssl",title:"SSL",description:"Woodpecker supports two ways of enabling SSL communication. You can either use Let's Encrypt to get automated SSL support with",source:"@site/versioned_docs/version-0.15/30-administration/60-ssl.md",sourceDirName:"30-administration",slug:"/administration/ssl",permalink:"/docs/0.15/administration/ssl",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-0.15/30-administration/60-ssl.md",tags:[],version:"0.15",sidebarPosition:60,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Databases",permalink:"/docs/0.15/administration/database"},next:{title:"Proxy",permalink:"/docs/0.15/administration/proxy"}},y={},h=[{value:"Let&#39;s Encrypt",id:"lets-encrypt",level:2},{value:"Certificate Cache",id:"certificate-cache",level:3},{value:"Certificate Updates",id:"certificate-updates",level:3},{value:"SSL with own certificates",id:"ssl-with-own-certificates",level:2},{value:"Certificate Chain",id:"certificate-chain",level:3},{value:"Certificate Errors",id:"certificate-errors",level:3}],w={toc:h},g="wrapper";function b(e){var t=e,{components:r}=t,o=m(t,["components"]);return(0,n.kt)(g,u(d(d({},w),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"ssl"}),"SSL"),(0,n.kt)("p",null,"Woodpecker supports two ways of enabling SSL communication. You can either use Let's Encrypt to get automated SSL support with\nrenewal or provide your own SSL certificates."),(0,n.kt)("h2",d({},{id:"lets-encrypt"}),"Let's Encrypt"),(0,n.kt)("p",null,"Woodpecker supports automated SSL configuration and updates using Let's Encrypt."),(0,n.kt)("p",null,"You can enable Let's Encrypt by making the following modifications to your server configuration:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-diff"}),"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    ports:\n+     - 80:80\n+     - 443:443\n      - 9000:9000\n    environment:\n      - [...]\n+     - WOODPECKER_LETS_ENCRYPT=true\n")),(0,n.kt)("p",null,"Note that Woodpecker uses the hostname from the ",(0,n.kt)("inlineCode",{parentName:"p"},"WOODPECKER_HOST")," environment variable when requesting certificates. For example, if ",(0,n.kt)("inlineCode",{parentName:"p"},"WOODPECKER_HOST=https://example.com")," the certificate is requested for ",(0,n.kt)("inlineCode",{parentName:"p"},"example.com"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Once enabled you can visit your website at both the http and the https address")),(0,n.kt)("h3",d({},{id:"certificate-cache"}),"Certificate Cache"),(0,n.kt)("p",null,"Woodpecker writes the certificates to the below directory:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"/var/lib/woodpecker/golang-autocert\n")),(0,n.kt)("h3",d({},{id:"certificate-updates"}),"Certificate Updates"),(0,n.kt)("p",null,"Woodpecker uses the official Go acme library which will handle certificate upgrades. There should be no addition configuration or management required."),(0,n.kt)("h2",d({},{id:"ssl-with-own-certificates"}),"SSL with own certificates"),(0,n.kt)("p",null,"Woodpecker supports ssl configuration by mounting certificates into your container."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-diff"}),"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    ports:\n+     - 80:80\n+     - 443:443\n      - 9000:9000\n    volumes:\n+     - /etc/certs/woodpecker.example.com/server.crt:/etc/certs/woodpecker.example.com/server.crt\n+     - /etc/certs/woodpecker.example.com/server.key:/etc/certs/woodpecker.example.com/server.key\n    environment:\n      - [...]\n+     - WOODPECKER_SERVER_CERT=/etc/certs/woodpecker.example.com/server.crt\n+     - WOODPECKER_SERVER_KEY=/etc/certs/woodpecker.example.com/server.key\n")),(0,n.kt)("p",null,"Update your configuration to expose the following ports:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-diff"}),"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    ports:\n+     - 80:80\n+     - 443:443\n      - 9000:9000\n")),(0,n.kt)("p",null,"Update your configuration to mount your certificate and key:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-diff"}),"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    ports:\n      - 80:80\n      - 443:443\n      - 9000:9000\n    volumes:\n+     - /etc/certs/woodpecker.example.com/server.crt:/etc/certs/woodpecker.example.com/server.crt\n+     - /etc/certs/woodpecker.example.com/server.key:/etc/certs/woodpecker.example.com/server.key\n")),(0,n.kt)("p",null,"Update your configuration to provide the paths of your certificate and key:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-diff"}),"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-server:\n    [...]\n    ports:\n      - 80:80\n      - 443:443\n      - 9000:9000\n    volumes:\n      - /etc/certs/woodpecker.example.com/server.crt:/etc/certs/woodpecker.example.com/server.crt\n      - /etc/certs/woodpecker.example.com/server.key:/etc/certs/woodpecker.example.com/server.key\n    environment:\n+     - WOODPECKER_SERVER_CERT=/etc/certs/woodpecker.example.com/server.crt\n+     - WOODPECKER_SERVER_KEY=/etc/certs/woodpecker.example.com/server.key\n")),(0,n.kt)("h3",d({},{id:"certificate-chain"}),"Certificate Chain"),(0,n.kt)("p",null,"The most common problem encountered is providing a certificate file without the intermediate chain."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"LoadX509KeyPair reads and parses a public/private key pair from a pair of files. The files must contain PEM encoded data. The certificate file may contain intermediate certificates following the leaf certificate to form a certificate chain.")),(0,n.kt)("h3",d({},{id:"certificate-errors"}),"Certificate Errors"),(0,n.kt)("p",null,"SSL support is provided using the ",(0,n.kt)("a",d({parentName:"p"},{href:"https://golang.org/pkg/net/http/#ListenAndServeTLS"}),"ListenAndServeTLS")," function from the Go standard library. If you receive certificate errors or warnings please examine your configuration more closely."))}b.isMDXComponent=!0}}]);