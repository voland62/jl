(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[5241,132],{5241:(e,t,n)=>{"use strict";n.r(t),n.d(t,{IDocumentProviderFactory:()=>l,ProviderMock:()=>c,WebSocketProviderWithLocks:()=>L,getAnonymousUserName:()=>o,getRandomColor:()=>r,moonsOfJupyter:()=>s,userColors:()=>i});const s=["Metis","Adrastea","Amalthea","Thebe","Io","Europa","Ganymede","Callisto","Themisto","Leda","Ersa","Pandia","Himalia","Lysithea","Elara","Dia","Carpo","Valetudo","Euporie","Eupheme","Helike","Euanthe","Hermippe","Praxidike","Thyone","Thelxinoe","Ananke","Mneme","Orthosie","Harpalyke","Iocaste","Erinome","Aitne","Herse","Taygete","Eukelade","Carme","Isonoe","Autonoe","Philophrosyne","Cyllene","Pasithee","Pasiphae","Sponde","Eurydome","Kalyke","Hegemone","Kale","Kallichore","Chaldene","Arche","Eirene","Kore","Megaclite","Aoede","Callirrhoe","Sinope"],o=()=>"Anonymous "+s[Math.floor(Math.random()*s.length)],i=["#12A0D3","#17AB30","#CC8500","#A79011","#ee6352","#609DA9","#4BA749","#00A1B3"],r=()=>i[Math.floor(Math.random()*i.length)];class c{requestInitialContent(){return Promise.resolve(!1)}putInitializedState(){}acquireLock(){return Promise.resolve(0)}releaseLock(e){}destroy(){}setPath(e){}}var a=n(9727);const l=new a.Token("@jupyterlab/docprovider:IDocumentProviderFactory");var u=n(49e3),h=n(23406),d=n(85072),f=n(62538),p=n(40870),w=n(68078),m=n(6493),y=n(31955),_=n(75736),g=n(21332),v=n(69600),b=n(34406);const C=[];C[0]=(e,t,n,s,o)=>{h.uE(e,0);const i=w.zu(t,e,n.doc,n);s&&i===w.Px&&!n.synced&&(n.synced=!0)},C[3]=(e,t,n,s,o)=>{h.uE(e,1),h.mP(e,m.xq(n.awareness,Array.from(n.awareness.getStates().keys())))},C[1]=(e,t,n,s,o)=>{m.oy(n.awareness,u.HN(t),n)},C[2]=(e,t,n,s,o)=>{((e,t,n)=>{switch(u.yg(e)){case 0:n(t,u.kf(e))}})(t,n.doc,U)};const U=(e,t)=>console.warn(`Permission denied to access ${e.url}.\n${t}`),E=(e,t,n)=>{const s=u.l1(t),o=h.Mf(),i=u.yg(s),r=e.messageHandlers[i];return r?r(o,s,e,n,i):console.error("Unable to compute message"),o},T=e=>{if(e.shouldConnect&&null===e.ws){const t=new e._WS(e.url);t.binaryType="arraybuffer",e.ws=t,e.wsconnecting=!0,e.wsconnected=!1,e.synced=!1,t.onmessage=n=>{e.wsLastMessageReceived=p.ZG();const s=E(e,new Uint8Array(n.data),!0);h.kE(s)>1&&t.send(h._f(s))},t.onclose=()=>{e.ws=null,e.wsconnecting=!1,e.wsconnected?(e.wsconnected=!1,e.synced=!1,m.Ag(e.awareness,Array.from(e.awareness.getStates().keys()).filter((t=>t!==e.doc.clientID)),e),e.emit("status",[{status:"disconnected"}])):e.wsUnsuccessfulReconnects++,setTimeout(T,g.VV(1200*g.mv(e.wsUnsuccessfulReconnects+1),2500),e)},t.onopen=()=>{e.wsLastMessageReceived=p.ZG(),e.wsconnecting=!1,e.wsconnected=!0,e.wsUnsuccessfulReconnects=0,e.emit("status",[{status:"connected"}]);const n=h.Mf();if(h.uE(n,0),w._J(n,e.doc),t.send(h._f(n)),null!==e.awareness.getLocalState()){const n=h.Mf();h.uE(n,1),h.mP(n,m.xq(e.awareness,[e.doc.clientID])),t.send(h._f(n))}},e.emit("status",[{status:"connecting"}])}},I=(e,t)=>{e.wsconnected&&e.ws.send(t),e.bcconnected&&e.mux((()=>{f.nY(e.bcChannel,t)}))};class M extends _.y{constructor(e,t,n,{connect:s=!0,awareness:o=new m.GL(n),params:i={},WebSocketPolyfill:r=WebSocket,resyncInterval:c=-1}={}){for(super();"/"===e[e.length-1];)e=e.slice(0,e.length-1);const a=(e=>v.UI(e,((e,t)=>`${encodeURIComponent(t)}=${encodeURIComponent(e)}`)).join("&"))(i);this.bcChannel=e+"/"+t,this.url=e+"/"+t+(0===a.length?"":"?"+a),this.roomname=t,this.doc=n,this._WS=r,this.awareness=o,this.wsconnected=!1,this.wsconnecting=!1,this.bcconnected=!1,this.wsUnsuccessfulReconnects=0,this.messageHandlers=C.slice(),this.mux=y.M(),this._synced=!1,this.ws=null,this.wsLastMessageReceived=0,this.shouldConnect=s,this._resyncInterval=0,c>0&&(this._resyncInterval=setInterval((()=>{if(this.ws){const e=h.Mf();h.uE(e,0),w._J(e,n),this.ws.send(h._f(e))}}),c)),this._bcSubscriber=e=>{this.mux((()=>{const t=E(this,new Uint8Array(e),!1);h.kE(t)>1&&f.nY(this.bcChannel,h._f(t))}))},this._updateHandler=(e,t)=>{if(t!==this){const t=h.Mf();h.uE(t,0),w.lr(t,e),I(this,h._f(t))}},this.doc.on("update",this._updateHandler),this._awarenessUpdateHandler=({added:e,updated:t,removed:n},s)=>{const i=e.concat(t).concat(n),r=h.Mf();h.uE(r,1),h.mP(r,m.xq(o,i)),I(this,h._f(r))},this._beforeUnloadHandler=()=>{m.Ag(this.awareness,[n.clientID],"window unload")},"undefined"!=typeof window?window.addEventListener("beforeunload",this._beforeUnloadHandler):b.on("exit",(()=>this._beforeUnloadHandler)),o.on("update",this._awarenessUpdateHandler),this._checkInterval=setInterval((()=>{this.wsconnected&&3e4<p.ZG()-this.wsLastMessageReceived&&this.ws.close()}),3e3),s&&this.connect()}get synced(){return this._synced}set synced(e){this._synced!==e&&(this._synced=e,this.emit("synced",[e]),this.emit("sync",[e]))}destroy(){0!==this._resyncInterval&&clearInterval(this._resyncInterval),clearInterval(this._checkInterval),this.disconnect(),"undefined"!=typeof window?window.removeEventListener("beforeunload",this._beforeUnloadHandler):b.off("exit",(()=>this._beforeUnloadHandler)),this.awareness.off("update",this._awarenessUpdateHandler),this.doc.off("update",this._updateHandler),super.destroy()}connectBc(){this.bcconnected||(f.Ld(this.bcChannel,this._bcSubscriber),this.bcconnected=!0),this.mux((()=>{const e=h.Mf();h.uE(e,0),w._J(e,this.doc),f.nY(this.bcChannel,h._f(e));const t=h.Mf();h.uE(t,0),w.K0(t,this.doc),f.nY(this.bcChannel,h._f(t));const n=h.Mf();h.uE(n,3),f.nY(this.bcChannel,h._f(n));const s=h.Mf();h.uE(s,1),h.mP(s,m.xq(this.awareness,[this.doc.clientID])),f.nY(this.bcChannel,h._f(s))}))}disconnectBc(){const e=h.Mf();h.uE(e,1),h.mP(e,m.xq(this.awareness,[this.doc.clientID],new Map)),I(this,h._f(e)),this.bcconnected&&(f.r1(this.bcChannel,this._bcSubscriber),this.bcconnected=!1)}disconnect(){this.shouldConnect=!1,this.disconnectBc(),null!==this.ws&&this.ws.close()}connect(){this.shouldConnect=!0,this.wsconnected||null!==this.ws||(T(this),this.connectBc())}}var k=n(70132);class L extends M{constructor(e){super(e.url,e.contentType+":"+e.path,e.ymodel.ydoc,{awareness:e.ymodel.awareness}),this._currentLockRequest=null,this._initialContentRequest=null,this._path=e.path,this._contentType=e.contentType,this._serverUrl=e.url;const t="#"+k.jS("--usercolor",r().slice(1)),n=k.jS("--username",o()),s=e.ymodel.awareness.getLocalState();s&&null==s.name&&e.ymodel.awareness.setLocalStateField("user",{name:n,color:t}),this.messageHandlers[127]=(e,t,n,s,o)=>{const i=u.Jl(t),r=this._currentLockRequest;this._currentLockRequest=null,r&&r.resolve(i)},this.messageHandlers[125]=(e,t,n,s,o)=>{const i=u.iU(t);i.byteLength>0&&setTimeout((()=>{d.applyUpdate(this.doc,i)}),0);const r=this._initialContentRequest;this._initialContentRequest=null,r&&r.resolve(i.byteLength>0)},this._isInitialized=!1,this._onConnectionStatus=this._onConnectionStatus.bind(this),this.on("status",this._onConnectionStatus)}setPath(e){if(e!==this._path){this._path=e,this.bcChannel=this._serverUrl+"/"+this._contentType+":"+this._path,this.url=this.bcChannel;const t=h.Mf();h.cW(t,123);const n=unescape(encodeURIComponent(this._contentType+":"+e));for(let e=0;e<n.length;e++)h.cW(t,n.codePointAt(e));this._sendMessage(h._f(t))}}requestInitialContent(){return this._initialContentRequest||(this._initialContentRequest=new a.PromiseDelegate,this._sendMessage(new Uint8Array([125])),setTimeout((()=>{var e;return null===(e=this._initialContentRequest)||void 0===e?void 0:e.resolve(!1)}),1e3)),this._initialContentRequest.promise}putInitializedState(){const e=h.Mf();h.uE(e,124),h.HK(e,d.encodeStateAsUpdate(this.doc)),this._sendMessage(h._f(e)),this._isInitialized=!0}acquireLock(){if(this._currentLockRequest)return this._currentLockRequest.promise;this._sendMessage(new Uint8Array([127]));const e=setInterval((()=>{this.wsconnected&&this._sendMessage(new Uint8Array([127]))}),500);let t,n;const s=new Promise(((e,s)=>{t=e,n=s}));this._currentLockRequest={promise:s,resolve:t,reject:n};const o=()=>{clearInterval(e)};return s.then(o,o),s}releaseLock(e){const t=h.Mf();h.uE(t,126),h.Ep(t,e),this._sendMessage(h._f(t))}_sendMessage(e){const t=()=>{setTimeout((()=>{this.wsconnected?this.ws.send(e):this.once("status",t)}),0)};t()}async _onConnectionStatus(e){if(this._isInitialized&&"connected"===e.status){const e=await this.acquireLock();await this.requestInitialContent()||this.putInitializedState(),this.releaseLock(e)}}}},70132:(e,t,n)=>{"use strict";n.d(t,{jS:()=>d,E0:()=>f,jU:()=>a,UG:()=>c});var s=n(23205),o=n(45931);var i=n(55852),r=n(34406);const c=r.release&&/node|io\.js/.test(r.release.name),a="undefined"!=typeof window&&!c;let l;"undefined"!=typeof navigator&&/Mac/.test(navigator.platform);const u=[],h=()=>{if(void 0===l)if(c){l=s.Ue();const e=r.argv;let t=null;for(let n=0;n<e.length;n++){const s=e[n];"-"===s[0]?(null!==t&&l.set(t,""),t=s):null!==t?(l.set(t,s),t=null):u.push(s)}null!==t&&l.set(t,"")}else"object"==typeof location?(l=s.Ue(),(location.search||"?").slice(1).split("&").forEach((e=>{if(0!==e.length){const[t,n]=e.split("=");l.set(`--${o.NF(t,"-")}`,n),l.set(`-${o.NF(t,"-")}`,n)}}))):l=s.Ue();return l},d=(e,t)=>h().get(e)||t,f=e=>{return void 0===(t=c?{}[e.toUpperCase()]:i.X.getItem(e))?null:t;var t};(e=>h().has(e))("--"+"production")||f("production")},23205:(e,t,n)=>{"use strict";n.d(t,{Ue:()=>s,JG:()=>o,Yu:()=>i,UI:()=>r,Yj:()=>c});const s=()=>new Map,o=e=>{const t=s();return e.forEach(((e,n)=>{t.set(n,e)})),t},i=(e,t,n)=>{let s=e.get(t);return void 0===s&&e.set(t,s=n()),s},r=(e,t)=>{const n=[];for(const[s,o]of e)n.push(t(o,s));return n},c=(e,t)=>{for(const[n,s]of e)if(t(s,n))return!0;return!1}},55852:(e,t,n)=>{"use strict";n.d(t,{X:()=>i,z:()=>r});let s=new class{constructor(){this.map=new Map}setItem(e,t){this.map.set(e,t)}getItem(e){return this.map.get(e)}},o=!0;try{"undefined"!=typeof localStorage&&(s=localStorage,o=!1)}catch(e){}const i=s,r=e=>o||addEventListener("storage",e)},45931:(e,t,n)=>{"use strict";n.d(t,{IK:()=>s,NF:()=>r,lz:()=>a});const s=String.fromCharCode,o=(String.fromCodePoint,/^\s*/g),i=/([A-Z])/g,r=(e,t)=>(e=>e.replace(o,""))(e.replace(i,(e=>`${t}${(e=>e.toLowerCase())(e)}`))),c="undefined"!=typeof TextEncoder?new TextEncoder:null,a=c?e=>c.encode(e):e=>{const t=unescape(encodeURIComponent(e)),n=t.length,s=new Uint8Array(n);for(let e=0;e<n;e++)s[e]=t.codePointAt(e);return s};let l="undefined"==typeof TextDecoder?null:new TextDecoder("utf-8",{fatal:!0,ignoreBOM:!0});l&&1===l.decode(new Uint8Array).length&&(l=null)},34406:e=>{var t,n,s=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function r(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var c,a=[],l=!1,u=-1;function h(){l&&c&&(l=!1,c.length?a=c.concat(a):u=-1,a.length&&d())}function d(){if(!l){var e=r(h);l=!0;for(var t=a.length;t;){for(c=a,a=[];++u<t;)c&&c[u].run();u=-1,t=a.length}c=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}s.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.push(new f(e,t)),1!==a.length||l||r(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=p,s.addListener=p,s.once=p,s.off=p,s.removeListener=p,s.removeAllListeners=p,s.emit=p,s.prependListener=p,s.prependOnceListener=p,s.listeners=function(e){return[]},s.binding=function(e){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}}}]);
//# sourceMappingURL=5241.fe581c97079607dd2031.js.map