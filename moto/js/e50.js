var Avatar = {
	push : function() {
		
	}
};
//闄愭椂鎶㈣喘 
var t;
var currentTime = "";
var domainLocal = ".motorola.com.cn";
var Common = {
	processLogin : function() {
		$.ajax({
			url : HOST + "/login/login_info.jhtml",
			type : "POST",
			data : {},
			dataType : "json",
			cache : false,
			success : function(result) {
				loginSuccessTagOp(result);
			}
		});
	},
	processCart : function() {
		$.ajax({
			url : HOST + "/store/cart/cart_total.jhtml",
			type : "POST",
			data : {},
			dataType : "json",
			cache : false,
			success : function(result) {
				$("#i_cart_total").html(result.count);
			}
		});
	},
	getToken : function() {
		var token = "";
		$.ajax({
			url : HOST + "/token/token.jhtml",
			type : "POST",
			data : {},
			dataType : "json",
			cache : false,
			async : false,
			success : function(result) {
				token = result.token;
			}
		});
		return token;
	},
	processFeast : function() {
		var paths = [ "/", "/com.shenqi.web.shop/", "/zt/" ];
		var currPathname = window.location.pathname;
		var show_feast = true;
		for ( var i in paths) {
			if (paths[i] == currPathname) {
				show_feast = false;
				break;
			}
			if (i > 1 && currPathname.indexOf(paths[i]) != -1) {
				show_feast = false;
				break;
			}
		}
		if (show_feast) {
			yrredbegin = typeof (yrredbegin) == "undefined" ? 0 : yrredbegin;
			yrredend = typeof (yrredend) == "undefined" ? 0 : yrredend;
			hdredbegin = typeof (hdredbegin) == "undefined" ? 0 : hdredbegin;
			hdredend = typeof (hdredend) == "undefined" ? 0 : hdredend;
			if (yrredbegin > 0 && yrredend > 0 && hdredbegin > 0 && hdredend > 0) {
				$.get(HOST + "/time.jhtml", null, function(data, status) {
					currentTime = parseInt(data);
					if (yrredbegin <= currentTime && yrredend >= currentTime) {
						$("body").addClass("white-theme");
						$("<link>").attr({
							rel : "stylesheet",
							type : "text/css",
							href : IMAGEURL + "/css/fesitval.css"
						}).appendTo("head");
						$(".global-header .wrapper").append("<div class=\"countdown\"></div>");
						oneYearTimeFun(yrredend - currentTime, "countdown");
					} else if (hdredbegin <= currentTime && hdredend >= currentTime) {
						$("<link>").attr({
							rel : "stylesheet",
							type : "text/css",
							href : IMAGEURL + "/css/fesitval1.css"
						}).appendTo("head");
						var year_red_html = "<span id=\"year_red_picture\" class=\"small-red-paper\">200鍏冪幇閲戝埜</span>";
						year_red_html = year_red_html + "<div class=\"countdown-box\"><p>璺濇椿鍔ㄧ粨鏉熻繕鏈�</p><div class=\"countdown\"></div></div>";
						$(".global-header .wrapper").append(year_red_html);
						oneYearTimeFun(hdredend - currentTime, "countdown");
						$("#year_red_picture").click(function() {
							yearRedShow();
						});
						if ("/store/" == currPathname || "/com.shenqi.web.shop/store/" == currPathname) {
							var cookie_value = getcookie('time.red.200') || "";
							if (cookie_value != 1) {
								yearRedShow();
							}
						}
					}
				});
			}
		}
	},
	getSubHtml : function(url) {
		if(url)
		{
			$.get(HOST +url, function(data) {
				$(data).appendTo('.sub-product-nav');
			});
		}
	},
	debug : function() {
		// console.log(arguments);
		// alert("DEBUG");
	},
	run : false,
	processAdd2CartCallback : function(data, pid, skuid, count, name, categoryid, categoryname) {
		if (!this.run) {
			return;
		}
		/* idsp */
		var price = 0;

		for ( var skuKey in data) {
			if (data[skuKey].skuid == skuid) {
				price = data[skuKey].p_price;
				name = data[skuKey].name;
				break;
			}
		}

		var idspItem = {
			"type" : "addtocart", // 蹇呭～锛岀數鍟嗚浆鍖栫被鍒爣璇嗙锛屼笉鍙洿鏀�
			"sku" : skuid, // 蹇呭～锛屽晢鍝乻ku
			"price" : price, // 蹇呭～锛屽晢鍝佸崟浠�
			"quantity" : count, // 蹇呭～锛屽晢鍝佽喘涔版暟閲�
			"product" : name, // 蹇呭～锛屽晢鍝佸悕绉�
			"category" : categoryname, // 蹇呭～锛屽晢鍝佸垎绫伙紝澶氫釜鍒嗙被涔嬮棿鐢ㄨ嫳鏂囧崐瑙掗€楀彿闅斿紑
			"brand" : "", // 閫夊～锛屽晢鍝佸搧鐗�
			"store" : "", // 閫夊～锛屽晢閾烘爣璇嗭紝涓€鑸敤浜嶣2C骞冲彴鍏ラ┗鍟嗗鐨勫満鏅�
			"pid" : pid, // 蹇呭～锛屼骇鍝両D
			"uid" : "" // 閫夊～锛岀敤鎴峰敮涓€鏍囪瘑
		};
		MLTrackerz.track(idspItem);
		this.debug("idsp-鍔犲叆璐墿杞�", idspItem);
	},
	processGo2OrderCallback : function() {
		if (!this.run) {
			return;
		}
		/* idsp */
		var data = {
			"type" : "event",
			"action" : "鍘荤粨绠梍PC"
		};
		MLTrackerz.track(data);
	},
	processSubmit2OrderCallback : function() {
		if (!this.run) {
			return;
		}
		var idspPage = {
			type : "event",
			action : "绔嬪嵆涓嬪崟_PC"
		};
		MLTrackerz.track(idspPage);
	},
	processGo2PayCallback : function() {
		if (!this.run) {
			return;
		}
		/* idsp */
		MLTrackerz.track({
			type : "event",
			action : "鍘绘敮浠榑PC"
		});
		this.debug("idsp-鍘绘敮浠榑PC");
	},
	processOrderPaySuccessCallback : function(orderInfo) {
		if (!this.run) {
			return;
		}
		/* 澶勭悊鏀粯鎴愬姛鍥炶皟 300绉掑唴鍥炶皟 */
		var now = parseInt(new Date().getTime() / 1000);
		var paytime = orderInfo.payTime;
		if (orderInfo.payStatus == 2 && (now - paytime) < 3000) {
			var ckname = "pay_sucess_" + orderInfo.orderId;
			if (getCookie(ckname) == null) {
				/* 灏忚兘 */
				if (typeof (webChat) != "undefined") {
					webChat.pay_success(orderInfo.orderId, orderInfo.payFee);
				}
				/* 鍝佸弸 */
				var items = [];
				for (var i = 0; i < orderInfo.items.length; i++) {
					var item = {
						"id" : orderInfo.items[i].skuid,
						"count" : orderInfo.items[i].count,
						"price" : orderInfo.items[i].promotionPrice + ""
					};
					items.push(item);
				}
				var pinYouData = {
					'id' : orderInfo.orderId,
					'money' : orderInfo.payFee,
					'items' : items
				};
				py('event', 'order', pinYouData).track('cWs8T.wZ2.qr_NQH6EFCIWwy7RH2NfB0');

				/* idsp */
				var idspItem = {
					"type" : "payment", // 蹇呭～锛岃鍗曚粯娆炬垚鍔熺洃娴嬬殑鏍囪瘑绗︼紝涓嶅彲鏇存敼
					"orderId" : orderInfo.orderId, // 蹇呭～锛岃鍗旾D,蹇呴』涓庤鍗曠洃娴嬪唴鐨勮鍗旾D鐩稿悓
					"total" : orderInfo.payFee, // 蹇呭～锛岃鍗曟€婚噾棰�
					"checkout" : orderInfo.payFee
				// 蹇呭～锛屽疄闄呮敮浠樼殑閲戦
				};
				MLTrackerz.track(idspItem);
				addCookie(ckname, 1);
				this.debug(idspItem, pinYouData);
			}
		}
	},
	processViewCartDataCallback : function(data) {
		if (!this.run) {
			return;
		}
		/* 鍝佸弸 */
		if (data != null && data != "" && data.products != null && data.products.length > 0) {
			var items = [];
			for (var i = 0; i < data.products.length; i++) {
				var item = {
					"id" : data.products[i].product.skuid,
					"count" : data.products[i].product.count,
					"price" : data.products[i].product.promotionPrice
				};
				items.push(item);
			}
			var data = {
				'money' : data.totalFee,
				'items' : items
			};
			py('event', 'viewCart', data).track('cWs8T.XZ2.24yqZ2o1HWZAbHW0Mf5b-P');
			this.debug('event', 'viewCart', data, 'cWs8T.XZ2.24yqZ2o1HWZAbHW0Mf5b-P');
		}
	}
};
var Message = {
	tipsYB : function(text,callback) {
		if ($(".detail-layer").length > 0) {
			var textBox = "<span>" + text + "</span>";
			$(".detail-layer").find("p").html(textBox);
			$(".detail-layer,.layer-bg").fadeIn();
		} else {
			var html = "";
			if ($(".layer-bg").length > 0) {
				$(".layer-bg").show();
			} else {
				html = "<div class=\"layer-bg\"></div>";
			}
			html += "<div  class=\"detail-layer\"><span class=\"close\"></span><p><span>" + text + "</span></p></div>";
			$("body").append(html);
		}
		
		function hide(){
			$('.detail-layer,.layer-bg').fadeOut();
			if(callback){
				callback();
			}
		}
		t = setTimeout(hide, 3000);
	},
	tipsPS : function(text) {
		if ($(".detail-layer").length > 0) {
			var textBox = "<span>" + text + "</span>";
			$(".detail-layer").find("p").html(textBox);
			$(".detail-layer,.layer-bg").fadeIn();
		} else {
			var html = "";
			if ($(".layer-bg").length > 0) {
				$(".layer-bg").show();
			} else {
				html = "<div class=\"layer-bg\"></div>";
			}
			html += "<div  class=\"detail-layer remind-succuss\"><span class=\"close\"></span><p><span>" + text + "</span></p></div>";
			$("body").append(html);
		}
		t = setTimeout("$('.detail-layer,.layer-bg').fadeOut();", 3000);
	},
	tipsAB : function(text,flag) {
		if ($(".detail-layer").length > 0) {
			var textBox = "<span class=\"xiajia\">" + text + "</span>";
			$(".detail-layer").find("p").html(textBox);
			$(".detail-layer,.layer-bg").fadeIn();
		} else {
			var html = "";
			if ($(".layer-bg").length > 0) {
				$(".layer-bg").show();
			} else {
				html = "<div class=\"layer-bg\"></div>";
			}
			html += "<div  class=\"detail-layer\"><span class=\"close\"></span><p><span class=\"xiajia\">" + text + "</span></p></div>";
			$("body").append(html);
		}
		if(flag){
			t = setTimeout("$('.detail-layer').fadeOut();", 2000);
		}else{
			t = setTimeout("$('.detail-layer,.layer-bg').fadeOut();", 2000);
		}
		
	}
};
/*
 * ! jquery.base64.js 0.1 - https://github.com/yckart/jquery.base64.js Base64 en &
 * -decoding
 * 
 * Copyright (c) 2012 Yannick Albert (http://yckart.com) Licensed under the MIT
 * license (http://www.opensource.org/licenses/mit-license.php). 2013/02/10
 */
