"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[4013],{86760:(e,t,a)=>{a.d(t,{Z:()=>y});var r=a(59496),l=a(45924),n=a(31099),i=a(19159),s=a(35868),c=a(51953);const m={sidebar:"sidebar_jK5y",sidebarItemTitle:"sidebarItemTitle_b9Nv",sidebarItemList:"sidebarItemList_uX9r",sidebarItem:"sidebarItem_wlju",sidebarItemLink:"sidebarItemLink_AAvF",sidebarItemLinkActive:"sidebarItemLinkActive_RFqz"};function o({sidebar:e}){return r.createElement("aside",{className:"col col--3"},r.createElement("nav",{className:(0,l.Z)(m.sidebar,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(m.sidebarItemTitle,"margin-bottom--md")},e.title),r.createElement("ul",{className:(0,l.Z)(m.sidebarItemList,"clean-list")},e.items.map((e=>r.createElement("li",{key:e.permalink,className:m.sidebarItem},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:m.sidebarItemLink,activeClassName:m.sidebarItemLinkActive},e.title)))))))}var b=a(45062);function u({sidebar:e}){return r.createElement("ul",{className:"menu__list"},e.items.map((e=>r.createElement("li",{key:e.permalink,className:"menu__list-item"},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function d(e){return r.createElement(b.Zo,{component:u,props:e})}function g({sidebar:e}){const t=(0,i.i)();return(null==e?void 0:e.items.length)?"mobile"===t?r.createElement(d,{sidebar:e}):r.createElement(o,{sidebar:e}):null}var p=Object.defineProperty,E=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,k=(e,t,a)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,h=(e,t)=>{for(var a in t||(t={}))f.call(t,a)&&k(e,a,t[a]);if(E)for(var a of E(t))v.call(t,a)&&k(e,a,t[a]);return e},N=(e,t)=>{var a={};for(var r in e)f.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&E)for(var r of E(e))t.indexOf(r)<0&&v.call(e,r)&&(a[r]=e[r]);return a};function y(e){const t=e,{sidebar:a,toc:i,children:s}=t,c=N(t,["sidebar","toc","children"]),m=a&&a.items.length>0;return r.createElement(n.Z,h({},c),r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement(g,{sidebar:a}),r.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},s),i&&r.createElement("div",{className:"col col--2"},i))))}},49014:(e,t,a)=>{a.r(t),a.d(t,{default:()=>N});var r=a(59496),l=a(45924),n=a(51953);const i=()=>(0,n.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var s=a(32106),c=a(88583),m=a(86760),o=a(10393);const b={tag:"tag_sGMK"};var u=Object.defineProperty,d=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,E=(e,t,a)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,f=(e,t)=>{for(var a in t||(t={}))g.call(t,a)&&E(e,a,t[a]);if(d)for(var a of d(t))p.call(t,a)&&E(e,a,t[a]);return e};function v({letterEntry:e}){return r.createElement("article",null,r.createElement("h2",null,e.letter),r.createElement("ul",{className:"padding--none"},e.tags.map((e=>r.createElement("li",{key:e.permalink,className:b.tag},r.createElement(o.Z,f({},e)))))),r.createElement("hr",null))}function k({tags:e}){const t=function(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);null!=t[a]||(t[a]=[]),t[a].push(e)})),Object.entries(t).sort((([e],[t])=>e.localeCompare(t))).map((([e,t])=>({letter:e,tags:t.sort(((e,t)=>e.label.localeCompare(t.label)))})))}(e);return r.createElement("section",{className:"margin-vert--lg"},t.map((e=>r.createElement(v,{key:e.letter,letterEntry:e}))))}var h=a(16461);function N({tags:e,sidebar:t}){const a=i();return r.createElement(s.FG,{className:(0,l.Z)(c.k.wrapper.blogPages,c.k.page.blogTagsListPage)},r.createElement(s.d,{title:a}),r.createElement(h.Z,{tag:"blog_tags_list"}),r.createElement(m.Z,{sidebar:t},r.createElement("h1",null,a),r.createElement(k,{tags:e})))}},10393:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(59496),l=a(45924),n=a(35868);const i={tag:"tag_aVw2",tagRegular:"tagRegular_giGE",tagWithCount:"tagWithCount_tB5s"};function s({permalink:e,label:t,count:a}){return r.createElement(n.Z,{href:e,className:(0,l.Z)(i.tag,a?i.tagWithCount:i.tagRegular)},t,a&&r.createElement("span",null,a))}}}]);