(this["webpackJsonpportfolio-tandevzai"]=this["webpackJsonpportfolio-tandevzai"]||[]).push([[0],{24:function(e,t,s){},26:function(e,t,s){},32:function(e,t,s){},33:function(e,t,s){},34:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},40:function(e,t,s){"use strict";s.r(t);var c=s(1),i=s.n(c),n=s(9),a=s.n(n),r=s(3),o=(s(24),s(12)),l=s(0);function j(){var e=Object(c.useRef)();return Object(c.useEffect)((function(){Object(o.a)(e.current,{showCursor:!0,backDelay:1e3,backSpeed:60,strings:["Dev Zai","Developer","Gamer","Designer"]})}),[]),Object(l.jsxs)("div",{className:"intro",id:"intro",children:[Object(l.jsx)("div",{className:"left",children:Object(l.jsx)("div",{className:"imgContainer",children:Object(l.jsx)("img",{src:"assets/tan2.png",alt:""})})}),Object(l.jsxs)("div",{className:"right",children:[Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)("h2",{children:"Welcome ! I'm "}),Object(l.jsxs)("h1",{children:["Tan ",Object(l.jsx)("span",{ref:e})," "]}),Object(l.jsx)("h3",{children:"Let's explore about me !"})]}),Object(l.jsx)("a",{href:"#portfolio",children:Object(l.jsx)("img",{src:"assets/down.png",alt:""})})]})]})}s(26);var d=s(54),b=s(55),m=s(14),h=s.n(m),p=s(15),O=s.n(p);function u(e){var t=e.menuOpen,s=e.setMenuOpen;return Object(l.jsx)("div",{className:"topbar "+(t&&"active"),children:Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsxs)("div",{className:"left",children:[Object(l.jsx)("a",{href:"#intro",className:"logo",children:" Tandev. "}),Object(l.jsxs)("div",{className:"itemContainer",children:[Object(l.jsx)(d.a,{className:"icon"}),Object(l.jsx)("span",{children:" 0822040559 "})]}),Object(l.jsxs)("div",{className:"itemContainer",children:[Object(l.jsx)(b.a,{className:"icon"}),Object(l.jsx)("span",{children:" tan240600@gmail.com "})]}),Object(l.jsxs)("div",{className:"itemContainer",children:[Object(l.jsx)(h.a,{className:"icon"}),Object(l.jsx)("a",{href:"https://github.com/tandev2k",target:"_blank",children:"My GitHub "})]}),Object(l.jsxs)("div",{className:"itemContainer",children:[Object(l.jsx)(O.a,{className:"icon"}),Object(l.jsx)("a",{href:"https://www.topcv.vn/xem-cv/BQ5cVg4HBAcBDAIGAloLAFRRUVUHUFRTVldRBw91df",target:"_blank",children:"My CV "})]})]}),Object(l.jsx)("div",{className:"right",children:Object(l.jsxs)("div",{className:"hamburger",onClick:function(){return s(!t)},children:[Object(l.jsx)("span",{className:"line1"}),Object(l.jsx)("span",{className:"line2"}),Object(l.jsx)("span",{className:"line3"})]})})]})})}s(32);function x(e){var t=e.item,s=e.active,c=e.setSelected;return Object(l.jsx)("li",{className:"portfolioList "+(s&&"active"),onClick:function(){return c(t.id)},children:t.title})}s(33);var g=[{id:1,title:"Stationery Store Web App",img:"assets/stationery.png"},{id:2,title:"Stationery Management",img:"assets/stationery-winform.png"},{id:3,title:"Grocery Store Mobile App",img:"assets/ministuck.png"},{id:4,title:"Music Player Basic App",img:"assets/spotify-clone.png"},{id:5,title:"MernStack E-commerce",img:"assets/mernstack-watchshop.png"},{id:6,title:"Photoshop Vip Pro",img:"assets/photoshop.jpg"}],f=[{id:1,title:"Stationery Store Web App",img:"assets/stationery.png"},{id:2,title:"Music Player Basic App",img:"assets/spotify-clone.png"},{id:3,title:"Stationery Management",img:"assets/stationery-winform.png"},{id:4,title:"MernStack E-commerce",img:"assets/mernstack-watchshop.png"}],v=[{id:1,title:"Grocery Store Mobile App",img:"assets/ministuck.png"}],N=[{id:1,title:"Photoshop Vip Pro",img:"assets/photoshop.jpg"}],y=[];function k(){var e=[{id:"featured",title:"Featured"},{id:"web",title:"Web App"},{id:"mobile",title:"Mobile App"},{id:"design",title:"Design"},{id:"content",title:"Content"}],t=Object(c.useState)(e[0].id),s=Object(r.a)(t,2),i=s[0],n=s[1],a=Object(c.useState)([]),o=Object(r.a)(a,2),j=o[0],d=o[1];return Object(c.useEffect)((function(){switch(i){case"featured":d(g);break;case"web":d(f);break;case"mobile":d(v);break;case"design":d(N);break;case"content":d(y);break;default:d(g)}}),[i]),Object(l.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(l.jsx)("h1",{children:"Portfolio"}),Object(l.jsx)("ul",{children:e.map((function(e){return Object(l.jsx)(x,{item:e,active:i===e.id,setSelected:n},e.id)}))}),Object(l.jsx)("div",{className:"container",children:j.map((function(e){return Object(l.jsxs)("div",{className:"item",children:[Object(l.jsx)("img",{src:e.img,alt:""}),Object(l.jsx)("h3",{children:e.title})]})}))})]})}function w(e){var t=e.item;return Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"item",children:[Object(l.jsx)("div",{className:"left",children:Object(l.jsxs)("div",{className:"leftContainer",children:[Object(l.jsx)("div",{className:"imgContainer",children:Object(l.jsx)("img",{src:t.icon,alt:""})}),Object(l.jsx)("h2",{children:t.title}),Object(l.jsxs)("p",{children:[" ",t.desc]}),Object(l.jsx)("a",{href:t.project,target:"_blank",children:Object(l.jsx)("span",{children:"Project"})})]})}),Object(l.jsx)("div",{className:"right",children:Object(l.jsx)("img",{src:t.img,alt:""})})]})})}s(34);function C(){var e=[{id:"1",icon:"./assets/globe.png",title:"Web Application",desc:"Web programming is my strong point. I can build web apps anytime, anywhere.I can handle both frontend, backend.",img:"./assets/stationery2.png",project:"https://github.com/tandev2k/jsp-servlet-stationery-store"},{id:"2",icon:"./assets/mobile.png",title:"Mobile Application",desc:"Currently, I can build mobile apps in Java but I also use React native.",img:"./assets/grocery2.png",project:"https://github.com/tandev2k/MobilePrograming-MiniStuck"},{id:"3",icon:"./assets/writing.png",title:"Photoshop",desc:"In high school, My hobby was photo editing. I think it can help me improve my ideas.",img:"./assets/photoshop.jpg",project:""}],t=Object(c.useState)(0),s=Object(r.a)(t,2),i=s[0],n=s[1];function a(t){-1===t&&n(i>0?i-1:e.length-1),i<e.length-1?n(i+1):n(0)}return Object(l.jsxs)("div",{className:"works",id:"works",children:[Object(l.jsx)("div",{className:"slider",style:{transform:"translateX(-".concat(100*i,"vw)")},children:e.map((function(e){return Object(l.jsx)(w,{item:e},e.id)}))}),Object(l.jsx)("img",{src:"assets/arrow.png",className:"arrow left",alt:"",onClick:function(){return a(-1)}}),Object(l.jsx)("img",{src:"assets/arrow.png",className:"arrow right",alt:"",onClick:function(){return a(1)}})]})}function S(e){var t=e.item;return Object(l.jsxs)("div",{className:"card "+(t.featured?"featured":""),children:[Object(l.jsxs)("div",{className:"top",children:[Object(l.jsx)("img",{src:"assets/right-arrow.png",className:"left",alt:""}),Object(l.jsx)("img",{src:t.img,className:"user",alt:""}),Object(l.jsx)("img",{src:t.icon,className:"right",alt:""})]}),Object(l.jsx)("div",{className:"center",children:t.desc}),Object(l.jsxs)("div",{className:"bottom",children:[Object(l.jsx)("h3",{children:t.name}),Object(l.jsx)("h4",{children:t.title})]})]})}s(35);function M(){return Object(l.jsxs)("div",{className:"testimonials",id:"testimonials",children:[Object(l.jsx)("h1",{children:"Testimonials"}),Object(l.jsx)("div",{className:"container",children:[{id:1,name:"Le Duc Tan",title:"Co-worker",img:"https://scontent-sin6-4.xx.fbcdn.net/v/t1.6435-9/183347212_1354857611555930_5448538529907302562_n.jpg?_nc_cat=101&ccb=1-4&_nc_sid=730e14&_nc_ohc=QFfAvBjMQOcAX9OUDKq&_nc_ht=scontent-sin6-4.xx&oh=2b93033e8030569173210bc010e686f2&oe=613609CD",icon:"assets/twitter.png",desc:"Python is sincere love. Other programming languages are trash ! "},{id:2,name:"Nguyen Van Tan",title:"Software Developer of MWG",img:"./assets/tan-dz.jpg",icon:"assets/youtube.png",desc:"Everyone will end up some place in life. The opportunity before you is to end up where you want to be. Think of you life in terms of you destiny. ",featured:!0},{id:3,name:"Joma Tech",title:"Professional Engineer",img:"https://yt3.ggpht.com/ytc/AKedOLTFLnUPOScnD78_Lz7YCbp0PXSpPgBTI4HA0pA8=s900-c-k-c0x00ffffff-no-rj",icon:"assets/linkedin.png",desc:"Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind"}].map((function(e){return Object(l.jsx)(S,{item:e},e.id)}))})]})}s(36);var A=s(16),_=s.n(A),P=s(17),T=s.n(P);function D(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),s=t[0],i=t[1];return Object(l.jsxs)("div",{className:"contact",id:"contact",children:[Object(l.jsx)("div",{className:"left",children:Object(l.jsx)("img",{src:"assets/shake.svg",alt:""})}),Object(l.jsxs)("div",{className:"right",children:[Object(l.jsx)("h2",{children:"Contact"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i(!0)},children:[Object(l.jsx)("input",{type:"text",placeholder:"Email"}),Object(l.jsx)("textarea",{placeholder:"Message"}),",",Object(l.jsx)("button",{type:"submit",children:"Send"}),s&&Object(l.jsx)("span",{children:"Thanks, I'll reply to you soon!"})]}),Object(l.jsx)("h3",{children:"OR"}),Object(l.jsxs)("div",{className:"social",children:[Object(l.jsx)("div",{className:"itemContainer",children:Object(l.jsxs)("a",{href:"https://www.facebook.com/nguyentan2k/",target:"_blank",children:[" ",Object(l.jsx)(_.a,{className:"icon"})]})}),Object(l.jsx)("div",{className:"itemContainer",children:Object(l.jsxs)("a",{href:"https://www.instagram.com/tandzok/",target:"_blank",children:[" ",Object(l.jsx)(T.a,{className:"icon"})]})})]})]})]})}s(37);function I(e){var t=e.menuOpen,s=e.setMenuOpen;return Object(l.jsx)("div",{className:"menu "+(t&&"active"),children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{onClick:function(){return s(!1)},children:Object(l.jsx)("a",{href:"#intro",children:"Home"})}),Object(l.jsx)("li",{onClick:function(){return s(!1)},children:Object(l.jsx)("a",{href:"#portfolio",children:"Portfolio"})}),Object(l.jsx)("li",{onClick:function(){return s(!1)},children:Object(l.jsx)("a",{href:"#works",children:"Works"})}),Object(l.jsx)("li",{onClick:function(){return s(!1)},children:Object(l.jsx)("a",{href:"#testimonials",children:"Testimonials"})}),Object(l.jsx)("li",{onClick:function(){return s(!1)},children:Object(l.jsx)("a",{href:"#contact",children:"Contact"})})]})})}s(38);var B=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),s=t[0],i=t[1];return Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(u,{menuOpen:s,setMenuOpen:i}),Object(l.jsx)(I,{menuOpen:s,setMenuOpen:i}),Object(l.jsxs)("div",{className:"sections",children:[Object(l.jsx)(j,{}),Object(l.jsx)(k,{}),Object(l.jsx)(C,{}),Object(l.jsx)(M,{}),Object(l.jsx)(D,{})]})]})};a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(B,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.4735130c.chunk.js.map