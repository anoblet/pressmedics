System.register(["./chunk-1798c4f7.js","./chunk-84d12337.js","./chunk-3b109c3f.js","./chunk-1861d1e9.js","./chunk-2768f615.js","./chunk-41b85a06.js"],function(e,t){"use strict";var n,a,r,i,o,s,l,c,d,p,u,f,g,h,m,v,x,b,k,y,w,_,I,P,R,z,j,D,H;return{setters:[function(e){n=e.t,a=e.u,r=e.c,i=e.a,o=e.d,s=e.e,l=e.b,c=e.m,d=e.o,p=e.q,u=e.k,f=e.l,g=e.n,h=e.p},function(t){m=t.a,v=t.n,e("refreshPage",t.n)},function(e){x=e.a},function(e){b=e.a,k=e.b},function(e){y=e.b,w=e.c,_=e.d,I=e.e,P=e.f},function(t){R=t.a,z=t.b,j=t.c,D=t.d,H=t.e,e("fetchArticles",t.h)}],execute:function(){var e=new WeakMap,t=n(function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(t){var r=e.get(t);void 0===r&&(r={values:[]},e.set(t,r));var i=r.values;r.values=n;var o=function(e){if(void 0!==r.lastRenderedIndex&&e>r.lastRenderedIndex)return"break";var o=n[e];return a(o)||"function"!=typeof o.then?(t.setValue(o),r.lastRenderedIndex=e,"break"):void 0!==r.lastRenderedIndex&&"function"==typeof o.then&&o===i[e]?"continue":(r.lastRenderedIndex=void 0,void Promise.resolve(o).then(function(e){var n=r.values.indexOf(o);n>-1&&(void 0===r.lastRenderedIndex||n<r.lastRenderedIndex)&&(r.lastRenderedIndex=n,t.setValue(e),t.commit())}))};e:for(var s=0;s<n.length;s++){switch(o(s)){case"break":break e;case"continue":continue}}}});function A(){var e=u(["h3.paper-font-headline{font-size:1.14rem;font-weight:500;margin:10px 0;color:var(--app-dark-text-color)}p{word-spacing:.1px;font-size:14px}.ts-read-more{padding:13px 24px;background-color:var(--app-light-text-color)}.ts-read-more a{color:var(--app-primary-color);text-decoration:none}.ts-read-more .social_container{float:right;padding:0}.small-print .social-icon{padding-left:0}.social-icon{fill:#888;padding-left:7px}.gplus-icon:hover{fill:#db4437}.blogger-icon:hover{fill:#fb8f3d}.twitter-icon:hover{fill:#1da1f2}.facebook-icon:hover{fill:#3b5998}.linkedin-icon:hover{fill:#007bb5}.ts-blog-meta-calendar svg{vertical-align:bottom}.text-uppercase{border-top:1px solid var(--app-light-text-color);display:block;padding:16px 28px}a{color:#000;text-decoration:none}.inner{padding:20px 55px 10px 24px;background-color:#fff;border-bottom:1px solid #e4e4e4}.inner .category{position:absolute;left:0;right:0;top:0;bottom:40px;text-align:center;writing-mode:tb-rl;margin:12px;font-size:16px;color:var(--app-primary-color);font-weight:500;letter-spacing:.25px;text-transform:uppercase}.small-print{margin-top:20px;margin-bottom:10px;font-size:14px;padding-left:0;line-height:14px}.category-vertical-lr a{color:var(--app-light-text-color)}@media (min-width:460px){p{word-spacing:.1px;font-size:15px}.inner{margin-right:0}h3.paper-font-headline{font-size:1.5rem;margin:10px 0;color:var(--app-dark-text-color)}.inner p{padding:4px 0 0 0;max-width:570px}.flex-hover-card .inner>p{padding-top:10px}.flex-hover-card .inner>h3{margin:0 0 14px}.small-print{margin-top:14px;margin-bottom:4px;font-size:14px!important;padding-left:0;line-height:14px}}"]);return A=function(){return e},e}function W(){var e=u(["<div class=inner><h3 class=paper-font-headline>","</h3>",'<p class=small-print><i class="ts-blog-meta-calendar social-icon">',"</i> ","</p><span class=category>","</span></div><div class=ts-read-more><a id=",' aria-label="Read ','" href=/article/','/ track-type=navigateTo track-name=/solutions/headlessWordPress>Read Article</a><div class=social_container><div class=social_share><div class="slide-icons slide-left"><span class="social-icon gplus-icon" .link='," @click=",">",'</span> <span class="social-icon twitter-icon" .link='," @click=",">",'</span> <span class="social-icon linkedin-icon" .link='," @click=",">",'</span> <span class="social-icon facebook-icon" .link='," @click=",">","</span></div></div></div></div>"]);return W=function(){return e},e}var q=function(e){function t(){return i(this,t),o(this,s(t).apply(this,arguments))}return r(t,p),l(t,[{key:"render",value:function(){var e=this,t=this.item,n=t.id,a=t.title&&t.title.rendered,r=R(new Date(t.date),new Date),i=t.slug,o=t.categories_names,s=z(t.excerpt&&t.excerpt.rendered);return c(W(),a,s,y,"Updated "+r+" ago.",o,n,a,i,"https://plus.google.com/share?url=https://themesurgeons.com/".concat(i,"/"),function(t){return e._getDataHref(t)},w,"https://twitter.com/share?url=https://themesurgeons.com/".concat(i,"/"),function(t){return e._getDataHref(t)},_,"https://www.linkedin.com/cws/share?url=https://themesurgeons.com/".concat(i,"/"),function(t){return e._getDataHref(t)},I,"https://www.facebook.com/sharer.php?u=https://themesurgeons.com/".concat(i,"/"),function(t){return e._getDataHref(t)},P)}},{key:"_getDataHref",value:function(e){var t=e.currentTarget.link;window.open(t,"_blank","scrollbars=yes,resizable=yes,top=300,left=500,width=570,height=500")}}],[{key:"styles",get:function(){return[d(A())]}},{key:"properties",get:function(){return{item:{type:Object}}}}]),t}();function O(){var e=u([":host{display:block;padding:0}[hidden]{display:none!important}.hero{background:var(--app-light-text-color) url('https://","/images/header/ts-design-header-opt.svg') no-repeat;background-size:contain;background-position:center center}.ts-content-wrapper{padding:0 24px 0 5px;background:var(--section-background-light-grey)}.columns{max-width:987px;margin:0 auto;padding-top:34px}.ts-content-grid-box{max-width:100%}.ts-content-grid-box p{max-width:580px}.ts-grid-wrapper-auto-fill{grid-template-columns:repeat(auto-fill,minmax(350px,1fr));justify-items:left}.ts-blog-list-item{margin-bottom:24px}.flex-hover-card{min-width:100%}.flex-hover-card .inner>p{padding-top:0}#resource_loader{margin-top:-80px}.loader-wrapper{text-align:center}.sidebar{background-color:var(--app-light-text-color);width:210px;margin-left:34px;margin-top:5px}.nav li h3{color:var(--app-dark-text-color);font-size:16px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin:5px 0 5px;padding-bottom:0;padding-left:20px}.nav li{margin-right:17px}ul.right-side-nav{list-style:none;padding-left:0;margin-top:0}.nav li a{padding-left:20px}#resource_loader{margin-top:-80px}.loader-wrapper{text-align:center}@keyframes FadeIn{0%{opacity:0;transform:scale(.1)}85%{opacity:1;transform:scale(1.05)}100%{transform:scale(1)}}.ts-blog-list-item .flex-hover-card:nth-child(0){animation-delay:0ms;animation:FadeIn .5s ease;animation-fill-mode:both}.ts-blog-list-item .flex-hover-card:nth-child(1){animation-delay:1.6s;animation:FadeIn .5s ease;animation-fill-mode:both}.ts-blog-list-item .flex-hover-card:nth-child(3){animation-delay:1.8s}.ts-blog-list-item .flex-hover-card:nth-child(4){animation-delay:2.6s}@media (min-width:460px){.hero{background-position:94% center}.ts-content-wrapper{padding:0;background:var(--section-background-light-grey)}}"]);return O=function(){return e},e}function B(){var e=u(["<li><a id="," track-type=category"," track-name=blog-page track-metadata-position=body href=https://logicalphase.com/category/",">","</a></li>"]);return B=function(){return e},e}function C(){var e=u(["<div class=ts-blog-list-item><div class=flex-hover-card><ts-item .item=","></ts-item></div></div>"]);return C=function(){return e},e}function F(){var e=u(['<article id=ts-site class=ts-blog><header class=hero><div class="fade-in ts-header-wrapper"><h1 class="paper-font-display2 paper-font-light">WordPress Blog</h1><h2 class="paper-font-title paper-font-light">Pro tips for making the most of your WordPress site</h2><div class=center-button><a href=/contact/ class="button button-large button-logo ts-button" track-type=navigateTo track-name=home track-metadata-position=banner>Contact a WordPress Pro</a></div></div></header><div class=ts-content-wrapper><section class="content background-grey full-bleed-section ts-pad-top-6 ts-pad-bottom-12 ts-home"><div class=columns><main class=main><div class=ts-content-grid-box ?hidden=',">",'</div></main><aside class=sidebar><div class=nav><div class=sticky><ul class="fade-in right-side-nav l-space-bottom-5"><li><h3 class="l-pad-right-2 l-pad-left-2 text-uppercase" id=more-about-serverless>Blog Categories</h3></li>',"</ul></div></div></aside></div></section><ts-offline ?hidden="," @refresh=","></ts-offline></div></article>"]);return F=function(){return e},e}function T(){var e=u(["<p class=ts-loader style=padding-left:34px>An error occurred while retrieving blog list. Please reload.</p>"]);return T=function(){return e},e}function E(){var e=u(["<p class=ts-loader style=padding-left:34px>Loading. . .</p>"]);return E=function(){return e},e}window.customElements.define("ts-item",q),b.addReducers({articles:j});var S=f(m),V=function(e){function n(){return i(this,n),o(this,s(n).apply(this,arguments))}return r(n,e),l(n,[{key:"render",value:function(){var e=this._query,n=this._data,a=this._showOffline;return n?(t(n,c(E())),x({title:"HyperPress Articles",description:"WordPress How to's, tutorials, and pro tips to get the most from your site"}),c(F(),!e,D(n,function(e){return c(C(),e)}),D(n,function(e){return c(B(),e.categories_names,e.categories_names,e.categories_names,e.categories_names)}),!a,function(){return b.dispatch(v())})):c(T())}},{key:"stateChanged",value:function(e){this._query=e.articles.query,this._data=H(e),this._showOffline=e.app.offline&&e.articles.failure}}],[{key:"styles",get:function(){return[g,d(O(),S)]}},{key:"properties",get:function(){return{_query:{type:String},_data:{type:Array},_showOffline:{type:Boolean}}}}]),n}(k(b)(h));window.customElements.define("ts-blog",V)}}});
