var timer;

function timerStart() {
    var t = 0;
    timer = setInterval(function() {
        t++;
        m = "" + (t%3600/600|0) + (t%3600/60%10|0);
        s = "" + (t%60/10|0) + (t%60%10);
        $("#timer").text(m + ":" + s);
    }, 1000);
}

function timerStop() {
    clearInterval(timer);
}