let option=prompt("Do you want to add,subtract,multiply,divide?");

(function(){
    if (option=="add"){
        console.log(add())
     }
    
     if (option=="sub"){
        console.log(sub())
     }
    
    else if (option=="mul"){
        console.log(mul())
     }
    
    else if (option=="div"){
        console.log(div())
     }
    
     
})();

function add(adding){
    let num=prompt("Enter how many numbers you want to add?");
        adding=[]
        for (let i = 0; i < parseInt(num); i++) {
            adding[i] = parseInt(prompt("Enter numbers:"));
        }
    tot=0
    for (let i=0;i<adding.length;i++){
        tot=tot+adding[i]
    }
    return tot
}

function sub(first,second){
    let f=parseInt(prompt("Enter first number:"));
    let s=parseInt(prompt("Enter first number:"));
    fi=parseInt(f)
    si=parseInt(s)
    return fi-si
}

function mul(){
    let num=prompt("Enter how many numbers you want to multiply?");
    adding=[]
    tot=1
    for (let i = 0; i < parseInt(num); i++) {
        adding[i] =  parseInt(prompt("Enter numbers:"));
    }
    
    for (let i=0;i<adding.length;i++){
        tot=tot*adding[i]
    }
    return tot
   
}

function div(){
    let f= parseInt(prompt("Enter first number:"));
    let s= parseInt(prompt("Enter second number:"));
    fi=parseInt(f)
    si=parseInt(s)
    if (si!=0){
        return fi/si
    }
    else{
        return "Undefined"
    }
    
}