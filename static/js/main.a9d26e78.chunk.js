(this.webpackJsonpfarmoredifferent=this.webpackJsonpfarmoredifferent||[]).push([[0],{140:function(e,t,c){},141:function(e,t,c){},148:function(e,t,c){},149:function(e,t,c){},150:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(1),n=c.n(a),i=c(48),r=c.n(i),l=(c(60),c(2)),j=c(6),o=(c(61),c(62),c(23)),d=c(49),h=c.n(d);c(140),c(141);var b=function(){var e=n.a.useState(!0),t=Object(o.a)(e,2),c=t[0],a=t[1];function i(){window.innerWidth<=900?a(!1):a(!0)}return n.a.useEffect((function(){i()}),[]),window.addEventListener("resize",i),Object(s.jsxs)("div",{className:"main_aside",children:[Object(s.jsxs)("div",{id:"nav_hamburger",onClick:function(){a(!0)},children:[Object(s.jsx)("div",{class:"bar1"}),Object(s.jsx)("div",{class:"bar2"}),Object(s.jsx)("div",{class:"bar3"})]}),c&&Object(s.jsxs)("div",{className:"asside_wrapper",children:[Object(s.jsxs)("div",{className:"change",id:"nav_hamburger",onClick:function(){a(!1)},children:[Object(s.jsx)("div",{class:"bar1"}),Object(s.jsx)("div",{class:"bar2"}),Object(s.jsx)("div",{class:"bar3"})]}),Object(s.jsx)("h4",{children:"NAVIGATION"}),Object(s.jsx)("nav",{role:"navigation",className:"navbar",children:Object(s.jsxs)("ul",{className:"nav navbar-nav",children:[Object(s.jsx)("li",{children:Object(s.jsx)(j.c,{onClick:i,activeClassName:"selected_link",to:"/home",children:"Home"})}),Object(s.jsx)("li",{children:Object(s.jsx)(j.c,{onClick:i,activeClassName:"selected_link",to:"/contact",children:"Contact"})}),Object(s.jsx)("li",{children:Object(s.jsx)(j.c,{onClick:i,activeClassName:"selected_link",to:"/books",children:"Book notes"})}),Object(s.jsx)("li",{children:Object(s.jsx)(j.c,{onClick:i,activeClassName:"selected_link",to:"/weekly",children:"Weekly LIFO"})})]})})]})]})},m=(c(148),c(149),c.p+"static/media/My_2015_summer_project.f742634d.md"),p=c.p+"static/media/Developer_Journal_Making_the_Dayty_App.d853bace.md",x=c.p+"static/media/Dayty_Phase_0_Starting_a_Django_project.0a4aa48d.md",O=c.p+"static/media/Dayty_Phase_1.60c9b566.md",u=c.p+"static/media/Reversed_Citations_Needed_app.53d170ff.md",f=c.p+"static/media/weekly.f9492696.md",y=[{name:"Dayty: Phase 1",story:O,path:"/Dayty-Phase-1",published:"May 10, 2020",lastUpdated:"May 10, 2020",summary:"Defining models, choosing a CSS framework, populating the admin panel, and adding basic views"},{name:"Dayty: Phase 0 (Starting a Django project)",story:x,path:"/Dayty-Phase-0",published:"May 10, 2020",lastUpdated:"May 10, 2020",summary:"A Django project"},{name:"Developer Journal: Making the Dayty App",story:p,path:"/Developer-Journal-Making-the-Dayty-App",published:"May 8, 2020",lastUpdated:"May 8, 2020",summary:"This story is the spring board off of which I'm jumping into making a brand new productivity app. I'll be writing the story in phases as follow up stories to this one"},{name:"Reversed Citations Needed",story:u,path:"/Reversed-Citations-Needed",published:"Apr 24, 2020",lastUpdated:"Apr 24, 2020",summary:"This is the story of how I built my first progressive web app and how I learned what a PWA even is."},{name:"My 2015 summer project",story:m,path:"/my-2015-summer-project",published:"Apr 23, 2020",lastUpdated:"Apr 30, 2020",summary:"A story about my first project, and how it got me started on being a coder."}],v={name:"Weekly shorts LIFO",story:f,path:"/weekly",summary:"Here you can read what I am learnign each week... I'm using this like an accountability journal."},g=[];var w=function(){var e=y.slice(0,2).map((function(e){return Object(s.jsx)("div",{className:"single_article side_card",children:Object(s.jsxs)(j.c,{to:e.path,style:{textDecoration:"none",color:"inherit"},children:[Object(s.jsx)("h3",{children:e.name}),Object(s.jsxs)("p",{children:[Object(s.jsx)("span",{className:"tech_label",children:"published: "}),e.published,"   "]}),Object(s.jsx)("p",{children:e.summary})]})})})),t=g.slice(0,1).map((function(e){return Object(s.jsx)("div",{className:"single_article side_card",children:Object(s.jsxs)(j.c,{to:e.path,style:{textDecoration:"none",color:"inherit"},children:[Object(s.jsx)("h3",{children:e.name}),Object(s.jsxs)("p",{children:[Object(s.jsx)("span",{className:"tech_label",children:"published: "}),"  ",e.author,"   "]})]})})}));return Object(s.jsx)("div",{className:"side_wrapper",children:Object(s.jsxs)("div",{className:"side_content",children:[Object(s.jsx)("div",{className:"single_article side_card",children:Object(s.jsxs)(j.c,{to:"weekly",style:{textDecoration:"none",color:"inherit"},children:[Object(s.jsx)("h3",{children:"Weekly stories \u270f\ufe0f"}),Object(s.jsx)("p",{children:"Here you can read what I am learnign each week... I'm using this like an accountability journal."})]})}),Object(s.jsx)("h2",{children:"Latest stories \ud83d\udcf0"}),e,Object(s.jsx)("h2",{children:"What I am reading \ud83d\udcd6"}),t]})})};var _=function(e){var t=n.a.useState(),c=Object(o.a)(t,2),a=c[0],i=c[1];function r(e,t){return"string"===typeof t?e+t:n.a.Children.toArray(t.props.children).reduce(r,e)}return n.a.useEffect((function(){fetch(e.content.story).then((function(e){return e.text()})).then((function(e){i(e),window.scrollTo(0,0)}))}),[e.content]),Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(b,{}),Object(s.jsxs)("div",{class:"content_wrapper",children:[Object(s.jsxs)("div",{className:"blog_content",children:[Object(s.jsxs)("h1",{children:[" ",e.content.name," "]})," ",!0===e.weekly?Object(s.jsx)(s.Fragment,{children:" "}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("span",{children:" published: "}),e.content.published,Object(s.jsx)("br",{}),Object(s.jsx)("span",{children:" last updated: "}),e.content.lastUpdated," "]}),Object(s.jsx)(h.a,{source:a,renderers:{heading:function(e){var t=n.a.Children.toArray(e.children).reduce(r,"").toLowerCase().replace(/\W/g,"-");return n.a.createElement("h"+e.level,{id:t},e.children)}}})," "]})," ",Object(s.jsx)(w,{})]})]})},k=c(51),N=c(52),I=c(54),C=c(53),D=function(e){Object(I.a)(c,e);var t=Object(C.a)(c);function c(){return Object(k.a)(this,c),t.apply(this,arguments)}return Object(N.a)(c,[{key:"render",value:function(){var e=this,t=this.props.articles.map((function(t){return Object(s.jsx)(j.b,{to:t.path,style:{textDecoration:"none",color:"inherit"},children:Object(s.jsxs)("div",{className:"single_article",children:[Object(s.jsx)("h2",{children:t.year}),Object(s.jsx)("h3",{children:t.name}),!0===e.props.book?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("p",{children:[Object(s.jsx)("span",{className:"tech_label",children:"finished: "}),t.published," "]}),Object(s.jsx)("p",{className:"article_summray",children:t.author})]}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("p",{children:[Object(s.jsx)("span",{className:"tech_label",children:"published: "}),t.published,"   ",Object(s.jsx)("span",{className:"tech_label",children:"last updated: "}),t.lastUpdated]}),Object(s.jsx)("p",{className:"article_summray",children:t.summary})]})]})})}));return Object(s.jsx)(s.Fragment,{children:t})}}]),c}(n.a.Component);var A=function(e){return n.a.useEffect((function(){window.scrollTo(0,0)})),Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(b,{}),Object(s.jsxs)("div",{class:"content_wrapper",children:[Object(s.jsxs)("div",{className:"main_content",children:[Object(s.jsx)("div",{className:"massive_title",children:"farmoredifferent.com"}),!0===e.bookList?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{className:"left",children:"Books:"}),Object(s.jsx)(D,{articles:g})]}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{className:"left",children:"Stories:"}),Object(s.jsx)(D,{articles:y})]})]}),Object(s.jsx)(w,{})]})]})},M=c.p+"static/media/portrait_2020.a2dece7e.jpg";var F=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(b,{}),Object(s.jsxs)("div",{className:"content_wrapper",children:[Object(s.jsxs)("div",{className:"main_content",children:[Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"container contact_container",children:Object(s.jsxs)("div",{className:"contact_gird",children:[Object(s.jsxs)("div",{className:"contact_element",children:[Object(s.jsx)("h3",{children:"Name:"}),Object(s.jsx)("p",{children:"Matej Butkovi\u0107"})]}),Object(s.jsxs)("div",{className:"contact_element",children:[Object(s.jsx)("h3",{children:"Email:"}),Object(s.jsx)("p",{children:"farmoredifferent@gmail.com"})]}),Object(s.jsxs)("div",{className:"contact_element",children:[Object(s.jsx)("h3",{children:"Website:"}),Object(s.jsx)("p",{children:Object(s.jsx)("a",{href:"farmoredifferent.com",children:" farmoredifferent.com "})})]}),Object(s.jsxs)("div",{className:"contact_element",children:[Object(s.jsx)("h3",{children:"GitHub:"}),Object(s.jsxs)("p",{children:[Object(s.jsx)("a",{href:"https://github.com/Mats01",children:" https://github.com/Mats01 "})," "]})]})]})}),Object(s.jsxs)("div",{className:"container contact_container",children:[Object(s.jsx)("h1",{children:"About me"}),Object(s.jsx)("div",{className:"portrait",children:Object(s.jsx)("img",{className:"portrait_img",src:M,alt:"Matej Butkovic"})}),Object(s.jsx)("h4",{children:"Matej Butkovic"}),Object(s.jsx)("h2",{children:"Who am I?"}),Object(s.jsx)("p",{children:"I am a 21-year-old student from Pula, Croatia currently studying at FER (at University of Zagreb). I\u2019m an amateur full-stack web developer and I like to build things on the web to solve problems and gain new skills."}),Object(s.jsx)("h2",{children:"What is this website for?"}),Object(s.jsx)("p",{children:"I started this website as a place for my project to live on the web. It\u2019s a place for me to share my thoughts and ideas as well as showcase my work. Here I\u2019m also writing stories about the projects I worked on or simply about things that interest me. And finally, this is a place to connect with people who share my interests. So if you find what you see here interesting, feel free to let me know through the contact form above. "}),Object(s.jsx)("h2",{children:"What kind of stories to expect?"}),Object(s.jsx)("p",{children:"I don\u2019t have a rule for what I\u2019ll write about. I\u2019ll certainly document my progress on new projects I work on, but I may also sometimes come up with a story on a completely unrelated topic that interests me. If there is something you would like to see me write about I would be more than happy to hear suggestions or tips, again there\u2019s a contact form above. "})]})]}),Object(s.jsx)(w,{})]})]})};var W=function(){var e=y.map((function(e){return Object(s.jsx)(l.b,{path:e.path,children:Object(s.jsx)(_,{content:e})})}));return e=e.concat(g.map((function(e){return Object(s.jsx)(l.b,{path:e.path,children:Object(s.jsx)(_,{content:e})})}))),Object(s.jsx)(j.a,{children:Object(s.jsxs)(l.d,{children:[e,Object(s.jsx)(l.b,{exact:!0,path:"/weekly",children:Object(s.jsx)(_,{content:v,weekly:!0})}),Object(s.jsx)(l.b,{exact:!0,path:"/contact",children:Object(s.jsx)(F,{})}),Object(s.jsx)(l.b,{exact:!0,path:"/home",children:Object(s.jsx)(A,{})}),Object(s.jsx)(l.b,{exact:!0,path:"/books",children:Object(s.jsx)(A,{bookList:!0})}),Object(s.jsx)(l.b,{exact:!0,path:"/",children:Object(s.jsx)(l.a,{to:"/home"})}),Object(s.jsx)(l.b,{path:"*",children:Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"page_404",children:[Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("h1",{children:"404"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{children:Object(s.jsx)(j.b,{to:"/",children:"Back home"})}),Object(s.jsx)("div",{children:Object(s.jsx)(j.b,{to:"/contact",children:"Contact"})})]})})})]})})},P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,151)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))};r.a.render(Object(s.jsx)(j.a,{basename:"/farmoredifferent",children:Object(s.jsx)(W,{})}),document.getElementById("root")),P()},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){}},[[150,1,2]]]);
//# sourceMappingURL=main.a9d26e78.chunk.js.map