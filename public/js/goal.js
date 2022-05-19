class Scroll{constructor(t,e,o){this.__section=t,this.__timing=e,this.__actions=o}}class Action{constructor(t,e,o,l,s){this.__querySel=t,this.__translateX=e,this.__translateY=o,this.__scale=l,this.__opacity=s}}let action_1=new Action("#title",void 0,-140,void 0,[1,0]),action_2=new Action(".why-section-child",void 0,"-25%",void 0,[0,1.75]),action_3=new Action("#arabic-letters",void 0,"-70%",void 0,[0,1]),action_4=new Action("#letter-1","-10%","-15%",[1,2],[1,0]),action_5=new Action("#letter-2","-4%","-5%",void 0,[1,0]),action_6=new Action("#letter-3","8%","-17%",[1,1.5],[1,0]),action_7=new Action("#letter-4","-15%","-2%",[1,2],[1,0]),action_8=new Action("#letter-5","-7%","-1%",[1,1.2],[1,0]),action_9=new Action("#letter-6","12%","-3%",[1,1.8],[1,0]),action_10=new Action("#letter-7","5%","14%",[1,1.7],[1,0]),action_11=new Action("#letter-8","9%","6%",[1,2],[1,0]),action_12=new Action(".why-section-child",void 0,["-25%","-40%"],void 0,[1,0]),action_13=new Action("#reqs-section-child",void 0,"-25%",void 0,[0,1.75]),action_14=new Action("#reqs-section-child",void 0,["-25%","-25%"],[1,.6],[1.75,-.75]),action_15=new Action("#history",void 0,void 0,[.8,1],[0,2]),scroll_1=new Scroll("#intro","100%",[action_1]),scroll_2=new Scroll("#why-section","150%",[action_2,action_3]),scroll_3=new Scroll("#why-section","150%",[action_4,action_5,action_6,action_7,action_8,action_9,action_10,action_11]),scroll_4=new Scroll("#why-section","100%",[action_12]),scroll_5=new Scroll("#reqs-section","150%",[action_13]),scroll_6=new Scroll("#reqs-section","20%",[]),scroll_7=new Scroll("#reqs-section","100%",[action_14]),scroll_8=new Scroll("#history","100%",[action_15]),scroll_9=new Scroll(void 0,"100%",[]);scrolls=[scroll_1,scroll_2,scroll_3,scroll_4,scroll_5,scroll_6,scroll_7,scroll_8,scroll_9];const onLoad=()=>{$(()=>{var t=[],e=null,o=0,l=0,s=0,r=0,c=0,n=0,a=0;onLoadHelper=(()=>{scrollIntervalID=setInterval(reform,10),c=$(window).scrollTop(),l=$(window).height(),s=$(window).width();for(let t=0;t<scrolls.length;t++){scrolls[t].__timing=percentageToPx(scrolls[t].__timing,!1);for(let e=0;e<scrolls[t].__actions.length;e++){let o=scrolls[t].__actions[e],l=o.__translateX,s=o.__translateY;if("string"==typeof l)o.__translateX=percentageToPx(l,!0);else if("object"==typeof l){for(temp=[],i=0;i<l.length;i++){let t=percentageToPx(l[i],!0);temp.push(t)}o.__translateX=temp}if("string"==typeof s)o.__translateY=percentageToPx(s,!1);else if("object"==typeof s){for(temp=[],i=0;i<s.length;i++){let t=percentageToPx(s[i],!1);temp.push(t)}o.__translateY=temp}}}for(scroll_counter=0;scroll_counter<scrolls.length;scroll_counter++){o+=scrolls[scroll_counter].__timing;let e=scrolls[scroll_counter].__section;t.find(t=>t==e)||t.push(e);for(let t=0;t<scrolls[scroll_counter].__actions.length;t++){let e=scrolls[scroll_counter].__actions[t],o=e.__translateX,l=e.__translateY;o instanceof Array||null==o||(e.__translateX=[0,o]),l instanceof Array||null==l||(e.__translateY=[0,l])}}$("body").height(o),$(window).scroll(0),e=t[0],$(e).show()}),reform=(()=>{window.requestAnimationFrame(()=>{if(c=$(window).scrollTop(),n=c-r,c>0&&c<=o-l){for(var t,e,s,i,_,w=0;w<scrolls[a].__actions.length;w++)t=scrolls[a].__actions[w],e=toPixels(t,"translateY"),s=toPixels(t,"translateX"),i=toPixels(t,"scale"),_=toPixels(t,"opacity"),$(t.__querySel).css({transform:"translate3d("+s+"px, "+e+"px, 0) scale("+i+") rotate(0deg)",opacity:_});c>scrolls[a].__timing+r?(r+=scrolls[a].__timing,a++,showNewSection()):c<r&&(a--,r-=scrolls[a].__timing,showNewSection())}})}),toPixels=((t,e)=>{var o;switch(e){case"translateX":o=t.__translateX;break;case"translateY":o=t.__translateY;break;case"scale":o=t.__scale;break;case"opacity":o=t.__opacity;break;default:o=void 0}if(o)o=pxConverter(n,o[0],o[1]-o[0],scrolls[a].__timing);else switch(e){case"translateX":case"translateY":o=0;break;case"scale":case"opacity":o=1;break;default:o=void 0}return o}),pxConverter=((t,e,o,l)=>-(Math.cos(Math.PI*t/l)-1)/2*o+e),showNewSection=(()=>{scrolls[a].__section!=e&&($(e).hide(),$(scrolls[a].__section).show(),e=scrolls[a].__section)}),percentageToPx=((t,e)=>("string"==typeof t&&t.match(/%/g)&&(t=e?parseFloat(t)/100*s:parseFloat(t)/100*l),t)),onLoadHelper()})};$(()=>{var t=[],e=null,o=0,l=0,s=0,r=0,c=0,n=0,a=0;onLoadHelper=(()=>{scrollIntervalID=setInterval(reform,10),c=$(window).scrollTop(),l=$(window).height(),s=$(window).width();for(let t=0;t<scrolls.length;t++){scrolls[t].__timing=percentageToPx(scrolls[t].__timing,!1);for(let e=0;e<scrolls[t].__actions.length;e++){let o=scrolls[t].__actions[e],l=o.__translateX,s=o.__translateY;if("string"==typeof l)o.__translateX=percentageToPx(l,!0);else if("object"==typeof l){for(temp=[],i=0;i<l.length;i++){let t=percentageToPx(l[i],!0);temp.push(t)}o.__translateX=temp}if("string"==typeof s)o.__translateY=percentageToPx(s,!1);else if("object"==typeof s){for(temp=[],i=0;i<s.length;i++){let t=percentageToPx(s[i],!1);temp.push(t)}o.__translateY=temp}}}for(scroll_counter=0;scroll_counter<scrolls.length;scroll_counter++){o+=scrolls[scroll_counter].__timing;let e=scrolls[scroll_counter].__section;t.find(t=>t==e)||t.push(e);for(let t=0;t<scrolls[scroll_counter].__actions.length;t++){let e=scrolls[scroll_counter].__actions[t],o=e.__translateX,l=e.__translateY;o instanceof Array||null==o||(e.__translateX=[0,o]),l instanceof Array||null==l||(e.__translateY=[0,l])}}$("body").height(o),$(window).scroll(0),e=t[0],$(e).show()}),reform=(()=>{window.requestAnimationFrame(()=>{if(c=$(window).scrollTop(),n=c-r,c>0&&c<=o-l){for(var t,e,s,i,_,w=0;w<scrolls[a].__actions.length;w++)t=scrolls[a].__actions[w],e=toPixels(t,"translateY"),s=toPixels(t,"translateX"),i=toPixels(t,"scale"),_=toPixels(t,"opacity"),$(t.__querySel).css({transform:"translate3d("+s+"px, "+e+"px, 0) scale("+i+") rotate(0deg)",opacity:_});c>scrolls[a].__timing+r?(r+=scrolls[a].__timing,a++,showNewSection()):c<r&&(a--,r-=scrolls[a].__timing,showNewSection())}})}),toPixels=((t,e)=>{var o;switch(e){case"translateX":o=t.__translateX;break;case"translateY":o=t.__translateY;break;case"scale":o=t.__scale;break;case"opacity":o=t.__opacity;break;default:o=void 0}if(o)o=pxConverter(n,o[0],o[1]-o[0],scrolls[a].__timing);else switch(e){case"translateX":case"translateY":o=0;break;case"scale":case"opacity":o=1;break;default:o=void 0}return o}),pxConverter=((t,e,o,l)=>-(Math.cos(Math.PI*t/l)-1)/2*o+e),showNewSection=(()=>{scrolls[a].__section!=e&&($(e).hide(),$(scrolls[a].__section).show(),e=scrolls[a].__section)}),percentageToPx=((t,e)=>("string"==typeof t&&t.match(/%/g)&&(t=e?parseFloat(t)/100*s:parseFloat(t)/100*l),t)),onLoadHelper()});