const e={version:"0.0.0",set locale(e){this.currentLocale=e,this.dispatchEvent()},get locale(){return this.currentLocale},currentLocale:"",messages:{},localChange:new Event("locale-change"),start(){window.Alpine.onComponentInitialized(e=>{e.$el.addEventListener("locale-change",()=>{e.$el.__x.updateElements(e.$el)})}),window.Alpine.addMagicProperty("locale",()=>e=>{if(!e)return this.locale;this.checkLocale(e),this.locale=e}),window.Alpine.addMagicProperty("t",e=>(e,t)=>{let l=e.split(".").reduce((e,t)=>e[t],this.messages[this.locale]);for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)){const n=t[e];let o=new RegExp("{s*("+e+")s*}","g");l=l.replaceAll(o,n)}return l})},create(e,t){this.locale=e,this.messages=t},dispatchEvent(){document.querySelectorAll("[x-data]").forEach(e=>{e.dispatchEvent(this.localChange)})},checkLocale(e){if(!Object.keys(this.messages).includes(e))throw new Error(`Alpine I18n: The locale ${e} does not exist.`)}},t=window.deferLoadingAlpine||(e=>e());window.AlpineI18n=e,window.deferLoadingAlpine=function(e){window.AlpineI18n.start(),t(e)};export default e;
//# sourceMappingURL=index.modern.js.map