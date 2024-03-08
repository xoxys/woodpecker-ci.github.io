/*! For license information please see 489938a3.2e9b6283.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[2040],{66356:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>t});var s=i(13274),o=i(74169);const l={},r="Pipeline syntax",a={id:"usage/pipeline-syntax",title:"Pipeline syntax",description:"The pipeline section defines a list of steps to build, test and deploy your code. Pipeline steps are executed serially, in the order in which they are defined. If a step returns a non-zero exit code, the pipeline immediately aborts and returns a failure status.",source:"@site/versioned_docs/version-0.15/20-usage/20-pipeline-syntax.md",sourceDirName:"20-usage",slug:"/usage/pipeline-syntax",permalink:"/docs/0.15/usage/pipeline-syntax",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-0.15/20-usage/20-pipeline-syntax.md",tags:[],version:"0.15",sidebarPosition:20,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/docs/0.15/usage/intro"},next:{title:"Conditional Step Execution",permalink:"/docs/0.15/usage/conditional-execution"}},c={},t=[{value:"Global Pipeline Conditionals",id:"global-pipeline-conditionals",level:2},{value:"<code>branches</code>",id:"branches",level:3},{value:"<code>platform</code>",id:"platform",level:3},{value:"Skip Commits",id:"skip-commits",level:3},{value:"<code>services</code>",id:"services",level:2},{value:"Steps",id:"steps",level:2},{value:"File changes are incremental",id:"file-changes-are-incremental",level:3},{value:"<code>image</code>",id:"image",level:3},{value:"Images from private registries",id:"images-from-private-registries",level:4},{value:"Global registry support",id:"global-registry-support",level:4},{value:"GCR registry support",id:"gcr-registry-support",level:4},{value:"<code>commands</code>",id:"commands",level:3},{value:"<code>environment</code>",id:"environment",level:3},{value:"<code>secrets</code>",id:"secrets",level:3},{value:"<code>when</code> - Conditional Execution",id:"when---conditional-execution",level:3},{value:"<code>group</code> - Parallel execution",id:"group---parallel-execution",level:3},{value:"<code>volumes</code>",id:"volumes",level:3},{value:"<code>detach</code>",id:"detach",level:3},{value:"Advanced Configurations",id:"advanced-configurations",level:2},{value:"<code>workspace</code>",id:"workspace",level:3},{value:"<code>matrix</code>",id:"matrix",level:3},{value:"<code>clone</code>",id:"clone",level:3},{value:"Git Submodules",id:"git-submodules",level:4},{value:"Privileged mode",id:"privileged-mode",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"pipeline-syntax",children:"Pipeline syntax"}),"\n",(0,s.jsx)(n.p,{children:"The pipeline section defines a list of steps to build, test and deploy your code. Pipeline steps are executed serially, in the order in which they are defined. If a step returns a non-zero exit code, the pipeline immediately aborts and returns a failure status."}),"\n",(0,s.jsx)(n.p,{children:"Example pipeline:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"pipeline:\n  backend:\n    image: golang\n    commands:\n      - go build\n      - go test\n  frontend:\n    image: node\n    commands:\n      - npm install\n      - npm run test\n      - npm run build\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In the above example we define two pipeline steps, ",(0,s.jsx)(n.code,{children:"frontend"})," and ",(0,s.jsx)(n.code,{children:"backend"}),". The names of these steps are completely arbitrary."]}),"\n",(0,s.jsx)(n.h2,{id:"global-pipeline-conditionals",children:"Global Pipeline Conditionals"}),"\n",(0,s.jsx)(n.p,{children:"Woodpecker gives the ability to skip whole pipelines (not just steps) based on certain conditions."}),"\n",(0,s.jsx)(n.h3,{id:"branches",children:(0,s.jsx)(n.code,{children:"branches"})}),"\n",(0,s.jsxs)(n.p,{children:["Woodpecker can skip commits based on the target branch. If the branch matches the ",(0,s.jsx)(n.code,{children:"branches:"})," block the pipeline is executed, otherwise it is skipped."]}),"\n",(0,s.jsx)(n.p,{children:"Example skipping a commit when the target branch is not master:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:"pipeline:\n  build:\n    image: golang\n    commands:\n      - go build\n      - go test\n\n+branches: master\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example matching multiple target branches:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:"pipeline:\n  build:\n    image: golang\n    commands:\n      - go build\n      - go test\n\n+branches: [ master, develop ]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example uses glob matching:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:"pipeline:\n  build:\n    image: golang\n    commands:\n      - go build\n      - go test\n\n+branches: [ master, feature/* ]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example includes branches:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:"pipeline:\n  build:\n    image: golang\n    commands:\n      - go build\n      - go test\n\n+branches:\n+  include: [ master, feature/* ]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example excludes branches:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:"pipeline:\n  build:\n    image: golang\n    commands:\n      - go build\n      - go test\n\n+branches:\n+  exclude: [ develop, feature/* ]\n"})}),"\n",(0,s.jsx)(n.h3,{id:"platform",children:(0,s.jsx)(n.code,{children:"platform"})}),"\n",(0,s.jsxs)(n.p,{children:["To configure your pipeline to only be executed on an agent with a specific platform, you can use the ",(0,s.jsx)(n.code,{children:"platform"})," key.\nHave a look at the official ",(0,s.jsx)(n.a,{href:"https://go.dev/doc/install/source",children:"go docs"})," for the available platforms. The syntax of the platform is ",(0,s.jsx)(n.code,{children:"GOOS/GOARCH"})," like ",(0,s.jsx)(n.code,{children:"linux/arm64"})," or ",(0,s.jsx)(n.code,{children:"linux/amd64"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsxs)(n.p,{children:["Assuming we have two agents, one ",(0,s.jsx)(n.code,{children:"arm"})," and one ",(0,s.jsx)(n.code,{children:"amd64"}),". Previously this pipeline would have executed on ",(0,s.jsx)(n.strong,{children:"either agent"}),", as Woodpecker is not fussy about where it runs the pipelines. By setting the following option it will only be executed on an agent with the platform ",(0,s.jsx)(n.code,{children:"linux/arm64"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:"+platform: linux/arm64\n\n pipeline:\n   build:\n     image: golang\n     commands:\n       - go build\n       - go test\n"})}),"\n",(0,s.jsx)(n.h3,{id:"skip-commits",children:"Skip Commits"}),"\n",(0,s.jsxs)(n.p,{children:["Woodpecker gives the ability to skip individual commits by adding ",(0,s.jsx)(n.code,{children:"[CI SKIP]"})," to the commit message. Note this is case-insensitive."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:'git commit -m "updated README [CI SKIP]"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"services",children:(0,s.jsx)(n.code,{children:"services"})}),"\n",(0,s.jsx)(n.p,{children:"Woodpecker can provide service containers. They can for example be used to run databases or cache containers during the execution of pipeline."}),"\n",(0,s.jsxs)(n.p,{children:["For more details check the ",(0,s.jsx)(n.a,{href:"/docs/0.15/usage/services",children:"services docs"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,s.jsx)(n.p,{children:"Every step of your pipeline executes arbitrary commands inside a specified docker container. The defined commands are executed serially.\nThe associated commit of a current pipeline run is checked out with git to a workspace which is mounted to every step of the pipeline as the working directory."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:" pipeline:\n   backend:\n     image: golang\n     commands:\n+      - go build\n+      - go test\n"})}),"\n",(0,s.jsx)(n.h3,{id:"file-changes-are-incremental",children:"File changes are incremental"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Woodpecker clones the source code in the beginning pipeline"}),"\n",(0,s.jsx)(n.li,{children:"Changes to files are persisted through steps as the same volume is mounted to all steps"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'# .woodpecker.yml\npipeline:\n  build:\n    image: debian\n    commands:\n      - echo "test content" > myfile\n  a-test-step:\n    image: debian\n    commands:\n      - cat myfile\n'})}),"\n",(0,s.jsx)(n.h3,{id:"image",children:(0,s.jsx)(n.code,{children:"image"})}),"\n",(0,s.jsx)(n.p,{children:"Woodpecker uses Docker images for the build environment, for plugins and for service containers. The image field is exposed in the container blocks in the Yaml:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:" pipeline:\n   build:\n+    image: golang:1.6\n     commands:\n       - go build\n       - go test\n\n   publish:\n+    image: plugins/docker\n     repo: foo/bar\n\n services:\n   database:\n+    image: mysql\n"})}),"\n",(0,s.jsx)(n.p,{children:"Woodpecker supports any valid Docker image from any Docker registry:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"image: golang\nimage: golang:1.7\nimage: library/golang:1.7\nimage: index.docker.io/library/golang\nimage: index.docker.io/library/golang:1.7\n"})}),"\n",(0,s.jsx)(n.p,{children:"Woodpecker does not automatically upgrade docker images. Example configuration to always pull the latest image when updates are available:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:" pipeline:\n   build:\n     image: golang:latest\n+    pull: true\n"})}),"\n",(0,s.jsx)(n.h4,{id:"images-from-private-registries",children:"Images from private registries"}),"\n",(0,s.jsx)(n.p,{children:"You must provide registry credentials on the UI in order to pull private pipeline images defined in your Yaml configuration file."}),"\n",(0,s.jsx)(n.p,{children:"These credentials are never exposed to your pipeline, which means they cannot be used to push, and are safe to use with pull requests, for example. Pushing to a registry still require setting credentials for the appropriate plugin."}),"\n",(0,s.jsx)(n.p,{children:"Example configuration using a private image:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:" pipeline:\n   build:\n+    image: gcr.io/custom/golang\n     commands:\n       - go build\n       - go test\n"})}),"\n",(0,s.jsx)(n.p,{children:"Woodpecker matches the registry hostname to each image in your yaml. If the hostnames match, the registry credentials are used to authenticate to your registry and pull the image. Note that registry credentials are used by the Woodpecker agent and are never exposed to your build containers."}),"\n",(0,s.jsx)(n.p,{children:"Example registry hostnames:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Image ",(0,s.jsx)(n.code,{children:"gcr.io/foo/bar"})," has hostname ",(0,s.jsx)(n.code,{children:"gcr.io"})]}),"\n",(0,s.jsxs)(n.li,{children:["Image ",(0,s.jsx)(n.code,{children:"foo/bar"})," has hostname ",(0,s.jsx)(n.code,{children:"docker.io"})]}),"\n",(0,s.jsxs)(n.li,{children:["Image ",(0,s.jsx)(n.code,{children:"qux.com:8000/foo/bar"})," has hostname ",(0,s.jsx)(n.code,{children:"qux.com:8000"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Example registry hostname matching logic:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Hostname ",(0,s.jsx)(n.code,{children:"gcr.io"})," matches image ",(0,s.jsx)(n.code,{children:"gcr.io/foo/bar"})]}),"\n",(0,s.jsxs)(n.li,{children:["Hostname ",(0,s.jsx)(n.code,{children:"docker.io"})," matches ",(0,s.jsx)(n.code,{children:"golang"})]}),"\n",(0,s.jsxs)(n.li,{children:["Hostname ",(0,s.jsx)(n.code,{children:"docker.io"})," matches ",(0,s.jsx)(n.code,{children:"library/golang"})]}),"\n",(0,s.jsxs)(n.li,{children:["Hostname ",(0,s.jsx)(n.code,{children:"docker.io"})," matches ",(0,s.jsx)(n.code,{children:"bradyrydzewski/golang"})]}),"\n",(0,s.jsxs)(n.li,{children:["Hostname ",(0,s.jsx)(n.code,{children:"docker.io"})," matches ",(0,s.jsx)(n.code,{children:"bradyrydzewski/golang:latest"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"global-registry-support",children:"Global registry support"}),"\n",(0,s.jsxs)(n.p,{children:["To make a private registry globally available check the ",(0,s.jsx)(n.a,{href:"/docs/0.15/administration/server-config#global-registry-setting",children:"server configuration docs"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"gcr-registry-support",children:"GCR registry support"}),"\n",(0,s.jsxs)(n.p,{children:["For specific details on configuring access to Google Container Registry, please view the docs ",(0,s.jsx)(n.a,{href:"https://cloud.google.com/container-registry/docs/advanced-authentication#using_a_json_key_file",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"commands",children:(0,s.jsx)(n.code,{children:"commands"})}),"\n",(0,s.jsx)(n.p,{children:"Commands of every pipeline step are executed serially as if you would enter them into your local shell."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:" pipeline:\n   backend:\n     image: golang\n     commands:\n+      - go build\n+      - go test\n"})}),"\n",(0,s.jsx)(n.p,{children:"There is no magic here. The above commands are converted to a simple shell script. The commands in the above example are roughly converted to the below script:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:"#!/bin/sh\nset -e\n\ngo build\ngo test\n"})}),"\n",(0,s.jsx)(n.p,{children:"The above shell script is then executed as the docker entrypoint. The below docker command is an (incomplete) example of how the script is executed:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"docker run --entrypoint=build.sh golang\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Please note that only build steps can define commands. You cannot use commands with plugins or services."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"environment",children:(0,s.jsx)(n.code,{children:"environment"})}),"\n",(0,s.jsx)(n.p,{children:"Woodpecker provides the ability to pass environment variables to individual pipeline steps."}),"\n",(0,s.jsxs)(n.p,{children:["For more details check the ",(0,s.jsx)(n.a,{href:"/docs/0.15/usage/environment",children:"environment docs"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"secrets",children:(0,s.jsx)(n.code,{children:"secrets"})}),"\n",(0,s.jsx)(n.p,{children:"Woodpecker provides the ability to store named parameters external to the Yaml configuration file, in a central secret store. These secrets can be passed to individual steps of the pipeline at runtime."}),"\n",(0,s.jsxs)(n.p,{children:["For more details check the ",(0,s.jsx)(n.a,{href:"/docs/0.15/usage/secrets",children:"secrets docs"}),"."]}),"\n",(0,s.jsxs)(n.h3,{id:"when---conditional-execution",children:[(0,s.jsx)(n.code,{children:"when"})," - Conditional Execution"]}),"\n",(0,s.jsxs)(n.p,{children:["Woodpecker supports defining conditional pipeline steps in the ",(0,s.jsx)(n.code,{children:"when"})," block."]}),"\n",(0,s.jsxs)(n.p,{children:["For more details check the ",(0,s.jsx)(n.a,{href:"/docs/0.15/usage/conditional-execution",children:"Conditional Step Execution"}),"."]}),"\n",(0,s.jsxs)(n.h3,{id:"group---parallel-execution",children:[(0,s.jsx)(n.code,{children:"group"})," - Parallel execution"]}),"\n",(0,s.jsxs)(n.p,{children:["Woodpecker supports parallel step execution for same-machine fan-in and fan-out. Parallel steps are configured using the ",(0,s.jsx)(n.code,{children:"group"})," attribute. This instructs the pipeline runner to execute the named group in parallel."]}),"\n",(0,s.jsx)(n.p,{children:"Example parallel configuration:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:" pipeline:\n   backend:\n+    group: build\n     image: golang\n     commands:\n       - go build\n       - go test\n   frontend:\n+    group: build\n     image: node\n     commands:\n       - npm install\n       - npm run test\n       - npm run build\n   publish:\n     image: plugins/docker\n     repo: octocat/hello-world\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In the above example, the ",(0,s.jsx)(n.code,{children:"frontend"})," and ",(0,s.jsx)(n.code,{children:"backend"})," steps are executed in parallel. The pipeline runner will not execute the ",(0,s.jsx)(n.code,{children:"publish"})," step until the group completes."]}),"\n",(0,s.jsx)(n.h3,{id:"volumes",children:(0,s.jsx)(n.code,{children:"volumes"})}),"\n",(0,s.jsx)(n.p,{children:"Woodpecker gives the ability to define Docker volumes in the Yaml. You can use this parameter to mount files or folders on the host machine into your containers."}),"\n",(0,s.jsxs)(n.p,{children:["For more details check the ",(0,s.jsx)(n.a,{href:"/docs/0.15/usage/volumes",children:"volumes docs"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"detach",children:(0,s.jsx)(n.code,{children:"detach"})}),"\n",(0,s.jsx)(n.p,{children:"Woodpecker gives the ability to detach steps to run them in background until the pipeline finishes."}),"\n",(0,s.jsxs)(n.p,{children:["For more details check the ",(0,s.jsx)(n.a,{href:"/docs/0.15/usage/services#detachment",children:"service docs"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"advanced-configurations",children:"Advanced Configurations"}),"\n",(0,s.jsx)(n.h3,{id:"workspace",children:(0,s.jsx)(n.code,{children:"workspace"})}),"\n",(0,s.jsx)(n.p,{children:"The workspace defines the shared volume and working directory shared by all pipeline steps. The default workspace matches the below pattern, based on your repository url."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"/drone/src/github.com/octocat/hello-world\n"})}),"\n",(0,s.jsx)(n.p,{children:"The workspace can be customized using the workspace block in the Yaml file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:"+workspace:\n+  base: /go\n+  path: src/github.com/octocat/hello-world\n\n pipeline:\n   build:\n     image: golang:latest\n     commands:\n       - go get\n       - go test\n"})}),"\n",(0,s.jsx)(n.p,{children:"The base attribute defines a shared base volume available to all pipeline steps. This ensures your source code, dependencies and compiled binaries are persisted and shared between steps."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:" workspace:\n+  base: /go\n   path: src/github.com/octocat/hello-world\n\n pipeline:\n   deps:\n     image: golang:latest\n     commands:\n       - go get\n       - go test\n   build:\n     image: node:latest\n     commands:\n       - go build\n"})}),"\n",(0,s.jsx)(n.p,{children:"This would be equivalent to the following docker commands:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"docker volume create my-named-volume\n\ndocker run --volume=my-named-volume:/go golang:latest\ndocker run --volume=my-named-volume:/go node:latest\n"})}),"\n",(0,s.jsx)(n.p,{children:"The path attribute defines the working directory of your build. This is where your code is cloned and will be the default working directory of every step in your build process. The path must be relative and is combined with your base path."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:" workspace:\n   base: /go\n+  path: src/github.com/octocat/hello-world\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"git clone https://github.com/octocat/hello-world \\\n  /go/src/github.com/octocat/hello-world\n"})}),"\n",(0,s.jsx)(n.h3,{id:"matrix",children:(0,s.jsx)(n.code,{children:"matrix"})}),"\n",(0,s.jsx)(n.p,{children:"Woodpecker has integrated support for matrix builds. Woodpecker executes a separate build task for each combination in the matrix, allowing you to build and test a single commit against multiple configurations."}),"\n",(0,s.jsxs)(n.p,{children:["For more details check the ",(0,s.jsx)(n.a,{href:"/docs/0.15/usage/matrix-builds",children:"matrix build docs"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"clone",children:(0,s.jsx)(n.code,{children:"clone"})}),"\n",(0,s.jsx)(n.p,{children:"Woodpecker automatically configures a default clone step if not explicitly defined. You can manually configure the clone step in your pipeline for customization:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:"+clone:\n+  git:\n+    image: woodpeckerci/plugin-git\n\n pipeline:\n   build:\n     image: golang\n     commands:\n       - go build\n       - go test\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example configuration to override depth:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:" clone:\n   git:\n     image: woodpeckerci/plugin-git\n+    settings:\n+      partial: false\n+      depth: 50\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example configuration to use a custom clone plugin:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:"clone:\n  git:\n+   image: octocat/custom-git-plugin\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example configuration to clone Mercurial repository:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:" clone:\n   hg:\n+    image: plugins/hg\n+    settings:\n+      path: bitbucket.org/foo/bar\n"})}),"\n",(0,s.jsx)(n.h4,{id:"git-submodules",children:"Git Submodules"}),"\n",(0,s.jsxs)(n.p,{children:["To use the credentials that cloned the repository to clone it's submodules, update ",(0,s.jsx)(n.code,{children:".gitmodules"})," to use ",(0,s.jsx)(n.code,{children:"https"})," instead of ",(0,s.jsx)(n.code,{children:"git"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:' [submodule "my-module"]\n path = my-module\n-url = git@github.com:octocat/my-module.git\n+url = https://github.com/octocat/my-module.git\n'})}),"\n",(0,s.jsxs)(n.p,{children:["To use the ssh git url in ",(0,s.jsx)(n.code,{children:".gitmodules"})," for users cloning with ssh, and also use the https url in Woodpecker, add ",(0,s.jsx)(n.code,{children:"submodule_override"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:" clone:\n   git:\n     image: woodpeckerci/plugin-git\n     settings:\n       recursive: true\n+      submodule_override:\n+        my-module: https://github.com/octocat/my-module.git\n\npipeline:\n  ...\n"})}),"\n",(0,s.jsx)(n.h3,{id:"privileged-mode",children:"Privileged mode"}),"\n",(0,s.jsx)(n.p,{children:"Woodpecker gives the ability to configure privileged mode in the Yaml. You can use this parameter to launch containers with escalated capabilities."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Privileged mode is only available to trusted repositories and for security reasons should only be used in private environments. See ",(0,s.jsx)(n.a,{href:"/docs/0.15/usage/project-settings#trusted",children:"project settings"})," to enable trusted mode."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:' pipeline:\n   build:\n     image: docker\n     environment:\n       - DOCKER_HOST=tcp://docker:2375\n     commands:\n       - docker --tls=false ps\n\n services:\n   docker:\n     image: docker:dind\n     command: [ "--storage-driver=vfs", "--tls=false" ]\n+    privileged: true\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},78034:(e,n,i)=>{var s=i(79474),o=Symbol.for("react.element"),l=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function t(e,n,i){var s,l={},t=null,d=null;for(s in void 0!==i&&(t=""+i),void 0!==n.key&&(t=""+n.key),void 0!==n.ref&&(d=n.ref),n)r.call(n,s)&&!c.hasOwnProperty(s)&&(l[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===l[s]&&(l[s]=n[s]);return{$$typeof:o,type:e,key:t,ref:d,props:l,_owner:a.current}}n.Fragment=l,n.jsx=t,n.jsxs=t},13274:(e,n,i)=>{e.exports=i(78034)},74169:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var s=i(79474);const o={},l=s.createContext(o);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);