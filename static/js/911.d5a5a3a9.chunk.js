"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[911],{3911:function(n,e,r){r.r(e),r.d(e,{default:function(){return L}});var t,i,a,c,o,s,u,p,l=r(9439),d=r(2791),f=r(7689),x=r(1393),h=r(1087),v=r(168),g=r(6444),m=g.ZP.div(t||(t=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  /* padding: 10px; */\n  /* padding-top: 0; */\n  gap: 10px;\n  border-bottom: 1px solid #212121;\n"]))),b=g.ZP.div(i||(i=(0,v.Z)(["\n  display: flex;\n  padding: 10px;\n  /* padding-top: 0; */\n  gap: 10px;\n  border-bottom: 1px solid #212121;\n"]))),j=g.ZP.img(a||(a=(0,v.Z)([""]))),Z=g.ZP.p(c||(c=(0,v.Z)(["\n  display: inline-block;\n  margin-right: 5px;\n"]))),w=g.ZP.p(o||(o=(0,v.Z)([""]))),k=g.ZP.p(s||(s=(0,v.Z)(["\n  margin-left: 20px;\n"]))),y=r(184),_=function(n){var e=n.movie,r=n.baseUrl,t=e.poster_path,i=e.release_date,a=e.title,c=e.vote_average,o=e.overview,s=e.genres;return(0,y.jsxs)(m,{children:[(0,y.jsxs)(b,{children:[(0,y.jsx)(j,{src:"".concat(r).concat(t),alt:a,width:"250px",height:"350px"}),(0,y.jsxs)("div",{children:[(0,y.jsxs)("h2",{children:[a,"(",i.slice(0,4),")"]}),(0,y.jsxs)(Z,{children:["User score: ",Math.round(10*c),"%"]}),(0,y.jsx)("h3",{children:"Overview"}),(0,y.jsx)(w,{children:o}),(0,y.jsx)("h4",{children:"Ganres"}),s.map((function(n){return n.name})).join(" ")]})]}),(0,y.jsx)(k,{children:"Additional information"}),(0,y.jsxs)("ul",{children:[(0,y.jsx)("li",{children:(0,y.jsx)(h.rU,{to:"cast",children:"Cast"})}),(0,y.jsx)("li",{children:(0,y.jsx)(h.rU,{to:"reviews",children:"Reviews"})})]}),(0,y.jsx)(d.Suspense,{fallback:(0,y.jsx)("div",{children:"loading.."}),children:(0,y.jsx)(f.j3,{})})]})},P=(0,g.ZP)(h.OL)(u||(u=(0,v.Z)(["\n  display: block;\n\n  border: 1px solid black;\n  border-radius: 5%;\n  margin-left: 10px;\n  margin-top: 10px;\n  padding: 5px;\n  text-align: center;\n  color: #212121;\n\n  width: 100px;\n  text-decoration: none;\n"]))),U=g.ZP.span(p||(p=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),C=r(9128),H=function(n){var e=n.previousLocation.current;return(0,y.jsx)(P,{to:e,children:(0,y.jsxs)(U,{children:[(0,y.jsx)(C.C4H,{})," Go back"]})})},L=function(){var n,e,r=(0,d.useState)(null),t=(0,l.Z)(r,2),i=t[0],a=t[1],c=(0,f.UO)().id,o=null!==(n=null===(e=(0,f.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies",s=(0,d.useRef)(o);return(0,d.useEffect)((function(){var n=new AbortController;return(0,x.TP)(n,c).then((function(n){return a(n.data)})).catch((function(n){return n})),function(){n.abort()}}),[c]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(H,{previousLocation:s}),i&&(0,y.jsx)(_,{movie:i,baseUrl:"https://image.tmdb.org/t/p/w500/"})]})}},1393:function(n,e,r){r.d(e,{Hg:function(){return u},TP:function(){return l},V0:function(){return p},tx:function(){return f},zv:function(){return d}});var t=r(5861),i=r(7757),a=r.n(i),c=r(1243),o="bad873a72299f6199f58673bb9d2d11e",s="https://api.themoviedb.org/3/",u=function(){var n=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s,"trending/movie/day?api_key=").concat(o),{signal:e.signal});case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(a().mark((function n(e,r){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s,"search/movie?api_key=").concat(o,"&query=").concat(r),{signal:e.signal});case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(a().mark((function n(e,r){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s,"movie/").concat(r,"?api_key=").concat(o),{signal:e.signal});case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(a().mark((function n(e,r){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s,"movie/").concat(r,"/credits?api_key=").concat(o),{signal:e.signal});case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(a().mark((function n(e,r){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s,"movie/").concat(r,"/reviews?api_key=").concat(o),{signal:e.signal});case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=911.d5a5a3a9.chunk.js.map