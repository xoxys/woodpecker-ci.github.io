/*! For license information please see d1bf4796.11ec74ed.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[9324],{50861:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=t(11527),i=t(88672);const r={},s="NixOS",a={id:"administration/deployment/nixos",title:"NixOS",description:"Note that this module is not maintained by the woodpecker-developers.",source:"@site/versioned_docs/version-2.0/30-administration/00-deployment/30-nixos.md",sourceDirName:"30-administration/00-deployment",slug:"/administration/deployment/nixos",permalink:"/docs/2.0/administration/deployment/nixos",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-2.0/30-administration/00-deployment/30-nixos.md",tags:[],version:"2.0",sidebarPosition:30,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Kubernetes",permalink:"/docs/2.0/administration/deployment/kubernetes"},next:{title:"Server configuration",permalink:"/docs/2.0/administration/server-config"}},d={},c=[{value:"General Configuration",id:"general-configuration",level:2},{value:"Tips and tricks",id:"tips-and-tricks",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"nixos",children:"NixOS"}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Note that this module is not maintained by the woodpecker-developers.\nIf you experience issues please open a bug report in the ",(0,o.jsx)(n.a,{href:"https://github.com/NixOS/nixpkgs/issues/new/choose",children:"nixpkgs repo"})," where the module is maintained."]})}),"\n",(0,o.jsx)(n.p,{children:"The NixOS install is in theory quite similar to the binary install and supports multiple backends.\nIn practice, the settings are specified declaratively in the NixOS configuration and no manual steps need to be taken."}),"\n",(0,o.jsx)(n.h2,{id:"general-configuration",children:"General Configuration"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-nix",children:'{ config\n, ...\n}:\nlet\n  domain = "woodpecker.example.org";\nin\n{\n  # This automatically sets up certificates via let\'s encrypt\n  security.acme.defaults.email = "acme@example.com";\n  security.acme.acceptTerms = true;\n  security.acme.certs."${domain}" = { };\n\n  # Setting up a nginx proxy that handles tls for us\n  networking.firewall.allowedTCPPorts = [ 80 443 ];\n  services.nginx = {\n    enable = true;\n    recommendedTlsSettings = true;\n    recommendedOptimisation = true;\n    recommendedProxySettings = true;\n    virtualHosts."${domain}" = {\n      enableACME = true;\n      forceSSL = true;\n      locations."/" = {\n        proxyPass = "http://localhost:3007";\n      };\n    };\n  };\n\n  services.woodpecker-server = {\n    enable = true;\n    environment = {\n      WOODPECKER_HOST = "https://${domain}";\n      WOODPECKER_SERVER_ADDR = ":3007";\n      WOODPECKER_OPEN = "true";\n    };\n    # You can pass a file with env vars to the system it could look like:\n    # WOODPECKER_AGENT_SECRET=XXXXXXXXXXXXXXXXXXXXXX\n    environmentFile = "/path/to/my/secrets/file";\n  };\n\n  # This sets up a woodpecker agent\n  services.woodpecker-agents.agents."docker" = {\n    enable = true;\n    # We need this to talk to the podman socket\n    extraGroups = [ "podman" ];\n    environment = {\n      WOODPECKER_SERVER = "localhost:9000";\n      WOODPECKER_MAX_WORKFLOWS = "4";\n      DOCKER_HOST = "unix:///run/podman/podman.sock";\n      WOODPECKER_BACKEND = "docker";\n    };\n    # Same as with woodpecker-server\n    environmentFile = [ "/var/lib/secrets/woodpecker.env" ];\n  };\n\n  # Here we setup podman and enable dns\n  virtualisation.podman = {\n    enable = true;\n    defaultNetwork.settings = {\n      dns_enabled = true;\n    };\n  };\n  # This is needed for podman to be able to talk over dns\n  networking.firewall.interfaces."podman0" = {\n    allowedUDPPorts = [ 53 ];\n    allowedTCPPorts = [ 53 ];\n  };\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["All configuration options can be found via ",(0,o.jsx)(n.a,{href:"https://search.nixos.org/options?channel=unstable&size=200&sort=relevance&query=woodpecker",children:"NixOS Search"})]}),"\n",(0,o.jsx)(n.h2,{id:"tips-and-tricks",children:"Tips and tricks"}),"\n",(0,o.jsxs)(n.p,{children:["There are some resources on how to utilize Woodpecker more effectively with NixOS on the ",(0,o.jsx)(n.a,{href:"/docs/2.0/awesome",children:"Awesome Woodpecker"})," page, like using the runners nix-store in the pipeline"]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},3354:(e,n,t)=>{var o=t(50959),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var o,r={},c=null,l=null;for(o in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)s.call(n,o)&&!d.hasOwnProperty(o)&&(r[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===r[o]&&(r[o]=n[o]);return{$$typeof:i,type:e,key:c,ref:l,props:r,_owner:a.current}}n.Fragment=r,n.jsx=c,n.jsxs=c},11527:(e,n,t)=>{e.exports=t(3354)},88672:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var o=t(50959);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);