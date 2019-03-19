function getStyle(obj, name) {
    if (obj.currentStyle) return obj.currentStyle[name];
    else return getComputedStyle(obj, false)[name];
}
function startMove(obj, attr, target) {
    if(obj.timer) clearInterval(obj.timer);
    var cur = (attr == "opacity") ? Math.round(parseFloat(getStyle(obj, attr))) * 100 : parseInt(getStyle(obj, attr));
    obj.timer = setInterval(function () {
        var speed = (target - cur) / 6;
        speed = (speed > 0) ? Math.ceil(speed) : Math.floor(speed);
        if (cur == target) clearInterval(obj.timer);
        else {
            cur += speed;
            if (attr == "opacity") {
                obj.style.filter = "alpha:(opacity=" + cur + ");";
                obj.style.opacity = cur / 100;
            }
            else {
                obj.style[attr] = cur + "px";
            }
        }
    }, 30);
}