;
(function($) {
	$.base64 = $.fn.base64 = function(dir, input) {
		var publ = {}, self = this, b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
		// http://phpjs.org/functions/base64_encode/
		publ.encode = function(data) {
			data = !(self instanceof $) ? data : self.is(':input') ? self.val() : self.text();
			data = unescape(encodeURIComponent(data));

			if (data === '')
				return;
			var o1, o2, o3, h1, h2, h3, h4, bits, i = 0, ac = 0, enc = "", tmp_arr = [];

			if (!data)
				return data;

			do { // pack three octets into four hexets
				o1 = data.charCodeAt(i++);
				o2 = data.charCodeAt(i++);
				o3 = data.charCodeAt(i++);

				bits = o1 << 16 | o2 << 8 | o3;

				h1 = bits >> 18 & 0x3f;
				h2 = bits >> 12 & 0x3f;
				h3 = bits >> 6 & 0x3f;
				h4 = bits & 0x3f;

				// use hexets to index into b64, and append result to encoded
				// string
				tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
			} while (i < data.length);

			enc = tmp_arr.join('');

			var r = data.length % 3;

			return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);
		};

		// http://phpjs.org/functions/base64_decode/
		publ.decode = function(data) {
			data = !(self instanceof $) ? data : self.is(':input') ? self.val() : self.text();

			var o1, o2, o3, h1, h2, h3, h4, bits, i = 0, ac = 0, dec = "", tmp_arr = [];

			if (!data)
				return data;

			data += '';

			do { // unpack four hexets into three octets using index points
				// in b64
				h1 = b64.indexOf(data.charAt(i++));
				h2 = b64.indexOf(data.charAt(i++));
				h3 = b64.indexOf(data.charAt(i++));
				h4 = b64.indexOf(data.charAt(i++));

				bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;

				o1 = bits >> 16 & 0xff;
				o2 = bits >> 8 & 0xff;
				o3 = bits & 0xff;

				if (h3 == 64) {
					tmp_arr[ac++] = String.fromCharCode(o1);
				} else if (h4 == 64) {
					tmp_arr[ac++] = String.fromCharCode(o1, o2);
				} else {
					tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
				}
			} while (i < data.length);

			dec = tmp_arr.join('');

			return decodeURIComponent(escape(dec));
		};

		return input ? publ[dir](input) : dir ? null : publ;
	};
}(jQuery));

