(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{50:function(n,e,t){"use strict";t.r(e);var i,r,a=t(1),o=t(20),c=t.n(o),s=t(12),l=t(8),d=t(4),m=t(5),b=t(0),j=m.b.div(i||(i=Object(d.a)(["\n  .heading {\n    font-size: 2.4rem;\n    margin-bottom: 2rem;\n  }\n  li {\n    margin-bottom: 1rem;\n  }\n  a {\n    font-size: 1.8rem;\n  }\n"])));function h(n){var e=n.heading,t=void 0===e?"Col Heaing":e,i=n.links,r=void 0===i?[{type:"Links",title:"Home",link:"/home"},{type:"Links",title:"About",link:"/about"}]:i;return Object(b.jsxs)(j,{children:[Object(b.jsx)("h2",{className:"heading",children:t}),Object(b.jsx)("ul",{children:r.map((function(n,e){return Object(b.jsx)("li",{children:"Link"===n.type?Object(b.jsx)(s.b,{to:n.link,children:n.title}):Object(b.jsx)("a",{href:n.link,target:"_blank",rel:"noreferrer",children:n.title})},e)}))})]})}var p,x=m.b.div(r||(r=Object(d.a)(["\n  max-width: 500px;\n  margin: 0 auto;\n  font-size: 1.8rem;\n  line-height: 1.3em;\n  @media only screen and (max-width: 768px) {\n    font-size: 1.4rem;\n  }\n"])));function g(n){var e=n.children;return Object(b.jsx)(x,{className:"para",children:Object(b.jsx)("p",{children:e})})}var u=m.b.div(p||(p=Object(d.a)(["\n  background-color: var(--deep-dark);\n  padding-top: 10rem;\n  .container {\n    display: flex;\n    gap: 3rem;\n  }\n  .footer__col1 {\n    flex: 2;\n  }\n  .footer__col2,\n  .footer__col3,\n  .footer__col4 {\n    flex: 1;\n  }\n  .footer__col1__title {\n    font-size: 3.5rem;\n    margin-bottom: 1rem;\n  }\n  .copyright {\n    background-color: var(--dark-bg);\n    text-align: left;\n    padding: 1rem 0;\n    margin-top: 5rem;\n    .para {\n      margin-left: 0;\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    .container {\n      flex-direction: column;\n      gap: 0rem;\n      & > div {\n        margin-top: 5rem;\n      }\n    }\n    .footer__col1 .para {\n      max-width: 100%;\n    }\n    .copyright {\n      .container {\n        div {\n          margin-top: 0;\n        }\n      }\n    }\n  }\n"])));function f(){return Object(b.jsxs)(u,{children:[Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"footer__col1",children:[Object(b.jsx)("h1",{className:"footer__col1__title",children:"Charles Davis"}),Object(b.jsx)(g,{children:"Software developer that's always looking to learn."})]}),Object(b.jsx)("div",{className:"footer__col2",children:Object(b.jsx)(h,{heading:"Important Links",links:[{title:"Home",link:"/",type:"Link"},{type:"Link",title:"About",link:"/about"},{type:"Link",title:"Projects",link:"/projects"},{type:"Link",title:"Contact",link:"/contact"}]})}),Object(b.jsx)("div",{className:"footer__col3",children:Object(b.jsx)(h,{heading:"Contact Info",links:[{title:"216-798-8752",link:"tel:+216-798-8752"},{title:"csdj92@gmail.com",link:"mailto:csdj92@gmail.com"}]})}),Object(b.jsx)("div",{className:"footer__col4",children:Object(b.jsx)(h,{heading:"Social Links",links:[{title:"Facebook",link:"http://facebook.com"},{title:"Twitter",link:"http://twitter.com"},{title:"Instagram",link:"http://instagram.com"}]})})]}),Object(b.jsx)("div",{className:"copyright",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)(g,{children:[Object(b.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/charles-davis-20a748123/"})," "]})})})]})}var _,O,v=t(17),w=t(10),y=m.b.nav(_||(_=Object(d.a)(["\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 1rem 0;\n  background: var(--dark-bg);\n  ul {\n    max-width: 1200px;\n    margin: 0 auto;\n    width: 90%;\n    text-align: center;\n    li {\n      display: inline-block;\n      border-radius: 8px;\n      transition: 0.3s ease background-color;\n      &:hover {\n        background-color: var(--deep-dark);\n      }\n    }\n    a {\n      display: inline-block;\n      font-family: 'RobotoMono Regular';\n      padding: 1rem 2rem;\n      font-size: 2rem;\n      color: var(--gray-1);\n      outline: none;\n    }\n    .active {\n      color: var(--white);\n    }\n  }\n  .mobile-menu-icon {\n    position: absolute;\n    right: 1rem;\n    top: 1rem;\n    width: 4rem;\n    cursor: pointer;\n    display: none;\n    outline: none;\n    * {\n      pointer-events: none;\n    }\n  }\n  .navItems .closeNavIcon {\n    display: none;\n  }\n  @media only screen and (max-width: 768px) {\n    padding: 0;\n    .hide-item {\n      transform: translateY(calc(-100% - var(--top)));\n    }\n    .mobile-menu-icon {\n      display: block;\n    }\n    .navItems {\n      --top: 1rem;\n      transition: 0.3s ease transform;\n      background-color: var(--deep-dark);\n      padding: 2rem;\n      width: 90%;\n      max-width: 300px;\n      border-radius: 12px;\n      position: absolute;\n      right: 1rem;\n      top: var(--top);\n      .closeNavIcon {\n        display: block;\n        width: 3rem;\n        margin: 0 0 0 auto;\n        cursor: pointer;\n        * {\n          pointer-events: none;\n        }\n      }\n      li {\n        display: block;\n        margin-bottom: 1rem;\n      }\n    }\n  }\n"])));function k(){var n=Object(a.useState)(!1),e=Object(v.a)(n,2),t=e[0],i=e[1];return Object(b.jsxs)(y,{children:[Object(b.jsx)("div",{className:"mobile-menu-icon",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:Object(b.jsx)(w.h,{})}),Object(b.jsxs)("ul",{className:t?"navItems":"navItems hide-item",children:[Object(b.jsx)("div",{className:"closeNavIcon",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:Object(b.jsx)(w.c,{})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.c,{to:"/",exact:!0,onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.c,{to:"/about",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"About"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.c,{to:"/projects",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"Projects"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.c,{to:"/contact",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"Contact"})})]})]})}function N(){var n=Object(l.f)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[n]),null}var I=m.b.div(O||(O=Object(d.a)(["\n  margin-top: 2rem;\n  .button {\n    font-size: 2.2rem;\n    background-color: ",";\n    padding: 0.7em 2em;\n    border: 2px solid var(--gray-1);\n    border-radius: 8px;\n    display: inline-block;\n    color: ",";\n  }\n  @media only screen and (max-width: 768px) {\n    .button {\n      font-size: 1.8rem;\n    }\n  }\n"])),(function(n){return n.outline?"transperant":"var(--gray-1)"}),(function(n){return n.outline?"var(--gary-1)":"black"}));function S(n){var e=n.btnText,t=void 0===e?"test":e,i=n.btnLink,r=void 0===i?"test":i,a=n.outline,o=void 0!==a&&a;return Object(b.jsx)(I,{outline:o,className:"button-wrapper",children:Object(b.jsx)(s.b,{className:"button",to:r,children:t})})}var z,C,B=t.p+"static/media/about-page-img.105884f4.jpg",M=m.b.div(z||(z=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  position: relative;\n  /* gap: 5rem; */\n  margin-top: 3rem;\n  .title {\n    font-size: 2.4rem;\n  }\n  .items {\n    display: flex;\n    gap: 1.5rem;\n    position: absolute;\n    left: 18rem;\n  }\n  .item {\n    background-color: var(--deep-dark);\n    padding: 1rem;\n    border-radius: 8px;\n  }\n  @media only screen and (max-width: 768px) {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n    .items {\n      position: initial;\n      gap: 1rem;\n    }\n    .title {\n      font-size: 2rem;\n    }\n  }\n"])));function R(n){var e=n.title,t=void 0===e?"Title":e,i=n.items,r=void 0===i?["HTML","CSS"]:i;return Object(b.jsxs)(M,{children:[Object(b.jsx)("h1",{className:"title",children:t}),Object(b.jsx)("div",{className:"items",children:r.map((function(n,e){return Object(b.jsx)("div",{className:"item",children:Object(b.jsx)(g,{children:n})},e)}))})]})}var D=m.b.div(C||(C=Object(d.a)(["\n  padding: 5rem 0;\n  .contactBanner__wrapper {\n    background-color: var(--deep-dark);\n    border-radius: 12px;\n    padding: 5rem 0rem;\n    text-align: center;\n  }\n  .contactBanner__heading {\n    font-size: 4rem;\n    margin-bottom: 2rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .contactBanner__heading {\n      font-size: 2.8rem;\n    }\n  }\n"])));function L(){return Object(b.jsx)(D,{children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"contactBanner__wrapper",children:[Object(b.jsx)(g,{children:"Find me here"}),Object(b.jsx)("h3",{className:"contactBanner__heading",children:"Lets Connect"}),Object(b.jsx)(S,{btnText:"Contact Now",btnLink:"/contact"})]})})})}t.p;var F,P,T=m.b.div(F||(F=Object(d.a)(["\n  padding: 20rem 0 10rem 0;\n  .top-section {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 2rem;\n  }\n  .left {\n    flex: 3;\n  }\n  .right {\n    flex: 2;\n  }\n  .about__subheading {\n    font-size: 2.2rem;\n    margin-bottom: 2rem;\n    span {\n      background-color: var(--deep-dark);\n      padding: 0.5rem;\n      border-radius: 8px;\n    }\n  }\n  .resume{\n      font-size: 1.5rem;\n      border-bottom: 1px solid\n    }\n  .about__heading {\n    font-size: 3.6rem;\n    margin-bottom: 3rem;\n  }\n  .about__info {\n    margin-bottom: 4rem;\n    .para {\n      max-width: 100%;\n    }\n  }\n  .right {\n    img {\n      border: 2px solid var(--gray-1);\n    }\n  }\n  .about__info__items {\n    margin-top: 15rem;\n  }\n  .about__info__item {\n    margin-bottom: 10rem;\n  }\n  .about__info__heading {\n    font-size: 3.6rem;\n    text-transform: uppercase;\n  }\n  @media only screen and (max-width: 768px) {\n    padding: 10rem 0;\n    .top-section {\n      flex-direction: column;\n      gap: 5rem;\n    }\n    .about__subheading {\n      font-size: 1.8rem;\n    }\n    .about__heading {\n      font-size: 2.8rem;\n    }\n    .about__info__heading {\n      font-size: 3rem;\n    }\n    \n  }\n"])));function H(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(T,{children:[Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"top-section",children:[Object(b.jsxs)("div",{className:"left",children:[Object(b.jsxs)("p",{className:"about__subheading",children:["Hello, I am ",Object(b.jsx)("span",{children:"Charles Davis"})]}),Object(b.jsx)("h2",{className:"about__heading",children:"A Software developer"}),Object(b.jsx)("div",{className:"about__info",children:Object(b.jsxs)(g,{children:["New Software Engineer graduate with a passion to create and improve. I enjoy diving into the world of code to develop and create. I enjoy diving into the world of code to develop, debug and create. I am always looking for new ways to improve. Hard work ethic and a thriving curiosity to learn, has been my backbone through my professional career.",Object(b.jsx)("br",{})," ",Object(b.jsx)("br",{}),"I started coding in high school. I first started out with rooting android phones and moved on to making small android applications. Since then I have always found joy when coding, wether it be making magic mirrors with Raspberry Pi's or making mods for video games.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"My vision is to make the world a better place. Technology has become more important than ever. I want to create techonolgy that will be able to help others for years to come ."]})}),Object(b.jsx)("a",{className:"resume",target:"_blank",href:"https://docs.google.com/document/d/1erJk-KEX_mhiCP6QWJq0GazljKqhNiuP5K_H5LqaPNM/edit?usp=sharing",children:"Download Resume"})]}),Object(b.jsx)("div",{className:"right",children:Object(b.jsx)("img",{src:B,alt:"me"})})]}),Object(b.jsxs)("div",{className:"about__info__items",children:[Object(b.jsxs)("div",{className:"about__info__item",children:[Object(b.jsx)("h1",{className:"about__info__heading",children:"Education"}),Object(b.jsx)(R,{title:"Bootcamp",items:["Flatiron, New York"]}),Object(b.jsx)(R,{title:"College",items:["Cleveland State University"]})]}),Object(b.jsxs)("div",{className:"about__info__item",children:[Object(b.jsx)("h1",{className:"about__info__heading",children:"My Skills"}),Object(b.jsx)(R,{title:"FrontEnd",items:["HTML","CSS","JavaScript","REACT"]}),Object(b.jsx)(R,{title:"BackEnd",items:["Node","Django","Ruby On Rails","Flask"]})]})]})]}),Object(b.jsx)(L,{})]})})}var K,E=m.b.form(P||(P=Object(d.a)(["\n  width: 100%;\n  .form-group {\n    width: 100%;\n    margin-bottom: 2rem;\n  }\n  label {\n    font-size: 1.8rem;\n  }\n  input,\n  textarea {\n    width: 100%;\n    font-size: 2rem;\n    padding: 1.2rem;\n    color: var(--gray-1);\n    background-color: var(--deep-dark);\n    outline: none;\n    border: none;\n    border-radius: 8px;\n    margin-top: 1rem;\n  }\n  textarea {\n    min-height: 250px;\n    resize: vertical;\n  }\n  button[type='submit'] {\n    background-color: var(--gray-1);\n    color: var(--black);\n    font-size: 2rem;\n    display: inline-block;\n    outline: none;\n    border: none;\n    padding: 1rem 4rem;\n    border-radius: 8px;\n    cursor: pointer;\n  }\n"])));function W(){var n=Object(a.useState)(""),e=Object(v.a)(n,2),t=e[0],i=e[1],r=Object(a.useState)(""),o=Object(v.a)(r,2),c=o[0],s=o[1],l=Object(a.useState)(""),d=Object(v.a)(l,2),m=d[0],j=d[1];return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(E,{children:[Object(b.jsx)("div",{className:"form-group",children:Object(b.jsxs)("label",{htmlFor:"name",children:["Your Name",Object(b.jsx)("input",{type:"text",id:"name",name:"name",value:t,onChange:function(n){return i(n.target.value)}})]})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsxs)("label",{htmlFor:"email",children:["Your Name",Object(b.jsx)("input",{type:"email",id:"email",name:"email",value:c,onChange:function(n){return s(n.target.value)}})]})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsxs)("label",{htmlFor:"message",children:["Your message",Object(b.jsx)("textarea",{type:"text",id:"message",name:"message",value:m,onChange:function(n){return j(n.target.value)}})]})}),Object(b.jsx)("button",{type:"submit",children:"Send"})]})})}var Y,A=m.b.div(K||(K=Object(d.a)(["\n  padding: 2rem;\n  background-color: var(--deep-dark);\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  border-radius: 8px;\n  margin-bottom: 2rem;\n  .icon {\n    color: var(--white);\n    background-color: var(--gray-2);\n    padding: 1.3rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n  }\n  svg {\n    width: 3.5rem;\n  }\n"])));function G(n){var e=n.icon,t=void 0===e?Object(b.jsx)(w.j,{}):e,i=n.text,r=void 0===i?"I need text ":i;return Object(b.jsxs)(A,{children:[Object(b.jsx)("div",{className:"icon",children:t}),Object(b.jsx)("div",{className:"info",children:Object(b.jsx)(g,{children:r})})]})}var J,V=m.b.div(Y||(Y=Object(d.a)(["\n  text-align: center;\n  p {\n    font-family: 'RobotoMono Regular';\n    font-size: 2rem;\n  }\n  h2 {\n    font-family: 'Montserrat Bold';\n    font-size: 6rem;\n    margin-top: 0.5rem;\n    text-transform: uppercase;\n  }\n  @media only screen and (max-width: 768px) {\n    text-align: center;\n    p {\n      font-size: 1.2rem;\n    }\n    h2 {\n      font-size: 3.6rem;\n    }\n  }\n"])));function q(n){var e=n.subheading,t=void 0===e?"Subheading":e,i=n.heading,r=void 0===i?"Heading":i;return Object(b.jsxs)(V,{className:"section-title",children:[Object(b.jsx)("p",{children:t}),Object(b.jsx)("h2",{children:r})]})}var U=m.b.div(J||(J=Object(d.a)(["\n  padding: 10rem 0;\n  .contactSection__wrapper {\n    display: flex;\n    gap: 5rem;\n    margin-top: 7rem;\n    justify-content: space-between;\n    position: relative;\n  }\n  .contactSection__wrapper::after {\n    position: absolute;\n    content: '';\n    width: 2px;\n    height: 50%;\n    background-color: var(--gray-1);\n    left: 50%;\n    top: 30%;\n    transform: translate(-50%, -50%);\n  }\n  .left {\n    width: 100%;\n    max-width: 500px;\n  }\n  .right {\n    max-width: 500px;\n    width: 100%;\n    border-radius: 12px;\n    /* padding-left: 3rem; */\n  }\n  @media only screen and (max-width: 768px) {\n    .contactSection__wrapper {\n      flex-direction: column;\n    }\n    .contactSection__wrapper::after {\n      display: none;\n    }\n    .left,\n    .right {\n      max-width: 100%;\n    }\n    .right {\n      padding: 4rem 2rem 2rem 2rem;\n    }\n  }\n"])));function Q(){return Object(b.jsx)(U,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(q,{heading:"contact",subheading:"Get in touch"}),Object(b.jsxs)("div",{className:"contactSection__wrapper",children:[Object(b.jsxs)("div",{className:"left",children:[Object(b.jsx)(G,{icon:Object(b.jsx)(w.g,{}),text:"216-798-8752"}),Object(b.jsx)(G,{icon:Object(b.jsx)(w.f,{}),text:"csdj92@gmail.com"}),Object(b.jsx)(G,{text:"Streetsboro, Ohio"})]}),Object(b.jsx)("div",{className:"right",children:Object(b.jsx)(W,{})})]})]})})}function X(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(Q,{})})}var Z,$,nn=t.p+"static/media/about-sec-img.441eb59c.jpg",en=m.b.div(Z||(Z=Object(d.a)(["\n  padding: 10rem 0;\n  .container {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    text-align: left;\n  }\n  .aboutSection__left,\n  .aboutSection__right {\n    flex: 1;\n  }\n  .section-title {\n    text-align: left;\n  }\n  .para {\n    margin-top: 2rem;\n    margin-left: 0;\n  }\n  .aboutSection__buttons {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 2rem;\n    margin-top: 2rem;\n  }\n  .aboutSection__right {\n    position: relative;\n    .empty {\n      width: 100%;\n      height: 100%;\n    }\n    .about1,\n    .about2 {\n      border: 2px solid var(--gray-1);\n    }\n    .about1 {\n      position: absolute;\n      max-width: 450px;\n      min-width: 350px;\n      width: 65%;\n      height: auto;\n      right: 0;\n      top: 0;\n    }\n    .about2 {\n      position: absolute;\n      max-width: 200px;\n      height: auto;\n      right: 50%;\n      top: 50%;\n    }\n  }\n  @media only screen and (max-width: 950px) {\n    .aboutSection__left {\n      flex: 4;\n    }\n    .aboutSection__right {\n      flex: 3;\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    .container {\n      flex-direction: column;\n      text-align: center;\n    }\n    .aboutSection__left,\n    .aboutSection__right {\n      width: 100%;\n    }\n    .aboutSection__right {\n      margin-top: 3rem;\n    }\n    .section-title {\n      text-align: center;\n    }\n    .para {\n      margin: 0 auto;\n      margin-top: 2rem;\n    }\n    .aboutSection__buttons {\n      flex-direction: column;\n      gap: 0rem;\n      .button-wrapper,\n      a {\n        width: 100%;\n        text-align: center;\n      }\n    }\n  }\n"])));function tn(){return Object(b.jsx)(en,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"aboutSection__left",children:[Object(b.jsx)(q,{className:"section-title",subheading:"Let me introduce myself",heading:"About Me"}),Object(b.jsx)(g,{children:"In my free time I enjoy kayaking, hiking, visiting with family and friends."}),Object(b.jsxs)("div",{className:"aboutSection__buttons",children:[Object(b.jsx)(S,{btnText:"Works",btnLink:"/projects"}),Object(b.jsx)(S,{btnText:"Read More",btnLink:"/about",outline:!0})]})]}),Object(b.jsx)("div",{className:"aboutSection__right",children:Object(b.jsx)("img",{className:"aboutImg",src:nn,alt:"Img"})})]})})}var rn,an=m.b.div($||($=Object(d.a)(["\n  text-align: center;\n  .servicesItem__icon {\n    svg {\n      width: 3rem;\n    }\n  }\n  .servicesItem__title {\n    font-size: 2.5rem;\n    font-family: 'Montserrat SemiBold';\n  }\n  .para {\n    margin-top: 2rem;\n  }\n"])));function on(n){var e=n.icon,t=void 0===e?Object(b.jsx)(w.e,{}):e,i=n.title,r=void 0===i?"Web Design":i,a=n.desc,o=void 0===a?"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ok":a;return Object(b.jsxs)(an,{className:"servicesItem",children:[Object(b.jsx)("div",{className:"servicesItem__icon",children:t}),Object(b.jsx)("div",{className:"servicesItem__title",children:r}),Object(b.jsx)(g,{children:o})]})}var cn=m.b.div(rn||(rn=Object(d.a)(["\n  padding: 10rem 0;\n  .services__allItems {\n    display: flex;\n    gap: 10rem;\n    justify-content: space-between;\n    margin-top: 5rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .services__allItems {\n      flex-direction: column;\n      max-width: 350px;\n      margin: 0 auto;\n      margin-top: 5rem;\n      gap: 5rem;\n    }\n  }\n"])));function sn(){return Object(b.jsx)(cn,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(q,{subheading:"Knowledge in these",heading:"Services"}),Object(b.jsxs)("div",{className:"services__allItems",children:[Object(b.jsx)(on,{icon:Object(b.jsx)(w.e,{}),title:"Web Design",desc:"Working with the latest CSS Frameworks."}),Object(b.jsx)(on,{icon:Object(b.jsx)(w.d,{}),title:"Web Developer",desc:"Working with React, Next.js, Django and more."}),Object(b.jsx)(on,{icon:Object(b.jsx)(w.i,{}),title:"Mobile Developer",desc:"Working with Android Studio. "})]})]})})}var ln,dn=t(58),mn=t(55),bn=t(57),jn=t(54),hn=t.p+"static/media/bestbuy.f727bc34.jpeg",pn=m.b.div(ln||(ln=Object(d.a)(["\n  .projectItem__img {\n    width: 100%;\n    height: 400px;\n    border-radius: 12px;\n    overflow: hidden;\n    display: inline-block;\n    border: 3px solid var(--gray-2);\n    img {\n      height: 100%;\n    }\n  }\n  .projectItem__info {\n    margin-top: 1rem;\n    background-color: var(--deep-dark);\n    padding: 1rem;\n    border-radius: 12px;\n  }\n  .projectItem__title {\n    font-size: 2.2rem;\n  }\n  .projectItem__desc {\n    font-size: 1.6rem;\n    font-family: 'RobotoMono Regular';\n    margin-top: 1rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .projectItem__img {\n      height: 350px;\n    }\n  }\n"])));function xn(n){var e=n.img,t=void 0===e?hn:e,i=n.title,r=void 0===i?"Project Name":i,a=n.desc,o=void 0===a?"":a;return Object(b.jsxs)(pn,{children:[Object(b.jsx)(s.b,{to:"/projects",className:"projectItem__img",children:Object(b.jsx)("img",{src:t,alt:"project img"})}),Object(b.jsxs)("div",{className:"projectItem__info",children:[Object(b.jsx)(s.b,{to:"#",children:Object(b.jsx)("h3",{className:"projectItem__title",children:r})}),Object(b.jsx)("p",{className:"projectItem__desc",children:o})]})]})}t(49);var gn,un=t(59),fn=t.p+"static/media/yourhome.4d63228f.jpeg",_n=t.p+"static/media/nationalpark.e400fad0.jpeg",On=[{id:Object(un.a)(),name:"Home Finder",desc:"Your Home is a web application that allows users to sign up or log in with an enabled third party authentication system. Once you login you are able to view other listings, create listings, and create companies. Made with Ruby On Rails",img:fn},{id:Object(un.a)(),name:"National Parks",desc:"Web application that shows users each national park. Made with React and Ruby On Rails.",img:_n},{id:Object(un.a)(),name:"GPU Bot",desc:"This script is used to purchase a GPU from Bestbuy",img:hn}];bn.a.use([jn.a]);var vn=m.b.div(gn||(gn=Object(d.a)(["\n  padding: 10rem 0;\n  .projects__allItems {\n    display: flex;\n    gap: 3rem;\n    margin-top: 5rem;\n  }\n  .swiper-container {\n    padding-top: 8rem;\n    max-width: 100%;\n  }\n  .swiper-button-prev,\n  .swiper-button-next {\n    position: absolute;\n    height: 50px;\n    width: 50px;\n    background: var(--deep-dark);\n    z-index: 10;\n    right: 60px;\n    left: auto;\n    top: 0;\n    transform: translateY(50%);\n    color: var(--gray-1);\n    border-radius: 8px;\n  }\n  .swiper-button-next {\n    right: 0;\n  }\n  .swiper-button-prev::after,\n  .swiper-button-next::after {\n    font-size: 2rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .projects__allItems {\n      flex-direction: column;\n      max-width: 400px;\n      margin: 0 auto;\n      margin-top: 7rem;\n      gap: 5rem;\n      .projectItem__img {\n        width: 100%;\n      }\n    }\n  }\n"])));function wn(){return Object(b.jsx)(vn,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(q,{subheading:"MY",heading:"Projects"}),Object(b.jsx)("div",{className:"projects__allItems",children:Object(b.jsx)(dn.a,{spaceBetween:30,slidesPerView:1,navigation:!0,breakpoints:{640:{slidesPerView:1},768:{slidesPerView:2},1200:{slidesPerView:3}},children:On.map((function(n){return Object(b.jsx)(mn.a,{children:Object(b.jsx)(xn,{title:n.name,img:n.img,desc:n.desc})},n.id)}))})})]})})}var yn,kn=t(56),Nn=t(60),In=[{id:1,name:'My Bird "Kiwi"',title:"Guard Bird",org:"Neighbourhood watch",desc:"Charles is a great guy, especially when he gives me treats."},{id:2,name:"Shirly Davis",title:"Grandma",org:"Retired",desc:"I love Charles like he is my grandson."}],Sn=m.b.div(yn||(yn=Object(d.a)(["\n  overflow-x: hidden;\n  padding: 10rem 0;\n  text-align: center;\n  .testimonial__wrapper {\n    position: relative;\n    max-width: 700px;\n    margin: 0 auto;\n  }\n  .testimonial__info {\n    width: 100%;\n    height: fit-content;\n    padding: 3rem;\n    background-color: var(--deep-dark);\n    border-radius: 12px;\n    margin-top: 5rem;\n  }\n  .testimonial__desc {\n    .para {\n      text-align: center;\n    }\n  }\n  .testimonial__name {\n    margin-top: 4rem;\n    font-family: 'Montserrat Bold';\n    font-size: 2.2rem;\n  }\n  .testimonial__title {\n    font-size: 1.6rem;\n    margin-top: 0.3rem;\n  }\n  .arrows {\n    margin-top: 2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    /* gap: 1rem; */\n    svg {\n      width: 30px;\n      pointer-events: none;\n    }\n    .next,\n    .prev {\n      margin: 0 0.5rem;\n      width: fit-content;\n      background-color: var(--deep-dark);\n      padding: 0.5rem 2rem;\n      border-radius: 8px;\n      cursor: pointer;\n    }\n  }\n  .fade-enter {\n    opacity: 0;\n    transform: scale(0.96);\n    z-index: 1;\n  }\n  .fade-enter-active {\n    opacity: 1;\n    transform: scale(1);\n    transition: 250ms ease-in;\n    transition-property: transform, opacity;\n    z-index: 1;\n  }\n  .fade-exit {\n    transform: scale(1);\n    opacity: 1;\n  }\n  .fade-exit-active {\n    opacity: 0;\n    transform: scale(0.96);\n    transition: 200ms ease-in;\n    transition-property: transform, opacity;\n  }\n"])));function zn(){var n=Object(a.useState)(0),e=Object(v.a)(n,2),t=e[0],i=e[1],r=In[t];function o(){i(t>=In.length-1?0:function(n){return n+1})}function c(){i(0===t?In.length-1:function(n){return n-1})}return Object(b.jsx)(Sn,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(q,{subheading:"See what others say about me",heading:"Testimonials"}),Object(b.jsx)("div",{className:"testimonial__wrapper",children:Object(b.jsx)(kn.a,{component:null,children:Object(b.jsx)(Nn.a,{timeout:300,classNames:"fade",children:Object(b.jsxs)("div",{className:"testimonial__info",children:[Object(b.jsx)("div",{className:"testimonial__desc",children:Object(b.jsx)(g,{children:r.desc})}),Object(b.jsx)("h2",{className:"testimonial__name",children:r.name}),Object(b.jsxs)("p",{className:"testimonial__title",children:[r.title,", ",Object(b.jsx)("br",{})," ",r.org]})]})},r.id)})}),Object(b.jsxs)("div",{className:"arrows",children:[Object(b.jsx)("div",{className:"prev",onClick:c,role:"button",tabIndex:0,onKeyDown:c,children:Object(b.jsx)(w.a,{})}),Object(b.jsx)("div",{className:"next",onClick:o,role:"button",tabIndex:0,onKeyDown:o,children:Object(b.jsx)(w.b,{})})]})]})})}var Cn,Bn,Mn=t.p+"static/media/hero.0e20f9bb.jpg",Rn=t.p+"static/media/social-media-arrow.bf263fc4.svg",Dn=t.p+"static/media/scroll-down-arrow.9d419098.svg",Ln=m.b.div(Cn||(Cn=Object(d.a)(["\n  .hero {\n    height: 100vh;\n    min-height: 1000px;\n    width: 100%;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n  }\n  .hero__heading {\n    font-size: 2rem;\n    margin-bottom: -4rem;\n    position: relative;\n    span {\n      display: inline-block;\n      width: 100%;\n    }\n    .hero__name {\n      font-family: 'Montserrat SemiBold';\n      font-size: 7rem;\n      color: var(--white);\n    }\n  }\n  .hero__img {\n    max-width: 900px;\n    width: 100%;\n    height: 600px;\n    margin: 0 auto;\n    border: 2px solid var(--gray-1);\n  }\n  .hero__info {\n    margin-top: -18rem;\n    color: white;\n  }\n  .hero__social,\n  .hero__scrollDown {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    position: absolute;\n    bottom: 20px;\n    width: 50px;\n  }\n  .hero__social {\n    left: 50px;\n  }\n  .hero__scrollDown {\n    right: 50px;\n  }\n  .hero__social__indicator,\n  .hero__scrollDown {\n    width: 50px;\n    p {\n      font-size: 1.6rem;\n      transform: translateY(-70px) rotate(90deg);\n      letter-spacing: 0.7rem;\n      text-transform: uppercase;\n    }\n    img {\n      max-height: 45px;\n      width: 16px;\n      margin: 0 auto;\n      object-fit: contain;\n    }\n  }\n  .hero__scrollDown {\n    img {\n      max-height: 70px;\n    }\n  }\n  .hero__social__text {\n    ul {\n      li {\n        margin-bottom: 1rem;\n        a {\n          display: inline-block;\n          font-size: 1.6rem;\n          transform: rotate(-90deg);\n          letter-spacing: 5px;\n          margin-bottom: 2rem;\n        }\n      }\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    .hero {\n      min-height: 750px;\n    }\n    .hero__heading {\n      font-size: 1.4rem;\n      margin-bottom: -3rem;\n      .hero__name {\n        font-size: 4.5rem;\n      }\n    }\n    .hero__img {\n      height: 300px;\n    }\n    .hero__info {\n      margin-top: 3rem;\n    }\n    .hero__social {\n      left: 0px;\n      bottom: -15%;\n      width: 20px;\n      .hero__social__indicator {\n        width: 20px;\n        p {\n          font-size: 1.2rem;\n        }\n        img {\n          max-height: 22px;\n        }\n      }\n      .hero__social__text {\n        ul {\n          li {\n            a {\n              font-size: 1.2rem;\n              margin-bottom: 1rem;\n            }\n          }\n        }\n      }\n    }\n    .hero__scrollDown {\n      right: 0;\n      width: 20px;\n      gap: 1rem;\n      p {\n        font-size: 1.3rem;\n      }\n    }\n  }\n"])));function Fn(){return Object(b.jsx)(Ln,{children:Object(b.jsx)("div",{className:"hero",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("h1",{className:"hero__heading",children:[Object(b.jsx)("span",{children:"Hello, I am"}),Object(b.jsx)("span",{className:"hero__name",children:"Charles Davis"})]}),Object(b.jsx)("div",{className:"hero__img",children:Object(b.jsx)("img",{src:Mn,alt:""})}),Object(b.jsxs)("div",{className:"hero__info",children:[Object(b.jsx)(g,{children:"(Function repeat(): eat(); sleep(); code(); repeat(); )"}),Object(b.jsx)(S,{btnText:"Projects",btnLink:"/projects"})]}),Object(b.jsxs)("div",{className:"hero__social",children:[Object(b.jsxs)("div",{className:"hero__social__indicator",children:[Object(b.jsx)("p",{children:"Follow"}),Object(b.jsx)("img",{src:Rn,alt:"icon"})]}),Object(b.jsx)("div",{className:"hero__social__text",children:Object(b.jsx)("ul",{children:Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://www.linkedin.com/in/charles-davis-20a748123/",target:"_blank",rel:"noreferrer",children:"LI"})})})})]}),Object(b.jsxs)("div",{className:"hero__scrollDown",children:[Object(b.jsx)("p",{children:"Scroll"}),Object(b.jsx)("img",{src:Dn,alt:"ScrollDown Arrow"})]})]})})})}function Pn(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(Fn,{}),Object(b.jsx)(tn,{}),Object(b.jsx)(sn,{}),Object(b.jsx)(wn,{}),Object(b.jsx)(zn,{}),Object(b.jsx)(L,{})]})}var Tn,Hn=m.b.div(Bn||(Bn=Object(d.a)(["\n  padding: 10rem 0;\n  .projects__allItems {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    gap: 5rem;\n    margin-top: 5rem;\n  }\n  .projects__searchBar {\n    position: relative;\n    width: 300px;\n    margin-top: 5rem;\n  }\n  .projects__searchBar input {\n    width: 100%;\n    font-size: 2rem;\n    padding: 0.8rem;\n    color: var(--black);\n    border-radius: 6px;\n    outline: none;\n    border: none;\n  }\n  .projects__searchBar .searchIcon {\n    position: absolute;\n    width: 2rem;\n    right: 1rem;\n  }\n  .projects__searchBar .searchIcon path {\n    color: var(--deep-dark);\n  }\n  @media only screen and (max-width: 768px) {\n    .projects__searchBar,\n    .projects__searchBar form,\n    .projects__searchBar input {\n      width: 100%;\n    }\n  }\n"])));function Kn(){var n=Object(a.useState)(""),e=Object(v.a)(n,2),t=e[0],i=e[1],r=Object(a.useState)(On),o=Object(v.a)(r,2),c=o[0],s=o[1];Object(a.useEffect)((function(){""!==t&&s((function(){return On.filter((function(n){return n.name.toLowerCase().match(t.toLowerCase())}))}))}),[t]);return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(Hn,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(q,{heading:"Projects",subheading:"Recent"}),Object(b.jsx)("div",{className:"projects__searchBar",children:Object(b.jsxs)("form",{children:[Object(b.jsx)("input",{type:"text",value:t,onChange:function(n){n.preventDefault(),i(n.target.value),!n.target.value.length>0&&s(On)},placeholder:"Project Name"}),Object(b.jsx)(w.k,{className:"searchIcon"})]})}),Object(b.jsx)("div",{className:"projects__allItems",children:c.map((function(n){return Object(b.jsx)(xn,{title:n.name,desc:n.desc,img:n.img},n.id)}))})]})})})}function En(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(s.a,{children:[Object(b.jsx)(k,{}),Object(b.jsx)(N,{}),Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{path:"/about",children:Object(b.jsx)(H,{})}),Object(b.jsx)(l.a,{path:"/contact",children:Object(b.jsx)(X,{})}),Object(b.jsx)(l.a,{path:"/projects",children:Object(b.jsx)(Kn,{})}),Object(b.jsx)(l.a,{path:"/",children:Object(b.jsx)(Pn,{})})]}),Object(b.jsx)(f,{})]})})}var Wn,Yn=Object(m.a)(Tn||(Tn=Object(d.a)(["\n*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n  }\n  :root{\n    --dark-bg: #262626;\n    --gray-1: #d3d3d3;\n    --deep-dark: #1E1E1E;\n    --gray-2: #363636;\n    --white : white;\n    --black: black;\n  }\n  html{\n    font-size: 10px;\n    font-family: 'Roboto Mono';\n    background-color: var(--dark-bg);\n  }\n  ul,li{\n    list-style: none;\n  }\n  a{\n    text-decoration: none;\n  }\n  img, svg{\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  button{\n    outline: none\n  }\n  .container {\n    max-width: 1200px;\n    width: 90%;\n    margin: 0 auto;\n  }\n/* Smooth Scroll  */\n  [data-scrollbar] {\n    height: 100vh;\n    overflow: hidden;\n    background-color: var(--gray-1);\n    .scroll-content {\n      background-color: var(--dark-bg);\n    }\n    .scrollbar-track.scrollbar-track-y {\n      background: var(--deep-dark);\n      .scrollbar-thumb-y {\n        background: var(--gray-1);\n      }\n    }\n  }\n"]))),An=t.p+"static/media/RobotoMono-Regular.418a8f9f.ttf",Gn=t.p+"static/media/Montserrat-SemiBold.fa8441f3.ttf",Jn=t.p+"static/media/Montserrat-Bold.079ca05d.ttf",Vn=Object(m.a)(Wn||(Wn=Object(d.a)(["\n  @font-face {\n    font-family: 'RobotoMono Regular';\n    src: url(",");\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'Montserrat SemiBold';\n    src: url(",");\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'Montserrat Bold';\n    src: url(",");\n    font-style: normal;\n  }\n  html{\n    font-family: 'RobotoMono Regular';\n    color: var(--gray-1);\n  }\n  *{\n    font-family: 'RobotoMono Regular';\n    color: var(--gray-1);\n  }\n  h1,h2,h3,h4,h5,h6{\n    font-family: 'Montserrat SemiBold'\n  }\n"])),An,Gn,Jn);c.a.render(Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(Yn,{}),Object(b.jsx)(Vn,{}),Object(b.jsx)(En,{})]}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.381643a1.chunk.js.map