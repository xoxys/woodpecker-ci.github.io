"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[6103],{35717:(e,t,n)=>{n.r(t),n.d(t,{default:()=>N});var r=n(50959),a=n(86259),l=n(6268),o=n(12795),i=n(17809),c=n(69705),s=n(77547),m=n(37747),u=n(32086),d=Object.defineProperty,f=Object.defineProperties,p=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,O=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&h(e,n,t[n]);if(v)for(var n of v(t))g.call(t,n)&&h(e,n,t[n]);return e},y=(e,t)=>f(e,p(t));function E(e){const{nextItem:t,prevItem:n}=e;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,m.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&r.createElement(u.Z,y(O({},n),{subLabel:r.createElement(m.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&r.createElement(u.Z,y(O({},t),{subLabel:r.createElement(m.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function L(){var e;const{assets:t,metadata:n}=(0,i.C)(),{title:a,description:o,date:c,tags:s,authors:m,frontMatter:u}=n,{keywords:d}=u,f=null!=(e=t.image)?e:u.image;return r.createElement(l.d,{title:a,description:o,keywords:d,image:f},r.createElement("meta",{property:"og:type",content:"article"}),r.createElement("meta",{property:"article:published_time",content:c}),m.some((e=>e.url))&&r.createElement("meta",{property:"article:author",content:m.map((e=>e.url)).filter(Boolean).join(",")}),s.length>0&&r.createElement("meta",{property:"article:tag",content:s.map((e=>e.label)).join(",")}))}var x=n(24340),w=n(47265);function C({sidebar:e,children:t}){const{metadata:n,toc:a}=(0,i.C)(),{nextItem:l,prevItem:o,frontMatter:m,unlisted:u}=n,{hide_table_of_contents:d,toc_min_heading_level:f,toc_max_heading_level:p}=m;return r.createElement(c.Z,{sidebar:e,toc:!d&&a.length>0?r.createElement(x.Z,{toc:a,minHeadingLevel:f,maxHeadingLevel:p}):void 0},u&&r.createElement(w.Z,null),r.createElement(s.Z,null,t),(l||o)&&r.createElement(E,{nextItem:l,prevItem:o}))}function N(e){const t=e.content;return r.createElement(i.n,{content:e.content,isBlogPostPage:!0},r.createElement(l.FG,{className:(0,a.Z)(o.k.wrapper.blogPages,o.k.page.blogPostPage)},r.createElement(L,null),r.createElement(C,{sidebar:e.sidebar},r.createElement(t,null))))}},24340:(e,t,n)=>{n.d(t,{Z:()=>O});var r=n(50959),a=n(86259),l=n(34748);const o={tableOfContents:"tableOfContents_MGkX",docItemContainer:"docItemContainer_aPF3"};var i=Object.defineProperty,c=Object.defineProperties,s=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&f(e,n,t[n]);if(m)for(var n of m(t))d.call(t,n)&&f(e,n,t[n]);return e},v=(e,t)=>c(e,s(t)),b=(e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n};const g="table-of-contents__link toc-highlight",h="table-of-contents__link--active";function O(e){var t=e,{className:n}=t,i=b(t,["className"]);return r.createElement("div",{className:(0,a.Z)(o.tableOfContents,"thin-scrollbar",n)},r.createElement(l.Z,v(p({},i),{linkClassName:g,linkActiveClassName:h})))}},34748:(e,t,n)=>{n.d(t,{Z:()=>H});var r=n(50959),a=n(41918),l=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(c)for(var n of c(t))m.call(t,n)&&u(e,n,t[n]);return e},f=(e,t)=>o(e,i(t)),p=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&m.call(e,r)&&(n[r]=e[r]);return n};function v(e){const t=e.map((e=>f(d({},e),{parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const r=n.slice(2,e.level);e.parentIndex=Math.max(...r),n[e.level]=t}));const r=[];return t.forEach((e=>{const n=e,{parentIndex:a}=n,l=p(n,["parentIndex"]);a>=0?t[a].children.push(l):r.push(l)})),r}function b({toc:e,minHeadingLevel:t,maxHeadingLevel:n}){return e.flatMap((e=>{const r=b({toc:e.children,minHeadingLevel:t,maxHeadingLevel:n});return function(e){return e.level>=t&&e.level<=n}(e)?[f(d({},e),{children:r})]:r}))}function g(e){const t=e.getBoundingClientRect();return t.top===t.bottom?g(e.parentNode):t}function h(e,{anchorTopOffset:t}){var n,r;const a=e.find((e=>g(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(g(a))?a:null!=(n=e[e.indexOf(a)-1])?n:null}return null!=(r=e[e.length-1])?r:null}function O(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.L)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function y(e){const t=(0,r.useRef)(void 0),n=O();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:a,minHeadingLevel:l,maxHeadingLevel:o}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),i=function({minHeadingLevel:e,maxHeadingLevel:t}){const n=[];for(let r=e;r<=t;r+=1)n.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),c=h(i,{anchorTopOffset:n.current}),s=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===s)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}var E=n(58235);const L=r.memo((function e({toc:t,className:n,linkClassName:a,isChild:l}){return t.length?r.createElement("ul",{className:l?void 0:n},t.map((t=>r.createElement("li",{key:t.id},r.createElement(E.Z,{to:`#${t.id}`,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:t.value}}),r.createElement(e,{isChild:!0,toc:t.children,className:n,linkClassName:a}))))):null}));var x=Object.defineProperty,w=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,P=(e,t,n)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))C.call(t,n)&&P(e,n,t[n]);if(w)for(var n of w(t))N.call(t,n)&&P(e,n,t[n]);return e},j=(e,t)=>{var n={};for(var r in e)C.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&w)for(var r of w(e))t.indexOf(r)<0&&N.call(e,r)&&(n[r]=e[r]);return n};function H(e){var t=e,{toc:n,className:l="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:c,maxHeadingLevel:s}=t,m=j(t,["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"]);const u=(0,a.L)(),d=null!=c?c:u.tableOfContents.minHeadingLevel,f=null!=s?s:u.tableOfContents.maxHeadingLevel,p=function({toc:e,minHeadingLevel:t,maxHeadingLevel:n}){return(0,r.useMemo)((()=>b({toc:v(e),minHeadingLevel:t,maxHeadingLevel:n})),[e,t,n])}({toc:n,minHeadingLevel:d,maxHeadingLevel:f});return y((0,r.useMemo)((()=>{if(o&&i)return{linkClassName:o,linkActiveClassName:i,minHeadingLevel:d,maxHeadingLevel:f}}),[o,i,d,f])),r.createElement(L,k({toc:p,className:l,linkClassName:o},m))}},47265:(e,t,n)=>{n.d(t,{Z:()=>O});var r=n(50959),a=n(86259),l=n(37747),o=n(51378);function i(){return r.createElement(l.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title"},"Unlisted page")}function c(){return r.createElement(l.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message"},"This page is unlisted. Search engines will not index it, and only users having a direct link can access it.")}function s(){return r.createElement(o.Z,null,r.createElement("meta",{name:"robots",content:"noindex, nofollow"}))}var m=n(12795),u=n(75101),d=Object.defineProperty,f=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&b(e,n,t[n]);if(f)for(var n of f(t))v.call(t,n)&&b(e,n,t[n]);return e};function h({className:e}){return r.createElement(u.Z,{type:"caution",title:r.createElement(i,null),className:(0,a.Z)(e,m.k.common.unlistedBanner)},r.createElement(c,null))}function O(e){return r.createElement(r.Fragment,null,r.createElement(s,null),r.createElement(h,g({},e)))}}}]);