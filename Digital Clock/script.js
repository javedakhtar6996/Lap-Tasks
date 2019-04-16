function digitalClock() {
    var date = new Date();
    var myDate = date.toLocaleTimeString();
    document.getElementById("myclock").innerHTML = myDate;
}
setInterval(digitalClock , 1000);