(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,a){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(r.default.useContext(o.AmpStateContext))};var n,r=(n=a("q1tI"))&&n.__esModule?n:{default:n},o=a("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,a=void 0!==t&&t,n=e.hybrid,r=void 0!==n&&n,o=e.hasQuery,i=void 0!==o&&o;return a||r&&i}},"5fIB":function(e,t,a){var n=a("7eYB");e.exports=function(e){if(Array.isArray(e))return n(e)}},"8Ila":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={site_name:"Starter",title:"Buddy + GitKraken = success!",description:"A demo site made for a demo",locale:"en"}},"8Kt/":function(e,t,a){"use strict";a("oI91");t.__esModule=!0,t.defaultHead=s,t.default=void 0;var n,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=n?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(a,r,o):a[r]=e[r]}a.default=e,t&&t.set(e,a);return a}(a("q1tI")),o=(n=a("Xuae"))&&n.__esModule?n:{default:n},i=a("lwAK"),p=a("FYa8"),l=a("/0+H");function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var u=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var a=r.default.Children.toArray(t.props.children);return e.concat(a)}),[]).reduce(d,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,a=new Set,n={};return function(r){var o=!0,i=!1;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){i=!0;var p=r.key.slice(r.key.indexOf("$")+1);e.has(p)?o=!1:e.add(p)}switch(r.type){case"title":case"base":t.has(r.type)?o=!1:t.add(r.type);break;case"meta":for(var l=0,c=u.length;l<c;l++){var s=u[l];if(r.props.hasOwnProperty(s))if("charSet"===s)a.has(s)?o=!1:a.add(s);else{var d=r.props[s],h=n[s]||new Set;"name"===s&&i||!h.has(d)?(h.add(d),n[s]=h):o=!1}}}return o}}()).reverse().map((function(e,t){var a=e.key||t;return r.default.cloneElement(e,{key:a})}))}function f(e){var t=e.children,a=(0,r.useContext)(i.AmpStateContext),n=(0,r.useContext)(p.HeadManagerContext);return r.default.createElement(o.default,{reduceComponentsToState:h,headManager:n,inAmpMode:(0,l.isInAmpMode)(a)},t)}f.rewind=function(){};var m=f;t.default=m},Xuae:function(e,t,a){"use strict";var n=a("mPvQ"),r=a("/GRZ"),o=a("i2R6"),i=(a("qXWd"),a("48fX")),p=a("tCBg"),l=a("T0f4");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=l(e);if(t){var r=l(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return p(this,a)}}t.__esModule=!0,t.default=void 0;var s=a("q1tI"),d=function(e){i(a,e);var t=c(a);function a(e){var o;return r(this,a),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(n(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(a,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),a}(s.Component);t.default=d},YFqc:function(e,t,a){e.exports=a("cTJO")},YUtM:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a("nKUr"),r=a("q1tI"),o=a.n(r),i=a("g4pe"),p=a.n(i);function l(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var c={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},s=function(e){var t,a=[];e.titleTemplate&&(c.templateTitle=e.titleTemplate);var n="";e.title?(n=e.title,c.templateTitle&&(n=c.templateTitle.replace(/%s/g,(function(){return n})))):e.defaultTitle&&(n=e.defaultTitle),n&&a.push(o.a.createElement("title",{key:"title"},n));var r=e.noindex||c.noindex||e.dangerouslySetAllPagesToNoIndex,i=e.nofollow||c.nofollow||e.dangerouslySetAllPagesToNoFollow,p="";if(e.robotsProps){var l=e.robotsProps,s=l.nosnippet,d=l.maxSnippet,u=l.maxImagePreview,h=l.maxVideoPreview,f=l.noarchive,m=l.noimageindex,g=l.notranslate,y=l.unavailableAfter;p=(s?",nosnippet":"")+(d?",max-snippet:"+d:"")+(u?",max-image-preview:"+u:"")+(f?",noarchive":"")+(y?",unavailable_after:"+y:"")+(m?",noimageindex":"")+(h?",max-video-preview:"+h:"")+(g?",notranslate":"")}if(r||i?(e.dangerouslySetAllPagesToNoIndex&&(c.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(c.nofollow=!0),a.push(o.a.createElement("meta",{key:"robots",name:"robots",content:(r?"noindex":"index")+","+(i?"nofollow":"follow")+p})),a.push(o.a.createElement("meta",{key:"googlebot",name:"googlebot",content:(r?"noindex":"index")+","+(i?"nofollow":"follow")+p}))):(a.push(o.a.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+p})),a.push(o.a.createElement("meta",{key:"googlebot",name:"googlebot",content:"index,follow"+p}))),e.description&&a.push(o.a.createElement("meta",{key:"description",name:"description",content:e.description})),e.mobileAlternate&&a.push(o.a.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach((function(e){a.push(o.a.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))})),e.twitter&&(e.twitter.cardType&&a.push(o.a.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&a.push(o.a.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&a.push(o.a.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&a.push(o.a.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),e.openGraph){if((e.openGraph.url||e.canonical)&&a.push(o.a.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var v=e.openGraph.type.toLowerCase();a.push(o.a.createElement("meta",{key:"og:type",property:"og:type",content:v})),"profile"===v&&e.openGraph.profile?(e.openGraph.profile.firstName&&a.push(o.a.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&a.push(o.a.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&a.push(o.a.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&a.push(o.a.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===v&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach((function(e,t){a.push(o.a.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))})),e.openGraph.book.isbn&&a.push(o.a.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&a.push(o.a.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach((function(e,t){a.push(o.a.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))}))):"article"===v&&e.openGraph.article?(e.openGraph.article.publishedTime&&a.push(o.a.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&a.push(o.a.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&a.push(o.a.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach((function(e,t){a.push(o.a.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))})),e.openGraph.article.section&&a.push(o.a.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach((function(e,t){a.push(o.a.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))}))):"video.movie"!==v&&"video.episode"!==v&&"video.tv_show"!==v&&"video.other"!==v||!e.openGraph.video||(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach((function(e,t){e.profile&&a.push(o.a.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&a.push(o.a.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))})),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach((function(e,t){a.push(o.a.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))})),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach((function(e,t){a.push(o.a.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))})),e.openGraph.video.duration&&a.push(o.a.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&a.push(o.a.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach((function(e,t){a.push(o.a.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))})),e.openGraph.video.series&&a.push(o.a.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}(e.openGraph.title||e.title)&&a.push(o.a.createElement("meta",{key:"og:title",property:"og:title",content:e.openGraph.title||n})),(e.openGraph.description||e.description)&&a.push(o.a.createElement("meta",{key:"og:description",property:"og:description",content:e.openGraph.description||e.description})),e.defaultOpenGraphImageWidth&&(c.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(c.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&e.openGraph.images.forEach((function(e,t){a.push(o.a.createElement("meta",{key:"og:image:0"+t,property:"og:image",content:e.url})),e.alt&&a.push(o.a.createElement("meta",{key:"og:image:alt0"+t,property:"og:image:alt",content:e.alt})),e.width?a.push(o.a.createElement("meta",{key:"og:image:width0"+t,property:"og:image:width",content:e.width.toString()})):c.defaultOpenGraphImageWidth&&a.push(o.a.createElement("meta",{key:"og:image:width0"+t,property:"og:image:width",content:c.defaultOpenGraphImageWidth.toString()})),e.height?a.push(o.a.createElement("meta",{key:"og:image:height"+t,property:"og:image:height",content:e.height.toString()})):c.defaultOpenGraphImageHeight&&a.push(o.a.createElement("meta",{key:"og:image:height"+t,property:"og:image:height",content:c.defaultOpenGraphImageHeight.toString()}))})),e.defaultOpenGraphVideoWidth&&(c.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(c.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&e.openGraph.videos.forEach((function(e,t){a.push(o.a.createElement("meta",{key:"og:video:0"+t,property:"og:video",content:e.url})),e.alt&&a.push(o.a.createElement("meta",{key:"og:video:alt0"+t,property:"og:video:alt",content:e.alt})),e.width?a.push(o.a.createElement("meta",{key:"og:video:width0"+t,property:"og:video:width",content:e.width.toString()})):c.defaultOpenGraphVideoWidth&&a.push(o.a.createElement("meta",{key:"og:video:width0"+t,property:"og:video:width",content:c.defaultOpenGraphVideoWidth.toString()})),e.height?a.push(o.a.createElement("meta",{key:"og:video:height"+t,property:"og:video:height",content:e.height.toString()})):c.defaultOpenGraphVideoHeight&&a.push(o.a.createElement("meta",{key:"og:video:height"+t,property:"og:video:height",content:c.defaultOpenGraphVideoHeight.toString()}))})),e.openGraph.locale&&a.push(o.a.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),e.openGraph.site_name&&a.push(o.a.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.site_name}))}return e.canonical&&a.push(o.a.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach((function(e){var t,n,r;a.push(o.a.createElement("meta",Object.assign({key:"meta:"+(null!=(t=null!=(n=null!=(r=e.keyOverride)?r:e.name)?n:e.property)?t:e.httpEquiv)},e)))})),null!=(t=e.additionalLinkTags)&&t.length&&e.additionalLinkTags.forEach((function(e){var t;a.push(o.a.createElement("link",Object.assign({key:"link"+(null!=(t=e.keyOverride)?t:e.href)+e.rel},e)))})),a},d=(r.Component,function(e){function t(){return e.apply(this,arguments)||this}return l(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.noindex,n=void 0!==a&&a,r=e.nofollow,i=e.robotsProps,l=e.description,c=e.canonical,d=e.openGraph,u=e.facebook,h=e.twitter,f=e.additionalMetaTags,m=e.titleTemplate,g=e.mobileAlternate,y=e.languageAlternates,v=e.additionalLinkTags;return o.a.createElement(p.a,null,s({title:t,noindex:n,nofollow:r,robotsProps:i,description:l,canonical:c,facebook:u,openGraph:d,additionalMetaTags:f,twitter:h,titleTemplate:m,mobileAlternate:g,languageAlternates:y,additionalLinkTags:v}))},t}(r.Component)),u=a("8Ila"),h=function(e){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(p.a,{children:[Object(n.jsx)("meta",{charSet:"UTF-8"},"charset"),Object(n.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"},"viewport"),Object(n.jsx)("link",{rel:"apple-touch-icon",href:"".concat("","/apple-touch-icon.png")},"apple"),Object(n.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat("","/favicon-32x32.png")},"icon32"),Object(n.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat("","/favicon-16x16.png")},"icon16"),Object(n.jsx)("link",{rel:"icon",href:"".concat("","/favicon.ico")},"favicon")]}),Object(n.jsx)(d,{title:e.title,description:e.description,canonical:e.canonical,openGraph:{title:e.title,description:e.description,url:e.canonical,locale:u.a.locale,site_name:u.a.site_name}})]})}},cTJO:function(e,t,a){"use strict";var n=a("zoAU"),r=a("7KCV");t.__esModule=!0,t.default=void 0;var o=r(a("q1tI")),i=a("elyg"),p=a("nOHt"),l=a("vNVm"),c={};function s(e,t,a,n){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,a,n).catch((function(e){0}));var r=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;c[t+"%"+a+(r?"%"+r:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,a=(0,p.useRouter)(),r=a&&a.pathname||"/",d=o.default.useMemo((function(){var t=(0,i.resolveHref)(r,e.href,!0),a=n(t,2),o=a[0],p=a[1];return{href:o,as:e.as?(0,i.resolveHref)(r,e.as):p||o}}),[r,e.href,e.as]),u=d.href,h=d.as,f=e.children,m=e.replace,g=e.shallow,y=e.scroll,v=e.locale;"string"===typeof f&&(f=o.default.createElement("a",null,f));var b=o.Children.only(f),k=b&&"object"===typeof b&&b.ref,G=(0,l.useIntersection)({rootMargin:"200px"}),x=n(G,2),w=x[0],E=x[1],O=o.default.useCallback((function(e){w(e),k&&("function"===typeof k?k(e):"object"===typeof k&&(k.current=e))}),[k,w]);(0,o.useEffect)((function(){var e=E&&t&&(0,i.isLocalURL)(u),n="undefined"!==typeof v?v:a&&a.locale,r=c[u+"%"+h+(n?"%"+n:"")];e&&!r&&s(a,u,h,{locale:n})}),[h,u,E,v,t,a]);var j={ref:O,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,t,a,n,r,o,p,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(a))&&(e.preventDefault(),null==p&&(p=n.indexOf("#")<0),t[r?"replace":"push"](a,n,{shallow:o,locale:l,scroll:p}))}(e,a,u,h,m,g,y,v)},onMouseEnter:function(e){(0,i.isLocalURL)(u)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),s(a,u,h,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var _="undefined"!==typeof v?v:a&&a.locale,I=a&&a.isLocaleDomain&&(0,i.getDomainLocale)(h,_,a&&a.locales,a&&a.domainLocales);j.href=I||(0,i.addBasePath)((0,i.addLocale)(h,_,a&&a.defaultLocale))}return o.default.cloneElement(b,j)};t.default=d},dG4f:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a("nKUr"),r=(a("q1tI"),a("YFqc")),o=a.n(r),i=a("8Ila"),p=function(e){return Object(n.jsxs)("div",{className:"antialiased w-full text-gray-700",children:[e.meta,Object(n.jsxs)("div",{className:"max-w-screen-md mx-auto",children:[Object(n.jsxs)("div",{className:"border-b border-gray-300",children:[Object(n.jsxs)("div",{className:"pt-16 pb-8",children:[Object(n.jsx)("div",{className:"font-bold text-3xl text-gray-900",children:i.a.title}),Object(n.jsx)("div",{className:"text-xl",children:i.a.description})]}),Object(n.jsx)("div",{children:Object(n.jsxs)("ul",{className:"flex flex-wrap text-xl",children:[Object(n.jsx)("li",{className:"mr-6",children:Object(n.jsx)(o.a,{href:"/",children:Object(n.jsx)("a",{className:"text-gray-700 border-none hover:text-gray-900",children:"Home"})})}),Object(n.jsx)("li",{className:"mr-6",children:Object(n.jsx)(o.a,{href:"/about/",children:Object(n.jsx)("a",{className:"text-gray-700 border-none hover:text-gray-900",children:"About"})})}),Object(n.jsx)("li",{className:"mr-6",children:Object(n.jsx)("a",{className:"text-gray-700 border-none hover:text-gray-900",href:"https://github.com/ixartz/Next-js-Boilerplate",children:"GitHub"})})]})})]}),Object(n.jsx)("div",{className:"py-5 text-xl content",children:e.children}),Object(n.jsxs)("div",{className:"border-t border-gray-300 text-center py-8 text-sm",children:["\xa9 Copyright"," ",(new Date).getFullYear()," ",i.a.title,". Powered with"," ",Object(n.jsx)("span",{role:"img","aria-label":"Love",children:"\u2665"})," ","by"," ",Object(n.jsx)("a",{href:"https://creativedesignsguru.com",children:"CreativeDesignsGuru"})]})]})]})}},g4pe:function(e,t,a){e.exports=a("8Kt/")},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,a){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var r=((n=a("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=r},mPvQ:function(e,t,a){var n=a("5fIB"),r=a("rlHP"),o=a("KckH"),i=a("kG2m");e.exports=function(e){return n(e)||r(e)||o(e)||i()}},oI91:function(e,t){e.exports=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},vNVm:function(e,t,a){"use strict";var n=a("zoAU");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,a=e.disabled||!i,l=(0,r.useRef)(),c=(0,r.useState)(!1),s=n(c,2),d=s[0],u=s[1],h=(0,r.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),a||d||e&&e.tagName&&(l.current=function(e,t,a){var n=function(e){var t=e.rootMargin||"",a=p.get(t);if(a)return a;var n=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),a=e.isIntersecting||e.intersectionRatio>0;t&&a&&t(a)}))}),e);return p.set(t,a={id:t,observer:r,elements:n}),a}(a),r=n.id,o=n.observer,i=n.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),p.delete(r))}}(e,(function(e){return e&&u(e)}),{rootMargin:t}))}),[a,t,d]);return(0,r.useEffect)((function(){if(!i&&!d){var e=(0,o.requestIdleCallback)((function(){return u(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[d]),[h,d]};var r=a("q1tI"),o=a("0G5g"),i="undefined"!==typeof IntersectionObserver;var p=new Map}}]);