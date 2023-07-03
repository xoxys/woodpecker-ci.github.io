"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[7545],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var o=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=o.createContext({}),A=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=A(e.components);return o.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=A(n),k=a,s=u["".concat(d,".").concat(k)]||u[k]||p[k]||r;return n?o.createElement(s,i(i({ref:t},c),{},{components:n})):o.createElement(s,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var A=2;A<r;A++)i[A]=n[A];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},61:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>E,contentTitle:()=>k,default:()=>f,frontMatter:()=>u,metadata:()=>s,toc:()=>m});var o=n(9613),a=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))A.call(t,n)&&c(e,n,t[n]);return e};const u={},k="Agent configuration",s={unversionedId:"administration/agent-config",id:"administration/agent-config",title:"Agent configuration",description:"Agents are configured by the command line or environment variables. At the minimum you need the following information:",source:"@site/docs/30-administration/15-agent-config.md",sourceDirName:"30-administration",slug:"/administration/agent-config",permalink:"/docs/next/administration/agent-config",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/30-administration/15-agent-config.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Bitbucket Server",permalink:"/docs/next/administration/forges/bitbucket_server"},next:{title:"Docker backend",permalink:"/docs/next/administration/backends/docker"}},E={},m=[{value:"Processes per agent",id:"processes-per-agent",level:2},{value:"Agent registration on server",id:"agent-registration-on-server",level:2},{value:"Using system token",id:"using-system-token",level:3},{value:"Using agent token",id:"using-agent-token",level:3},{value:"All agent configuration options",id:"all-agent-configuration-options",level:2},{value:"<code>WOODPECKER_SERVER</code>",id:"woodpecker_server",level:3},{value:"<code>WOODPECKER_USERNAME</code>",id:"woodpecker_username",level:3},{value:"<code>WOODPECKER_AGENT_SECRET</code>",id:"woodpecker_agent_secret",level:3},{value:"<code>WOODPECKER_AGENT_SECRET_FILE</code>",id:"woodpecker_agent_secret_file",level:3},{value:"<code>WOODPECKER_LOG_LEVEL</code>",id:"woodpecker_log_level",level:3},{value:"<code>WOODPECKER_DEBUG_PRETTY</code>",id:"woodpecker_debug_pretty",level:3},{value:"<code>WOODPECKER_DEBUG_NOCOLOR</code>",id:"woodpecker_debug_nocolor",level:3},{value:"<code>WOODPECKER_HOSTNAME</code>",id:"woodpecker_hostname",level:3},{value:"<code>WOODPECKER_AGENT_ID_FILE</code>",id:"woodpecker_agent_id_file",level:3},{value:"<code>WOODPECKER_MAX_WORKFLOWS</code>",id:"woodpecker_max_workflows",level:3},{value:"<code>WOODPECKER_FILTER_LABELS</code>",id:"woodpecker_filter_labels",level:3},{value:"<code>WOODPECKER_HEALTHCHECK</code>",id:"woodpecker_healthcheck",level:3},{value:"<code>WOODPECKER_HEALTHCHECK_ADDR</code>",id:"woodpecker_healthcheck_addr",level:3},{value:"<code>WOODPECKER_KEEPALIVE_TIME</code>",id:"woodpecker_keepalive_time",level:3},{value:"<code>WOODPECKER_KEEPALIVE_TIMEOUT</code>",id:"woodpecker_keepalive_timeout",level:3},{value:"<code>WOODPECKER_GRPC_SECURE</code>",id:"woodpecker_grpc_secure",level:3},{value:"<code>WOODPECKER_GRPC_VERIFY</code>",id:"woodpecker_grpc_verify",level:3},{value:"<code>WOODPECKER_BACKEND</code>",id:"woodpecker_backend",level:3},{value:"<code>WOODPECKER_BACKEND_DOCKER_*</code>",id:"woodpecker_backend_docker_",level:3},{value:"<code>WOODPECKER_BACKEND_SSH_*</code>",id:"woodpecker_backend_ssh_",level:3},{value:"<code>WOODPECKER_BACKEND_K8S_*</code>",id:"woodpecker_backend_k8s_",level:3},{value:"Advanced Settings",id:"advanced-settings",level:2},{value:"<code>WOODPECKER_CONNECT_RETRY_COUNT</code>",id:"woodpecker_connect_retry_count",level:3},{value:"<code>WOODPECKER_CONNECT_RETRY_DELAY</code>",id:"woodpecker_connect_retry_delay",level:3}],g={toc:m};function f(e){var t,a=e,{components:c}=a,u=((e,t)=>{var n={};for(var o in e)d.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&l)for(var o of l(e))t.indexOf(o)<0&&A.call(e,o)&&(n[o]=e[o]);return n})(a,["components"]);return(0,o.kt)("wrapper",(t=p(p({},g),u),r(t,i({components:c,mdxType:"MDXLayout"}))),(0,o.kt)("h1",p({},{id:"agent-configuration"}),"Agent configuration"),(0,o.kt)("p",null,"Agents are configured by the command line or environment variables. At the minimum you need the following information:"),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-diff"}),"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-agent:\n  [...]\n  environment:\n+   - WOODPECKER_SERVER=localhost:9000\n+   - WOODPECKER_AGENT_SECRET=\"your-shared-secret-goes-here\"\n")),(0,o.kt)("p",null,"The following are automatically set and can be overridden:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"WOODPECKER_HOSTNAME if not set, becomes the OS' hostname"),(0,o.kt)("li",{parentName:"ul"},"WOODPECKER_MAX_WORKFLOWS if not set, defaults to 1")),(0,o.kt)("h2",p({},{id:"processes-per-agent"}),"Processes per agent"),(0,o.kt)("p",null,"By default the maximum processes that are run per agent is 1. If required you can add ",(0,o.kt)("inlineCode",{parentName:"p"},"WOODPECKER_MAX_WORKFLOWS")," to increase your parallel processing on a per-agent basis."),(0,o.kt)("pre",null,(0,o.kt)("code",p({parentName:"pre"},{className:"language-diff"}),"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-agent:\n  [...]\n  environment:\n    - WOODPECKER_SERVER=localhost:9000\n    - WOODPECKER_AGENT_SECRET=\"your-shared-secret-goes-here\"\n+   - WOODPECKER_MAX_WORKFLOWS=4\n")),(0,o.kt)("h2",p({},{id:"agent-registration-on-server"}),"Agent registration on server"),(0,o.kt)("p",null,"When the agent starts, it connects to the server using token from ",(0,o.kt)("inlineCode",{parentName:"p"},"WOODPECKER_AGENT_SECRET"),". The server identifies agent and, if such agent doesn't exist, register him.\nThere are two types of token, so would be two ways of agent registration."),(0,o.kt)("h3",p({},{id:"using-system-token"}),"Using system token"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"System token")," is a token that is used system-wide, e. g. when you set the same token in ",(0,o.kt)("inlineCode",{parentName:"p"},"WOODPECKER_AGENT_SECRET")," on both the server and the agents."),(0,o.kt)("p",null,"In that case registration process would be as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"First time Agent communicates with Server using system token;"),(0,o.kt)("li",{parentName:"ol"},"Server registers Agent in DB, generates ID and sends this ID back to Agent;"),(0,o.kt)("li",{parentName:"ol"},"Agent stores ID in a file configured by ",(0,o.kt)("inlineCode",{parentName:"li"},"WOODPECKER_AGENT_ID_FILE"),".")),(0,o.kt)("p",null,"At the following startups Agent uses system token ",(0,o.kt)("strong",{parentName:"p"},"and")," ID."),(0,o.kt)("h3",p({},{id:"using-agent-token"}),"Using agent token"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Agent token")," is a token that is used by only particular agent. This unique token also configured by ",(0,o.kt)("inlineCode",{parentName:"p"},"WOODPECKER_AGENT_SECRET"),", but only on the agent side."),(0,o.kt)("p",null,"In that case you probably doesn't configure ",(0,o.kt)("inlineCode",{parentName:"p"},"WOODPECKER_AGENT_SECRET")," on the server side. The registration process would be as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Administrator registers Agent manually in ",(0,o.kt)("em",{parentName:"li"},"Server settings - Agents - Add agent"),";\n",(0,o.kt)("img",{alt:"Agent creation",src:n(8656).Z,width:"2034",height:"1478"}),(0,o.kt)("img",{alt:"Agent created",src:n(5056).Z,width:"2004",height:"160"})),(0,o.kt)("li",{parentName:"ol"},"The token generated in previous step have to be provided to Agent in ",(0,o.kt)("inlineCode",{parentName:"li"},"WOODPECKER_AGENT_SECRET"),";"),(0,o.kt)("li",{parentName:"ol"},"First time Agent communicates with Server using agent token;"),(0,o.kt)("li",{parentName:"ol"},"Server identifies Agent by the token and fills additional information provided by Agent;\n",(0,o.kt)("img",{alt:"Agent connected",src:n(9254).Z,width:"2012",height:"164"}))),(0,o.kt)("p",null,"At following startups Agent uses own token only."),(0,o.kt)("h2",p({},{id:"all-agent-configuration-options"}),"All agent configuration options"),(0,o.kt)("p",null,"Here is the full list of configuration options and their default variables."),(0,o.kt)("h3",p({},{id:"woodpecker_server"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_SERVER")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:9000"))),(0,o.kt)("p",null,"Configures gRPC address of the server."),(0,o.kt)("h3",p({},{id:"woodpecker_username"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_USERNAME")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"x-oauth-basic"))),(0,o.kt)("p",null,"The gRPC username."),(0,o.kt)("h3",p({},{id:"woodpecker_agent_secret"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_AGENT_SECRET")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,o.kt)("p",null,"A shared secret used by server and agents to authenticate communication. A secret can be generated by ",(0,o.kt)("inlineCode",{parentName:"p"},"openssl rand -hex 32"),"."),(0,o.kt)("h3",p({},{id:"woodpecker_agent_secret_file"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_AGENT_SECRET_FILE")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,o.kt)("p",null,"Read the value for ",(0,o.kt)("inlineCode",{parentName:"p"},"WOODPECKER_AGENT_SECRET")," from the specified filepath, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/woodpecker/agent-secret.conf")),(0,o.kt)("h3",p({},{id:"woodpecker_log_level"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_LOG_LEVEL")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,o.kt)("p",null,"Configures the logging level. Possible values are ",(0,o.kt)("inlineCode",{parentName:"p"},"trace"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"debug"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"info"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"warn"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"error"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"fatal"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"panic"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"disabled")," and empty."),(0,o.kt)("h3",p({},{id:"woodpecker_debug_pretty"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_DEBUG_PRETTY")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"false"))),(0,o.kt)("p",null,"Enable pretty-printed debug output."),(0,o.kt)("h3",p({},{id:"woodpecker_debug_nocolor"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_DEBUG_NOCOLOR")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"true"))),(0,o.kt)("p",null,"Disable colored debug output."),(0,o.kt)("h3",p({},{id:"woodpecker_hostname"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_HOSTNAME")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,o.kt)("p",null,"Configures the agent hostname."),(0,o.kt)("h3",p({},{id:"woodpecker_agent_id_file"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_AGENT_ID_FILE")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/woodpecker/agent-id.conf"))),(0,o.kt)("p",null,"Configures the path of the agent-id.conf file."),(0,o.kt)("h3",p({},{id:"woodpecker_max_workflows"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_MAX_WORKFLOWS")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"1"))),(0,o.kt)("p",null,"Configures the number of parallel workflows."),(0,o.kt)("h3",p({},{id:"woodpecker_filter_labels"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_FILTER_LABELS")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,o.kt)("p",null,"Configures labels to filter pipeline pick up. Use a list of key-value pairs like ",(0,o.kt)("inlineCode",{parentName:"p"},"key=value,second-key=*"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"*")," can be used as a wildcard. By default agents provide three additional labels ",(0,o.kt)("inlineCode",{parentName:"p"},"platform=os/arch"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"hostname=my-agent")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"repo=*")," which can be overwritten if needed. To learn how labels work check out the ",(0,o.kt)("a",p({parentName:"p"},{href:"/docs/next/usage/pipeline-syntax#labels"}),"pipeline syntax page"),"."),(0,o.kt)("h3",p({},{id:"woodpecker_healthcheck"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_HEALTHCHECK")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"true"))),(0,o.kt)("p",null,"Enable healthcheck endpoint."),(0,o.kt)("h3",p({},{id:"woodpecker_healthcheck_addr"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_HEALTHCHECK_ADDR")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},":3000"))),(0,o.kt)("p",null,"Configures healthcheck endpoint address."),(0,o.kt)("h3",p({},{id:"woodpecker_keepalive_time"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_KEEPALIVE_TIME")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,o.kt)("p",null,"After a duration of this time of no activity, the agent pings the server to check if the transport is still alive."),(0,o.kt)("h3",p({},{id:"woodpecker_keepalive_timeout"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_KEEPALIVE_TIMEOUT")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"20s"))),(0,o.kt)("p",null,"After pinging for a keepalive check, the agent waits for a duration of this time before closing the connection if no activity."),(0,o.kt)("h3",p({},{id:"woodpecker_grpc_secure"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GRPC_SECURE")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"false"))),(0,o.kt)("p",null,"Configures if the connection to ",(0,o.kt)("inlineCode",{parentName:"p"},"WOODPECKER_SERVER")," should be made using a secure transport."),(0,o.kt)("h3",p({},{id:"woodpecker_grpc_verify"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GRPC_VERIFY")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"true"))),(0,o.kt)("p",null,"Configures if the gRPC server certificate should be verified, only valid when ",(0,o.kt)("inlineCode",{parentName:"p"},"WOODPECKER_GRPC_SECURE")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("h3",p({},{id:"woodpecker_backend"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_BACKEND")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"auto-detect"))),(0,o.kt)("p",null,"Configures the backend engine to run pipelines on. Possible values are ",(0,o.kt)("inlineCode",{parentName:"p"},"auto-detect"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"docker"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"local"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"kubernetes"),"."),(0,o.kt)("h3",p({},{id:"woodpecker_backend_docker_"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_BACKEND_DOCKER_*")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",p({parentName:"p"},{href:"/docs/next/administration/backends/docker#configuration"}),"Docker backend configuration")),(0,o.kt)("h3",p({},{id:"woodpecker_backend_ssh_"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_BACKEND_SSH_*")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",p({parentName:"p"},{href:"/docs/next/administration/backends/ssh#configuration"}),"SSH backend configuration")),(0,o.kt)("h3",p({},{id:"woodpecker_backend_k8s_"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_BACKEND_K8S_*")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",p({parentName:"p"},{href:"/docs/next/administration/backends/kubernetes#configuration"}),"Kubernetes backend configuration")),(0,o.kt)("h2",p({},{id:"advanced-settings"}),"Advanced Settings"),(0,o.kt)("admonition",p({},{type:"warning"}),(0,o.kt)("p",{parentName:"admonition"},"Only change these If you know what you do.")),(0,o.kt)("h3",p({},{id:"woodpecker_connect_retry_count"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CONNECT_RETRY_COUNT")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"5"))),(0,o.kt)("p",null,"Configures number of times agent retries to connect to the server."),(0,o.kt)("h3",p({},{id:"woodpecker_connect_retry_delay"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_CONNECT_RETRY_DELAY")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"2s"))),(0,o.kt)("p",null,"Configures delay between agent connection retries to the server."))}f.isMDXComponent=!0},9254:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,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"},5056:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,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"},8656:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/new-agent-registration-7b4206770a43af4e97866adbda544258.png"}}]);