"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[4013],{6446:(e,t,a)=>{a.d(t,{Z:()=>Z});var r=a(50959),l=a(86259),n=a(27817),i=a(66183),s=a(47579),c=a(8943),m=a(28903),o=a(31361);function u(e){const{pathname:t}=(0,m.TH)();return(0,r.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,o.Mg)(e.permalink,t))}(e,t)))),[e,t])}const b={sidebar:"sidebar_PMTN",sidebarItemTitle:"sidebarItemTitle_CCtc",sidebarItemList:"sidebarItemList_qqz1",sidebarItem:"sidebarItem_fujs",sidebarItemLink:"sidebarItemLink_FUES",sidebarItemLinkActive:"sidebarItemLinkActive_Hw8j"};function d({sidebar:e}){const t=u(e.items);return r.createElement("aside",{className:"col col--3"},r.createElement("nav",{className:(0,l.Z)(b.sidebar,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(b.sidebarItemTitle,"margin-bottom--md")},e.title),r.createElement("ul",{className:(0,l.Z)(b.sidebarItemList,"clean-list")},t.map((e=>r.createElement("li",{key:e.permalink,className:b.sidebarItem},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:b.sidebarItemLink,activeClassName:b.sidebarItemLinkActive},e.title)))))))}var g=a(52513);function p({sidebar:e}){const t=u(e.items);return r.createElement("ul",{className:"menu__list"},t.map((e=>r.createElement("li",{key:e.permalink,className:"menu__list-item"},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function f(e){return r.createElement(g.Zo,{component:p,props:e})}function E({sidebar:e}){const t=(0,i.i)();return(null==e?void 0:e.items.length)?"mobile"===t?r.createElement(f,{sidebar:e}):r.createElement(d,{sidebar:e}):null}var v=Object.defineProperty,k=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,y=(e,t,a)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,I=(e,t)=>{for(var a in t||(t={}))h.call(t,a)&&y(e,a,t[a]);if(k)for(var a of k(t))N.call(t,a)&&y(e,a,t[a]);return e},_=(e,t)=>{var a={};for(var r in e)h.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&k)for(var r of k(e))t.indexOf(r)<0&&N.call(e,r)&&(a[r]=e[r]);return a};function Z(e){const t=e,{sidebar:a,toc:i,children:s}=t,c=_(t,["sidebar","toc","children"]),m=a&&a.items.length>0;return r.createElement(n.Z,I({},c),r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement(E,{sidebar:a}),r.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"https://schema.org/Blog"},s),i&&r.createElement("div",{className:"col col--2"},i))))}},94723:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y});var r=a(50959),l=a(86259),n=a(8943);const i=()=>(0,n.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var s=a(81888),c=a(72697),m=a(6446),o=a(21520),u=a(84531);const b={tag:"tag_WwgA"};var d=Object.defineProperty,g=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,E=(e,t,a)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,v=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&E(e,a,t[a]);if(g)for(var a of g(t))f.call(t,a)&&E(e,a,t[a]);return e};function k({letterEntry:e}){return r.createElement("article",null,r.createElement(u.Z,{as:"h2",id:e.letter},e.letter),r.createElement("ul",{className:"padding--none"},e.tags.map((e=>r.createElement("li",{key:e.permalink,className:b.tag},r.createElement(o.Z,v({},e)))))),r.createElement("hr",null))}function h({tags:e}){const t=function(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);null!=t[a]||(t[a]=[]),t[a].push(e)})),Object.entries(t).sort((([e],[t])=>e.localeCompare(t))).map((([e,t])=>({letter:e,tags:t.sort(((e,t)=>e.label.localeCompare(t.label)))})))}(e);return r.createElement("section",{className:"margin-vert--lg"},t.map((e=>r.createElement(k,{key:e.letter,letterEntry:e}))))}var N=a(4044);function y({tags:e,sidebar:t}){const a=i();return r.createElement(s.FG,{className:(0,l.Z)(c.k.wrapper.blogPages,c.k.page.blogTagsListPage)},r.createElement(s.d,{title:a}),r.createElement(N.Z,{tag:"blog_tags_list"}),r.createElement(m.Z,{sidebar:t},r.createElement(u.Z,{as:"h1"},a),r.createElement(h,{tags:e})))}},21520:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(50959),l=a(86259),n=a(47579);const i={tag:"tag_kdaT",tagRegular:"tagRegular_jIH4",tagWithCount:"tagWithCount_QagS"};function s({permalink:e,label:t,count:a}){return r.createElement(n.Z,{href:e,className:(0,l.Z)(i.tag,a?i.tagWithCount:i.tagRegular)},t,a&&r.createElement("span",null,a))}}}]);