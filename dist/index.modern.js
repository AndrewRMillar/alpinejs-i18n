const e={version:"1.0.0",set locale(e){this.currentLocale=e,window.dispatchEvent(this.localChange),this.updateSubscribers()},get locale(){return this.currentLocale},currentLocale:"",messages:{},subscribers:[],localChange:new Event("locale-change"),start(){window.Alpine.addMagicProperty("locale",e=>(this.subscribe(e),e=>{if(!e)return this.locale;this.checkLocale(e),this.locale=e})),window.Alpine.addMagicProperty("t",e=>(this.subscribe(e),(e,s)=>this.t(e,s)))},create(e,s){this.messages=s,this.checkLocale(e),this.locale=e},t(e,s){let t=e.split(".").reduce((e,s)=>e[s],this.messages[this.locale]);for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e)){const i=s[e];let c=new RegExp("{s*("+e+")s*}","g");t=t.replaceAll(c,i)}return t},checkLocale(e){if(!Object.keys(this.messages).includes(e))throw new Error(`Alpine I18n: The locale ${e} does not exist.`)},subscribe(e){this.subscribers.includes(e)||this.subscribers.push(e)},updateSubscribers(){this.subscribers.forEach(e=>{e.__x.updateElements(e)})}},s=window.deferLoadingAlpine||(e=>e());window.AlpineI18n=e,window.deferLoadingAlpine=function(e){window.AlpineI18n.start(),s(e)};export default e;
//# sourceMappingURL=index.modern.js.map
