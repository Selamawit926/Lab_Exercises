const taskInput = document.querySelector('#task');               //the task input text field

const form = document.querySelector('#task-form');             //The form at the top

const filter = document.querySelector('#filter');                      //the task filter text field

const taskList = document.querySelector('.collection');          //The ul

const clearBtn = document.querySelector('.clear-tasks');      //the all task clear button

const reloadIcon = document.querySelector('.fa');

let DB;

form.addEventListener("click",addNewTask);

const drop= document.getElementById("drop");
const dropup=document.getElementById("dropup");
let tasks=[];
drop.addEventListener("click",sort2);
dropup.addEventListener("click",sort);


// const drop= document.getElementById("drop");
// const main= document.getElementById("main");
// const main2= document.getElementById("main2");
// const dropped=document.getElementById("dropped");

// drop.addEventListener("click",dropdown);
// dropped.addEventListener("click",change);

// function dropdown(){
//     if (dropped.style.display=="none"){
//         dropped.style.display="block";

//     }
//     else{
//         dropped.style.display="none";
//     }
// }

// function change(){
//     if (main2.innerHTML=="Descending"){
//         let sortedTask;
//     sortedTask = tasks.sort(function (task1, task2) {
//         return task1.date - task2.date;
//         });

//     main2.innerHTML="Ascending";
//     main.innerHTML="Descending";
//     displayAgain(sortedTask);
//     }

//     else{
//         let sortedTask;
//         sortedTask = tasks.sort(function (task1, task2) {
//         return task2.date.getTime() - task1.date.getTime();
//         });

//     main2.innerHTML="Descending";
//     main.innerHTML="Ascending";
//     displayAgain(sortedTask);
//     }
// }


function sort2(){
    let sortedTask;
    sortedTask = tasks.sort(function (task1, task2) {
        return task1.date - task2.date;
        });

    displayAgain(sortedTask);
};

function sort(){
    let sortedTask;
    sortedTask = tasks.sort(function (task1, task2) {
        return task2.date.getTime() - task1.date.getTime();
        });

    displayAgain(sortedTask);
};

const displayAgain = function (tasks) {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      //add Attribute for delete
      li.setAttribute("data-task-id", index + 1);
      // Adding a class
      li.className = "collection-item";
      // Create text node and append it
      li.appendChild(document.createTextNode(task.taskname));
      // Create new element for the link
      const link = document.createElement("a");
      // Add class and the x marker for a
      link.className = "delete-item secondary-content";
      link.innerHTML = `
                <span style = "margin-right:240px; color:#000">${task.date.toString()}</span>
                 <i class="fa fa-remove"></i>
                &nbsp;
                <a href="edit.html?id=${
                  index + 1
                }"><i class="fa fa-edit"></i> </a>
                ;`
      // Append link to li
      li.appendChild(link);
      // Append to UL
      taskList.appendChild(li);
    });
  };

form.addEventListener("click",addNewTask);

document.addEventListener("DOMContentLoaded",()=>{
   // create the database
   let TasksDB = indexedDB.open('tasks', 1);

   // if there's an error
   TasksDB.onerror = function() {
           console.log('There was an error');
    }
       // if everything is fine, assign the result to the instance
    TasksDB.onsuccess = function() {
     
        console.log('Database Ready');

       // save the result
       DB = TasksDB.result;

       console.log(DB);
       // display the Task List 
       displayTaskList();
   }

   // This method runs once (great for creating the schema)
   TasksDB.onupgradeneeded = function(e) {
    // the event will be the database
    // console.log("hjhj")
    let db = e.target.result;

    // create an object store, 
    // keypath is going to be the Indexes
    let objectStore = db.createObjectStore('tasks', { keyPath: 'id', autoIncrement: true });

    // createindex: 1) field name 2) keypath 3) options
    objectStore.createIndex('taskname', 'taskname', { unique: false });

    console.log('Database ready and fields created!');
}


})

function addNewTask(e) {
  
    e.preventDefault();    //disable form submission

    if (taskInput.value === '') 
    {
       taskInput.style.borderColor = "red";
       return;
    }

  // create a new object with the form info
  let newTask = {
      taskname: taskInput.value,
      date: new Date(),
  }
  // Insert the object into the database 
  let transaction = DB.transaction(['tasks'], 'readwrite');
  let objectStore = transaction.objectStore('tasks');

  let request = objectStore.add(newTask);
  // on success
  request.onsuccess = () => {
      form.reset();
  }
  transaction.oncomplete = () => {
      console.log('New Task added');
      displayTaskList();
  }
  transaction.onerror = () => { console.log('There was an error, try again!'); }
}


function displayTaskList() {
    // clear the previous task list
    while (taskList.firstChild) {   taskList.removeChild(taskList.firstChild);}

    // create the object store
    let objectStore = DB.transaction('tasks').objectStore('tasks');

    objectStore.openCursor().onsuccess = function(e) {
        // assign the current cursor
        let cursor = e.target.result;

        
        if (cursor) {
            let newTask = {
                taskname: cursor.value.taskname,
                date: cursor.value.date,
              };
      
            tasks.push(newTask);
            const li = document.createElement('li');
           // Adding a class
            li.className = 'collection-item';
            // Create text node and append it 
            li.value = new Date().getTime();
            li.setAttribute('data-task-id', cursor.value.id);
            li.appendChild(document.createTextNode(cursor.value.taskname));
            li.appendChild(document.createTextNode(taskInput.value));
            
            // Create new element for the link 
            const link = document.createElement('a');

            link.innerHTML = `
            <span style = "margin-right:240px; color:#000">${cursor.value.date}</span>
            <i class="fa fa-remove"></i>  &nbsp;
           <a href="edit.html?id=${cursor.value.id}"><i class="fa fa-edit"></i> </a> ;
           `
            // Add class and the x marker for a 
            link.className = 'delete-item secondary-content';
            // link.id='delete';
            // link.innerHTML = '<i class="fa fa-remove"></i>';
            // Append link to li
            li.appendChild(link);
            // Append to ul 
            taskList.appendChild(li);
                
            // Create text node and append it 
            
            cursor.continue();
        }
    }

}

//clear button event listener    
clearBtn.addEventListener('click', clearAllTasks);
    //clear tasks 
    function clearAllTasks() {
        //Create the transaction and object store
        let transaction = DB.transaction("tasks", "readwrite"); 
        let tasks = transaction.objectStore("tasks");

        // clear the the table
        tasks.clear(); 
        //repaint the UI
        displayTaskList();

        console.log("Tasks Cleared !!!");
    }


 // Remove task event [event delegation]
 taskList.addEventListener('click', removeTask);

 function removeTask(e) {

     if (e.target.parentElement.classList.contains('delete-item')) {
         if (confirm('Are You Sure about that ?')) {
             // get the task id
             let taskID = Number(e.target.parentElement.parentElement.getAttribute('data-task-id'));
             // use a transaction
             let transaction = DB.transaction(['tasks'], 'readwrite');
             let objectStore = transaction.objectStore('tasks');
             objectStore.delete(taskID);

             transaction.oncomplete = () => {
                 e.target.parentElement.parentElement.remove();
             }

         }
     }
 }
