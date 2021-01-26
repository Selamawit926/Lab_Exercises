

let option=prompt("Do you want to add,subtract,multiply,divide,get the max, get the min,average, or square?");

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
    
     else if (option=="max"){
        console.log(max())
     }
    
    else if (option=="min"){
        console.log(min())
    }

    else if (option=="avg"){
        console.log(average())
    }

    else if (option=="sq"){
        console.log(square())
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

function  max(){
    let num=prompt("Enter how many numbers you want the maximum of");
    adding=[]
    for (let i = 0; i < parseInt(num); i++) {
        adding[i] = parseInt(prompt("Enter numbers:"));
    }
    return Math.max(adding)
}

function min(){
    let num=prompt("Enter how many numbers you want the minimum of");
    adding=[]
    for (let i = 0; i < parseInt(num); i++) {
        adding[i] = parseInt(prompt("Enter numbers:"));
    }
    return Math.min(adding)
}

function average(){
    let num=prompt("Enter how many numbers you want the average of");
    adding=[]
    for (let i = 0; i < parseInt(num); i++) {
        adding[i] = parseInt(prompt("Enter numbers:"));
    }

    tot=0
    for (let i=0;i<adding.length;i++){
        tot=tot+adding[i]
    }
    
    avg=tot/adding.length 
    return avg

}

function square(){
    let num=prompt("Enter a number you want the square of");
    return Math.square(parseInt(num));
}

