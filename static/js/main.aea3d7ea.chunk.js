(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,,,function(e,t,n){e.exports={container:"Container_container__38Xd7"}},function(e,t,n){e.exports={section:"Section_section__2e_P6"}},function(e,t,n){e.exports={button:"FeedbackOptions_button__2yGwc"}},function(e,t,n){e.exports={message:"Notification_message__fm3dG"}},function(e,t,n){e.exports={list:"Statistics_list__2hAgW"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(4),i=n.n(s),r=(n(14),n(2)),o=n(5),u=n.n(o),b=n(0),j=function(e){var t=e.children;return Object(b.jsx)("section",{className:u.a.container,children:t})},l=n(6),d=n.n(l),O=function(e){var t=e.title,n=e.children;return Object(b.jsxs)("div",{className:d.a.section,children:[Object(b.jsx)("h2",{children:t}),n]})},h=n(7),f=n.n(h),x=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(b.jsx)(b.Fragment,{children:t.map((function(e){return Object(b.jsx)("button",{className:f.a.button,type:"button",name:e,onClick:n,children:e},e)}))})},g=n(8),m=n.n(g),p=function(e){var t=e.message;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("p",{className:m.a.message,children:t})})},v=n(9),_=n.n(v),k=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,s=e.positivePercentage;return Object(b.jsxs)("ul",{className:_.a.list,children:[Object(b.jsxs)("li",{children:["Good: ",t]}),Object(b.jsxs)("li",{children:["Neutral: ",n]}),Object(b.jsxs)("li",{children:["Bad: ",c]}),Object(b.jsxs)("li",{children:["Total: ",a]}),Object(b.jsxs)("li",{children:["Positive feedback: ",s," %"]})]})};var N=function(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(0),i=Object(r.a)(s,2),o=i[0],u=i[1],l=Object(c.useState)(0),d=Object(r.a)(l,2),h=d[0],f=d[1],g={good:n,neutral:o,bad:h},m=function(){return n+o+h},v=m(),_=function(){var e=m(),t=100*n/e;return Math.round(t)}(),N=Object.keys(g);return Object(b.jsx)("div",{children:Object(b.jsxs)(j,{children:[Object(b.jsx)(O,{title:"Please leave feedback",children:Object(b.jsx)(x,{options:N,onLeaveFeedback:function(e){switch(e.target.name){case"good":a((function(e){return e+1}));break;case"neutral":u((function(e){return e+1}));break;case"bad":f((function(e){return e+1}));break;default:return}}})}),0===v?Object(b.jsx)(p,{message:"No feedback given"}):Object(b.jsx)(O,{title:"Statistics",children:Object(b.jsx)(k,{good:n,neutral:o,bad:h,total:v,positivePercentage:_})})]})})};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.aea3d7ea.chunk.js.map