function loginiframe() {
	var lhref = encodeURIComponent(window.location.href);
	var ctx = $.base64('encode', lhref);
	var browser = HOST.replace("http://", "");
	var url = LENOVOHOST + "/wauthen2/wauth/jsp/ilogin.jsp?lenovoid.action=diylogin&lenovoid.realm=" + REALM + "&lenovoid.uinfo=username" + "&lenovoid.ctx=" + ctx + "&lenovoid.cb=" + HOST + "/login/logincallback.jhtml" + "&lenovoid.hidewechat=0&lenovoid.hideregemail=0&lenovoid.hideqrlogin=0" + "&lenovoid.source=browser:" + browser + "&lenovoid.vp=0&intcmp=lenovoID_log&display=";
	$("#lenovoidiframe").attr("src", url);
	$("#logintitle").html("鐧诲綍鑱旀兂甯愬彿");
	$(".layer-bg").show();
	$("#loginiframe").show();
}
function registeriframe() {
	var lhref = encodeURIComponent(window.location.href);
	var ctx = $.base64('encode', lhref);
	var browser = HOST.replace("http://", "");
	var url = LENOVOHOST + "/wauthen2/wauth/jsp/ilogin.jsp?lenovoid.iframestate=register&lenovoid.action=diylogin&lenovoid.realm=" + REALM + "&lenovoid.uinfo=username" + "&lenovoid.ctx=" + ctx + "&lenovoid.cb=" + HOST + "/login/logincallback.jhtml" + "&lenovoid.hidewechat=0&lenovoid.hideregemail=0&lenovoid.hideqrlogin=0" + "&lenovoid.source=browser:" + browser + "&lenovoid.vp=0&intcmp=lenovoID_log&display=";
	$("#lenovoidiframe").attr("src", url);
	$("#logintitle").html("娉ㄥ唽鑱旀兂甯愬彿");
	$(".layer-bg").show();
	$("#loginiframe").show();
}
function logincloseiframe() {
	$(".layer-bg").hide();
	$("#loginiframe").hide();
	$("#logintitle").html("");
}
function getCookie(name) {
	var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
	if (arr != null)
		return arr[2];
	return null;
}
function loginSuccessTagOp(result) {
	if (result.v) {
		$('.user-name-box').hover(function(){
			$(this).addClass('has-layer');
		},function(){
			$(this).removeClass('has-layer');
		});
		var code = getCookie('SHOP_niceName');
		var name = decodeURIComponent(code || "");
		$(".user-name strong").html(name);
		$("#personal-center-box").show();
		$("#login-center-box").hide();
		if(result.share)
		{
			$("<li><a href=\""+HOST+"/member/share/product.jhtml\">Mo鑼冨効</a><span class=\"sj-icon\"></span></li>").appendTo(".store-common-nav");
		}
	} else {
		$("#personal-center-box").hide();
		$("#login-center-box").show();
	}
}

