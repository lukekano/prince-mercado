(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{150:function(e,t,a){e.exports=a.p+"static/media/gps-dashboard.a2436c29.jpg"},151:function(e,t,a){e.exports=a.p+"static/media/dltb-selectseat.42f5a611.png"},152:function(e,t,a){e.exports=a.p+"static/media/ctmo-dashboard.9f6597f4.png"},153:function(e,t,a){e.exports=a.p+"static/media/ctmo-app-home2.7b0431ab.png"},154:function(e,t,a){e.exports=a.p+"static/media/remote-home.8c43efd0.png"},178:function(e,t,a){e.exports=a(398)},394:function(e,t,a){e.exports=a.p+"static/media/react.f370c1e0.png"},397:function(e,t,a){},398:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),i=a.n(o),l=a(51),c=a(25),s=a(17),m=a(480),u=a(88),d=a(489),p=a(453),f=a(483),g=a(67),b=a.n(g),h=a(451),E=a(64),v=a.n(E),y=a(52),j=r.a.createContext(),x=r.a.createContext(),k=Object(h.a)((function(e){return{avatar:{width:e.spacing(20),height:e.spacing(20),margin:e.spacing(1),background:"#939592"},title:{color:"#fff"},subtitle:{color:"#eee",textTransform:"uppercase"},typedContainer:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:"100vw",textAlign:"center",zIndex:1}}})),w=function(){var e=Object(n.useContext)(x).dispatch,t=Object(n.useState)(!1),a=Object(c.a)(t,2),o=a[0],i=a[1],l=Object(n.useState)(!1),s=Object(c.a)(l,2),m=s[0],g=s[1],h=k();return Object(n.useEffect)((function(){e({type:"navigate",payload:{routeIndex:0,toolBarTitle:""}})}),[]),r.a.createElement(f.a,{className:h.typedContainer},r.a.createElement(p.a,{container:!0,justify:"center"},r.a.createElement(d.a,{className:h.avatar,alt:"Prince Mercado"},r.a.createElement(y.a,{src:v.a,height:160,style:{objectFit:"fill"},onLoad:function(){return g(!0)}}))),r.a.createElement(u.a,{className:h.title,variant:"h4"},m?r.a.createElement(b.a,{strings:["Hi, I'm Prince Mercado"],typeSpeed:100,showCursor:!1,onComplete:function(){return i(!0)}}):r.a.createElement(b.a,{strings:["Hi, I'm Prince Mercado"],typeSpeed:100,showCursor:!1,style:{color:"transparent"},stopped:!0})),r.a.createElement(u.a,{className:h.subtitle,variant:"h5"},o?r.a.createElement(b.a,{strings:["Frontend Developer","Backend Developer","Mobile App Developer"],typeSpeed:60,backSpeed:50,loop:!0,showCursor:!0}):r.a.createElement(b.a,{strings:["Frontend Developer"],typeSpeed:40,backSpeed:50,style:{color:"transparent"},stopped:!0})))},C=a(142),O=Object(h.a)((function(e){return{particlesCanvas:{position:"fixed",opacity:"0.3"}}})),N=function(){var e=O();return r.a.createElement(C.Particles,{canvasClassName:e.particlesCanvas,params:{particles:{number:{value:45,density:{enable:!0,value_area:800}},shape:{type:"circle",stroke:{width:1,color:"tomato"}},size:{value:8,random:!0,anim:{enable:!1,speed:6,size_min:0,sync:!0}},opacity:{value:.5,random:!0,anim:{enable:!0,speed:1,opacity_min:.1,sync:!1}}}}})},B=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,null),r.a.createElement(N,null))},I=a(87),S=Object(h.a)((function(e){return{mainContainer:{background:"#212129"},timeLine:Object(I.a)({position:"relative",padding:"1rem",margin:"0 auto","&:before":{content:"''",position:"absolute",height:"100%",border:"1px solid #fff",right:"40px",top:0},"&:after":{content:"''",display:"table",clear:"both"}},e.breakpoints.up("md"),{padding:"2rem","&:before":{left:"calc(50% - 1px)",right:"auto"}}),timeLineItem:Object(I.a)({padding:"1rem",borderBottom:"2px solid #fff",position:"relative",margin:"1rem 3rem 1rem 1rem",clear:"both","&:after":{content:"''",position:"absolute"},"&:before":{content:"''",position:"absolute",right:"-0.625rem",top:"calc(50% - 5px)",borderStyle:"solid",borderColor:"#3873B1 #3873B1 transparent transparent",borderWidth:"0.625rem",transform:"rotate(45deg)"}},e.breakpoints.up("md"),{width:"44%",margin:"1rem","&:nth-of-type(2n)":{float:"right",margin:"1rem",borderColor:"#fff"},"&:nth-of-type(2n):before":{right:"auto",left:"-0.625rem",borderColor:"transparent transparent #3873B1 #3873B1"}}),timeLineYear:Object(I.a)({textAlign:"center",maxWidth:"9.375rem",margin:"0 3rem 0 auto",fontSize:"1.8rem",color:"#fff",background:"#3873B1",lineHeight:1,padding:"0.5rem 1rem","&:before":{display:"none"}},e.breakpoints.up("md"),{textAlign:"center",margin:"0 auto","&:nth-of-type(2n)":{float:"none",margin:"0 auto"},"&:nth-of-type(2n):before":{display:"none"}}),heading:{color:"#3873B1",padding:"3rem 0",textTransform:"uppercase"},subHeading:{color:"#fff",padding:0,textTransform:"uppercase"},body1:{color:"#3873B1"},subtitle1:{color:"#ddd",textAlign:"left"}}})),T=function(){var e=Object(n.useContext)(x).dispatch;Object(n.useEffect)((function(){e({type:"navigate",payload:{routeIndex:1,toolBarTitle:"Resume"}})}),[]);var t=S();return r.a.createElement(f.a,{component:"header",className:t.mainContainer},r.a.createElement(u.a,{variant:"h4",align:"center",className:t.heading},"Working Experience"),r.a.createElement(f.a,{component:"div",className:t.timeLine},r.a.createElement(u.a,{variant:"h2",className:"".concat(t.timeLineYear," ").concat(t.timeLineItem)},"2017"),r.a.createElement(f.a,{component:"div",className:t.timeLineItem},r.a.createElement(u.a,{variant:"h5",align:"center",className:t.subHeading},"Software Developer"),r.a.createElement(u.a,{variant:"body1",align:"center",className:t.body1},"Circuit Solutions Inc."),r.a.createElement(u.a,{variant:"subtitle1",align:"center",className:t.subtitle1},r.a.createElement("ul",null,r.a.createElement("li",null,"Built modern applications with JAVA, Spring, Spring Boot,ReactJs, MySQL"),r.a.createElement("li",null,"Built Face Recognition API for web based applications"),r.a.createElement("li",null,"Integrated biometric scanners and hardwares to web based applications"),r.a.createElement("li",null,"Built android application for employee's remote timekeeping"),r.a.createElement("li",null,"Worked with other developers on building GPS and Bluetooth enabled mobile applications"),r.a.createElement("li",null,"Managed and automate database backups of existing applications"),r.a.createElement("li",null,"Written scripts to automate reports generation")))),r.a.createElement(u.a,{variant:"h2",className:"".concat(t.timeLineYear," ").concat(t.timeLineItem)},"2019"),r.a.createElement(f.a,{component:"div",className:t.timeLineItem},r.a.createElement(u.a,{variant:"h5",align:"center",className:t.subHeading},"Software Developer"),r.a.createElement(u.a,{variant:"body1",align:"center",className:t.body1},"Amdocs Philippines"),r.a.createElement(u.a,{variant:"subtitle1",align:"center",className:t.subtitle1},r.a.createElement("ul",null,r.a.createElement("li",null,"Provided support to production softwares"),r.a.createElement("li",null,"Analyzed and debugged microservice API's and server issues"),r.a.createElement("li",null,"Built bulk user update jobs and scripts")))),r.a.createElement(u.a,{variant:"h2",className:"".concat(t.timeLineYear," ").concat(t.timeLineItem)},"2020")))},A=a(464),M=a(465),P=a(466),q=a(460),L=a(461),W=a(462),F=a(463),H=a(459),D=a(146),Q=a.n(D),z=a(145),_=a.n(z),R=a(148),Y=a.n(R),J=a(149),G=a.n(J),V=a(457),K=a(486),Z=a(147),$=a.n(Z),U=a(455),X=a(456),ee=a(143),te=a.n(ee),ae=a(144),ne=a.n(ae),re=Object(h.a)({bottomNavContainer:{background:"#3873B1"},root:{"& .MuiSvgIcon-root":{fill:"#ddd","&:hover":{fill:"#252327",fontSize:"1.8rem"}}}}),oe=function(){var e=re();return r.a.createElement(U.a,{className:e.bottomNavContainer},r.a.createElement(X.a,{onClick:function(){return window.open("https://www.facebook.com/lukekanopol","_blank")},icon:r.a.createElement(te.a,null),className:e.root}),r.a.createElement(X.a,{onClick:function(){return window.open("https://www.linkedin.com/in/prince-luke-mercado-17454a11b","_blank")},icon:r.a.createElement(ne.a,null),className:e.root}))},ie=a(458),le=Object(h.a)((function(e){return{appbar:{background:"3873B1",margin:0},grow:{flexGrow:1},menu:{color:"#fff"},title:{color:"#eee"},menuSliderContainer:{width:250,background:"#252327",height:"100%"},avatar:{display:"block",margin:"2rem auto",width:e.spacing(13),height:e.spacing(13),background:"#939592"},toolbarAvatar:{display:"block",width:e.spacing(5),height:e.spacing(5),background:"#939592"},listItem:{color:"#ddd"}}})),ce=[{listIcon:r.a.createElement(_.a,null),listText:"Home",listPath:"/"},{listIcon:r.a.createElement(Q.a,null),listText:"Resume",listPath:"/resume"},{listIcon:r.a.createElement($.a,null),listText:"Portfolio",listPath:"/portfolio"},{listIcon:r.a.createElement(Y.a,null),listText:"Contact",listPath:"/contact"}];function se(e){var t=e.children,a=e.window,n=Object(V.a)({target:a?a():void 0});return r.a.createElement(ie.a,{appear:!1,direction:"down",in:!n},t)}var me=function(e){var t=Object(n.useContext)(j).state,a=t.routeIndex,o=t.toolBarTitle,i=Object(n.useState)(!1),s=Object(c.a)(i,2),m=s[0],p=s[1],g=Object(n.useState)(0),b=Object(c.a)(g,2),h=b[0],E=b[1],x=le();return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{component:"nav"},r.a.createElement(se,e,r.a.createElement(A.a,{position:"fixed",className:x.appbar,style:{background:0==a?"transparent":"#3873B1"},elevation:0==a?0:1},r.a.createElement(M.a,null,r.a.createElement(P.a,{onClick:function(){return p(!0)}},r.a.createElement(G.a,{className:x.menu})),r.a.createElement(u.a,{variant:"h5",className:x.title},o),r.a.createElement("div",{className:x.grow}),0==a?null:r.a.createElement(d.a,{className:x.toolbarAvatar,alt:"Prince Mercado"},r.a.createElement(y.a,{src:v.a,height:40,style:{objectFit:"fill"}})))))),r.a.createElement(K.a,{onOpen:function(){return p(!0)},disableBackdropTransition:!0,open:m,anchor:"left",onClose:function(){return p(!1)}},r.a.createElement(f.a,{className:x.menuSliderContainer,component:"div"},r.a.createElement(d.a,{className:x.avatar,alt:"Prince Mercado"},r.a.createElement(y.a,{src:v.a,height:108,style:{objectFit:"fill"}})),r.a.createElement(H.a,null),r.a.createElement(q.a,null,ce.map((function(e,t){return r.a.createElement(L.a,{button:!0,key:t,className:x.listItem,onClick:function(e){return E(t),void setTimeout((function(){p(!1)}),200)},selected:h===t,component:l.c,to:e.listPath},r.a.createElement(W.a,{className:x.listItem},e.listIcon),r.a.createElement(F.a,{primary:e.listText}))})))),r.a.createElement(oe,null)))},ue=a(471),de=a(472),pe=a(474),fe=a(473),ge=a(150),be=a.n(ge),he=a(151),Ee=a.n(he),ve=a(152),ye=a.n(ve),je=a(153),xe=a.n(je),ke=a(154),we=a.n(ke);a(394),a(467),a(468),a(470),a(469),a(155),Object(h.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly",overflow:"none",backgroundColor:"#212129"},gridList:{width:"80vw",height:"100vh"},icon:{color:"rgba(255, 255, 255, 0.54)"}}}));var Ce=Object(h.a)((function(e){return{mainContainer:{background:"#212129",height:"100%"},cardContainer:{maxWidth:345,maxHeight:300,margin:"3rem auto",background:"linear-gradient(to top, transparent,  #3873B1)",color:"#fff",textAlign:"center"},cardAction:{background:"#3873B1"},cardMedia:{marginTop:10}}})),Oe=[{title:"Vehicle Tracking App",author:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\n    consequatur magni quod nesciunt necessitatibus molestiae non\n    eligendi, magnam est aliquam recusandae? Magnam soluta minus\n    iste alias sunt veritatis nisi dolores!",img:be.a},{title:"Bus Booking App",author:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis    consequatur magni quod nesciunt necessitatibus molestiae non    eligendi, magnam est aliquam recusandae? Magnam soluta minus    iste alias sunt veritatis nisi dolores!",img:Ee.a},{title:"Complaint Management App",author:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis    consequatur magni quod nesciunt necessitatibus molestiae non    eligendi, magnam est aliquam recusandae? Magnam soluta minus    iste alias sunt veritatis nisi dolores!",img:ye.a},{title:"Tricycle Complaint App",author:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis    consequatur magni quod nesciunt necessitatibus molestiae non    eligendi, magnam est aliquam recusandae? Magnam soluta minus    iste alias sunt veritatis nisi dolores!",img:xe.a},{title:"Remote TimeKeeping App",author:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis    consequatur magni quod nesciunt necessitatibus molestiae non    eligendi, magnam est aliquam recusandae? Magnam soluta minus    iste alias sunt veritatis nisi dolores!",img:we.a}],Ne=function(){var e=Object(n.useContext)(x).dispatch;Object(n.useEffect)((function(){e({type:"navigate",payload:{routeIndex:2,toolBarTitle:"Portfolio"}})}),[]);var t=Ce();return r.a.createElement(f.a,{component:"div",className:t.mainContainer},r.a.createElement(p.a,{container:!0,justify:"left"},Oe.map((function(e,a){return r.a.createElement(p.a,{item:!0,xs:12,sm:8,md:4,key:a},r.a.createElement(ue.a,{className:t.cardContainer},r.a.createElement(de.a,null,r.a.createElement(fe.a,{alt:"Project 1",className:t.cardMedia,height:"200"},r.a.createElement(y.a,{height:150,src:e.img,style:{objectFit:"fill"}})),r.a.createElement(pe.a,{height:"150"},r.a.createElement(u.a,{variant:"h5",gutterBottom:!0},e.title)))))}))))},Be=a(7),Ie=a(482),Se=a(476),Te=a(477),Ae=a(156),Me=a.n(Ae),Pe=a(157),qe=a.n(Pe),Le=a(487),We=a(485),Fe=a(160),He=Object(h.a)((function(e){return{contactContainer:{background:"#212129",height:"100vh"},heading:{color:"#3873B1",textAlign:"center",textTransform:"uppercase",marginBottom:"1rem"},form:{position:"relative",margin:"1rem"},input:{color:"#fff"},button:{marginTop:"1rem",color:"#3873B1",borderColor:"#fff"},field:{margin:"1rem 0rem"},recaptcha:{marginTop:"1rem",width:"100%"}}})),De=Object(Be.a)({root:{"& label.Mui-focused":{color:"#fff"},"& label":{color:"#3873B1"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#fff"},"&:hover fieldset":{borderColor:"#fff"},"&.Mui-focused fieldset":{color:"#fff",borderColor:"#fff"}}}})(Ie.a),Qe=function(){var e=He(),t=Object(n.useState)(""),a=Object(c.a)(t,2),o=a[0],i=a[1],l=Object(n.useState)(""),s=Object(c.a)(l,2),m=s[0],d=s[1],g=Object(n.useState)(""),b=Object(c.a)(g,2),h=b[0],E=b[1],v=Object(n.useState)(!1),y=Object(c.a)(v,2),j=y[0],k=y[1],w=Object(n.useState)(!1),C=Object(c.a)(w,2),O=C[0],N=C[1],B=Object(n.useState)(!1),I=Object(c.a)(B,2),S=I[0],T=I[1],A=Object(n.useState)(!1),M=Object(c.a)(A,2),P=M[0],q=M[1],L=r.a.createRef(),W=Object(n.useContext)(x).dispatch;Object(n.useEffect)((function(){W({type:"navigate",payload:{routeIndex:3,toolBarTitle:"Contact"}})}),[]);var F=function(e){return r.a.createElement(We.a,Object.assign({elevation:6,variant:"filled"},e))},H=function(e,t){"clickaway"!==t&&q(!1)};return r.a.createElement(f.a,{component:"div",className:e.contactContainer},r.a.createElement(p.a,{container:!0,justify:"center"},r.a.createElement(f.a,{component:"form",className:e.form,onSubmit:function(e){e.preventDefault(),k(!0);var t=L.current;Me.a.send("gmail","template_22kjqem",{name:m,email:o,message:h},"user_qarjmh0NC3wdpJGnjQqM8").then((function(e){console.log(e.text),k(!1),N(!0),q(!0),d(""),i(""),E(""),t.reset(),T(!1)}),(function(e){console.log(e.text),k(!1),N(!1),q(!0)}))}},r.a.createElement(u.a,{variant:"h5",className:e.heading},"Hire or Contact me..."),r.a.createElement(De,{fullWidth:!0,label:"Name",variant:"outlined",name:"name",id:"name",required:!0,autoComplete:"off",inputProps:{className:e.input},value:m,onInput:function(e){return d(e.target.value)}}),r.a.createElement(De,{autoComplete:"off",fullWidth:!0,label:"Email",variant:"outlined",id:"email",name:"email",required:!0,type:"email",inputProps:{className:e.input},className:e.field,value:o,onInput:function(e){return i(e.target.value)}}),r.a.createElement(De,{autoComplete:"off",fullWidth:!0,label:"Message",variant:"outlined",required:!0,id:"message",name:"message",multiline:!0,rows:4,inputProps:{className:e.input},value:h,onInput:function(e){return E(e.target.value)}}),r.a.createElement(Fe.a,{ref:L,className:e.recaptcha,sitekey:"6Ld5nMYZAAAAAIxN9dbgWayMpQQaYAqG4ChKSFtF",onChange:function(){return T(!0)}}),",",r.a.createElement(Se.a,{variant:"outlined",fullWidth:!0,endIcon:r.a.createElement(qe.a,null),className:e.button,type:"submit",disabled:!S||j},j?r.a.createElement(Te.a,{size:"3rem"}):"SEND"))),r.a.createElement(Le.a,{open:P,autoHideDuration:6e3,onClose:H},r.a.createElement(F,{onClose:H,severity:O?"success":"error"},O?"Thanks for reaching out!, Ill get back to you soon.":"Ooops! Something went wrong")))},ze=a(478),_e=Object(h.a)((function(e){return{root:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}}));function Re(e){var t=e.children,a=e.window,n=_e(),o=Object(V.a)({target:a?a():void 0,disableHysteresis:!0,threshold:100});return r.a.createElement(ze.a,{in:o},r.a.createElement("div",{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",className:n.root},t))}var Ye=a(481),Je=a(158),Ge=a.n(Je),Ve=a(159),Ke=a(479),Ze=(a(397),a(161)),$e=Object(Ve.a)({typography:{fontFamily:"Titillium Web, sans-serif",button:{textTransform:"none"}},palette:{primary:{main:"#3873B1"}}}),Ue={routeIndex:0,toolBarTitle:""};function Xe(e,t){switch(t.type){case"navigate":return e.routeIndex=t.payload.routeIndex,void(e.toolBarTitle=t.payload.toolBarTitle);default:return}}var et=function(e){var t=Object(Ze.a)(Xe,Ue),a=Object(c.a)(t,2),n=a[0],o=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.Provider,{value:{state:n}},r.a.createElement(x.Provider,{value:{dispatch:o}},r.a.createElement(Ke.a,{theme:$e},r.a.createElement(l.b,null,r.a.createElement(m.a,null),r.a.createElement(me,null),r.a.createElement(M.a,{id:"back-to-top-anchor"}),r.a.createElement(s.b,{exact:!0,path:"/",component:B}),r.a.createElement(s.b,{exact:!0,path:"/resume",component:T}),r.a.createElement(s.b,{exact:!0,path:"/portfolio",component:Ne}),r.a.createElement(s.b,{exact:!0,path:"/contact",component:Qe}),r.a.createElement(s.b,{path:"*",render:function(){return r.a.createElement(s.a,{to:"/"})}}),r.a.createElement(Re,e,r.a.createElement(Ye.a,{color:"primary",size:"small","aria-label":"scroll back to top"},r.a.createElement(Ge.a,null))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(l.a,null,r.a.createElement(et,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},64:function(e,t,a){e.exports=a.p+"static/media/avatar.4f5142ce.png"}},[[178,1,2]]]);