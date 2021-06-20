$(window).load(function() {
    $('.overlay').delay(1000).fadeOut(800);
});
function clock()
{
    var time = new Date();

    var hour = time.getHours();
    if (hour < 10) hour = "0" + hour;
    var minute = time.getMinutes();
    if (minute < 10) minute = "0" + minute;
    var second = time.getSeconds();
    if (second < 10) second = "0" + second;

    document.getElementById("clock").innerHTML = hour + ":" + minute + ":" + second;

    setTimeout("clock()", 1000)
}
if (typeof screen.orientation !== 'undefined') {
    document.getElementsById('clockPos').style = "top: 10%";
}