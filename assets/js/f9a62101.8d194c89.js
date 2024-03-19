/*! For license information please see f9a62101.8d194c89.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[1631],{22612:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(13274),t=n(74169);const i={},a="Secrets",o={id:"usage/secrets",title:"Secrets",description:"Woodpecker provides the ability to store named parameters external to the YAML configuration file, in a central secret store. These secrets can be passed to individual steps of the pipeline at runtime.",source:"@site/versioned_docs/version-2.3/20-usage/40-secrets.md",sourceDirName:"20-usage",slug:"/usage/secrets",permalink:"/docs/2.3/usage/secrets",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-2.3/20-usage/40-secrets.md",tags:[],version:"2.3",sidebarPosition:40,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Matrix workflows",permalink:"/docs/2.3/usage/matrix-workflows"},next:{title:"Registries",permalink:"/docs/2.3/usage/registries"}},l={},c=[{value:"Usage",id:"usage",level:2},{value:"Use secrets in commands",id:"use-secrets-in-commands",level:3},{value:"Use secrets in settings",id:"use-secrets-in-settings",level:3},{value:"Note about parameter pre-processing",id:"note-about-parameter-pre-processing",level:3},{value:"Alternate Names",id:"alternate-names",level:3},{value:"Use in Pull Requests events",id:"use-in-pull-requests-events",level:3},{value:"Image filter",id:"image-filter",level:2},{value:"Adding Secrets",id:"adding-secrets",level:2},{value:"CLI Examples",id:"cli-examples",level:3}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"secrets",children:"Secrets"}),"\n",(0,r.jsx)(s.p,{children:"Woodpecker provides the ability to store named parameters external to the YAML configuration file, in a central secret store. These secrets can be passed to individual steps of the pipeline at runtime."}),"\n",(0,r.jsx)(s.p,{children:"Woodpecker provides three different levels to add secrets to your pipeline. The following list shows the priority of the different levels. If a secret is defined in multiple levels, will be used following this priorities: Repository secrets > Organization secrets > Global secrets."}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Repository secrets"}),": They are available to all pipelines of an repository."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Organization secrets"}),": They are available to all pipelines of an organization."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Global secrets"}),": Can be configured by an instance admin.\nThey are available to all pipelines of the ",(0,r.jsx)(s.strong,{children:"whole"})," Woodpecker instance and should therefore ",(0,r.jsx)(s.strong,{children:"only"})," be used for secrets that are allowed to be read by ",(0,r.jsx)(s.strong,{children:"all"})," users."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(s.h3,{id:"use-secrets-in-commands",children:"Use secrets in commands"}),"\n",(0,r.jsxs)(s.p,{children:["Secrets are exposed to your pipeline steps and plugins as uppercase environment variables and can therefore be referenced in the commands section of your pipeline,\nonce their usage is declared in the ",(0,r.jsx)(s.code,{children:"secrets"})," section:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-diff",children:" steps:\n   - name: docker\n     image: docker\n     commands:\n+      - echo $DOCKER_USERNAME\n+      - echo $DOCKER_PASSWORD\n+    secrets: [ docker_username, docker_password ]\n"})}),"\n",(0,r.jsx)(s.h3,{id:"use-secrets-in-settings",children:"Use secrets in settings"}),"\n",(0,r.jsxs)(s.p,{children:["Alternatively, you can get a ",(0,r.jsx)(s.code,{children:"setting"})," from secrets using the ",(0,r.jsx)(s.code,{children:"from_secret"})," syntax.\nIn this example, the secret named ",(0,r.jsx)(s.code,{children:"secret_token"})," would be passed to the setting named ",(0,r.jsx)(s.code,{children:"token"}),", which will be available in the plugin as environment variable named ",(0,r.jsx)(s.code,{children:"PLUGIN_TOKEN"}),". See ",(0,r.jsx)(s.a,{href:"/docs/2.3/usage/plugins/creating-plugins#settings",children:"Plugins"})," for details."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"NOTE:"})," the ",(0,r.jsx)(s.code,{children:"from_secret"})," syntax only works with the newer ",(0,r.jsx)(s.code,{children:"settings"})," block."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-diff",children:" steps:\n   - name: docker\n     image: my-plugin\n     settings:\n+      token:\n+        from_secret: secret_token\n"})}),"\n",(0,r.jsx)(s.h3,{id:"note-about-parameter-pre-processing",children:"Note about parameter pre-processing"}),"\n",(0,r.jsx)(s.p,{children:"Please note parameter expressions are subject to pre-processing. When using secrets in parameter expressions they should be escaped."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-diff",children:" steps:\n   - name: docker\n     image: docker\n     commands:\n-      - echo ${DOCKER_USERNAME}\n-      - echo ${DOCKER_PASSWORD}\n+      - echo $${DOCKER_USERNAME}\n+      - echo $${DOCKER_PASSWORD}\n     secrets: [ docker_username, docker_password ]\n"})}),"\n",(0,r.jsx)(s.h3,{id:"alternate-names",children:"Alternate Names"}),"\n",(0,r.jsx)(s.p,{children:"There may be scenarios where you are required to store secrets using alternate names. You can map the alternate secret name to the expected name using the below syntax:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-diff",children:" steps:\n   - name: docker\n     image: plugins/docker\n     repo: octocat/hello-world\n     tags: latest\n+    secrets:\n+      - source: docker_prod_password\n+        target: docker_password\n"})}),"\n",(0,r.jsx)(s.h3,{id:"use-in-pull-requests-events",children:"Use in Pull Requests events"}),"\n",(0,r.jsxs)(s.p,{children:["Secrets are not exposed to pull requests by default. You can override this behavior by creating the secret and enabling the ",(0,r.jsx)(s.code,{children:"pull_request"})," event type, either in UI or by CLI, see below."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"NOTE:"})," Please be careful when exposing secrets to pull requests. If your repository is open source and accepts pull requests your secrets are not safe. A bad actor can submit a malicious pull request that exposes your secrets."]}),"\n",(0,r.jsx)(s.h2,{id:"image-filter",children:"Image filter"}),"\n",(0,r.jsx)(s.p,{children:"To prevent abusing your secrets from malicious usage, you can limit a secret to a list of images. If enabled they are not available to any other plugin (steps without user-defined commands). If you or an attacker defines explicit commands, the secrets will not be available to the container to prevent leaking them."}),"\n",(0,r.jsx)(s.h2,{id:"adding-secrets",children:"Adding Secrets"}),"\n",(0,r.jsx)(s.p,{children:"Secrets are added to the Woodpecker in the UI or with the CLI."}),"\n",(0,r.jsx)(s.h3,{id:"cli-examples",children:"CLI Examples"}),"\n",(0,r.jsx)(s.p,{children:"Create the secret using default settings. The secret will be available to all images in your pipeline, and will be available to all push, tag, and deployment events (not pull request events)."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"woodpecker-cli secret add \\\n  -repository octocat/hello-world \\\n  -name aws_access_key_id \\\n  -value <value>\n"})}),"\n",(0,r.jsx)(s.p,{children:"Create the secret and limit to a single image:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-diff",children:" woodpecker-cli secret add \\\n   -repository octocat/hello-world \\\n+  -image plugins/s3 \\\n   -name aws_access_key_id \\\n   -value <value>\n"})}),"\n",(0,r.jsx)(s.p,{children:"Create the secrets and limit to a set of images:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-diff",children:" woodpecker-cli secret add \\\n   -repository octocat/hello-world \\\n+  -image plugins/s3 \\\n+  -image peloton/woodpecker-ecs \\\n   -name aws_access_key_id \\\n   -value <value>\n"})}),"\n",(0,r.jsx)(s.p,{children:"Create the secret and enable for multiple hook events:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-diff",children:" woodpecker-cli secret add \\\n   -repository octocat/hello-world \\\n   -image plugins/s3 \\\n+  -event pull_request \\\n+  -event push \\\n+  -event tag \\\n   -name aws_access_key_id \\\n   -value <value>\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Loading secrets from file using curl ",(0,r.jsx)(s.code,{children:"@"})," syntax. This is the recommended approach for loading secrets from file to preserve newlines:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-diff",children:" woodpecker-cli secret add \\\n   -repository octocat/hello-world \\\n   -name ssh_key \\\n+  -value @/root/ssh/id_rsa\n"})})]})}function p(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},78034:(e,s,n)=>{var r=n(79474),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,s,n){var r,i={},c=null,d=null;for(r in void 0!==n&&(c=""+n),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(d=s.ref),s)a.call(s,r)&&!l.hasOwnProperty(r)&&(i[r]=s[r]);if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===i[r]&&(i[r]=s[r]);return{$$typeof:t,type:e,key:c,ref:d,props:i,_owner:o.current}}s.Fragment=i,s.jsx=c,s.jsxs=c},13274:(e,s,n)=>{e.exports=n(78034)},74169:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>o});var r=n(79474);const t={},i=r.createContext(t);function a(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);