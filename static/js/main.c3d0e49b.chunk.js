(this["webpackJsonpreact-gh-pages"]=this["webpackJsonpreact-gh-pages"]||[]).push([[0],{139:function(e,t,c){},140:function(e,t,c){},148:function(e,t,c){},149:function(e,t,c){},150:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(48),i=c.n(n),r=(c(59),c(2)),l=c(6),j=(c(60),c(61),c(23)),o=c(49),d=c.n(o),h=(c(139),c(140),c(0));var b=function(){var e=a.a.useState(!0),t=Object(j.a)(e,2),c=t[0],s=t[1];function n(){window.innerWidth<=900?s(!1):s(!0)}return a.a.useEffect((function(){n()}),[]),window.addEventListener("resize",n),Object(h.jsxs)("div",{className:"main_aside",children:[Object(h.jsxs)("div",{id:"nav_hamburger",onClick:function(){s(!0)},children:[Object(h.jsx)("div",{class:"bar1"}),Object(h.jsx)("div",{class:"bar2"}),Object(h.jsx)("div",{class:"bar3"})]}),c&&Object(h.jsxs)("div",{className:"asside_wrapper",children:[Object(h.jsxs)("div",{className:"change",id:"nav_hamburger",onClick:function(){s(!1)},children:[Object(h.jsx)("div",{class:"bar1"}),Object(h.jsx)("div",{class:"bar2"}),Object(h.jsx)("div",{class:"bar3"})]}),Object(h.jsx)("h4",{children:"NAVIGATION"}),Object(h.jsx)("nav",{role:"navigation",className:"navbar",children:Object(h.jsxs)("ul",{className:"nav navbar-nav",children:[Object(h.jsx)("li",{children:Object(h.jsx)(l.c,{onClick:n,activeClassName:"selected_link",to:"/home",children:"Home"})}),Object(h.jsx)("li",{children:Object(h.jsx)(l.c,{onClick:n,activeClassName:"selected_link",to:"/contact",children:"Contact"})}),Object(h.jsx)("li",{children:Object(h.jsx)(l.c,{onClick:n,activeClassName:"selected_link",to:"/books",children:"Book notes"})}),Object(h.jsx)("li",{children:Object(h.jsx)(l.c,{onClick:n,activeClassName:"selected_link",to:"/weekly",children:"Weekly LIFO"})})]})})]})]})},m=(c(148),c(149),c.p+"static/media/My_2015_summer_project.f742634d.md"),p=c.p+"static/media/Developer_Journal_Making_the_Dayty_App.d853bace.md",x=c.p+"static/media/Dayty_Phase_0_Starting_a_Django_project.0a4aa48d.md",O=c.p+"static/media/Dayty_Phase_1.60c9b566.md",u=c.p+"static/media/Reversed_Citations_Needed_app.53d170ff.md",y=c.p+"static/media/weekly.f9492696.md",f=[{name:"Dayty: Phase 1",story:O,path:"/Dayty-Phase-1",published:"May 10, 2020",lastUpdated:"May 10, 2020",summary:"Defining models, choosing a CSS framework, populating the admin panel, and adding basic views"},{name:"Dayty: Phase 0 (Starting a Django project)",story:x,path:"/Dayty-Phase-0",published:"May 10, 2020",lastUpdated:"May 10, 2020",summary:"A Django project"},{name:"Developer Journal: Making the Dayty App",story:p,path:"/Developer-Journal-Making-the-Dayty-App",published:"May 8, 2020",lastUpdated:"May 8, 2020",summary:"This story is the spring board off of which I'm jumping into making a brand new productivity app. I'll be writing the story in phases as follow up stories to this one"},{name:"Reversed Citations Needed",story:u,path:"/Reversed-Citations-Needed",published:"Apr 24, 2020",lastUpdated:"Apr 24, 2020",summary:"This is the story of how I built my first progressive web app and how I learned what a PWA even is."},{name:"My 2015 summer project",story:m,path:"/my-2015-summer-project",published:"Apr 23, 2020",lastUpdated:"Apr 30, 2020",summary:"A story about my first project, and how it got me started on being a coder."}],v={name:"Weekly shorts LIFO",story:y,path:"/weekly",summary:"Here you can read what I am learnign each week... I'm using this like an accountability journal."},g=[];var w=function(){var e=f.slice(0,2).map((function(e){return Object(h.jsx)("div",{className:"single_article side_card",children:Object(h.jsxs)(l.c,{to:e.path,style:{textDecoration:"none",color:"inherit"},children:[Object(h.jsx)("h3",{children:e.name}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{className:"tech_label",children:"published: "}),e.published,"   "]}),Object(h.jsx)("p",{children:e.summary})]})})})),t=g.slice(0,1).map((function(e){return Object(h.jsx)("div",{className:"single_article side_card",children:Object(h.jsxs)(l.c,{to:e.path,style:{textDecoration:"none",color:"inherit"},children:[Object(h.jsx)("h3",{children:e.name}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{className:"tech_label",children:"published: "}),"  ",e.author,"   "]})]})})}));return Object(h.jsx)("div",{className:"side_wrapper",children:Object(h.jsxs)("div",{className:"side_content",children:[Object(h.jsx)("div",{className:"single_article side_card",children:Object(h.jsxs)(l.c,{to:"weekly",style:{textDecoration:"none",color:"inherit"},children:[Object(h.jsx)("h3",{children:"Weekly stories \u270f\ufe0f"}),Object(h.jsx)("p",{children:"Here you can read what I am learnign each week... I'm using this like an accountability journal."})]})}),Object(h.jsx)("h2",{children:"Latest stories \ud83d\udcf0"}),e,Object(h.jsx)("h2",{children:"What I am reading \ud83d\udcd6"}),t]})})};var _=function(e){var t=a.a.useState(),c=Object(j.a)(t,2),s=c[0],n=c[1];function i(e,t){return"string"===typeof t?e+t:a.a.Children.toArray(t.props.children).reduce(i,e)}return a.a.useEffect((function(){fetch(e.content.story).then((function(e){return e.text()})).then((function(e){n(e),window.scrollTo(0,0)}))}),[e.content]),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(b,{}),Object(h.jsxs)("div",{class:"content_wrapper",children:[Object(h.jsxs)("div",{className:"blog_content",children:[Object(h.jsxs)("h1",{children:[" ",e.content.name," "]})," ",!0===e.weekly?Object(h.jsx)(h.Fragment,{children:" "}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("span",{children:" published: "}),e.content.published,Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:" last updated: "}),e.content.lastUpdated," "]}),Object(h.jsx)(d.a,{source:s,renderers:{heading:function(e){var t=a.a.Children.toArray(e.children).reduce(i,"").toLowerCase().replace(/\W/g,"-");return a.a.createElement("h"+e.level,{id:t},e.children)}}})," "]})," ",Object(h.jsx)(w,{})]})]})},k=c(51),N=c(52),I=c(54),C=c(53),D=function(e){Object(I.a)(c,e);var t=Object(C.a)(c);function c(){return Object(k.a)(this,c),t.apply(this,arguments)}return Object(N.a)(c,[{key:"render",value:function(){var e=this,t=this.props.articles.map((function(t){return Object(h.jsx)(l.b,{to:t.path,style:{textDecoration:"none",color:"inherit"},children:Object(h.jsxs)("div",{className:"single_article",children:[Object(h.jsx)("h2",{children:t.year}),Object(h.jsx)("h3",{children:t.name}),!0===e.props.book?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{className:"tech_label",children:"finished: "}),t.published," "]}),Object(h.jsx)("p",{className:"article_summray",children:t.author})]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{className:"tech_label",children:"published: "}),t.published,"   ",Object(h.jsx)("span",{className:"tech_label",children:"last updated: "}),t.lastUpdated]}),Object(h.jsx)("p",{className:"article_summray",children:t.summary})]})]})})}));return Object(h.jsx)(h.Fragment,{children:t})}}]),c}(a.a.Component);var A=function(e){return a.a.useEffect((function(){window.scrollTo(0,0)})),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(b,{}),Object(h.jsxs)("div",{class:"content_wrapper",children:[Object(h.jsxs)("div",{className:"main_content",children:[Object(h.jsx)("div",{className:"massive_title",children:"farmoredifferent.com"}),!0===e.bookList?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{className:"left",children:"Books:"}),Object(h.jsx)(D,{articles:g})]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{className:"left",children:"Stories:"}),Object(h.jsx)(D,{articles:f})]})]}),Object(h.jsx)(w,{})]})]})};var M=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(b,{}),Object(h.jsxs)("div",{className:"content_wrapper",children:[Object(h.jsxs)("div",{className:"main_content",children:[Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{className:"container contact_container",children:Object(h.jsxs)("div",{className:"contact_gird",children:[Object(h.jsxs)("div",{className:"contact_element",children:[Object(h.jsx)("h3",{children:"Name:"}),Object(h.jsx)("p",{children:"Matej Butkovi\u0107"})]}),Object(h.jsxs)("div",{className:"contact_element",children:[Object(h.jsx)("h3",{children:"Email:"}),Object(h.jsx)("p",{children:"farmoredifferent@gmail.com"})]}),Object(h.jsxs)("div",{className:"contact_element",children:[Object(h.jsx)("h3",{children:"Website:"}),Object(h.jsx)("p",{children:Object(h.jsx)("a",{href:"farmoredifferent.com",children:" farmoredifferent.com "})})]}),Object(h.jsxs)("div",{className:"contact_element",children:[Object(h.jsx)("h3",{children:"GitHub:"}),Object(h.jsxs)("p",{children:[Object(h.jsx)("a",{href:"https://github.com/Mats01",children:" https://github.com/Mats01 "})," "]})]})]})}),Object(h.jsxs)("div",{className:"container contact_container",children:[Object(h.jsx)("h1",{children:"About me"}),Object(h.jsx)("div",{className:"portrait",children:Object(h.jsx)("img",{className:"portrait_img",alt:"Matej Butkovic"})}),Object(h.jsx)("h4",{children:"Matej Butkovic"}),Object(h.jsx)("h2",{children:"Who am I?"}),Object(h.jsx)("p",{children:"I am a 21-year-old student from Pula, Croatia currently studying at FER (at University of Zagreb). I\u2019m an amateur full-stack web developer and I like to build things on the web to solve problems and gain new skills."}),Object(h.jsx)("h2",{children:"What is this website for?"}),Object(h.jsx)("p",{children:"I started this website as a place for my project to live on the web. It\u2019s a place for me to share my thoughts and ideas as well as showcase my work. Here I\u2019m also writing stories about the projects I worked on or simply about things that interest me. And finally, this is a place to connect with people who share my interests. So if you find what you see here interesting, feel free to let me know through the contact form above. "}),Object(h.jsx)("h2",{children:"What kind of stories to expect?"}),Object(h.jsx)("p",{children:"I don\u2019t have a rule for what I\u2019ll write about. I\u2019ll certainly document my progress on new projects I work on, but I may also sometimes come up with a story on a completely unrelated topic that interests me. If there is something you would like to see me write about I would be more than happy to hear suggestions or tips, again there\u2019s a contact form above. "})]})]}),Object(h.jsx)(w,{})]})]})};var F=function(){var e=f.map((function(e){return Object(h.jsx)(r.b,{path:e.path,children:Object(h.jsx)(_,{content:e})})}));return e=e.concat(g.map((function(e){return Object(h.jsx)(r.b,{path:e.path,children:Object(h.jsx)(_,{content:e})})}))),Object(h.jsx)(l.a,{children:Object(h.jsxs)(r.d,{children:[e,Object(h.jsx)(r.b,{exact:!0,path:"/weekly",children:Object(h.jsx)(_,{content:v,weekly:!0})}),Object(h.jsx)(r.b,{exact:!0,path:"/contact",children:Object(h.jsx)(M,{})}),Object(h.jsx)(r.b,{exact:!0,path:"/home",children:Object(h.jsx)(A,{})}),Object(h.jsx)(r.b,{exact:!0,path:"/books",children:Object(h.jsx)(A,{bookList:!0})}),Object(h.jsx)(r.b,{exact:!0,path:"/",children:Object(h.jsx)(r.a,{to:"/home"})}),Object(h.jsx)(r.b,{path:"*",children:Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"page_404",children:[Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("h1",{children:"404"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{children:Object(h.jsx)(l.b,{to:"/",children:"Back home"})}),Object(h.jsx)("div",{children:Object(h.jsx)(l.b,{to:"/contact",children:"Contact"})})]})})})]})})},W=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,151)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))};i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(F,{})}),document.getElementById("root")),W()},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){}},[[150,1,2]]]);
//# sourceMappingURL=main.c3d0e49b.chunk.js.map