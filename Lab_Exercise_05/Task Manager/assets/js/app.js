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
const drop= document.createElement('a');
drop.className='drop-down';
drop.innerHTML='<i class="fa fa-caret-down"></i>';
drop.style.position="right";
drop.style.cursor="pointer";
title.appendChild(drop);


function dropdown(){
    
}



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
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new element for the link 
    const link = document.createElement('a');
    // Add class and the x marker for a 
    link.className = 'delete-item secondary-content';
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
        
        for (i=0;i<filter.value.length;i++){
       
            if (word.textContent.indexOf(filter.value)>-1){
                word.style.display="block";
                // console.log(true);
                // console.log(word.textContent[i]);
                
            }
            else{
                word.style.display="none";
                // console.log(word.textContent);
            }
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