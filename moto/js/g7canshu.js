var item1=document.querySelector(".item1");
var item2=document.querySelector(".item2");
var img1=document.querySelector(".img1");
var img2=document.querySelector(".img2");
item1.onclick=function(){
img1.style="display:block;"
img2.style="display:none;"	
item2.style="background-position:-115px 0;"
item1.style="background-position:-56px 0;"
}
item2.onclick=function(){
img1.style="display:none;"	
img2.style="display:block;"	
item2.style="background-position:-168px 0;"
item1.style="background-position:-3px 0;"
}