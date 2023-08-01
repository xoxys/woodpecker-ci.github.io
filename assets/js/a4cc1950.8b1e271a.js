"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[9129],{49613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var o=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),f=a,m=c["".concat(s,".").concat(f)]||c[f]||u[f]||r;return t?o.createElement(m,i(i({ref:n},d),{},{components:t})):o.createElement(m,i({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},11074:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>k,default:()=>v,frontMatter:()=>m,metadata:()=>w,toc:()=>h});var o=t(49613),a=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,c=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&d(e,t,n[t]);if(l)for(var t of l(n))p.call(n,t)&&d(e,t,n[t]);return e},u=(e,n)=>r(e,i(n)),f=(e,n)=>{var t={};for(var o in e)s.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&l)for(var o of l(e))n.indexOf(o)<0&&p.call(e,o)&&(t[o]=e[o]);return t};const m={},k="Workflows",w={unversionedId:"usage/workflows",id:"version-1.0/usage/workflows",title:"Workflows",description:"This Feature is only available for GitHub, Gitea & GitLab repositories. Follow this issue to support further development.",source:"@site/versioned_docs/version-1.0/20-usage/25-workflows.md",sourceDirName:"20-usage",slug:"/usage/workflows",permalink:"/docs/usage/workflows",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-1.0/20-usage/25-workflows.md",tags:[],version:"1.0",sidebarPosition:25,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pipeline syntax",permalink:"/docs/usage/pipeline-syntax"},next:{title:"Matrix workflows",permalink:"/docs/usage/matrix-workflows"}},g={},h=[{value:"Benefits of using workflows",id:"benefits-of-using-workflows",level:2},{value:"Example workflow definition",id:"example-workflow-definition",level:2},{value:"Status lines",id:"status-lines",level:2},{value:"Flow control",id:"flow-control",level:2}],y={toc:h},b="wrapper";function v(e){var n=e,{components:t}=n,a=f(n,["components"]);return(0,o.kt)(b,u(c(c({},y),a),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",c({},{id:"workflows"}),"Workflows"),(0,o.kt)("admonition",c({},{type:"info"}),(0,o.kt)("p",{parentName:"admonition"},"This Feature is only available for GitHub, Gitea & GitLab repositories. Follow ",(0,o.kt)("a",c({parentName:"p"},{href:"https://github.com/woodpecker-ci/woodpecker/issues/1138"}),"this")," issue to support further development.")),(0,o.kt)("p",null,"A pipeline has at least one workflow. A workflow is a set of steps that are executed in sequence using the same workspace which is a shared folder containing the repository and all the generated data from previous steps."),(0,o.kt)("p",null,"Incase there is a single configuration in ",(0,o.kt)("inlineCode",{parentName:"p"},".woodpecker.yml")," Woodpecker will create a pipeline with a single workflow."),(0,o.kt)("p",null,"By placing the configurations in a folder which is by default named ",(0,o.kt)("inlineCode",{parentName:"p"},".woodpecker/")," Woodpecker will create a pipeline with multiple workflows each named by the file they are defined in. Only ",(0,o.kt)("inlineCode",{parentName:"p"},".yml")," and ",(0,o.kt)("inlineCode",{parentName:"p"},".yaml")," files will be used and files in any subfolders like ",(0,o.kt)("inlineCode",{parentName:"p"},".woodpecker/sub-folder/test.yml")," will be ignored."),(0,o.kt)("p",null,"You can also set some custom path like ",(0,o.kt)("inlineCode",{parentName:"p"},".my-ci/pipelines/")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},".woodpecker/")," in the ",(0,o.kt)("a",c({parentName:"p"},{href:"/docs/usage/project-settings"}),"project settings"),"."),(0,o.kt)("h2",c({},{id:"benefits-of-using-workflows"}),"Benefits of using workflows"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"faster lint/test feedback, the workflow doesn't have to run fully to have a lint status pushed to the remote"),(0,o.kt)("li",{parentName:"ul"},"better organization of a pipeline along various concerns using one workflow for: testing, linting, building and deploying"),(0,o.kt)("li",{parentName:"ul"},"utilizing more agents to speed up the execution of the whole pipeline")),(0,o.kt)("h2",c({},{id:"example-workflow-definition"}),"Example workflow definition"),(0,o.kt)("admonition",c({},{type:"warning"}),(0,o.kt)("p",{parentName:"admonition"},"Please note that files are only shared between steps of the same workflow (see ",(0,o.kt)("a",c({parentName:"p"},{href:"/docs/usage/pipeline-syntax#file-changes-are-incremental"}),"File changes are incremental"),"). That means you cannot access artifacts e.g. from the ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," workflow in the ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy")," workflow.\nIf you still need to pass artifacts between the workflows you need use some storage ",(0,o.kt)("a",c({parentName:"p"},{href:"/docs/usage/plugins/plugins"}),"plugin")," (e.g. one which stores files in an Amazon S3 bucket).")),(0,o.kt)("pre",null,(0,o.kt)("code",c({parentName:"pre"},{className:"language-bash"}),".woodpecker/\n\u251c\u2500\u2500 .build.yml\n\u251c\u2500\u2500 .deploy.yml\n\u251c\u2500\u2500 .lint.yml\n\u2514\u2500\u2500 .test.yml\n")),(0,o.kt)("p",null,".woodpecker/.build.yml"),(0,o.kt)("pre",null,(0,o.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),"steps:\n  build:\n    image: debian:stable-slim\n    commands:\n      - echo building\n      - sleep 5\n")),(0,o.kt)("p",null,".woodpecker/.deploy.yml"),(0,o.kt)("pre",null,(0,o.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),"steps:\n  deploy:\n    image: debian:stable-slim\n    commands:\n      - echo deploying\n\ndepends_on:\n  - lint\n  - build\n  - test\n")),(0,o.kt)("p",null,".woodpecker/.test.yml"),(0,o.kt)("pre",null,(0,o.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),"steps:\n  test:\n    image: debian:stable-slim\n    commands:\n      - echo testing\n      - sleep 5\n\ndepends_on:\n  - build\n")),(0,o.kt)("p",null,".woodpecker/.lint.yml"),(0,o.kt)("pre",null,(0,o.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),"steps:\n  lint:\n    image: debian:stable-slim\n    commands:\n      - echo linting\n      - sleep 5\n")),(0,o.kt)("h2",c({},{id:"status-lines"}),"Status lines"),(0,o.kt)("p",null,"Each workflow will report its own status back to your forge."),(0,o.kt)("h2",c({},{id:"flow-control"}),"Flow control"),(0,o.kt)("p",null,"The workflows run in parallel on separate agents and share nothing."),(0,o.kt)("p",null,"Dependencies between workflows can be set with the ",(0,o.kt)("inlineCode",{parentName:"p"},"depends_on")," element. A workflow doesn't execute until all of its dependencies finished successfully."),(0,o.kt)("p",null,"The name for a ",(0,o.kt)("inlineCode",{parentName:"p"},"depends_on")," entry is the filename without the path, leading dots and without the file extension ",(0,o.kt)("inlineCode",{parentName:"p"},".yml")," or ",(0,o.kt)("inlineCode",{parentName:"p"},".yaml"),". If the project config for example uses ",(0,o.kt)("inlineCode",{parentName:"p"},".woodpecker/")," as path for CI files with a file named ",(0,o.kt)("inlineCode",{parentName:"p"},".woodpecker/.lint.yml")," the corresponding ",(0,o.kt)("inlineCode",{parentName:"p"},"depends_on")," entry would be ",(0,o.kt)("inlineCode",{parentName:"p"},"lint"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",c({parentName:"pre"},{className:"language-diff"}),"steps:\n  deploy:\n    image: debian:stable-slim\n    commands:\n      - echo deploying\n\n+depends_on:\n+  - lint\n+  - build\n+  - test\n")),(0,o.kt)("p",null,"Workflows that need to run even on failures should set the ",(0,o.kt)("inlineCode",{parentName:"p"},"runs_on")," tag."),(0,o.kt)("pre",null,(0,o.kt)("code",c({parentName:"pre"},{className:"language-diff"}),"steps:\n  notify:\n    image: debian:stable-slim\n    commands:\n      - echo notifying\n\ndepends_on:\n  - deploy\n\n+runs_on: [ success, failure ]\n")),(0,o.kt)("admonition",c({},{type:"info"}),(0,o.kt)("p",{parentName:"admonition"},"Some workflows don't need the source code, like creating a notification on failure.\nRead more about ",(0,o.kt)("inlineCode",{parentName:"p"},"skip_clone")," at ",(0,o.kt)("a",c({parentName:"p"},{href:"/docs/usage/pipeline-syntax#skip_clone"}),"pipeline syntax"))))}v.isMDXComponent=!0}}]);