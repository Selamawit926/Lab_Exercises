const taskInput = document.querySelector('#task');               //the task input text field

const form = document.querySelector('#task-form');             //The form at the top

const filter = document.querySelector('#filter');                      //the task filter text field

const taskList = document.querySelector('.collection');          //The ul

const clearBtn = document.querySelector('.clear-tasks');      //the all task clear button

const reloadIcon = document.querySelector('.fa');

//Event listeners

form.addEventListener('submit', addNewTask);

clearBtn.addEventListener('click', clearAllTasks);

filter.addEventListener('keyup', filterTasks);

taskList.addEventListener('click', removeTask);

reloadIcon.addEventListener('click', reloadPage);


const title=document.getElementById("task-title");
const drop= document.getElementById("drop");
const up=document.getElementById("dropup");
// drop.className='drop-down';
// drop.innerHTML='<i class="fa fa-caret-down"></i>';
// drop.style.position="right";
// drop.style.marginLeft="1200px";
drop.style.cursor="pointer";
// title.appendChild(drop);

drop.addEventListener("click",dropdown);
up.addEventListener("click",dropdown1);

// const div=document.getElementById("div");
// div.style.display="none";
// up.style.display="none";

function dropdown(){

    const arr=document.querySelectorAll(".collection-item");
    let values=[];

    arr.forEach(function(word){
        values.push(word.value);
    });

    values.sort();


    for (let i = 0; i < values.length; i++) {
        arr.forEach(function (word) {
            if (values[i] == word.value) {
            taskList.appendChild(word);
            }
        });
        }

}
    
function dropdown1(){
    const arr=document.querySelectorAll(".collection-item");
    let values=[];

    arr.forEach(function(word){
        values.push(word.value);
    });

    values.sort();


    for (let i = values.length; i >= 0; i--) {
    arr.forEach(function (word) {
        if (values[i] == word.value) {
        taskList.appendChild(word);
        }
    });
    }

}


//     arr.forEach(function(word){

//         const link=document.getElementById("delete");
//         // word.removeChild(link);
//         word.style.textAlign="right";
//         word.style.fontSize="25px";
//         div.appendChild(word);
       

//     });

//    div.style.listStyleType="none";
//    div.style.marginTop="50px";
// //    div.innerHTML.style.textAlign="right";

//     if (div.style.display=="block"){
//         div.style.display="none";
//     }
//     else{
//         div.style.display="block";
// 






// Add New  Task Function definition 
function addNewTask(e) {

    e.preventDefault();    //disable form submission

    if (taskInput.value === '') 
    {
       taskInput.style.borderColor = "red";
       return;
    }


    const li = document.createElement('li');
    // Adding a class
    li.className = 'collection-item';
    // Create text node and append it 
    li.value = new Date().getTime();
    li.appendChild(document.createTextNode(taskInput.value));
    
    // Create new element for the link 
    const link = document.createElement('a');

    // Add class and the x marker for a 
    link.className = 'delete-item secondary-content';
    link.id='delete';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append link to li
    li.appendChild(link);
    // Append to ul 
    taskList.appendChild(li);

}

// Clear Task Function definition 
function clearAllTasks() {

    
    //This is the first way 
    // taskList.innerHTML = '';    

    //  Second Way 
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

}

// Filter tasks function definition 
function filterTasks(e) {

    // console.log("Task Filter ...");

    const arr=document.querySelectorAll(".collection-item");
    arr.forEach(function(word){

        // console.log(word.textContent.length);
        // console.log(filter.value.length);
        
        
       
        if (word.textContent.indexOf(filter.value)>-1){
            word.style.display="block";
            // console.log(true);
            // console.log(word.textContent[i]);
            
        }
        else{
            word.style.display="none";
            // console.log(word.textContent);
        }
        
        

    });
  

}
 
function removeTask(e){

    if (e.target.parentElement.classList.contains('delete-item')){
        if (confirm('Are You Sure about that?')){
            e.target.parentElement.parentElement.remove();
        }

    }


}


function reloadPage(){
    location.reload();
}