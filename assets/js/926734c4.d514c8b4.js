/*! For license information please see 926734c4.d514c8b4.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[9084],{95630:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>c});var s=r(11527),i=r(46224);const l={},o="CLI",t={id:"cli",title:"CLI",description:"woodpecker-cli - command line utility",source:"@site/docs/40-cli.md",sourceDirName:".",slug:"/cli",permalink:"/docs/next/cli",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/docs/40-cli.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"External Configuration API",permalink:"/docs/next/administration/external-configuration-api"},next:{title:"Migrations",permalink:"/docs/next/migrations"}},d={},c=[{value:"pipeline",id:"pipeline",level:2},{value:"ls",id:"ls",level:3},{value:"last",id:"last",level:3},{value:"logs",id:"logs",level:3},{value:"info",id:"info",level:3},{value:"stop",id:"stop",level:3},{value:"start",id:"start",level:3},{value:"approve",id:"approve",level:3},{value:"decline",id:"decline",level:3},{value:"queue",id:"queue",level:3},{value:"ps",id:"ps",level:3},{value:"create",id:"create",level:3},{value:"log",id:"log",level:2},{value:"purge",id:"purge",level:3},{value:"deploy",id:"deploy",level:2},{value:"exec",id:"exec",level:2},{value:"info",id:"info-1",level:2},{value:"registry",id:"registry",level:2},{value:"add",id:"add",level:3},{value:"rm",id:"rm",level:3},{value:"update",id:"update",level:3},{value:"info",id:"info-2",level:3},{value:"ls",id:"ls-1",level:3},{value:"secret",id:"secret",level:2},{value:"add",id:"add-1",level:3},{value:"rm",id:"rm-1",level:3},{value:"update",id:"update-1",level:3},{value:"info",id:"info-3",level:3},{value:"ls",id:"ls-2",level:3},{value:"repo",id:"repo",level:2},{value:"ls",id:"ls-3",level:3},{value:"info",id:"info-4",level:3},{value:"add",id:"add-2",level:3},{value:"update",id:"update-2",level:3},{value:"rm",id:"rm-2",level:3},{value:"repair",id:"repair",level:3},{value:"chown",id:"chown",level:3},{value:"sync",id:"sync",level:3},{value:"user",id:"user",level:2},{value:"ls",id:"ls-4",level:3},{value:"info",id:"info-5",level:3},{value:"add",id:"add-3",level:3},{value:"rm",id:"rm-3",level:3},{value:"lint",id:"lint",level:2},{value:"log-level",id:"log-level",level:2},{value:"cron",id:"cron",level:2},{value:"add",id:"add-4",level:3},{value:"rm",id:"rm-4",level:3},{value:"update",id:"update-3",level:3},{value:"info",id:"info-6",level:3},{value:"ls",id:"ls-5",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"cli",children:"CLI"}),"\n",(0,s.jsx)(n.h1,{id:"name",children:"NAME"}),"\n",(0,s.jsx)(n.p,{children:"woodpecker-cli - command line utility"}),"\n",(0,s.jsx)(n.h1,{id:"synopsis",children:"SYNOPSIS"}),"\n",(0,s.jsx)(n.p,{children:"woodpecker-cli"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[--log-file]=[value]\n[--log-level]=[value]\n[--nocolor]\n[--pretty]\n[--server|-s]=[value]\n[--token|-t]=[value]\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Usage"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"woodpecker-cli [GLOBAL OPTIONS] command [COMMAND OPTIONS] [ARGUMENTS...]\n"})}),"\n",(0,s.jsx)(n.h1,{id:"global-options",children:"GLOBAL OPTIONS"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--log-file"}),"=\"\": Output destination for logs. 'stdout' and 'stderr' can be used as special keywords. (default: \"stderr\")"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--log-level"}),'="": set logging level (default: "info")']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--nocolor"}),": disable colored debug output, only has effect if pretty output is set too"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--pretty"}),": enable pretty-printed debug output"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--server, -s"}),'="": server address']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--token, -t"}),'="": server auth token']}),"\n",(0,s.jsx)(n.h1,{id:"commands",children:"COMMANDS"}),"\n",(0,s.jsx)(n.h2,{id:"pipeline",children:"pipeline"}),"\n",(0,s.jsx)(n.p,{children:"manage pipelines"}),"\n",(0,s.jsx)(n.h3,{id:"ls",children:"ls"}),"\n",(0,s.jsx)(n.p,{children:"show pipeline history"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--branch"}),'="": branch filter']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--event"}),'="": event filter']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--format"}),'="": format output (default: "\\x1b[33mPipeline #{{ .Number }} \\x1b[0m\\nStatus: {{ .Status }}\\nEvent: {{ .Event }}\\nCommit: {{ .Commit }}\\nBranch: {{ .Branch }}\\nRef: {{ .Ref }}\\nAuthor: {{ .Author }} {{ if .Email }}<{{.Email}}>{{ end }}\\nMessage: {{ .Message }}\\n")']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--limit"}),'="": limit the list size (default: 25)']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--status"}),'="": status filter']}),"\n",(0,s.jsx)(n.h3,{id:"last",children:"last"}),"\n",(0,s.jsx)(n.p,{children:"show latest pipeline details"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--branch"}),'="": branch name (default: "main")']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--format"}),'="": format output (default: "Number: {{ .Number }}\\nStatus: {{ .Status }}\\nEvent: {{ .Event }}\\nCommit: {{ .Commit }}\\nBranch: {{ .Branch }}\\nRef: {{ .Ref }}\\nMessage: {{ .Message }}\\nAuthor: {{ .Author }}\\n")']}),"\n",(0,s.jsx)(n.h3,{id:"logs",children:"logs"}),"\n",(0,s.jsx)(n.p,{children:"show pipeline logs"}),"\n",(0,s.jsx)(n.h3,{id:"info",children:"info"}),"\n",(0,s.jsx)(n.p,{children:"show pipeline details"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--format"}),'="": format output (default: "Number: {{ .Number }}\\nStatus: {{ .Status }}\\nEvent: {{ .Event }}\\nCommit: {{ .Commit }}\\nBranch: {{ .Branch }}\\nRef: {{ .Ref }}\\nMessage: {{ .Message }}\\nAuthor: {{ .Author }}\\n")']}),"\n",(0,s.jsx)(n.h3,{id:"stop",children:"stop"}),"\n",(0,s.jsx)(n.p,{children:"stop a pipeline"}),"\n",(0,s.jsx)(n.h3,{id:"start",children:"start"}),"\n",(0,s.jsx)(n.p,{children:"start a pipeline"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--param, -p"}),'="": custom parameters to be injected into the step environment. Format: KEY=value']}),"\n",(0,s.jsx)(n.h3,{id:"approve",children:"approve"}),"\n",(0,s.jsx)(n.p,{children:"approve a pipeline"}),"\n",(0,s.jsx)(n.h3,{id:"decline",children:"decline"}),"\n",(0,s.jsx)(n.p,{children:"decline a pipeline"}),"\n",(0,s.jsx)(n.h3,{id:"queue",children:"queue"}),"\n",(0,s.jsx)(n.p,{children:"show pipeline queue"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--format"}),'="": format output (default: "\\x1b[33m{{ .FullName }} #{{ .Number }} \\x1b[0m\\nStatus: {{ .Status }}\\nEvent: {{ .Event }}\\nCommit: {{ .Commit }}\\nBranch: {{ .Branch }}\\nRef: {{ .Ref }}\\nAuthor: {{ .Author }} {{ if .Email }}<{{.Email}}>{{ end }}\\nMessage: {{ .Message }}\\n")']}),"\n",(0,s.jsx)(n.h3,{id:"ps",children:"ps"}),"\n",(0,s.jsx)(n.p,{children:"show pipeline steps"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--format"}),'="": format output (default: "\\x1b[33mStep #{{ .PID }} \\x1b[0m\\nStep: {{ .Name }}\\nState: {{ .State }}\\n")']}),"\n",(0,s.jsx)(n.h3,{id:"create",children:"create"}),"\n",(0,s.jsx)(n.p,{children:"create new pipeline"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--branch"}),'="": branch to create pipeline from']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--format"}),'="": format output (default: "\\x1b[33mPipeline #{{ .Number }} \\x1b[0m\\nStatus: {{ .Status }}\\nEvent: {{ .Event }}\\nCommit: {{ .Commit }}\\nBranch: {{ .Branch }}\\nRef: {{ .Ref }}\\nAuthor: {{ .Author }} {{ if .Email }}<{{.Email}}>{{ end }}\\nMessage: {{ .Message }}\\n")']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--var"}),'="": key=value']}),"\n",(0,s.jsx)(n.h2,{id:"log",children:"log"}),"\n",(0,s.jsx)(n.p,{children:"manage logs"}),"\n",(0,s.jsx)(n.h3,{id:"purge",children:"purge"}),"\n",(0,s.jsx)(n.p,{children:"purge a log"}),"\n",(0,s.jsx)(n.h2,{id:"deploy",children:"deploy"}),"\n",(0,s.jsx)(n.p,{children:"deploy code"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--branch"}),'="": branch filter (default: "main")']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--event"}),'="": event filter (default: "push")']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--format"}),'="": format output (default: "Number: {{ .Number }}\\nStatus: {{ .Status }}\\nCommit: {{ .Commit }}\\nBranch: {{ .Branch }}\\nRef: {{ .Ref }}\\nMessage: {{ .Message }}\\nAuthor: {{ .Author }}\\nTarget: {{ .Deploy }}\\n")']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--param, -p"}),'="": custom parameters to be injected into the step environment. Format: KEY=value']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--status"}),'="": status filter (default: "success")']}),"\n",(0,s.jsx)(n.h2,{id:"exec",children:"exec"}),"\n",(0,s.jsx)(n.p,{children:"execute a local pipeline"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--backend-docker-api-version"}),'="": the version of the API to reach, leave empty for latest.']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--backend-docker-cert"}),'="": path to load the TLS certificates for connecting to docker server']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--backend-docker-host"}),'="": path to docker socket or url to the docker server']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--backend-docker-ipv6"}),": backend docker enable IPV6"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--backend-docker-network"}),'="": backend docker network']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--backend-docker-tls-verify"}),": enable or disable TLS verification for connecting to docker server"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--backend-docker-volumes"}),'="": backend docker volumes (comma separated)']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--backend-engine"}),'="": backend engine to run pipelines on (default: "auto-detect")']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--backend-http-proxy"}),'="": if set, pass the environment variable down as "HTTP_PROXY" to steps']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--backend-https-proxy"}),'="": if set, pass the environment variable down as "HTTPS_PROXY" to steps']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--backend-k8s-namespace"}),'="": backend k8s namespace (default: "woodpecker")']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--backend-k8s-pod-annotations"}),'="": backend k8s additional worker pod annotations']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--backend-k8s-pod-labels"}),'="": backend k8s additional worker pod labels']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--backend-k8s-secctx-nonroot"}),": ",(0,s.jsx)(n.code,{children:"run as non root"})," Kubernetes security context option"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--backend-k8s-storage-class"}),'="": backend k8s storage class']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--backend-k8s-storage-rwx"}),": backend k8s storage access mode, should ReadWriteMany (RWX) instead of ReadWriteOnce (RWO) be used? (default: true)"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--backend-k8s-volume-size"}),'="": backend k8s volume size (default 10G) (default: "10G")']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--backend-local-temp-dir"}),'="": set a different temp dir to clone workflows into (default: "/tmp")']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--backend-no-proxy"}),'="": if set, pass the environment variable down as "NO_PROXY" to steps']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--commit-author-avatar"}),'="":']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--commit-author-email"}),'="":']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--commit-author-name"}),'="":']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--commit-branch"}),'="":']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--commit-message"}),'="":']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--commit-ref"}),'="":']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--commit-refspec"}),'="":']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--commit-sha"}),'="":']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--connect-retry-count"}),'="": number of times to retry connecting to the server (default: 5)']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--connect-retry-delay"}),'="": duration to wait before retrying to connect to the server (default: 2s)']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--env"}),'="":']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--forge-type"}),'="":']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--forge-url"}),'="":']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--local"}),": run from local directory"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--netrc-machine"}),'="":']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--netrc-password"}),'="":']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--netrc-username"}),'="":']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--network"}),'="": external networks']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--pipeline-created"}),'="":  (default: 0)']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--pipeline-event"}),'="":  (default: "manual")']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--pipeline-finished"}),'="":  (default: 0)']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--pipeline-number"}),'="":  (default: 0)']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--pipeline-parent"}),'="":  (default: 0)']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--pipeline-started"}),'="":  (default: 0)']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--pipeline-status"}),'="":']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--pipeline-target"}),'="":']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--pipeline-url"}),'="":']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--prev-commit-author-avatar"}),'="":']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--prev-commit-author-email"}),'="":']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--prev-commit-author-name"}),'="":']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--prev-commit-branch"}),'="":']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--prev-commit-message"}),'="":']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--prev-commit-ref"}),'="":']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--prev-commit-refspec"}),'="":']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--prev-commit-sha"}),'="":']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--prev-pipeline-created"}),'="":  (default: 0)']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--prev-pipeline-event"}),'="":']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--prev-pipeline-finished"}),'="":  (default: 0)']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--prev-pipeline-number"}),'="":  (default: 0)']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--prev-pipeline-started"}),'="":  (default: 0)']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--prev-pipeline-status"}),'="":']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--prev-pipeline-url"}),'="":']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--privileged"}),'="": privileged plugins (default: "plugins/docker", "plugins/gcr", "plugins/ecr", "woodpeckerci/plugin-docker-buildx", "codeberg.org/woodpecker-plugins/docker-buildx")']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--repo"}),'="": full repo name']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--repo-clone-ssh-url"}),'="":']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--repo-clone-url"}),'="":']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--repo-private"}),'="":']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--repo-remote-id"}),'="":']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--repo-trusted"}),":"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--repo-url"}),'="":']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--step-name"}),'="":  (default: 0)']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--system-name"}),'="":  (default: "woodpecker")']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--system-platform"}),'="":']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--system-url"}),'="":  (default: "',(0,s.jsx)(n.a,{href:"https://github.com/woodpecker-ci/woodpecker",children:"https://github.com/woodpecker-ci/woodpecker"}),'")']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--timeout"}),'="": pipeline timeout (default: 1h0m0s)']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--volumes"}),'="": pipeline volumes']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--workflow-name"}),'="":  (default: 0)']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--workflow-number"}),'="":  (default: 0)']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--workspace-base"}),'="":  (default: "/woodpecker")']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--workspace-path"}),'="":  (default: "src")']}),"\n",(0,s.jsx)(n.h2,{id:"info-1",children:"info"}),"\n",(0,s.jsx)(n.p,{children:"show information about the current user"}),"\n",(0,s.jsx)(n.h2,{id:"registry",children:"registry"}),"\n",(0,s.jsx)(n.p,{children:"manage registries"}),"\n",(0,s.jsx)(n.h3,{id:"add",children:"add"}),"\n",(0,s.jsx)(n.p,{children:"adds a registry"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--hostname"}),'="": registry hostname (default: "docker.io")']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--password"}),'="": registry password']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--repository, --repo"}),'="": repository id or full-name (e.g. 134 or octocat/hello-world)']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--username"}),'="": registry username']}),"\n",(0,s.jsx)(n.h3,{id:"rm",children:"rm"}),"\n",(0,s.jsx)(n.p,{children:"remove a registry"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--hostname"}),'="": registry hostname (default: "docker.io")']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--repository, --repo"}),'="": repository id or full-name (e.g. 134 or octocat/hello-world)']}),"\n",(0,s.jsx)(n.h3,{id:"update",children:"update"}),"\n",(0,s.jsx)(n.p,{children:"update a registry"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--hostname"}),'="": registry hostname (default: "docker.io")']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--password"}),'="": registry password']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--repository, --repo"}),'="": repository id or full-name (e.g. 134 or octocat/hello-world)']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--username"}),'="": registry username']}),"\n",(0,s.jsx)(n.h3,{id:"info-2",children:"info"}),"\n",(0,s.jsx)(n.p,{children:"display registry info"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--hostname"}),'="": registry hostname (default: "docker.io")']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--repository, --repo"}),'="": repository id or full-name (e.g. 134 or octocat/hello-world)']}),"\n",(0,s.jsx)(n.h3,{id:"ls-1",children:"ls"}),"\n",(0,s.jsx)(n.p,{children:"list registries"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--repository, --repo"}),'="": repository id or full-name (e.g. 134 or octocat/hello-world)']}),"\n",(0,s.jsx)(n.h2,{id:"secret",children:"secret"}),"\n",(0,s.jsx)(n.p,{children:"manage secrets"}),"\n",(0,s.jsx)(n.h3,{id:"add-1",children:"add"}),"\n",(0,s.jsx)(n.p,{children:"adds a secret"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--event"}),'="": secret limited to these events']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--global"}),": global secret"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--image"}),'="": secret limited to these images']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--name"}),'="": secret name']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--organization, --org"}),'="": organization id or full-name (e.g. 123 or octocat)']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--repository, --repo"}),'="": repository id or full-name (e.g. 134 or octocat/hello-world)']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--value"}),'="": secret value']}),"\n",(0,s.jsx)(n.h3,{id:"rm-1",children:"rm"}),"\n",(0,s.jsx)(n.p,{children:"remove a secret"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--global"}),": global secret"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--name"}),'="": secret name']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--organization, --org"}),'="": organization id or full-name (e.g. 123 or octocat)']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--repository, --repo"}),'="": repository id or full-name (e.g. 134 or octocat/hello-world)']}),"\n",(0,s.jsx)(n.h3,{id:"update-1",children:"update"}),"\n",(0,s.jsx)(n.p,{children:"update a secret"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--event"}),'="": secret limited to these events']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--global"}),": global secret"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--image"}),'="": secret limited to these images']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--name"}),'="": secret name']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--organization, --org"}),'="": organization id or full-name (e.g. 123 or octocat)']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--repository, --repo"}),'="": repository id or full-name (e.g. 134 or octocat/hello-world)']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--value"}),'="": secret value']}),"\n",(0,s.jsx)(n.h3,{id:"info-3",children:"info"}),"\n",(0,s.jsx)(n.p,{children:"display secret info"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--global"}),": global secret"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--name"}),'="": secret name']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--organization, --org"}),'="": organization id or full-name (e.g. 123 or octocat)']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--repository, --repo"}),'="": repository id or full-name (e.g. 134 or octocat/hello-world)']}),"\n",(0,s.jsx)(n.h3,{id:"ls-2",children:"ls"}),"\n",(0,s.jsx)(n.p,{children:"list secrets"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--global"}),": global secret"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--organization, --org"}),'="": organization id or full-name (e.g. 123 or octocat)']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--repository, --repo"}),'="": repository id or full-name (e.g. 134 or octocat/hello-world)']}),"\n",(0,s.jsx)(n.h2,{id:"repo",children:"repo"}),"\n",(0,s.jsx)(n.p,{children:"manage repositories"}),"\n",(0,s.jsx)(n.h3,{id:"ls-3",children:"ls"}),"\n",(0,s.jsx)(n.p,{children:"list all repos"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--format"}),'="": format output (default: "\\x1b[33m{{ .FullName }}\\x1b[0m (id: {{ .ID }}, forgeRemoteID: {{ .ForgeRemoteID }})")']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--org"}),'="": filter by organization']}),"\n",(0,s.jsx)(n.h3,{id:"info-4",children:"info"}),"\n",(0,s.jsx)(n.p,{children:"show repository details"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--format"}),'="": format output (default: "Owner: {{ .Owner }}\\nRepo: {{ .Name }}\\nURL: {{ .ForgeURL }}\\nConfig path: {{ .Config }}\\nVisibility: {{ .Visibility }}\\nPrivate: {{ .IsSCMPrivate }}\\nTrusted: {{ .IsTrusted }}\\nGated: {{ .IsGated }}\\nClone url: {{ .Clone }}\\nAllow pull-requests: {{ .AllowPullRequests }}\\n")']}),"\n",(0,s.jsx)(n.h3,{id:"add-2",children:"add"}),"\n",(0,s.jsx)(n.p,{children:"add a repository"}),"\n",(0,s.jsx)(n.h3,{id:"update-2",children:"update"}),"\n",(0,s.jsx)(n.p,{children:"update a repository"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--config"}),'="": repository configuration path (e.g. .woodpecker.yml)']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--gated"}),": repository is gated"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--pipeline-counter"}),'="": repository starting pipeline number (default: 0)']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--timeout"}),'="": repository timeout (default: 0s)']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--trusted"}),": repository is trusted"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--unsafe"}),": validate updating the pipeline-counter is unsafe"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--visibility"}),'="": repository visibility']}),"\n",(0,s.jsx)(n.h3,{id:"rm-2",children:"rm"}),"\n",(0,s.jsx)(n.p,{children:"remove a repository"}),"\n",(0,s.jsx)(n.h3,{id:"repair",children:"repair"}),"\n",(0,s.jsx)(n.p,{children:"repair repository webhooks"}),"\n",(0,s.jsx)(n.h3,{id:"chown",children:"chown"}),"\n",(0,s.jsx)(n.p,{children:"assume ownership of a repository"}),"\n",(0,s.jsx)(n.h3,{id:"sync",children:"sync"}),"\n",(0,s.jsx)(n.p,{children:"synchronize the repository list"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--format"}),'="": format output (default: "\\x1b[33m{{ .FullName }}\\x1b[0m (id: {{ .ID }}, forgeRemoteID: {{ .ForgeRemoteID }})")']}),"\n",(0,s.jsx)(n.h2,{id:"user",children:"user"}),"\n",(0,s.jsx)(n.p,{children:"manage users"}),"\n",(0,s.jsx)(n.h3,{id:"ls-4",children:"ls"}),"\n",(0,s.jsx)(n.p,{children:"list all users"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--format"}),'="": format output (default: "{{ .Login }}")']}),"\n",(0,s.jsx)(n.h3,{id:"info-5",children:"info"}),"\n",(0,s.jsx)(n.p,{children:"show user details"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--format"}),'="": format output (default: "User: {{ .Login }}\\nEmail: {{ .Email }}")']}),"\n",(0,s.jsx)(n.h3,{id:"add-3",children:"add"}),"\n",(0,s.jsx)(n.p,{children:"adds a user"}),"\n",(0,s.jsx)(n.h3,{id:"rm-3",children:"rm"}),"\n",(0,s.jsx)(n.p,{children:"remove a user"}),"\n",(0,s.jsx)(n.h2,{id:"lint",children:"lint"}),"\n",(0,s.jsx)(n.p,{children:"lint a pipeline configuration file"}),"\n",(0,s.jsx)(n.h2,{id:"log-level",children:"log-level"}),"\n",(0,s.jsx)(n.p,{children:"get the logging level of the server, or set it with [level]"}),"\n",(0,s.jsx)(n.h2,{id:"cron",children:"cron"}),"\n",(0,s.jsx)(n.p,{children:"manage cron jobs"}),"\n",(0,s.jsx)(n.h3,{id:"add-4",children:"add"}),"\n",(0,s.jsx)(n.p,{children:"add a cron job"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--branch"}),'="": cron branch']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--name"}),'="": cron name']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--repository, --repo"}),'="": repository id or full-name (e.g. 134 or octocat/hello-world)']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--schedule"}),'="": cron schedule']}),"\n",(0,s.jsx)(n.h3,{id:"rm-4",children:"rm"}),"\n",(0,s.jsx)(n.p,{children:"remove a cron job"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--id"}),'="": cron id']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--repository, --repo"}),'="": repository id or full-name (e.g. 134 or octocat/hello-world)']}),"\n",(0,s.jsx)(n.h3,{id:"update-3",children:"update"}),"\n",(0,s.jsx)(n.p,{children:"update a cron job"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--branch"}),'="": cron branch']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--id"}),'="": cron id']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--name"}),'="": cron name']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--repository, --repo"}),'="": repository id or full-name (e.g. 134 or octocat/hello-world)']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--schedule"}),'="": cron schedule']}),"\n",(0,s.jsx)(n.h3,{id:"info-6",children:"info"}),"\n",(0,s.jsx)(n.p,{children:"display info about a cron job"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--id"}),'="": cron id']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--repository, --repo"}),'="": repository id or full-name (e.g. 134 or octocat/hello-world)']}),"\n",(0,s.jsx)(n.h3,{id:"ls-5",children:"ls"}),"\n",(0,s.jsx)(n.p,{children:"list cron jobs"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"--repository, --repo"}),'="": repository id or full-name (e.g. 134 or octocat/hello-world)']})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},3354:(e,n,r)=>{var s=r(50959),i=Symbol.for("react.element"),l=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,t=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,r){var s,l={},c=null,a=null;for(s in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)o.call(n,s)&&!d.hasOwnProperty(s)&&(l[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===l[s]&&(l[s]=n[s]);return{$$typeof:i,type:e,key:c,ref:a,props:l,_owner:t.current}}n.Fragment=l,n.jsx=c,n.jsxs=c},11527:(e,n,r)=>{e.exports=r(3354)},46224:(e,n,r)=>{r.d(n,{Z:()=>t,a:()=>o});var s=r(50959);const i={},l=s.createContext(i);function o(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);