(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{179:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return h});a(56),a(207),a(82),a(18),a(8),a(34),a(45),a(35),a(23);var n=a(6),o=a.n(n),i=a(0),r=a.n(i),l=a(11),s=a.n(l),c=a(187),m=a(196),d=a.n(m),u=(a(180),a(192)),p=a(194),g=function(e){function t(t){var a;return(a=e.call(this,t)||this).handlePlusClick=function(){var e=a.state.tagShowCnt;a.mobileDetect()?a.setState({tagShowCnt:e+6}):a.setState({tagShowCnt:e+15})},a.handleMinusClick=function(){a.mobileDetect()?a.setState({tagShowCnt:6}):a.setState({tagShowCnt:15})},a.changeSelectedTag=function(e){a.setState({selectedTag:e})},a.mobileDetect=function(){var e,t=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t},a.state={selectedTag:a.props.pageContext.tag||void 0,tagShowCnt:15},a}o()(t,e);var a=t.prototype;return a.componentDidUpdate=function(){var e=this,t=function(){if(n){if(o>=a.length)return"break";i=a[o++]}else{if((o=a.next()).done)return"break";i=o.value}var t=i,r=t.querySelector(".tag-name").innerText;t.onclick=function(t){t.preventDefault(),e.changeSelectedTag(r)}},a=document.querySelectorAll("#PostList a.tag"),n=Array.isArray(a),o=0;for(a=n?a:a[Symbol.iterator]();;){var i;if("break"===t())break}},a.componentDidMount=function(){this.mobileDetect()&&this.setState({tagShowCnt:6}),-1!==Object.keys(this.props.location.state||this.state.tagShowCnt).indexOf("tagShowCnt")&&this.setState({tagShowCnt:this.props.location.state.tagShowCnt})},a.render=function(){var e=this,t=this.props.location,a=this.props.data.allMarkdownRemark.group,n=this.state.selectedTag,o=a.map(function(t){return r.a.createElement(c.a,{to:"/tags/"+d.a.kebabCase(t.fieldValue),state:{tagShowCnt:e.state.tagShowCnt},key:"tag-"+t.fieldValue,className:"tag",totalcount:t.totalCount,style:{display:"none"}},r.a.createElement("span",{className:"tag-name"},t.fieldValue),r.a.createElement("span",{className:"tag-count"},"(",t.totalCount,")"))});o=o.sort(function(e,t){return t.props.totalcount-e.props.totalcount});var i=this.state.tagShowCnt;i>=o.length&&(i=o.length);for(var l=0;l<i&&(0===l||l!==o.length-1);l++)o[l].props.style.display="inline";return r.a.createElement(u.a,{location:t},r.a.createElement("div",{className:"tag-wrap"},r.a.createElement("div",{className:"tag-list"},o),o.length-1>this.state.tagShowCnt?r.a.createElement("div",{className:"tag-load",onClick:this.handlePlusClick},"+ 더 보기"):r.a.createElement("div",{className:"tag-load",onClick:this.handleMinusClick},"- 줄이기")),n?function(e,t){for(var a=0,n=Array.from(e);a<n.length;a++){var o=n[a];if(o.fieldValue===t)return r.a.createElement(p.a,{data:o.edges,title:"'"+o.fieldValue+"'에 관한 "+o.totalCount+"개의 포스트"})}}(a,n):null)},t}(i.Component);g.propTypes={location:s.a.object.isRequired,pageContext:s.a.object.isRequired},t.default=g;var h="3915820503"},186:function(e,t,a){var n;e.exports=(n=a(189))&&n.default||n},187:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),o=a.n(n),i=a(11),r=a.n(i),l=a(54),s=a.n(l);a.d(t,"a",function(){return s.a});a(186);var c=o.a.createContext({});function m(e){var t=e.staticQueryData,a=e.data,n=e.query,i=e.render,r=a?a.data:t[n]&&t[n].data;return o.a.createElement(o.a.Fragment,null,r&&i(r),!r&&o.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return o.a.createElement(c.Consumer,null,function(e){return o.a.createElement(m,{data:t,query:a,render:n||i,staticQueryData:e})})};d.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},188:function(e,t,a){var n={title:"nevercaution",author:"nevercaution",description:"작은일기장",siteUrl:"https://nevercaution.github.io",titleLogo:function(){return a(191)},titleLogoShow:!0,bio:"Why be normal?",bioShow:!0,googleAnalyticsTrackingId:"UA-100815581-1",disqusShortname:"nevercaution",googleAdsense:!0,adsenseClient:"pub-2516810533693172",adsenseSlot:"5544246730"};e.exports=n},189:function(e,t,a){"use strict";a.r(t);a(16);var n=a(0),o=a.n(n),i=a(11),r=a.n(i),l=a(78),s=function(e){var t=e.location,a=e.pageResources;return a?o.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=s},190:function(e){e.exports={data:{site:{siteMetadata:{title:"nevercaution",description:"작은일기장"}}}}},191:function(e,t,a){e.exports=a.p+"static/profile-e34bd6d101164550ff507bc97220db1c.png"},192:function(e,t,a){"use strict";a(16);var n=a(190),o=a(0),i=a.n(o),r=a(11),l=a.n(r),s=a(195),c=a.n(s),m=a(187),d=(a(173),a(6)),u=a.n(d),p=function(e){function t(){return e.apply(this,arguments)||this}return u()(t,e),t.prototype.render=function(){return i.a.createElement("footer",{id:"footer"},i.a.createElement("div",{className:"copyright"},i.a.createElement("span",null,"© ",i.a.createElement("a",{href:"mailto:nevercaution@gmail.com"},"nevercaution")," 2019, All rights reserved. Powered by "," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"Gatsby"))),i.a.createElement("div",{className:"submenu"}))},t}(o.Component),g=a(188),h=a.n(g),v=(a(33),a(12),a(197),a(77),a(8),a(198)),f=new(a.n(v).a)({baseFontSize:"16px",baseLineHeight:"1.5",bodyWeight:"300",headerWeight:"700",boldWeight:"500 !important",headerFontFamily:["Nanum Gothic"],bodyFontFamily:["Noto Sans KR"]}),w=[{name:"Nanum Gothic",bold:[400,700]},{name:"Noto Sans KR",bold:[300,500]}].map(function(e){return e.bold?e.name.replace(/ /gi,"+")+":"+e.bold.toString():""+e.name.replace(/ /gi,"+")}).join("|").toString(),b=(f.rhythm,f.scale,function(e){var t=e.children,a=(e.data,e.location);return i.a.createElement(m.b,{query:"2328579951",render:function(e){var n;n=a?a.href:h.a.siteUrl;var o=function(e,t){var a={};return a=e?{display:"inline-block"}:{display:"none"},t||(a=Object.assign({},a,{width:"1.5rem",height:"1.5rem",marginRight:"0.1rem"})),a}(h.a.titleLogoShow,h.a.bioShow),r=h.a.bioShow?{}:{display:"none"};return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:h.a.description},{name:"og:type",content:"website"},{name:"og:title",content:h.a.title},{name:"og:description",content:h.a.description},{name:"og:image",content:h.a.titleLogo()},{name:"og:url",content:n}]},i.a.createElement("html",{lang:"ko"}),i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family="+w,rel:"stylesheet"}),i.a.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id="+h.a.googleAnalyticsTrackingId}),i.a.createElement("script",null,"\n                window.dataLayer = window.dataLayer || [];\n                function gtag(){dataLayer.push(arguments);}\n                gtag('js', new Date());\n                gtag('config', '"+h.a.googleAnalyticsTrackingId+"');\n              "),i.a.createElement("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"})),i.a.createElement("div",{id:"wrap"},i.a.createElement("header",{id:"header"},i.a.createElement("div",{className:"title"},i.a.createElement("div",{className:"title-wrap"},i.a.createElement(m.a,{to:"/"},i.a.createElement("div",{className:"logo-img",style:o},i.a.createElement("img",{src:h.a.titleLogo(),alt:"logo"})),i.a.createElement("div",null,i.a.createElement("h1",null,h.a.title),i.a.createElement("p",{className:"bio",style:r},h.a.bio))))),i.a.createElement("div",{className:"menu"},i.a.createElement("div",{className:"home"},i.a.createElement(m.a,{to:"/"},i.a.createElement("span",null,"Home"))),i.a.createElement("div",{className:"develop"},i.a.createElement(m.a,{to:"/develop"},i.a.createElement("span",null,"Develop"))),i.a.createElement("div",{className:"diary"},i.a.createElement(m.a,{to:"/diary"},i.a.createElement("span",null,"Diary"))),i.a.createElement("div",{className:"review"},i.a.createElement(m.a,{to:"/review"},i.a.createElement("span",null,"Review"))),i.a.createElement("div",{className:"tags"},i.a.createElement(m.a,{to:"/tags"},i.a.createElement("span",null,"Tags"))))),i.a.createElement("article",{id:"article"},t)),i.a.createElement(p,null))},data:n})});b.propTypes={children:l.a.node.isRequired,location:l.a.object.isRequired};t.a=b},194:function(e,t,a){"use strict";var n=a(6),o=a.n(n),i=a(0),r=a.n(i),l=a(193),s=a(200),c=(a(174),a(11)),m=a.n(c),d=a(54),u=a.n(d),p=a(202),g=a.n(p),h=a(196),v=a.n(h),f=a(199),w=(a(175),function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props.post,t=e.fields.slug,a=g()(e,"frontmatter.title")||t,n=e.excerpt,o=e.frontmatter.date,i=e.frontmatter.tags.map(function(e,t){return"Empty Tag"!==e?r.a.createElement(u.a,{to:"/tags/"+v.a.kebabCase(e),className:"tag",key:"tag-"+e},"#",r.a.createElement("span",{className:"tag-name"},e)):null});return r.a.createElement("div",{className:"post-link",key:t,style:this.props.showCnt-1>=this.props.index?{display:"inline-block"}:{display:"none"}},r.a.createElement(u.a,{to:t},r.a.createElement("h2",{className:"title hover"},a)),r.a.createElement("div",{className:"sub"},r.a.createElement("div",{className:"date"},r.a.createElement(l.a,{icon:f.a}),r.a.createElement("span",null,o)),r.a.createElement("div",{className:"tags-list"},i)),r.a.createElement(u.a,{to:t},r.a.createElement("span",{className:"excerpt"},n)))},t}(i.Component));w.propTypes={post:m.a.object.isRequired,title:m.a.string};var b=w,y=function(e){function t(t){var a;return(a=e.call(this,t)||this).onScroll=function(){a.state.currentPostCnt<a.props.data.length&&window.scrollY+window.innerHeight>=a.state.loadElPoint&&!a.state.isLoading&&(a.setState({isLoading:!0}),setTimeout(function(){a.setState({currentPostCnt:a.state.currentPostCnt+a.state.loadPostCnt,isLoading:!1}),a.setLoadElPoint()},200))},a.setLoadElPoint=function(){a.setState({loadElPoint:document.querySelector(".load-point").offsetTop})},a.state={loadPostCnt:7,currentPostCnt:7,isLoading:!1,loadElPoint:0},a}o()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.setLoadElPoint(),window.addEventListener("scroll",this.onScroll,!1)},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.onScroll,!1)},a.render=function(){var e=this,t=this.props,a=t.data,n=t.title,o=a.filter(function(e){return!!e.node.frontmatter.date}).map(function(t,a){return r.a.createElement(b,{key:t.node.fields.slug,post:t.node,index:a,showCnt:e.state.currentPostCnt})});return r.a.createElement("div",{id:"PostList"},n?r.a.createElement("h1",{className:"list-title"},n):null,r.a.createElement("div",{className:"list"},o),r.a.createElement("div",{className:"load"},r.a.createElement("div",{className:"loading"},r.a.createElement("div",{className:"spinner",style:this.state.isLoading?{display:"inline-block"}:{display:"none"}},r.a.createElement(l.a,{className:"blink",icon:s.c,size:"2x"}))),r.a.createElement("div",{className:"load-point"})))},t}(i.Component);t.a=y}}]);