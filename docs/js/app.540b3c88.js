(function(e){function t(t){for(var n,a,o=t[0],l=t[1],c=t[2],d=0,h=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&h.push(i[a][0]),i[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(h.length)h.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],n=!0,o=1;o<s.length;o++){var l=s[o];0!==i[l]&&(n=!1)}n&&(r.splice(t--,1),e=a(a.s=s[0]))}return e}var n={},i={app:0},r=[];function a(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=e,a.c=n,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(s,n,function(t){return e[t]}.bind(null,n));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/discourse_crawler/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0015":function(e,t,s){"use strict";s("e96b")},"45df":function(e,t,s){"use strict";s("8679")},"56d7":function(e,t,s){"use strict";s.r(t);var n=s("2b0e"),i=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("discourse_crawler")],1)},r=[],a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"dashboard",attrs:{id:"body"}},[e.showAPI?t("input",{directives:[{name:"model",rawName:"v-model",value:e.APIkey,expression:"APIkey"}],attrs:{id:"APIinput",type:"text",placeholder:"Enter OpenAI API Key"},domProps:{value:e.APIkey},on:{input:function(t){t.target.composing||(e.APIkey=t.target.value)}}}):e._e(),t("br"),e.showAPI?t("span",[e._v("Set up an OpenAI account and get an API key "),t("a",{attrs:{href:"https://openai.com/product"}},[e._v("here")]),e._v(".")]):e._e(),t("br"),e.showAPI?t("button",{attrs:{id:"apiButton"},on:{click:e.registerAPI}},[e._v("Set API Key")]):e._e(),t("br"),t("br"),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.urlToScrape,expression:"urlToScrape"}],attrs:{id:"URLInput",type:"text",placeholder:"Enter URL to Crawl"},domProps:{value:e.urlToScrape},on:{input:function(t){t.target.composing||(e.urlToScrape=t.target.value)}}}),t("p"),t("button",{attrs:{id:"startButton"},on:{click:e.grabPage}},[e._v("Crawl Website")]),e.loading?e._e():t("p",{attrs:{id:"loadingContainer"}},[e._v(" Initializing "),t("br"),t("img",{attrs:{id:"loading",src:"/"}}),t("br"),t("span",{attrs:{id:"initialMessage"}},[e._v("(Make sure your webcam is facing you.)")])]),e.showProcess?t("h1",{attrs:{id:"mainTitle"}},[e._v(e._s(e.msg))]):e._e(),e.showProcess?t("p",{attrs:{id:"messageTwo"}},[e._v(" "+e._s(e.msg2)+" ")]):e._e(),e.showProcess?t("p",{attrs:{id:"messageThree"}},[e._v(" "+e._s(e.msg3)+" ")]):e._e(),t("p",{attrs:{id:"terminal"}}),t("section",{staticClass:"visuals",attrs:{id:"visuals"}}),t("section",{attrs:{id:"specificAnalysis"}}),t("section",{attrs:{id:"specificAnalysis2"}}),t("section",{attrs:{id:"specificAnalysis3"}}),t("section",{attrs:{id:"specificAnalysis4"}})])},o=[],l=(s("14d9"),s("5b81"),s("0e14")),c=s("cee4"),u={name:"discourse_crawler",props:{},data(){return{msg:"Discourse Crawler",msg2:"An AI-powered tool for performing top-level analysis of websites.",msg3:"",urlToScrape:"",pageText:"",anger:0,fear:0,surprise:0,disgust:0,sadness:0,happiness:0,readability:0,loading:!0,showProcess:!0,showAPI:!0,anchorsForCrawl:[],secondIteration:!1,JSON1:null,JSON2:null,JSON3:null,JSON4:null,moralFoundationAnalysis:"",apiKEY:"",unique:[]}},created:function(){},methods:{registerAPI:function(){this.showAPI=!1},grabPage:function(){let e=document.createElement("img");e.src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3dqdTFidnN6enl2bmZ0b2RndGl0Y29oMWJiOHo0bDc2d3d6YnF3bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/HN6GLlUsMvue652b2w/giphy.gif",e.setAttribute("id","thinkingIMG"),document.getElementById("terminal").appendChild(e);const t=this.urlToScrape;c["a"].get(t).then(e=>{const t=e.data,s=t.replace(/\s+/g," ").trim(),n=new DOMParser,i=n.parseFromString(s,"text/html"),r=i;r.querySelectorAll("script, style").forEach(e=>e.remove());let a=r.querySelector("body").innerText.trim();if(0==this.secondIteration){var o=[],l=i.links;const e=i.links.length;for(var c=0;c<l.length;c++){const t=c;i.links[c].href.includes(this.urlToScrape)&&o.push(l[c].href),t===e-1&&(this.pageText=a,this.anchorsForCrawl=o.filter((function(e,t){return o.indexOf(e)==t})),console.log(this.anchorsForCrawl),setTimeout(()=>{console.log("Delayed for 1 second."),this.grabSubpages()},2e3))}}}).catch(e=>{console.log(e),this.msg=e})},grabSubpages:function(){var e,t=this.anchorsForCrawl.length;const s=this.anchorsForCrawl.length;for(e=0;e<t;e++){const t=this.anchorsForCrawl[e],i=e;var n=t;c["a"].get(n).then(e=>{this.msg="Crawling",this.msg2=t;const n=e.data,r=n.replace(/\s+/g," ").trim(),a=new DOMParser,o=a.parseFromString(r,"text/html"),l=o;l.querySelectorAll("script, style").forEach(e=>e.remove());let c=l.querySelector("body").innerText.trim();console.log("Crawling: "+this.urlToScrape),this.pageText=c.replaceAll('"',"");const u=this.pageText.replaceAll("'","");var d=document.getElementById("specificAnalysis"),h=document.createElement("div");h.innerHTML='{"url":"'+t+'","text":"'+u+'"},',d.appendChild(h),console.log(t),i===s-1&&setTimeout(()=>{console.log("Delayed for 1 second."),this.getEmotionStats()},2e3)}).catch(e=>{console.log(e),this.msg=e})}},getEmotionStats:function(){var e=document.getElementById("specificAnalysis").innerText;const t="["+e.slice(0,-1)+"]";if(this.JSON1=JSON.parse(t),null!=this.JSON1){console.log("test");var s,n=this.JSON1.length;const e=this.JSON1.length;for(s=0;s<n;s++){const t=this.JSON1[s].url,n=s,i=this.JSON1[s].text.substring(0,500),r=this.apiKEY,a=c["a"].create({headers:{Authorization:"Bearer "+r}}),o={messages:[{role:"user",content:"Peform sentiment analysis on this text, outputting scores between 1 and 10 for anger, fear, happiness, surprise, sadness, and disgust in JSON only, no explanation. "+i}],model:"gpt-3.5-turbo",max_tokens:500,temperature:0};a.post("https://api.openai.com/v1/chat/completions",o).then(s=>{this.msg="Analyzing Emotion of:",this.msg2=t,console.log(s.data.choices[0].message.content);const r=JSON.parse(s.data.choices[0].message.content);this.anger=r.anger,this.fear=r.fear,this.surprise=r.surprise,this.disgust=r.disgust,this.sadness=r.sadness,this.happiness=r.happiness;var a=document.getElementById("specificAnalysis2"),o=document.createElement("div");o.innerHTML='{"url":"'+t+'","text":"'+i+'","anger":'+this.anger+',"fear":'+this.fear+',"surprise":'+this.surprise+',"disgust":'+this.disgust+',"sadness":'+this.sadness+',"happiness":'+this.happiness+"},",a.appendChild(o),n===e-1&&setTimeout(()=>{console.log("Delayed for 1 second."),this.getMoralFoundations()},5e3)}).catch(e=>{console.log(e),this.msg=e})}}},getMoralFoundations:function(){var e=document.getElementById("specificAnalysis2").innerText;const t="["+e.slice(0,-1)+"]";if(this.JSON2=JSON.parse(t),null!=this.JSON2){console.log("test");var s,n=this.JSON2.length;const e=this.JSON2.length;for(s=0;s<n;s++){const t=this.JSON2[s].url,n=s,i=this.JSON2[s].anger,r=this.JSON2[s].happiness,a=this.JSON2[s].disgust,o=this.JSON2[s].fear,l=this.JSON2[s].surprise,u=this.JSON2[s].sadness,d=this.JSON2[s].text.substring(0,3e3),h=this.apiKEY,p=c["a"].create({headers:{Authorization:"Bearer "+h}}),g={messages:[{role:"user",content:"Analyze this text to identify which of the moral foundations that it represents. Include an explanation."+d}],model:"gpt-3.5-turbo",max_tokens:500,temperature:0};p.post("https://api.openai.com/v1/chat/completions",g).then(s=>{this.msg="Analyzing Moral Foundations of:",this.msg2=t,console.log(s.data.choices[0].message.content);const c=s.data.choices[0].message.content.replaceAll('"',"");this.moralFoundationAnalysis=c.replaceAll("'","");var h=document.getElementById("specificAnalysis3"),p=document.createElement("div");p.innerHTML='{"url":"'+t+'","text":"'+d+'","moralFoundation":"'+this.moralFoundationAnalysis+'","anger":'+i+',"fear":'+o+',"surprise":'+l+',"disgust":'+a+',"sadness":'+u+',"happiness":'+r+"},",h.appendChild(p),n===e-1&&setTimeout(()=>{console.log("Delayed for 1 second."),this.returnJSON()},5e3)}).catch(e=>{console.log(e),this.msg=e})}}},returnJSON:function(){var e=document.getElementById("specificAnalysis3").innerText,t="["+e.slice(0,-1)+"]";this.JSON3=t,console.log("JSON2: "+this.JSON3);var s=document.getElementById("specificAnalysis4"),n=document.createElement("div");n.innerHTML=this.JSON3,s.appendChild(n),setTimeout(()=>{console.log("Delayed for 1 second."),this.renderVisuals()},5e3)},renderVisuals:function(){document.getElementById("visuals").style.display="block",document.getElementById("thinkingIMG").remove();let e=document.createElement("img");e.src="https://media.giphy.com/media/QIRDfKwRFXz6nBCQkF/giphy.gif",e.setAttribute("id","thinkingIMG"),document.getElementById("terminal").appendChild(e);var t=document.getElementById("specificAnalysis4").innerText;if(this.JSON4=JSON.parse(t),null!=this.JSON4){console.log("test");var s,n=this.JSON4.length;for(s=0;s<n;s++){const e=this.JSON4[s].url,t=this.JSON4[s].anger,n=this.JSON4[s].happiness,a=this.JSON4[s].disgust,o=this.JSON4[s].fear,l=this.JSON4[s].surprise,c=this.JSON4[s].sadness,u=this.JSON4[s].moralFoundation;var i=document.getElementById("visuals"),r=document.createElement("div");r.innerHTML="<h2>"+e+"</h2><h3>Moral Foundations Analysis: </h3>"+u+"<h3>Emotional Analysis: </h3><ul><li> Anger: "+t+"</li><li> Fear: "+o+"</li><li> Surpise: "+l+"</li><li> Disgust: "+a+"</li><li> Sadness: "+c+"</li><li> Happiness: "+n+"</li></ul>",i.appendChild(r),setTimeout(()=>{console.log("Delayed for 1 second."),document.getElementById("thinkingIMG").remove(),this.msg="Analysis Complete",this.msg2=""},5e3)}}},getReadabilityStats:function(){this.readability=l["gunningFog"](this.workingOutput),console.log(this.readability+" "+this.workingOutput)},reset:function(){location.reload()},unhideData:function(){document.getElementById("rawData").style.display="inline-block"},hideData:function(){document.getElementById("rawData").style.display="none"},renderData:function(){const e=new Promise((e,t)=>{this.getEmotionStats(),this.getReadabilityStats(),e("Data rendered!"),t("Data render failed")});e.then(()=>{this.constructJSON(),this.visualizeData(),this.resetWorkingOutput(),console.log("JSON and charts constructed")})},constructJSON:function(){this.currentDataObject='{"time":"'+this.workingTime+'","wpm":"'+this.wpm+'","content":"'+this.workingOutput+'","Angry":'+this.anger+',"Fear":'+this.fear+',"Excited":'+this.excitement+',"Bored":'+this.boredom+',"Sad":'+this.sadness+',"Happy":'+this.happiness+',"volume":'+this.volumeValue+',"readability":'+this.readability+',"faceAnger":'+this.faceAngry+',"faceDisgust":'+this.faceDisgusted+',"faceFear":'+this.faceFearful+',"faceHappiness":'+this.faceHappy+',"faceNeutral":'+this.faceNeutral+',"faceSadness":'+this.faceSad+',"faceSurprise":'+this.faceSurprised+"},";var e=document.getElementById("rawData");e.innerHTML+=this.currentDataObject,this.overallDataObject=document.getElementById("rawData").innerHTML},pdfResults:function(){window.print()}}},d=u,h=(s("45df"),s("2877")),p=Object(h["a"])(d,a,o,!1,null,"3d081556",null),g=p.exports,m={name:"App",components:{discourse_crawler:g}},f=m,y=(s("0015"),Object(h["a"])(f,i,r,!1,null,null,null)),S=y.exports;n["a"].config.productionTip=!1,new n["a"]({render:e=>e(S)}).$mount("#app")},8679:function(e,t,s){},e96b:function(e,t,s){}});
//# sourceMappingURL=app.540b3c88.js.map