
var siteid = "kf_9151";

var settingid = "kf_9151_1463446736150";
var domain = ".motorola.com.cn";
var uid = getCookieValueForXn('SHOP_id') || "";
var uname = getCookieValueForXn('SHOP_niceName') || "";
var sign = getCookieValueForXn('SHOP_mqklxnxn') || "";
var isvip = 0;
var userlevel = "";
var web_chat_param = {siteid : siteid, uid: uid, settingid:settingid, uname: uname};
var xn_post_data = {"siteid":siteid};
var xnCookiesName = "use_xn_chat_"+uid;
NTKF_PARAM = web_chat_param;
var webChat = {

submit_order : function(orderid, orderprice){
if(webChat.is_use()){
web_chat_param.settingid = settingid;
web_chat_param.orderid = orderid;
web_chat_param.orderprice = orderprice;
NTKF_PARAM = web_chat_param;

openXnChart(false);
}
},

confir_order : function(ntalkerparam){
web_chat_param.settingid = settingid;
web_chat_param.ntalkerparam = ntalkerparam;
},

cart : function(ntalkerparam){
web_chat_param.settingid = settingid;
web_chat_param.ntalkerparam = ntalkerparam;
},

item_page : function(ntalkerparam){
web_chat_param.settingid = settingid;
web_chat_param.ntalkerparam = ntalkerparam;
},

product_detail : function(ntalkerparam){
web_chat_param.settingid = settingid;
web_chat_param.ntalkerparam = ntalkerparam;
},

pay_success : function(orderid, orderprice, paytime, payStatus){
if(webChat.is_use()){
web_chat_param.settingid = settingid;
web_chat_param.orderid = orderid;
web_chat_param.orderprice = orderprice;

NTKF_PARAM = web_chat_param;
openXnChart(false);
}
},

is_use : function isUseXnNtkf(){
var uservalue = getCookieValueForXn(xnCookiesName) || "";
if(uservalue == "" || uservalue == "null"){
return false;
}
return true;
}
}
$(function(){
var orderSucPath = "/store/pay/paypage.jhtml";
var paySucPath = "/member/order/orderinfo.jhtml";
var currxnPathname = window.location.pathname;
$(".col-contact .contact-btn").removeAttr("target");
$(".col-contact .contact-btn").attr("href", "javascript:;");
$(".col-contact .contact-btn").on('click',commonchat);
$("#servicechat").on('click',commonchat);	

function commonchat(){
if(!checklogin()){
loginiframe();
} else{
if(webChat.is_use() == false || (orderSucPath != currxnPathname && paySucPath != currxnPathname)){
//openXnChart(true);
	window.location.href="https://srv.lenovo.com.cn/chat/index.do?sd=1&gd=133&pt=4";
} else{
//NTKF.im_openInPageChat();
//setCookieValueForXn(xnCookiesName, true, 48);
	window.location.href="https://srv.lenovo.com.cn/chat/index.do?sd=1&gd=133&pt=4";
}
}
};

var len = $(".fixed-layer .service").length;
if(len > 0){
$(".fixed-layer .service").removeAttr("target");
$(".fixed-layer .service").attr("href", "javascript:;");
$(".fixed-layer .service").on('click',function(){
if(!checklogin()){
loginiframe();
} else{
//openXnChart(true)
	window.location.href="https://srv.lenovo.com.cn/chat/index.do?sd=1&gd=133&pt=4";
}
});
}
});

function getCookieValueForXn(cookiename){
var cookiestring = document.cookie;
var start = cookiestring.indexOf(cookiename + '=');
if (start == -1)   //   鎵句笉鍒�
return   null;
start += cookiename.length   +   1;
var end = cookiestring.indexOf( "; ",   start);
if (end == -1) return decodeURIComponent(cookiestring.substring(start));
return decodeURIComponent(cookiestring.substring(start, end));
}
function setCookieValueForXn(cookieName, cookieValue, cookieHours){
var str = cookieName + "=" + encodeURIComponent(cookieValue);
if (cookieHours > 0) {
var date = new Date();
var ms = cookieHours * 3600 * 1000;
date.setTime(date.getTime() + ms);
str += "; expires=" + date.toGMTString();
}
str += "; domain="+domain+"; path=/";
document.cookie = str;
}

function checklogin(){
var cookie_value = getcookie('SHOP_id'); 
cookie_value = cookie_value || "";
if(cookie_value == null || "" == cookie_value || "null" == cookie_value){
return false;
} 
return true;
}

function openXnChart(open)
{
var protocol = "https:" == location.protocol ? "https://dl.ntalker.com/js/xn6/ntkfstat.js" : "http://dl.ntalker.com/js/xn6/ntkfstat.js";
$.ajax({
type:"GET",
url : protocol,
data : xn_post_data,
cache: true,
dataType:"script",
success : function(){
if(open)
{
NTKF.im_openInPageChat();
setCookieValueForXn(xnCookiesName, true, 48);
}
}
});
}