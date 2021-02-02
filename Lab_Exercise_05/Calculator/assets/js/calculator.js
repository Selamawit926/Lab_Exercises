const nine=document.getElementById("btn9");
const eight=document.getElementById("btn8");
const seven=document.getElementById("btn7");
const six=document.getElementById("btn6");
const five=document.getElementById("btn5");
const four=document.getElementById("btn4");
const three=document.getElementById("btn3");
const two=document.getElementById("btn2");
const one=document.getElementById("btn1");
const zero=document.getElementById("btn0");
const clear=document.getElementById("btnC");
const div=document.getElementById("btn/");
const mul=document.getElementById("btn*");
const sub=document.getElementById("btn-");
const add=document.getElementById("btn+");
const back=document.getElementById("btnBack");
const equals=document.getElementById("btn=");
const dec=document.getElementById(".");
const avg=document.getElementById("btnAvg");
const square=document.getElementById("btnX");
const inp=document.getElementsByClassName("input1");
let avg1;
let holder=document.getElementById("h1");
// holder.innerHTML="";
nine.addEventListener("click",disNine);
eight.addEventListener("click",disEight);
seven.addEventListener("click",disSeven);
six.addEventListener("click",disSix);
five.addEventListener("click",disFive);
four.addEventListener("click",disFour);
three.addEventListener("click",disThree);
two.addEventListener("click",disTwo);
one.addEventListener("click",disOne);
zero.addEventListener("click",disZero);
clear.addEventListener("click",disClear);
add.addEventListener("click",calcAdd);
sub.addEventListener("click",calcSub);
mul.addEventListener("click",calcMul);
div.addEventListener("click",calcDiv);
// dec.addEventListener("click",disDec);
back.addEventListener("click", goBack);
equals.addEventListener("click",result);
avg.addEventListener("click",average);
square.addEventListener("click",sq);

function disNine(){
    holder.innerHTML+="9";
  
}

function disEight(){
    holder.innerHTML+="8";
  
}

function disSeven(){
    holder.innerHTML+="7";
  
}

function disSix(){
    holder.innerHTML+="6";
  
}

function disFive(){
    holder.innerHTML+="5";
  
}

function disFour(){
    holder.innerHTML+="4";
  
}

function disThree(){
    holder.innerHTML+="3";
  
}

function disTwo(){
    holder.innerHTML+="2";
  
}

function disOne(){
    holder.innerHTML+="1";
  
}

function disZero(){
    holder.innerHTML+="0";
  
}

function disadd(){
    holder.innerHTML+="+";
  
}

function disSub(){
    holder.innerHTML+="-";
  
}

function disMul(){
    holder.innerHTML+="*";
  
}

function disDiv(){
    holder.innerHTML+="/";
  
}

function disClear(){
    holder.innerHTML="";
  
}

function calcAdd(){
    holder.innerHTML+="+";
}

function calcSub(){
    holder.innerHTML+="-";
}

function calcMul(){
    holder.innerHTML+="*";
}

function calcDiv(){
    holder.innerHTML+="/";
}

function goBack(){
    let ans="";
    for(i=0;i<holder.innerHTML.length-1;i++){
        ans+=holder.innerHTML[i];
    }
    holder.innerHTML=ans;
    // console.log(ans);
}

function result(){
    let store="";
    let store2="";
    let op="";
    let tot=0;
    let tot1=1;
    let count=0;
    // console.log(pasrseInt(holder));
    for(i=0;i<holder.innerText.length;i++){
        if(holder.innerHTML[i]!="+" && holder.innerHTML[i]!="-" && holder.innerHTML[i]!="*" && holder.innerHTML[i]!="/"){
            store+=holder.innerHTML[i];
        }

        else{
            if (holder.innerHTML[i]=="+"){
                tot+=parseInt(store);
                count+=1;
               
            }
            else if(holder.innerHTML[i]="*"){
                tot1*=parseInt(store);
            }
            store2=store;
            store="";
            op=holder.innerHTML[i];
        }

    }

    count+=1;
    avg1=(tot+parseInt(store))/count;
    if (op=="+"){
       holder.innerHTML=tot+parseInt(store);
    //    console.log(tot);
    }

    else if(op=="-"){
       let ans=subtraction(store,store2);
       holder.innerHTML=ans;
    }

    else if(op=="*"){
        holder.innerHTML=tot1*parseInt(store);
        // console.log(tot);
    }

    else if(op=="/"){
        if (store=="0"){
            holder.innerHTML="Undefined";
        }
        else{
            let ans= division(store,store2);
            holder.innerHTML=ans;
        }
        
        
    }

}


let subtraction= (num1,num2)=> {
    let ans= parseInt(num2)-parseInt(num1);
    return ans;
}

let division= (num1,num2)=> {
    let ans= parseInt(num2)/parseInt(num1);
    return ans;
    
}

function average(){
    // console.log(avg1);
    holder.innerHTML=avg1;
}

function sq(){
    let ans= parseInt(holder.innerHTML);
    ans=Math.pow(ans,2);
    holder.innerHTML=ans;
}