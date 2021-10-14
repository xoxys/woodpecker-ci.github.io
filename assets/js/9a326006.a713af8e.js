"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[150],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(t),m=a,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(k,s(s({ref:n},p),{},{components:t})):r.createElement(k,s({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1787:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),s=["components"],i={},c="Kubernetes",l={unversionedId:"administration/kubernetes",id:"administration/kubernetes",isDocsHomePage:!1,title:"Kubernetes",description:"Woodpecker does not support Kubernetes natively, but being a container first CI engine, it can be deployed to Kubernetes.",source:"@site/docs/30-administration/80-kubernetes.md",sourceDirName:"30-administration",slug:"/administration/kubernetes",permalink:"/docs/administration/kubernetes",editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/30-administration/80-kubernetes.md",tags:[],version:"current",sidebarPosition:80,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Proxy",permalink:"/docs/administration/proxy"},next:{title:"Prometheus",permalink:"/docs/administration/prometheus"}},p=[{value:"Deploy with HELM",id:"deploy-with-helm",children:[{value:"Preparation",id:"preparation",children:[]},{value:"Woodpecker server",id:"woodpecker-server",children:[]},{value:"Woodpecker agent",id:"woodpecker-agent",children:[]}]},{value:"Deploy with kubectl",id:"deploy-with-kubectl",children:[]}],d={toc:p};function u(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kubernetes"},"Kubernetes"),(0,o.kt)("p",null,"Woodpecker does not support Kubernetes natively, but being a container first CI engine, it can be deployed to Kubernetes."),(0,o.kt)("h2",{id:"deploy-with-helm"},"Deploy with HELM"),(0,o.kt)("h3",{id:"preparation"},"Preparation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# create secrets\nkubectl create secret generic woodpecker-secret \\\n  --namespace <namespace> \\\n  --from-literal=WOODPECKER_AGENT_SECRET=$(openssl rand -hex 32)\n\nkubectl create secret generic woodpecker-github-client \\\n  --namespace <namespace> \\\n  --from-literal=WOODPECKER_GITHUB_CLIENT=xxxxxxxx\n\nkubectl create secret generic woodpecker-github-secret \\\n  --namespace <namespace> \\\n  --from-literal=WOODPECKER_GITHUB_SECRET=xxxxxxxx\n\n# add helm repo\nhelm repo add woodpecker https://woodpecker-ci.org/\n")),(0,o.kt)("h3",{id:"woodpecker-server"},"Woodpecker server"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Install\nhelm upgrade --install woodpecker-server --namespace <namespace> woodpecker/woodpecker-server\n\n# Uninstall\nhelm delete woodpecker-server\n")),(0,o.kt)("h3",{id:"woodpecker-agent"},"Woodpecker agent"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Install\nhelm upgrade --install woodpecker-agent --namespace <namespace> woodpecker/woodpecker-agent\n\n# Uninstall\nhelm delete woodpecker-agent\n")),(0,o.kt)("h2",{id:"deploy-with-kubectl"},"Deploy with kubectl"),(0,o.kt)("p",null,"The following yamls represent a server (backed by sqlite and Persistent Volumes) and an agent deployment. The agents can be scaled by the ",(0,o.kt)("inlineCode",{parentName:"p"},"replica")," field."),(0,o.kt)("p",null,"By design, Woodpecker spins up a new container for each workflow step. It talks to the Docker agent to do that."),(0,o.kt)("p",null,"However in Kubernetes, the Docker agent is not accessible, therefore this deployment follows a Docker in Docker setup and we deploy a DinD sidecar with the agent.\nBuild step containers are started up within the agent pod."),(0,o.kt)("p",null,"Warning: this approach requires ",(0,o.kt)("inlineCode",{parentName:"p"},"privileged")," access. Also DinD's reputation hasn't been too high in the early days of Docker - this changed somewhat over time, and there are organizations succeeding with this approach."),(0,o.kt)("p",null,"server.yaml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: woodpecker\n  namespace: tools\n  labels:\n    app: woodpecker\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: woodpecker\n  template:\n    metadata:\n      labels:\n        app: woodpecker\n      annotations:\n        prometheus.io/scrape: \'true\'\n    spec:\n      containers:\n      - image: woodpeckerci/woodpecker-server:latest\n        imagePullPolicy: Always\n        name: woodpecker\n        env:\n          - name: "WOODPECKER_ADMIN"\n            value: "xxx"\n          - name: "WOODPECKER_HOST"\n            value: "https://xxx"\n          - name: "WOODPECKER_GITHUB"\n            value: "true"\n          - name: "WOODPECKER_GITHUB_CLIENT"\n            value: "xxx"\n          - name: "WOODPECKER_GITHUB_SECRET"\n            value: "xxx"\n          - name: "WOODPECKER_AGENT_SECRET"\n            value: "xxx"\n        volumeMounts:\n          - name: sqlite-volume\n            mountPath: /var/lib/drone\n      volumes:\n        - name: sqlite-volume\n          persistentVolumeClaim:\n            claimName: woodpecker-pvc\n---\napiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: woodpecker-pvc\n  namespace: tools\nspec:\n  accessModes:\n    - ReadWriteOnce\n  storageClassName: local-path\n  resources:\n    requests:\n      storage: 10Gi\n---\nkind: Service\napiVersion: v1\nmetadata:\n  name: woodpecker\n  namespace: tools\nspec:\n  type: ClusterIP\n  selector:\n    app: woodpecker\n  ports:\n  - protocol: TCP\n    name: http\n    port: 80\n    targetPort: 8000\n  - protocol: TCP\n    name: grpc\n    port: 9000\n    targetPort: 9000\n---\nkind: Ingress\napiVersion: extensions/v1beta1\nmetadata:\n  name: woodpecker\n  namespace: tools\nspec:\n  tls:\n  - hosts:\n    - xxx\n    secretName: xxx\n  rules:\n  - host: xxx\n    http:\n      paths:\n      - backend:\n          serviceName: woodpecker\n          servicePort: 80\n')),(0,o.kt)("p",null,"agent.yaml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: woodpecker-agent\n  namespace: tools\n  labels:\n    app: woodpecker-agent\nspec:\n  selector:\n    matchLabels:\n      app: woodpecker-agent\n  replicas: 2\n  template:\n    metadata:\n      annotations:\n      labels:\n        app: woodpecker-agent\n    spec:\n      containers:\n      - name: agent\n        image: woodpeckerci/woodpecker-agent:latest\n        imagePullPolicy: Always\n        ports:\n        - name: http\n          containerPort: 3000\n          protocol: TCP\n        env:\n          - name: WOODPECKER_SERVER\n            value: woodpecker.tools.svc.cluster.local:9000\n          - name: WOODPECKER_AGENT_SECRET\n            value: "xxx"\n        resources:\n          limits:\n            cpu: 2\n            memory: 2Gi\n        volumeMounts:\n        - name: sock-dir\n          path: /var/run\n      - name: dind\n        image: "docker:19.03.5-dind"\n        env:\n        - name: DOCKER_DRIVER\n          value: overlay2\n        resources:\n          limits:\n            cpu: 1\n            memory: 2Gi\n        securityContext:\n          privileged: true\n        volumeMounts:\n        - name: sock-dir\n          mountPath: /var/run\n      volumes:\n      - name: sock-dir\n        emptyDir: {}\n')))}u.isMDXComponent=!0}}]);