"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[6193],{72834:(e,t,a)=>{a.d(t,{A:()=>_});var r=a(79474),l=a(28923),n=a(16881),o=a(28108),i=a(60238),s=a(31743),c=a(20241),m=a(2584);function u(e){const{pathname:t}=(0,c.zy)();return(0,r.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,m.ys)(e.permalink,t))}(e,t)))),[e,t])}const d={sidebar:"sidebar_Y7OX",sidebarItemTitle:"sidebarItemTitle_ZG7M",sidebarItemList:"sidebarItemList_fAse",sidebarItem:"sidebarItem_lzRO",sidebarItemLink:"sidebarItemLink_kRVq",sidebarItemLinkActive:"sidebarItemLinkActive_SGcl"};function g({sidebar:e}){const t=u(e.items);return r.createElement("aside",{className:"col col--3"},r.createElement("nav",{className:(0,l.A)(d.sidebar,"thin-scrollbar"),"aria-label":(0,s.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.A)(d.sidebarItemTitle,"margin-bottom--md")},e.title),r.createElement("ul",{className:(0,l.A)(d.sidebarItemList,"clean-list")},t.map((e=>r.createElement("li",{key:e.permalink,className:d.sidebarItem},r.createElement(i.A,{isNavLink:!0,to:e.permalink,className:d.sidebarItemLink,activeClassName:d.sidebarItemLinkActive},e.title)))))))}var p=a(93431);function b({sidebar:e}){const t=u(e.items);return r.createElement("ul",{className:"menu__list"},t.map((e=>r.createElement("li",{key:e.permalink,className:"menu__list-item"},r.createElement(i.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function f(e){return r.createElement(p.GX,{component:b,props:e})}function h({sidebar:e}){const t=(0,o.l)();return(null==e?void 0:e.items.length)?"mobile"===t?r.createElement(f,{sidebar:e}):r.createElement(g,{sidebar:e}):null}var v=Object.defineProperty,E=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,A=(e,t,a)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,N=(e,t)=>{for(var a in t||(t={}))P.call(t,a)&&A(e,a,t[a]);if(E)for(var a of E(t))y.call(t,a)&&A(e,a,t[a]);return e},O=(e,t)=>{var a={};for(var r in e)P.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&E)for(var r of E(e))t.indexOf(r)<0&&y.call(e,r)&&(a[r]=e[r]);return a};function _(e){const t=e,{sidebar:a,toc:o,children:i}=t,s=O(t,["sidebar","toc","children"]),c=a&&a.items.length>0;return r.createElement(n.A,N({},s),r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement(h,{sidebar:a}),r.createElement("main",{className:(0,l.A)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"https://schema.org/Blog"},i),o&&r.createElement("div",{className:"col col--2"},o))))}},26425:(e,t,a)=>{a.d(t,{A:()=>ee});var r=a(79474),l=a(28923),n=a(7302),o=a(353);function i({children:e,className:t}){var a,l;const{frontMatter:i,assets:s,metadata:{description:c}}=(0,n.e)(),{withBaseUrl:m}=(0,o.h)(),u=null!=(a=s.image)?a:i.image,d=null!=(l=i.keywords)?l:[];return r.createElement("article",{className:t,itemProp:"blogPost",itemScope:!0,itemType:"https://schema.org/BlogPosting"},c&&r.createElement("meta",{itemProp:"description",content:c}),u&&r.createElement("link",{itemProp:"image",href:m(u,{absolute:!0})}),d.length>0&&r.createElement("meta",{itemProp:"keywords",content:d.join(",")}),e)}var s=a(60238);const c={title:"title_Jp97"};function m({className:e}){const{metadata:t,isBlogPostPage:a}=(0,n.e)(),{permalink:o,title:i}=t,m=a?"h1":"h2";return r.createElement(m,{className:(0,l.A)(c.title,e),itemProp:"headline"},a?i:r.createElement(s.A,{itemProp:"url",to:o},i))}var u=a(31743),d=a(10012);const g={container:"container_fxEQ"};function p({readingTime:e}){const t=function(){const{selectMessage:e}=(0,d.W)();return t=>{const a=Math.ceil(t);return e(a,(0,u.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return r.createElement(r.Fragment,null,t(e))}function b({date:e,formattedDate:t}){return r.createElement("time",{dateTime:e,itemProp:"datePublished"},t)}function f(){return r.createElement(r.Fragment,null," \xb7 ")}function h({className:e}){const{metadata:t}=(0,n.e)(),{date:a,formattedDate:o,readingTime:i}=t;return r.createElement("div",{className:(0,l.A)(g.container,"margin-vert--md",e)},r.createElement(b,{date:a,formattedDate:o}),void 0!==i&&r.createElement(r.Fragment,null,r.createElement(f,null),r.createElement(p,{readingTime:i})))}var v=Object.defineProperty,E=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,A=(e,t,a)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,N=(e,t)=>{for(var a in t||(t={}))P.call(t,a)&&A(e,a,t[a]);if(E)for(var a of E(t))y.call(t,a)&&A(e,a,t[a]);return e};function O(e){return e.href?r.createElement(s.A,N({},e)):r.createElement(r.Fragment,null,e.children)}function _({author:e,className:t}){const{name:a,title:n,url:o,imageURL:i,email:s}=e,c=o||s&&`mailto:${s}`||void 0;return r.createElement("div",{className:(0,l.A)("avatar margin-bottom--sm",t)},i&&r.createElement(O,{href:c,className:"avatar__photo-link"},r.createElement("img",{className:"avatar__photo",src:i,alt:a,itemProp:"image"})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(O,{href:c,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),n&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))}const k={authorCol:"authorCol_i39q",imageOnlyAuthorRow:"imageOnlyAuthorRow_Z3px",imageOnlyAuthorCol:"imageOnlyAuthorCol_WXPp"};var w=Object.defineProperty,T=Object.defineProperties,I=Object.getOwnPropertyDescriptors,j=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,F=(e,t,a)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,C=(e,t)=>{for(var a in t||(t={}))x.call(t,a)&&F(e,a,t[a]);if(j)for(var a of j(t))L.call(t,a)&&F(e,a,t[a]);return e},R=(e,t)=>T(e,I(t));function B({className:e}){const{metadata:{authors:t},assets:a}=(0,n.e)();if(0===t.length)return null;const o=t.every((({name:e})=>!e));return r.createElement("div",{className:(0,l.A)("margin-top--md margin-bottom--sm",o?k.imageOnlyAuthorRow:"row",e)},t.map(((e,t)=>{var n;return r.createElement("div",{className:(0,l.A)(!o&&"col col--6",o?k.imageOnlyAuthorCol:k.authorCol),key:t},r.createElement(_,{author:R(C({},e),{imageURL:null!=(n=a.authorsImageUrls[t])?n:e.imageURL})}))})))}function M(){return r.createElement("header",null,r.createElement(m,null),r.createElement(h,null),r.createElement(B,null))}var S=a(10687),D=a(83444);function U({children:e,className:t}){const{isBlogPostPage:a}=(0,n.e)();return r.createElement("div",{id:a?S.blogPostContainerID:void 0,className:(0,l.A)("markdown",t),itemProp:"articleBody"},r.createElement(D.A,null,e))}var $=a(14134),z=a(60680),G=Object.defineProperty,W=Object.getOwnPropertySymbols,q=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,J=(e,t,a)=>t in e?G(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,V=(e,t)=>{for(var a in t||(t={}))q.call(t,a)&&J(e,a,t[a]);if(W)for(var a of W(t))X.call(t,a)&&J(e,a,t[a]);return e},Z=(e,t)=>{var a={};for(var r in e)q.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&W)for(var r of W(e))t.indexOf(r)<0&&X.call(e,r)&&(a[r]=e[r]);return a};function H(){return r.createElement("b",null,r.createElement(u.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function Q(e){const t=e,{blogPostTitle:a}=t,l=Z(t,["blogPostTitle"]);return r.createElement(s.A,V({"aria-label":(0,u.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:a})},l),r.createElement(H,null))}const Y={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_Gn96"};function K(){const{metadata:e,isBlogPostPage:t}=(0,n.e)(),{tags:a,title:o,editUrl:i,hasTruncateMarker:s}=e,c=!t&&s,m=a.length>0;return m||c||i?r.createElement("footer",{className:(0,l.A)("row docusaurus-mt-lg",t&&Y.blogPostFooterDetailsFull)},m&&r.createElement("div",{className:(0,l.A)("col",{"col--9":c})},r.createElement(z.A,{tags:a})),t&&i&&r.createElement("div",{className:"col margin-top--sm"},r.createElement($.A,{editUrl:i})),c&&r.createElement("div",{className:(0,l.A)("col text--right",{"col--3":m})},r.createElement(Q,{blogPostTitle:o,to:e.permalink}))):null}function ee({children:e,className:t}){const a=function(){const{isBlogPostPage:e}=(0,n.e)();return e?void 0:"margin-bottom--xl"}();return r.createElement(i,{className:(0,l.A)(a,t)},r.createElement(M,null),r.createElement(U,null,e),r.createElement(K,null))}},14134:(e,t,a)=>{a.d(t,{A:()=>h});var r=a(79474),l=a(31743),n=a(66978),o=a(60238),i=a(28923);const s={iconEdit:"iconEdit_gvBT"};var c=Object.defineProperty,m=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,g=(e,t,a)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&g(e,a,t[a]);if(m)for(var a of m(t))d.call(t,a)&&g(e,a,t[a]);return e},b=(e,t)=>{var a={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&d.call(e,r)&&(a[r]=e[r]);return a};function f(e){var t=e,{className:a}=t,l=b(t,["className"]);return r.createElement("svg",p({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.A)(s.iconEdit,a),"aria-hidden":"true"},l),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function h({editUrl:e}){return r.createElement(o.A,{to:e,className:n.G.common.editThisPage},r.createElement(f,null),r.createElement(l.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},12236:(e,t,a)=>{a.d(t,{A:()=>o});var r=a(79474),l=a(28923),n=a(60238);function o(e){const{permalink:t,title:a,subLabel:o,isNext:i}=e;return r.createElement(n.A,{className:(0,l.A)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},o&&r.createElement("div",{className:"pagination-nav__sublabel"},o),r.createElement("div",{className:"pagination-nav__label"},a))}},6052:(e,t,a)=>{a.d(t,{A:()=>i});var r=a(79474),l=a(28923),n=a(60238);const o={tag:"tag_rayf",tagRegular:"tagRegular_HsGv",tagWithCount:"tagWithCount_lNl6"};function i({permalink:e,label:t,count:a}){return r.createElement(n.A,{href:e,className:(0,l.A)(o.tag,a?o.tagWithCount:o.tagRegular)},t,a&&r.createElement("span",null,a))}},60680:(e,t,a)=>{a.d(t,{A:()=>s});var r=a(79474),l=a(28923),n=a(31743),o=a(6052);const i={tags:"tags_nms4",tag:"tag_JSzq"};function s({tags:e}){return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(n.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,l.A)(i.tags,"padding--none","margin-left--sm")},e.map((({label:e,permalink:t})=>r.createElement("li",{key:t,className:i.tag},r.createElement(o.A,{label:e,permalink:t}))))))}},7302:(e,t,a)=>{a.d(t,{e:()=>i,i:()=>o});var r=a(79474),l=a(41787);const n=r.createContext(null);function o({children:e,content:t,isBlogPostPage:a=!1}){const l=function({content:e,isBlogPostPage:t}){return(0,r.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,toc:e.toc,isBlogPostPage:t})),[e,t])}({content:t,isBlogPostPage:a});return r.createElement(n.Provider,{value:l},e)}function i(){const e=(0,r.useContext)(n);if(null===e)throw new l.dV("BlogPostProvider");return e}},10012:(e,t,a)=>{a.d(t,{W:()=>c});var r=a(79474),l=a(85554);const n=["zero","one","two","few","many","other"];function o(e){return n.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function s(){const{i18n:{currentLocale:e}}=(0,l.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function c(){const e=s();return{selectMessage:(t,a)=>function(e,t,a){const r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const l=a.select(t),n=a.pluralForms.indexOf(l);return r[Math.min(n,r.length-1)]}(a,t,e)}}}}]);