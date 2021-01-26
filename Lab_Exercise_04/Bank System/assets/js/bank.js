let acc1={
    balance:0
}

let acc2={
    balance:0
}
let min=100;
let max=100000;
let de;

// while (true){
    let op1=prompt("Which account do you want to use? \n1. Account 1 \n2. Account 2");
    let op2=prompt("What operation do you want to perform? \n1. Balance \n2. Deposit \n3. Withdraw \n4. Transfer");
    
    
    let deposit= function(de){
        if (op1=="1"){
            acc1.balance+=parseInt(de);
            return acc1.balance;
        }

        else{
            acc2.balance+=parseInt(de);
            return acc2.balance;
        }

        
    }

    let withdrawal= function(de){
        
        if (op1=="1"){
            acc1.balance-=parseInt(de);  
            return acc1.balance;
        }

        else{
            acc2.balance-=parseInt(de);  
            return acc2.balance;
        }
        
    }

    
    let transfer= function(de){
        if (op1=="1"){
            acc1.balance-=parseInt(de);
            acc2.balance+=parseInt(de);
            
        }

        else{
            acc2.balance-=parseInt(de);
            acc1.balance+=parseInt(de);
            
        }
        
    }

// (function(){

        if (op2=="1"){
            if (op1=="1"){
                console.log("Your balance is: ",acc1.balance, " birr");
            }

            else{
                console.log("Your balance is: ",acc2.balance, " birr");
            }
            
        }
    
        else if (op2=="2"){
            de=prompt("Enter amount");
            deposit(parseInt(de));
            
            if (op1=="1"){
                console.log("Your balance is now: ",acc1.balance, " birr");
            }

            else{
                console.log("Your balance is now: ",acc2.balance, " birr");
            }
        }
    
    
        else if (op2=="3"){
            de=prompt("Enter amount");
            if (parseInt(de)<min){
                console.log("You can't withdraw an amount less than ",min);
            }

            else if(parseInt(de)>max){
                console.log("You can't withdraw an amount more than ",max);
            }

            else if(op1=="1" && parseInt(de)>acc1.balance){
                console.log("You can't withdraw an amount more than your current balance: ",acc1.balance, " birr");
            }

            else if(op1=="2" && parseInt(de)>acc2.balance){
                console.log("You can't withdraw an amount more than your current balance: ",acc2.balance, " birr");
            }
            else{
                withdrawal(parseInt(de));
                if (op1=="1"){
                    console.log("Your balance is now: ",acc1.balance, " birr");
                }
    
                else{
                    console.log("Your balance is now: ",acc2.balance, " birr");
                }
            }
            
        }
    
        else if (op2=="4"){
            de=prompt("Enter amount");
            transfer(parseInt(de));
            if(op1=="1" && parseInt(de)>acc1.balance){
                console.log("You can't transfer an amount more than your current balance: ",acc1.balance, " birr");
            }

            else if(op1=="2" && parseInt(de)>acc2.balance){
                console.log("You can't transfer an amount more than your current balance: ",acc2.balance, " birr");
            }
            else{
            if (op1=="1"){
                console.log("You have transfered ",de," birr to account 2");
                console.log("Your balance is now: ",acc1.balance, " birr");
            }
            else{
                console.log("You have transfered ",de," birr to account 1");
                console.log("Your balance is now: ",acc2.balance, " birr");
            }
        }
            
        }
    
    // })();

    
// }