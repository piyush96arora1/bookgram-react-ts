(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,o,t){},190:function(e,o,t){e.exports=t(323)},195:function(e,o,t){},320:function(e){e.exports={books:[{bookId:"1",bookName:"Attitude is EveryThing",bookAvatar:"https://images-na.ssl-images-amazon.com/images/I/710jnzKlDTL._AC_UL320_SR204,320_.jpg",likes:230,bookExcerpt:"Book by Joseph Murphy",review:["Very nice","Awseom book"],ratings:2,author:"Joseph Murphy"},{bookId:"2",bookName:"The Monk Who Sold his Ferrari",bookAvatar:"https://images-na.ssl-images-amazon.com/images/I/61wkAzD8geL._AC_UL320_SR208,320_.jpg",likes:230,bookExcerpt:"Book By Robin Sharma",review:["Very nice","Awseom book"],ratings:2,author:"Robin Sharma"},{bookId:"3",bookName:"How To Stop Worryin and Start Living",bookAvatar:"https://images-na.ssl-images-amazon.com/images/I/61O9uqUfQDL._AC_UL320_SR204,320_.jpg",likes:230,bookExcerpt:"A book by Dale Carniege",review:["Very nice","Awseom book"],ratings:2,author:"Dale Carneige"},{bookId:"4",bookName:"Rich Dad Poor Dad",bookAvatar:"https://images-na.ssl-images-amazon.com/images/I/91cBBjTizmL._AC_UL320_SR214,320_.jpg",likes:230,bookExcerpt:"A book by Robert T. Kiyosaki",review:["Very nice","Awseom book"],ratings:2,author:"Robert T. Kiyosaki"},{bookId:"5",bookName:"Attitude is Everything",bookAvatar:"https://images-na.ssl-images-amazon.com/images/I/710jnzKlDTL._AC_UL320_SR204,320_.jpg",likes:230,bookExcerpt:"A book by Jeff Keller",review:["Very nice","Awseom book"],ratings:2,author:"Jeff Keller"},{bookId:"6",bookName:"How To Stop Worryin and Start Living",bookAvatar:"https://images-na.ssl-images-amazon.com/images/I/61O9uqUfQDL._AC_UL320_SR204,320_.jpg",likes:230,bookExcerpt:"A book by Dale Carniege",review:["Very nice","Awseom book"],ratings:2,author:"Dale Carneige"},{bookId:"7",bookName:"Rich Dad Poor Dad",bookAvatar:"https://images-na.ssl-images-amazon.com/images/I/91cBBjTizmL._AC_UL320_SR214,320_.jpg",likes:230,bookExcerpt:"A book by Robert T. Kiyosaki",review:["Very nice","Awseom book"],ratings:2,author:"Robert T. Kiyosaki"},{bookId:"8",bookName:"Attitude is Everything",bookAvatar:"https://images-na.ssl-images-amazon.com/images/I/710jnzKlDTL._AC_UL320_SR204,320_.jpg",likes:230,bookExcerpt:"A book by Jeff Keller",review:["Very nice","Awseom book"],ratings:2,author:"Jeff Keller"},{bookId:"9",bookName:"The Monk Who Sold his Ferrari",bookAvatar:"https://images-na.ssl-images-amazon.com/images/I/61wkAzD8geL._AC_UL320_SR208,320_.jpg",likes:230,bookExcerpt:"Book By Robin Sharma",review:["Very nice","Awseom book"],ratings:2,author:"Robin Sharma"}]}},321:function(e,o,t){},323:function(e,o,t){"use strict";t.r(o);var a=t(1),n=t(15),r=t(20),i=(t(195),t(43)),s=t.n(i),l=t(47),c=t.n(l),m=t(45),k=t.n(m),u=t(46),b=t.n(u),d=t(44),g=t.n(d),p=t(17),h=t.n(p),f=t(21),v=t.n(f),w=t(28),E=t.n(w),y=function(e){var o;return a.createElement(s.a,{open:e.openDialog,disableEscapeKeyDown:!0,onClose:function(){e.onSave(o)}},a.createElement(g.a,null,e.bookData.bookName),a.createElement(k.a,null,a.createElement("div",{className:"layout-row layout-sm-column"},a.createElement("div",{className:"flex-60"},a.createElement("img",{src:e.bookData.bookAvatar})),a.createElement("div",{className:"flex-40 layout-column layout-margin layout-padding  "},a.createElement(b.a,null,e.bookData.bookExcerpt),a.createElement(v.a,{type:"text",onChange:function(t){return a=t.target.value,n=r.a({},e.bookData,{author:a}),void(o=n);var a,n},defaultValue:e.bookData.author}),e.bookData.review.map(function(e){return a.createElement(E.a,{style:{borderColor:"black",borderWidth:1,borderStyle:"dotted"}},e)}))),a.createElement(c.a,null,a.createElement(h.a,{onClick:function(){e.onSave(o)}},"Save"))))},D=(t(108),t(112)),A=t.n(D),S=t(29),C=t(111),_=t.n(C),I=function(e){function o(o){var t=e.call(this,o)||this;return t.getFileFromInput=function(e){return new Promise(function(o,t){var a=new FileReader;a.readAsDataURL(e),a.onload=function(){o(a.result)},a.onerror=t})},t.handleChange=function(e){var o=e.target.name,a=t.state.book;a[o]=e.target.value,t.setState({book:a})},t.manageUploadedFile=function(e){var o=t.state.book;o.bookAvatar=e.toString(),t.setState({book:o})},t.handleFile=function(e){e.persist(),Array.from(e.target.files).forEach(function(o){t.getFileFromInput(o).then(function(e){t.manageUploadedFile(e)}).catch(function(o){console.log("Error during upload "+o),e.target.value=""})})},t.onSave=function(){t.props.onDialogUploaderClose(t.state.book)},t.state={book:{bookAvatar:"",bookExcerpt:"",author:"",bookId:0,bookName:"",likes:0,ratings:0,review:[]}},t}return r.b(o,e),o.prototype.render=function(){var e=this;return a.createElement(S.b,{open:this.props.showUploader,scroll:"paper",disableEscapeKeyDown:!0},a.createElement("div",{className:"layout-row"},a.createElement("div",{className:"image_render"},a.createElement("img",{id:"imgid",src:this.state.book.bookAvatar})),a.createElement("div",null,a.createElement(S.d,null,a.createElement(v.a,{label:"Book Id",type:"text",value:this.state.book.bookId,name:"bookId",onChange:this.handleChange}),a.createElement(v.a,{type:"text",label:"Book name",value:this.state.book.bookName,name:"bookName",onChange:this.handleChange})),a.createElement(S.c,null,a.createElement("input",{accept:"image/*,.jpg,.png,.jpeg",style:{display:"none"},id:"file",type:"file",onChange:this.handleFile}),a.createElement("label",{htmlFor:"file"},a.createElement(S.a,{variant:"contained",color:"default",component:"span",style:{margin:8}},a.createElement(_.a,null),"Upload")),a.createElement(S.a,{style:{color:"red"},onClick:function(){e.onSave()}},"Save")))))},o}(a.Component),U=function(e){function o(o){var t=e.call(this,o)||this;return t.dialogOpner=function(){t.setState({showUploader:!0})},t.onRatingClicked=function(e,o){var a=t.state.bookData;a[t.state.bookData.findIndex(function(e){return e.bookId===o})].likes+=1,t.setState({bookData:a})},t.onDialogUploaderClose=function(e){if(0!==e.bookId){var o=t.state.bookData;o.push(e),t.setState({bookData:o,showUploader:!1})}else t.setState({showUploader:!1})},t.showDialogBox=function(e){t.setState({showDialog:!0,book:e})},t.deleteBook=function(e){var o=t.state.bookData.filter(function(o){return o.bookId!==e});t.setState({bookData:o})},t.onSave=function(e){if(null!=e){var o=t.state.bookData;o[t.state.bookData.findIndex(function(o){return o.bookId===e.bookId})].author=e.author,t.setState({bookData:o,showDialog:!1})}t.setState({showDialog:!1})},t.state={bookData:[],showDialog:!1,book:null,showUploader:!1},t}return r.b(o,e),o.prototype.componentDidMount=function(){var e=this.props.bookData;this.setState({bookData:e})},o.prototype.render=function(){var e=this,o=this.state.bookData.map(function(o){return a.createElement("div",{className:"card"},a.createElement("img",{src:o.bookAvatar}),a.createElement("div",{className:"card-content"},a.createElement("span",null,o.author),a.createElement("p",null,o.bookName),a.createElement("span",{onClick:function(t){return e.onRatingClicked(t,o.bookId)}},o.likes),a.createElement(h.a,{onClick:function(){e.showDialogBox(o)}},"Open"),a.createElement(h.a,{onClick:function(){e.deleteBook(o.bookId)}},"  ",a.createElement(A.a,null))))});return a.createElement(a.Fragment,null,this.state.book&&this.state.showDialog&&a.createElement(y,{onSave:this.onSave,bookData:this.state.book,openDialog:!0}),a.createElement("div",{className:"wrapper"},o),a.createElement(h.a,{onClick:this.dialogOpner},"Add new Book Details"),this.state.showUploader&&a.createElement(I,{showUploader:!0,onDialogUploaderClose:this.onDialogUploaderClose}))},o}(a.Component),N=function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return r.b(o,e),o.prototype.render=function(){var e=t(320).books;return a.createElement("div",{className:"App"},a.createElement("header",{className:"App-header"}),a.createElement(U,{bookData:e}))},o}(a.Component),R=(t(321),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function x(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var o=e.installing;o&&(o.onstatechange=function(){"installed"===o.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}n.render(a.createElement(N,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/bookgram-react-ts",window.location.toString()).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="/bookgram-react-ts/service-worker.js";R?(function(e){fetch(e).then(function(o){404===o.status||-1===o.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):x(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):x(e)})}}()}},[[190,2,1]]]);
//# sourceMappingURL=main.dba52019.chunk.js.map