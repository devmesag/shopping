(this["webpackJsonpfront-end-test"]=this["webpackJsonpfront-end-test"]||[]).push([[0],{41:function(t,e,n){},42:function(t,e,n){},43:function(t,e,n){},50:function(t,e,n){},51:function(t,e,n){},72:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(0),s=n.n(r),a=n(10),o=n.n(a),u=(n(41),n(6)),d=n(14),i=n(3),l=n(11),j=(n(42),n(43),n(9));n(50);function b(t){return Object(c.jsx)("div",{className:"box-counter",children:Object(c.jsx)("h1",{className:" counter ",children:t.counter?t.counter:0})})}function x(t){return Object(c.jsx)("header",{className:"site-header p-6 mb-4 rounded-b-3xl bg-blue-600 text-center text-white text-4xl font-extrabold",children:Object(c.jsx)(b,{counter:t.counter})})}function m(t){var e=t.value,n=t.name,r=t.productId,s=t.min,a=t.max;return Object(c.jsx)(c.Fragment,{children:t.adjust?Object(c.jsxs)("div",{className:["input-item inline-flex",t.className].join(" "),children:[Object(c.jsx)("button",{className:"runSlide py-2 px-2 sm:px-4 bg-red-500 hover:bg-red-700 focus:outline-none border border-red-500 rounded-l-lg text-white font-bold text-xl",onClick:function(){e>s&&(t.productRemoved(),document.addEventListener("click",h("right"),!1))},children:"-"}),Object(c.jsx)("input",{min:s,max:a,name:n,id:r,readOnly:!0,type:"text",value:t.value,className:"w-full py-2 bg-gray-200 hover:bg-gray-400 disabled:opacity-75 focus:outline-none text-gray-600 text-center font-extrabold select-none"}),Object(c.jsx)("button",{className:"runSlide py-2 px-2 sm:px-4 bg-green-500 hover:bg-green-700  focus:outline-none  border border-green-500 rounded-r-lg text-white font-bold text-xl",onClick:function(){e<a&&(t.productAdded(),document.addEventListener("click",h("left"),!1))},children:"+"})]}):Object(c.jsx)("div",{className:["input-item inline-flex",t.className].join(" "),children:Object(c.jsx)("input",{min:s,max:a,name:n,id:r,readOnly:!0,type:"text",value:t.value,className:"w-full py-2 bg-gray-200 hover:bg-gray-400 disabled:opacity-75 focus:outline-none text-red-600 text-center font-extrabold select-none"})})})}function h(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"left";document.querySelector(".box-counter").className="box-counter",window.requestAnimationFrame((function(e){window.requestAnimationFrame((function(e){document.querySelector(".box-counter").className="box-counter changing-".concat(t)}))}))}m.defaultProps={min:0,max:0};n(51);function p(t){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:["bg-gray-200 hover:bg-gray-400",t.className].join(" "),children:Object(c.jsx)("span",{className:"productName",id:"product-name-".concat(t.productId),children:t.product?t.product:"-"})})})}var g="ADD_PRODUCT",f="REMOVE_PRODUCT",O="SET_PRODUCTS",P="FETCH_PRODUCTS_FAILED",v="STATUS_PRODUCTS",y="PURCHASE_PRODUCT_START",N="PURCHASE_PRODUCT_SUCCESS",w="PURCHASE_PRODUCT_FAIL",T="PURCHASE_INIT_CHECKOUT",k="SET_PRODUCTS_PURCHASE",C="STATUS_PRODUCTS_PURCHASE",S=n(34),E=n.n(S);n(31);var F=function(t){if(t){var e;if(!navigator.onLine)return e=Object(c.jsx)("div",{children:"Please check your internet connection."}),l.c.error(e),Promise.reject(t);if(t.response)return e=Object(c.jsxs)("div",{children:[t.response.status," ",t.response.statusText," ",Object(c.jsx)("br",{})," [",t.response.data.message,"]"]}),l.c.error(e),Promise.reject(t)}},_=E.a.create({baseURL:"".concat("https://jsonplaceholder.typicode.com")});_.interceptors.response.use((function(t){return t}),F);var I=_,R=function(){return I.get("/todos")},U=function(){return function(t){R().then((function(e){var n={message:"Berhasil Mengunduh Data",products:e.data};t(function(t){return{type:O,message:t.message,products:t.products}}(n))})).catch((function(e){t(function(t){return{type:P,message:t.message}}({message:"Gagal Mengunduh Data, silahkan coba beberapa saat lagi"}))}))}},D=function(t){return function(t){var e;t({type:y}),t({type:N}),e=Object(c.jsx)("div",{children:"Selamat, Pembelian anda berhasil dilakukan."}),l.c.success(e,{transition:l.b,autoClose:3e3,hideProgressBar:!0})}},A=function(t){return{type:T,products:t.products,totalProductPurchase:t.totalProductPurchase}},L=function(){return function(t){t({type:k})}};var H=Object(i.g)((function(t){var e=Object(j.b)(),n=function(t){e(function(t){return{type:g,productId:t.id}}({id:t}))},r=function(t){e(function(t){return{type:f,productId:t.id}}({id:t}))};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("span",{className:"w-2/12 sm:w-1/12 p-2 bg-gray-200 hover:bg-gray-400 text-gray-800 text-center text-bold",children:t.countering}),Object(c.jsx)(p,{className:"w-6/12 sm:w-8/12 p-2 text-gray-800 text-left text-bold",name:t.productId,productId:t.productId,product:t.product}),Object(c.jsx)(m,{className:"w-4/12 sm:w-3/12 justify-between text-center",max:t.max,name:"barang-".concat(t.productId),productId:t.productId,quantity:t.quantity,value:t.value,productAdded:function(){return n(t.productId)},productRemoved:function(){return r(t.productId)},adjust:t.adjust})]})}));function q(t){return Object(c.jsx)("footer",{className:"site-footer p-6 mt-4 bg-blue-600 text-center",children:Object(c.jsx)("span",{className:"text-white text-4xl font-extrabold",children:"Happy Shopping !!"})})}function B(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("section",{className:"z-10 flex flex-col justify-center items-center h-screen",children:Object(c.jsx)("h1",{className:"animate-pulse ease duration-500 mt-12 text-3xl text-gray-900",children:"Please wait ..."})})})}var M=Object(i.g)((function(t){var e,n,s=t.history,a=Object(j.b)(),o=Object(j.c)((function(t){return t.product})),u=Object(j.c)((function(t){return t.order}));return Object(r.useEffect)((function(){document.title="Front End || Product List Page",window.scroll(0,0),u.backProduct||(a({type:v,status:"loading"}),a(U()))}),[a,u.backProduct]),Object(c.jsxs)(c.Fragment,{children:["loading"===o.status&&Object(c.jsx)(B,{}),Object(c.jsxs)("div",{className:"site-container",children:[Object(c.jsx)(x,{counter:o.totalProductPurchase}),Object(c.jsxs)("main",{className:"site-content",children:[Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"m-4",children:Object(c.jsx)("span",{className:"text-gray-800 text-3xl font-extrabold",children:"Product List"})})}),"error"===o.status&&Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("span",{className:"text-center text-xl",children:Object(c.jsx)("h1",{children:o.message})})}),"ok"===o.status&&(o.totalProduct>0?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"flex m-4 gap-2 text-center font-bold text-gray-800",children:[Object(c.jsx)("span",{className:"w-2/12 sm:w-1/12 py-2 bg-gray-400",children:"No"}),Object(c.jsx)("span",{className:"w-6/12 sm:w-8/12 py-2 bg-gray-400",children:"Product"}),Object(c.jsx)("span",{className:"w-4/12 sm:w-3/12  py-2 bg-gray-400",children:"Total"})]}),null===(e=Object.values(o.products))||void 0===e||null===(n=e.map)||void 0===n?void 0:n.call(e,(function(t,e){return Object(c.jsx)("div",{className:"ListProductItem hover:bg-blue-400 flex m-4 gap-2",children:Object(c.jsx)(H,{product:t.title,productId:t.id,value:o.products[e].totalPurchase,quantity:0,max:99,adjust:!0,countering:e+1})},e)})),Object(c.jsxs)("p",{className:"m-5 text-gray-700 font-bold text-xl",children:["Total Product : ",o.totalProduct]})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("p",{className:"m-5 text-red-700 text-center text-2xl font-bold",children:"Data Tidak Tersedia."}),Object(c.jsxs)("p",{className:"m-5 text-gray-700 font-bold text-xl",children:["Total Product : ",o.totalProduct]})]})),Object(c.jsx)("div",{className:"flex justify-end m-5",children:"ok"===o.status&&Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 focus:outline-none p-3 m-0 text-white font-medium rounded",onClick:function(){var t={products:o.products,totalProductPurchase:o.totalProductPurchase};a(function(t){return function(e){var n;e(A(t)),n=Object(c.jsx)("div",{children:"Harap periksa kembali, barang pembelian anda."}),l.c.warning(n,{transition:l.b,autoClose:3e3,hideProgressBar:!0})}}(t)),s.push("/checkout")},children:"Checkout"})})})]}),Object(c.jsx)(q,{})]})]})}));var X=Object(i.g)((function(t){var e,n,s=t.history,a=Object(j.b)(),o=Object(j.c)((function(t){return t.order}));Object(r.useEffect)((function(){document.title="Front End || Checkout Page",window.scroll(0,0),a({type:C,status:"loading"}),a(L())}),[a]);var u=o.purchased?Object(c.jsx)(i.a,{to:"/"}):null;return Object(c.jsxs)(c.Fragment,{children:[u,"loading"===o.status&&Object(c.jsx)(B,{}),Object(c.jsxs)("div",{className:"site-container",children:[Object(c.jsx)(x,{counter:o.totalProductPurchase}),Object(c.jsxs)("main",{className:"site-content",children:[Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"m-4",children:Object(c.jsx)("span",{className:"text-gray-800 text-3xl font-extrabold",children:"Product List"})})}),"error"===o.status&&Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("span",{className:"text-center text-xl",children:Object(c.jsx)("h1",{children:o.message})})}),"ok"===o.status&&(o.totalProductPurchase>0?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"flex m-4 gap-2 text-center font-bold text-gray-800",children:[Object(c.jsx)("span",{className:"w-2/12 sm:w-1/12 py-2 bg-gray-400",children:"No"}),Object(c.jsx)("span",{className:"w-6/12 sm:w-8/12 py-2 bg-gray-400",children:"Product"}),Object(c.jsx)("span",{className:"w-4/12 sm:w-3/12 py-2 bg-gray-400",children:"Total"})]}),null===(e=Object.values(o.orders))||void 0===e||null===(n=e.map)||void 0===n?void 0:n.call(e,(function(t,e){return Object(c.jsx)("div",{className:"ListProductItem hover:bg-blue-400 flex m-4 gap-2",children:Object(c.jsx)(H,{product:t.title,productId:t.id,value:o.orders[e].totalPurchase,quantity:0,max:99,adjust:!1,countering:e+1})},e)})),Object(c.jsxs)("p",{className:"m-5 text-gray-700 font-bold text-xl",children:["Total Product : ",o.totalProductPurchase]})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("p",{className:"m-5 text-red-700 text-center text-2xl font-bold",children:"Data Tidak Tersedia."}),Object(c.jsxs)("p",{className:"m-5 text-gray-700 font-bold text-xl",children:["Total Product : ",o.totalProductPurchase]})]})),Object(c.jsxs)("div",{className:"flex justify-between m-5",children:[Object(c.jsx)("button",{className:"bg-orange-500 hover:bg-orange-700 focus:outline-none p-3 m-0 text-white font-medium rounded",onClick:function(){s.goBack()},children:"Back"}),"ok"===o.status&&o.totalProductPurchase>0?Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 focus:outline-none p-3 m-0 text-white font-medium rounded",onClick:function(){a(D())},children:"Beli"})}):Object(c.jsx)(c.Fragment,{})]})]}),Object(c.jsx)(q,{})]})]})})),V=n.p+"static/media/notfound.41d99d1f.jpg";function J(){return Object(r.useEffect)((function(){document.title="Front End || Not Found Page",window.scroll(0,0)}),[]),Object(c.jsxs)("section",{className:"flex flex-col items-center h-screen",children:[Object(c.jsx)("img",{className:"object-contain h-48 sm:h-96 w-full",src:V,alt:"Oops we lost you"}),Object(c.jsx)("h1",{className:"mt-12 text-3xl text-gray-900",children:"Opps! We're lost"}),Object(c.jsx)("p",{className:"mx-auto mt-4 text-lg text-center text-gray-600 mtb-8 lg:w-3/12 xl:w-2/12",children:"The page that you requested is not found in our system"}),Object(c.jsx)(d.b,{className:"px-6 py-3 mt-5 text-white transition-all duration-200 bg-red-500 shadow-inner hover:bg-red-400 focus:outline-none",to:"/",children:"Back to home"})]})}var z=function(){var t=Object(u.a)({basename:"/shopping"});return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(d.a,{history:t,children:Object(c.jsxs)(i.d,{children:[Object(c.jsx)(i.b,{exact:!0,path:"/",component:M}),Object(c.jsx)(i.b,{exact:!0,path:"/checkout",component:X}),Object(c.jsx)(i.b,{path:"*",component:J})]})}),Object(c.jsx)(l.a,{})]})},G=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,75)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),c(t),r(t),s(t),a(t)}))},K=n(13),W=n(35),Q=n(21),Y=function(t,e){return Object(Q.a)(Object(Q.a)({},t),e)},Z={orders:[],totalProductPurchase:0,loading:!1,purchased:!1,backProduct:!1},$=function(t,e){var n={orders:e.products.filter((function(t){return t.totalPurchase>0})),totalProductPurchase:e.totalProductPurchase,purchased:!1,backProduct:!0};return Y(t,n)},tt=function(t,e){return Y(t,{loading:!1})},et=function(t,e){return Y(t,{loading:!1,purchased:!0,backProduct:!1})},nt=function(t,e){return Y(t,{loading:!1})},ct=function(t,e){return Y(t,{status:"ok",message:e.message,error:!1,loading:!1})},rt=function(t,e){return Y(t,{status:e.status})},st=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case T:return $(t,e);case y:return tt(t);case N:return et(t);case w:return nt(t);case k:return ct(t,e);case C:return rt(t,e);default:return t}},at={products:null,totalProduct:0,totalProductPurchase:0,status:"idle",message:"",fetch:!0,error:!1},ot=function(t,e){var n=t.products.findIndex((function(t){return t.id===e.productId}));t.products[n].totalPurchase+=1;var c={products:t.products,totalProductPurchase:t.totalProductPurchase+1};return Y(t,c)},ut=function(t,e){var n=t.products.findIndex((function(t){return t.id===e.productId}));t.products[n].totalPurchase-=1;var c={products:t.products,totalProductPurchase:t.totalProductPurchase-1};return Y(t,c)},dt=function(t,e){var n,c;return Y(t,{products:e.products.map((function(t){return t.totalPurchase=0,t})),totalProduct:null!==(n=null===(c=e.products)||void 0===c?void 0:c.length)&&void 0!==n?n:0,totalProductPurchase:0,status:"ok",message:e.message,error:!1})},it=function(t,e){return Y(t,{status:"error",message:e.message,error:!0})},lt=function(t,e){return Y(t,{status:e.status})},jt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case g:return ot(t,e);case f:return ut(t,e);case O:return dt(t,e);case P:return it(t,e);case v:return lt(t,e);default:return t}},bt=Object(K.c)({order:st,product:jt}),xt=[W.a],mt=Object(K.e)(bt,{},Object(K.d)(K.a.apply(void 0,xt),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(t){return t}));o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(j.a,{store:mt,children:Object(c.jsx)(z,{})})}),document.getElementById("root")),G()}},[[72,1,2]]]);
//# sourceMappingURL=main.eecf143a.chunk.js.map