(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{32:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),i=a.n(c),o=a(19),r=a.n(o),s=a(13),u=(a(31),a(32),a(24)),l=a(3),d=a(5);var p=function(){var e=Object(c.useState)(window.innerWidth),t=Object(l.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){var e=function(){return n(window.innerWidth)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),{width:a}},j=a.p+"static/media/header-logo.a307e1c4.svg",b=a.p+"static/media/header-burger-menu.a46d5c1c.svg",h=a.p+"static/media/header-close-button.6dc19357.svg",m=i.a.createContext();var O=function(e){var t=e.loggedIn,a=e.handleSignOut,o=e.pathName,r=i.a.useContext(m),s=Object(c.useState)(""),u=Object(l.a)(s,2),d=u[0],O=u[1],f=Object(c.useState)(!1),_=Object(l.a)(f,2),v=_[0],g=_[1],C=Object(c.useState)(!1),x=Object(l.a)(C,2),N=x[0],k=x[1],y=p().width;Object(c.useEffect)((function(){g(y<600)})),Object(c.useEffect)((function(){O("/sign-up"===o?"\u0412\u043e\u0439\u0442\u0438":"/sign-in"===o?"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f":"\u0412\u044b\u0439\u0442\u0438")}),[o]);var A=N?"header__menu-dropup_opened":"",S=N?h:b;return v&&t?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"header__menu-dropup ".concat(A),children:[Object(n.jsx)("p",{className:"header__auth-email header__auth-email_type_mobile",children:r.email}),Object(n.jsx)("button",{className:"header__auth-sign",onClick:a,children:d})]}),Object(n.jsxs)("header",{className:"header header_type_mobile page__header",children:[Object(n.jsx)("img",{className:"header__logo",src:j,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f Mesto"}),Object(n.jsx)("div",{className:"header__auth",children:Object(n.jsx)("button",{className:"header__menu-button",onClick:function(){k(!N)},children:Object(n.jsx)("img",{src:S,alt:"button"})})})]})]}):Object(n.jsxs)("header",{className:"header page__header",children:[Object(n.jsx)("img",{className:"header__logo",src:j,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f Mesto"}),Object(n.jsxs)("div",{className:"header__auth",children:[t?Object(n.jsx)("p",{className:"header__auth-email",children:r.email}):"",Object(n.jsx)("button",{className:"header__auth-sign",onClick:a,children:d})]})]})},f=a.p+"static/media/sign-up-success.1b6082f8.svg",_=a.p+"static/media/sign-up-failure.df8eddf6.svg";var v=function(e){var t=e.registerSuccess,a=e.isOpen,c=e.onClose,i=a?"popup_opened":"",o=t?f:_;return Object(n.jsx)("div",{className:"popup ".concat(i),children:Object(n.jsxs)("div",{className:"popup__container",children:[Object(n.jsx)("div",{className:"popup__header",children:Object(n.jsx)("button",{className:"popup__close-button",onClick:c})}),Object(n.jsx)("img",{className:"popup__image-status",src:o,alt:"test"}),Object(n.jsx)("h2",{className:"popup__title_sign-status",children:t?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})]})})},g=a(10),C=a(2);var x=function(){return Object(n.jsx)("footer",{className:"footer",children:Object(n.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})};var N=function(e){var t=e.card,a=e.onCardClick,c=e.onCardLike,o=e.onDeleteButtonClick,r=i.a.useContext(m),s=t.owner===r._id,u=t.likes.some((function(e){return e===r._id})),l="mesto-card__like-icon ".concat(u?"mesto-card__like-icon_active":""),d="mesto-card__trash ".concat(s?"":"mesto-card__trash_hidden");return Object(n.jsxs)("li",{className:"mesto-card",children:[Object(n.jsx)("img",{className:"mesto-card__image",src:t.link,alt:t.name,onClick:function(){a(t)}}),Object(n.jsx)("button",{className:d,onClick:function(){o(t)}}),Object(n.jsxs)("div",{className:"mesto-card__info",children:[Object(n.jsx)("h2",{className:"mesto-card__title",children:t.name}),Object(n.jsxs)("div",{className:"mesto-card__like-group",children:[Object(n.jsx)("button",{className:l,onClick:function(){c(t)}}),Object(n.jsx)("p",{className:"mesto-card__like-number",children:t.likes.length})]})]})]})},k=a(20),y=a.n(k);var A=function(e){var t=e.cards,a=e.onEditProfile,c=e.onAddPlace,o=e.onEditAvatar,r=e.onCardClick,s=e.onCardLike,u=e.onDeleteButtonClick,l=e.isLoading,d=e.isDataLoaded,p=i.a.useContext(m);return Object(n.jsxs)("main",{className:"main page__main",children:[Object(n.jsxs)("section",{className:"profile",children:[Object(n.jsx)("div",{className:"profile__avatar",onClick:o,style:d?{backgroundColor:"#cccccc"}:{backgroundImage:"url(".concat(p.avatar,")")}}),Object(n.jsxs)("div",{className:"profile__info",children:[Object(n.jsx)("h1",{className:"profile__title",children:l?"User":p.name}),Object(n.jsx)("button",{className:"profile__edit-button",onClick:a}),Object(n.jsx)("p",{className:"profile__subtitle",children:l?"Description":p.about})]}),Object(n.jsx)("button",{className:"profile__add-button",onClick:c})]}),Object(n.jsx)("section",{className:"mesto-collection main__mesto-collection",children:Object(n.jsx)("ul",{className:"mesto-cards",children:d?Object(n.jsx)(y.a,{type:"ThreeDots",color:"#ffffff",height:60,width:60,style:{margin:"auto"}}):t.map((function(e){return Object(n.jsx)(N,{card:e,onCardClick:r,onCardLike:s,onDeleteButtonClick:u},e._id)}))})})]})};var S=function(e){var t=e.card,a=e.onClose,i=e.onOverlayClick,o=t?"popup_opened":"";function r(e){t&&27===e.keyCode&&a()}return Object(c.useEffect)((function(){return document.addEventListener("keydown",r),function(){document.removeEventListener("keydown",r)}})),Object(n.jsx)("div",{className:"popup popup_image-viewer ".concat(o),onClick:i,children:Object(n.jsxs)("div",{className:"popup__container popup__container_type_image",children:[Object(n.jsxs)("figure",{className:"popup__figure",children:[Object(n.jsx)("img",{className:"popup__image",src:t.link,alt:t.name}),Object(n.jsx)("figcaption",{className:"popup__caption",children:t.name})]}),Object(n.jsx)("button",{className:"popup__close-button",onClick:a})]})})};var P=function(e){var t=e.title,a=e.formName,c=e.isOpen,i=e.onClose,o=e.onOverlayClick,r=e.onSubmit,s=e.children,u=c?"popup_opened":"";return Object(n.jsx)("div",{className:"popup popup_type_".concat(a," ").concat(u),id:a,onClick:o,children:Object(n.jsxs)("div",{className:"popup__container",children:[Object(n.jsxs)("div",{className:"popup__header",children:[Object(n.jsx)("h2",{className:"popup__title",children:t}),Object(n.jsx)("button",{className:"popup__close-button",onClick:i})]}),Object(n.jsx)("form",{className:"popup__form",id:a,name:a,onSubmit:r,method:"POST",action:"#",noValidate:!0,children:s})]})})};var L=function(e){var t=e.className,a=e.text,c=e.type,i=e.isActive,o=e.isLoading;return Object(n.jsx)("button",{className:i||o?t:"".concat(t," ").concat(t,"_disabled"),type:c,disabled:!i,children:a})};var E=function(e){var t=e.isOpen,a=e.onClose,o=e.onUpdateUser,r=e.onOverlayClick,s=e.values,u=e.errors,d=e.setValues,p=e.setErrors,j=e.handleChange,b=e.isLoading,h=i.a.useContext(m),O=Object(c.useState)(!1),f=Object(l.a)(O,2),_=f[0],v=f[1];function g(e){t&&27===e.keyCode&&a()}return Object(c.useEffect)((function(){d(Object(C.a)(Object(C.a)({},s),{},{editProfile:Object(C.a)(Object(C.a)({},s.editProfile),{},{user:h.name,job:h.about})}))}),[h]),Object(c.useEffect)((function(){var e=Array.from(Object.values(s.editProfile));Array.from(Object.values(u.editProfile)).every((function(e){return""===e}))&&2===e.length?v(!0):v(!1)}),[u,s]),Object(c.useEffect)((function(){return document.addEventListener("keydown",g),function(){document.removeEventListener("keydown",g)}})),Object(n.jsx)(P,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",formName:"editProfile",isOpen:t,onClose:function(){a(),d(Object(C.a)(Object(C.a)({},s),{},{editProfile:Object(C.a)(Object(C.a)({},s.editProfile),{},{user:h.name,job:h.about})})),p(Object(C.a)(Object(C.a)({},u),{},{editProfile:{}}))},onOverlayClick:r,onSubmit:function(e){e.preventDefault(),o({name:s.editProfile.user,about:s.editProfile.job}),d(Object(C.a)(Object(C.a)({},s),{},{editProfile:{}})),p(Object(C.a)(Object(C.a)({},u),{},{editProfile:{}}))},children:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"popup__field",children:[Object(n.jsx)("input",{className:_||0!==s.editProfile.user?"popup__input":"popup__input popup__input_type_error",name:"user",value:s.editProfile.user||"",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",type:"text",minLength:"2",maxLength:"40",onChange:j,required:!0}),u.editProfile.user&&Object(n.jsx)("span",{className:"popup__input-error popup__input-error_active",children:u.editProfile.user})]}),Object(n.jsxs)("div",{className:"popup__field",children:[Object(n.jsx)("input",{className:_||0!==s.editProfile.job?"popup__input":"popup__input popup__input_type_error",name:"job",value:s.editProfile.job||"",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0440\u043e\u0434 \u0437\u0430\u043d\u044f\u0442\u0438\u0439",type:"text",minLength:"2",maxLength:"200",onChange:j,required:!0}),u.editProfile.job&&Object(n.jsx)("span",{className:"popup__input-error popup__input-error_active",children:u.editProfile.job})]}),Object(n.jsx)(L,{className:"popup__submit-button",text:b?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",type:"submit",isActive:_,isLoading:b})]})})};var w=function(e){var t=e.isOpen,a=e.onClose,i=e.onUpdateAvatar,o=e.onOverlayClick,r=e.values,s=e.errors,u=e.setValues,d=e.setErrors,p=e.handleChange,j=e.isLoading,b=Object(c.useRef)(null),h=Object(c.useState)(!1),m=Object(l.a)(h,2),O=m[0],f=m[1];function _(e){t&&27===e.keyCode&&a()}return Object(c.useEffect)((function(){var e=Array.from(Object.values(r.editAvatar));Array.from(Object.values(s.editAvatar)).every((function(e){return""===e}))&&1===e.length?f(!0):f(!1)}),[s,r]),Object(c.useEffect)((function(){return document.addEventListener("keydown",_),function(){document.removeEventListener("keydown",_)}})),Object(n.jsx)(P,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",formName:"editAvatar",isOpen:t,onClose:function(){a(),u(Object(C.a)(Object(C.a)({},r),{},{editAvatar:{}})),d(Object(C.a)(Object(C.a)({},s),{},{editAvatar:{}}))},onSubmit:function(e){e.preventDefault(),i({avatar:b.current.value}),u(Object(C.a)(Object(C.a)({},r),{},{editAvatar:{}})),d(Object(C.a)(Object(C.a)({},s),{},{editAvatar:{}}))},onOverlayClick:o,children:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"popup__field",children:[Object(n.jsx)("input",{className:O||""===r.editAvatar.avatar||void 0===r.editAvatar.avatar?"popup__input":"popup__input popup__input_type_error",name:"avatar",ref:b,value:r.editAvatar.avatar||"",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",type:"url",onChange:p,required:!0}),s.editAvatar.avatar&&Object(n.jsx)("span",{className:"popup__input-error popup__input-error_active",children:s.editAvatar.avatar})]}),Object(n.jsx)(L,{className:"popup__submit-button",text:j?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",type:"submit",isActive:O,isLoading:j})]})})};var U=function(e){var t=e.isOpen,a=e.onClose,i=e.onOverlayClick,o=e.onCardDelete,r=e.isLoading,s=e.card,u=t?"popup_opened":"";function l(e){t&&27===e.keyCode&&a()}return Object(c.useEffect)((function(){return document.addEventListener("keydown",l),function(){document.removeEventListener("keydown",l)}})),Object(n.jsx)("div",{className:"popup popup_submit-action ".concat(u),onClick:i,children:Object(n.jsxs)("div",{className:"popup__container popup__container_type_submit-action",children:[Object(n.jsxs)("div",{className:"popup__header",children:[Object(n.jsx)("h2",{className:"popup__title",children:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?"}),Object(n.jsx)("button",{className:"popup__close-button"})]}),Object(n.jsxs)("button",{className:"popup__submit-button popup__submit-button_type_action",onClick:function(){o(s)},children:[r?"\u0423\u0434\u0430\u043b\u044f\u0435\u043c...":"\u0414\u0430"," "]})]})})};var z=function(e){var t=e.isOpen,a=e.onClose,i=e.onAddPlace,o=e.onOverlayClick,r=e.values,s=e.errors,u=e.setValues,d=e.setErrors,p=e.handleChange,j=e.isLoading,b=Object(c.useState)(!1),h=Object(l.a)(b,2),m=h[0],O=h[1];function f(e){t&&27===e.keyCode&&(a(),u(Object(C.a)(Object(C.a)({},r),{},{addCard:{}})),d(Object(C.a)(Object(C.a)({},s),{},{addCard:{}})))}return Object(c.useEffect)((function(){var e=Array.from(Object.values(r.addCard));Array.from(Object.values(s.addCard)).every((function(e){return""===e}))&&2===e.length?O(!0):O(!1)}),[s,r]),Object(c.useEffect)((function(){return document.addEventListener("keydown",f),function(){document.removeEventListener("keydown",f)}})),Object(n.jsx)(P,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",formName:"addCard",isOpen:t,onClose:function(){a(),u(Object(C.a)(Object(C.a)({},r),{},{addCard:{}})),d(Object(C.a)(Object(C.a)({},s),{},{addCard:{}}))},onSubmit:function(e){e.preventDefault(),i({name:r.addCard.placeName,link:r.addCard.placeUrl}),u(Object(C.a)(Object(C.a)({},r),{},{addCard:{}})),d(Object(C.a)(Object(C.a)({},s),{},{addCard:{}}))},onOverlayClick:o,children:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"popup__field",children:[Object(n.jsx)("input",{className:m||0!==r.addCard.placeName?"popup__input":"popup__input popup__input_type_error",name:"placeName",value:r.addCard.placeName||"",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",type:"text",minLength:"1",maxLength:"30",onChange:p,required:!0}),s.addCard.placeName&&Object(n.jsx)("span",{className:"popup__input-error popup__input-error_active",children:s.addCard.placeName})]}),Object(n.jsxs)("div",{className:"popup__field",children:[Object(n.jsx)("input",{className:m||0!==r.addCard.placeUrl?"popup__input":"popup__input popup__input_type_error",name:"placeUrl",value:r.addCard.placeUrl||"",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",type:"url",onChange:p,required:!0}),s.addCard.placeUrl&&Object(n.jsx)("span",{className:"popup__input-error popup__input-error_active",children:s.addCard.placeUrl})]}),Object(n.jsx)(L,{className:"popup__submit-button",text:j?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",type:"submit",isActive:m,isLoading:j})]})})};var D=function(e){var t=e.cards,a=e.isDataLoaded,i=e.isLoading,o=e.onEditProfile,r=e.onEditAvatar,s=e.onAddPlace,u=e.onCardClick,d=e.onCardLike,p=e.onDeleteButtonClick,j=e.card,b=e.selectedCard,h=e.closeAllPopups,m=e.closeClickOverlayPopups,O=e.handleCardDelete,f=e.handleAddPlaceSubmit,_=e.isDeleteCardPopupOpen,v=e.isEditProfilePopupOpen,N=e.isEditAvatarPopupOpen,k=e.isAddPlacePopupOpen,y=e.handleUpdateUser,P=e.handleUpdateAvatar,L=Object(c.useState)({addCard:{},editProfile:{},editAvatar:{}}),D=Object(l.a)(L,2),T=D[0],R=D[1],I=Object(c.useState)({addCard:{},editProfile:{},editAvatar:{}}),B=Object(l.a)(I,2),q=B[0],J=B[1];function V(e){R(Object(C.a)(Object(C.a)({},T),{},Object(g.a)({},e.target.form.id,Object(C.a)(Object(C.a)({},T[e.target.form.id]),{},Object(g.a)({},e.target.name,e.target.value))))),J(Object(C.a)(Object(C.a)({},q),{},Object(g.a)({},e.target.form.id,Object(C.a)(Object(C.a)({},q[e.target.form.id]),{},Object(g.a)({},e.target.name,e.target.validationMessage)))))}return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(A,{onEditProfile:o,onEditAvatar:r,onAddPlace:s,onCardClick:u,cards:t,onCardLike:d,onDeleteButtonClick:p,isLoading:i,isDataLoaded:a}),Object(n.jsx)(x,{}),Object(n.jsx)(S,{card:b,onClose:h,onOverlayClick:m}),Object(n.jsx)(U,{card:j,isOpen:_,onClose:h,onOverlayClick:m,onCardDelete:O,isLoading:i}),Object(n.jsx)(E,{isOpen:v,onClose:h,onOverlayClick:m,onUpdateUser:y,values:T,errors:q,setValues:R,setErrors:J,handleChange:V,isLoading:i}),Object(n.jsx)(w,{isOpen:N,onClose:h,onOverlayClick:m,onUpdateAvatar:P,values:T,errors:q,setValues:R,setErrors:J,handleChange:V,isLoading:i}),Object(n.jsx)(z,{isOpen:k,onClose:h,onAddPlace:f,onOverlayClick:m,values:T,errors:q,setValues:R,setErrors:J,handleChange:V,isLoading:i})]})};var T=function(e){var t=e.onRegister,a=Object(c.useState)(""),i=Object(l.a)(a,2),o=i[0],r=i[1],s=Object(c.useState)(""),u=Object(l.a)(s,2),d=u[0],p=u[1];return Object(n.jsxs)("div",{className:"authorization",children:[Object(n.jsx)("h2",{className:"authorization__heading",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(n.jsxs)("form",{className:"authorization__form",onSubmit:function(e){e.preventDefault(),t(o,d)},children:[Object(n.jsx)("div",{className:"authorization__field",children:Object(n.jsx)("input",{className:"authorization__input",id:"email",name:"email",type:"email",placeholder:"Email",value:o,onChange:function(e){r(e.target.value)},required:!0})}),Object(n.jsx)("div",{className:"authorization__field",children:Object(n.jsx)("input",{className:"authorization__input",id:"password",name:"password",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:d,onChange:function(e){p(e.target.value)},required:!0})}),Object(n.jsx)("button",{className:"authorization__button",type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(n.jsx)("a",{className:"authorization__signin-link",href:"/sign-in",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})]})};var R=function(e){var t=e.onLogin,a=Object(c.useState)(""),i=Object(l.a)(a,2),o=i[0],r=i[1],s=Object(c.useState)(""),u=Object(l.a)(s,2),d=u[0],p=u[1];return Object(n.jsxs)("div",{className:"authorization",children:[Object(n.jsx)("h2",{className:"authorization__heading",children:"\u0412\u0445\u043e\u0434"}),Object(n.jsxs)("form",{className:"authorization__form",onSubmit:function(e){e.preventDefault(),t(o,d),r(""),p("")},children:[Object(n.jsx)("div",{className:"authorization__field",children:Object(n.jsx)("input",{className:"authorization__input",name:"username",type:"email",placeholder:"Email",value:o,onChange:function(e){r(e.target.value)},required:!0})}),Object(n.jsx)("div",{className:"authorization__field",children:Object(n.jsx)("input",{className:"authorization__input",name:"password",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:d,onChange:function(e){p(e.target.value)},required:!0})}),Object(n.jsx)("button",{className:"authorization__button",type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})},I=a(25),B=function(e){var t=e.component,a=Object(I.a)(e,["component"]);return Object(n.jsx)(d.b,{children:function(){return a.loggedIn?Object(n.jsx)(t,Object(C.a)({},a)):Object(n.jsx)(d.a,{to:"./login"})}})},q=a(22),J=a(23),V=new(function(){function e(t){var a=t.baseUrl;t.headers;Object(q.a)(this,e),this._baseURL=a}return Object(J.a)(e,[{key:"_checkResStatus",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getInitialCards",value:function(e){var t=this;return fetch("".concat(this._baseURL,"/cards"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return t._checkResStatus(e)}))}},{key:"patchUserAvatar",value:function(e,t){var a=this;return fetch("".concat(this._baseURL,"/users/me/avatar"),{method:"PATCH",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify({avatar:e.avatar})}).then((function(e){return a._checkResStatus(e)}))}},{key:"patchUpdatedUserInfo",value:function(e,t){var a=this;return fetch("".concat(this._baseURL,"/users/me"),{method:"PATCH",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return a._checkResStatus(e)}))}},{key:"changeLikeCardStatus",value:function(e,t,a){var n=this;return t?fetch("".concat(this._baseURL,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(a)}}).then((function(e){return n._checkResStatus(e)})):fetch("".concat(this._baseURL,"/cards/").concat(e,"/likes"),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(a)}}).then((function(e){return n._checkResStatus(e)}))}},{key:"deleteCard",value:function(e,t){var a=this;return fetch("".concat(this._baseURL,"/cards/").concat(e),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return a._checkResStatus(e)}))}},{key:"postNewCard",value:function(e,t){var a=this;return fetch("".concat(this._baseURL,"/cards"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return a._checkResStatus(e)}))}}]),e}())({baseUrl:"https://api.netumesta.students.nomoredomains.work"}),F="https://api.netumesta.students.nomoredomains.work";var M=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),a=t[0],i=t[1],o=Object(c.useState)(!1),r=Object(l.a)(o,2),s=r[0],p=r[1],j=Object(c.useState)(!1),b=Object(l.a)(j,2),h=b[0],f=b[1],_=Object(d.g)(),g=Object(c.useState)("/sign-in"),C=Object(l.a)(g,2),x=C[0],N=C[1],k=Object(c.useState)(""),y=Object(l.a)(k,2),A=y[0],S=y[1],P=Object(c.useState)([]),L=Object(l.a)(P,2),E=L[0],w=L[1],U=Object(c.useState)(!1),z=Object(l.a)(U,2),I=z[0],q=z[1],J=Object(c.useState)(!1),M=Object(l.a)(J,2),H=M[0],W=M[1],G=Object(c.useState)(!1),K=Object(l.a)(G,2),Q=K[0],X=K[1],Y=Object(c.useState)(!1),Z=Object(l.a)(Y,2),$=Z[0],ee=Z[1],te=Object(c.useState)(!1),ae=Object(l.a)(te,2),ne=ae[0],ce=ae[1],ie=Object(c.useState)(!1),oe=Object(l.a)(ie,2),re=oe[0],se=oe[1],ue=Object(c.useState)(!1),le=Object(l.a)(ue,2),de=le[0],pe=le[1],je=Object(c.useState)({}),be=Object(l.a)(je,2),he=be[0],me=be[1];Object(c.useEffect)((function(){a&&(q(!0),V.getInitialCards(localStorage.getItem("jwt")).then((function(e){w(e.map((function(e){return{_id:e._id,owner:e.owner,name:e.name,link:e.link,likes:e.likes}}))),q(!1)})).catch((function(e){return console.log(e)})).finally((function(){return q(!1)})))}),[a]);var Oe=function(){X(!1),ee(!1),ce(!1),se(!1),pe(!1)},fe=function(){p(!0)},_e=function(){var e,t=localStorage.getItem("jwt");t&&(e=t,fetch("".concat(F,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return 400===e.status?Promise.reject("\u0422\u043e\u043a\u0435\u043d \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043d\u0435 \u0432 \u0442\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435"):401===e.status?Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: \u041f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0439 \u0442\u043e\u043a\u0435\u043d \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u0435\u043d "):e.json()})).then((function(e){return e}))).then((function(e){e&&(i(!0),S(e))})).catch((function(e){return console.log(e)}))};function ve(e){f(e)}return Object(c.useEffect)((function(){_e(),a&&(_.push("/"),N("/"))}),[a,_]),Object(n.jsx)(m.Provider,{value:A,children:Object(n.jsxs)("div",{className:"App page",children:[Object(n.jsx)(O,{loggedIn:a,handleSignOut:function(){"/sign-up"===_.location.pathname?(_.push("/sign-in"),N("/sign-in")):"/sign-in"===_.location.pathname?(_.push("/sign-up"),N("/sign-up")):(localStorage.removeItem("jwt"),i(!1),_.push("/sign-in"),N("/sign-in"))},pathName:x}),Object(n.jsxs)(d.d,{children:[Object(n.jsx)(d.b,{path:"/sign-up",children:Object(n.jsx)(T,{onRegister:function(e,t){(function(e,t){return fetch("".concat(F,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return 200===e.status?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439")})).then((function(e){return e}))})(e,t).then((function(e){400!==e.statusCode?(ve(!0),_.push("/sign-in")):ve(!1),fe()})).catch((function(e){ve(!1),fe(),console.log(e)}))}})}),Object(n.jsx)(d.b,{path:"/sign-in",children:Object(n.jsx)(R,{onLogin:function(e,t){(function(e,t){return fetch("".concat(F,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return 400===e.status?Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: \u041d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439"):401===e.status?Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 email \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"):e.json()})).then((function(e){if(e)return localStorage.setItem("jwt",e.token),e}))})(e,t).then((function(e){e.token&&i(!0)})).catch((function(e){return console.log(e)}))}})}),Object(n.jsx)(B,{path:"/",component:D,loggedIn:a,card:he,cards:E,selectedCard:de,isDataLoaded:I,isLoading:H,onEditProfile:function(){X(!0)},onEditAvatar:function(){ee(!0)},onAddPlace:function(){ce(!0)},onCardClick:function(e){pe(e)},onDeleteButtonClick:function(e){se(!0),me(e)},onCardLike:function(e){var t=e.likes.some((function(e){return e===A._id}));V.changeLikeCardStatus(e._id,t,localStorage.getItem("jwt")).then((function(t){var a=E.map((function(a){return a._id===e._id?t:a}));w(a)})).catch((function(e){return console.log(e)}))},handleUpdateUser:function(e){W(!0),V.patchUpdatedUserInfo(e,localStorage.getItem("jwt")).then((function(e){S(e),Oe()})).catch((function(e){return console.log(e)})).finally((function(){return W(!1)}))},handleUpdateAvatar:function(e){W(!0),V.patchUserAvatar(e,localStorage.getItem("jwt")).then((function(e){S(e),Oe()})).catch((function(e){return console.log(e)})).finally((function(){return W(!1)}))},handleAddPlaceSubmit:function(e){W(!0),V.postNewCard(e,localStorage.getItem("jwt")).then((function(e){w([e].concat(Object(u.a)(E))),Oe()})).catch((function(e){return console.log(e)})).finally((function(){return W(!1)}))},handleCardDelete:function(e){W(!0),V.deleteCard(e._id,localStorage.getItem("jwt")).then((function(){var t=E.filter((function(t){return t._id!==e._id}));w(t),Oe()})).catch((function(e){return console.log(e)})).finally((function(){return W(!1)}))},closeAllPopups:Oe,closeClickOverlayPopups:function(e){e.target===e.currentTarget&&Oe()},isDeleteCardPopupOpen:re,isEditProfilePopupOpen:Q,isEditAvatarPopupOpen:$,isAddPlacePopupOpen:ne}),Object(n.jsx)(d.b,{path:"/",children:a?Object(n.jsx)(d.a,{to:"/"}):Object(n.jsx)(d.a,{to:"/sign-in"})})]}),Object(n.jsx)(v,{registerSuccess:h,isOpen:s,onClose:function(){p(!1)}})]})})};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(s.a,{children:Object(n.jsx)(M,{})})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.bef6edbc.chunk.js.map