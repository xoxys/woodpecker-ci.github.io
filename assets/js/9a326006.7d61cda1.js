"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[150],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(t),d=o,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(k,i(i({ref:n},p),{},{components:t})):r.createElement(k,i({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1787:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],s={},c="Kubernetes",l={unversionedId:"administration/kubernetes",id:"administration/kubernetes",isDocsHomePage:!1,title:"Kubernetes",description:"Woodpecker does not support Kubernetes natively, but being a container first CI engine, it can be deployed to Kubernetes.",source:"@site/docs/30-administration/80-kubernetes.md",sourceDirName:"30-administration",slug:"/administration/kubernetes",permalink:"/docs/administration/kubernetes",editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/30-administration/80-kubernetes.md",tags:[],version:"current",sidebarPosition:80,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Proxy",permalink:"/docs/administration/proxy"},next:{title:"Prometheus",permalink:"/docs/administration/prometheus"}},p=[{value:"Deploy with HELM",id:"deploy-with-helm",children:[]},{value:"Deploy with kubectl",id:"deploy-with-kubectl",children:[]}],u={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kubernetes"},"Kubernetes"),(0,a.kt)("p",null,"Woodpecker does not support Kubernetes natively, but being a container first CI engine, it can be deployed to Kubernetes."),(0,a.kt)("h2",{id:"deploy-with-helm"},"Deploy with HELM"),(0,a.kt)("p",null,"TODO"),(0,a.kt)("h2",{id:"deploy-with-kubectl"},"Deploy with kubectl"),(0,a.kt)("p",null,"The following yamls represent a server (backed by sqlite and Persistent Volumes) and an agent deployment. The agents can be scaled by the ",(0,a.kt)("inlineCode",{parentName:"p"},"replica")," field."),(0,a.kt)("p",null,"By design, Woodpecker spins up a new container for each workflow step. It talks to the Docker agent to do that."),(0,a.kt)("p",null,"However in Kubernetes, the Docker agent is not accessible, therefore this deployment follows a Docker in Docker setup and we deploy a DinD sidecar with the agent.\nBuild step containers are started up within the agent pod."),(0,a.kt)("p",null,"Warning: this approach requires ",(0,a.kt)("inlineCode",{parentName:"p"},"privileged")," access. Also DinD's reputation hasn't been too high in the early days of Docker - this changed somewhat over time, and there are organizations succeeding with this approach."),(0,a.kt)("p",null,"server.yaml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: woodpecker\n  namespace: tools\n  labels:\n    app: woodpecker\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: woodpecker\n  template:\n    metadata:\n      labels:\n        app: woodpecker\n      annotations:\n        prometheus.io/scrape: \'true\'\n    spec:\n      containers:\n      - image: woodpeckerci/woodpecker-server:latest\n        imagePullPolicy: Always\n        name: woodpecker\n        env:\n          - name: "WOODPECKER_ADMIN"\n            value: "xxx"\n          - name: "WOODPECKER_HOST"\n            value: "https://xxx"\n          - name: "WOODPECKER_GITHUB"\n            value: "true"\n          - name: "WOODPECKER_GITHUB_CLIENT"\n            value: "xxx"\n          - name: "WOODPECKER_GITHUB_SECRET"\n            value: "xxx"\n          - name: "WOODPECKER_SECRET"\n            value: "xxx"\n        volumeMounts:\n          - name: sqlite-volume\n            mountPath: /var/lib/drone\n      volumes:\n        - name: sqlite-volume\n          persistentVolumeClaim:\n            claimName: woodpecker-pvc\n---\napiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: woodpecker-pvc\n  namespace: tools\nspec:\n  accessModes:\n    - ReadWriteOnce\n  storageClassName: local-path\n  resources:\n    requests:\n      storage: 10Gi\n---\nkind: Service\napiVersion: v1\nmetadata:\n  name: woodpecker\n  namespace: tools\nspec:\n  type: ClusterIP\n  selector:\n    app: woodpecker\n  ports:\n  - protocol: TCP\n    name: http\n    port: 80\n    targetPort: 8000\n  - protocol: TCP\n    name: grpc\n    port: 9000\n    targetPort: 9000\n---\nkind: Ingress\napiVersion: extensions/v1beta1\nmetadata:\n  name: woodpecker\n  namespace: tools\nspec:\n  tls:\n  - hosts:\n    - xxx\n    secretName: xxx\n  rules:\n  - host: xxx\n    http:\n      paths:\n      - backend:\n          serviceName: woodpecker\n          servicePort: 80\n')),(0,a.kt)("p",null,"agent.yaml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: woodpecker-agent\n  namespace: tools\n  labels:\n    app: woodpecker-agent\nspec:\n  selector:\n    matchLabels:\n      app: woodpecker-agent\n  replicas: 2\n  template:\n    metadata:\n      annotations:\n      labels:\n        app: woodpecker-agent\n    spec:\n      containers:\n      - name: agent\n        image: woodpeckerci/woodpecker-agent:latest\n        imagePullPolicy: Always\n        ports:\n        - name: http\n          containerPort: 3000\n          protocol: TCP\n        env:\n          - name: WOODPECKER_SERVER\n            value: woodpecker.tools.svc.cluster.local:9000\n          - name: WOODPECKER_SECRET\n            value: "xxx"\n        resources:\n          limits:\n            cpu: 2\n            memory: 2Gi\n        volumeMounts:\n        - name: sock-dir\n          path: /var/run\n      - name: dind\n        image: "docker:19.03.5-dind"\n        env:\n        - name: DOCKER_DRIVER\n          value: overlay2\n        resources:\n          limits:\n            cpu: 1\n            memory: 2Gi\n        securityContext:\n          privileged: true\n        volumeMounts:\n        - name: sock-dir\n          mountPath: /var/run\n      volumes:\n      - name: sock-dir\n        emptyDir: {}\n')))}m.isMDXComponent=!0}}]);