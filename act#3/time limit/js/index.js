let timeForm = document.getElementById("vwg-setTime");


timeForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    let timeLimit = document.getElementById("vwg-timeInpID").value;
    // convert the time limit to number
    timeLimit = Number(timeLimit);
    let CountDwn = document.getElementById("vwg-timeDigitTick");
    let progBar = document.getElementById("vwg-timeProgrs");
    

    // run progressbar for the timeLimit
    if(timeLimit>0){
        progBar.style.transitionDuration = timeLimit+"s";
        progBar.style.width =  '100%';
        //disable submit event
        timeForm.vwgsubmitBtn.disabled = true;
    }
    else{
        alert("Invalid input!");
        clearInterval(digitCountDwn);
    }

    // countdown
    //show the inputed seconds
    CountDwn.innerHTML = timeLimit + " sec";
    let digitCountDwn = setInterval(tickingCountDwn,1000);
    function tickingCountDwn(){
        if(timeLimit>0){
            --timeLimit;
            CountDwn.innerHTML = timeLimit + " sec";
        }
        else{
            clearInterval(digitCountDwn);
            //enable submit event
            timeForm.vwgsubmitBtn.disabled = false;
    
            //reset
            progBar.style.transitionDuration = "0s";
            progBar.style.width =  '0px';
            
            alert("Time is up!");
        }
    }
});