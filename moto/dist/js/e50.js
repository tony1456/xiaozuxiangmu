var t,Avatar={push:function(){}},currentTime="",domainLocal=".motorola.com.cn",Common={processLogin:function(){$.ajax({url:HOST+"/login/login_info.jhtml",type:"POST",data:{},dataType:"json",cache:!1,success:function(e){loginSuccessTagOp(e)}})},processCart:function(){$.ajax({url:HOST+"/store/cart/cart_total.jhtml",type:"POST",data:{},dataType:"json",cache:!1,success:function(e){$("#i_cart_total").html(e.count)}})},getToken:function(){var n="";return $.ajax({url:HOST+"/token/token.jhtml",type:"POST",data:{},dataType:"json",cache:!1,async:!1,success:function(e){n=e.token}}),n},processFeast:function(){var e=["/","/com.shenqi.web.shop/","/zt/"],a=window.location.pathname,n=!0;for(var t in e){if(e[t]==a){n=!1;break}if(1<t&&-1!=a.indexOf(e[t])){n=!1;break}}n&&(yrredbegin="undefined"==typeof yrredbegin?0:yrredbegin,yrredend="undefined"==typeof yrredend?0:yrredend,hdredbegin="undefined"==typeof hdredbegin?0:hdredbegin,hdredend="undefined"==typeof hdredend?0:hdredend,0<yrredbegin&&0<yrredend&&0<hdredbegin&&0<hdredend&&$.get(HOST+"/time.jhtml",null,function(e,n){if(currentTime=parseInt(e),yrredbegin<=currentTime&&yrredend>=currentTime)$("body").addClass("white-theme"),$("<link>").attr({rel:"stylesheet",type:"text/css",href:IMAGEURL+"/css/fesitval.css"}).appendTo("head"),$(".global-header .wrapper").append('<div class="countdown"></div>'),oneYearTimeFun(yrredend-currentTime,"countdown");else if(hdredbegin<=currentTime&&hdredend>=currentTime){$("<link>").attr({rel:"stylesheet",type:"text/css",href:IMAGEURL+"/css/fesitval1.css"}).appendTo("head");var t='<span id="year_red_picture" class="small-red-paper">200鍏冪幇閲戝埜</span>';if(t+='<div class="countdown-box"><p>璺濇椿鍔ㄧ粨鏉熻繕鏈�</p><div class="countdown"></div></div>',$(".global-header .wrapper").append(t),oneYearTimeFun(hdredend-currentTime,"countdown"),$("#year_red_picture").click(function(){yearRedShow()}),"/store/"==a||"/com.shenqi.web.shop/store/"==a)1!=(getcookie("time.red.200")||"")&&yearRedShow()}}))},getSubHtml:function(e){e&&$.get(HOST+e,function(e){$(e).appendTo(".sub-product-nav")})},debug:function(){},run:!1,processAdd2CartCallback:function(e,n,t,a,o,r,i){if(this.run){var s=0;for(var l in e)if(e[l].skuid==t){s=e[l].p_price,o=e[l].name;break}var d={type:"addtocart",sku:t,price:s,quantity:a,product:o,category:i,brand:"",store:"",pid:n,uid:""};MLTrackerz.track(d),this.debug("idsp-鍔犲叆璐墿杞�",d)}},processGo2OrderCallback:function(){if(this.run){MLTrackerz.track({type:"event",action:"鍘荤粨绠梍PC"})}},processSubmit2OrderCallback:function(){if(this.run){MLTrackerz.track({type:"event",action:"绔嬪嵆涓嬪崟_PC"})}},processGo2PayCallback:function(){this.run&&(MLTrackerz.track({type:"event",action:"鍘绘敮浠榑PC"}),this.debug("idsp-鍘绘敮浠榑PC"))},processOrderPaySuccessCallback:function(e){if(this.run){var n=parseInt((new Date).getTime()/1e3),t=e.payTime;if(2==e.payStatus&&n-t<3e3){var a="pay_sucess_"+e.orderId;if(null==getCookie(a)){"undefined"!=typeof webChat&&webChat.pay_success(e.orderId,e.payFee);for(var o=[],r=0;r<e.items.length;r++){var i={id:e.items[r].skuid,count:e.items[r].count,price:e.items[r].promotionPrice+""};o.push(i)}var s={id:e.orderId,money:e.payFee,items:o};py("event","order",s).track("cWs8T.wZ2.qr_NQH6EFCIWwy7RH2NfB0");var l={type:"payment",orderId:e.orderId,total:e.payFee,checkout:e.payFee};MLTrackerz.track(l),addCookie(a,1),this.debug(l,s)}}}},processViewCartDataCallback:function(e){if(this.run&&null!=e&&""!=e&&null!=e.products&&0<e.products.length){for(var n=[],t=0;t<e.products.length;t++){var a={id:e.products[t].product.skuid,count:e.products[t].product.count,price:e.products[t].product.promotionPrice};n.push(a)}e={money:e.totalFee,items:n};py("event","viewCart",e).track("cWs8T.XZ2.24yqZ2o1HWZAbHW0Mf5b-P"),this.debug("event","viewCart",e,"cWs8T.XZ2.24yqZ2o1HWZAbHW0Mf5b-P")}}},Message={tipsYB:function(e,n){if(0<$(".detail-layer").length){var a="<span>"+e+"</span>";$(".detail-layer").find("p").html(a),$(".detail-layer,.layer-bg").fadeIn()}else{var o="";0<$(".layer-bg").length?$(".layer-bg").show():o='<div class="layer-bg"></div>',o+='<div  class="detail-layer"><span class="close"></span><p><span>'+e+"</span></p></div>",$("body").append(o)}t=setTimeout(function(){$(".detail-layer,.layer-bg").fadeOut(),n&&n()},3e3)},tipsPS:function(e){if(0<$(".detail-layer").length){var n="<span>"+e+"</span>";$(".detail-layer").find("p").html(n),$(".detail-layer,.layer-bg").fadeIn()}else{var a="";0<$(".layer-bg").length?$(".layer-bg").show():a='<div class="layer-bg"></div>',a+='<div  class="detail-layer remind-succuss"><span class="close"></span><p><span>'+e+"</span></p></div>",$("body").append(a)}t=setTimeout("$('.detail-layer,.layer-bg').fadeOut();",3e3)},tipsAB:function(e,n){if(0<$(".detail-layer").length){var a='<span class="xiajia">'+e+"</span>";$(".detail-layer").find("p").html(a),$(".detail-layer,.layer-bg").fadeIn()}else{var o="";0<$(".layer-bg").length?$(".layer-bg").show():o='<div class="layer-bg"></div>',o+='<div  class="detail-layer"><span class="close"></span><p><span class="xiajia">'+e+"</span></p></div>",$("body").append(o)}t=n?setTimeout("$('.detail-layer').fadeOut();",2e3):setTimeout("$('.detail-layer,.layer-bg').fadeOut();",2e3)}};function loginiframe(){var e=encodeURIComponent(window.location.href),n=$.base64("encode",e),t=HOST.replace("http://",""),a=LENOVOHOST+"/wauthen2/wauth/jsp/ilogin.jsp?lenovoid.action=diylogin&lenovoid.realm="+REALM+"&lenovoid.uinfo=username&lenovoid.ctx="+n+"&lenovoid.cb="+HOST+"/login/logincallback.jhtml&lenovoid.hidewechat=0&lenovoid.hideregemail=0&lenovoid.hideqrlogin=0&lenovoid.source=browser:"+t+"&lenovoid.vp=0&intcmp=lenovoID_log&display=";$("#lenovoidiframe").attr("src",a),$("#logintitle").html("鐧诲綍鑱旀兂甯愬彿"),$(".layer-bg").show(),$("#loginiframe").show()}function registeriframe(){var e=encodeURIComponent(window.location.href),n=$.base64("encode",e),t=HOST.replace("http://",""),a=LENOVOHOST+"/wauthen2/wauth/jsp/ilogin.jsp?lenovoid.iframestate=register&lenovoid.action=diylogin&lenovoid.realm="+REALM+"&lenovoid.uinfo=username&lenovoid.ctx="+n+"&lenovoid.cb="+HOST+"/login/logincallback.jhtml&lenovoid.hidewechat=0&lenovoid.hideregemail=0&lenovoid.hideqrlogin=0&lenovoid.source=browser:"+t+"&lenovoid.vp=0&intcmp=lenovoID_log&display=";$("#lenovoidiframe").attr("src",a),$("#logintitle").html("娉ㄥ唽鑱旀兂甯愬彿"),$(".layer-bg").show(),$("#loginiframe").show()}function logincloseiframe(){$(".layer-bg").hide(),$("#loginiframe").hide(),$("#logintitle").html("")}function getCookie(e){var n=document.cookie.match(new RegExp("(^| )"+e+"=([^;]*)(;|$)"));return null!=n?n[2]:null}function loginSuccessTagOp(e){if(e.v){$(".user-name-box").hover(function(){$(this).addClass("has-layer")},function(){$(this).removeClass("has-layer")});var n=getCookie("SHOP_niceName"),t=decodeURIComponent(n||"");$(".user-name strong").html(t),$("#personal-center-box").show(),$("#login-center-box").hide(),e.share&&$('<li><a href="'+HOST+'/member/share/product.jhtml">Mo鑼冨効</a><span class="sj-icon"></span></li>').appendTo(".store-common-nav")}else $("#personal-center-box").hide(),$("#login-center-box").show()}!function(f){f.base64=f.fn.base64=function(e,n){var t={},u=this,p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";return t.encode=function(e){if(e=u instanceof f?u.is(":input")?u.val():u.text():e,""!==(e=unescape(encodeURIComponent(e)))){var n,t,a,o,r,i=0,s=0,l="",d=[];if(!e)return e;for(;n=(r=e.charCodeAt(i++)<<16|e.charCodeAt(i++)<<8|e.charCodeAt(i++))>>18&63,t=r>>12&63,a=r>>6&63,o=63&r,d[s++]=p.charAt(n)+p.charAt(t)+p.charAt(a)+p.charAt(o),i<e.length;);l=d.join("");var c=e.length%3;return(c?l.slice(0,c-3):l)+"===".slice(c||3)}},t.decode=function(e){var n,t,a,o,r,i,s,l=0,d=0,c=[];if(!(e=u instanceof f?u.is(":input")?u.val():u.text():e))return e;for(e+="";n=(i=p.indexOf(e.charAt(l++))<<18|p.indexOf(e.charAt(l++))<<12|(o=p.indexOf(e.charAt(l++)))<<6|(r=p.indexOf(e.charAt(l++))))>>16&255,t=i>>8&255,a=255&i,c[d++]=64==o?String.fromCharCode(n):64==r?String.fromCharCode(n,t):String.fromCharCode(n,t,a),l<e.length;);return s=c.join(""),decodeURIComponent(escape(s))},n?t[e](n):e?null:t}}(jQuery);var myRegexp=/[^.]*\.[^.]{2,3}(?:\.[^.]{2,3})?$/g;document.domain=myRegexp.exec(location.host);var LID={};function LenovoIdSyncLoginState(e){$.ajax({url:HOST+"/login/singlelogin.jhtml",type:"POST",async:!1,cache:!1,dataType:"json",data:{wust:e},success:function(e){null!=e&&1==e.status&&Common.processLogin()}})}function getQueryString(e){var n=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),t=window.location.search.substr(1).match(n);return null!=t?unescape(t[2]):null}LID.Module={iTitle:function(e){$(".jsPopupTitle").text(e)},iHeight:function(e){$(".jsIframe").css("height",e+"px")},iLoginQQ:function(e){window.location.href=LENOVOHOST+"/wauthen2/gateway?lenovoid.thirdname=qqsns&"+e},iLoginSina:function(e){window.location.href=LENOVOHOST+"/wauthen2/gateway?lenovoid.thirdname=sina&"+e},iLpsust:function(e){$.ajax({url:HOST+"/login/logingetinfo.jhtml",type:"POST",async:!1,cache:!1,dataType:"json",data:{"lenovoid.wust":e},success:function(e){if(null!=e&&1==e.status){logincloseiframe(),Common.processLogin(),"undefined"!=typeof web_chat_param&&(web_chat_param.uid=getcookie("SHOP_id")||"",web_chat_param.uname=getcookie("SHOP_niceName")||"");var n=["/","/com.shenqi.web.shop/","/zt/"],t=window.location.pathname,a=!0;for(var o in n){if(n[o]==t){a=!1;break}if(1<o&&-1!=t.indexOf(n[o])){a=!1;break}}var r=getcookie("time.red.200")||"";a&&1!=r&&hdredbegin<=currentTime&&hdredend>=currentTime&&yrredend<currentTime&&yearRedShow(),"undefined"!=typeof motozkp&&motozkp&&window.location.reload(),"undefined"!=typeof isCustomSkuDetail&&isCustomSkuDetail&&1==isCustomSkuDetail&&reloadCustomInfo()}}})},iRedirect:function(e){window.open(e,"_blank")}},$.dialog=function(e){var n={width:320,height:"auto",modal:!0,text:"纭瑕佸垹闄よ鍟嗗搧鍚楋紵",ok:"纭畾",cancel:"鍙栨秷",onShow:null,onClose:null,onOk:null,onCancel:null,autoClose:null};if($.extend(n,e),null==n.content)return!1;var t,a,o,r,i,s,l,d,c,u=$('<div class="pop-layer stock-layer"></div>'),p=$('<div class="pop-layer-head"></div>'),f=$('<a href="#" class="close">鍏抽棴</a>');function h(){n.onClose&&"function"==typeof n.onClose?0!=n.onClose(u)&&(l.remove(),u.remove()):(l.remove(),u.remove())}return null!=n.title&&(t=$("<h3>纭鎻愮ず</h3>").appendTo(p)),f.appendTo(p),a=$('<div class="pop-layer-bd"></div>'),null!=n.content&&(o=$('<div style="text-align: center;"><span class="tips-txt"><i></i>'+n.content+"</span></div>")),o.appendTo(a),r=$('<div class="pop-layer-footer clearfix"></div>'),null!=n.cancel&&(s=$('<a href="javaScript://" class="cancle-btn">'+n.cancel+"</a>").appendTo(r)),null!=n.ok&&(i=$('<input type="button" value="'+n.ok+'" class="sub-btn"/>').appendTo(r)),u.append(p).append(a).append(r),u.appendTo("body"),n.modal&&(l=$('<div class="layer-bg"></div>').insertAfter(u)),null!=n.title&&t.html(n.title),u.css({width:n.width,height:n.height,"margin-left":-parseInt(n.width/2),"z-index":1e4}),null!=t&&t.mousedown(function(e){u.css({"z-index":zIndex++});var n=$(this).offset();return c=window.XMLHttpRequest?(d=e.pageX-n.left,e.pageY-n.top):(d=e.clientX-n.left,e.clientY-n.top),$("body").bind("mousemove",function(e){u.css({top:e.clientY-c,left:e.clientX-d,margin:0})}),!1}).mouseup(function(){return $("body").unbind("mousemove"),!1}),n.autoClose&&setTimeout(function(){h()},3e3),null!=f&&f.click(function(){return h(),!1}),null!=i&&i.click(function(){return n.onOk&&"function"==typeof n.onOk?0!=n.onOk(u)&&h():h(),!1}),null!=s&&s.click(function(){return n.onCancel&&"function"==typeof n.onCancel?0!=n.onCancel(u)&&h():h(),!1}),u};var addCookie=function(e,n,t){var a=e+"="+unescape(n);if(0<t){var o=new Date,r=3600*t*1e3;o.setTime(o.getTime()+r),a+="; expires="+o.toGMTString()}a+="; domain="+domainLocal+"; path=/",document.cookie=a};function getcookie(e){var n=document.cookie,t=n.indexOf(e+"=");if(-1==t)return null;t+=e.length+1;var a=n.indexOf("; ",t);return-1==a?unescape(n.substring(t)):unescape(n.substring(t,a))}function fadeShow(e,n,t){$(window).scroll(function(){$(window).scrollTop()>n?$(e).fadeIn(t):$(e).fadeOut(t)}),$(e).click(function(){return $("body,html").animate({scrollTop:0},t),!1})}var oneYearTime,the_ssl=0;function oneYearTimeFun(e,n){if(0<(the_ssl=e)){var t=Math.floor(e/3600),a=Math.floor((e-3600*t)/60),o=(e-3600*t)%60;html="",html+=0!=t?"<span>"+(t<10?"0"+t:t)+"</span><i>:</i>":"<span>00</span><i>:</i>",html+=0!=t||0!=a?"<span>"+(a<10?"0"+a:a)+"</span><i>:</i>":"<span>00</span><i>:</i>",html+=o<10?"<span>0"+o+"</span>":"<span>"+o+"</span>",$("."+n).html(html),the_ssl--,oneYearTime=window.setTimeout("oneYearTimeFun("+the_ssl+", '"+n+"');",1e3)}else window.clearInterval(oneYearTime),window.location.reload()}var $redClose,_adwq=_adwq||[];function yearRedShow(){var e=$('<div class="zn-red-paper" style="display: block;"></div>');$redClose=$('<span class="close"></span>');var n=$("<p>璇蜂簬4鏈�22鏃�24:00鍓嶄娇鐢ㄥ摝</p>"),t=$('<a href="javascript:;">绔嬪嵆棰嗗彇</a>');e.append($redClose),e.append(n),e.append(t);var a=$('<div class="layer-bg" style="display: block;"></div>');a.appendTo("body"),e.appendTo("body"),$redClose.click(function(){return a.remove(),e.remove(),!1}),t.click(function(){return getYearRed(),!1})}function getYearRed(){$.ajax({type:"post",url:HOST+"/store/coupon/get.jhtml",data:{activityId:22},success:function(e){if(null!=e){var n=e.msg,t=e.content;if($redClose.click(),"win"==n){addCookie("time.red.200",1,48);var a=e.coupons;redPage01(a.price,a.endtime)}else"nologin"==n?($redClose.click(),loginiframe()):"againwin"==n?(addCookie("time.red.200",1,48),redPage02(t)):"end"==n?alert("姝ゆ椿鍔ㄥ凡杩囨湡浜嗗摝~"):"nostart"==n?alert("寰堟姳姝夛紝璇ユ椿鍔ㄨ繕鏈紑濮嬨€�"):"nowin"==n&&alert("娌℃姠鍒帮紝璇风户缁紒")}},dataType:"json"})}function redPage01(e,n){var t=$('<div class="reservation-layer-mod reservation-red successed" style="display: block;"></div>'),a=$('<span class="close"></span>'),o=$('<p class="line-one">'+e+"鍏冧紭鎯犲埜棰嗗彇鎴愬姛</p>"),r=$('<p class="txt1">浼樻儬鍒歌繃鏈熸椂闂达細'+n+"</p>"),i=$('<p class="txt2">璐拱Z1鏍囬厤鐗堟垨Z1濂楅鍙敤</p>'),s=$('<a id="zukyear_clickAlertBuyNow" href="'+HOST+'/store/2.html" class="yuyue-btn">绔嬪嵆璐拱</a>'),l=$('<p class="txt3">浼樻儬鍒稿彲鍦ㄥ～鍐欒鍗曟椂閫夊彇浣跨敤锛岀珛鍑�'+e+"鍏冿紒</p>");t.append(a),t.append(o),t.append(r),t.append(i),t.append(s),t.append(l);var d=$('<div class="layer-bg" style="display: block;"></div>');d.appendTo("body"),t.appendTo("body"),a.click(function(){return d.remove(),t.remove(),!1}),Avatar.push(["register",document.getElementById("zukyear_clickAlertBuyNow"),{parser:clickBtnOrLink,args:["zukyear_clickAlertBuyNow","浼樻儬鍔甸鍙栧脊妗嗙珛鍗宠喘涔�"]}])}function redPage02(e){var n=$('<div class="reservation-layer-mod reservation-red" style="display: block;"></div>'),t=$('<span class="close"></span>'),a=$('<p class="line-one">鎮ㄥ凡棰嗚繃浼樻儬鍒革紝蹇幓涓嬪崟鍚э紒</p>'),o=$('<a id="zukyear_clickAlertBuyNow" class="yuyue-btn" href="'+HOST+'/store/2.html">绔嬪嵆璐拱</a>'),r=$('<p class="txt3">浼樻儬鍒稿彲鍦ㄥ～鍐欒鍗曟椂閫夊彇浣跨敤锛岀珛鍑�'+e+"鍏冿紒</p>");n.append(t),n.append(a),n.append(o),n.append(r);var i=$('<div class="layer-bg" style="display: block;"></div>');i.appendTo("body"),n.appendTo("body"),t.click(function(){return i.remove(),n.remove(),!1}),Avatar.push(["register",document.getElementById("zukyear_clickAlertBuyNow"),{parser:clickBtnOrLink,args:["zukyear_clickAlertBuyNow","浼樻儬鍔甸鍙栧脊妗嗙珛鍗宠喘涔�"]}])}function clickProductList(e,n,t,a){var o="",r={};null==e.target.getAttribute("index")?(o=e.target.parentNode.getAttribute("index"),r.cnt=e.target.parentNode.getAttribute("href"),null==o?(o=e.target.parentNode.parentNode.getAttribute("index"),r.cnt=e.target.parentNode.parentNode.getAttribute("href"),null==e.target.parentNode.parentNode.getAttribute("index")?(o=e.target.parentNode.parentNode.parentNode.getAttribute("index"),r.cnt=e.target.parentNode.parentNode.parentNode.getAttribute("href")):(o=e.target.parentNode.parentNode.getAttribute("index"),r.cnt=e.target.parentNode.parentNode.getAttribute("href"))):(o=e.target.parentNode.getAttribute("index"),r.cnt=e.target.parentNode.getAttribute("href"))):(o=e.target.getAttribute("index"),r.cnt=e.target.getAttribute("href"));var i=["__NEWUA__",t+"_"+o,a];return r.pos=o,r.pgn="鍟嗗煄",r.url=window.location.href,i.push(r),i}function videoPlay(e){$(e).click(function(){var e=$(this).data("src");$(".vedio-layer iframe").attr("src",e),$(".layer-bg").show(),$(".vedio-layer").show()})}function understands_video(){return!!document.createElement("video").canPlayType}function clickList1(e,n){return["__NEWUA__",e.target.getAttribute("index")]}function clickBtnOrLink(e,n,t,a){return["__NEWUA__",t,a,{},0]}function supportCss3(e){function n(e){return e.replace(/-(\w)/g,function(e,n){return n.toUpperCase()})}var t,a=["webkit","Moz","ms","o"],o=[],r=document.documentElement.style;for(t in a)o.push(n(a[t]+"-"+e));for(t in o.push(n(e)),o)if(o[t]in r)return!0;return!1}$(document).ready(function(){Common.processLogin(),Common.processCart(),Common.processFeast();var e=$(".nav-wrap").attr("suburl");Common.getSubHtml(e),$("body").on("click",".detail-layer .close",function(){$(".layer-bg,.detail-layer").hide(),window.clearTimeout(t)});var n=getQueryString("LTINFO"),a=getQueryString("euid");if(""!=n&&null!=n&&"undefined"!=n&&(n=encodeURIComponent(n),addCookie("LTINFO",n,720)),""!=a&&null!=a&&"undefined"!=a&&(a=encodeURIComponent(a),addCookie("euid",a,720)),"sqgc1303"==getcookie("source_cid")){_adwq.push(["_setAccount","x77w4"]),_adwq.push(["_setDomainName",domainLocal]),_adwq.push(["_trackPageview"]);var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=("https:"==document.location.protocol?"https://ssl":"http://s")+".emarbox.com/js/adw.js";var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(o,r)}$(".copyright .language").hover(function(){$(this).addClass("hover-layer")},function(){$(this).removeClass("hover-layer")}),$(".col-links .weixin").on({mouseenter:function(){$(this).find(".ewm").show()},mouseleave:function(){$(this).find(".ewm").delay(300).hide(0)}});var i=null;$(".nav-wrap .item").hover(function(){var e=$(this).attr("data-layer");clearInterval(i),$(this).addClass("cur").siblings().removeClass("cur"),$("#"+e).show().siblings().hide(),$(".sub-product-nav").slideDown(200)},function(){width=0,i=setInterval(function(){$(".sub-product-nav").slideUp(200),$(".nav-wrap .item").removeClass("cur")},300)}),$(".sub-product-nav").hover(function(){clearInterval(i)},function(){i=setInterval(function(){$(".sub-product-nav").slideUp(200),$(".nav-wrap .item").removeClass("cur")},300)})}),$(".vedio-layer .close").click(function(){$(".layer-bg").hide(),$(".vedio-layer").hide(),$(".vedio-layer iframe").attr("src","")}),window.Avatar=window.Avatar||[];