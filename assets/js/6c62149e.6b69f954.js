"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[6043],{992:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>t,metadata:()=>r,toc:()=>l});var i=s(13274),a=s(74169);const t={},o="Services",r={id:"usage/services",title:"Services",description:"Woodpecker provides a services section in the YAML file used for defining service containers.",source:"@site/docs/20-usage/60-services.md",sourceDirName:"20-usage",slug:"/usage/services",permalink:"/docs/next/usage/services",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/docs/20-usage/60-services.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Creating plugins",permalink:"/docs/next/usage/plugins/creating-plugins"},next:{title:"Volumes",permalink:"/docs/next/usage/volumes"}},c={},l=[{value:"Configuration",id:"configuration",level:2},{value:"Detachment",id:"detachment",level:2},{value:"Initialization",id:"initialization",level:2},{value:"Complete Pipeline Example",id:"complete-pipeline-example",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"services",children:"Services"}),"\n",(0,i.jsx)(n.p,{children:"Woodpecker provides a services section in the YAML file used for defining service containers.\nThe below configuration composes database and cache containers."}),"\n",(0,i.jsxs)(n.p,{children:["Services are accessed using custom hostnames.\nIn the example below, the MySQL service is assigned the hostname ",(0,i.jsx)(n.code,{children:"database"})," and is available at ",(0,i.jsx)(n.code,{children:"database:3306"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"steps:\n  - name: build\n    image: golang\n    commands:\n      - go build\n      - go test\n\nservices:\n  - name: database\n    image: mysql\n\n  - name: cache\n    image: redis\n"})}),"\n",(0,i.jsx)(n.p,{children:"You can define a port and a protocol explicitly:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"services:\n  - name: database\n    image: mysql\n    ports:\n      - 3306\n\n  - name: wireguard\n    image: wg\n    ports:\n      - 51820/udp\n"})}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(n.p,{children:"Service containers generally expose environment variables to customize service startup such as default usernames, passwords and ports. Please see the official image documentation to learn more."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",children:" services:\n   - name: database\n     image: mysql\n+    environment:\n+      - MYSQL_DATABASE=test\n+      - MYSQL_ALLOW_EMPTY_PASSWORD=yes\n\n   - name: cache\n     image: redis\n"})}),"\n",(0,i.jsx)(n.h2,{id:"detachment",children:"Detachment"}),"\n",(0,i.jsx)(n.p,{children:"Service and long running containers can also be included in the pipeline section of the configuration using the detach parameter without blocking other steps. This should be used when explicit control over startup order is required."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",children:" steps:\n   - name: build\n     image: golang\n     commands:\n       - go build\n       - go test\n\n   - name: database\n     image: redis\n+    detach: true\n\n   - name: test\n     image: golang\n     commands:\n       - go test\n"})}),"\n",(0,i.jsx)(n.p,{children:"Containers from detached steps will terminate when the pipeline ends."}),"\n",(0,i.jsx)(n.h2,{id:"initialization",children:"Initialization"}),"\n",(0,i.jsx)(n.p,{children:"Service containers require time to initialize and begin to accept connections. If you are unable to connect to a service you may need to wait a few seconds or implement a backoff."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",children:" steps:\n   - name: test\n     image: golang\n     commands:\n+      - sleep 15\n       - go get\n       - go test\n\n services:\n   - name: database\n     image: mysql\n"})}),"\n",(0,i.jsx)(n.h2,{id:"complete-pipeline-example",children:"Complete Pipeline Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"services:\n  - name: database\n    image: mysql\n    environment:\n      - MYSQL_DATABASE=test\n      - MYSQL_ROOT_PASSWORD=example\nsteps:\n  - name: get-version\n    image: ubuntu\n    commands:\n      - ( apt update && apt dist-upgrade -y && apt install -y mysql-client 2>&1 )> /dev/null\n      - sleep 30s # need to wait for mysql-server init\n      - echo 'SHOW VARIABLES LIKE \"version\"' | mysql -uroot -hdatabase test -pexample\n"})})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},74169:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>r});var i=s(79474);const a={},t=i.createContext(a);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);