var myRegexp = /[^.]*\.[^.]{2,3}(?:\.[^.]{2,3})?$/g;
document.domain = myRegexp.exec(location.host);
var LID = {};
LID.Module = {
	iTitle : function(sTitle) {
		$('.jsPopupTitle').text(sTitle);
	},
	iHeight : function(sHeight) {
		$('.jsIframe').css('height', sHeight + 'px');
	},
	iLoginQQ : function(sQuery) {
		window.location.href = LENOVOHOST + '/wauthen2/gateway?lenovoid.thirdname=qqsns&' + sQuery;
	},
	iLoginSina : function(sQuery) {
		window.location.href = LENOVOHOST + '/wauthen2/gateway?lenovoid.thirdname=sina&' + sQuery;
	},
	iLpsust : function(sLpsust) {
		$.ajax({
			url : HOST + '/login/logingetinfo.jhtml',
			type : 'POST',
			async : false,
			cache : false,
			dataType : 'json',
			data : {
				"lenovoid.wust" : sLpsust
			},
			success : function(data) {
				if (data != null && data.status == 1) {
					logincloseiframe();
					Common.processLogin();
					/* 娣诲姞灏忚兘鍜ㄨ鍙傛暟淇敼鐨勫鐞� added by liuxiaolong begin */
					if (typeof (web_chat_param) != "undefined") {
						web_chat_param.uid = getcookie('SHOP_id') || "";
						web_chat_param.uname = getcookie('SHOP_niceName') || "";
					}
					/* 娣诲姞灏忚兘鍜ㄨ鍙傛暟淇敼鐨勫鐞� added by liuxiaolong end */
					/* 鍛ㄥ勾搴嗙孩鍖呴鍙栧脊灞� */
					var paths = [ "/", "/com.shenqi.web.shop/", "/zt/" ];
					var currPathname = window.location.pathname;
					var show_feast = true;
					for ( var i in paths) {
						if (paths[i] == currPathname) {
							show_feast = false;
							break;
						}
						if (i > 1 && currPathname.indexOf(paths[i]) != -1) {
							show_feast = false;
							break;
						}
					}
					var cookie_value = getcookie('time.red.200') || "";
					if (show_feast && cookie_value != 1 && hdredbegin <= currentTime && hdredend >= currentTime && yrredend < currentTime) {
						yearRedShow();
					}
					if (typeof (motozkp) != "undefined" && motozkp) {
						window.location.reload();
					}
					/*custom callback*/
					if (typeof (isCustomSkuDetail) != "undefined" && isCustomSkuDetail) {
						if(isCustomSkuDetail==true){
							reloadCustomInfo();
						}
					}
				}
			}
		});

	},
	iRedirect : function(sUrl) {
		window.open(sUrl, '_blank');
	}
};

