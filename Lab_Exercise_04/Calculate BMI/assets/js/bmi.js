let personProfile={
    weight:"",
    height:"",
    calcBmi: function(w,h) {
    we=Number(w);
    he=Number(h);
    bmi=we/Math.pow(he,2);
    bmi=Number(bmi.toFixed(2))
    console.log(bmi)
    if (bmi<18.5){
       console.log("UnderWeight") 
    }
    else if (18.5<bmi<24.5){
        console.log("Normal")
    }
    else if (25.0<bmi<29.9){
        console.log("OverWeight")
    }

    else if (bmi>30.0){
        console.log("Obese")
    }

    }

}

personProfile.weight = prompt("Your weight in Kg? ");
personProfile.height = prompt("Your height in M? ");

(function(){

    personProfile.calcBmi(personProfile.weight,personProfile.height);

})();