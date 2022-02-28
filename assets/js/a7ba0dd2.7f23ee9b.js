"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[9620],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),u=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return o.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},l=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),l=u(t),m=r,k=l["".concat(s,".").concat(m)]||l[m]||d[m]||i;return t?o.createElement(k,c(c({ref:n},p),{},{components:t})):o.createElement(k,c({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=l;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var u=2;u<i;u++)c[u]=t[u];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}l.displayName="MDXCreateElement"},2808:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return l}});var o=t(3117),r=t(102),i=(t(7294),t(3905)),c=["components"],a={},s="Prometheus",u={unversionedId:"administration/prometheus",id:"administration/prometheus",title:"Prometheus",description:"Woodpecker is compatible with Prometheus and exposes a /metrics endpoint. Please note that access to the metrics endpoint is restricted and requires an authorization token with administrative privileges.",source:"@site/docs/30-administration/90-prometheus.md",sourceDirName:"30-administration",slug:"/administration/prometheus",permalink:"/docs/administration/prometheus",editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/30-administration/90-prometheus.md",tags:[],version:"current",sidebarPosition:90,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Kubernetes",permalink:"/docs/administration/kubernetes"},next:{title:"External Configuration API",permalink:"/docs/administration/external-configuration-api"}},p=[{value:"Authorization",id:"authorization",children:[],level:2},{value:"Metric Reference",id:"metric-reference",children:[],level:2}],d={toc:p};function l(e){var n=e.components,t=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"prometheus"},"Prometheus"),(0,i.kt)("p",null,"Woodpecker is compatible with Prometheus and exposes a ",(0,i.kt)("inlineCode",{parentName:"p"},"/metrics")," endpoint. Please note that access to the metrics endpoint is restricted and requires an authorization token with administrative privileges."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"global:\n  scrape_interval: 60s\n\nscrape_configs:\n  - job_name: 'woodpecker'\n    bearer_token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...\n\n    static_configs:\n       - targets: ['woodpecker.domain.com']\n")),(0,i.kt)("h2",{id:"authorization"},"Authorization"),(0,i.kt)("p",null,"An administrator will need to generate a user api token and configure in the prometheus configuration file as a bearer token. Please see the following example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"global:\n  scrape_interval: 60s\n\nscrape_configs:\n  - job_name: 'woodpecker'\n+   bearer_token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...\n\n    static_configs:\n       - targets: ['woodpecker.domain.com']\n")),(0,i.kt)("h2",{id:"metric-reference"},"Metric Reference"),(0,i.kt)("p",null,"List of prometheus metrics specific to Woodpecker:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'# HELP woodpecker_build_count Build count.\n# TYPE woodpecker_build_count counter\nwoodpecker_build_count{branch="master",pipeline="total",repo="woodpecker-ci/woodpecker",status="success"} 3\nwoodpecker_build_count{branch="mkdocs",pipeline="total",repo="woodpecker-ci/woodpecker",status="success"} 3\n# HELP woodpecker_build_time Build time.\n# TYPE woodpecker_build_time gauge\nwoodpecker_build_time{branch="master",pipeline="total",repo="woodpecker-ci/woodpecker",status="success"} 116\nwoodpecker_build_time{branch="mkdocs",pipeline="total",repo="woodpecker-ci/woodpecker",status="success"} 155\n# HELP woodpecker_build_total_count Total number of builds.\n# TYPE woodpecker_build_total_count gauge\nwoodpecker_build_total_count 1025\n# HELP woodpecker_pending_jobs Total number of pending build processes.\n# TYPE woodpecker_pending_jobs gauge\nwoodpecker_pending_jobs 0\n# HELP woodpecker_repo_count Total number of repos.\n# TYPE woodpecker_repo_count gauge\nwoodpecker_repo_count 9\n# HELP woodpecker_running_jobs Total number of running build processes.\n# TYPE woodpecker_running_jobs gauge\nwoodpecker_running_jobs 0\n# HELP woodpecker_user_count Total number of users.\n# TYPE woodpecker_user_count gauge\nwoodpecker_user_count 1\n# HELP woodpecker_waiting_jobs Total number of builds waiting on deps.\n# TYPE woodpecker_waiting_jobs gauge\nwoodpecker_waiting_jobs 0\n# HELP woodpecker_worker_count Total number of workers.\n# TYPE woodpecker_worker_count gauge\nwoodpecker_worker_count 4\n')))}l.isMDXComponent=!0}}]);