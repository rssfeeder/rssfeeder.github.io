(function(){"use strict";var __webpack_modules__={8402:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Q8:function(){return sourcesContainer}});var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7658),core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);const sourcesContainer=[];function NewSource(Name=null,sub=null,Logo=null,Topics=null,Topics2=null,rssUrl=null,_genre=null){let topics=[],favicon=()=>{let e=Name.includes(".")?`https://${Name.toLowerCase()}/favicon.ico`:`https://${Name.toLowerCase().replaceAll(" ","")}.com/favicon.ico`;return sub||e},[name,url,logo]=[Name,favicon(),Logo];return Topics2?Topics2.map((item=>{let[title,url]=[item.replaceAll("-"," "),`${rssUrl[0]}${eval(rssUrl[1]).replaceAll(" ","-").toLowerCase()}${rssUrl[2]??""}`];if(title){let e=title.split(/\/| |-/gi),t=[];e.map((e=>{let i=e[0].toUpperCase(),s=e.slice(1).toLowerCase(),r=i+s;t.push(r),title=t.join(" ")}))}topics.push({title:title,url:url})})):Topics.map((e=>{let[t,i]=[e[0],e[1]];topics.push({title:t,url:i})})),sourcesContainer.push({name:name,url:url,logo:logo,topics:topics,_genre:_genre})}function UrlEncoder(e){return encodeURIComponent(e)}function ElapsedTime(e){let t=new Date(e).getTime(),i=Date.now(),s=(i-t)/1e3,r=s/60,a=r/60,n=a/24,o=n/7,c=o/4,l=c/12;return s>=1&&s<60?s.toFixed(0)+(2>s.toFixed(0)?" second":" seconds"):r>=1&&r<60?r.toFixed(0)+(2>r.toFixed(0)?" minute":" minutes"):a>=1&&a<24?a.toFixed(0)+(2>a.toFixed(0)?" hour":" hours"):n>=1&&n<7?n.toFixed(0)+(2>n.toFixed(0)?" day":" days"):o>=1&&o<4?o.toFixed(0)+(2>o.toFixed(0)?" week":" weeks"):c>=1&&c<12?c.toFixed(0)+(2>c.toFixed(0)?" month":" months"):l>=1?l.toFixed(0)+(2>l.toFixed(0)?" year":" years"):i-t?"Sometime":void 0}function articleLink(e){let t=e[0];return"object"==typeof t?t.$.href:t}function titlePic(e,t,i){if(Object.keys(i).includes("rss")){if(Object.prototype.hasOwnProperty.call(t[e],"enclosure"))return t[e].enclosure[0].$.url;if(Object.prototype.hasOwnProperty.call(t[e],"media:group"))return t[e]["media:group"][0]["media:content"][0].$.url;if(Object.prototype.hasOwnProperty.call(t[e],"media:content"))return t[e]["media:content"][0].$.url;if(Object.prototype.hasOwnProperty.call(t[e],"description")&&t[e].description[0].includes("src="))return t[e].description[0].split('src="')[1].split('"')[0];if(Object.prototype.hasOwnProperty.call(t[e],"a10:content")&&t[e]["a10:content"][0]._.includes("url(&quot;"))return t[e]["a10:content"][0]._.split("&quot;")[1];if("The Diplomat"===t[e].title)return!1;if(Object.prototype.hasOwnProperty.call(t[e],"description")&&t[e].description[0].includes("src="))return t[e].content[0]}if(Object.keys(i).includes("rdf:RDF"))return!1}function articleDescription(e,t,i){if(Object.keys(i).includes("rss")&&Object.prototype.hasOwnProperty.call(t[e],"description")){let i=0===t[e].description[0].replaceAll("\n","").replaceAll(" ","").length||t[e].description[0].includes("DefenceTalk");if(Object.prototype.hasOwnProperty.call(t[e],"description")&&!i){if(t[e].description[0].includes("</")&&!i)return t[e].description[0].replaceAll(/<[^>]*>/gi,"").trim();if(t[e].description[0]&&!i)return t[e].description[0].trim()}return!1}return Object.keys(i).includes("rdf:RDF")&&Object.prototype.hasOwnProperty.call(t[e],"description")?t[e].description:Object.keys(i).includes("feed")&&Object.prototype.hasOwnProperty.call(t[e],"entry")?t[e].content[0].replaceAll(/<[^>]*>/gi,"").trim():Object.keys(i).includes("feed")&&Object.prototype.hasOwnProperty.call(t[e],"summary")?t[e].summary[0].replaceAll(/<[^>]*>/gi,"").trim():void 0}},2791:function(e,t,i){var s={};i.r(s),i.d(s,{Z:function(){return $}});var r=i(9242),a=i(3396);function n(e,t,i,s,r,n){const o=(0,a.up)("RSSFeed");return(0,a.wg)(),(0,a.j4)(o)}var o=i(7139);const c={class:"container"},l={class:"row"},d={key:0},u={class:"row mb-3"},p={class:"col-sm-6 text-center"},_={class:"col-sm-6 text-center"},h={class:"d-flex justify-content-center align-items-center"},f=(0,a._)("label",{class:"me-2"},"Choose Genre:",-1),m=(0,a._)("option",{value:"",selected:""},"All",-1),b=(0,a._)("option",{value:"Finance"},"Finance",-1),v=(0,a._)("option",{value:"News"},"News",-1),w=(0,a._)("option",{value:"Tech Education"},"Tech Education",-1),g=(0,a._)("option",{value:"Defense"},"Defense",-1),k=(0,a._)("option",{value:"Science"},"Science",-1),y=(0,a._)("option",{value:"Sports"},"Sports",-1),x=(0,a._)("option",{value:"Blogs"},"Blogs",-1),D=(0,a._)("option",{value:"Podcasts"},"Podcasts",-1),j=(0,a._)("option",{value:"Music"},"Music",-1),O=(0,a._)("option",{value:"Gaming"},"Gaming",-1),N=[m,b,v,w,g,k,y,x,D,j,O],C={key:0},T={class:"text-light mb-3"},E={key:0,"data-cy":"actions-article-wrapper",class:"articles-wrapper"},P={key:1},F=(0,a._)("span",{class:"text-danger mb-0"},[(0,a._)("strong",null,[(0,a._)("em",null,"No articles found here!")])],-1),S={key:0},q={class:"text-light mb-3"};function W(e,t,i,s,n,m){const b=(0,a.up)("HeaderComponent"),v=(0,a.up)("loading-spinner"),w=(0,a.up)("sources-tiles"),g=(0,a.up)("articles-tiles"),k=(0,a.up)("card-component"),y=(0,a.up)("topic-tiles"),x=(0,a.up)("error-component"),D=(0,a.up)("footer-component");return(0,a.wg)(),(0,a.iD)("div",c,[(0,a._)("div",l,[(0,a._)("div",{class:(0,o.C_)({"col-2":n.screenWidth>=1200,"":n.screenWidth<1200})},null,2),(0,a._)("div",{class:(0,o.C_)({"":n.screenWidth<1200,"col-8":n.screenWidth>=1200})},[(0,a.Wm)(b,{class:"mb-3",onBackwardNav:t[0]||(t[0]=e=>m.backwardNav(n.isError)),tabNav:n.tabNav,isloading:n.isloading,isError:n.isError,showSourceCode:e.showSourceCode,devActivationCount:n.devActivationCount},null,8,["tabNav","isloading","isError","showSourceCode","devActivationCount"]),(0,a.Wm)(v,{isloading:n.isloading,isError:n.isError},null,8,["isloading","isError"]),(0,a.Wm)(r.uT,{name:"card-fade",appear:"",mode:"out-in"},{default:(0,a.w5)((()=>[n.isloading||0!==n.tabNav?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",d,[(0,a._)("div",u,[(0,a._)("div",p,[(0,a.Wm)(r.uT,{name:"fade",appear:"",mode:"out-in"},{default:(0,a.w5)((()=>[(0,a._)("h2",{onClick:t[1]||(t[1]=e=>m.devMode()),class:"text-light mb-3"},"Sources")])),_:1})]),(0,a._)("div",_,[(0,a._)("div",h,[f,(0,a.wy)((0,a._)("select",{class:"form-select w-50","onUpdate:modelValue":t[2]||(t[2]=e=>this.selectGenre=e),onChange:t[3]||(t[3]=e=>m.formatSourcesByGenre(this.selectGenre))},N,544),[[r.bM,this.selectGenre]])])])]),(0,a._)("div",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.formattedSources,((t,i)=>((0,a.wg)(),(0,a.iD)("div",{key:i,class:"d-inline-block"},[(0,a.Wm)(w,{index:i,source:t,topics:e.topics,isloading:n.isloading,tabNav:n.tabNav,onForwardNav:e=>m.forwardNav(t)},null,8,["index","source","topics","isloading","tabNav","onForwardNav"])])))),128))])]))])),_:1}),n.isError||n.isloading||2!==n.tabNav?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",C,[(0,a.Wm)(r.uT,{name:"fade",appear:"",mode:"out-in"},{default:(0,a.w5)((()=>[(0,a._)("h2",T,(0,o.zw)(n.topicTitle2),1)])),_:1}),this.feedHasArticles()?((0,a.wg)(),(0,a.iD)("div",E,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.feeds,((t,i)=>((0,a.wg)(),(0,a.iD)("div",{class:"mb-2",key:i},[(0,a.Wm)(g,{provider:n.topicTitle,index:i,feed:t,feeds:this.feeds,data:this.data,screenWidth:n.screenWidth,pic:e.pic},null,8,["provider","index","feed","feeds","data","screenWidth","pic"])])))),128))])):((0,a.wg)(),(0,a.iD)("div",P,[(0,a.Wm)(k,{onClick:t[4]||(t[4]=e=>m.backwardNav(n.isError)),class:"d-flex justify-content-center align-content-center p-4"},{default:(0,a.w5)((()=>[F])),_:1})]))])),(0,a.Wm)(r.uT,{name:"card-fade",appear:"",mode:"out-in"},{default:(0,a.w5)((()=>[n.isloading||1!==n.tabNav?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",S,[(0,a.Wm)(r.uT,{name:"fade",appear:"",mode:"out-in"},{default:(0,a.w5)((()=>[(0,a._)("h2",q,(0,o.zw)(n.topicTitle),1)])),_:1}),(0,a._)("div",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.topicData,((e,i)=>((0,a.wg)(),(0,a.iD)("div",{key:i,class:"d-inline-block"},[(0,a.Wm)(y,{index:i,topic:e,topicNavUrl:n.topicNavUrl,onGetRssFeeds:t=>m.getRssFeeds(n.topicNavUrl,e.url,e.title),onForwardNav:t[5]||(t[5]=e=>m.forwardNav())},null,8,["index","topic","topicNavUrl","onGetRssFeeds"])])))),128))])]))])),_:1}),(0,a.Wm)(x,{onBackwardNav:t[6]||(t[6]=e=>m.backwardNav()),data:n.data,tabNav:n.tabNav,isError:n.isError},null,8,["data","tabNav","isError"]),(0,a.Wm)(D,{onBackwardNav:t[7]||(t[7]=e=>m.backwardNav(n.isError)),data:n.data,tabNav:n.tabNav,isloading:n.isloading,sources:e.sources,isError:n.isError,topicData:n.topicData||[],feeds:e.feeds||[]},null,8,["data","tabNav","isloading","sources","isError","topicData","feeds"])],2),(0,a._)("div",{class:(0,o.C_)({"col-2":n.screenWidth>=1200,"":n.screenWidth<1200})},null,2)])])}i(7658);var U=i(6265),A=i.n(U),L=i(4802),M=i(8402);const R=M.Q8;void 0!==s.Sources&&R.push(...s.Sources);var $=R;const B=e=>((0,a.dD)("data-v-ac7dd1d2"),e=e(),(0,a.Cn)(),e),I=(0,a.uE)('<h1 class="text-light mb-1" data-v-ac7dd1d2><strong data-v-ac7dd1d2>RSSFeeder<sup data-v-ac7dd1d2>++</sup></strong></h1><label class="text-light mb-4" data-v-ac7dd1d2><strong data-v-ac7dd1d2> Powered by <i class="fa-brands fa-vuejs" data-v-ac7dd1d2></i>  <i class="fa-solid fa-rss" data-v-ac7dd1d2></i>  <i class="fa-brands fa-node-js" data-v-ac7dd1d2></i></strong></label>',2),H={class:"alert alert-dark",role:"alert"},z=["href"],Z=["href"],G=B((()=>(0,a._)("i",{class:"bi bi-code-slash"},null,-1))),K=["disabled"],Y=B((()=>(0,a._)("i",{class:"bi bi-arrow-left"},null,-1))),V=B((()=>(0,a._)("hr",{class:"my-3",size:"5",noshade:""},null,-1)));function Q(e,t,i,s,r,n){return(0,a.wg)(),(0,a.iD)("div",null,[I,(0,a._)("div",H,[(0,a.Uk)(" Add new feed? Submit a "),(0,a._)("a",{target:"_blank",class:"issue btn-sm btn-secondary",href:this.source_code+"/issues"},"ticket",8,z)]),0===this.tabNav&&this.showSourceCode?((0,a.wg)(),(0,a.iD)("a",{key:0,href:this.source_code_2,class:"btn btn-outline-light mb-lg-3 w-100",target:"_blank"},[G,(0,a.Uk)(" Source Code")],8,Z)):(0,a.kq)("",!0),this.tabNav>0?((0,a.wg)(),(0,a.iD)("button",{key:1,"data-cy":"actions-back-button",onClick:t[0]||(t[0]=t=>e.$emit("backwardNav",this.isError)),class:"btn btn-light w-100",disabled:this.isloading},[Y,(0,a.Uk)(" Back ")],8,K)):(0,a.kq)("",!0),V])}var J={data(){return{source_code:"https://github.com/rubanero14/Multi-RSS-News-Feed-Vue3",source_code_2:"https://github.com/rubanero14/rubanero14-Convert-XML-to-JSON-Guide/blob/master/src"}},props:["tabNav","isloading","isError","showSourceCode","devActivationCount"]},X=i(89);const ee=(0,X.Z)(J,[["render",Q],["__scopeId","data-v-ac7dd1d2"]]);var te=ee;const ie=e=>((0,a.dD)("data-v-2a2c46f1"),e=e(),(0,a.Cn)(),e),se={key:0,class:"text-danger"},re={key:0},ae={key:1,class:"row"},ne={class:"col-12"},oe={class:"text-danger mb-3"},ce=ie((()=>(0,a._)("img",{class:"err",src:"err.png"},null,-1))),le=ie((()=>(0,a._)("figcaption",{class:"mb-3"},[(0,a.Uk)(" Figure 1 - Click "),(0,a._)("span",null,"Enable Access"),(0,a.Uk)(" button below to open this page ")],-1))),de=ie((()=>(0,a._)("ol",{type:"1",class:"text-start text-light"},[(0,a._)("li",null,[(0,a.Uk)(" Click "),(0,a._)("strong",{class:"text-success"},"Enable Access"),(0,a.Uk)(" button below ")]),(0,a._)("li",null,[(0,a.Uk)(" When new window pops up, click "),(0,a._)("strong",{class:"text-success"},"Request temporary access to the demo server"),(0,a.Uk)(" button as per figure above. ")]),(0,a._)("li",null,[(0,a.Uk)(" Close that window and back to "),(0,a._)("span",{class:"text-light"},[(0,a._)("strong",null,"RSS Feed")]),(0,a.Uk)(" page and start browsing for articles ")])],-1))),ue={class:"col-12"},pe=["href"],_e=ie((()=>(0,a._)("i",{class:"bi bi-hdd-rack"},null,-1)));function he(e,t,i,s,n,c){return(0,a.wg)(),(0,a.j4)(r.uT,{name:"card-fade",appear:"",mode:"out-in"},{default:(0,a.w5)((()=>[this.isError&&2===this.tabNav?((0,a.wg)(),(0,a.iD)("div",se,[(0,a.Wm)(r.uT,{name:"fade",appear:"",mode:"out-in"},{default:(0,a.w5)((()=>[this.data.includes("403")?((0,a.wg)(),(0,a.iD)("div",ae,[(0,a._)("div",ne,[(0,a._)("h2",oe,(0,o.zw)(this.data.replace(",","!")),1),ce,le,de]),(0,a._)("div",ue,[(0,a._)("a",{onClick:t[0]||(t[0]=t=>e.$emit("backwardNav")),href:this.cors_link,class:"btn btn-success w-100",target:"_blank"},[_e,(0,a.Uk)(" Enable Access ")],8,pe)])])):((0,a.wg)(),(0,a.iD)("p",re,(0,o.zw)(this.data)+" Try reloading again... ",1))])),_:1})])):(0,a.kq)("",!0)])),_:1})}var fe={data(){return{cors_link:"https://cors-anywhere.herokuapp.com/corsdemo?accessRequest=01a082fe9409ff8c6c2e76a853281642569c12198c0358fadbbe4a03321d2fd7"}},props:["data","tabNav","isError"]};const me=(0,X.Z)(fe,[["render",he],["__scopeId","data-v-2a2c46f1"]]);var be=me;const ve=e=>((0,a.dD)("data-v-9c6cbc98"),e=e(),(0,a.Cn)(),e),we=ve((()=>(0,a._)("hr",{class:"my-3",size:"5",noshade:""},null,-1))),ge=["disabled"],ke=ve((()=>(0,a._)("i",{class:"bi bi-arrow-left"},null,-1))),ye={class:"full-length"},xe=["href"];function De(e,t,i,s,r,n){return(0,a.wg)(),(0,a.iD)(a.HY,null,[we,this.tabNav>0&&n.showLowerBackBtn()?((0,a.wg)(),(0,a.iD)("button",{key:0,onClick:t[0]||(t[0]=t=>e.$emit("backwardNav","isError")),class:"btn btn-light w-100 mb-4",disabled:this.isloading},[ke,(0,a.Uk)(" Back ")],8,ge)):(0,a.kq)("",!0),(0,a._)("footer",ye,[(0,a.Uk)(" © "+(0,o.zw)((new Date).getFullYear())+" by ",1),(0,a._)("strong",null,[(0,a._)("a",{target:"_blank",class:"text-light ms-1",style:{"text-decoration":"none"},href:this.source_code},"RUBANERO",8,xe)])])],64)}var je={data(){return{source_code:"https://github.com/rubanero14/Multi-RSS-News-Feed-Vue3"}},props:["tabNav","isloading","isError","topicData","feeds","sources"],methods:{showLowerBackBtn(){return 1===this.tabNav?void 0!==this.topicData&&this.topicData.length>4:2===this.tabNav?void 0!==this.topicData&&this.feeds.length>4:void 0}}};const Oe=(0,X.Z)(je,[["render",De],["__scopeId","data-v-9c6cbc98"]]);var Ne=Oe;const Ce=["data-cy"],Te={class:"d-contents"},Ee=["src"];function Pe(e,t,i,s,n,c){const l=(0,a.up)("card-component"),d=(0,a.up)("center");return(0,a.wg)(),(0,a.j4)(r.uT,{appear:"",key:this.index,name:"fade",mode:"out-in"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{style:(0,o.j5)({"--i":this.index}),title:i.source.name},{default:(0,a.w5)((()=>[(0,a._)("a",{"data-cy":`actions-source-${i.index}`,class:"title",onClick:t[0]||(t[0]=t=>e.$emit("forwardNav",i.source))},[(0,a.Wm)(l,{class:"logo p-0 mb-3 mx-2"},{default:(0,a.w5)((()=>[(0,a._)("div",Te,[(0,a._)("img",{class:"logo",src:i.source.logo,onerror:"this.src='./rss-logo.png'"},null,8,Ee)])])),_:1})],8,Ce)])),_:1},8,["style","title"])])),_:1})}const Fe={class:"card"};function Se(e,t){return(0,a.wg)(),(0,a.iD)("div",Fe,[(0,a.WI)(e.$slots,"default",{},void 0,!0)])}const qe={},We=(0,X.Z)(qe,[["render",Se],["__scopeId","data-v-57177888"]]);var Ue=We,Ae={props:["source","isloading","tabNav","index"],components:{CardComponent:Ue}};const Le=(0,X.Z)(Ae,[["render",Pe],["__scopeId","data-v-331cc2fe"]]);var Me=Le;const Re={key:0,class:"text-center spinner-border text-light",role:"status"};function $e(e,t,i,s,n,o){return(0,a.wg)(),(0,a.j4)(r.uT,{name:"card-fade",appear:"",mode:"out-in"},{default:(0,a.w5)((()=>[this.isloading&&!this.isError?((0,a.wg)(),(0,a.iD)("div",Re)):(0,a.kq)("",!0)])),_:1})}var Be={props:["isloading","isError"]};const Ie=(0,X.Z)(Be,[["render",$e]]);var He=Ie;const ze=e=>((0,a.dD)("data-v-70f4fa1e"),e=e(),(0,a.Cn)(),e),Ze=["data-cy","href"],Ge={key:0,class:"row"},Ke={class:"col-12"},Ye={class:"d-flex justify-content-center align-items-center"},Ve=["src"],Qe=["src"],Je=["href"],Xe=["src"],et={key:0,class:"media-divider mx-3"},tt={class:"p-3"},it={class:"row"},st={class:"col-12"},rt=["innerHTML"],at={key:0,class:"col-12"},nt=ze((()=>(0,a._)("hr",null,null,-1))),ot=["innerHTML"],ct={class:"col-12"},lt=ze((()=>(0,a._)("hr",null,null,-1))),dt={class:"d-flex justify-content-between align-contents-center"},ut=["src"],pt={key:1,class:"time d-flex align-items-center text-secondary mb-0"},_t={class:"row pe-0"},ht={key:0,class:"col-6 d-flex justify-content-center align-items-center banner-wrapper"},ft=["src"],mt=["src"],bt=["href"],vt=["src"],wt={class:"row h-100 ps-0"},gt={class:"col-12 p-3 d-flex justify-content-center align-items-center"},kt=["innerHTML"],yt={key:0,class:"banner-divider my-0"},xt={key:1,class:"col-12 p-3"},Dt={class:"d-flex justify-content-center align-items-center"},jt=["innerHTML"],Ot=["innerHTML"],Nt=ze((()=>(0,a._)("hr",{class:"my-0"},null,-1))),Ct={class:"d-flex justify-content-between align-content-end px-3 py-2"},Tt=["src"],Et={key:1,class:"time d-flex align-items-center text-secondary mb-0"};function Pt(e,t,i,s,n,c){const l=(0,a.up)("card-component"),d=(0,a.up)("center");return(0,a.wg)(),(0,a.j4)(r.uT,{key:this.index,appear:"",name:"fade-articles",mode:"out-in"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{style:(0,o.j5)({"--j":this.index})},{default:(0,a.w5)((()=>[(0,a._)("a",{"data-cy":`actions-article-${i.index}`,class:"title",href:c.link(i.feed.link),target:"_blank"},[(0,a._)("article",null,[i.screenWidth<=768?((0,a.wg)(),(0,a.j4)(l,{key:0,class:"mb-4"},{default:(0,a.w5)((()=>[c.titlePic(i.index,i.feeds,i.data)?((0,a.wg)(),(0,a.iD)("div",Ge,[(0,a._)("div",Ke,[(0,a._)("div",Ye,[c.titlePic(i.index,i.feeds,i.data).includes("youtube")?((0,a.wg)(),(0,a.iD)("iframe",{key:0,class:"banner",src:c.titlePic(i.index,i.feeds,i.data),frameborder:"0"},null,8,Ve)):c.titlePic(i.index,i.feeds,i.data).includes(".mp3")?((0,a.wg)(),(0,a.iD)("audio",{key:1,class:"banner",controls:"",src:c.titlePic(i.index,i.feeds,i.data)},[(0,a._)("a",{href:c.titlePic(i.index,i.feeds,i.data)}," Download ",8,Je)],8,Qe)):((0,a.wg)(),(0,a.iD)("img",{key:2,class:"banner",src:c.titlePic(i.index,i.feeds,i.data),onerror:"this.style='display: none'"},null,8,Xe))]),c.titlePic(i.index,i.feeds,i.data).includes(".mp3")?((0,a.wg)(),(0,a.iD)("hr",et)):(0,a.kq)("",!0)])])):(0,a.kq)("",!0),(0,a._)("div",tt,[(0,a._)("div",it,[(0,a._)("div",st,[(0,a._)("h3",{class:"title text-center text-dark mb-0",innerHTML:i.feed.title},null,8,rt)]),c.articleDescription(i.index,i.feeds,i.data)?((0,a.wg)(),(0,a.iD)("div",at,[nt,(0,a._)("em",null,[(0,a._)("p",{class:"description text-dark mb-0",innerHTML:c.articleInjector()},null,8,ot)])])):(0,a.kq)("",!0),(0,a._)("div",ct,[lt,(0,a._)("div",dt,[i.pic?((0,a.wg)(),(0,a.iD)("img",{key:0,class:"img",src:i.pic,onerror:"this.src=this.rss_icon"},null,8,ut)):(0,a.kq)("",!0),c.date?((0,a.wg)(),(0,a.iD)("aside",pt,[(0,a._)("em",null,[(0,a._)("strong",null,(0,o.zw)(this.provider)+" · "+(0,o.zw)(c.date(i.index))+" ago",1)])])):(0,a.kq)("",!0)])])])])])),_:1})):((0,a.wg)(),(0,a.j4)(l,{key:1,class:"mb-4"},{default:(0,a.w5)((()=>[(0,a._)("div",_t,[c.titlePic(i.index,i.feeds,i.data)?((0,a.wg)(),(0,a.iD)("div",ht,[c.titlePic(i.index,i.feeds,i.data).includes("youtube")?((0,a.wg)(),(0,a.iD)("iframe",{key:0,class:"banner",src:c.titlePic(i.index,i.feeds,i.data),frameborder:"0"},null,8,ft)):c.titlePic(i.index,i.feeds,i.data).includes(".mp3")?((0,a.wg)(),(0,a.iD)("audio",{key:1,class:"banner",controls:"",src:c.titlePic(i.index,i.feeds,i.data)},[(0,a._)("a",{href:c.titlePic(i.index,i.feeds,i.data)}," Download ",8,bt)],8,mt)):((0,a.wg)(),(0,a.iD)("img",{key:2,class:"banner",src:c.titlePic(i.index,i.feeds,i.data),onerror:"this.style='display: none'"},null,8,vt))])):(0,a.kq)("",!0),(0,a._)("div",{class:(0,o.C_)(["ps-0",{"col-6":c.titlePic(i.index,i.feeds,i.data),"col-12":!c.titlePic(i.index,i.feeds,i.data)}])},[(0,a._)("div",wt,[(0,a._)("div",gt,[(0,a._)("h3",{class:"title mx-3 text-center text-dark mb-0",innerHTML:i.feed.title},null,8,kt)]),c.articleDescription(i.index,i.feeds,i.data)?((0,a.wg)(),(0,a.iD)("hr",yt)):(0,a.kq)("",!0),c.articleDescription(i.index,i.feeds,i.data)?((0,a.wg)(),(0,a.iD)("div",xt,[(0,a._)("div",Dt,[(0,a._)("em",{class:(0,o.C_)(["desc p-3",{"ms-3":!c.titlePic(i.index,i.feeds,i.data),"":c.titlePic(i.index,i.feeds,i.data)}])},[i.screenWidth>=1200?((0,a.wg)(),(0,a.iD)("p",{key:0,class:"description text-center text-dark mb-0",innerHTML:c.articleInjector()},null,8,jt)):i.screenWidth>=768&&i.screenWidth<1200?((0,a.wg)(),(0,a.iD)("p",{key:1,class:"description text-center text-dark mb-0",innerHTML:c.articleInjector()},null,8,Ot)):(0,a.kq)("",!0)],2)])])):(0,a.kq)("",!0)])],2)]),Nt,(0,a._)("div",Ct,[i.pic?((0,a.wg)(),(0,a.iD)("img",{key:0,class:"img",src:i.pic,onerror:"this.src=this.rss_icon"},null,8,Tt)):(0,a.kq)("",!0),c.date?((0,a.wg)(),(0,a.iD)("aside",Et,[(0,a._)("em",null,[(0,a._)("strong",null,(0,o.zw)(this.provider)+" · "+(0,o.zw)(c.date(i.index))+" ago ",1)])])):(0,a.kq)("",!0)])])),_:1}))])],8,Ze)])),_:1},8,["style"])])),_:1})}var Ft={props:["index","feed","data","feeds","screenWidth","pic","provider"],components:{CardComponent:Ue},data(){return{articleDesktop:"",articleMobile:"",rss_icon:"https://rss.com/favicon.ico"}},methods:{link(e){return(0,L.Nd)(e)},date(){const e=e=>Object.keys(e).includes("rss")?"pubDate":Object.keys(e).includes("rdf:RDF")?"dc:date":Object.keys(e).includes("feed")?"updated":void 0;return this.rssMode=e(this.data),(0,L.WC)(this.feeds[0][this.rssMode])},titlePic(e,t,i){return(0,L.xZ)(e,t,i)},articleDescription(e,t,i){return(0,L.mt)(e,t,i)},articleInjector(){return this.screenWidth>=1200?this.articleDesktop=this.articleDescription(this.index,this.feeds,this.data).toString().substr(0,200).replace(": ","")+"..."+'<span class="text-primary">read more</span>':this.screenWidth>=768&&this.screenWidth<1200?this.articleDesktop=this.articleDescription(this.index,this.feeds,this.data).toString().substr(0,100).replace(": ","")+"..."+'<span class="text-primary">read more</span>':this.screenWidth<768?this.articleMobile=this.articleDescription(this.index,this.feeds,this.data).toString().substr(0,100).replace(": ","")+"..."+'<span class="text-primary">read more</span>':void 0}}};const St=(0,X.Z)(Ft,[["render",Pt],["__scopeId","data-v-70f4fa1e"]]);var qt=St;const Wt=e=>((0,a.dD)("data-v-2063a72e"),e=e(),(0,a.Cn)(),e),Ut=["data-cy"],At={class:"d-inline-block justify-content-center align-items-center m-0"},Lt=["src"],Mt=Wt((()=>(0,a._)("br",null,null,-1))),Rt={class:"mb-2"},$t={class:"text-dark title"};function Bt(e,t,i,s,n,c){const l=(0,a.up)("CardComponent"),d=(0,a.up)("center");return(0,a.wg)(),(0,a.j4)(r.uT,{key:this.index,appear:"",name:"fade",mode:"out-in"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{style:(0,o.j5)({"--i":this.index})},{default:(0,a.w5)((()=>[(0,a._)("a",{"data-cy":`actions-topic-${i.index}`,class:"title",onClick:t[0]||(t[0]=t=>(e.$emit("getRssFeeds",i.topicNavUrl,i.topic.url,i.topic.title),e.$emit("forwardNav")))},[(0,a.Wm)(l,{class:"tile mb-3 mx-2 p-3"},{default:(0,a.w5)((()=>[(0,a._)("div",At,[(0,a._)("img",{class:"favicon",src:i.topicNavUrl,onerror:"this.src=this.rss_icon"},null,8,Lt),Mt,(0,a._)("strong",Rt,[(0,a._)("span",$t,(0,o.zw)(i.topic.title),1)])])])),_:1})],8,Ut)])),_:1},8,["style"])])),_:1})}var It={data(){return{rss_icon:"https://rss.com/favicon.ico"}},props:["index","topic","topicNavUrl"],components:{CardComponent:Ue}};const Ht=(0,X.Z)(It,[["render",Bt],["__scopeId","data-v-2063a72e"]]);var zt=Ht;const Zt=i(9058);var Gt={components:{HeaderComponent:te,ErrorComponent:be,FooterComponent:Ne,SourcesTiles:Me,LoadingSpinner:He,ArticlesTiles:qt,TopicTiles:zt,CardComponent:Ue},data(){return{data:"",isloading:!1,isError:!1,rssSource:"",screenWidth:"",tabNav:0,topicData:"",topicNavUrl:"",topicTitle:"",topicTitle2:"",devActivationCount:0,formattedSources:[],selectGenre:"",external_api_url:"https://cors-anywhere.herokuapp.com/",internal_api_url:"https://node-simple-rss-feed-proxy-server.onrender.com/"}},watch:{url(){this.getRssFeeds(),this.setScreenWidth()}},mounted(){window.addEventListener("resize",this.setScreenWidth),this.setScreenWidth(),this.formattedSources=$},unmounted(){window.removeEventListener("resize",this.setScreenWidth)},methods:{formatSourcesByGenre(e){this.formattedSources=[];for(let t of $)""===e&&(this.formattedSources=$),t["_genre"].includes(e)&&this.formattedSources.push(t)},forwardNav(e){return 0===this.tabNav&&e.topics.length>1?(this.topicTitle=e["name"],this.topicData=e.topics,this.topicNavUrl=e.url,this.tabNav<3?this.tabNav++:this.tabNav):0===this.tabNav&&1===e.topics.length?(this.topicTitle=e["name"],this.pic=e.url,this.topicData=e.topics,this.topicNavUrl=e.topics[0].url,this.topicTitle2=e.topics[0].title,this.getRssFeeds(this.pic,this.topicNavUrl,this.topicTitle2,this.logo),this.tabNav=2):void 0},backwardNav(e){return 2===this.tabNav&&1===this.topicData.length?this.tabNav=0:e?(this.isError=!1,this.tabNav=0):this.tabNav>-1?this.tabNav--:this.tabNav},setScreenWidth(){return this.screenWidth=window.innerWidth},async getRssFeeds(e,t,i){if(this.tabNav=2,this.isError=!1,this.isloading=!0,this.pic=e,this.topicTitle2=i,t.includes("tradingeconomics")||t.includes("sciencedaily")||t.includes("thenewstack")){const e=this.external_api_url+t;this.data=await A().get(e).then((e=>Zt.parseStringPromise(e.data))).catch((e=>(this.isloading=!1,this.isError=!0,console.log(e),e.message+",")))}else{const e=this.internal_api_url+(0,L.z_)(t);this.data=await A().get(e).then((e=>e.data)).catch((e=>(this.isloading=!1,this.isError=!0,console.log(e),e.message+",")))}if(this.isError)return;const s=e=>Object.keys(e).includes("rss")?e.rss.channel[0].item:Object.keys(e).includes("rdf:RDF")?e["rdf:RDF"].item:Object.keys(e).includes("feed")?e["feed"].entry:void 0;this.feeds=s(this.data),this.feedHasArticles=()=>Object.keys(this.data).includes("rss")?Object.keys(this.data.rss.channel[0]).includes("item"):Object.keys(this.data).includes("rdf:RDF")?Object.keys(this.data["rdf:RDF"]).includes("item"):Object.keys(this.data).includes("feed")?Object.keys(this.data["feed"]).includes("entry"):void 0,this.isloading=!1},devMode(){this.devActivationCount++,7===this.devActivationCount&&(this.showSourceCode=!0)}}};const Kt=(0,X.Z)(Gt,[["render",W]]);var Yt=Kt,Vt={name:"App",components:{RSSFeed:Yt}};const Qt=(0,X.Z)(Vt,[["render",n]]);var Jt=Qt;(0,r.ri)(Jt).mount("#app")},4802:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Nd:function(){return articleLink},WC:function(){return ElapsedTime},mt:function(){return articleDescription},xZ:function(){return titlePic},z_:function(){return UrlEncoder}});var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7658),core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);const sourcesContainer=null;function NewSource(Name=null,sub=null,Logo=null,Topics=null,Topics2=null,rssUrl=null,_genre=null){const topics=[],favicon=()=>{const e=Name.includes(".")?`https://${Name.toLowerCase()}/favicon.ico`:`https://${Name.toLowerCase().replaceAll(" ","")}.com/favicon.ico`;return sub||e},[name,url,logo]=[Name,favicon(),Logo];return Topics2?Topics2.map((item=>{let[title,url]=[item.replaceAll("-"," "),`${rssUrl[0]}${eval(rssUrl[1]).replaceAll(" ","-").toLowerCase()}${rssUrl[2]??""}`];if(title){const e=title.split(/\/| |-/gi),t=[];e.map((e=>{const i=e[0].toUpperCase(),s=e.slice(1).toLowerCase(),r=i+s;t.push(r),title=t.join(" ")}))}topics.push({title:title,url:url})})):Topics.map((e=>{const[t,i]=[e[0],e[1]];topics.push({title:t,url:i})})),sourcesContainer.push({name:name,url:url,logo:logo,topics:topics,_genre:_genre})}function UrlEncoder(e){return encodeURIComponent(e)}function ElapsedTime(e){const t=new Date(e).getTime(),i=Date.now(),s=(i-t)/1e3,r=s/60,a=r/60,n=a/24,o=n/7,c=o/4,l=c/12;return s>=1&&s<60?s.toFixed(0)+(s.toFixed(0)<2?" second":" seconds"):r>=1&&r<60?r.toFixed(0)+(r.toFixed(0)<2?" minute":" minutes"):a>=1&&a<24?a.toFixed(0)+(a.toFixed(0)<2?" hour":" hours"):n>=1&&n<7?n.toFixed(0)+(n.toFixed(0)<2?" day":" days"):o>=1&&o<4?o.toFixed(0)+(o.toFixed(0)<2?" week":" weeks"):c>=1&&c<12?c.toFixed(0)+(c.toFixed(0)<2?" month":" months"):l>=1?l.toFixed(0)+(l.toFixed(0)<2?" year":" years"):i-t?"Sometime":void 0}function articleLink(e){const t=e[0];return"object"===typeof t?t["$"].href:t}function titlePic(e,t,i){if(Object.keys(i).includes("rss")){if(Object.prototype.hasOwnProperty.call(t[e],"enclosure"))return t[e].enclosure[0].$.url;if(Object.prototype.hasOwnProperty.call(t[e],"media:group"))return t[e]["media:group"][0]["media:content"][0].$.url;if(Object.prototype.hasOwnProperty.call(t[e],"media:content"))return t[e]["media:content"][0].$.url;if(Object.prototype.hasOwnProperty.call(t[e],"description")&&t[e].description[0].includes("src="))return t[e].description[0].split('src="')[1].split('"')[0];if(Object.prototype.hasOwnProperty.call(t[e],"a10:content")&&t[e]["a10:content"][0]._.includes("url(&quot;"))return t[e]["a10:content"][0]._.split("&quot;")[1];if("The Diplomat"===t[e].title)return!1;if(Object.prototype.hasOwnProperty.call(t[e],"description")&&t[e].description[0].includes("src="))return t[e].content[0]}if(Object.keys(i).includes("rdf:RDF"))return!1}function articleDescription(e,t,i){if(Object.keys(i).includes("rss")&&Object.prototype.hasOwnProperty.call(t[e],"description")){const i=0===t[e].description[0].replaceAll("\n","").replaceAll(" ","").length||t[e].description[0].includes("DefenceTalk");if(Object.prototype.hasOwnProperty.call(t[e],"description")&&!i){if(t[e].description[0].includes("</")&&!i)return t[e].description[0].replaceAll(/<[^>]*>/gi,"").trim();if(t[e].description[0]&&!i)return t[e].description[0].trim()}return!1}return Object.keys(i).includes("rdf:RDF")&&Object.prototype.hasOwnProperty.call(t[e],"description")?t[e].description:Object.keys(i).includes("feed")&&Object.prototype.hasOwnProperty.call(t[e],"entry")?t[e].content[0].replaceAll(/<[^>]*>/gi,"").trim():Object.keys(i).includes("feed")&&Object.prototype.hasOwnProperty.call(t[e],"summary")?t[e].summary[0].replaceAll(/<[^>]*>/gi,"").trim():void 0}}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var i=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e].call(i.exports,i,i.exports,__webpack_require__),i.exports}__webpack_require__.m=__webpack_modules__,function(){var e=[];__webpack_require__.O=function(t,i,s,r){if(!i){var a=1/0;for(l=0;l<e.length;l++){i=e[l][0],s=e[l][1],r=e[l][2];for(var n=!0,o=0;o<i.length;o++)(!1&r||a>=r)&&Object.keys(__webpack_require__.O).every((function(e){return __webpack_require__.O[e](i[o])}))?i.splice(o--,1):(n=!1,r<a&&(a=r));if(n){e.splice(l--,1);var c=s();void 0!==c&&(t=c)}}return t}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[i,s,r]}}(),function(){__webpack_require__.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return __webpack_require__.d(t,{a:t}),t}}(),function(){__webpack_require__.d=function(e,t){for(var i in t)__webpack_require__.o(t,i)&&!__webpack_require__.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){__webpack_require__.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){__webpack_require__.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};__webpack_require__.O.j=function(t){return 0===e[t]};var t=function(t,i){var s,r,a=i[0],n=i[1],o=i[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(s in n)__webpack_require__.o(n,s)&&(__webpack_require__.m[s]=n[s]);if(o)var l=o(__webpack_require__)}for(t&&t(i);c<a.length;c++)r=a[c],__webpack_require__.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return __webpack_require__.O(l)},i=self["webpackChunkrss_feed"]=self["webpackChunkrss_feed"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var __webpack_exports__=__webpack_require__.O(void 0,[998],(function(){return __webpack_require__(2791)}));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();
//# sourceMappingURL=app.38aae477.js.map