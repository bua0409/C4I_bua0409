window.onload = function () {
  
    var seconds = 00; 
    var tens = 00; 
    var CountTens = document.getElementById("tens")
    var CountSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval ;
  
    buttonStart.onclick = function() {
      
      clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
    }
    
      buttonStop.onclick = function() {
         clearInterval(Interval);
    }
    
  
    buttonReset.onclick = function() {
       clearInterval(Interval);
      tens = "00";
      seconds = "00";
      CountTens.innerHTML = tens;
      CountSeconds.innerHTML = seconds;
    }
    
     
    
    function startTimer () {
      tens++; 
      
      if(tens <= 9){
        CountTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){
        CountTens.innerHTML = tens;
        
      } 
      
      if (tens > 99) {
        console.log("seconds");
        seconds++;
        CountSeconds.innerHTML = "0" + seconds;
        tens = 0;
        CountTens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
        CountSeconds.innerHTML = seconds;
      }
    
    }
    
  
  }