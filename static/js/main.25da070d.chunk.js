(this["webpackJsonpanimal-crossing"]=this["webpackJsonpanimal-crossing"]||[]).push([[0],{16:function(e,t,a){e.exports={header:"Header_header__3CWri",nav:"Header_nav__29Wye",link:"Header_link__KTerj",homeLink:"Header_homeLink__1BczX",active:"Header_active__2IigS"}},17:function(e,t,a){e.exports={wrapper:"Villagers_wrapper__y044Y",cardsWrapper:"Villagers_cardsWrapper__34hzP",button:"Villagers_button__1ESe5",fieldsWrapper:"Villagers_fieldsWrapper__1Wjjy",searchNotFound:"Villagers_searchNotFound__1kXm_"}},19:function(e,t,a){e.exports={nav:"Home_nav__3qrsY",link:"Home_link__3S6pG",image:"Home_image__2Rv9Z"}},20:function(e,t,a){e.exports={wrapper:"Fishes_wrapper__2qvmH",cardsWrapper:"Fishes_cardsWrapper__3vi-K",button:"Fishes_button__3dSz9"}},21:function(e,t,a){e.exports={wrapper:"Bugs_wrapper__a3H0g",cardsWrapper:"Bugs_cardsWrapper__2VDwG",button:"Bugs_button__2Tcx_",searchNotFound:"Bugs_searchNotFound__1oG79"}},22:function(e,t,a){e.exports={wrapper:"Details_wrapper__1BZtP",title:"Details_title__33OHN",museumPhrase:"Details_museumPhrase__2nk6T",price:"Details_price__3A_xO",imageWrapper:"Details_imageWrapper__2F3C4"}},25:function(e,t,a){e.exports={wrapper:"FishCard_wrapper__3QAVC",location:"FishCard_location__Vff27",price:"FishCard_price__3B_Js",imageWrapper:"FishCard_imageWrapper__jJMwV"}},37:function(e,t,a){e.exports={searchField:"SearchField_searchField__1ljAo",searchInput:"SearchField_searchInput__1vSE7"}},38:function(e,t,a){e.exports={error:"Error_error__3Xese",errorImage:"Error_errorImage__3Dpyt"}},39:function(e,t,a){e.exports={buttonBackWrapper:"ButtonBack_buttonBackWrapper__BGyCO",buttonBack:"ButtonBack_buttonBack__2-piM"}},40:function(e,t,a){e.exports={price:"BugCard_price__s14iQ",imageWrapper:"BugCard_imageWrapper__3dxAj"}},49:function(e,t,a){e.exports={card:"Card_card__1p35l"}},50:function(e,t,a){e.exports={icon:"Icon_icon__ltuVJ"}},51:function(e,t,a){e.exports={imageWrapper:"VillagersCard_imageWrapper__2L4nK"}},53:function(e,t,a){e.exports={loader:"Loader_loader__2aUTv"}},55:function(e,t,a){e.exports={container:"Container_container__K7a5d"}},60:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var c,n=a(1),r=a.n(n),s=a(29),i=a.n(s),l=(a(60),a(14)),j=a(3),o=a.n(j),u=a(7),b=a(5),d=a(15),p=a(32),h=a(35),O=p.create({baseURL:"https://acnhapi.com/v1a",transformResponse:[].concat(Object(l.a)(p.defaults.transformResponse),[function(e){return Object(h.camelizeKeys)(e)}]),transformRequest:[function(e){return Object(h.decamelizeKeys)(e)}].concat(Object(l.a)(p.defaults.transformRequest))}),g=function(){return O.get("/villagers").then((function(e){return e.data}))},m=function(){return O.get("/fish").then((function(e){return e.data}))},x=function(){return O.get("/bugs").then((function(e){return e.data}))},f=function(e){return O.get("".concat(e)).then((function(e){return e.data}))},A={villagers:[]},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;return"SET_VILLAGERS"===t.type?Object(d.a)(Object(d.a)({},e),{},{villagers:t.villagers}):e},N=a(9),S=a(49),C=a.n(S),k=a(0),w=function(e){return Object(k.jsx)("div",{className:C.a.card,children:e.children})},F=a(50),B=a.n(F),E=function(e){return Object(k.jsx)("div",{className:B.a.icon,children:e.children})},W=a(6),I=a(51),y=a.n(I),U=function(e){var t=e.data,a=t.id,c=t.name,n=t.species,r=t.imageUri,s=t.iconUri,i=t.saying;return Object(k.jsxs)(w,{children:[Object(k.jsx)("h2",{children:c.nameUSen}),Object(k.jsx)(E,{children:Object(k.jsx)("img",{src:s,alt:""})}),Object(k.jsx)("p",{children:n}),Object(k.jsx)("p",{className:y.a.imageWrapper,children:Object(k.jsx)(W.b,{to:"/villagers/".concat(a),children:Object(k.jsx)("img",{src:r,alt:c.nameUSen})})}),Object(k.jsx)("p",{children:i})]})},G=a(17),M=a.n(G),H=a(37),Q=a.n(H),D=function(e){var t=e.name,a=e.inputName,c=e.handleFilter,n=e.filterValue;return Object(k.jsxs)("label",{className:Q.a.searchField,children:[Object(k.jsxs)("span",{children:["Search ",t]}),Object(k.jsx)("input",{name:a,type:"search",onChange:c,value:n,className:Q.a.searchInput})]})},L=a(53),Z=a.n(L),T=["title","titleId"];function Y(){return Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e},Y.apply(this,arguments)}function J(e,t){if(null==e)return{};var a,c,n=function(e,t){if(null==e)return{};var a,c,n={},r=Object.keys(e);for(c=0;c<r.length;c++)a=r[c],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)a=r[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function X(e,t){var a=e.title,r=e.titleId,s=J(e,T);return n.createElement("svg",Y({id:"L3",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 100 100",enableBackground:"new 0 0 0 0",xmlSpace:"preserve",ref:t,"aria-labelledby":r},s),a?n.createElement("title",{id:r},a):null,n.createElement("circle",{fill:"none",stroke:"#fff",strokeWidth:4,cx:50,cy:50,r:44,style:{opacity:.5}}),c||(c=n.createElement("circle",{fill:"#fff",stroke:"#cbeff8",strokeWidth:3,cx:8,cy:54,r:6},n.createElement("animateTransform",{attributeName:"transform",dur:"2s",type:"rotate",from:"0 50 48",to:"360 50 52",repeatCount:"indefinite"}))))}var K=n.forwardRef(X),P=(a.p,function(){return Object(k.jsx)("div",{className:Z.a.loader,children:Object(k.jsx)(K,{width:150})})}),R=a.p+"static/media/sad.de886006.png",V=a(38),_=a.n(V),z=a(4),q=a(39),$=a.n(q),ee=function(e){var t=e.handleClick;return Object(k.jsx)("div",{className:$.a.buttonBackWrapper,children:Object(k.jsx)("button",{className:$.a.buttonBack,onClick:t,children:"< Back"})})},te=function(){var e=Object(z.f)();return Object(k.jsxs)("div",{className:_.a.error,children:[Object(k.jsx)(ee,{handleClick:e.goBack}),Object(k.jsx)("h2",{children:"Something Went Wrong:("}),Object(k.jsx)("img",{className:_.a.errorImage,src:R,alt:""})]})},ae=a.p+"static/media/search.827c72cf.png",ce=function(){var e=Object(N.b)(),t=Object(N.c)((function(e){return e.villagers.villagers})),a=Object(n.useState)(t),c=Object(b.a)(a,2),r=c[0],s=c[1],i=Object(n.useState)(""),j=Object(b.a)(i,2),d=j[0],p=j[1],h=Object(n.useState)(""),O=Object(b.a)(h,2),m=O[0],x=O[1],f=Object(n.useState)(!1),A=Object(b.a)(f,2),v=A[0],S=A[1],C=Object(n.useState)(!1),w=Object(b.a)(C,2),F=w[0],B=w[1];Object(n.useEffect)((function(){var t=function(){var t=Object(u.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,S(!0),t.next=4,e(function(){var e=Object(u.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:a=e.sent,t({type:"SET_VILLAGERS",villagers:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:S(!1),B(!1),t.next=13;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0),S(!1),B(!0);case 13:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),Object(n.useEffect)((function(){s(t.slice(0,10))}),[t]);var E=Object(n.useCallback)((function(){s([].concat(Object(l.a)(r),Object(l.a)(t.slice(r.length,r.length+10))))}),[t,r,s]),W=function(e){var a=e.target.value,c=function(a){if(""!==e.target.value){var c=t.filter((function(e){return a(e)}));s(c)}else s(t.slice(0,10))};"villagersName"===e.target.name&&(c((function(e){return e.name.nameUSen.toLowerCase().includes(a.toLowerCase())})),p(a),x("")),"villagersSpecies"===e.target.name&&(c((function(e){return e.species.toLowerCase().includes(a.toLowerCase())})),x(a),p(""))};return Object(k.jsxs)("div",{className:M.a.wrapper,children:[F&&!v&&Object(k.jsx)(te,{}),v&&!F&&Object(k.jsx)(P,{}),!v&&!F&&Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("div",{className:M.a.fieldsWrapper,children:[Object(k.jsx)(D,{name:"Villagers",inputName:"villagersName",handleFilter:W,filterValue:d}),Object(k.jsx)(D,{name:"Species",inputName:"villagersSpecies",handleFilter:W,filterValue:m})]}),Object(k.jsx)("div",{className:M.a.cardsWrapper,children:r.map((function(e){return Object(k.jsx)(U,{data:e},e.id)}))}),""===d&&""===m&&0!==t.length&&r.length!==t.length&&Object(k.jsx)("div",{className:M.a.buttonWrapper,children:Object(k.jsx)("button",{className:M.a.button,onClick:E,children:"Show More"})}),(""!==d||""!==m)&&0===r.length&&Object(k.jsxs)("div",{className:M.a.searchNotFound,children:[Object(k.jsx)("h2",{children:"Nothing Found:("}),Object(k.jsx)("img",{src:ae,alt:""})]})]})]})},ne=a(26),re=a(54),se={fishes:[]},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;return"SET_FISHES"===t.type?Object(d.a)(Object(d.a)({},e),{},{fishes:t.fishes}):e},le={bugs:[]},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;return"SET_BUGS"===t.type?Object(d.a)(Object(d.a)({},e),{},{bugs:t.bugs}):e},oe={item:{}},ue=function(e){return function(){var t=Object(u.a)(o.a.mark((function t(a){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(e);case 2:c=t.sent,a({type:"SET_ITEM",item:c});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;return"SET_ITEM"===t.type?Object(d.a)(Object(d.a)({},e),{},{item:t.item}):e},de=Object(ne.b)({villagers:v,fishes:ie,bugs:je,item:be}),pe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ne.c,he=Object(ne.d)(de,pe(Object(ne.a)(re.a))),Oe=a(55),ge=a.n(Oe),me=function(e){return Object(k.jsx)("div",{className:ge.a.container,children:e.children})},xe=a(16),fe=a.n(xe),Ae=function(){return Object(k.jsx)("header",{className:fe.a.header,children:Object(k.jsxs)("nav",{className:fe.a.nav,children:[Object(k.jsx)(W.c,{className:"".concat(fe.a.link," ").concat(fe.a.homeLink),activeClassName:fe.a.active,to:"/",exact:!0,children:"Home"}),Object(k.jsx)(W.c,{className:fe.a.link,activeClassName:fe.a.active,to:"/villagers",children:"Villagers"}),Object(k.jsx)(W.c,{className:fe.a.link,activeClassName:fe.a.active,to:"/fish",children:"Fishes"}),Object(k.jsx)(W.c,{className:fe.a.link,activeClassName:fe.a.active,to:"/bugs",children:"Bugs"})]})})},ve=a(19),Ne=a.n(ve),Se=a.p+"static/media/home.5b7965de.png",Ce=function(){return Object(k.jsxs)("div",{children:[Object(k.jsx)("h1",{children:"Welcome To Animal Crossing!"}),Object(k.jsx)("img",{className:Ne.a.image,src:Se,alt:""}),Object(k.jsxs)("nav",{className:Ne.a.nav,children:[Object(k.jsx)(W.b,{to:"/villagers",className:Ne.a.link,children:"Villagers"}),Object(k.jsx)(W.b,{to:"/fish",className:Ne.a.link,children:"Fishes"}),Object(k.jsx)(W.b,{to:"/bugs",className:Ne.a.link,children:"Bugs"})]})]})},ke=a(20),we=a.n(ke),Fe=a.p+"static/media/river.6b0f690d.png",Be=a.p+"static/media/pond.47f66fe1.png",Ee=a(25),We=a.n(Ee),Ie="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH5AUCFC4NTXHK8gAAG1FJREFUeNrtfXmUXFd55++79773au1VW0uW1LZlWZLl3cYGTDATT4CciTEYmDkzMCQczmTCMjDAZMKBMyzBA4cl4AD+h8EZSAwEYofBgw3YYDAmMVg2hshYsmXL2lpLd1dXV9Wresu995s/7quluyWxTksW73dOna6WWtVV93e/7fd99wrIkSNHjhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSNHjhw5FkHmSwAAIADiTP1gv5OEnrux5L3ypeuCa5+/Wk0fDccOHAwnhipea6SqwsAXeuPaYkdSonWqYS2w47FGevs/zScPPVyP26GxOcGnEZQkefUV44Xfv2Zl4Yot1eJMPVnbbOkLxscKl0xuHN6yaY3avKqMCc0ijVMbx4mNw45uhVEcWrBhgPdOxbv31Myjw9o8+PhcsvujH31iHkCaE3xq4X38vRetWL+ueHEnNpeODnlbN64Mtmw8q3juUFkNQ0iC8IiiiJCmAJF7ODAHEiiovvNWxJ2DzfCuXa07G4ejf5Rt86N3feTxmZEhr/P4wXZO8HJg9XgVM7Wk+J63nr/ywq3i6pUT1VdeuW3kD4ueKIMZSEz/h40FYt3/Xgj36CIxgLX9lZIElDxgpIBOLWr/dE/zgem59B9KHXrgc1965sDosNe65Wv7c4L/f+DGF6zB9ExUfcPrN589sVE8rxCIl168qfh71ZHCCOoGaGuAAQha+MkXrwAP/vmJloeBkgJGPMShSZ85FO+cmTd/tyYpfTklO7X1FXfnBP+28MoXrsH+Q53SW147ecG2K0Z+36+IV5y9Rl1YLqKAFoCQM9f7Cz45DRDMg39PJ/g5BrQFAgmsDNDWbKb2Jp/56fc7HxxZJaev+8/fywn+TTBeJMx2WL3/Deee/6pXb3iZKtArN6wILg4qLBAaIM4+ncFgXO1/as7YPJHFdn+GeYBwWrgRuu7bMLBKoi4p3P1o9Fc/uLP+yVXr/Nrr3vdQTvCvg4+/YxKN+aR43paxG5579cQbJsbVC4seJJraLbai43/EjFS2DGsYbCzYMpgX/QJBIAkoT4IE9YnuvhZl7NuBl5cEjBJmUm/2n3/YvOmLtzz5vzZtG2p+8NZdudDxq25KKWjDn/7HyTdedPnqd2wY9y/zYi3QNG61l8RYRxAbhk0Zup3ARBomMbCpAacWNrWw2sAkNnsYmNggjS2YGSQAoWipPYgs6+4mZm2LUtUrjawvbSOBma9/9ondL3n+qnTH082c4F8q3l4/IV78wlUv+vBfbP/gmg3Vf7/SE6vRTACdWa2gviYlBNgSbGRgYwMbadhYw2oGMSBAICKQIEhBkEQgAUjpnksQTMqIOxZJbGENoALpKF7ssru8CwCRRmXEH56YrGxPC/KJm/5mz95rto7Y/TNR7qJPhgu3Dfl//pZz//ja5634s3WVwkUUa4EwzQjtWhIAEmDD4MQ6UlPd28okCGIg4WIAxIMenPvcMYOZYFNGmlp0NKM45KMy4gO2G5cHCKaBFFwSsG4Yex+pPTx/KLxBFdTBC1/9QG7Bx8O1l1ewfrV33v/+q8v+8tILx/50JWGT6GiBxLiFFASWBJISIAVOAd1MYKMYYAuhBEgRSAoIIRbyYQFrnFbFzCAQhMgsu2vdkiAlIAXQClMwM4KSchm0oIUJHGWumglIDapDhTX33HOg/g9/v3vHSy4fTn+wq50T3MXVF1TwB88dRTs0F37+s8/7xIb15ZeXIz0iOpp6sZYIkAIkFdgImFYC02wDbCCUcOQOEIbMYq1lEBE6HY00tlCKem6XxGKrRObGAaEZ7dhAegJeQbkkqxvne9acPWeGUERnr+CthxvmG+/+/OHpresCzDRNTvClm0u46c+34o5vHjn3C5++4mNr15VfrBqJoo7uu0Ai91V6sBHDNDpAmkAoQHgSJERmXeQsijK3a50bnZ2LMVNPUBwtoVAU4NS6zXACIYQI8JUAaUY7MvBLClKKRa6aFmbVbOGXg9L8vsbE1WcHd3/h/vk4t2AAN79zM275233nfP5Tl3/8rInCH4n5VCAy/QVXAvAEAAnbSGGaIYAUUBJCyRPUvQxkJdHhYx3MNxOs3TCEyqoSODbAIMHHFUEIFoAvBYxlQAl4vszC7sAu6NXJFiACxbFYOxGs/caO1s/XjQe7H3sm5N9pgnnuerzrA4+v/JsPX/I/J9aV/i2FmjixLghKASgBUgpsGGa+A9OJQL6A8FXPDQ8WtgQGwYLgkqWDxzQSQ5jcNILSWBHCWCA1MIlx5ZAUx089s2TOWAZZQCgB5amlJVMvgRMgCNgEEFoE69eUtjPsl1aOyM6jTy5fLD6tmty3vHcb3vimn6y8+T3bPjC2pvAaCjXQMVmG7B7kSbC20LMhbJxCFDxIJfqK1BLVwiVQ7bbGU/vaIEnYtHkIhYoPStJe5ktL2KQl3xNcGUUE6NS6ZsUvKlN8hWbb0PpVwcZmW79pck1xWdf8tCH4rk9cjKndzeG3v37yHROT5f+kEivQ1k7rVc46yBPgxEDXQvfmC74Lsda5364L7ipPbJxi1ZxPcfBIhPKoj43nj0AWJHrtwRP7kuMTRgQhAJNapBoneI2BOC7cW/MUlV/63JUv338s9Un8jhH8ybduxZ3fnqv+4fXr37xiRfGtBc0CoQZ82XN9XXJNrQ02BuQJwBqwsTCpgdEWRhu38KlFGju3Ozcb4/BMjMqqIjZsGYFk55L7xLivtis7W17kBZYSSIJAvFC9xKJ/0k3W2DC0sdCGsXl9aXx6Ltl0zfbh3x2Cn7N9BG+7+XHx4petve7s80ffMlIsFdBkwBe95IiUgE0tdD0CM0CSwKlGJ0wRtzXShBFHBnHMiFNGq2MQJoy5psZ8YrFqsoq1k0MQsXX16yJDtUSwDBjNsNpZPmvuk91zC30UfAGlAGbO8iw6nrmDtYUUhCOzCRLNle2T5RdctXVo2dZXnWqC//trzkVjLpmc3Fh+w5qVwWocaANeJuZnGTMbCzPfAYwF+RI21ZgPNdqRRbHowVMEFoCUEkISPEWQytWqY0Nl+CUPiM2iNmA3ZDvXTkSwhmGMBSz1kmORiSmulu73HYQnQNL9AREtDdsZTLZRSgUJtly87LzKxXYZJ7pOaRb93v+wEV//2jPF61+18dWXXDD6ZhUagZQBye6dec6KTT0CxwYiUGDL0Npi39EYY6tLGF5TRhBIFMoeCmUFv6gQlD34JQ+Fiu8SsNSeWKjt1sqWweRctbUMy/26mXkgEcsaF0IJCF/24nKvTMJCwSMJU8ShhpQCFlBFXyZ/8qFdd0yM+dFMIz2zXfT7b9tHL3vthgsnJ/23BR5LdGJAWbAAWDohw4YpbKQhPOkSKmMhpAAbF+eCioLnCyglIAQ5OZoBGAvWrr7tZ9hL8yhiQHoC/pCPwkgAr+yDfA9QCpx1iogIbCxsl2zmvlUfd9N0fxnDZu6d2DU5xlb46y7fWr70wk3FM9tFf/29lyCcN2PnnlP6sw0bvU18rA0o19GBACCli7thApIEUuRiIgEKAmUlMHOsgxUTxX5T/mQdlBPJC13rFICUAqQEVOBItFpBCAGbpDCddCAvc9r2Uk+w0HSYGdZYV+ExQwqAClS9anvlEgLu++p9s2emBd94zSq89ZO7vdlieu2WS8o3os0LPZx0bs62Ehcflei5QiICGUa1otBuG6Rt7QSQ3xQ2y6BhIRQggwBe2VkZJ6ana7N17094wm0OohPsKhfTdWz6PeosA3eJGZ+5FvypN22BTTESjND/qI7ICuYAkgNCvRTgSMO2U1C2sN31IEEwxKgM+TBzCWozMVZv8AD9G2to2S9QABRMAthOGzZOXFkkBYgAay1kUTkLtjwQe5dasdUWSVu7jyRll/doz8HoAC1To3bZLfgvXnc2/vLLT/t3763dMHZxaQtmLUHbfuySLuGxYeJKJNFPXLqpDhOgJKPiA8352Fkf4dezCWI47ZFAMgBBwbQj6PocTLvjRDRJoGzUhxRB+NLF4kHtebADlXWTkrZGGhkkbQMyEsoqyKaI9k7FB/cdSc5MC377v9uIRx5v+CPj3stBLJFmCyX7C8SpgU2tc81iaWwTAjAGqJYUak0nZ5LvyinGrzLFkJViwgeMhG2n0FEbnKSAEJCBi8GOTIBTC1FQEEq40C0GGwy04D2ahBE3U0hfImlrJClQLUo02zp6eio6GHjizLTgjTfcTzufaay8ZFPpCtE0ckn6yYCNjXN/g0PoAwvY7QQ2Qg3fl0Agem3AX8nzCQnIAthIpI0Q6XwDnGqQ70H4HkT2+0m4+okEQQbKbSJBJy69LCNqJjDawgskvEAiTgwMW9TT9uzeqXiqEZozk+BX/atVopGY58s1fgmhXejeugMRqcnkvkWCxIDR1ZspktTinMmys3L+FRw0Z5uHFEwjQTJdg+l0QEpCBH42HbJwGtNmIgvJgcbGYheddZVMapGEutd+VAUFoQjaIt1/NDp0319vt1MzZ6iL/qOrxmSpql4EpXwgG7uR1GvHsXZTjm4SY7AKyTRjy4jaKY7UYpx1ThX+eMG56F865mYuQAJmPkTciCE8gix67ncO7qJMurKJI0sWlMsL6PjD8AwCMSFuaZjUZHUyQ0gGVQmJb9M9u9oHjFm+lvCyWvC2jWXMtEzxsi3Dl4vQKBfDFi2SyYSEXlzrL4a1jNRYPH6gjepIgPF1ZaDza6TPklw/OU4BAShfQkgxoEgNWK523kSW/GxKBEunN4h6bjuNNOJWsqA0JiJ4noBUlB6upUenasmyrfmyWvDFm8q061B09ejm8fViPnSrImmB62RtsvKSFhQw3QH1qcNtgAgbNw+BuirVknNGJ3HZ3VAfa1jDkJ5c+B4GyGXrXl+WA6ekZQrWAt25tyecEJO0UpjMAw2+pKcIDHSeOBLt7ETmzCT4X185QkFBXgdri7C8lBhGNpLKGFweZ9XAfCtFvZ5icuuIG81ppwv0X3eaxGaTGe7f0ZJSN7PeTgoGoJQA8dIxHbauLJJFry9qiOPMXnWfCEBHBnGYLC2JCQiKEk883Zp+ajp+6Il97TOT4PPPKZGUtEUY7fXWtDu0xgOTkpnIT9IRS8YiiiyOzSRYt3EIo2vK4MiARZaEd1t71qI1nyA2jKGVRfiBALJB9378JdjYwGheOEE5QFb3SIsseBCB7LUDacn5pYHcwTA68xHi2DUWaGD/ep6AkUl4+3cOfeWqi4r1H+6cPzMJHh4tQEgqkchi/6DlDsSrwe3PmUh/8FgEv+xjxYYqkLhEDJbB2jpCsgc0Y76eotU2WLOuhFLFcycfLPckTRtrsLGQvlyUMGW9YMMQBQUqSHR9AC0IqoO+mcAMdBoJmrMRrLYQpYU6tT/s8a4na/t/tqfz2f/z/dqyXv+wrElWu5WgE6YxM47jO7m3IN2zXWzdYmfVB8arCqKTQjdi2HYK00xgwiQjzP1sKSCsXeFDGIujB9pozCWuM5WJJmwYNjv0TUosTKhSNwQvAuUy5pORS/3kKm4mCOeibKrEQiemlwL4ngSIom88HN668ZzKLJYZy2rBtWYK5YkGK1gs7kVn/VenPQtYayGsyMIyY/3aIiQx9HzHHerL3KNQAhDue5bOvfsCmBj3UWukmNrXwFhUworVZQgm2CiF1RbSkwMTrm5zEJFTqgJXBxNw4pibPU3DFO1aBFhGoeQhClOksXHTRp5AUAl458Oz++YPtG/7669M6eUmeFkt2HoC1hMafmauvLSjQ1KAfNnLmkkALBhSZe9Wuv6t8AjSF5CegMx6wd12nyUAbDE+5GG0IlE/1kanpcEMmI6raZ2+jOwYKYOUhCz7EAW50FoXx2hGNkgvkUYGYc1ZrpQEzxfwAzcrbdoJpATY2vS+HbO3HHpmfvaN143gjLbgY0ci9gMxxxZ2gao0OM+cWRFFKdhYkHA1KgO9sRnCiWVCghvXMVmiNjbkIfAFKIpgrDtbpHzpOkPGHfB1VqsWxuPBendxSa4kTGIQznSQxgZSUi+N8AIJrS041vDKPu94ZHaPZvzjbT8OE5wCLKsF12sJGvW0zZnuyIvcc/e58ARkUWVx1QJCOCFCUJ/cxdbVk7Ld60hPuuE8ZpQDAcUWNk4dGZZhtKtVZdmHLHgLj6z0mgjHSaqkgk0YzZkW4o52M1s9OdNl5n4g4Zd92Fjbn+5u3nznvUemX3fN0Kngd3ktOIoBkmj3RhGZ3VgMcZ+4zIpl0QcbuJgJgJRccKb7hEpkltW6Np8EC9e3pWzqg60TV4SSkAXV15Z5cMMs6hD1LFfBWkKzFiIKU8isGdFPEV1Twi8rlMcLuPc7Rx6fbST3/ODu58S07Z/OfIJTDXgGumeuvFiEyJixDJISqhrASIIJU7DWLgFTonfUCDhB7kPUb05kggWJbArDk1liRj2teYFHAB2/JaV8WMtoHGsirLUzN8/9g22g3ksVqgp7ds3Zh3bWP3HTF45M3fOTeZwqLCvBjz7V4tWrgkcARFAoI+mqV1hwMQp3SRYEVQ5AUsCECTh1g+6cnS6k48xCcc9SM0VMChdjfdXfHOCFcfxk5Ap37tgmFnPH5tE41nLewZPuMDlzpoQ5F1AZVZg5EvIDD9Xf89Xv1m7feev58ebX7z5lBC/r2OxI1cMV55WPylC/4Kwtw5Miyeqg7nJn5UjveXZ0QHgSwpcgT/bv3LB9OXHBaGs2EEdKQAQKouRlrpgGuFx0Bvi4vp8AIcEyQNSMUD/aQBImsFmdKwRBeXKB66iOemg3tb39nunPfORLBz71X26cmH3pu5/GqcSyEnzwWAwY1o3IHvq9y4av94uiSIYWGWGXZM7WPrNEIVzyFajsISE8CelJiMDFU1HI/i6zWJFly712wAkSsyWNBpKALMJaD62ZJprTDVitoTwBkgJpwtCaEfjSWS+Aigd4RvNdP6zddtPfHfzwZ9625cCffOQJnOprS5d98H3v0Zj/zfNGZmbq8bYtF1W3ipjEArnyRK5ycQtWkHO5XnaSX4qFHoAX+d+lhwWXvjgRIAKwKMBGFvNHawjrzSwciCxxc23FODLQmuEHEtWKB6mAr90/c8/H/v7wB557QXXX5799BFOzp/6u0mUn+KJNZXzpnhm9/Zzq1GVnV28sDMkiUiy6h+qXI7mbvvIi5miJXnyS1+jvGEAEsOwjmu+gfqSGuN2BkH29uvsORVb3RpFBsahQqijc++O5Hbd96+h7tk2Wfrz7QIQHf97E6YBlJ/hoLcXNb5tkE+v5eied3LqtejElAynoyUg+ITkDbnixiZ5s1IMyYqUHlgWYmFA/XENjpg5jDaRaKn70BRdCyScUywqP7GrsuvN7U++aGPfu/dhXj2DvkQinC07J2aRvPljHdx9pJFdsHX56Ysh/0VBZrhSLBQ9a1JY7CUm00HZPviG6nkIIQPhgUYA2Eu1mjOn9M2jMhZDKyZ+DG4wIsBCwWTdkuKJQ9A1+9kRj/4M759+3ctS//d23HsLphlN2+GysDNz5wFy9FSYH168MnjNalqNeoAYuNTnOjXUntd7jxdRF7jwbqodU0FoiSQmdRoq5I3OoHakhbEZgJkiV6dpEC381EQJFKBUV4kQnD/1Lfcf/fbD+off/7dSXv/nQPOM0xCkjuJMCm1YL851HWvuSsNMs+3TFeEVW/EKmPXNf91iQ9v5CN42lt8W67AiAQGoEwlaK+kyI+nQDrXoLcScGgyFIwGS3AkjZvzMLAIQgVEoKpUBg76FW696H67d/9La9HzwyG9+1f9qcluSeUoIBoBYyztsYpN//eXsPacNRx1xpDAWVsodCWfbjafdw2XEOYjtCaUHStfAOSYK1QBRbNOcS1I6FmJtpoRNG0NpAEEEqCUHZ6A4DOuOrVCZ4vpuK9DyGb2EffKzx5LcePPbpt39m3ycP1exj+6cNTmec8lt2avMGL7lsPJ6et4/PNm15Zi69yqaW0o47Niq1AVPXmgasdXA2udsoYJerWQOkiUUSGYShwex0BzPH2qjXOog7STYWLaGU7N250XPH2YbQGujYFOUKIfCBI3Nx+r1/nrnr6w/MfvBzd89+MU65hmcBTpu7Kl9y5SjqLX3WVduG3nf+2uCPdaqlNoz1KwKMrSpiaNjDcMXDcFWhFEgoTwBgJAkjSZ3wYLQ7HJ5qiyQ2SBOLKDawluF5Ep4v4El2VyUhm33P3C9lJxKsdq+lDSMYYoyNCux8qnP4Z3van/v0lw9/8dDRZFeowXiW4LS6jPTNL1+HNLWTq1f47xwt0msazXTYMDBSVSgEEsWCxFBFYaSs4HkC2mQDddYO3C/p6tTuyHXU0WALlMoKQSChpAvH3fjqvHnWZ2aGIkKxIOD5AkebHTzyZPPBg8fSD93+3dp9P3qs1cSzDKfdbbP333olvvKdYysQxq86a0y8sxiIc+IYKPkCgS/gK3LTjkSIEoOCLzBSUVDKuXElBZRyVwQrSbDGot3RrhFQkpCKUAhkRiggs85l0RcYHZUwkvHUwQg/eyr8+Z5DnTuePBDdceBo+i+VktDf/tE8coJ/C7h8cxHNtilduql0xXlrg/+2qupf50kqeNkFKyLwEAQSxjDi2KJSFKhWVUasgCRy58qIoARgLKPdceOsxaKEUuRuySGg6hECTyDRFk/Pdo4++Njc9w8eTu6ajnjH/T9pHHhmKm0Czx6X/KwgeDAJ/K+vWDkaGfHGLZPFN437tEKCKBaSPEUoeAKpZiSRQbWqUKkoSOEs2X11tzFJQUi0Rbtj4AcS5ZLE+JAHX8I26ql95KnwwI93h1+FsF/bPxU+cccDjaYFEpwBOO0vBL/hReMgoGQ0X7v5rOC1K4a9rWuGg8mRqvKKgVSCIJstLeLIUqUqUSpKKCngKYLvCQQeoegLG/jCptpasLYM2KlZE+/Y1Xhs59Px7XFivrHrUDy1Y1ejA8DiDMKz4sb3dSt8KEXqD64eDsK2LdfqZtNQSWxft8K/cHJNsOXsicLackGuYWZVLEnhB8JqzSZNrQ5DjuotfXS2oadqjfTw7Fx6aK6lDxyeS5+6alvp0W891Iof2tVIn81u+FlP8CCKgcTqUU+cvcYX568viPFhT+7c2xk1lreMVb1J6fFIK9bt+Zbdl6Z8IFBq9jlbKo2hktRHZhOeOpbwwZmYH9vXtpZh51oaZzKe1f8xlu8RkpSxdoWPDasCWrfCJ+UD8+0Ux2qap+c0puuGoxiQEjDGIEeOHDly5MiRI0eOHDly5MiRI0eOHDly5MiRI0eOHDly5MiRI0eOHDly5MiRI0eOHDly5MiRI0eOHL8V/D+P4vMS7zTaYwAAAEt0RVh0Y29tbWVudABGaWxlIHNvdXJjZTogaHR0cHM6Ly9ub29raXBlZGlhLmNvbS93aWtpL0ZpbGU6MTAwX0JlbGxzX05IX0ljb24ucG5nv2gUGQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wNS0wMlQxNjo0NDo1Ni0wNDowMENlbGwAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDUtMDJUMTY6NDQ6NTYtMDQ6MDAyONTQAAAATXRFWHRzb2Z0d2FyZQBJbWFnZU1hZ2ljayA2LjguOS05IFExNiB4ODZfNjQgMjAxOS0xMS0xMiBodHRwOi8vd3d3LmltYWdlbWFnaWNrLm9yZ2RU/qAAAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAYdEVYdFRodW1iOjpJbWFnZTo6SGVpZ2h0ADEyOEN8QYAAAAAXdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgAMTI40I0R3QAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxNTg4NDUyMjk2GdXZiwAAABN0RVh0VGh1bWI6OlNpemUANi41NktCQlxNbpMAAAAASUVORK5CYII=",ye=function(e){var t=e.data,a=t.id,c=t.name,n=t.price,r=t.imageUri,s=t.iconUri,i=t.availability,l=t.catchPhrase;return Object(k.jsxs)(w,{children:[Object(k.jsx)("h2",{children:c.nameUSen}),Object(k.jsx)(E,{children:Object(k.jsx)("img",{src:s,alt:""})}),Object(k.jsxs)("div",{className:We.a.price,children:[n,Object(k.jsx)("img",{src:Ie,alt:""})]}),Object(k.jsx)("p",{className:We.a.imageWrapper,children:Object(k.jsx)(W.b,{to:"/fish/".concat(a),children:Object(k.jsx)("img",{src:r,alt:c.nameUSen})})}),Object(k.jsxs)("div",{className:We.a.wrapper,children:[Object(k.jsx)("div",{className:We.a.location,children:Object(k.jsx)("img",{src:"River"===i.location?Fe:Be,alt:"Location"})}),Object(k.jsx)("p",{children:l})]})]})},Ue=function(){var e=Object(N.b)(),t=Object(N.c)((function(e){return e.fishes.fishes})),a=Object(n.useState)(t),c=Object(b.a)(a,2),r=c[0],s=c[1],i=Object(n.useState)(""),j=Object(b.a)(i,2),d=j[0],p=j[1],h=Object(n.useState)(!1),O=Object(b.a)(h,2),g=O[0],x=O[1],f=Object(n.useState)(!1),A=Object(b.a)(f,2),v=A[0],S=A[1];Object(n.useEffect)((function(){var t=function(){var t=Object(u.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,x(!0),t.next=4,e(function(){var e=Object(u.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:a=e.sent,t({type:"SET_FISHES",fishes:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:x(!1),S(!1),t.next=13;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0),x(!1),S(!0);case 13:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),Object(n.useEffect)((function(){s(t.slice(0,10))}),[t]);var C=Object(n.useCallback)((function(){s([].concat(Object(l.a)(r),Object(l.a)(t.slice(r.length,r.length+10))))}),[t,r,s]);return Object(k.jsxs)("div",{className:we.a.wrapper,children:[v&&!g&&Object(k.jsx)(te,{}),g&&!v&&Object(k.jsx)(P,{}),!g&&!v&&Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(D,{name:"fishes",inputName:"fishesName",handleFilter:function(e){var a=e.target.value;if(""!==e.target.value){var c=t.filter((function(e){return e.name.nameUSen.toLowerCase().includes(a.toLowerCase())}));s(c)}else s(t.slice(0,10));p(a)},filterValue:d}),Object(k.jsx)("div",{className:we.a.cardsWrapper,children:r.map((function(e){return Object(k.jsx)(ye,{data:e},e.id)}))}),""===d&&0!==t.length&&r.length!==t.length&&Object(k.jsx)("div",{className:we.a.buttonWrapper,children:Object(k.jsx)("button",{className:we.a.button,onClick:C,children:"Show More"})}),""!==d&&0===r.length&&Object(k.jsxs)("div",{className:we.a.searchNotFound,children:[Object(k.jsx)("h2",{children:"Nothing Found:("}),Object(k.jsx)("img",{src:ae,alt:""})]})]})]})},Ge=a(21),Me=a.n(Ge),He=a(40),Qe=a.n(He),De=function(e){var t=e.data,a=t.id,c=t.name,n=t.price,r=t.imageUri,s=t.iconUri,i=t.availability,l=t.catchPhrase;return Object(k.jsxs)(w,{children:[Object(k.jsx)("h2",{children:c.nameUSen}),Object(k.jsx)(E,{children:Object(k.jsx)("img",{src:s,alt:""})}),Object(k.jsxs)("div",{className:Qe.a.price,children:[n,Object(k.jsx)("img",{src:Ie,alt:""})]}),Object(k.jsx)("p",{className:Qe.a.imageWrapper,children:Object(k.jsx)(W.b,{to:"/bugs/".concat(a),children:Object(k.jsx)("img",{src:r,alt:c.nameUSen})})}),Object(k.jsx)("p",{children:i.location}),Object(k.jsx)("p",{children:l})]})},Le=function(){var e=Object(N.b)(),t=Object(N.c)((function(e){return e.bugs.bugs})),a=Object(n.useState)(t),c=Object(b.a)(a,2),r=c[0],s=c[1],i=Object(n.useState)(""),j=Object(b.a)(i,2),d=j[0],p=j[1],h=Object(n.useState)(!1),O=Object(b.a)(h,2),g=O[0],m=O[1],f=Object(n.useState)(!1),A=Object(b.a)(f,2),v=A[0],S=A[1];Object(n.useEffect)((function(){var t=function(){var t=Object(u.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,m(!0),t.next=4,e(function(){var e=Object(u.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:a=e.sent,t({type:"SET_BUGS",bugs:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:m(!1),S(!1),t.next=13;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0),m(!1),S(!0);case 13:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),Object(n.useEffect)((function(){s(t.slice(0,10))}),[t]);var C=Object(n.useCallback)((function(){s([].concat(Object(l.a)(r),Object(l.a)(t.slice(r.length,r.length+10))))}),[t,r,s]);return Object(k.jsxs)("div",{className:Me.a.wrapper,children:[v&&!g&&Object(k.jsx)(te,{}),g&&!v&&Object(k.jsx)(P,{}),!g&&!v&&Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(D,{name:"bugs",inputName:"bugsName",handleFilter:function(e){var a=e.target.value;if(""!==e.target.value){var c=t.filter((function(e){return e.name.nameUSen.toLowerCase().includes(a.toLowerCase())}));s(c)}else s(t.slice(0,10));p(a)},filterValue:d}),Object(k.jsx)("div",{className:Me.a.cardsWrapper,children:r.map((function(e){return Object(k.jsx)(De,{data:e},e.id)}))}),""===d&&0!==t.length&&r.length!==t.length&&Object(k.jsx)("div",{className:Me.a.buttonWrapper,children:Object(k.jsx)("button",{className:Me.a.button,onClick:C,children:"Show More"})}),""!==d&&0===r.length&&Object(k.jsxs)("div",{className:Me.a.searchNotFound,children:[Object(k.jsx)("h2",{children:"Nothing Found:("}),Object(k.jsx)("img",{src:ae,alt:""})]})]})]})},Ze=a(22),Te=a.n(Ze),Ye=function(e){var t=e.data,a=Object(N.b)(),c=Object(N.c)((function(e){return e.item.item})),r=Object(n.useState)({}),s=Object(b.a)(r,2),i=s[0],l=s[1],j=Object(z.f)(),d=Object(n.useState)(!1),p=Object(b.a)(d,2),h=p[0],O=p[1],g=Object(n.useState)(!1),m=Object(b.a)(g,2),x=m[0],f=m[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,O(!0),e.next=4,a(ue(t.url));case 4:O(!1),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),O(!1),f(!0);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[a,t.url]),Object(n.useEffect)((function(){l(c)}),[c]),Object(k.jsxs)("div",{className:Te.a.wrapper,children:[x&&!h&&Object(k.jsx)(te,{}),h&&!x&&Object(k.jsx)(P,{}),!h&&!x&&Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(ee,{handleClick:j.goBack}),0!==Object.entries(i).length&&Object(k.jsxs)(w,{children:[Object(k.jsx)("h2",{className:Te.a.title,children:i.name.nameUSen}),Object(k.jsx)(E,{children:Object(k.jsx)("img",{src:i.iconUri,alt:""})}),Object(k.jsx)("p",{className:Te.a.imageWrapper,children:Object(k.jsx)("img",{src:i.imageUri,alt:i.name.nameUSen})}),i.price&&Object(k.jsxs)("div",{className:Te.a.price,children:[i.price,Object(k.jsx)("img",{src:Ie,alt:""})]}),i.availability&&Object(k.jsxs)("p",{children:["Is Available At ",i.availability.location,""!==i.availability.time&&" At ".concat(i.availability.time)]}),i.species&&Object(k.jsx)("p",{children:i.species}),i.saying&&Object(k.jsx)("p",{children:i.saying}),i.personality&&Object(k.jsxs)("p",{children:["Personality: ",i.personality]}),i.hobby&&Object(k.jsxs)("p",{children:["Hobby: ",i.hobby]}),i.birthdayString&&Object(k.jsxs)("p",{children:["Birthday: ",i.birthdayString]}),i.museumPhrase&&Object(k.jsx)("p",{className:Te.a.museumPhrase,children:i.museumPhrase})]})]})]})};var Je=function(){return Object(k.jsx)(W.a,{children:Object(k.jsxs)(N.a,{store:he,children:[Object(k.jsx)(Ae,{}),Object(k.jsx)(me,{children:Object(k.jsxs)(z.c,{children:[Object(k.jsx)(z.a,{exact:!0,path:"/",children:Object(k.jsx)(Ce,{})}),Object(k.jsx)(z.a,{exact:!0,path:"/villagers",children:Object(k.jsx)(ce,{})}),Object(k.jsx)(z.a,{exact:!0,path:"/fish",children:Object(k.jsx)(Ue,{})}),Object(k.jsx)(z.a,{exact:!0,path:"/bugs",children:Object(k.jsx)(Le,{})}),Object(k.jsx)(z.a,{path:["/fish/:id","/villagers/:id","/bugs/:id"],render:function(e){var t=e.match;return Object(k.jsx)(Ye,{data:t})}}),Object(k.jsx)(z.a,{path:"*",children:Object(k.jsx)(te,{})})]})})]})})};i.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(Je,{})}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.25da070d.chunk.js.map