$.dialog = function(options) {
	var settings = {
		width : 320,
		height : "auto",
		modal : true,
		text : "纭瑕佸垹闄よ鍟嗗搧鍚楋紵",
		ok : "纭畾",
		cancel : "鍙栨秷",
		onShow : null,
		onClose : null,
		onOk : null,
		onCancel : null,
		autoClose : null
	};
	$.extend(settings, options);
	if (settings.content == null) {
		return false;
	}
	var $dialog = $('<div class="pop-layer stock-layer"></div>');
	var $dialogHead = $('<div class="pop-layer-head"></div>');

	var $dialogTitle;
	var $dialogClose = $('<a href="#" class="close">鍏抽棴</a>');
	var $dialogContent;
	var $dialogContentText;
	var $dialogBottom;
	var $dialogOk;
	var $dialogCancel;
	var $dialogOverlay;
	if (settings.title != null) {
		$dialogTitle = $('<h3>纭鎻愮ず</h3>').appendTo($dialogHead);
	}
	$dialogClose.appendTo($dialogHead);
	$dialogContent = $('<div class="pop-layer-bd"></div>');

	if (settings.content != null) {
		$dialogContentText = $('<div style="text-align: center;"><span class="tips-txt"><i></i>' + settings.content + '</span></div>');
	}
	$dialogContentText.appendTo($dialogContent);
	$dialogBottom = $('<div class="pop-layer-footer clearfix"></div>');

	if (settings.cancel != null) {
		$dialogCancel = $('<a href="javaScript://" class="cancle-btn">' + settings.cancel + '</a>').appendTo($dialogBottom);
	}
	if (settings.ok != null) {
		$dialogOk = $('<input type="button" value="' + settings.ok + '" class="sub-btn"/>').appendTo($dialogBottom);
	}
	$dialog.append($dialogHead).append($dialogContent).append($dialogBottom);
	$dialog.appendTo("body");

	if (settings.modal) {
		$dialogOverlay = $('<div class="layer-bg"><\/div>').insertAfter($dialog);
	}
	var dialogX;
	var dialogY;
	if (settings.title != null) {
		$dialogTitle.html(settings.title);
	}
	$dialog.css({
		"width" : settings.width,
		"height" : settings.height,
		"margin-left" : -parseInt(settings.width / 2),
		"z-index" : 10000
	});
	if ($dialogTitle != null) {
		$dialogTitle.mousedown(function(event) {
			$dialog.css({
				"z-index" : zIndex++
			});
			var offset = $(this).offset();
			if (!window.XMLHttpRequest) {
				dialogX = event.clientX - offset.left;
				dialogY = event.clientY - offset.top;
			} else {
				dialogX = event.pageX - offset.left;
				dialogY = event.pageY - offset.top;
			}
			$("body").bind("mousemove", function(event) {
				$dialog.css({
					"top" : event.clientY - dialogY,
					"left" : event.clientX - dialogX,
					"margin" : 0
				});
			});
			return false;
		}).mouseup(function() {
			$("body").unbind("mousemove");
			return false;
		});
	}
	if (settings.autoClose) {
		setTimeout(function() {
			dialogClose();
		}, 3000);
	}
	if ($dialogClose != null) {
		$dialogClose.click(function() {
			dialogClose();
			return false;
		});
	}
	if ($dialogOk != null) {
		$dialogOk.click(function() {
			if (settings.onOk && typeof settings.onOk == "function") {
				if (settings.onOk($dialog) != false) {
					dialogClose();
				}
			} else {
				dialogClose();
			}
			return false;
		});
	}
	if ($dialogCancel != null) {
		$dialogCancel.click(function() {
			if (settings.onCancel && typeof settings.onCancel == "function") {
				if (settings.onCancel($dialog) != false) {
					dialogClose();
				}
			} else {
				dialogClose();
			}
			return false;
		});
	}
	function dialogShow() {
		if (settings.onShow && typeof settings.onShow == "function") {

			if (settings.onShow($dialog) != false) {
				$dialog.show();
				$dialogOverlay.show();
			}
		} else {
			$dialog.show();
			$dialogOverlay.show();
		}
	}
	function dialogClose() {
		if (settings.onClose && typeof settings.onClose == "function") {
			if (settings.onClose($dialog) != false) {
				$dialogOverlay.remove();
				$dialog.remove();
			}
		} else {
			$dialogOverlay.remove();
			$dialog.remove();
		}
	}
	return $dialog;
};

