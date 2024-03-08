/*! For license information please see 065bfc68.a80b8b4c.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[9847],{51047:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>t});var i=o(13274),r=o(74169);const s={toc_max_heading_level:2},c="Server configuration",d={id:"administration/server-config",title:"Server configuration",description:"User registration",source:"@site/docs/30-administration/10-server-config.md",sourceDirName:"30-administration",slug:"/administration/server-config",permalink:"/docs/next/administration/server-config",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/docs/30-administration/10-server-config.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{toc_max_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"Creating addons",permalink:"/docs/next/administration/addons/creating-addons"},next:{title:"Forges",permalink:"/docs/next/administration/forges/overview"}},l={},t=[{value:"User registration",id:"user-registration",level:2},{value:"Close registration, but allow specific admin users",id:"close-registration-but-allow-specific-admin-users",level:3},{value:"Only allow registration of users, who are members of approved organizations",id:"only-allow-registration-of-users-who-are-members-of-approved-organizations",level:3},{value:"Administrators",id:"administrators",level:2},{value:"Filtering repositories",id:"filtering-repositories",level:2},{value:"Global registry setting",id:"global-registry-setting",level:2},{value:"Handling sensitive data in docker-compose and docker-swarm",id:"handling-sensitive-data-in-docker-compose-and-docker-swarm",level:2},{value:"Custom JavaScript and CSS",id:"custom-javascript-and-css",level:2},{value:"<code>woodpecker.css</code>",id:"woodpeckercss",level:3},{value:"<code>woodpecker.js</code>",id:"woodpeckerjs",level:3},{value:"All server configuration options",id:"all-server-configuration-options",level:2},{value:"<code>WOODPECKER_LOG_LEVEL</code>",id:"woodpecker_log_level",level:3},{value:"<code>WOODPECKER_LOG_FILE</code>",id:"woodpecker_log_file",level:3},{value:"<code>WOODPECKER_LOG_XORM</code>",id:"woodpecker_log_xorm",level:3},{value:"<code>WOODPECKER_LOG_XORM_SQL</code>",id:"woodpecker_log_xorm_sql",level:3},{value:"<code>WOODPECKER_DEBUG_PRETTY</code>",id:"woodpecker_debug_pretty",level:3},{value:"<code>WOODPECKER_DEBUG_NOCOLOR</code>",id:"woodpecker_debug_nocolor",level:3},{value:"<code>WOODPECKER_HOST</code>",id:"woodpecker_host",level:3},{value:"<code>WOODPECKER_WEBHOOK_HOST</code>",id:"woodpecker_webhook_host",level:3},{value:"<code>WOODPECKER_SERVER_ADDR</code>",id:"woodpecker_server_addr",level:3},{value:"<code>WOODPECKER_SERVER_ADDR_TLS</code>",id:"woodpecker_server_addr_tls",level:3},{value:"<code>WOODPECKER_SERVER_CERT</code>",id:"woodpecker_server_cert",level:3},{value:"<code>WOODPECKER_SERVER_KEY</code>",id:"woodpecker_server_key",level:3},{value:"<code>WOODPECKER_CUSTOM_CSS_FILE</code>",id:"woodpecker_custom_css_file",level:3},{value:"<code>WOODPECKER_CUSTOM_JS_FILE</code>",id:"woodpecker_custom_js_file",level:3},{value:"<code>WOODPECKER_LETS_ENCRYPT</code>",id:"woodpecker_lets_encrypt",level:3},{value:"<code>WOODPECKER_GRPC_ADDR</code>",id:"woodpecker_grpc_addr",level:3},{value:"<code>WOODPECKER_GRPC_SECRET</code>",id:"woodpecker_grpc_secret",level:3},{value:"<code>WOODPECKER_GRPC_SECRET_FILE</code>",id:"woodpecker_grpc_secret_file",level:3},{value:"<code>WOODPECKER_METRICS_SERVER_ADDR</code>",id:"woodpecker_metrics_server_addr",level:3},{value:"<code>WOODPECKER_ADMIN</code>",id:"woodpecker_admin",level:3},{value:"<code>WOODPECKER_ORGS</code>",id:"woodpecker_orgs",level:3},{value:"<code>WOODPECKER_REPO_OWNERS</code>",id:"woodpecker_repo_owners",level:3},{value:"<code>WOODPECKER_OPEN</code>",id:"woodpecker_open",level:3},{value:"<code>WOODPECKER_AUTHENTICATE_PUBLIC_REPOS</code>",id:"woodpecker_authenticate_public_repos",level:3},{value:"<code>WOODPECKER_DEFAULT_CANCEL_PREVIOUS_PIPELINE_EVENTS</code>",id:"woodpecker_default_cancel_previous_pipeline_events",level:3},{value:"<code>WOODPECKER_DEFAULT_CLONE_IMAGE</code>",id:"woodpecker_default_clone_image",level:3},{value:"<code>WOODPECKER_DEFAULT_PIPELINE_TIMEOUT</code>",id:"woodpecker_default_pipeline_timeout",level:3},{value:"<code>WOODPECKER_MAX_PIPELINE_TIMEOUT</code>",id:"woodpecker_max_pipeline_timeout",level:3},{value:"<code>WOODPECKER_SESSION_EXPIRES</code>",id:"woodpecker_session_expires",level:3},{value:"<code>WOODPECKER_ESCALATE</code>",id:"woodpecker_escalate",level:3},{value:"<code>WOODPECKER_DOCKER_CONFIG</code>",id:"woodpecker_docker_config",level:3},{value:"<code>WOODPECKER_AGENT_SECRET</code>",id:"woodpecker_agent_secret",level:3},{value:"<code>WOODPECKER_AGENT_SECRET_FILE</code>",id:"woodpecker_agent_secret_file",level:3},{value:"<code>WOODPECKER_KEEPALIVE_MIN_TIME</code>",id:"woodpecker_keepalive_min_time",level:3},{value:"<code>WOODPECKER_DATABASE_DRIVER</code>",id:"woodpecker_database_driver",level:3},{value:"<code>WOODPECKER_DATABASE_DATASOURCE</code>",id:"woodpecker_database_datasource",level:3},{value:"<code>WOODPECKER_DATABASE_DATASOURCE_FILE</code>",id:"woodpecker_database_datasource_file",level:3},{value:"<code>WOODPECKER_PROMETHEUS_AUTH_TOKEN</code>",id:"woodpecker_prometheus_auth_token",level:3},{value:"<code>WOODPECKER_PROMETHEUS_AUTH_TOKEN_FILE</code>",id:"woodpecker_prometheus_auth_token_file",level:3},{value:"<code>WOODPECKER_STATUS_CONTEXT</code>",id:"woodpecker_status_context",level:3},{value:"<code>WOODPECKER_STATUS_CONTEXT_FORMAT</code>",id:"woodpecker_status_context_format",level:3},{value:"<code>WOODPECKER_ADDONS</code>",id:"woodpecker_addons",level:3},{value:"<code>WOODPECKER_LIMIT_MEM_SWAP</code>",id:"woodpecker_limit_mem_swap",level:3},{value:"<code>WOODPECKER_LIMIT_MEM</code>",id:"woodpecker_limit_mem",level:3},{value:"<code>WOODPECKER_LIMIT_SHM_SIZE</code>",id:"woodpecker_limit_shm_size",level:3},{value:"<code>WOODPECKER_LIMIT_CPU_QUOTA</code>",id:"woodpecker_limit_cpu_quota",level:3},{value:"<code>WOODPECKER_LIMIT_CPU_SHARES</code>",id:"woodpecker_limit_cpu_shares",level:3},{value:"<code>WOODPECKER_LIMIT_CPU_SET</code>",id:"woodpecker_limit_cpu_set",level:3},{value:"<code>WOODPECKER_CONFIG_SERVICE_ENDPOINT</code>",id:"woodpecker_config_service_endpoint",level:3},{value:"<code>WOODPECKER_FORGE_TIMEOUT</code>",id:"woodpecker_forge_timeout",level:3},{value:"<code>WOODPECKER_ENABLE_SWAGGER</code>",id:"woodpecker_enable_swagger",level:3},{value:"<code>WOODPECKER_DISABLE_VERSION_CHECK</code>",id:"woodpecker_disable_version_check",level:3},{value:"<code>WOODPECKER_GITHUB_...</code>",id:"woodpecker_github_",level:3},{value:"<code>WOODPECKER_GITEA_...</code>",id:"woodpecker_gitea_",level:3},{value:"<code>WOODPECKER_BITBUCKET_...</code>",id:"woodpecker_bitbucket_",level:3},{value:"<code>WOODPECKER_GITLAB_...</code>",id:"woodpecker_gitlab_",level:3}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"server-configuration",children:"Server configuration"}),"\n",(0,i.jsx)(n.h2,{id:"user-registration",children:"User registration"}),"\n",(0,i.jsxs)(n.p,{children:["Woodpecker does not have its own user registry; users are provided from your ",(0,i.jsx)(n.a,{href:"/docs/next/administration/forges/overview",children:"forge"})," (using OAuth2)."]}),"\n",(0,i.jsxs)(n.p,{children:["Registration is closed by default (",(0,i.jsx)(n.code,{children:"WOODPECKER_OPEN=false"}),"). If registration is open (",(0,i.jsx)(n.code,{children:"WOODPECKER_OPEN=true"}),") then every user with an account at the configured forge can login to Woodpecker."]}),"\n",(0,i.jsx)(n.p,{children:"To open registration:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ini",children:"WOODPECKER_OPEN=true\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can ",(0,i.jsx)(n.strong,{children:"also restrict"})," registration, by keep registration closed and:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"adding"})," new ",(0,i.jsx)(n.strong,{children:"users manually"})," via the CLI: ",(0,i.jsx)(n.code,{children:"woodpecker-cli user add"})]}),"\n",(0,i.jsxs)(n.li,{children:["allowing specific ",(0,i.jsx)(n.strong,{children:"admin users"})," via the ",(0,i.jsx)(n.code,{children:"WOODPECKER_ADMIN"})," setting"]}),"\n",(0,i.jsxs)(n.li,{children:["by open registration and ",(0,i.jsx)(n.strong,{children:"filter by organization"})," membership through the ",(0,i.jsx)(n.code,{children:"WOODPECKER_ORGS"})," setting"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"close-registration-but-allow-specific-admin-users",children:"Close registration, but allow specific admin users"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ini",children:"WOODPECKER_OPEN=false\nWOODPECKER_ADMIN=johnsmith,janedoe\n"})}),"\n",(0,i.jsx)(n.h3,{id:"only-allow-registration-of-users-who-are-members-of-approved-organizations",children:"Only allow registration of users, who are members of approved organizations"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ini",children:"WOODPECKER_OPEN=true\nWOODPECKER_ORGS=dolores,dogpatch\n"})}),"\n",(0,i.jsx)(n.h2,{id:"administrators",children:"Administrators"}),"\n",(0,i.jsx)(n.p,{children:"Administrators should also be enumerated in your configuration."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ini",children:"WOODPECKER_ADMIN=johnsmith,janedoe\n"})}),"\n",(0,i.jsx)(n.h2,{id:"filtering-repositories",children:"Filtering repositories"}),"\n",(0,i.jsx)(n.p,{children:"Woodpecker operates with the user's OAuth permission. Due to the coarse permission handling of GitHub, you may end up syncing more repos into Woodpecker than preferred."}),"\n",(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.code,{children:"WOODPECKER_REPO_OWNERS"})," variable to filter which GitHub user's repos should be synced only. You typically want to put here your company's GitHub name."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ini",children:"WOODPECKER_REPO_OWNERS=mycompany,mycompanyossgithubuser\n"})}),"\n",(0,i.jsx)(n.h2,{id:"global-registry-setting",children:"Global registry setting"}),"\n",(0,i.jsxs)(n.p,{children:["If you want to make available a specific private registry to all pipelines, use the ",(0,i.jsx)(n.code,{children:"WOODPECKER_DOCKER_CONFIG"})," server configuration.\nPoint it to your server's docker config."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ini",children:"WOODPECKER_DOCKER_CONFIG=/root/.docker/config.json\n"})}),"\n",(0,i.jsx)(n.h2,{id:"handling-sensitive-data-in-docker-compose-and-docker-swarm",children:"Handling sensitive data in docker-compose and docker-swarm"}),"\n",(0,i.jsx)(n.p,{children:"To handle sensitive data in docker-compose or docker-swarm configurations there are several options:"}),"\n",(0,i.jsxs)(n.p,{children:["For docker-compose you can use a ",(0,i.jsx)(n.code,{children:".env"})," file next to your compose configuration to store the secrets outside of the compose file. While this separates configuration from secrets it is still not very secure."]}),"\n",(0,i.jsxs)(n.p,{children:["Alternatively use docker-secrets. As it may be difficult to use docker secrets for environment variables woodpecker allows to read sensible data from files by providing a ",(0,i.jsx)(n.code,{children:"*_FILE"})," option of all sensible configuration variables. Woodpecker will try to read the value directly from this file. Keep in mind that when the original environment variable gets specified at the same time it will override the value read from the file."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",metastring:'title="docker-compose.yaml"',children:" version: '3'\n\n services:\n   woodpecker-server:\n     [...]\n     environment:\n       - [...]\n+      - WOODPECKER_AGENT_SECRET_FILE=/run/secrets/woodpecker-agent-secret\n+    secrets:\n+      - woodpecker-agent-secret\n+\n+ secrets:\n+   woodpecker-agent-secret:\n+     external: true\n"})}),"\n",(0,i.jsx)(n.p,{children:"Store a value to a docker secret like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'echo "my_agent_secret_key" | docker secret create woodpecker-agent-secret -\n'})}),"\n",(0,i.jsx)(n.p,{children:"or generate a random one like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"openssl rand -hex 32 | docker secret create woodpecker-agent-secret -\n"})}),"\n",(0,i.jsx)(n.h2,{id:"custom-javascript-and-css",children:"Custom JavaScript and CSS"}),"\n",(0,i.jsx)(n.p,{children:"Woodpecker supports custom JS and CSS files.\nThese files must be present in the server's filesystem.\nThey can be backed in a Docker image or mounted from a ConfigMap inside a Kubernetes environment.\nThe configuration variables are independent of each other, which means it can be just one file present, or both."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ini",children:"WOODPECKER_CUSTOM_CSS_FILE=/usr/local/www/woodpecker.css\nWOODPECKER_CUSTOM_JS_FILE=/usr/local/www/woodpecker.js\n"})}),"\n",(0,i.jsx)(n.p,{children:"The examples below show how to place a banner message in the top navigation bar of Woodpecker."}),"\n",(0,i.jsx)(n.h3,{id:"woodpeckercss",children:(0,i.jsx)(n.code,{children:"woodpecker.css"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".banner-message {\n  position: absolute;\n  width: 280px;\n  height: 40px;\n  margin-left: 240px;\n  margin-top: 5px;\n  padding-top: 5px;\n  font-weight: bold;\n  background: red no-repeat;\n  text-align: center;\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"woodpeckerjs",children:(0,i.jsx)(n.code,{children:"woodpecker.js"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"// place/copy a minified version of jQuery or ZeptoJS here ...\n!(function () {\n  'use strict';\n  function e() {} /*...*/\n})();\n\n$().ready(function () {\n  $('.app nav img').first().htmlAfter(\"<div class='banner-message'>This is a demo banner message :)</div>\");\n});\n"})}),"\n",(0,i.jsx)(n.h2,{id:"all-server-configuration-options",children:"All server configuration options"}),"\n",(0,i.jsx)(n.p,{children:"The following list describes all available server configuration options."}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_log_level",children:(0,i.jsx)(n.code,{children:"WOODPECKER_LOG_LEVEL"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Default: empty"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Configures the logging level. Possible values are ",(0,i.jsx)(n.code,{children:"trace"}),", ",(0,i.jsx)(n.code,{children:"debug"}),", ",(0,i.jsx)(n.code,{children:"info"}),", ",(0,i.jsx)(n.code,{children:"warn"}),", ",(0,i.jsx)(n.code,{children:"error"}),", ",(0,i.jsx)(n.code,{children:"fatal"}),", ",(0,i.jsx)(n.code,{children:"panic"}),", ",(0,i.jsx)(n.code,{children:"disabled"})," and empty."]}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_log_file",children:(0,i.jsx)(n.code,{children:"WOODPECKER_LOG_FILE"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Default: ",(0,i.jsx)(n.code,{children:"stderr"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Output destination for logs.\n'stdout' and 'stderr' can be used as special keywords."}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_log_xorm",children:(0,i.jsx)(n.code,{children:"WOODPECKER_LOG_XORM"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Default: ",(0,i.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Enable XORM logs."}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_log_xorm_sql",children:(0,i.jsx)(n.code,{children:"WOODPECKER_LOG_XORM_SQL"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Default: ",(0,i.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Enable XORM SQL command logs."}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_debug_pretty",children:(0,i.jsx)(n.code,{children:"WOODPECKER_DEBUG_PRETTY"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Default: ",(0,i.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Enable pretty-printed debug output."}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_debug_nocolor",children:(0,i.jsx)(n.code,{children:"WOODPECKER_DEBUG_NOCOLOR"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Default: ",(0,i.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Disable colored debug output."}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_host",children:(0,i.jsx)(n.code,{children:"WOODPECKER_HOST"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Default: empty"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Server fully qualified URL of the user-facing hostname, port (if not default for HTTP/HTTPS) and path prefix."}),"\n",(0,i.jsx)(n.p,{children:"Examples:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"WOODPECKER_HOST=http://woodpecker.example.org"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"WOODPECKER_HOST=http://example.org/woodpecker"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"WOODPECKER_HOST=http://example.org:1234/woodpecker"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_webhook_host",children:(0,i.jsx)(n.code,{children:"WOODPECKER_WEBHOOK_HOST"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Default: value from ",(0,i.jsx)(n.code,{children:"WOODPECKER_HOST"})," config env"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Server fully qualified URL of the Webhook-facing hostname and path prefix."}),"\n",(0,i.jsxs)(n.p,{children:["Example: ",(0,i.jsx)(n.code,{children:"WOODPECKER_WEBHOOK_HOST=http://woodpecker-server.cicd.svc.cluster.local:8000"})]}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_server_addr",children:(0,i.jsx)(n.code,{children:"WOODPECKER_SERVER_ADDR"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Default: ",(0,i.jsx)(n.code,{children:":8000"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Configures the HTTP listener port."}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_server_addr_tls",children:(0,i.jsx)(n.code,{children:"WOODPECKER_SERVER_ADDR_TLS"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Default: ",(0,i.jsx)(n.code,{children:":443"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Configures the HTTPS listener port when SSL is enabled."}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_server_cert",children:(0,i.jsx)(n.code,{children:"WOODPECKER_SERVER_CERT"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Default: empty"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Path to an SSL certificate used by the server to accept HTTPS requests."}),"\n",(0,i.jsxs)(n.p,{children:["Example: ",(0,i.jsx)(n.code,{children:"WOODPECKER_SERVER_CERT=/path/to/cert.pem"})]}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_server_key",children:(0,i.jsx)(n.code,{children:"WOODPECKER_SERVER_KEY"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Default: empty"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Path to an SSL certificate key used by the server to accept HTTPS requests."}),"\n",(0,i.jsxs)(n.p,{children:["Example: ",(0,i.jsx)(n.code,{children:"WOODPECKER_SERVER_KEY=/path/to/key.pem"})]}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_custom_css_file",children:(0,i.jsx)(n.code,{children:"WOODPECKER_CUSTOM_CSS_FILE"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Default: empty"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"File path for the server to serve a custom .CSS file, used for customizing the UI.\nCan be used for showing banner messages, logos, or environment-specific hints (a.k.a. white-labeling).\nThe file must be UTF-8 encoded, to ensure all special characters are preserved."}),"\n",(0,i.jsxs)(n.p,{children:["Example: ",(0,i.jsx)(n.code,{children:"WOODPECKER_CUSTOM_CSS_FILE=/usr/local/www/woodpecker.css"})]}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_custom_js_file",children:(0,i.jsx)(n.code,{children:"WOODPECKER_CUSTOM_JS_FILE"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Default: empty"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"File path for the server to serve a custom .JS file, used for customizing the UI.\nCan be used for showing banner messages, logos, or environment-specific hints (a.k.a. white-labeling).\nThe file must be UTF-8 encoded, to ensure all special characters are preserved."}),"\n",(0,i.jsxs)(n.p,{children:["Example: ",(0,i.jsx)(n.code,{children:"WOODPECKER_CUSTOM_JS_FILE=/usr/local/www/woodpecker.js"})]}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_lets_encrypt",children:(0,i.jsx)(n.code,{children:"WOODPECKER_LETS_ENCRYPT"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Default: ",(0,i.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Automatically generates an SSL certificate using Let's Encrypt, and configures the server to accept HTTPS requests."}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_grpc_addr",children:(0,i.jsx)(n.code,{children:"WOODPECKER_GRPC_ADDR"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Default: ",(0,i.jsx)(n.code,{children:":9000"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Configures the gRPC listener port."}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_grpc_secret",children:(0,i.jsx)(n.code,{children:"WOODPECKER_GRPC_SECRET"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Default: ",(0,i.jsx)(n.code,{children:"secret"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Configures the gRPC JWT secret."}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_grpc_secret_file",children:(0,i.jsx)(n.code,{children:"WOODPECKER_GRPC_SECRET_FILE"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Default: empty"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Read the value for ",(0,i.jsx)(n.code,{children:"WOODPECKER_GRPC_SECRET"})," from the specified filepath."]}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_metrics_server_addr",children:(0,i.jsx)(n.code,{children:"WOODPECKER_METRICS_SERVER_ADDR"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Default: empty"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Configures an unprotected metrics endpoint. An empty value disables the metrics endpoint completely."}),"\n",(0,i.jsxs)(n.p,{children:["Example: ",(0,i.jsx)(n.code,{children:":9001"})]}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_admin",children:(0,i.jsx)(n.code,{children:"WOODPECKER_ADMIN"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Default: empty"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Comma-separated list of admin accounts."}),"\n",(0,i.jsxs)(n.p,{children:["Example: ",(0,i.jsx)(n.code,{children:"WOODPECKER_ADMIN=user1,user2"})]}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_orgs",children:(0,i.jsx)(n.code,{children:"WOODPECKER_ORGS"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Default: empty"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Comma-separated list of approved organizations."}),"\n",(0,i.jsxs)(n.p,{children:["Example: ",(0,i.jsx)(n.code,{children:"org1,org2"})]}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_repo_owners",children:(0,i.jsx)(n.code,{children:"WOODPECKER_REPO_OWNERS"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Default: empty"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Comma-separated list of syncable repo owners. ???"}),"\n",(0,i.jsxs)(n.p,{children:["Example: ",(0,i.jsx)(n.code,{children:"user1,user2"})]}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_open",children:(0,i.jsx)(n.code,{children:"WOODPECKER_OPEN"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Default: ",(0,i.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Enable to allow user registration."}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_authenticate_public_repos",children:(0,i.jsx)(n.code,{children:"WOODPECKER_AUTHENTICATE_PUBLIC_REPOS"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Default: ",(0,i.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Always use authentication to clone repositories even if they are public. Needed if the forge requires to always authenticate as used by many companies."}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_default_cancel_previous_pipeline_events",children:(0,i.jsx)(n.code,{children:"WOODPECKER_DEFAULT_CANCEL_PREVIOUS_PIPELINE_EVENTS"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Default: ",(0,i.jsx)(n.code,{children:"pull_request, push"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"List of event names that will be canceled when a new pipeline for the same context (tag, branch) is created."}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_default_clone_image",children:(0,i.jsx)(n.code,{children:"WOODPECKER_DEFAULT_CLONE_IMAGE"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Default is defined in ",(0,i.jsx)(n.a,{href:"https://github.com/woodpecker-ci/woodpecker/blob/main/shared/constant/constant.go",children:"shared/constant/constant.go"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The default docker image to be used when cloning the repo"}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_default_pipeline_timeout",children:(0,i.jsx)(n.code,{children:"WOODPECKER_DEFAULT_PIPELINE_TIMEOUT"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"60 (minutes)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The default time for a repo in minutes before a pipeline gets killed"}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_max_pipeline_timeout",children:(0,i.jsx)(n.code,{children:"WOODPECKER_MAX_PIPELINE_TIMEOUT"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"120 (minutes)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The maximum time in minutes you can set in the repo settings before a pipeline gets killed"}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_session_expires",children:(0,i.jsx)(n.code,{children:"WOODPECKER_SESSION_EXPIRES"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Default: ",(0,i.jsx)(n.code,{children:"72h"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Configures the session expiration time.\nContext: when someone does log into Woodpecker, a temporary session token is created.\nAs long as the session is valid (until it expires or log-out),\na user can log into Woodpecker, without re-authentication."}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_escalate",children:(0,i.jsx)(n.code,{children:"WOODPECKER_ESCALATE"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Defaults are defined in ",(0,i.jsx)(n.a,{href:"https://github.com/woodpecker-ci/woodpecker/blob/main/shared/constant/constant.go",children:"shared/constant/constant.go"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Docker images to run in privileged mode. Only change if you are sure what you do!"}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_docker_config",children:(0,i.jsx)(n.code,{children:"WOODPECKER_DOCKER_CONFIG"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Default: empty"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Configures a specific private registry config for all pipelines."}),"\n",(0,i.jsxs)(n.p,{children:["Example: ",(0,i.jsx)(n.code,{children:"WOODPECKER_DOCKER_CONFIG=/home/user/.docker/config.json"})]}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_agent_secret",children:(0,i.jsx)(n.code,{children:"WOODPECKER_AGENT_SECRET"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Default: empty"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["A shared secret used by server and agents to authenticate communication. A secret can be generated by ",(0,i.jsx)(n.code,{children:"openssl rand -hex 32"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_agent_secret_file",children:(0,i.jsx)(n.code,{children:"WOODPECKER_AGENT_SECRET_FILE"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Default: empty"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Read the value for ",(0,i.jsx)(n.code,{children:"WOODPECKER_AGENT_SECRET"})," from the specified filepath"]}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_keepalive_min_time",children:(0,i.jsx)(n.code,{children:"WOODPECKER_KEEPALIVE_MIN_TIME"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Default: empty"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Server-side enforcement policy on the minimum amount of time a client should wait before sending a keepalive ping."}),"\n",(0,i.jsxs)(n.p,{children:["Example: ",(0,i.jsx)(n.code,{children:"WOODPECKER_KEEPALIVE_MIN_TIME=10s"})]}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_database_driver",children:(0,i.jsx)(n.code,{children:"WOODPECKER_DATABASE_DRIVER"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Default: ",(0,i.jsx)(n.code,{children:"sqlite3"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The database driver name. Possible values are ",(0,i.jsx)(n.code,{children:"sqlite3"}),", ",(0,i.jsx)(n.code,{children:"mysql"})," or ",(0,i.jsx)(n.code,{children:"postgres"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_database_datasource",children:(0,i.jsx)(n.code,{children:"WOODPECKER_DATABASE_DATASOURCE"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Default: ",(0,i.jsx)(n.code,{children:"woodpecker.sqlite"})," if not running inside a container, ",(0,i.jsx)(n.code,{children:"/var/lib/woodpecker/woodpecker.sqlite"})," if running inside a container"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The database connection string. The default value is the path of the embedded SQLite database file."}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# MySQL\n# https://github.com/go-sql-driver/mysql#dsn-data-source-name\nWOODPECKER_DATABASE_DATASOURCE=root:password@tcp(1.2.3.4:3306)/woodpecker?parseTime=true\n\n# PostgreSQL\n# https://www.postgresql.org/docs/current/static/libpq-connect.html#LIBPQ-CONNSTRING\nWOODPECKER_DATABASE_DATASOURCE=postgres://root:password@1.2.3.4:5432/woodpecker?sslmode=disable\n"})}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_database_datasource_file",children:(0,i.jsx)(n.code,{children:"WOODPECKER_DATABASE_DATASOURCE_FILE"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Default: empty"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Read the value for ",(0,i.jsx)(n.code,{children:"WOODPECKER_DATABASE_DATASOURCE"})," from the specified filepath"]}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_prometheus_auth_token",children:(0,i.jsx)(n.code,{children:"WOODPECKER_PROMETHEUS_AUTH_TOKEN"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Default: empty"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Token to secure the Prometheus metrics endpoint.\nMust be set to enable the endpoint."}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_prometheus_auth_token_file",children:(0,i.jsx)(n.code,{children:"WOODPECKER_PROMETHEUS_AUTH_TOKEN_FILE"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Default: empty"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Read the value for ",(0,i.jsx)(n.code,{children:"WOODPECKER_PROMETHEUS_AUTH_TOKEN"})," from the specified filepath"]}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_status_context",children:(0,i.jsx)(n.code,{children:"WOODPECKER_STATUS_CONTEXT"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Default: ",(0,i.jsx)(n.code,{children:"ci/woodpecker"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Context prefix Woodpecker will use to publish status messages to SCM. You probably will only need to change it if you run multiple Woodpecker instances for a single repository."}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_status_context_format",children:(0,i.jsx)(n.code,{children:"WOODPECKER_STATUS_CONTEXT_FORMAT"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Default: ",(0,i.jsx)(n.code,{children:"{{ .context }}/{{ .event }}/{{ .workflow }}{{if not (eq .axis_id 0)}}/{{.axis_id}}{{end}}"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Template for the status messages published to forges, uses ",(0,i.jsx)(n.a,{href:"https://pkg.go.dev/text/template",children:"Go templates"})," as template language.\nSupported variables:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"context"}),": Woodpecker's context (see ",(0,i.jsx)(n.code,{children:"WOODPECKER_STATUS_CONTEXT"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"event"}),": the event which started the pipeline"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"workflow"}),": the workflow's name"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"owner"}),": the repo's owner"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"repo"}),": the repo's name"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_addons",children:(0,i.jsx)(n.code,{children:"WOODPECKER_ADDONS"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Default: empty"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["List of addon files. See ",(0,i.jsx)(n.a,{href:"/docs/next/administration/addons/overview",children:"addons"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_limit_mem_swap",children:(0,i.jsx)(n.code,{children:"WOODPECKER_LIMIT_MEM_SWAP"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Default: ",(0,i.jsx)(n.code,{children:"0"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The maximum amount of memory a single pipeline container is allowed to swap to disk, configured in bytes. There is no limit if ",(0,i.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_limit_mem",children:(0,i.jsx)(n.code,{children:"WOODPECKER_LIMIT_MEM"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Default: ",(0,i.jsx)(n.code,{children:"0"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The maximum amount of memory a single pipeline container can use, configured in bytes. There is no limit if ",(0,i.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_limit_shm_size",children:(0,i.jsx)(n.code,{children:"WOODPECKER_LIMIT_SHM_SIZE"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Default: ",(0,i.jsx)(n.code,{children:"0"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The maximum amount of memory of ",(0,i.jsx)(n.code,{children:"/dev/shm"})," allowed in bytes. There is no limit if ",(0,i.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_limit_cpu_quota",children:(0,i.jsx)(n.code,{children:"WOODPECKER_LIMIT_CPU_QUOTA"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Default: ",(0,i.jsx)(n.code,{children:"0"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The number of microseconds per CPU period that the container is limited to before throttled. There is no limit if ",(0,i.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_limit_cpu_shares",children:(0,i.jsx)(n.code,{children:"WOODPECKER_LIMIT_CPU_SHARES"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Default: ",(0,i.jsx)(n.code,{children:"0"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The relative weight vs. other containers."}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_limit_cpu_set",children:(0,i.jsx)(n.code,{children:"WOODPECKER_LIMIT_CPU_SET"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Default: empty"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Comma-separated list to limit the specific CPUs or cores a pipeline container can use."}),"\n",(0,i.jsxs)(n.p,{children:["Example: ",(0,i.jsx)(n.code,{children:"WOODPECKER_LIMIT_CPU_SET=1,2"})]}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_config_service_endpoint",children:(0,i.jsx)(n.code,{children:"WOODPECKER_CONFIG_SERVICE_ENDPOINT"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Default: empty"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Specify a configuration service endpoint, see ",(0,i.jsx)(n.a,{href:"/docs/next/administration/external-configuration-api",children:"Configuration Extension"})]}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_forge_timeout",children:(0,i.jsx)(n.code,{children:"WOODPECKER_FORGE_TIMEOUT"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Default: 3s"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Specify timeout when fetching the Woodpecker configuration from forge. See ",(0,i.jsx)(n.a,{href:"https://pkg.go.dev/time#ParseDuration",children:"https://pkg.go.dev/time#ParseDuration"})," for syntax reference."]}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_enable_swagger",children:(0,i.jsx)(n.code,{children:"WOODPECKER_ENABLE_SWAGGER"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Default: true"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Enable the Swagger UI for API documentation."}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_disable_version_check",children:(0,i.jsx)(n.code,{children:"WOODPECKER_DISABLE_VERSION_CHECK"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Default: false"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Disable version check in admin web UI."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_github_",children:(0,i.jsx)(n.code,{children:"WOODPECKER_GITHUB_..."})}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"/docs/next/administration/forges/github#configuration",children:"GitHub configuration"})]}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_gitea_",children:(0,i.jsx)(n.code,{children:"WOODPECKER_GITEA_..."})}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"/docs/next/administration/forges/gitea#configuration",children:"Gitea configuration"})]}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_bitbucket_",children:(0,i.jsx)(n.code,{children:"WOODPECKER_BITBUCKET_..."})}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"/docs/next/administration/forges/bitbucket#configuration",children:"Bitbucket configuration"})]}),"\n",(0,i.jsx)(n.h3,{id:"woodpecker_gitlab_",children:(0,i.jsx)(n.code,{children:"WOODPECKER_GITLAB_..."})}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"/docs/next/administration/forges/gitlab#configuration",children:"Gitlab configuration"})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},78034:(e,n,o)=>{var i=o(79474),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function t(e,n,o){var i,s={},t=null,a=null;for(i in void 0!==o&&(t=""+o),void 0!==n.key&&(t=""+n.key),void 0!==n.ref&&(a=n.ref),n)c.call(n,i)&&!l.hasOwnProperty(i)&&(s[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===s[i]&&(s[i]=n[i]);return{$$typeof:r,type:e,key:t,ref:a,props:s,_owner:d.current}}n.Fragment=s,n.jsx=t,n.jsxs=t},13274:(e,n,o)=>{e.exports=o(78034)},74169:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>d});var i=o(79474);const r={},s=i.createContext(r);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);