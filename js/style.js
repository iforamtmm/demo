/**
 * Created by Jack zhou on 2016/4/14.
 */
window.onload=function(){
    var head = document.getElementById("navBox-tow");
    var msg=localStorage.getItem("css");
    head.className=msg;
};
function green(){
    document.getElementById("green").onclick = function () {
        var head = document.getElementById("navBox-tow");
        head.setAttribute("class", "green");
        var str=head.className;
        localStorage.setItem("css",str);
    };
}
function yellow(){
    document.getElementById("yellow").onclick = function () {
        var head = document.getElementById("navBox-tow");
        head.setAttribute("class", "yellow");
        var str=head.className;
        localStorage.setItem("css",str);
    };
}
function red(){
    document.getElementById("red").onclick = function () {
        var head = document.getElementById("navBox-tow");
        head.setAttribute("class", "red");
        var str=head.className;
        localStorage.setItem("css",str);
    };
}
