var STARTTIME = new Date().getTime();
var pageId = "motoe5_overview";

var HOST="https://www.motorola.com.cn";
var LENOVOHOST = "https://passport.motorola.com.cn";
var REALM ="motorola.com.cn";
var IMAGEURL ="https://image.motorola.com.cn/shop_v4";
var yrbegin = 1460617200,yrend = 1460620799,hdbegin = 1461081600,hdend = 1462377600;

NTKF_PARAM = web_chat_param;
//百度统计
var _hmt = _hmt || [];
(function() {
var hm = document.createElement("script");
hm.src = "//hm.baidu.com/hm.js?dd563cd2e3ebf51875f7a58ad5ad8e6f";
var s = document.getElementsByTagName("script")[0]; 
s.parentNode.insertBefore(hm, s);
})();

//GA
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-76664929-3', 'auto');
ga('send', 'pageview');


Avatar.push(['register', document.getElementById('col-links'), {selector:'_a', parser:clickList1}]);

$(function(){
$(window).scroll(function(){
var t = $(window).scrollTop();
t > 60 ? $('.z2-sub-nav').addClass('fixed-sub-nav') : $('.z2-sub-nav').removeClass('fixed-sub-nav');
});

$('#bxslider1').bxSlider({
mode: 'fade',
auto:true,
pause:5000
});
$('#bxslider3').bxSlider({
mode: 'fade',
controls: 'false',
pagerCustom: '.o-bg20 .tab-icon'
});

$('#bxslider2').bxSlider({
auto: false,
controls: 'false',
slideWidth:1105,
minSlides:3,
maxSlides:3,
moveSlides:1,
slideMargin:70,
startSlide:0
});

$(".lazy").lazyload({
threshold : 600,
placeholder:'https://image.motorola.com.cn/shop_v4/images/transparent.gif'
});

var $window = $(window),
win_height_padded = $window.height()*1.1;

$window.on('scroll', revealOnScroll);

function revealOnScroll(){
var scrolled = $window.scrollTop(),
win_height_padded = $window.height() * 0.6;

$(".animate:not(.animated)").each(function(){
var $this = $(this),
offsetTop = $this.offset().top;

if(scrolled + win_height_padded > offsetTop){
if ($this.data('timeout')){
var time = parseInt($this.data('timeout'),10)*1000;
window.setTimeout(function(){
$this.addClass('animated ' + $this.data('animation'));
}, time);
}else{
$this.addClass('animated ' + $this.data('animation'));
}
}
});
}
})
//禁用
function keyDown(e){
if(e.key=="F12"){
window.opener=null;window.close();
}
}