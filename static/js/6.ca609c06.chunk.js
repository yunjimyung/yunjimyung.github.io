/*! For license information please see 6.ca609c06.chunk.js.LICENSE.txt */
(this["webpackJsonpstarter-bt5"]=this["webpackJsonpstarter-bt5"]||[]).push([[6],{154:function(e,t,r){var i,n,s;n=[],i=function e(){"use strict";var t="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:{},r=!t.document&&!!t.postMessage,i=t.IS_PAPA_WORKER||!1,n={},s=0,a={parse:function(r,i){var o=(i=i||{}).dynamicTyping||!1;if(k(o)&&(i.dynamicTypingFunction=o,o={}),i.dynamicTyping=o,i.transform=!!k(i.transform)&&i.transform,i.worker&&a.WORKERS_SUPPORTED){var h=function(){if(!a.WORKERS_SUPPORTED)return!1;var r,i,o=(r=t.URL||t.webkitURL||null,i=e.toString(),a.BLOB_URL||(a.BLOB_URL=r.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",i,")();"],{type:"text/javascript"})))),h=new t.Worker(o);return h.onmessage=_,h.id=s++,n[h.id]=h}();return h.userStep=i.step,h.userChunk=i.chunk,h.userComplete=i.complete,h.userError=i.error,i.step=k(i.step),i.chunk=k(i.chunk),i.complete=k(i.complete),i.error=k(i.error),delete i.worker,void h.postMessage({input:r,config:i,workerId:h.id})}var l=null;return a.NODE_STREAM_INPUT,"string"==typeof r?(r=function(e){return 65279===e.charCodeAt(0)?e.slice(1):e}(r),l=i.download?new u(i):new f(i)):!0===r.readable&&k(r.read)&&k(r.on)?l=new c(i):(t.File&&r instanceof File||r instanceof Object)&&(l=new d(i)),l.stream(r)},unparse:function(e,t){var r=!1,i=!0,n=",",s="\r\n",o='"',h=o+o,u=!1,d=null,f=!1;!function(){if("object"==typeof t){if("string"!=typeof t.delimiter||a.BAD_DELIMITERS.filter((function(e){return-1!==t.delimiter.indexOf(e)})).length||(n=t.delimiter),("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(r=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(u=t.skipEmptyLines),"string"==typeof t.newline&&(s=t.newline),"string"==typeof t.quoteChar&&(o=t.quoteChar),"boolean"==typeof t.header&&(i=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");d=t.columns}void 0!==t.escapeChar&&(h=t.escapeChar+o),("boolean"==typeof t.escapeFormulae||t.escapeFormulae instanceof RegExp)&&(f=t.escapeFormulae instanceof RegExp?t.escapeFormulae:/^[=+\-@\t\r].*$/)}}();var c=new RegExp(p(o),"g");if("string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return l(null,e,u);if("object"==typeof e[0])return l(d||Object.keys(e[0]),e,u)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||d),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:"object"==typeof e.data[0]?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),l(e.fields||[],e.data||[],u);throw new Error("Unable to serialize unrecognized input");function l(e,t,r){var a="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var o=Array.isArray(e)&&0<e.length,h=!Array.isArray(t[0]);if(o&&i){for(var u=0;u<e.length;u++)0<u&&(a+=n),a+=g(e[u],u);0<t.length&&(a+=s)}for(var d=0;d<t.length;d++){var f=o?e.length:t[d].length,c=!1,l=o?0===Object.keys(t[d]).length:0===t[d].length;if(r&&!o&&(c="greedy"===r?""===t[d].join("").trim():1===t[d].length&&0===t[d][0].length),"greedy"===r&&o){for(var p=[],_=0;_<f;_++){var m=h?e[_]:_;p.push(t[d][m])}c=""===p.join("").trim()}if(!c){for(var y=0;y<f;y++){0<y&&!l&&(a+=n);var v=o&&h?e[y]:y;a+=g(t[d][v],y)}d<t.length-1&&(!r||0<f&&!l)&&(a+=s)}}return a}function g(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);var i=!1;f&&"string"==typeof e&&f.test(e)&&(e="'"+e,i=!0);var s=e.toString().replace(c,h);return(i=i||!0===r||"function"==typeof r&&r(e,t)||Array.isArray(r)&&r[t]||function(e,t){for(var r=0;r<t.length;r++)if(-1<e.indexOf(t[r]))return!0;return!1}(s,a.BAD_DELIMITERS)||-1<s.indexOf(n)||" "===s.charAt(0)||" "===s.charAt(s.length-1))?o+s+o:s}}};if(a.RECORD_SEP=String.fromCharCode(30),a.UNIT_SEP=String.fromCharCode(31),a.BYTE_ORDER_MARK="\ufeff",a.BAD_DELIMITERS=["\r","\n",'"',a.BYTE_ORDER_MARK],a.WORKERS_SUPPORTED=!r&&!!t.Worker,a.NODE_STREAM_INPUT=1,a.LocalChunkSize=10485760,a.RemoteChunkSize=5242880,a.DefaultDelimiter=",",a.Parser=g,a.ParserHandle=l,a.NetworkStreamer=u,a.FileStreamer=d,a.StringStreamer=f,a.ReadableStreamStreamer=c,t.jQuery){var o=t.jQuery;o.fn.parse=function(e){var r=e.config||{},i=[];return this.each((function(e){if("INPUT"!==o(this).prop("tagName").toUpperCase()||"file"!==o(this).attr("type").toLowerCase()||!t.FileReader||!this.files||0===this.files.length)return!0;for(var n=0;n<this.files.length;n++)i.push({file:this.files[n],inputElem:this,instanceConfig:o.extend({},r)})})),n(),this;function n(){if(0!==i.length){var t,r,n,h,u=i[0];if(k(e.before)){var d=e.before(u.file,u.inputElem);if("object"==typeof d){if("abort"===d.action)return t="AbortError",r=u.file,n=u.inputElem,h=d.reason,void(k(e.error)&&e.error({name:t},r,n,h));if("skip"===d.action)return void s();"object"==typeof d.config&&(u.instanceConfig=o.extend(u.instanceConfig,d.config))}else if("skip"===d)return void s()}var f=u.instanceConfig.complete;u.instanceConfig.complete=function(e){k(f)&&f(e,u.file,u.inputElem),s()},a.parse(u.file,u.instanceConfig)}else k(e.complete)&&e.complete()}function s(){i.splice(0,1),n()}}}function h(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=v(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new l(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,r){if(this.isFirstChunk&&k(this._config.beforeFirstChunk)){var n=this._config.beforeFirstChunk(e);void 0!==n&&(e=n)}this.isFirstChunk=!1,this._halted=!1;var s=this._partialLine+e;this._partialLine="";var o=this._handle.parse(s,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var h=o.meta.cursor;this._finished||(this._partialLine=s.substring(h-this._baseIndex),this._baseIndex=h),o&&o.data&&(this._rowCount+=o.data.length);var u=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(i)t.postMessage({results:o,workerId:a.WORKER_ID,finished:u});else if(k(this._config.chunk)&&!r){if(this._config.chunk(o,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);o=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(o.data),this._completeResults.errors=this._completeResults.errors.concat(o.errors),this._completeResults.meta=o.meta),this._completed||!u||!k(this._config.complete)||o&&o.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),u||o&&o.meta.paused||this._nextChunk(),o}this._halted=!0},this._sendError=function(e){k(this._config.error)?this._config.error(e):i&&this._config.error&&t.postMessage({workerId:a.WORKER_ID,error:e,finished:!1})}}function u(e){var t;(e=e||{}).chunkSize||(e.chunkSize=a.RemoteChunkSize),h.call(this,e),this._nextChunk=r?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),r||(t.onload=b(this._chunkLoaded,this),t.onerror=b(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!r),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var i in e)t.setRequestHeader(i,e[i])}if(this._config.chunkSize){var n=this._start+this._config.chunkSize-1;t.setRequestHeader("Range","bytes="+this._start+"-"+n)}try{t.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}r&&0===t.status&&this._chunkError()}},this._chunkLoaded=function(){4===t.readyState&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:t.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(e){var t=e.getResponseHeader("Content-Range");return null===t?-1:parseInt(t.substring(t.lastIndexOf("/")+1))}(t),this.parseChunk(t.responseText)))},this._chunkError=function(e){var r=t.statusText||e;this._sendError(new Error(r))}}function d(e){var t,r;(e=e||{}).chunkSize||(e.chunkSize=a.LocalChunkSize),h.call(this,e);var i="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,r=e.slice||e.webkitSlice||e.mozSlice,i?((t=new FileReader).onload=b(this._chunkLoaded,this),t.onerror=b(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var n=Math.min(this._start+this._config.chunkSize,this._input.size);e=r.call(e,this._start,n)}var s=t.readAsText(e,this._config.encoding);i||this._chunkLoaded({target:{result:s}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function f(e){var t;h.call(this,e=e||{}),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,r=this._config.chunkSize;return r?(e=t.substring(0,r),t=t.substring(r)):(e=t,t=""),this._finished=!t,this.parseChunk(e)}}}function c(e){h.call(this,e=e||{});var t=[],r=!0,i=!1;this.pause=function(){h.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){h.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){i&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):r=!0},this._streamData=b((function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}}),this),this._streamError=b((function(e){this._streamCleanUp(),this._sendError(e)}),this),this._streamEnd=b((function(){this._streamCleanUp(),i=!0,this._streamData("")}),this),this._streamCleanUp=b((function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)}),this)}function l(e){var t,r,i,n=Math.pow(2,53),s=-n,o=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,h=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,u=this,d=0,f=0,c=!1,l=!1,_=[],m={data:[],errors:[],meta:{}};if(k(e.step)){var y=e.step;e.step=function(t){if(m=t,E())w();else{if(w(),0===m.data.length)return;d+=t.data.length,e.preview&&d>e.preview?r.abort():(m.data=m.data[0],y(m,u))}}}function b(t){return"greedy"===e.skipEmptyLines?""===t.join("").trim():1===t.length&&0===t[0].length}function w(){return m&&i&&(C("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+a.DefaultDelimiter+"'"),i=!1),e.skipEmptyLines&&(m.data=m.data.filter((function(e){return!b(e)}))),E()&&function(){if(m)if(Array.isArray(m.data[0])){for(var t=0;E()&&t<m.data.length;t++)m.data[t].forEach(r);m.data.splice(0,1)}else m.data.forEach(r);function r(t,r){k(e.transformHeader)&&(t=e.transformHeader(t,r)),_.push(t)}}(),function(){if(!m||!e.header&&!e.dynamicTyping&&!e.transform)return m;function t(t,r){var i,n=e.header?{}:[];for(i=0;i<t.length;i++){var s=i,a=t[i];e.header&&(s=i>=_.length?"__parsed_extra":_[i]),e.transform&&(a=e.transform(a,s)),a=O(s,a),"__parsed_extra"===s?(n[s]=n[s]||[],n[s].push(a)):n[s]=a}return e.header&&(i>_.length?C("FieldMismatch","TooManyFields","Too many fields: expected "+_.length+" fields but parsed "+i,f+r):i<_.length&&C("FieldMismatch","TooFewFields","Too few fields: expected "+_.length+" fields but parsed "+i,f+r)),n}var r=1;return!m.data.length||Array.isArray(m.data[0])?(m.data=m.data.map(t),r=m.data.length):m.data=t(m.data,0),e.header&&m.meta&&(m.meta.fields=_),f+=r,m}()}function E(){return e.header&&0===_.length}function O(t,r){return i=t,e.dynamicTypingFunction&&void 0===e.dynamicTyping[i]&&(e.dynamicTyping[i]=e.dynamicTypingFunction(i)),!0===(e.dynamicTyping[i]||e.dynamicTyping)?"true"===r||"TRUE"===r||"false"!==r&&"FALSE"!==r&&(function(e){if(o.test(e)){var t=parseFloat(e);if(s<t&&t<n)return!0}return!1}(r)?parseFloat(r):h.test(r)?new Date(r):""===r?null:r):r;var i}function C(e,t,r,i){var n={type:e,code:t,message:r};void 0!==i&&(n.row=i),m.errors.push(n)}this.parse=function(n,s,o){var h=e.quoteChar||'"';if(e.newline||(e.newline=function(e,t){e=e.substring(0,1048576);var r=new RegExp(p(t)+"([^]*?)"+p(t),"gm"),i=(e=e.replace(r,"")).split("\r"),n=e.split("\n"),s=1<n.length&&n[0].length<i[0].length;if(1===i.length||s)return"\n";for(var a=0,o=0;o<i.length;o++)"\n"===i[o][0]&&a++;return a>=i.length/2?"\r\n":"\r"}(n,h)),i=!1,e.delimiter)k(e.delimiter)&&(e.delimiter=e.delimiter(n),m.meta.delimiter=e.delimiter);else{var u=function(t,r,i,n,s){var o,h,u,d;s=s||[",","\t","|",";",a.RECORD_SEP,a.UNIT_SEP];for(var f=0;f<s.length;f++){var c=s[f],l=0,p=0,_=0;u=void 0;for(var m=new g({comments:n,delimiter:c,newline:r,preview:10}).parse(t),y=0;y<m.data.length;y++)if(i&&b(m.data[y]))_++;else{var v=m.data[y].length;p+=v,void 0!==u?0<v&&(l+=Math.abs(v-u),u=v):u=v}0<m.data.length&&(p/=m.data.length-_),(void 0===h||l<=h)&&(void 0===d||d<p)&&1.99<p&&(h=l,o=c,d=p)}return{successful:!!(e.delimiter=o),bestDelimiter:o}}(n,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess);u.successful?e.delimiter=u.bestDelimiter:(i=!0,e.delimiter=a.DefaultDelimiter),m.meta.delimiter=e.delimiter}var d=v(e);return e.preview&&e.header&&d.preview++,t=n,r=new g(d),m=r.parse(t,s,o),w(),c?{meta:{paused:!0}}:m||{meta:{paused:!1}}},this.paused=function(){return c},this.pause=function(){c=!0,r.abort(),t=k(e.chunk)?"":t.substring(r.getCharIndex())},this.resume=function(){u.streamer._halted?(c=!1,u.streamer.parseChunk(t,!0)):setTimeout(u.resume,3)},this.aborted=function(){return l},this.abort=function(){l=!0,r.abort(),m.meta.aborted=!0,k(e.complete)&&e.complete(m),t=""}}function p(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function g(e){var t,r=(e=e||{}).delimiter,i=e.newline,n=e.comments,s=e.step,o=e.preview,h=e.fastMode,u=t=void 0===e.quoteChar||null===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(u=e.escapeChar),("string"!=typeof r||-1<a.BAD_DELIMITERS.indexOf(r))&&(r=","),n===r)throw new Error("Comment character same as delimiter");!0===n?n="#":("string"!=typeof n||-1<a.BAD_DELIMITERS.indexOf(n))&&(n=!1),"\n"!==i&&"\r"!==i&&"\r\n"!==i&&(i="\n");var d=0,f=!1;this.parse=function(a,c,l){if("string"!=typeof a)throw new Error("Input must be a string");var g=a.length,_=r.length,m=i.length,y=n.length,v=k(s),b=[],w=[],E=[],O=d=0;if(!a)return J();if(e.header&&!c){var C=a.split(i)[0].split(r),R=[],x={},S=!1;for(var j in C){var I=C[j];k(e.transformHeader)&&(I=e.transformHeader(I,j));var T=I,A=x[I]||0;for(0<A&&(S=!0,T=I+"_"+A),x[I]=A+1;R.includes(T);)T=T+"_"+A;R.push(T)}if(S){var D=a.split(i);D[0]=R.join(r),a=D.join(i)}}if(h||!1!==h&&-1===a.indexOf(t)){for(var L=a.split(i),F=0;F<L.length;F++){if(E=L[F],d+=E.length,F!==L.length-1)d+=i.length;else if(l)return J();if(!n||E.substring(0,y)!==n){if(v){if(b=[],B(E.split(r)),Q(),f)return J()}else B(E.split(r));if(o&&o<=F)return b=b.slice(0,o),J(!0)}}return J()}for(var z=a.indexOf(r,d),M=a.indexOf(i,d),P=new RegExp(p(u)+p(t),"g"),U=a.indexOf(t,d);;)if(a[d]!==t)if(n&&0===E.length&&a.substring(d,d+y)===n){if(-1===M)return J();d=M+m,M=a.indexOf(i,d),z=a.indexOf(r,d)}else if(-1!==z&&(z<M||-1===M))E.push(a.substring(d,z)),d=z+_,z=a.indexOf(r,d);else{if(-1===M)break;if(E.push(a.substring(d,M)),H(M+m),v&&(Q(),f))return J();if(o&&b.length>=o)return J(!0)}else for(U=d,d++;;){if(-1===(U=a.indexOf(t,U+1)))return l||w.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:b.length,index:d}),W();if(U===g-1)return W(a.substring(d,U).replace(P,t));if(t!==u||a[U+1]!==u){if(t===u||0===U||a[U-1]!==u){-1!==z&&z<U+1&&(z=a.indexOf(r,U+1)),-1!==M&&M<U+1&&(M=a.indexOf(i,U+1));var q=K(-1===M?z:Math.min(z,M));if(a.substr(U+1+q,_)===r){E.push(a.substring(d,U).replace(P,t)),a[d=U+1+q+_]!==t&&(U=a.indexOf(t,d)),z=a.indexOf(r,d),M=a.indexOf(i,d);break}var N=K(M);if(a.substring(U+1+N,U+1+N+m)===i){if(E.push(a.substring(d,U).replace(P,t)),H(U+1+N+m),z=a.indexOf(r,d),U=a.indexOf(t,d),v&&(Q(),f))return J();if(o&&b.length>=o)return J(!0);break}w.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:b.length,index:d}),U++}}else U++}return W();function B(e){b.push(e),O=d}function K(e){var t=0;if(-1!==e){var r=a.substring(U+1,e);r&&""===r.trim()&&(t=r.length)}return t}function W(e){return l||(void 0===e&&(e=a.substring(d)),E.push(e),d=g,B(E),v&&Q()),J()}function H(e){d=e,B(E),E=[],M=a.indexOf(i,d)}function J(e){return{data:b,errors:w,meta:{delimiter:r,linebreak:i,aborted:f,truncated:!!e,cursor:O+(c||0)}}}function Q(){s(J()),b=[],w=[]}},this.abort=function(){f=!0},this.getCharIndex=function(){return d}}function _(e){var t=e.data,r=n[t.workerId],i=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var s={abort:function(){i=!0,m(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:y,resume:y};if(k(r.userStep)){for(var a=0;a<t.results.data.length&&(r.userStep({data:t.results.data[a],errors:t.results.errors,meta:t.results.meta},s),!i);a++);delete t.results}else k(r.userChunk)&&(r.userChunk(t.results,s,t.file),delete t.results)}t.finished&&!i&&m(t.workerId,t.results)}function m(e,t){var r=n[e];k(r.userComplete)&&r.userComplete(t),r.terminate(),delete n[e]}function y(){throw new Error("Not implemented.")}function v(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var r in e)t[r]=v(e[r]);return t}function b(e,t){return function(){e.apply(t,arguments)}}function k(e){return"function"==typeof e}return i&&(t.onmessage=function(e){var r=e.data;if(void 0===a.WORKER_ID&&r&&(a.WORKER_ID=r.workerId),"string"==typeof r.input)t.postMessage({workerId:a.WORKER_ID,results:a.parse(r.input,r.config),finished:!0});else if(t.File&&r.input instanceof File||r.input instanceof Object){var i=a.parse(r.input,r.config);i&&t.postMessage({workerId:a.WORKER_ID,results:i,finished:!0})}}),(u.prototype=Object.create(h.prototype)).constructor=u,(d.prototype=Object.create(h.prototype)).constructor=d,(f.prototype=Object.create(f.prototype)).constructor=f,(c.prototype=Object.create(h.prototype)).constructor=c,a},void 0===(s="function"===typeof i?i.apply(t,n):i)||(e.exports=s)},156:function(e,t,r){"use strict";r.r(t);var i=r(7),n=r(0),s=r(154),a=r.n(s),o=r(37),h=r(8);t.default=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),r=t[0],s=t[1];return Object(n.useEffect)((function(){fetch("./P1data_2023.csv").then((function(e){return e.text()})).then((function(e){var t=a.a.parse(e,{header:!0}).data;s(t)}))}),[]),Object(h.jsx)(o.Row,{children:Object(h.jsx)(o.Col,{lg:"12",children:Object(h.jsxs)(o.Card,{children:[Object(h.jsx)(o.CardTitle,{tag:"h3",className:"border-bottom p-3 mb-0",children:"2023 \uc815\uae30\ub178\uc0ac\ud611\uc758 \uc548\uac74"}),Object(h.jsx)(o.CardBody,{className:"",children:Object(h.jsxs)(o.Table,{bordered:!0,striped:!0,children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"\ubd84\uae30"}),Object(h.jsx)("th",{children:"\ub0b4\uc6a9"}),Object(h.jsx)("th",{children:"\ube44\uace0"}),Object(h.jsx)("th",{children:"\uc9c4\ud589\uc0ac\ud56d"})]})}),Object(h.jsx)("tbody",{children:r.map((function(e,t){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.\ubd84\uae30}),Object(h.jsx)("td",{children:e.\ub0b4\uc6a9}),Object(h.jsx)("td",{children:e.\ube44\uace0}),Object(h.jsx)("td",{children:e.\uc9c4\ud589\uc0ac\ud56d})]},t)}))})]})})]})})})}}}]);
//# sourceMappingURL=6.ca609c06.chunk.js.map