function LenovoIdSyncLoginState(lenovoid_wust) {
	$.ajax({
		url : HOST + '/login/singlelogin.jhtml',
		type : 'POST',
		async : false,
		cache : false,
		dataType : 'json',
		data : {
			wust : lenovoid_wust
		},
		success : function(data) {
			if (data != null && data.status == 1) {
					Common.processLogin();
			}
		}
	});
}
function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null)
		return unescape(r[2]);
	return null;
}
// 娣诲姞cookie
var addCookie = function(cookieName, cookieValue, cookieHours) {
	var str = cookieName + "=" + unescape(cookieValue);
	if (cookieHours > 0) {
		var date = new Date();
		var ms = cookieHours * 3600 * 1000;
		date.setTime(date.getTime() + ms);
		str += "; expires=" + date.toGMTString();
	}
	str += "; domain=" + domainLocal + "; path=/";
	document.cookie = str;
};

function getcookie(cookiename) {
	var cookiestring = document.cookie;
	var start = cookiestring.indexOf(cookiename + '=');
	if (start == -1)
		return null;
	start += cookiename.length + 1;
	var end = cookiestring.indexOf("; ", start);
	if (end == -1)
		return unescape(cookiestring.substring(start));
	return unescape(cookiestring.substring(start, end));
}

function fadeShow(obj, h, time) {
	$(window).scroll(function() {
		if ($(window).scrollTop() > h) {
			$(obj).fadeIn(time);
		} else {
			$(obj).fadeOut(time);
		}
	});

	$(obj).click(function() {
		$('body,html').animate({
			scrollTop : 0
		}, time);
		return false;
	});
}
var the_ssl = 0;
var oneYearTime;
function oneYearTimeFun(the_time, objid) {
	the_ssl = the_time;
	if (the_ssl > 0) {
		var the_H = Math.floor((the_time) / 3600);
		var the_M = Math.floor((the_time - the_H * 3600) / 60);
		var the_S = (the_time - the_H * 3600) % 60;
		html = "";
		if (the_H != 0)
			html += "<span>" + (the_H < 10 ? "0" + the_H : the_H) + "</span><i>:</i>";
		else
			html += "<span>00</span><i>:</i>";
		if (the_H != 0 || the_M != 0)
			html += "<span>" + (the_M < 10 ? "0" + the_M : the_M) + "</span><i>:</i>";
		else
			html += "<span>00</span><i>:</i>";
		if (the_S < 10)
			html += "<span>" + "0" + the_S + "</span>";
		else
			html += "<span>" + the_S + "</span>";
		$("." + objid).html(html);
		the_ssl--;
		oneYearTime = window.setTimeout("oneYearTimeFun(" + the_ssl + ", '" + objid + "');", 1000);
	} else {
		window.clearInterval(oneYearTime);
		window.location.reload();
	}
}

var _adwq = _adwq || [];
$(document).ready(function() {
	Common.processLogin();
	Common.processCart();
	Common.processFeast();
	
	var suburl = $(".nav-wrap").attr("suburl");
	Common.getSubHtml(suburl);
	$("body").on("click", ".detail-layer .close", function() {
		$(".layer-bg,.detail-layer").hide();
		window.clearTimeout(t);
	})
	/*
	jQuery(function($) {
		$.getScript(LENOVOHOST + "/wauthen2/synCookie.jhtml?lenovoid_realm=" + REALM);
	});
	 var cid = getQueryString("cid"); */
	var ltinfo = getQueryString("LTINFO");
	var euid = getQueryString("euid");
	/*
	 * if ("" != cid && cid != null && cid != 'undefined') { cid =
	 * encodeURIComponent(cid); addCookie("source_cid", cid, 720); }
	 */
	if ("" != ltinfo && ltinfo != null && ltinfo != 'undefined') {
		ltinfo = encodeURIComponent(ltinfo);
		addCookie("LTINFO", ltinfo, 720);
	}
	if ("" != euid && euid != null && euid != 'undefined') {
		euid = encodeURIComponent(euid);
		addCookie("euid", euid, 720);
	}

	var cookie_value = getcookie('source_cid');
	if (cookie_value == 'sqgc1303') {

		_adwq.push([ '_setAccount', 'x77w4' ]);
		_adwq.push([ '_setDomainName', domainLocal ]);
		_adwq.push([ '_trackPageview' ]);

		var adw = document.createElement('script');
		adw.type = 'text/javascript';
		adw.async = true;
		adw.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://s') + '.emarbox.com/js/adw.js';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(adw, s);
	}
	/* 鍏辩敤搴曢儴璇█鍒囨崲鏁堟灉 */
	$('.copyright .language').hover(function() {
		$(this).addClass('hover-layer');
	}, function() {
		$(this).removeClass('hover-layer');
	})

	//bottom weixin img
	$('.col-links .weixin').on({
		'mouseenter':function(){
			$(this).find('.ewm').show();
		},
		'mouseleave':function(){
			$(this).find('.ewm').delay(300).hide(0);
		}
	})

	/*寮瑰嚭灞�*/
	var timer = null;
	$('.nav-wrap .item').hover(function(){
		var showLayer = $(this).attr("data-layer");
		clearInterval(timer);
		$(this).addClass('cur').siblings().removeClass('cur');
		$('#'+showLayer).show().siblings().hide();
		$('.sub-product-nav').slideDown(200);
	},function(){
		width=0;
		timer = setInterval(function(){
			$('.sub-product-nav').slideUp(200);
			$('.nav-wrap .item').removeClass('cur');
		},300)
	});
	
	$('.sub-product-nav').hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(function(){
			$('.sub-product-nav').slideUp(200);
			$('.nav-wrap .item').removeClass('cur');
		},300)
	})
 
	
	
});

