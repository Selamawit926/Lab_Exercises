const hour= document.getElementById("hour");
const min= document.getElementById("min");
const sec= document.getElementById("sec");
let countForMin=0
let degreeInc=0;
let degreeIncForMin=42;
let degreeIncForHour=90;
document.addEventListener("DOMContentLoaded",function(){
    setInterval(clockForSec,1000);
    setInterval(clockForMin,61000);
    // setInterval(clockForHour,61000);
});


function clockForSec(){
        degreeInc = (degreeInc+6); 
        sec.style.transform="rotate(" + degreeInc + "deg)";
}

function clockForMin(){
    degreeIncForMin= (degreeIncForMin+6); 
    min.style.transform="rotate(" + degreeIncForMin + "deg)";
    countForMin+=1;
    
    degreeIncForHour = (degreeIncForHour+3); 
    hour.style.transform="rotate(" + degreeIncForHour + "deg)";
        
    
}

function clockForHour(){
    degreeIncForHour = (degreeIncForHour+3); 
    hour.style.transform="rotate(" + degreeIncForHour + "deg)";
}

console.log("I work");