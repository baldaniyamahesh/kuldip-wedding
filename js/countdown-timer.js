function countdown(){
    var now = new Date();
    
    // This is where you set the date to count down to in the format (year, month, day).
    var eventDate = new Date("12/14/2021");
    
    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();
    
    var remTime = eventTime - currentTime;
    
    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24);
    
    h %= 24;
    m %= 60;
    s %= 60;

/*
    if(s < 10){
       s = "0" + s;
       }
*/
/*    
    h = (h < 10) ? "0" + h: h;
    m = (m < 10) ? "0" + m: m;
    s = (s < 10) ? "0" + s: s;
*/
    document.getElementById("days").textContent = d;
    document.getElementById("hours").textContent = h;
    document.getElementById("minutes").textContent = m;
    document.getElementById("seconds").textContent = s;
    
    setTimeout(countdown, 1000);
}
    countdown();