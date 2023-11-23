/*! For license information please see 42599708.d9f74909.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[6610],{31006:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=t(11527),r=t(63883);const o={},s="Secrets encryption",c={id:"administration/encryption",title:"Secrets encryption",description:"Secrets encryption is currently broken and therefore disabled by default. It will be fixed in an upcoming release.",source:"@site/versioned_docs/version-2.0/30-administration/40-encryption.md",sourceDirName:"30-administration",slug:"/administration/encryption",permalink:"/docs/administration/encryption",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-2.0/30-administration/40-encryption.md",tags:[],version:"2.0",sidebarPosition:40,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Databases",permalink:"/docs/administration/database"},next:{title:"SSL",permalink:"/docs/administration/ssl"}},d={},l=[{value:"Common",id:"common",level:2},{value:"Enabling secrets encryption",id:"enabling-secrets-encryption",level:3},{value:"Disabling encryption and decrypting all secrets",id:"disabling-encryption-and-decrypting-all-secrets",level:3},{value:"AES",id:"aes",level:2},{value:"Configuration",id:"configuration",level:3},{value:"TINK",id:"tink",level:2},{value:"Configuration",id:"configuration-1",level:3},{value:"Encryption keys",id:"encryption-keys",level:3},{value:"Key rotation",id:"key-rotation",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"secrets-encryption",children:"Secrets encryption"}),"\n",(0,i.jsxs)(n.admonition,{type:"danger",children:[(0,i.jsx)(n.p,{children:"Secrets encryption is currently broken and therefore disabled by default. It will be fixed in an upcoming release."}),(0,i.jsx)(n.p,{children:"Check:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/woodpecker-ci/woodpecker/issues/1541",children:"https://github.com/woodpecker-ci/woodpecker/issues/1541"})," and"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/woodpecker-ci/woodpecker/pull/2300",children:"https://github.com/woodpecker-ci/woodpecker/pull/2300"})}),"\n"]})]}),"\n",(0,i.jsxs)(n.p,{children:["By default, Woodpecker does not encrypt secrets in its database. You can enable encryption\nusing simple AES key or more advanced ",(0,i.jsx)(n.a,{href:"https://developers.google.com/tink",children:"Google TINK"})," encryption."]}),"\n",(0,i.jsx)(n.h2,{id:"common",children:"Common"}),"\n",(0,i.jsx)(n.h3,{id:"enabling-secrets-encryption",children:"Enabling secrets encryption"}),"\n",(0,i.jsxs)(n.p,{children:["To enable secrets encryption and encrypt all existing secrets in database set\n",(0,i.jsx)(n.code,{children:"WOODPECKER_ENCRYPTION_KEY"}),", ",(0,i.jsx)(n.code,{children:"WOODPECKER_ENCRYPTION_KEY_FILE"})," or ",(0,i.jsx)(n.code,{children:"WOODPECKER_ENCRYPTION_TINK_KEYSET_PATH"})," environment\nvariable depending on encryption method of your choice."]}),"\n",(0,i.jsx)(n.p,{children:"After encryption is enabled you will be unable to start Woodpecker server without providing valid encryption key!"}),"\n",(0,i.jsx)(n.h3,{id:"disabling-encryption-and-decrypting-all-secrets",children:"Disabling encryption and decrypting all secrets"}),"\n",(0,i.jsxs)(n.p,{children:["To disable secrets encryption and decrypt database you need to start server with valid\n",(0,i.jsx)(n.code,{children:"WOODPECKER_ENCRYPTION_KEY"})," or ",(0,i.jsx)(n.code,{children:"WOODPECKER_ENCRYPTION_TINK_KEYSET_FILE"})," environment variable set depending on\nenabled encryption method, and ",(0,i.jsx)(n.code,{children:"WOODPECKER_ENCRYPTION_DISABLE"})," set to true."]}),"\n",(0,i.jsx)(n.p,{children:'After secrets was decrypted server will proceed working in unencrypted mode. You will not need to use "disable encryption"\nvariable or encryption keys to start server anymore.'}),"\n",(0,i.jsx)(n.h2,{id:"aes",children:"AES"}),"\n",(0,i.jsx)(n.p,{children:"Simple AES encryption."}),"\n",(0,i.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(n.p,{children:"You can manage encryption on server using these environment variables:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"WOODPECKER_ENCRYPTION_KEY"})," - encryption key"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"WOODPECKER_ENCRYPTION_KEY_FILE"})," - file to read encryption key from"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"WOODPECKER_ENCRYPTION_DISABLE"})," - disable encryption flag used to decrypt all data on server"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"tink",children:"TINK"}),"\n",(0,i.jsx)(n.p,{children:"TINK uses AEAD encryption instead of simple AES and supports key rotation."}),"\n",(0,i.jsx)(n.h3,{id:"configuration-1",children:"Configuration"}),"\n",(0,i.jsx)(n.p,{children:"You can manage encryption on server using these two environment variables:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"WOODPECKER_ENCRYPTION_TINK_KEYSET_FILE"})," - keyset filepath"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"WOODPECKER_ENCRYPTION_DISABLE"})," - disable encryption flag used to decrypt all data on server"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"encryption-keys",children:"Encryption keys"}),"\n",(0,i.jsx)(n.p,{children:"You will need plaintext AEAD-compatible Google TINK keyset to encrypt your data."}),"\n",(0,i.jsxs)(n.p,{children:["To generate it and then rotate keys if needed, install ",(0,i.jsx)(n.code,{children:"tinkey"}),"(",(0,i.jsx)(n.a,{href:"https://developers.google.com/tink/install-tinkey",children:"installation guide"}),")"]}),"\n",(0,i.jsx)(n.p,{children:"Keyset contains one or more keys, used to encrypt or decrypt your data, and primary key ID, used to determine which key\nto use while encrypting new data."}),"\n",(0,i.jsx)(n.p,{children:"Keyset generation example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"tinkey create-keyset --key-template AES256_GCM --out-format json --out keyset.json\n"})}),"\n",(0,i.jsx)(n.h3,{id:"key-rotation",children:"Key rotation"}),"\n",(0,i.jsxs)(n.p,{children:["Use ",(0,i.jsx)(n.code,{children:"tinkey"})," to rotate encryption keys in your existing keyset:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"tinkey rotate-keyset --in keyset_v1.json --out keyset_v2.json --key-template AES256_GCM\n"})}),"\n",(0,i.jsx)(n.p,{children:"Then you just need to replace server keyset file with the new one. At the moment server detects new encryption\nkeyset it will re-encrypt all existing secrets with the new key, so you will be unable to start server with previous\nkeyset anymore."})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},3354:(e,n,t)=>{var i=t(50959),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var i,o={},l=null,a=null;for(i in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(a=n.ref),n)s.call(n,i)&&!d.hasOwnProperty(i)&&(o[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===o[i]&&(o[i]=n[i]);return{$$typeof:r,type:e,key:l,ref:a,props:o,_owner:c.current}}n.Fragment=o,n.jsx=l,n.jsxs=l},11527:(e,n,t)=>{e.exports=t(3354)},63883:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>s});var i=t(50959);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);