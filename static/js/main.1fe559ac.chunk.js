(this["webpackJsonpreact-gh-pages"]=this["webpackJsonpreact-gh-pages"]||[]).push([[0],{139:function(e,t,c){},140:function(e,t,c){},148:function(e,t,c){},149:function(e,t,c){},150:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(48),i=c.n(a),r=(c(59),c(2)),l=c(6),j=(c(60),c(61),c(23)),o=c(49),h=c.n(o),d=(c(139),c(140),c(0));var b=function(){var e=n.a.useState(!0),t=Object(j.a)(e,2),c=t[0],s=t[1];function a(){window.innerWidth<=900?s(!1):s(!0)}return n.a.useEffect((function(){a()}),[]),window.addEventListener("resize",a),Object(d.jsxs)("div",{className:"main_aside",children:[Object(d.jsxs)("div",{id:"nav_hamburger",onClick:function(){s(!0)},children:[Object(d.jsx)("div",{class:"bar1"}),Object(d.jsx)("div",{class:"bar2"}),Object(d.jsx)("div",{class:"bar3"})]}),c&&Object(d.jsxs)("div",{className:"asside_wrapper",children:[Object(d.jsxs)("div",{className:"change",id:"nav_hamburger",onClick:function(){s(!1)},children:[Object(d.jsx)("div",{class:"bar1"}),Object(d.jsx)("div",{class:"bar2"}),Object(d.jsx)("div",{class:"bar3"})]}),Object(d.jsx)("h4",{children:"NAVIGATION"}),Object(d.jsx)("nav",{role:"navigation",className:"navbar",children:Object(d.jsxs)("ul",{className:"nav navbar-nav",children:[Object(d.jsx)("li",{children:Object(d.jsx)(l.c,{onClick:a,activeClassName:"selected_link",to:"/home",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.c,{onClick:a,activeClassName:"selected_link",to:"/contact",children:"Contact"})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.c,{onClick:a,activeClassName:"selected_link",to:"/books",children:"Book notes"})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.c,{onClick:a,activeClassName:"selected_link",to:"/weekly",children:"Weekly LIFO"})})]})})]})]})},x=(c(148),c(149),c.p+"static/media/weekly.f9492696.md"),O=[],m={name:"Weekly shorts LIFO",story:x,path:"/weekly",summary:"Here you can read what I am learnign each week... I'm using this like an accountability journal."},u=[];var p=function(){var e=O.slice(0,2).map((function(e){return Object(d.jsx)("div",{className:"single_article side_card",children:Object(d.jsxs)(l.c,{to:e.path,style:{textDecoration:"none",color:"inherit"},children:[Object(d.jsx)("h3",{children:e.name}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{className:"tech_label",children:"published: "}),e.published,"   "]}),Object(d.jsx)("p",{children:e.summary})]})})})),t=u.slice(0,1).map((function(e){return Object(d.jsx)("div",{className:"single_article side_card",children:Object(d.jsxs)(l.c,{to:e.path,style:{textDecoration:"none",color:"inherit"},children:[Object(d.jsx)("h3",{children:e.name}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{className:"tech_label",children:"published: "}),"  ",e.author,"   "]})]})})}));return Object(d.jsx)("div",{className:"side_wrapper",children:Object(d.jsxs)("div",{className:"side_content",children:[Object(d.jsx)("div",{className:"single_article side_card",children:Object(d.jsxs)(l.c,{to:"weekly",style:{textDecoration:"none",color:"inherit"},children:[Object(d.jsx)("h3",{children:"Weekly stories \u270f\ufe0f"}),Object(d.jsx)("p",{children:"Here you can read what I am learnign each week... I'm using this like an accountability journal."})]})}),Object(d.jsx)("h2",{children:"Latest stories \ud83d\udcf0"}),e,Object(d.jsx)("h2",{children:"What I am reading \ud83d\udcd6"}),t]})})};var v=function(e){var t=n.a.useState(),c=Object(j.a)(t,2),s=c[0],a=c[1];function i(e,t){return"string"===typeof t?e+t:n.a.Children.toArray(t.props.children).reduce(i,e)}return n.a.useEffect((function(){fetch(e.content.story).then((function(e){return e.text()})).then((function(e){a(e),window.scrollTo(0,0)}))}),[e.content]),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(b,{}),Object(d.jsxs)("div",{class:"content_wrapper",children:[Object(d.jsxs)("div",{className:"blog_content",children:[Object(d.jsxs)("h1",{children:[" ",e.content.name," "]})," ",!0===e.weekly?Object(d.jsx)(d.Fragment,{children:" "}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{children:" published: "}),e.content.published,Object(d.jsx)("br",{}),Object(d.jsx)("span",{children:" last updated: "}),e.content.lastUpdated," "]}),Object(d.jsx)(h.a,{source:s,renderers:{heading:function(e){var t=n.a.Children.toArray(e.children).reduce(i,"").toLowerCase().replace(/\W/g,"-");return n.a.createElement("h"+e.level,{id:t},e.children)}}})," "]})," ",Object(d.jsx)(p,{})]})]})},f=c(51),g=c(52),y=c(54),w=c(53),k=function(e){Object(y.a)(c,e);var t=Object(w.a)(c);function c(){return Object(f.a)(this,c),t.apply(this,arguments)}return Object(g.a)(c,[{key:"render",value:function(){var e=this,t=this.props.articles.map((function(t){return Object(d.jsx)(l.b,{to:t.path,style:{textDecoration:"none",color:"inherit"},children:Object(d.jsxs)("div",{className:"single_article",children:[Object(d.jsx)("h2",{children:t.year}),Object(d.jsx)("h3",{children:t.name}),!0===e.props.book?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{className:"tech_label",children:"finished: "}),t.published," "]}),Object(d.jsx)("p",{className:"article_summray",children:t.author})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{className:"tech_label",children:"published: "}),t.published,"   ",Object(d.jsx)("span",{className:"tech_label",children:"last updated: "}),t.lastUpdated]}),Object(d.jsx)("p",{className:"article_summray",children:t.summary})]})]})})}));return Object(d.jsx)(d.Fragment,{children:t})}}]),c}(n.a.Component);var N=function(e){return n.a.useEffect((function(){window.scrollTo(0,0)})),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(b,{}),Object(d.jsxs)("div",{class:"content_wrapper",children:[Object(d.jsxs)("div",{className:"main_content",children:[Object(d.jsx)("div",{className:"massive_title",children:"farmoredifferent.com"}),!0===e.bookList?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{className:"left",children:"Books:"}),Object(d.jsx)(k,{articles:u})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{className:"left",children:"Stories:"}),Object(d.jsx)(k,{articles:O})]})]}),Object(d.jsx)(p,{})]})]})};var _=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(b,{}),Object(d.jsxs)("div",{className:"content_wrapper",children:[Object(d.jsxs)("div",{className:"main_content",children:[Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{className:"container contact_container",children:Object(d.jsxs)("div",{className:"contact_gird",children:[Object(d.jsxs)("div",{className:"contact_element",children:[Object(d.jsx)("h3",{children:"Name:"}),Object(d.jsx)("p",{children:"Matej Butkovi\u0107"})]}),Object(d.jsxs)("div",{className:"contact_element",children:[Object(d.jsx)("h3",{children:"Email:"}),Object(d.jsx)("p",{children:"farmoredifferent@gmail.com"})]}),Object(d.jsxs)("div",{className:"contact_element",children:[Object(d.jsx)("h3",{children:"Website:"}),Object(d.jsx)("p",{children:Object(d.jsx)("a",{href:"farmoredifferent.com",children:" farmoredifferent.com "})})]}),Object(d.jsxs)("div",{className:"contact_element",children:[Object(d.jsx)("h3",{children:"GitHub:"}),Object(d.jsxs)("p",{children:[Object(d.jsx)("a",{href:"https://github.com/Mats01",children:" https://github.com/Mats01 "})," "]})]})]})}),Object(d.jsxs)("div",{className:"container contact_container",children:[Object(d.jsx)("h1",{children:"About me"}),Object(d.jsx)("div",{className:"portrait",children:Object(d.jsx)("img",{className:"portrait_img",alt:"Matej Butkovic"})}),Object(d.jsx)("h4",{children:"Matej Butkovic"}),Object(d.jsx)("h2",{children:"Who am I?"}),Object(d.jsx)("p",{children:"I am a 21-year-old student from Pula, Croatia currently studying at FER (at University of Zagreb). I\u2019m an amateur full-stack web developer and I like to build things on the web to solve problems and gain new skills."}),Object(d.jsx)("h2",{children:"What is this website for?"}),Object(d.jsx)("p",{children:"I started this website as a place for my project to live on the web. It\u2019s a place for me to share my thoughts and ideas as well as showcase my work. Here I\u2019m also writing stories about the projects I worked on or simply about things that interest me. And finally, this is a place to connect with people who share my interests. So if you find what you see here interesting, feel free to let me know through the contact form above. "}),Object(d.jsx)("h2",{children:"What kind of stories to expect?"}),Object(d.jsx)("p",{children:"I don\u2019t have a rule for what I\u2019ll write about. I\u2019ll certainly document my progress on new projects I work on, but I may also sometimes come up with a story on a completely unrelated topic that interests me. If there is something you would like to see me write about I would be more than happy to hear suggestions or tips, again there\u2019s a contact form above. "})]})]}),Object(d.jsx)(p,{})]})]})};var I=function(){var e=O.map((function(e){return Object(d.jsx)(r.b,{path:e.path,children:Object(d.jsx)(v,{content:e})})}));return e=e.concat(u.map((function(e){return Object(d.jsx)(r.b,{path:e.path,children:Object(d.jsx)(v,{content:e})})}))),Object(d.jsx)(l.a,{children:Object(d.jsxs)(r.d,{children:[e,Object(d.jsx)(r.b,{exact:!0,path:"/weekly",children:Object(d.jsx)(v,{content:m,weekly:!0})}),Object(d.jsx)(r.b,{exact:!0,path:"/contact",children:Object(d.jsx)(_,{})}),Object(d.jsx)(r.b,{exact:!0,path:"/home",children:Object(d.jsx)(N,{})}),Object(d.jsx)(r.b,{exact:!0,path:"/books",children:Object(d.jsx)(N,{bookList:!0})}),Object(d.jsx)(r.b,{exact:!0,path:"/",children:Object(d.jsx)(r.a,{to:"/home"})}),Object(d.jsx)(r.b,{path:"*",children:Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"page_404",children:[Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("h1",{children:"404"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{children:Object(d.jsx)(l.b,{to:"/",children:"Back home"})}),Object(d.jsx)("div",{children:Object(d.jsx)(l.b,{to:"/contact",children:"Contact"})})]})})})]})})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,151)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(I,{})}),document.getElementById("root")),C()},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){}},[[150,1,2]]]);
//# sourceMappingURL=main.1fe559ac.chunk.js.map