/* 鍛ㄥ勾搴� */
var $redClose;
function yearRedShow() {
	var $redPage = $('<div class="zn-red-paper" style="display: block;"></div>');
	$redClose = $('<span class="close"></span>');
	var $redLineone = $('<p>璇蜂簬4鏈�22鏃�24:00鍓嶄娇鐢ㄥ摝</p>');
	var $redYuyueBtn = $('<a href="javascript:;">绔嬪嵆棰嗗彇</a>');
	$redPage.append($redClose);
	$redPage.append($redLineone);
	$redPage.append($redYuyueBtn);
	var $overlay = $('<div class="layer-bg" style="display: block;"></div>');
	$overlay.appendTo("body");
	$redPage.appendTo("body");
	$redClose.click(function() {
		$overlay.remove();
		$redPage.remove();
		return false;
	});
	$redYuyueBtn.click(function() {
		getYearRed();
		return false;
	});
}

function getYearRed() {
	$.ajax({
		type : "post",
		url : HOST + "/store/coupon/get.jhtml",
		data : {
			"activityId" : 22
		},
		success : function(data) {
			if (data != null) {
				var msg = data.msg;
				var content = data.content;
				$redClose.click();
				if (msg == "win") {
					addCookie("time.red.200", 1, 48);
					var coupons = data.coupons;
					redPage01(coupons.price, coupons.endtime);
				} else if (msg == "nologin") {
					$redClose.click();
					loginiframe();
				} else if (msg == "againwin") {
					addCookie("time.red.200", 1, 48);
					redPage02(content);
				} else if (msg == "end") {
					alert("姝ゆ椿鍔ㄥ凡杩囨湡浜嗗摝~");
				} else if (msg == "nostart") {
					alert("寰堟姳姝夛紝璇ユ椿鍔ㄨ繕鏈紑濮嬨€�");
				} else if (msg == "nowin") {
					alert("娌℃姠鍒帮紝璇风户缁紒");
				}
			}
		},
		dataType : "json"
	});
}

