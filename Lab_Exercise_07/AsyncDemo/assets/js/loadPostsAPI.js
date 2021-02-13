// UI Vars 
const postDiv3 = document.getElementById('thePosts');

//Load Every thing ....
document.addEventListener("DOMContentLoaded", () => {
    //load_fromPlaceHolder();
    //loadDataNew();
});


//load post from fake api function 
function load_fromPlaceHolder() {
//open the request
fetch('https://jsonplaceholder.typicode.com/posts')
.then(function(res) {  return res.json(); //return the JSON Promise
   })
   .then(function(posts) {
       //iterate over each post [100 posts]
       let output = '';
       posts.forEach(function(post) {
           output += ` <div class="item">
           <div class="image"> <img src="${post.image}"> </div>
           <div class="content">
                 <a class="header" href="#" id="bTitle"> ${post.postTitle} </a>
                 <div class="meta">
                     <span id="bDate">${post.date} </span>
                     <span>By: <a href="#" id="bAuthor"> ${post.name}</a></span>
                 </div>
                 <div class="description">  <p id="bDesc">  ${post.postText} </p>  </div>
                 <div class="extra"> <a class="ui floated basic violet button" href="#">Read Mores</a> </div>
           </div>
      </div>      `;  // same code as previous with few update
       });
       postDiv3.innerHTML = output;
   })
   .catch(function(err) {     console.log(err);
   });

}
//async await
function load_fromPlaceHolder_new() {



}

function loadDataNew() {


}