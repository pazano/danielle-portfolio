_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"7kBy":function(e,t,n){"use strict";var c=n("nKUr");n("Hvdv");t.a=function(e){var t=e.renditions,n=e.alt,i=e.aspectRatio,a=e.respectAspect,s=e.style,r=void 0===s?"":s;if(a){var o=i&&i.split("x"),l=o[0]+" "+o[1],d=function(e,t){var n=1;return e.images.reduce((function(c,i){var a=i.width;return n==e.images.length?c+"".concat(a,"px"):(n++,c+"(max-width: ".concat(a+a*(t/100),"px) ").concat(a,"px, "))}),"")}(t,20);return Object(c.jsxs)("div",{className:"image__respect-aspect ".concat(r),children:[Object(c.jsx)("svg",{viewBox:"0 0 ".concat(l)}),Object(c.jsx)("picture",{children:Object(c.jsx)("img",{srcSet:t.srcSet,sizes:d,src:t.src,alt:n})})]})}return Object(c.jsx)("div",{className:r,children:Object(c.jsx)("picture",{children:Object(c.jsx)("img",{srcSet:t.srcSet,sizes:sizeList,src:t.src,alt:n})})})}},CZDy:function(e,t,n){"use strict";var c=n("nKUr"),i=n("7kBy");n("WI3z");t.a=function(e){var t=e.image,n=e.content,a=e.imageSide,s=void 0===a?"left":a,r=e.contentBackground,o=void 0!==r&&r;return Object(c.jsxs)("div",{className:"module__image-content module__image-content__".concat(t.orientation,"-").concat(s),children:[Object(c.jsx)(i.a,{renditions:t.renditions,alt:t.alt,aspectRatio:t.aspectRatio,respectAspect:!0,style:"module__image-content__image"}),Object(c.jsx)("div",{className:"module__image-content__content ".concat(o&&"module__image-content__bgcolor"),children:Object(c.jsx)("div",{className:"module__image-content__content-inner",dangerouslySetInnerHTML:{__html:n}})})]})}},IlPn:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return r}));var c=n("nKUr"),i=n("8MC4"),a=n("CZDy"),s=(n("+yVn"),function(e){var t=e.title,n=e.label,i=e.target;return Object(c.jsxs)("div",{className:"cta__block",children:[Object(c.jsx)("h3",{children:t}),Object(c.jsx)("a",{className:"cta__action",href:i,children:n})]})}),r=!0;t.default=function(e){var t=e.seo,n=e.profileImage,r=e.content;return Object(c.jsx)(i.a,{seo:t,children:Object(c.jsxs)("div",{className:"content width__medium",children:[Object(c.jsx)(a.a,{image:n,content:r,imageSide:"right",contentBackground:!0}),Object(c.jsx)(s,{title:"Connect with Danielle",label:"Send an Email",target:"mailto:hello@daniellerouillard.com"})]})})}},k7Zr:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about-old",function(){return n("IlPn")}])}},[["k7Zr",0,2,4,1,3,5]]]);