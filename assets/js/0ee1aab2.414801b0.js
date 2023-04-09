"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[3736],{9613:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var a=n(9496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),m=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=m(t.components);return a.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),N=m(n),k=r,s=N["".concat(o,".").concat(k)]||N[k]||u[k]||l;return n?a.createElement(s,i(i({ref:e},d),{},{components:n})):a.createElement(s,i({ref:e},d))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=N;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},9814:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>g,contentTitle:()=>k,default:()=>C,frontMatter:()=>N,metadata:()=>s,toc:()=>b});var a=n(9613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,u=(t,e)=>{for(var n in e||(e={}))o.call(e,n)&&d(t,n,e[n]);if(p)for(var n of p(e))m.call(e,n)&&d(t,n,e[n]);return t};const N={},k="Environment variables",s={unversionedId:"usage/environment",id:"usage/environment",title:"Environment variables",description:"Woodpecker provides the ability to pass environment variables to individual pipeline steps. Example pipeline step with custom environment variables:",source:"@site/docs/20-usage/50-environment.md",sourceDirName:"20-usage",slug:"/usage/environment",permalink:"/docs/next/usage/environment",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/20-usage/50-environment.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cron",permalink:"/docs/next/usage/cron"},next:{title:"Plugins",permalink:"/docs/next/usage/plugins/plugins"}},g={},b=[{value:"Built-in environment variables",id:"built-in-environment-variables",level:2},{value:"Global environment variables",id:"global-environment-variables",level:2},{value:"String Substitution",id:"string-substitution",level:2},{value:"String Operations",id:"string-operations",level:2}],c={toc:b};function C(t){var e,n=t,{components:r}=n,d=((t,e)=>{var n={};for(var a in t)o.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&p)for(var a of p(t))e.indexOf(a)<0&&m.call(t,a)&&(n[a]=t[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(e=u(u({},c),d),l(e,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("h1",u({},{id:"environment-variables"}),"Environment variables"),(0,a.kt)("p",null,"Woodpecker provides the ability to pass environment variables to individual pipeline steps. Example pipeline step with custom environment variables:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"pipeline:\n  build:\n    image: golang\n+   environment:\n+     - CGO=0\n+     - GOOS=linux\n+     - GOARCH=amd64\n    commands:\n      - go build\n      - go test\n")),(0,a.kt)("p",null,"Please note that the environment section is not able to expand environment variables. If you need to expand variables they should be exported in the commands section."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"pipeline:\n  build:\n    image: golang\n-   environment:\n-     - PATH=$PATH:/go\n    commands:\n+     - export PATH=$PATH:/go\n      - go build\n      - go test\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Please be warned that ",(0,a.kt)("inlineCode",{parentName:"p"},"${variable}")," expressions are subject to pre-processing. If you do not want the pre-processor to evaluate your expression it must be escaped:")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"pipeline:\n  build:\n    image: golang\n    commands:\n-     - export PATH=${PATH}:/go\n+     - export PATH=$${PATH}:/go\n      - go build\n      - go test\n")),(0,a.kt)("h2",u({},{id:"built-in-environment-variables"}),"Built-in environment variables"),(0,a.kt)("p",null,"This is the reference list of all environment variables available to your pipeline containers. These are injected into your pipeline step and plugins containers, at runtime."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"NAME"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI=woodpecker")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"environment is woodpecker")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null})),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Repository"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_REPO")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"repository full name ",(0,a.kt)("inlineCode",{parentName:"td"},"<owner>/<name>"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_REPO_OWNER")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"repository owner")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_REPO_NAME")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"repository name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_REPO_SCM")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"repository SCM (git)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_REPO_LINK")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"repository link")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_REPO_CLONE_URL")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"repository clone URL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_REPO_DEFAULT_BRANCH")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"repository default branch (master)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_REPO_PRIVATE")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"repository is private")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_REPO_TRUSTED")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"repository is trusted")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null})),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Current Commit"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_COMMIT_SHA")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"commit SHA")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_COMMIT_REF")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"commit ref")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_COMMIT_REFSPEC")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"commit ref spec")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_COMMIT_BRANCH")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"commit branch (equals target branch for pull requests)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_COMMIT_SOURCE_BRANCH")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"commit source branch")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_COMMIT_TARGET_BRANCH")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"commit target branch")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_COMMIT_TAG")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"commit tag name (empty if event is not ",(0,a.kt)("inlineCode",{parentName:"td"},"tag"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_COMMIT_PULL_REQUEST")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"commit pull request number (empty if event is not ",(0,a.kt)("inlineCode",{parentName:"td"},"pull_request"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_COMMIT_PULL_REQUEST_LABELS")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"labels assigned to pull request (empty if event is not ",(0,a.kt)("inlineCode",{parentName:"td"},"pull_request"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_COMMIT_LINK")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"commit link in forge")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_COMMIT_MESSAGE")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"commit message")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_COMMIT_AUTHOR")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"commit author username")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_COMMIT_AUTHOR_EMAIL")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"commit author email address")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_COMMIT_AUTHOR_AVATAR")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"commit author avatar")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null})),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Current pipeline"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PIPELINE_NUMBER")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"pipeline number")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PIPELINE_PARENT")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"number of parent pipeline")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PIPELINE_EVENT")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"pipeline event (push, pull_request, tag, deployment)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PIPELINE_LINK")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"link to the forge's web UI for the commit(s) or tag that triggered the pipeline")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PIPELINE_DEPLOY_TARGET")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"pipeline deploy target for ",(0,a.kt)("inlineCode",{parentName:"td"},"deployment")," events (ie production)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PIPELINE_STATUS")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"pipeline status (success, failure)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PIPELINE_CREATED")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"pipeline created UNIX timestamp")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PIPELINE_STARTED")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"pipeline started UNIX timestamp")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PIPELINE_FINISHED")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"pipeline finished UNIX timestamp")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null})),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Current workflow"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_WORKFLOW_NAME")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"workflow name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null})),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Current step"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_STEP_NAME")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"step name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_STEP_STATUS")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"step status (success, failure)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_STEP_STARTED")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"step started UNIX timestamp")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_STEP_FINISHED")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"step finished UNIX timestamp")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null})),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Previous commit"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PREV_COMMIT_SHA")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"previous commit SHA")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PREV_COMMIT_REF")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"previous commit ref")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PREV_COMMIT_REFSPEC")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"previous commit ref spec")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PREV_COMMIT_BRANCH")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"previous commit branch")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PREV_COMMIT_SOURCE_BRANCH")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"previous commit source branch")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PREV_COMMIT_TARGET_BRANCH")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"previous commit target branch")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PREV_COMMIT_LINK")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"previous commit link in forge")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PREV_COMMIT_MESSAGE")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"previous commit message")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PREV_COMMIT_AUTHOR")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"previous commit author username")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PREV_COMMIT_AUTHOR_EMAIL")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"previous commit author email address")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PREV_COMMIT_AUTHOR_AVATAR")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"previous commit author avatar")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null})),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Previous pipeline"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PREV_PIPELINE_NUMBER")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"previous pipeline number")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PREV_PIPELINE_PARENT")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"previous pipeline number of parent pipeline")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PREV_PIPELINE_EVENT")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"previous pipeline event (push, pull_request, tag, deployment)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PREV_PIPELINE_LINK")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"previous pipeline link in CI")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PREV_PIPELINE_DEPLOY_TARGET")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"previous pipeline deploy target for ",(0,a.kt)("inlineCode",{parentName:"td"},"deployment")," events (ie production)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PREV_PIPELINE_STATUS")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"previous pipeline status (success, failure)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PREV_PIPELINE_CREATED")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"previous pipeline created UNIX timestamp")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PREV_PIPELINE_STARTED")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"previous pipeline started UNIX timestamp")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_PREV_PIPELINE_FINISHED")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"previous pipeline finished UNIX timestamp")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null})),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u2003")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_WORKSPACE")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Path of the workspace where source code gets cloned to")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null})),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"System"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_SYSTEM_NAME")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"name of the CI system: ",(0,a.kt)("inlineCode",{parentName:"td"},"woodpecker"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_SYSTEM_LINK")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"link to CI system")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_SYSTEM_HOST")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"hostname of CI server")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_SYSTEM_VERSION")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"version of the server")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null})),(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Internal")," - Please don't use!")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_SCRIPT")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Internal script path. Used to call pipeline step commands.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_NETRC_USERNAME")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Credentials for private repos to be able to clone data. (Only available for specific images)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_NETRC_PASSWORD")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Credentials for private repos to be able to clone data. (Only available for specific images)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CI_NETRC_MACHINE")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Credentials for private repos to be able to clone data. (Only available for specific images)")))),(0,a.kt)("h2",u({},{id:"global-environment-variables"}),"Global environment variables"),(0,a.kt)("p",null,"If you want specific environment variables to be available in all of your pipelines use the ",(0,a.kt)("inlineCode",{parentName:"p"},"WOODPECKER_ENVIRONMENT")," setting on the Woodpecker server. Note that these can't overwrite any existing, built-in variables."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"services:\n  woodpecker-server:\n    [...]\n    environment:\n      - [...]\n+     - WOODPECKER_ENVIRONMENT=first_var:value1,second_var:value2\n")),(0,a.kt)("p",null,"These can be used, for example, to manage the image tag used by multiple projects."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"pipeline:\n  build:\n-   image: golang:1.18\n+   image: golang:${GOLANG_VERSION}\n    commands:\n      - [...]\n    environment:\n      - [...]\n+     - WOODPECKER_ENVIRONMENT=GOLANG_VERSION:1.18\n")),(0,a.kt)("h2",u({},{id:"string-substitution"}),"String Substitution"),(0,a.kt)("p",null,"Woodpecker provides the ability to substitute environment variables at runtime. This gives us the ability to use dynamic settings, commands and filters in our pipeline configuration."),(0,a.kt)("p",null,"Example commit substitution:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"pipeline:\n  docker:\n    image: plugins/docker\n    settings:\n+     tags: ${CI_COMMIT_SHA}\n")),(0,a.kt)("p",null,"Example tag substitution:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"pipeline:\n  docker:\n    image: plugins/docker\n    settings:\n+     tags: ${CI_COMMIT_TAG}\n")),(0,a.kt)("h2",u({},{id:"string-operations"}),"String Operations"),(0,a.kt)("p",null,"Woodpecker also emulates bash string operations. This gives us the ability to manipulate the strings prior to substitution. Example use cases might include substring and stripping prefix or suffix values."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"OPERATION"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"DESCRIPTION"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"${param}")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"parameter substitution")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"${param,}")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"parameter substitution with lowercase first char")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"${param,,}")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"parameter substitution with lowercase")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"${param^}")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"parameter substitution with uppercase first char")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"${param^^}")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"parameter substitution with uppercase")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"${param:pos}")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"parameter substitution with substring")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"${param:pos:len}")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"parameter substitution with substring and length")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"${param=default}")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"parameter substitution with default")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"${param##prefix}")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"parameter substitution with prefix removal")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"${param%%suffix}")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"parameter substitution with suffix removal")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"${param/old/new}")),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"parameter substitution with find and replace")))),(0,a.kt)("p",null,"Example variable substitution with substring:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"pipeline:\n  docker:\n    image: plugins/docker\n    settings:\n+     tags: ${CI_COMMIT_SHA:0:8}\n")),(0,a.kt)("p",null,"Example variable substitution strips ",(0,a.kt)("inlineCode",{parentName:"p"},"v")," prefix from ",(0,a.kt)("inlineCode",{parentName:"p"},"v.1.0.0"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"pipeline:\n  docker:\n    image: plugins/docker\n    settings:\n+     tags: ${CI_COMMIT_TAG##v}\n")))}C.isMDXComponent=!0}}]);