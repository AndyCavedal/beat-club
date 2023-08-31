"use strict";(self.webpackChunkbeat_club=self.webpackChunkbeat_club||[]).push([[553],{4553:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var n=r(7294),l=r(9655),a=r(2861),o=r(5452),c=r(1102);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,a,o,c=[],u=!0,i=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(c.push(n.value),c.length!==t);u=!0);}catch(e){i=!0,l=e}finally{try{if(!u&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(i)throw l}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const s=function(){var e=u((0,n.useState)(""),2),t=e[0],r=e[1],i=u((0,n.useState)(""),2),s=i[0],f=i[1],p=u((0,n.useState)(""),2),m=p[0],b=p[1],g=u((0,n.useState)(""),2),v=g[0],d=g[1],h=u((0,n.useState)(""),2),y=h[0],E=h[1],C=u((0,n.useState)([]),2),O=C[0],w=C[1],j=u((0,n.useState)([]),2),S=j[0],x=j[1];(0,n.useEffect)((function(){a.Z.get("https://server-api-beat-club.vercel.app/productos").then((function(e){x(e.data),console.log(e.data)})),a.Z.get("https://server-api-beat-club.vercel.app/categorias").then((function(e){w(e.data),console.log(e.data)}))}),[]);return n.createElement("div",{className:"supercontainer"},n.createElement("div",{className:"form__container"},n.createElement("form",null,n.createElement("label",null,"Nombre")," ",n.createElement("br",null),n.createElement("input",{placeholder:"Nombre",required:!0,onChange:function(e){return r(e.target.value)}})," ",n.createElement("br",null),n.createElement("label",null,"Precio")," ",n.createElement("br",null),n.createElement("input",{placeholder:"Precio",required:!0,onChange:function(e){return f(e.target.value)}})," ",n.createElement("br",null),n.createElement("label",null,"Descripcion")," ",n.createElement("br",null),n.createElement("input",{placeholder:"Descripcion",onChange:function(e){return b(e.target.value)}})," ",n.createElement("br",null),n.createElement("label",null,"Imagen con url")," ",n.createElement("br",null),n.createElement("input",{placeholder:"poner imagen con url",onChange:function(e){return E(e.target.value)}})," ",n.createElement("br",null),n.createElement("label",null,"Categoria")," ",n.createElement("br",null),n.createElement("select",{required:!0,onChange:function(e){return d(e.target.value)}},n.createElement("option",{value:""},"Seleccionar categoría"),O.map((function(e){return n.createElement("option",{key:e.categoria_id,value:e.categoria_id},e.nombre)}))),n.createElement("br",null),n.createElement("div",{className:"buttons-container"},n.createElement("div",{className:"text-fix"},n.createElement("button",{id:"crear-categoria__link",onClick:function(){S.find((function(e){return e.nombre===t}))?alert("Este producto ya esta cargado"):""===t||""===s||""===v?alert("campos vacio"):(a.Z.post("https://server-api-beat-club.vercel.app/productos",{nombre:t,precio:s,descripcion:m,categoria_id:v,imagen_url:y}),alert("Producto cargado"))},type:"submit"},"Crear Producto",n.createElement(o.Z,{className:"create-logo"}))),n.createElement(l.Link,{className:"text-fix",to:"/readproductos"},n.createElement("button",{id:"cerrar__link"},"Volver",n.createElement(c.Z,{className:"create-logo"})))))))}},1102:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(7294),l=r(5697),a=r.n(l),o=["color","size","title"];function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=(0,n.forwardRef)((function(e,t){var r=e.color,l=e.size,a=e.title,i=u(e,o);return n.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:l,height:l,fill:r},i),a?n.createElement("title",null,a):null,n.createElement("path",{fillRule:"evenodd",d:"M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"}))}));i.propTypes={color:a().string,size:a().oneOfType([a().string,a().number]),title:a().string},i.defaultProps={color:"currentColor",size:"1em",title:null};const s=i},5452:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(7294),l=r(5697),a=r.n(l),o=["color","size","title"];function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=(0,n.forwardRef)((function(e,t){var r=e.color,l=e.size,a=e.title,i=u(e,o);return n.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:l,height:l,fill:r},i),a?n.createElement("title",null,a):null,n.createElement("path",{d:"M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Z"}),n.createElement("path",{d:"M12.096 6.223A4.92 4.92 0 0 0 13 5.698V7c0 .289-.213.654-.753 1.007a4.493 4.493 0 0 1 1.753.25V4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16c.536 0 1.058-.034 1.555-.097a4.525 4.525 0 0 1-.813-.927C8.5 14.992 8.252 15 8 15c-1.464 0-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13h.027a4.552 4.552 0 0 1 0-1H8c-1.464 0-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10c.262 0 .52-.008.774-.024a4.525 4.525 0 0 1 1.102-1.132C9.298 8.944 8.666 9 8 9c-1.464 0-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777ZM3 4c0-.374.356-.875 1.318-1.313C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4Z"}))}));i.propTypes={color:a().string,size:a().oneOfType([a().string,a().number]),title:a().string},i.defaultProps={color:"currentColor",size:"1em",title:null};const s=i}}]);