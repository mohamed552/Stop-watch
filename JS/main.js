var hr = 00,
min = 00,
sec = 00;
real_hours = document.getElementById("hours"),
real_minutes = document.getElementById("minutes"),
real_seconds = document.getElementById("seconds"),
buttonStart = document.getElementById('button-start');
buttonStop = document.getElementById('button-stop');
buttonReset = document.getElementById('button-reset');
var Interval;
buttonStart.onclick = function() {
  clearInterval(Interval);
  Interval = setInterval(startTimer, 10);
}
buttonStop.onclick = function(){
  clearInterval(Interval);
}
buttonReset.onclick = function(){
  clearInterval(Interval);
  hr = "00";
  min = "00";
  sec = "00";
  real_hours.innerHTML = hr;
  real_minutes.innerHTML = min;
  real_seconds.innerHTML = sec;
}
function startTimer(){
  sec++;
  if(sec < 9){
    real_seconds.innerHTML = "0" + sec;
  }
  if(sec > 9){
    real_seconds.innerHTML = sec;
  }
  if(sec > 99){
    min++;
    real_minutes.innerHTML = "0" + min;
    sec = 0;
    real_seconds.innerHTML = "0" + 0; 
  }
  if(min > 9){
    real_minutes.innerHTML = min;
  }
  if(min > 60){
    hr++;
    real_hours.innerHTML = "0" + hr;
    min = 0;
    real_minutes.innerHTML = "0" + min;
  }
}