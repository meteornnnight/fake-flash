var owhole=document.getElementById("wrapper");
var divBig=document.getElementById("bigPic");
var aLiBig=divBig.getElementsByTagName("li");
var divSmall = document.getElementById("smallPic");
var oImg=divSmall.getElementsByTagName("img");
var oUl=divSmall.getElementsByTagName("ul")[0];
var aLiSmall = divSmall.getElementsByTagName("li");
var oLeft = document.getElementsByClassName("leftMark")[0];
var oRight=document.getElementsByClassName("rightMark")[0];
var leftBtn = oLeft.getElementsByTagName("a")[0];
var rightBtn = oRight.getElementsByTagName("a")[0];
var nowZIndex=2;
var nowPicIndex=0;
var timer=null;
for(let i = 0; i < aLiBig.length; i++)
{
    aLiBig[i].index=i;
}
leftBtn.onmouseover = oLeft.onmouseover=function() {
    startMove(leftBtn,"opacity",100);
}
leftBtn.onmouseout=oLeft.onmouseout = function () {
    startMove(leftBtn, "opacity", 0);
}
rightBtn.onmouseover=oRight.onmouseover = function () {
    startMove(rightBtn, "opacity", 100);
}
rightBtn.onmouseout=oRight.onmouseout = function () {
    startMove(rightBtn, "opacity", 0);
}
for (let i = 0; i < aLiSmall.length; i++) {
    aLiSmall[i].index = i;
    aLiSmall[i].onclick=function () {
        if (nowPicIndex == this.index) return
        nowPicIndex=this.index;
        tab();
    }
    aLiSmall[i].onmouseover = function () {
        startMove(oImg[i],"opacity",100);
    }
    aLiSmall[i].onmouseout = function () {
        if (nowPicIndex == this.index) return;
        startMove(oImg[i], "opacity", 40);
    }
}
leftBtn.onclick=function () {
    nowPicIndex--;
    if(nowPicIndex == -1) nowPicIndex=aLiBig.length-1;
    tab();
    moveSmallPics();
}
rightBtn.onclick = function () {
    nowPicIndex++;
    if (nowPicIndex == aLiBig.length) nowPicIndex = 0;
    tab();
    moveSmallPics();
}
function tab() {
    for(let i=0; i<aLiSmall.length; i++)
    {
        startMove(oImg[i],"opacity",40);
    }
    startMove(oImg[nowPicIndex],"opacity",100);
    aLiBig[nowPicIndex].style.zIndex=nowZIndex++;
    aLiBig[nowPicIndex].style.height=0;
    startMove(aLiBig[nowPicIndex],"height",320);
}
function moveSmallPics (){
    if (nowPicIndex == 0 || nowPicIndex == 1)
    {
        startMove(oUl,"left",0);
    }
    else if (nowPicIndex < 5)
    {
        startMove(oUl, "left",-(nowPicIndex-1)*aLiSmall[0].offsetWidth);
    }
    else{
        startMove(oUl, "left", -(nowPicIndex - 2) * aLiSmall[0].offsetWidth);
    }
}
timer=setInterval(() => {
    rightBtn.onclick();
}, 2000);
owhole.onmouseover=function(){
    clearInterval(timer);
}
owhole.onmouseout=function () {
    timer = setInterval(() => {
        rightBtn.onclick();
    }, 2000);
}