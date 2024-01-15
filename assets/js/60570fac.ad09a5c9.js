/*! For license information please see 60570fac.ad09a5c9.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[1272],{47849:(e,I,i)=>{i.r(I),i.d(I,{assets:()=>t,contentTitle:()=>g,default:()=>l,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var M=i(11527),n=i(88672);const s={},g="UI Development",d={id:"development/ui",title:"UI Development",description:"To develop the UI you need to install Node.js and pnpm. In addition it is recommended to use VS-Code with the recommended plugin selection to get features like auto-formatting, linting and typechecking. The UI is written with Vue 3 as Single-Page-Application accessing the Woodpecker REST api.",source:"@site/versioned_docs/version-2.0/92-development/03-ui.md",sourceDirName:"92-development",slug:"/development/ui",permalink:"/docs/2.0/development/ui",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-2.0/92-development/03-ui.md",tags:[],version:"2.0",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/docs/2.0/development/getting-started"},next:{title:"Documentation",permalink:"/docs/2.0/development/docs"}},t={},c=[{value:"Setup",id:"setup",level:2},{value:"Tools and frameworks",id:"tools-and-frameworks",level:2},{value:"Messages and Translations",id:"messages-and-translations",level:2}];function j(e){const I={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(I.h1,{id:"ui-development",children:"UI Development"}),"\n",(0,M.jsxs)(I.p,{children:["To develop the UI you need to install ",(0,M.jsx)(I.a,{href:"/docs/2.0/development/getting-started#install-nodejs--pnpm",children:"Node.js and pnpm"}),". In addition it is recommended to use VS-Code with the recommended plugin selection to get features like auto-formatting, linting and typechecking. The UI is written with ",(0,M.jsx)(I.a,{href:"https://v3.vuejs.org/",children:"Vue 3"})," as Single-Page-Application accessing the Woodpecker REST api."]}),"\n",(0,M.jsx)(I.h2,{id:"setup",children:"Setup"}),"\n",(0,M.jsxs)(I.p,{children:["The UI code is placed in ",(0,M.jsx)(I.code,{children:"web/"}),". Change to that folder in your terminal with ",(0,M.jsx)(I.code,{children:"cd web/"})," and install all dependencies by running ",(0,M.jsx)(I.code,{children:"pnpm install"}),". For production builds the generated UI code is integrated into the Woodpecker server by using ",(0,M.jsx)(I.a,{href:"https://pkg.go.dev/embed",children:"go-embed"}),"."]}),"\n",(0,M.jsxs)(I.p,{children:["Testing UI changes would require us to rebuild the UI after each adjustment to the code by running ",(0,M.jsx)(I.code,{children:"pnpm build"})," and restarting the Woodpecker server. To avoid this you can make use of the dev-proxy integrated into the Woodpecker server. This integrated dev-proxy will forward all none api request to a separate http-server which will only serve the UI files."]}),"\n",(0,M.jsx)(I.p,{children:(0,M.jsx)(I.img,{alt:"UI Proxy architecture",src:i(91400).Z+"",width:"1212",height:"532"})}),"\n",(0,M.jsxs)(I.p,{children:["Start the UI server locally with ",(0,M.jsx)(I.a,{href:"https://stackoverflow.com/a/41429055/8461267",children:"hot-reloading"})," by running: ",(0,M.jsx)(I.code,{children:"pnpm start"}),". To enable the forwarding of requests to the UI server you have to enable the dev-proxy inside the Woodpecker server by adding ",(0,M.jsx)(I.code,{children:"WOODPECKER_DEV_WWW_PROXY=http://localhost:8010"})," to your ",(0,M.jsx)(I.code,{children:".env"})," file.\nAfter starting the Woodpecker server as explained in the ",(0,M.jsx)(I.a,{href:"/docs/2.0/development/getting-started#debugging",children:"debugging"})," section, you should now be able to access the UI under ",(0,M.jsx)(I.a,{href:"http://localhost:8000",children:"http://localhost:8000"}),"."]}),"\n",(0,M.jsx)(I.h2,{id:"tools-and-frameworks",children:"Tools and frameworks"}),"\n",(0,M.jsx)(I.p,{children:"The following list contains some tools and frameworks used by the Woodpecker UI. For some points we added some guidelines / hints to help you developing."}),"\n",(0,M.jsxs)(I.ul,{children:["\n",(0,M.jsxs)(I.li,{children:[(0,M.jsx)(I.a,{href:"https://v3.vuejs.org/",children:"Vue 3"}),"\n",(0,M.jsxs)(I.ul,{children:["\n",(0,M.jsxs)(I.li,{children:["use ",(0,M.jsx)(I.code,{children:"setup"})," and composition api"]}),"\n",(0,M.jsxs)(I.li,{children:["place (re-usable) components in ",(0,M.jsx)(I.code,{children:"web/src/components/"})]}),"\n",(0,M.jsxs)(I.li,{children:["views should have a route in ",(0,M.jsx)(I.code,{children:"web/src/router.ts"})," and are located in ",(0,M.jsx)(I.code,{children:"web/src/views/"})]}),"\n"]}),"\n"]}),"\n",(0,M.jsxs)(I.li,{children:[(0,M.jsx)(I.a,{href:"https://windicss.org/",children:"Windicss"})," (similar to Tailwind)\n",(0,M.jsxs)(I.ul,{children:["\n",(0,M.jsx)(I.li,{children:"use Windicss classes where possible"}),"\n",(0,M.jsx)(I.li,{children:"if needed extend the Windicss config to use new classes"}),"\n"]}),"\n"]}),"\n",(0,M.jsxs)(I.li,{children:[(0,M.jsx)(I.a,{href:"https://vitejs.dev/",children:"Vite"})," (similar to Webpack)"]}),"\n",(0,M.jsxs)(I.li,{children:[(0,M.jsx)(I.a,{href:"https://www.typescriptlang.org/",children:"Typescript"}),"\n",(0,M.jsxs)(I.ul,{children:["\n",(0,M.jsxs)(I.li,{children:["avoid using ",(0,M.jsx)(I.code,{children:"any"})," and ",(0,M.jsx)(I.code,{children:"unknown"})," (the linter will prevent you from doing so anyways \ud83d\ude09)"]}),"\n"]}),"\n"]}),"\n",(0,M.jsx)(I.li,{children:(0,M.jsx)(I.a,{href:"https://eslint.org/",children:"eslint"})}),"\n",(0,M.jsxs)(I.li,{children:[(0,M.jsx)(I.a,{href:"https://github.com/johnsoncodehk/volar/",children:"Volar & vue-tsc"})," for type-checking in .vue file\n",(0,M.jsxs)(I.ul,{children:["\n",(0,M.jsxs)(I.li,{children:["use the take-over mode of Volar as described by ",(0,M.jsx)(I.a,{href:"https://github.com/johnsoncodehk/volar/discussions/471",children:"this guide"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,M.jsx)(I.h2,{id:"messages-and-translations",children:"Messages and Translations"}),"\n",(0,M.jsxs)(I.p,{children:["Woodpecker uses ",(0,M.jsx)(I.a,{href:"https://vue-i18n.intlify.dev/",children:"Vue I18n"})," as translation library. New translations have to be added to ",(0,M.jsx)(I.code,{children:"web/src/assets/locales/en.json"}),". The English source file will be automatically imported into ",(0,M.jsx)(I.a,{href:"https://translate.woodpecker-ci.org/",children:"Weblate"})," (the translation system used by Woodpecker) where all other languages will be translated by the community based on the English source.\nYou must not provide translations except English in PRs, otherwise weblate could put git into conflicts (when someone has translated in that language file and changes are not into main branch yet)"]}),"\n",(0,M.jsxs)(I.p,{children:["For more information about translations see ",(0,M.jsx)(I.a,{href:"/docs/2.0/development/translations",children:"Translations"}),"."]})]})}function l(e={}){const{wrapper:I}={...(0,n.a)(),...e.components};return I?(0,M.jsx)(I,{...e,children:(0,M.jsx)(j,{...e})}):j(e)}},3354:(e,I,i)=>{var M=i(50959),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),g=Object.prototype.hasOwnProperty,d=M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t={key:!0,ref:!0,__self:!0,__source:!0};function c(e,I,i){var M,s={},c=null,j=null;for(M in void 0!==i&&(c=""+i),void 0!==I.key&&(c=""+I.key),void 0!==I.ref&&(j=I.ref),I)g.call(I,M)&&!t.hasOwnProperty(M)&&(s[M]=I[M]);if(e&&e.defaultProps)for(M in I=e.defaultProps)void 0===s[M]&&(s[M]=I[M]);return{$$typeof:n,type:e,key:c,ref:j,props:s,_owner:d.current}}I.Fragment=s,I.jsx=c,I.jsxs=c},11527:(e,I,i)=>{e.exports=i(3354)},91400:(e,I,i)=>{i.d(I,{Z:()=>M});const M="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEyMTIgNTMyIiB3aWR0aD0iMTIxMiIgaGVpZ2h0PSI1MzIiPgogIDwhLS0gc3ZnLXNvdXJjZTpleGNhbGlkcmF3IC0tPgoKICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgQGZvbnQtZmFjZSB7CiAgICAgICAgZm9udC1mYW1pbHk6ICJWaXJnaWwiOwogICAgICAgIHNyYzogdXJsKCJodHRwczovL2V4Y2FsaWRyYXcuY29tL1ZpcmdpbC53b2ZmMiIpOwogICAgICB9CiAgICAgIEBmb250LWZhY2UgewogICAgICAgIGZvbnQtZmFtaWx5OiAiQ2FzY2FkaWEiOwogICAgICAgIHNyYzogdXJsKCJodHRwczovL2V4Y2FsaWRyYXcuY29tL0Nhc2NhZGlhLndvZmYyIik7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMjEyIiBoZWlnaHQ9IjUzMiIgZmlsbD0iI2ZmZmZmZiI+PC9yZWN0PjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDY4MC4zNDY0NDUxMzM2NTIgMzg2LjMyNDUwNDY2NjI5MjU3KSByb3RhdGUoOS4wMDA1NDI2NTcxNjEwMjQgODAgMjUpIj48dGV4dCB4PSIwIiB5PSIxOCIgZm9udC1mYW1pbHk9IlZpcmdpbCwgU2Vnb2UgVUkgRW1vamkiIGZvbnQtc2l6ZT0iMjBweCIgZmlsbD0iIzAwMDAwMCIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHlsZT0id2hpdGUtc3BhY2U6IHByZTsiIGRpcmVjdGlvbj0ibHRyIj5mb3J3YXJkIHJlcXVlc3Q8L3RleHQ+PHRleHQgeD0iMCIgeT0iNDMiIGZvbnQtZmFtaWx5PSJWaXJnaWwsIFNlZ29lIFVJIEVtb2ppIiBmb250LXNpemU9IjIwcHgiIGZpbGw9IiMwMDAwMDAiIHRleHQtYW5jaG9yPSJzdGFydCIgc3R5bGU9IndoaXRlLXNwYWNlOiBwcmU7IiBkaXJlY3Rpb249Imx0ciI+aW4gZGV2IG1vZGU8L3RleHQ+PC9nPjxnIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAgMTcxKSByb3RhdGUoMCA4NS41IDQ0LjUpIj48cGF0aCBkPSJNMjUuMzMgMTQuNDcgQzMyLjU0IDkuMjgsIDQ1Ljk0IDMuNzMsIDU3LjY4IDEuNTQgQzY5LjQxIC0wLjY2LCA4My40NyAwLjcyLCA5NS43NCAxLjMyIEMxMDguMDEgMS45MiwgMTIxLjE3IDEuNjYsIDEzMS4yOCA1LjExIEMxNDEuMzggOC41NywgMTQ5Ljg3IDE2LjA4LCAxNTYuMzYgMjIuMDQgQzE2Mi44NSAyOC4wMSwgMTY4LjMyIDM0Ljg3LCAxNzAuMjMgNDAuOSBDMTcyLjE0IDQ2LjkzLCAxNzEuOTEgNTIuMjcsIDE2Ny44IDU4LjIzIEMxNjMuNjkgNjQuMTksIDE1NC43MSA3Mi4xNiwgMTQ1LjU3IDc2LjY2IEMxMzYuNDIgODEuMTUsIDEyNC4zOSA4My4wNiwgMTEyLjkyIDg1LjIgQzEwMS40NSA4Ny4zNCwgODguOTYgODkuNzMsIDc2Ljc2IDg5LjQ5IEM2NC41NSA4OS4yNSwgNTAuNDggODcuMjYsIDM5LjY4IDgzLjc1IEMyOC44OCA4MC4yNSwgMTguMzEgNzQuMTYsIDExLjk0IDY4LjQ5IEM1LjU3IDYyLjgxLCAyLjQyIDU2LjQ1LCAxLjQ3IDQ5LjcyIEMwLjUyIDQyLjk4LCAtMS44MSAzNS41OCwgNi4yNSAyOC4wNiBDMTQuMzEgMjAuNTMsIDM3LjkzIDkuMDksIDQ5LjgzIDQuNTUgQzYxLjczIDAuMDEsIDc3LjA2IDAuMjksIDc3LjY1IDAuODEgTTE0OC42NyAxNy42NyBDMTU3LjM1IDIyLjYsIDE2MS43OSAyOC45OSwgMTY0LjkgMzQuODQgQzE2OC4wMSA0MC43LCAxNjkuMzEgNDYuNzgsIDE2Ny4zMSA1Mi43OSBDMTY1LjMxIDU4Ljc5LCAxNjAuMDMgNjUuNTYsIDE1Mi45IDcwLjg4IEMxNDUuNzYgNzYuMiwgMTM0LjU1IDgxLjIxLCAxMjQuNDkgODQuNzEgQzExNC40NCA4OC4yMSwgMTA0LjA3IDkyLjIyLCA5Mi41NyA5MS45MSBDODEuMDcgOTEuNiwgNjYuODUgODUuNTEsIDU1LjQ3IDgyLjg3IEM0NC4wOSA4MC4yMywgMzMuMDcgODAuODYsIDI0LjMgNzYuMDggQzE1LjUyIDcxLjMsIDYuNzYgNjEuMDksIDIuOCA1NC4xOSBDLTEuMTcgNDcuMjksIC0xLjI2IDQwLjgyLCAwLjQ5IDM0LjY4IEMyLjI0IDI4LjU0LCA2LjA4IDIyLjAxLCAxMy4yOSAxNy4zNSBDMjAuNSAxMi42OCwgMzIuMTMgOS4zNiwgNDMuNzUgNi43MSBDNTUuMzcgNC4wNSwgNzAuMjYgMS43MSwgODMgMS40IEM5NS43NCAxLjEsIDEwOS4xNSAyLjU2LCAxMjAuMiA0Ljg3IEMxMzEuMjUgNy4xOCwgMTQ0LjggMTMuNzMsIDE0OS4yOSAxNS4yNSBDMTUzLjc4IDE2Ljc3LCAxNDcuNzYgMTMuNTMsIDE0Ny4xNyAxMy45NiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPjwvcGF0aD48L2c+PGcgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzODIgMTApIHJvdGF0ZSgwIDEzNy41IDI0MCkiPjxwYXRoIGQ9Ik0wLjAxIC0wLjUyIEM4MS43IC0wLjc2LCAxNTkuMzkgMy4yNCwgMjc0LjYgMS43MyBNMS4yNyAwLjk5IEM3My4yMSA0LjQsIDE0Ni4yMSAyLjU4LCAyNzUuNzEgMC44MiBNMjc2LjE1IC0wLjE4IEMyNzIuOSAxNTcuMzQsIDI3MC44NiAzMTEuNTYsIDI3NS42OCA0NzkuMDkgTTI3NC43NyAwLjY1IEMyNzUuNjUgMTEzLjgxLCAyNzYuNiAyMjcuNSwgMjc1LjY3IDQ3OS4xOSBNMjc0LjY1IDQ4MC41OSBDMTg2LjA3IDQ4MC42OCwgOTYuNTcgNDc1Ljc2LCAtMC42MSA0ODIuOTIgTTI3NS40MyA0NzguOCBDMjE4LjE0IDQ3NS4yNiwgMTYxLjI5IDQ3Ny42NiwgMS41NCA0ODEuMzkgTS0wLjMxIDQ3OC40OCBDLTMuOTUgMzc4LjUyLCAtNC45NyAyNzguOTYsIC0wLjIzIDAuNjcgTTAuNDMgNDgwLjAxIEMtMS43MyAyOTkuMTEsIC0yLjI4IDExOS41LCAwLjAxIC0wLjE5IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSI+PC9wYXRoPjwvZz48ZyBzdHJva2UtbGluZWNhcD0icm91bmQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkwOSAzNjYpIHJvdGF0ZSgwIDE0Ni41IDc4KSI+PHBhdGggZD0iTTIuNDQgLTAuMzggQzExOC40NyAtNC4wMywgMjM0LjM4IC01LjMzLCAyOTUuNDMgMS45IE0tMC43NSAwLjY4IEM5NS40OSAtMS4wNSwgMTg4LjE4IC0yLjQ3LCAyOTMuOTkgLTAuMTUgTTI5MS44NiAxLjU3IEMyOTMuMjUgNTYuMDUsIDI5Ni41MyAxMTguNjUsIDI5MS45MiAxNTkuMDEgTTI5My4xIDEuNTQgQzI5MS40NCAzNy4xLCAyOTMuNzEgNzIuNDgsIDI5Mi43NyAxNTYuMzggTTI5MC43OCAxNTUuNDEgQzIxNS43OCAxNTAuMTEsIDEzNS41OSAxNTAuNCwgMC44MiAxNTMuNjkgTTI5NC4xMyAxNTcuNDggQzIwMC4yOSAxNTYuNDcsIDEwNi4xNiAxNTguOCwgLTAuMjcgMTU0LjcgTS0xLjg3IDE1NS40NyBDNCAxMTUuOTksIDQuMjQgNzIuNTEsIDEuOTcgMC4wNSBNMS44OCAxNTYuMDMgQzAuNDEgMTA3LjIsIC0wLjc4IDU3LjU0LCAtMC43MiAwLjY4IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSI+PC9wYXRoPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MzkgNDE5KSByb3RhdGUoMCAxMTYuNSAyNSkiPjx0ZXh0IHg9IjExNi41IiB5PSIxOCIgZm9udC1mYW1pbHk9IlZpcmdpbCwgU2Vnb2UgVUkgRW1vamkiIGZvbnQtc2l6ZT0iMjBweCIgZmlsbD0iIzAwMDAwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3R5bGU9IndoaXRlLXNwYWNlOiBwcmU7IiBkaXJlY3Rpb249Imx0ciI+VUkgU2VydmVyIDwvdGV4dD48dGV4dCB4PSIxMTYuNSIgeT0iNDMiIGZvbnQtZmFtaWx5PSJWaXJnaWwsIFNlZ29lIFVJIEVtb2ppIiBmb250LXNpemU9IjIwcHgiIGZpbGw9IiMwMDAwMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0eWxlPSJ3aGl0ZS1zcGFjZTogcHJlOyIgZGlyZWN0aW9uPSJsdHIiPlBvcnQgODAxMDwvdGV4dD48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDI4IDMzKSByb3RhdGUoMCA5MC41IDEyLjUpIj48dGV4dCB4PSIwIiB5PSIxOCIgZm9udC1mYW1pbHk9IlZpcmdpbCwgU2Vnb2UgVUkgRW1vamkiIGZvbnQtc2l6ZT0iMjBweCIgZmlsbD0iIzAwMDAwMCIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHlsZT0id2hpdGUtc3BhY2U6IHByZTsiIGRpcmVjdGlvbj0ibHRyIj5Xb29kcGVja2VyIFNlcnZlcjwvdGV4dD48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTMgMjAzKSByb3RhdGUoMCAzOSAxMi41KSI+PHRleHQgeD0iMCIgeT0iMTgiIGZvbnQtZmFtaWx5PSJWaXJnaWwsIFNlZ29lIFVJIEVtb2ppIiBmb250LXNpemU9IjIwcHgiIGZpbGw9IiMwMDAwMDAiIHRleHQtYW5jaG9yPSJzdGFydCIgc3R5bGU9IndoaXRlLXNwYWNlOiBwcmU7IiBkaXJlY3Rpb249Imx0ciI+QnJvd3NlcjwvdGV4dD48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzk3IDcxKSByb3RhdGUoMCA4My41IDg3LjUpIj48dGV4dCB4PSIwIiB5PSIxOCIgZm9udC1mYW1pbHk9IlZpcmdpbCwgU2Vnb2UgVUkgRW1vamkiIGZvbnQtc2l6ZT0iMjBweCIgZmlsbD0iIzAwMDAwMCIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHlsZT0id2hpdGUtc3BhY2U6IHByZTsiIGRpcmVjdGlvbj0ibHRyIj5Qb3J0IDgwMDA8L3RleHQ+PHRleHQgeD0iMCIgeT0iNDMiIGZvbnQtZmFtaWx5PSJWaXJnaWwsIFNlZ29lIFVJIEVtb2ppIiBmb250LXNpemU9IjIwcHgiIGZpbGw9IiMwMDAwMDAiIHRleHQtYW5jaG9yPSJzdGFydCIgc3R5bGU9IndoaXRlLXNwYWNlOiBwcmU7IiBkaXJlY3Rpb249Imx0ciI+PC90ZXh0Pjx0ZXh0IHg9IjAiIHk9IjY4IiBmb250LWZhbWlseT0iVmlyZ2lsLCBTZWdvZSBVSSBFbW9qaSIgZm9udC1zaXplPSIyMHB4IiBmaWxsPSIjMDAwMDAwIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0eWxlPSJ3aGl0ZS1zcGFjZTogcHJlOyIgZGlyZWN0aW9uPSJsdHIiPi9sb2dpbjwvdGV4dD48dGV4dCB4PSIwIiB5PSI5MyIgZm9udC1mYW1pbHk9IlZpcmdpbCwgU2Vnb2UgVUkgRW1vamkiIGZvbnQtc2l6ZT0iMjBweCIgZmlsbD0iIzAwMDAwMCIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHlsZT0id2hpdGUtc3BhY2U6IHByZTsiIGRpcmVjdGlvbj0ibHRyIj4vbG9nb3V0PC90ZXh0Pjx0ZXh0IHg9IjAiIHk9IjExOCIgZm9udC1mYW1pbHk9IlZpcmdpbCwgU2Vnb2UgVUkgRW1vamkiIGZvbnQtc2l6ZT0iMjBweCIgZmlsbD0iIzAwMDAwMCIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHlsZT0id2hpdGUtc3BhY2U6IHByZTsiIGRpcmVjdGlvbj0ibHRyIj4vYXBpLy4uLjwvdGV4dD48dGV4dCB4PSIwIiB5PSIxNDMiIGZvbnQtZmFtaWx5PSJWaXJnaWwsIFNlZ29lIFVJIEVtb2ppIiBmb250LXNpemU9IjIwcHgiIGZpbGw9IiMwMDAwMDAiIHRleHQtYW5jaG9yPSJzdGFydCIgc3R5bGU9IndoaXRlLXNwYWNlOiBwcmU7IiBkaXJlY3Rpb249Imx0ciI+L2FwaS93ZWItY29uZmlnLmpzPC90ZXh0Pjx0ZXh0IHg9IjAiIHk9IjE2OCIgZm9udC1mYW1pbHk9IlZpcmdpbCwgU2Vnb2UgVUkgRW1vamkiIGZvbnQtc2l6ZT0iMjBweCIgZmlsbD0iIzAwMDAwMCIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHlsZT0id2hpdGUtc3BhY2U6IHByZTsiIGRpcmVjdGlvbj0ibHRyIj4vc3RyZWFtPC90ZXh0PjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MDEgMzQ2KSByb3RhdGUoMCAxMDAgMjUpIj48dGV4dCB4PSIwIiB5PSIxOCIgZm9udC1mYW1pbHk9IlZpcmdpbCwgU2Vnb2UgVUkgRW1vamkiIGZvbnQtc2l6ZT0iMjBweCIgZmlsbD0iIzAwMDAwMCIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHlsZT0id2hpdGUtc3BhY2U6IHByZTsiIGRpcmVjdGlvbj0ibHRyIj5FdmVyeSBvdGhlciByZXF1ZXN0PC90ZXh0Pjx0ZXh0IHg9IjAiIHk9IjQzIiBmb250LWZhbWlseT0iVmlyZ2lsLCBTZWdvZSBVSSBFbW9qaSIgZm9udC1zaXplPSIyMHB4IiBmaWxsPSIjMDAwMDAwIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0eWxlPSJ3aGl0ZS1zcGFjZTogcHJlOyIgZGlyZWN0aW9uPSJsdHIiPig0MDQgSGFuZGxlcik8L3RleHQ+PC9nPjxnIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTg2LjY2NDQyMjQzNjQzMTEgMjE0LjkzNTQyODk2MzIyOTA3KSByb3RhdGUoMCA5Mi44OTE0ODQwMjk5NjM2NCAxLjgyNTYxMDM3MzU0MTczNTUpIj48cGF0aCBkPSJNLTAuMzQgLTEuMDYgQzMwLjY5IC0wLjQ1LCAxNTUuMDIgMy44NiwgMTg2LjEyIDQuNzIgTTEuNjkgMC45OSBDMzIuNjQgMS43OSwgMTU0LjkxIDIuMjgsIDE4NS42NCAzLjAzIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSI+PC9wYXRoPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODYuNjY0NDIyNDM2NDMxMSAyMTQuOTM1NDI4OTYzMjI5MDcpIHJvdGF0ZSgwIDkyLjg5MTQ4NDAyOTk2MzY0IDEuODI1NjEwMzczNTQxNzM1NSkiPjxwYXRoIGQ9Ik0xNTUuNTQgMTQuNDEgQzE2Ny4wMyAxMS43OSwgMTc0LjM2IDguNTgsIDE4Ni4wMiAyLjE5IE0xNTcuMjMgMTIuNTYgQzE2Ny45NSAxMC40NywgMTc3LjI3IDYuOTMsIDE4Ni4zMSAyLjA0IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSI+PC9wYXRoPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODYuNjY0NDIyNDM2NDMxMSAyMTQuOTM1NDI4OTYzMjI5MDcpIHJvdGF0ZSgwIDkyLjg5MTQ4NDAyOTk2MzY0IDEuODI1NjEwMzczNTQxNzM1NSkiPjxwYXRoIGQ9Ik0xNTUuODEgLTYuMTEgQzE2Ny4zOSAtMi42MywgMTc0LjY0IDAuMjYsIDE4Ni4wMiAyLjE5IE0xNTcuNSAtNy45NiBDMTY4LjE0IC0zLjAxLCAxNzcuMzYgMC41LCAxODYuMzEgMi4wNCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPjwvcGF0aD48L2c+PC9nPjxnIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjcwLjI5ODgxNDA3ODAwNDIgMzk2LjEzNjk1NTk2MTgwNDkpIHJvdGF0ZSgwIDExNy40MTM5NDQ3MDM1NDg2MiAxOC44MTQ0NjE2MzkxNDE2NTUpIj48cGF0aCBkPSJNLTAuNDUgLTAuMDYgQzM4LjYzIDYuMzQsIDE5NS43NiAzMi42OCwgMjM1LjI4IDM4Ljc2IE0xLjUxIC0xLjEzIEM0MC4zMiA0LjkyLCAxOTQuOTYgMzAuODcsIDIzNC4xMSAzNy4yNSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPjwvcGF0aD48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjcwLjI5ODgxNDA3ODAwNDIgMzk2LjEzNjk1NTk2MTgwNDkpIHJvdGF0ZSgwIDExNy40MTM5NDQ3MDM1NDg2MiAxOC44MTQ0NjE2MzkxNDE2NTUpIj48cGF0aCBkPSJNMjA0LjUzIDQyLjA3IEMyMTcuMzggNDIuNTEsIDIyNC4zNCA0MC40OCwgMjM0LjA1IDM2LjUyIE0yMDUuMjIgNDIuODIgQzIxNS45IDQxLjAxLCAyMjUuOTEgMzguMDQsIDIzNC44MSAzNi40NCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPjwvcGF0aD48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjcwLjI5ODgxNDA3ODAwNDIgMzk2LjEzNjk1NTk2MTgwNDkpIHJvdGF0ZSgwIDExNy40MTM5NDQ3MDM1NDg2MiAxOC44MTQ0NjE2MzkxNDE2NTUpIj48cGF0aCBkPSJNMjA3Ljg4IDIxLjgyIEMyMTkuNTYgMjkuNjksIDIyNS4zIDM1LjA5LCAyMzQuMDUgMzYuNTIgTTIwOC41NyAyMi41NyBDMjE3LjkyIDI3Ljk0LCAyMjYuNzUgMzIuMTQsIDIzNC44MSAzNi40NCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPgo="},88672:(e,I,i)=>{i.d(I,{Z:()=>d,a:()=>g});var M=i(50959);const n={},s=M.createContext(n);function g(e){const I=M.useContext(s);return M.useMemo((function(){return"function"==typeof e?e(I):{...I,...e}}),[I,e])}function d(e){let I;return I=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:g(e.components),M.createElement(s.Provider,{value:I},e.children)}}}]);