function redPage01(price, endtime) {
	var $redPage = $('<div class="reservation-layer-mod reservation-red successed" style="display: block;"></div>');
	var redClose = $('<span class="close"></span>');
	var $redLineone = $('<p class="line-one">' + price + '鍏冧紭鎯犲埜棰嗗彇鎴愬姛</p>');
	var $redText1 = $('<p class="txt1">浼樻儬鍒歌繃鏈熸椂闂达細' + endtime + '</p>');
	var $redText2 = $('<p class="txt2">璐拱Z1鏍囬厤鐗堟垨Z1濂楅鍙敤</p>');
	var $redYuyueBtn = $('<a id="zukyear_clickAlertBuyNow" href="' + HOST + '/store/2.html" class="yuyue-btn">绔嬪嵆璐拱</a>');
	var $redText3 = $('<p class="txt3">浼樻儬鍒稿彲鍦ㄥ～鍐欒鍗曟椂閫夊彇浣跨敤锛岀珛鍑�' + price + '鍏冿紒</p>');
	$redPage.append(redClose);
	$redPage.append($redLineone);
	$redPage.append($redText1);
	$redPage.append($redText2);
	$redPage.append($redYuyueBtn);
	$redPage.append($redText3);
	var $overlay = $('<div class="layer-bg" style="display: block;"></div>');
	$overlay.appendTo("body");
	$redPage.appendTo("body");
	redClose.click(function() {
		$overlay.remove();
		$redPage.remove();
		return false;
	});
	Avatar.push([ 'register', document.getElementById("zukyear_clickAlertBuyNow"), {
		parser : clickBtnOrLink,
		args : [ "zukyear_clickAlertBuyNow", "浼樻儬鍔甸鍙栧脊妗嗙珛鍗宠喘涔�" ]
	} ]);
}
function redPage02(price) {
	var $redPage = $('<div class="reservation-layer-mod reservation-red" style="display: block;"></div>');
	var redClose = $('<span class="close"></span>');
	var $redLineone = $('<p class="line-one">鎮ㄥ凡棰嗚繃浼樻儬鍒革紝蹇幓涓嬪崟鍚э紒</p>');
	var $redYuyueBtn = $('<a id="zukyear_clickAlertBuyNow" class="yuyue-btn" href="' + HOST + '/store/2.html">绔嬪嵆璐拱</a>');
	var $redText3 = $('<p class="txt3">浼樻儬鍒稿彲鍦ㄥ～鍐欒鍗曟椂閫夊彇浣跨敤锛岀珛鍑�' + price + '鍏冿紒</p>');
	$redPage.append(redClose);
	$redPage.append($redLineone);
	$redPage.append($redYuyueBtn);
	$redPage.append($redText3);
	var $overlay = $('<div class="layer-bg" style="display: block;"></div>');
	$overlay.appendTo("body");
	$redPage.appendTo("body");
	redClose.click(function() {
		$overlay.remove();
		$redPage.remove();
		return false;
	});
	Avatar.push([ 'register', document.getElementById("zukyear_clickAlertBuyNow"), {
		parser : clickBtnOrLink,
		args : [ "zukyear_clickAlertBuyNow", "浼樻儬鍔甸鍙栧脊妗嗙珛鍗宠喘涔�" ]
	} ]);
}

function clickProductList(evt, target, btnTag, label) {
	var flag = '', params = {};
	if (evt.target.getAttribute('index') == null) {
		flag = evt.target.parentNode.getAttribute('index');
		params["cnt"] = evt.target.parentNode.getAttribute('href');
		if (flag == null) {
			flag = evt.target.parentNode.parentNode.getAttribute('index');
			params["cnt"] = evt.target.parentNode.parentNode.getAttribute('href');
			if (evt.target.parentNode.parentNode.getAttribute('index') == null) {
				flag = evt.target.parentNode.parentNode.parentNode.getAttribute('index');
				params["cnt"] = evt.target.parentNode.parentNode.parentNode.getAttribute('href');
			} else {
				flag = evt.target.parentNode.parentNode.getAttribute('index');
				params["cnt"] = evt.target.parentNode.parentNode.getAttribute('href');
			}
		} else {
			flag = evt.target.parentNode.getAttribute('index');
			params["cnt"] = evt.target.parentNode.getAttribute('href');
		}
	} else {
		flag = evt.target.getAttribute('index');
		params["cnt"] = evt.target.getAttribute('href');
	}
	var btnTagId = btnTag + "_" + flag;
	var obj = [ "__NEWUA__", btnTagId, label ];
	params["pos"] = flag;
	params["pgn"] = "鍟嗗煄";
	params["url"] = window.location.href;
	obj.push(params);
	return obj;
}

function videoPlay(obj){
	$(obj).click(function(){
		var v_src = $(this).data("src");
		$(".vedio-layer iframe").attr('src',v_src);
		$(".layer-bg").show();
		$(".vedio-layer").show();
	})
} 

//鍏抽棴瑙嗛寮瑰眰
$(".vedio-layer .close").click(function(){
	$(".layer-bg").hide();
	$(".vedio-layer").hide();
	$(".vedio-layer iframe").attr('src',"");
});

 function understands_video() {
  return !!document.createElement('video').canPlayType;
}

function clickList1(evt, target) {
	var flag = evt.target.getAttribute('index');
	return [ '__NEWUA__', flag ];
}
function clickBtnOrLink(evt, target, btnTag, label) {
	return [ '__NEWUA__', btnTag, label, {}, 0 ];
}
window.Avatar = window.Avatar || [];

function supportCss3(style) { 
	var prefix = ['webkit', 'Moz', 'ms', 'o'], 
	i, 
	humpString = [], 
	htmlStyle = document.documentElement.style, 
	_toHumb = function (string) { 
	return string.replace(/-(\w)/g, function ($0, $1) { 
	return $1.toUpperCase(); 
	}); 
	}; 
	 
	for (i in prefix) 
	humpString.push(_toHumb(prefix[i] + '-' + style)); 
	 
	humpString.push(_toHumb(style)); 
	 
	for (i in humpString) 
	if (humpString[i] in htmlStyle) return true; 
	 
	return false; 
}
