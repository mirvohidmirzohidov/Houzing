"use strict";(self.webpackChunk_107_dars=self.webpackChunk_107_dars||[]).push([[914],{7188:(e,n,t)=>{t.d(n,{A:()=>m});var i,r,l,s=t(5043),a=t(4975),o=(t(4014),t(4650)),d=t(50),c=t(7528),u=t(5464),p=t(2431);const h=u.Ay.div(i||(i=(0,c.A)(["\n    position: relative;\n    width: 100%;\n    max-width: 1440px;\n    padding: 96px 130px;\n    margin: 0 auto;\n"]))),x=(0,u.Ay)(p.h)(r||(r=(0,c.A)(["\n    position: absolute;\n    z-index: 999;\n    padding: 15px;\n    top: 50%;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    box-shadow: 0px 10px 30px 5px #0D263B1A;\n    background-color: white;\n    left: ",";\n    right: ",";\n    transform: rotate(",");\n    cursor: pointer;\n    path {\n    fill: black;\n    }\n"])),(e=>{let{$left:n}=e;return n&&"-25px"}),(e=>{let{$left:n}=e;return!n&&"-25px"}),(e=>{let{$left:n}=e;return!n&&"180deg"})),v=u.Ay.div(l||(l=(0,c.A)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 8px;\n    padding-bottom: 32px;\n"])));var f=t(6580),g=t(579);const m=function(e){let{title:n}=e;const[t,i]=(0,s.useState)([]),r=(0,f.Zp)();return(0,s.useEffect)((()=>{fetch("https://housing-backend-production.up.railway.app/api/houses").then((e=>e.json())).then((e=>{i(e||[])}))}),[]),(0,s.useEffect)((()=>{const e=document.querySelector(".swiper");e&&(e.swiper.params.navigation.prevEl=".recent-prev-button",e.swiper.params.navigation.nextEl=".recent-next-button",e.swiper.navigation.init(),e.swiper.navigation.update())}),[t]),(0,g.jsxs)(h,{children:[(0,g.jsxs)(v,{children:[(0,g.jsx)("h1",{className:"title",children:n||"Recent Properties for Rent"}),(0,g.jsx)("p",{className:"info",style:{fontSize:"16px"},children:"Nulla quis curabitur velit volutpat auctor bibendum consectetur sit."})]}),(0,g.jsx)(a.RC,{style:{height:"500px"},modules:[d.Vx,d.dK],navigation:{prevEl:".recent-prev-button",nextEl:".recent-next-button"},slidesPerView:3,spaceBetween:20,loop:t.length>3,pagination:{clickable:!0},children:t.map(((e,n)=>(0,g.jsx)(a.qr,{children:(0,g.jsx)(o.A,{data:e,onClick:()=>r("/properties/".concat(e._id))})},n)))}),(0,g.jsx)(x,{className:"recent-prev-button",$left:!0}),(0,g.jsx)(x,{className:"recent-next-button"})]})}},3914:(e,n,t)=>{t.r(n),t.d(n,{default:()=>de});var i,r=t(6580),l=t(7528),s=t(5464),a=t(5043);const o=["title","titleId"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)({}).hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},d.apply(null,arguments)}function c(e,n){let{title:t,titleId:r}=e,l=function(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t={};for(var i in e)if({}.hasOwnProperty.call(e,i)){if(n.includes(i))continue;t[i]=e[i]}return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.includes(t)||{}.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}(e,o);return a.createElement("svg",d({width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":r},l),t?a.createElement("title",{id:r},t):null,i||(i=a.createElement("path",{d:"M11.1016 9.07812C10.2912 9.07812 9.57116 9.47193 9.12248 10.0781L5.25962 8.10403C5.32443 7.88386 5.35938 7.65103 5.35938 7.41016C5.35938 7.08392 5.29542 6.77239 5.17962 6.48722L9.22813 4.05478C9.67985 4.58497 10.3521 4.92188 11.1016 4.92188C12.4585 4.92188 13.5625 3.8179 13.5625 2.46094C13.5625 1.10398 12.4585 0 11.1016 0C9.7446 0 8.64062 1.10398 8.64062 2.46094C8.64062 2.77457 8.69971 3.07461 8.80715 3.3507L4.74852 5.78922C4.29712 5.27466 3.63511 4.94922 2.89844 4.94922C1.54148 4.94922 0.4375 6.0532 0.4375 7.41016C0.4375 8.76712 1.54148 9.87109 2.89844 9.87109C3.72209 9.87109 4.45244 9.46433 4.89937 8.84116L8.75101 10.8095C8.67929 11.0401 8.64062 11.2851 8.64062 11.5391C8.64062 12.896 9.7446 14 11.1016 14C12.4585 14 13.5625 12.896 13.5625 11.5391C13.5625 10.1821 12.4585 9.07812 11.1016 9.07812ZM11.1016 0.820312C12.0062 0.820312 12.7422 1.5563 12.7422 2.46094C12.7422 3.36558 12.0062 4.10156 11.1016 4.10156C10.1969 4.10156 9.46094 3.36558 9.46094 2.46094C9.46094 1.5563 10.1969 0.820312 11.1016 0.820312ZM2.89844 9.05078C1.9938 9.05078 1.25781 8.3148 1.25781 7.41016C1.25781 6.50552 1.9938 5.76953 2.89844 5.76953C3.80308 5.76953 4.53906 6.50552 4.53906 7.41016C4.53906 8.3148 3.80308 9.05078 2.89844 9.05078ZM11.1016 13.1797C10.1969 13.1797 9.46094 12.4437 9.46094 11.5391C9.46094 10.6344 10.1969 9.89844 11.1016 9.89844C12.0062 9.89844 12.7422 10.6344 12.7422 11.5391C12.7422 12.4437 12.0062 13.1797 11.1016 13.1797Z",fill:"#696969"})))}const u=a.forwardRef(c);t.p;var p,h,x=t(7944),v=t(4353),f=t(1047),g=t(950),m=t(9080);const j=["title","titleId"];function w(){return w=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)({}).hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},w.apply(null,arguments)}function y(e,n){let{title:t,titleId:i}=e,r=function(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t={};for(var i in e)if({}.hasOwnProperty.call(e,i)){if(n.includes(i))continue;t[i]=e[i]}return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.includes(t)||{}.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}(e,j);return a.createElement("svg",w({width:19,height:19,viewBox:"0 0 19 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":i},r),t?a.createElement("title",{id:i},t):null,p||(p=a.createElement("g",{clipPath:"url(#clip0_1987_17980)"},a.createElement("path",{d:"M16.5508 1.48438H14.8438V0.59375C14.8438 0.265852 14.5779 0 14.25 0C13.9221 0 13.6562 0.265852 13.6562 0.59375V1.48438H5.34375V0.59375C5.34375 0.265852 5.07794 0 4.75 0C4.42206 0 4.15625 0.265852 4.15625 0.59375V1.48438H2.44922C1.0987 1.48438 0 2.58307 0 3.93359V16.5508C0 17.9013 1.0987 19 2.44922 19H16.5508C17.9013 19 19 17.9013 19 16.5508V3.93359C19 2.58307 17.9013 1.48438 16.5508 1.48438ZM2.44922 2.67188H4.15625V3.26562C4.15625 3.59352 4.42206 3.85938 4.75 3.85938C5.07794 3.85938 5.34375 3.59352 5.34375 3.26562V2.67188H13.6562V3.26562C13.6562 3.59352 13.9221 3.85938 14.25 3.85938C14.5779 3.85938 14.8438 3.59352 14.8438 3.26562V2.67188H16.5508C17.2465 2.67188 17.8125 3.23787 17.8125 3.93359V5.34375H1.1875V3.93359C1.1875 3.23787 1.75349 2.67188 2.44922 2.67188ZM16.5508 17.8125H2.44922C1.75349 17.8125 1.1875 17.2465 1.1875 16.5508V6.53125H17.8125V16.5508C17.8125 17.2465 17.2465 17.8125 16.5508 17.8125Z",fill:"#696969"}))),h||(h=a.createElement("defs",null,a.createElement("clipPath",{id:"clip0_1987_17980"},a.createElement("rect",{width:19,height:19,fill:"white"})))))}const b=a.forwardRef(y);t.p;var C,A,E,S,k,P,O,T,V,H,N,B,$,F,M,_,I,Z,z,D,R;const L=s.Ay.div(C||(C=(0,l.A)(["\n    width: 100%;\n    max-width: var(--width);\n    padding: var(--padding);\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;   \n"]))),q=s.Ay.div(A||(A=(0,l.A)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 32px 0;\n"])));q.Title=s.Ay.div(E||(E=(0,l.A)(["\n    margin: 0 24px 0 8px;\n    font-family: Montserrat;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 20px;\n    letter-spacing: 0%;\n    color: #696969;\n"])));const G=s.Ay.div(S||(S=(0,l.A)(["\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n"]))),U=s.Ay.div(k||(k=(0,l.A)(["\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-direction: ",";\n    flex: ",";\n\n    &.user {\n    padding: 20px;\n    border-radius: 3px;\n    margin-left: 20px;\n    border: 1px solid #E6E9EC;\n    gap: 24px;\n    }\n"])),(e=>{let{$row:n}=e;return!n&&"column"}),(e=>{let{$flex:n}=e;return n||"initial"}));U.Title=s.Ay.div(P||(P=(0,l.A)(["\n    width: 100%;\n    font-weight: 600;\n    font-size: ",";\n    color: #0d263b;\n"])),(e=>{let{large:n}=e;return n?"24px":"18px"})),U.SubTitle=s.Ay.div(O||(O=(0,l.A)(["\n    width: 100%;\n    margin-top: 8px;\n    font-weight: 400;\n    font-size: 16px;\n    color: #696969;\n"])));const K=s.Ay.div(T||(T=(0,l.A)([""])));K.Bed=(0,s.Ay)(v.h)(V||(V=(0,l.A)([""]))),K.Bath=(0,s.Ay)(f.h)(H||(H=(0,l.A)([""]))),K.Garage=(0,s.Ay)(g.h)(N||(N=(0,l.A)([""]))),K.Ruler=(0,s.Ay)(m.h)(B||(B=(0,l.A)([""]))),K.Calendar=(0,s.Ay)(b)($||($=(0,l.A)([""]))),K.Share=(0,s.Ay)(u)(F||(F=(0,l.A)(["\nwidth: 35px;\nheight: 35px;\nborder-radius: 10px;\npadding: 4px;\ncursor: pointer;\n    &:active {\n        transform: scale(0.9);\n    }\n    margin: 0 10px 0 26px;\n"]))),K.Heart=(0,s.Ay)(x.h)(M||(M=(0,l.A)(["\nwidth: 35px;\nheight: 35px;\nborder-radius: 50%;\npadding: 4px;\ncursor: pointer;\n    &:active {\n        transform: scale(0.9);\n    }\n    margin: 0 10px 0 26px;\n    background-color: ",";\n    & path {\n        fill: ",";\n    }\n"])),(e=>{let{$favourite:n}=e;return n?"#CC5040":"white"}),(e=>{let{$favourite:n}=e;return n&&"white"}));const W=s.Ay.div(_||(_=(0,l.A)(["\n    width: 100%;\n    margin-top: 16px;\n    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%);\n"]))),Y=s.Ay.img(I||(I=(0,l.A)(["\n    width: 56px;\n    height: 56px;\n    border-radius: 50%;\n    margin-right: 8px;\n"]))),J=s.Ay.div(Z||(Z=(0,l.A)(["\n    display: flex;\n    margin: 24px 0;\n"])));J.Main=s.Ay.img(z||(z=(0,l.A)(["\n    width: 580px;\n    height: 400px;\n"]))),J.Img=s.Ay.img(D||(D=(0,l.A)(["\n    width: 280px;\n    height: 190px;\n"])));const Q=s.Ay.div(R||(R=(0,l.A)(["\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 20px;\n    margin-left: 20px;\n"])));var X=t(7416),ee=t(2513),ne=t(3248),te=t(9419),ie=t(3296),re=(t(6433),t(579));const le=()=>(0,re.jsx)(te.W,{center:[41.2995,69.2401],zoom:13,style:{height:"416px",width:"100%"},children:(0,re.jsx)(ie.e,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"})});var se=t(7188),ae=t(7097);const oe=function(){var e,n,t,i,l,s,o,d,c,u,p;const[h,x]=(0,a.useState)({}),v=(0,r.g)(),[f,g]=(0,a.useState)(null===h||void 0===h?void 0:h.favourite),m=(0,ae.n)({mutationFn:async e=>{const n=await fetch("https://housing-backend-production.up.railway.app/api/houses/addFavourite/".concat(e,"?favourite=").concat(!(null!==h&&void 0!==h&&h.favourite)),{method:"PUT"});if(!n.ok)throw new Error("Failed to update favourite status");return n.json()}});return(0,a.useEffect)((()=>{null!==v&&void 0!==v&&v.id&&fetch("https://housing-backend-production.up.railway.app/api/houses/".concat(v.id)).then((e=>{if(!e.ok)throw new Error("HTTP error! Status: ".concat(e.status));return e.json()})).then((e=>{x(e||{}),window.scrollTo(0,0)})).catch((e=>{console.error("Fetch xatosi:",e)}))}),[v.id]),(0,re.jsxs)(re.Fragment,{children:[(0,re.jsxs)(L,{children:[(0,re.jsxs)(J,{children:[(0,re.jsx)(J.Main,{src:(null===h||void 0===h||null===(e=h.attachments)||void 0===e?void 0:e.length)>0?"https://housing-backend-production.up.railway.app/"+(null===h||void 0===h||null===(n=h.attachments)||void 0===n||null===(t=n[0])||void 0===t?void 0:t.imgPath):ne,alt:"House"}),(0,re.jsx)(Q,{children:null===h||void 0===h||null===(i=h.attachments)||void 0===i?void 0:i.slice(1,5).map(((e,n)=>(0,re.jsx)(J.Img,{src:"https://housing-backend-production.up.railway.app/"+(null===e||void 0===e?void 0:e.imgPath),alt:"House"},n)))})]}),(0,re.jsxs)(G,{children:[(0,re.jsxs)("div",{style:{flex:"3"},children:[(0,re.jsxs)(G,{children:[(0,re.jsxs)(U,{children:[(0,re.jsx)("div",{className:"title",children:h.name}),(0,re.jsxs)(U.SubTitle,{children:[h.city,",",h.adress,",",h.country]})]}),(0,re.jsxs)(U,{$row:!0,children:[(0,re.jsx)(K.Share,{})," ",(0,re.jsx)("div",{className:"info",children:"Share"}),(0,re.jsx)(K.Heart,{onClick:e=>(()=>{m.mutate(null===h||void 0===h?void 0:h._id);const e=f;g((e=>!e)),m.mutate(null===h||void 0===h?void 0:h._id,{onError:()=>{g(e)}})})(),$favourite:f})," ",(0,re.jsx)("div",{className:"info",children:"Save"})]})]}),(0,re.jsxs)(G,{children:[(0,re.jsxs)(q,{children:[(0,re.jsx)(K.Bed,{}),(0,re.jsxs)(q.Title,{children:[(null===h||void 0===h||null===(l=h.houseDetails)||void 0===l?void 0:l.beds)||0," Beds"]}),(0,re.jsx)(K.Bath,{}),(0,re.jsxs)(q.Title,{children:[(null===h||void 0===h||null===(s=h.houseDetails)||void 0===s?void 0:s.bath)||0," Baths"]}),(0,re.jsx)(K.Garage,{}),(0,re.jsxs)(q.Title,{children:[(null===h||void 0===h||null===(o=h.houseDetails)||void 0===o?void 0:o.garage)||0," Garage"]}),(0,re.jsx)(K.Ruler,{}),(0,re.jsxs)(q.Title,{children:[(null===h||void 0===h||null===(d=h.houseDetails)||void 0===d?void 0:d.area)||0," Sq Ft"]}),(0,re.jsx)(K.Calendar,{}),(0,re.jsxs)(q.Title,{children:["Year Built: ",(null===h||void 0===h||null===(c=h.houseDetails)||void 0===c?void 0:c.yearBuilt)||0]})]}),(0,re.jsxs)(U,{children:[(0,re.jsxs)(U,{$row:!0,children:[(0,re.jsxs)("del",{children:[(null===h||void 0===h?void 0:h.price)>0&&((null===h||void 0===h?void 0:h.price)/24).toLocaleString(),"/mo"]}),(0,re.jsxs)("h2",{className:"title",children:[(null===h||void 0===h?void 0:h.price)>0&&((null===h||void 0===h?void 0:h.price)/36).toLocaleString(),"/mo"]})]}),(0,re.jsxs)("div",{style:{width:"100%",textAlign:"end"},className:"info",children:[null===h||void 0===h||null===(u=h.user)||void 0===u?void 0:u.firstname," ",null===h||void 0===h||null===(p=h.user)||void 0===p?void 0:p.lastname]})]})]}),(0,re.jsxs)(U,{children:[(0,re.jsx)(U.Title,{children:"Description"}),(0,re.jsx)(W,{children:null===h||void 0===h?void 0:h.description})]})]}),(0,re.jsxs)(U,{className:"user",$flex:"1",children:[(0,re.jsxs)(G,{style:{justifyContent:"flex-start"},children:[(0,re.jsx)(Y,{src:ne}),(0,re.jsxs)(U,{style:{alignItems:"flex-start"},children:[(0,re.jsx)("div",{className:"subTitle",children:"Name"}),(0,re.jsx)("div",{className:"info",children:"Phone number"})]})]}),(0,re.jsx)(X.p,{placeholder:"Name"}),(0,re.jsx)(X.p,{placeholder:"Phone"}),(0,re.jsx)(X.p,{placeholder:"Email"}),(0,re.jsx)(X.p,{placeholder:"Message"}),(0,re.jsx)(ee.A,{children:"By submitting this form I agree to Terms of Use"}),(0,re.jsx)(X.$,{width:"100%",children:"Send request"})]})]}),(0,re.jsx)(le,{})]}),(0,re.jsx)(se.A,{title:"Similar listings"})]})},de=()=>(0,re.jsx)(oe,{})}}]);
//# sourceMappingURL=914.dc8a4220.chunk.js.map