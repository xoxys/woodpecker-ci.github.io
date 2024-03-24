"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[2078],{98784:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>t,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var r=s(13274),i=s(74169);const d={},t="Environment variables",c={id:"usage/environment",title:"Environment variables",description:"Woodpecker provides the ability to pass environment variables to individual pipeline steps. Note that these can't overwrite any existing, built-in variables. Example pipeline step with custom environment variables:",source:"@site/docs/20-usage/50-environment.md",sourceDirName:"20-usage",slug:"/usage/environment",permalink:"/docs/next/usage/environment",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/docs/20-usage/50-environment.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cron",permalink:"/docs/next/usage/cron"},next:{title:"Plugins",permalink:"/docs/next/usage/plugins/overview"}},l={},h=[{value:"Built-in environment variables",id:"built-in-environment-variables",level:2},{value:"Global environment variables",id:"global-environment-variables",level:2},{value:"String Substitution",id:"string-substitution",level:2},{value:"String Operations",id:"string-operations",level:2}];function o(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"environment-variables",children:"Environment variables"}),"\n",(0,r.jsx)(e.p,{children:"Woodpecker provides the ability to pass environment variables to individual pipeline steps. Note that these can't overwrite any existing, built-in variables. Example pipeline step with custom environment variables:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-diff",children:" steps:\n   - name: build\n     image: golang\n+    environment:\n+      CGO: 0\n+      GOOS: linux\n+      GOARCH: amd64\n     commands:\n       - go build\n       - go test\n"})}),"\n",(0,r.jsx)(e.p,{children:"Please note that the environment section is not able to expand environment variables. If you need to expand variables they should be exported in the commands section."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-diff",children:" steps:\n   - name: build\n     image: golang\n-    environment:\n-      - PATH=$PATH:/go\n     commands:\n+      - export PATH=$PATH:/go\n       - go build\n       - go test\n"})}),"\n",(0,r.jsx)(e.admonition,{type:"warning",children:(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"${variable}"})," expressions are subject to pre-processing. If you do not want the pre-processor to evaluate your expression it must be escaped:"]})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-diff",children:" steps:\n   - name: build\n     image: golang\n     commands:\n-      - export PATH=${PATH}:/go\n+      - export PATH=$${PATH}:/go\n       - go build\n       - go test\n"})}),"\n",(0,r.jsx)(e.h2,{id:"built-in-environment-variables",children:"Built-in environment variables"}),"\n",(0,r.jsx)(e.p,{children:"This is the reference list of all environment variables available to your pipeline containers. These are injected into your pipeline step and plugins containers, at runtime."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"NAME"}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI"})}),(0,r.jsxs)(e.td,{children:["CI environment name (value: ",(0,r.jsx)(e.code,{children:"woodpecker"}),")"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"Repository"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_REPO"})}),(0,r.jsxs)(e.td,{children:["repository full name ",(0,r.jsx)(e.code,{children:"<owner>/<name>"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_REPO_OWNER"})}),(0,r.jsx)(e.td,{children:"repository owner"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_REPO_NAME"})}),(0,r.jsx)(e.td,{children:"repository name"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_REPO_REMOTE_ID"})}),(0,r.jsx)(e.td,{children:"repository remote ID, is the UID it has in the forge"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_REPO_SCM"})}),(0,r.jsx)(e.td,{children:"repository SCM (git)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_REPO_URL"})}),(0,r.jsx)(e.td,{children:"repository web URL"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_REPO_CLONE_URL"})}),(0,r.jsx)(e.td,{children:"repository clone URL"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_REPO_CLONE_SSH_URL"})}),(0,r.jsx)(e.td,{children:"repository SSH clone URL"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_REPO_DEFAULT_BRANCH"})}),(0,r.jsx)(e.td,{children:"repository default branch (main)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_REPO_PRIVATE"})}),(0,r.jsx)(e.td,{children:"repository is private"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_REPO_TRUSTED"})}),(0,r.jsx)(e.td,{children:"repository is trusted"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"Current Commit"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_COMMIT_SHA"})}),(0,r.jsx)(e.td,{children:"commit SHA"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_COMMIT_REF"})}),(0,r.jsx)(e.td,{children:"commit ref"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_COMMIT_REFSPEC"})}),(0,r.jsx)(e.td,{children:"commit ref spec"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_COMMIT_BRANCH"})}),(0,r.jsx)(e.td,{children:"commit branch (equals target branch for pull requests)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_COMMIT_SOURCE_BRANCH"})}),(0,r.jsxs)(e.td,{children:["commit source branch (empty if event is not ",(0,r.jsx)(e.code,{children:"pull_request"})," or ",(0,r.jsx)(e.code,{children:"pull_request_closed"}),")"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_COMMIT_TARGET_BRANCH"})}),(0,r.jsxs)(e.td,{children:["commit target branch (empty if event is not ",(0,r.jsx)(e.code,{children:"pull_request"})," or ",(0,r.jsx)(e.code,{children:"pull_request_closed"}),")"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_COMMIT_TAG"})}),(0,r.jsxs)(e.td,{children:["commit tag name (empty if event is not ",(0,r.jsx)(e.code,{children:"tag"}),")"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_COMMIT_PULL_REQUEST"})}),(0,r.jsxs)(e.td,{children:["commit pull request number (empty if event is not ",(0,r.jsx)(e.code,{children:"pull_request"})," or ",(0,r.jsx)(e.code,{children:"pull_request_closed"}),")"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_COMMIT_PULL_REQUEST_LABELS"})}),(0,r.jsxs)(e.td,{children:["labels assigned to pull request (empty if event is not ",(0,r.jsx)(e.code,{children:"pull_request"})," or ",(0,r.jsx)(e.code,{children:"pull_request_closed"}),")"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_COMMIT_MESSAGE"})}),(0,r.jsx)(e.td,{children:"commit message"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_COMMIT_AUTHOR"})}),(0,r.jsx)(e.td,{children:"commit author username"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_COMMIT_AUTHOR_EMAIL"})}),(0,r.jsx)(e.td,{children:"commit author email address"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_COMMIT_AUTHOR_AVATAR"})}),(0,r.jsx)(e.td,{children:"commit author avatar"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_COMMIT_PRERELEASE"})}),(0,r.jsxs)(e.td,{children:["release is a pre-release (empty if event is not ",(0,r.jsx)(e.code,{children:"release"}),")"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"Current pipeline"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_PIPELINE_NUMBER"})}),(0,r.jsx)(e.td,{children:"pipeline number"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_PIPELINE_PARENT"})}),(0,r.jsx)(e.td,{children:"number of parent pipeline"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_PIPELINE_EVENT"})}),(0,r.jsxs)(e.td,{children:["pipeline event (see ",(0,r.jsx)(e.a,{href:"/docs/next/usage/terminology/#pipeline-events",children:"pipeline events"}),")"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_PIPELINE_URL"})}),(0,r.jsx)(e.td,{children:"link to the web UI for the pipeline"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_PIPELINE_FORGE_URL"})}),(0,r.jsx)(e.td,{children:"link to the forge's web UI for the commit(s) or tag that triggered the pipeline"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_PIPELINE_DEPLOY_TARGET"})}),(0,r.jsxs)(e.td,{children:["pipeline deploy target for ",(0,r.jsx)(e.code,{children:"deployment"})," events (i.e. production)"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_PIPELINE_STATUS"})}),(0,r.jsx)(e.td,{children:"pipeline status (success, failure)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_PIPELINE_CREATED"})}),(0,r.jsx)(e.td,{children:"pipeline created UNIX timestamp"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_PIPELINE_STARTED"})}),(0,r.jsx)(e.td,{children:"pipeline started UNIX timestamp"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_PIPELINE_FINISHED"})}),(0,r.jsx)(e.td,{children:"pipeline finished UNIX timestamp"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_PIPELINE_FILES"})}),(0,r.jsxs)(e.td,{children:["changed files (empty if event is not ",(0,r.jsx)(e.code,{children:"push"})," or ",(0,r.jsx)(e.code,{children:"pull_request"}),"), it is undefined if more than 500 files are touched"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"Current workflow"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_WORKFLOW_NAME"})}),(0,r.jsx)(e.td,{children:"workflow name"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"Current step"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_STEP_NAME"})}),(0,r.jsx)(e.td,{children:"step name"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_STEP_NUMBER"})}),(0,r.jsx)(e.td,{children:"step number"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_STEP_STATUS"})}),(0,r.jsx)(e.td,{children:"step status (success, failure)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_STEP_STARTED"})}),(0,r.jsx)(e.td,{children:"step started UNIX timestamp"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_STEP_FINISHED"})}),(0,r.jsx)(e.td,{children:"step finished UNIX timestamp"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_STEP_URL"})}),(0,r.jsx)(e.td,{children:"URL to step in UI"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"Previous commit"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_PREV_COMMIT_SHA"})}),(0,r.jsx)(e.td,{children:"previous commit SHA"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_PREV_COMMIT_REF"})}),(0,r.jsx)(e.td,{children:"previous commit ref"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_PREV_COMMIT_REFSPEC"})}),(0,r.jsx)(e.td,{children:"previous commit ref spec"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_PREV_COMMIT_BRANCH"})}),(0,r.jsx)(e.td,{children:"previous commit branch"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_PREV_COMMIT_SOURCE_BRANCH"})}),(0,r.jsx)(e.td,{children:"previous commit source branch"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_PREV_COMMIT_TARGET_BRANCH"})}),(0,r.jsx)(e.td,{children:"previous commit target branch"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_PREV_COMMIT_URL"})}),(0,r.jsx)(e.td,{children:"previous commit link in forge"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_PREV_COMMIT_MESSAGE"})}),(0,r.jsx)(e.td,{children:"previous commit message"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_PREV_COMMIT_AUTHOR"})}),(0,r.jsx)(e.td,{children:"previous commit author username"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_PREV_COMMIT_AUTHOR_EMAIL"})}),(0,r.jsx)(e.td,{children:"previous commit author email address"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_PREV_COMMIT_AUTHOR_AVATAR"})}),(0,r.jsx)(e.td,{children:"previous commit author avatar"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"Previous pipeline"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_PREV_PIPELINE_NUMBER"})}),(0,r.jsx)(e.td,{children:"previous pipeline number"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_PREV_PIPELINE_PARENT"})}),(0,r.jsx)(e.td,{children:"previous pipeline number of parent pipeline"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_PREV_PIPELINE_EVENT"})}),(0,r.jsxs)(e.td,{children:["previous pipeline event (see ",(0,r.jsx)(e.a,{href:"/docs/next/usage/terminology/#pipeline-events",children:"pipeline events"}),")"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_PREV_PIPELINE_URL"})}),(0,r.jsx)(e.td,{children:"previous pipeline link in CI"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_PREV_PIPELINE_FORGE_URL"})}),(0,r.jsx)(e.td,{children:"previous pipeline link to event in forge"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_PREV_PIPELINE_DEPLOY_TARGET"})}),(0,r.jsxs)(e.td,{children:["previous pipeline deploy target for ",(0,r.jsx)(e.code,{children:"deployment"})," events (ie production)"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_PREV_PIPELINE_STATUS"})}),(0,r.jsx)(e.td,{children:"previous pipeline status (success, failure)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_PREV_PIPELINE_CREATED"})}),(0,r.jsx)(e.td,{children:"previous pipeline created UNIX timestamp"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_PREV_PIPELINE_STARTED"})}),(0,r.jsx)(e.td,{children:"previous pipeline started UNIX timestamp"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_PREV_PIPELINE_FINISHED"})}),(0,r.jsx)(e.td,{children:"previous pipeline finished UNIX timestamp"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:"\u2003"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_WORKSPACE"})}),(0,r.jsx)(e.td,{children:"Path of the workspace where source code gets cloned to"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"System"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_SYSTEM_NAME"})}),(0,r.jsxs)(e.td,{children:["name of the CI system: ",(0,r.jsx)(e.code,{children:"woodpecker"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_SYSTEM_URL"})}),(0,r.jsx)(e.td,{children:"link to CI system"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_SYSTEM_HOST"})}),(0,r.jsx)(e.td,{children:"hostname of CI server"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_SYSTEM_VERSION"})}),(0,r.jsx)(e.td,{children:"version of the server"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"Forge"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_FORGE_TYPE"})}),(0,r.jsx)(e.td,{children:"name of forge (gitea, github, ...)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_FORGE_URL"})}),(0,r.jsx)(e.td,{children:"root URL of configured forge"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.strong,{children:"Internal"})," - Please don't use!"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_SCRIPT"})}),(0,r.jsx)(e.td,{children:"Internal script path. Used to call pipeline step commands."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_NETRC_USERNAME"})}),(0,r.jsx)(e.td,{children:"Credentials for private repos to be able to clone data. (Only available for specific images)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_NETRC_PASSWORD"})}),(0,r.jsx)(e.td,{children:"Credentials for private repos to be able to clone data. (Only available for specific images)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"CI_NETRC_MACHINE"})}),(0,r.jsx)(e.td,{children:"Credentials for private repos to be able to clone data. (Only available for specific images)"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"global-environment-variables",children:"Global environment variables"}),"\n",(0,r.jsxs)(e.p,{children:["If you want specific environment variables to be available in all of your pipelines use the ",(0,r.jsx)(e.code,{children:"WOODPECKER_ENVIRONMENT"})," setting on the Woodpecker server. Note that these can't overwrite any existing, built-in variables."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ini",children:"WOODPECKER_ENVIRONMENT=first_var:value1,second_var:value2\n"})}),"\n",(0,r.jsx)(e.p,{children:"These can be used, for example, to manage the image tag used by multiple projects."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ini",children:"WOODPECKER_ENVIRONMENT=GOLANG_VERSION:1.18\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-diff",children:" steps:\n   - name: build\n-    image: golang:1.18\n+    image: golang:${GOLANG_VERSION}\n     commands:\n       - [...]\n"})}),"\n",(0,r.jsx)(e.h2,{id:"string-substitution",children:"String Substitution"}),"\n",(0,r.jsx)(e.p,{children:"Woodpecker provides the ability to substitute environment variables at runtime. This gives us the ability to use dynamic settings, commands and filters in our pipeline configuration."}),"\n",(0,r.jsx)(e.p,{children:"Example commit substitution:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-diff",children:" steps:\n   - name: docker\n     image: plugins/docker\n     settings:\n+      tags: ${CI_COMMIT_SHA}\n"})}),"\n",(0,r.jsx)(e.p,{children:"Example tag substitution:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-diff",children:" steps:\n   - name: docker\n     image: plugins/docker\n     settings:\n+      tags: ${CI_COMMIT_TAG}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"string-operations",children:"String Operations"}),"\n",(0,r.jsx)(e.p,{children:"Woodpecker also emulates bash string operations. This gives us the ability to manipulate the strings prior to substitution. Example use cases might include substring and stripping prefix or suffix values."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"OPERATION"}),(0,r.jsx)(e.th,{children:"DESCRIPTION"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"${param}"})}),(0,r.jsx)(e.td,{children:"parameter substitution"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"${param,}"})}),(0,r.jsx)(e.td,{children:"parameter substitution with lowercase first char"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"${param,,}"})}),(0,r.jsx)(e.td,{children:"parameter substitution with lowercase"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"${param^}"})}),(0,r.jsx)(e.td,{children:"parameter substitution with uppercase first char"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"${param^^}"})}),(0,r.jsx)(e.td,{children:"parameter substitution with uppercase"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"${param:pos}"})}),(0,r.jsx)(e.td,{children:"parameter substitution with substring"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"${param:pos:len}"})}),(0,r.jsx)(e.td,{children:"parameter substitution with substring and length"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"${param=default}"})}),(0,r.jsx)(e.td,{children:"parameter substitution with default"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"${param##prefix}"})}),(0,r.jsx)(e.td,{children:"parameter substitution with prefix removal"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"${param%%suffix}"})}),(0,r.jsx)(e.td,{children:"parameter substitution with suffix removal"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"${param/old/new}"})}),(0,r.jsx)(e.td,{children:"parameter substitution with find and replace"})]})]})]}),"\n",(0,r.jsx)(e.p,{children:"Example variable substitution with substring:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-diff",children:" steps:\n   - name: docker\n     image: plugins/docker\n     settings:\n+      tags: ${CI_COMMIT_SHA:0:8}\n"})}),"\n",(0,r.jsxs)(e.p,{children:["Example variable substitution strips ",(0,r.jsx)(e.code,{children:"v"})," prefix from ",(0,r.jsx)(e.code,{children:"v.1.0.0"}),":"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-diff",children:" steps:\n   - name: docker\n     image: plugins/docker\n     settings:\n+      tags: ${CI_COMMIT_TAG##v}\n"})})]})}function x(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},74169:(n,e,s)=>{s.d(e,{R:()=>t,x:()=>c});var r=s(79474);const i={},d=r.createContext(i);function t(n){const e=r.useContext(d);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:t(n.components),r.createElement(d.Provider,{value:e},n.children)}}}]);