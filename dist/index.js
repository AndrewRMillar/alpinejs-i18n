var e={version:"1.0.0",set locale(e){this.currentLocale=e,window.dispatchEvent(this.localChange),this.updateSubscribers()},get locale(){return this.currentLocale},currentLocale:"",messages:{},subscribers:[],localChange:new Event("locale-change"),start:function(){var e=this;window.Alpine.addMagicProperty("locale",function(n){return e.subscribe(n),function(n){if(!n)return e.locale;e.checkLocale(n),e.locale=n}}),window.Alpine.addMagicProperty("t",function(n){return e.subscribe(n),function(n,t){return e.t(n,t)}})},create:function(e,n){this.messages=n,this.checkLocale(e),this.locale=e},t:function(e,n){var t=e.split(".").reduce(function(e,n){return e[n]},this.messages[this.locale]);for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var s=n[i],r=new RegExp("{s*("+i+")s*}","g");t=t.replaceAll(r,s)}return t},checkLocale:function(e){if(!Object.keys(this.messages).includes(e))throw new Error("Alpine I18n: The locale "+e+" does not exist.")},subscribe:function(e){this.subscribers.includes(e)||this.subscribers.push(e)},updateSubscribers:function(){this.subscribers.forEach(function(e){e.__x.updateElements(e)})}},n=window.deferLoadingAlpine||function(e){return e()};window.AlpineI18n=e,window.deferLoadingAlpine=function(e){window.AlpineI18n.start(),n(e)},module.exports=e;
//# sourceMappingURL=index.js.map
