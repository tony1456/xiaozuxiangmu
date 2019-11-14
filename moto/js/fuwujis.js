//图片切换
$(function(){
$(".cur_d").click(function(){
$(".c1").css("display","none");
$(".c5").css("display","block");
$(".c3").css("display","block");

$(".bx-viewport").css("display","block");
$(".bx-viewport1").css("display","none");
$(".bx-viewport2").css("display","none");	
})	
$(".cur_d1").click(function(){
$(".c1").css("display","block");
$(".c5").css("display","block");	
$(".c3").css("display","none");	
$(".bx-viewport").css("display","none");
$(".bx-viewport2").css("display","none");
$(".bx-viewport1").css("display","block");
})
$(".cur_d2").click(function(){
$(".c1").css("display","block");
$(".c3").css("display","block");
$(".c5").css("display","none");
$(".bx-viewport2").css("display","block");
$(".bx-viewport1").css("display","none");
$(".bx-viewport").css("display","none");	
})
})





//微信号
var show1=document.querySelector(".show_d1");
var show2=document.querySelector(".show_d");
show1.onmouseover=function(){
show1.style="display:none";
show2.style="display:block";	
}
show1.onmouseout=function(){
show1.style="display:block";
show2.style="display:none";	
}