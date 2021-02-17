const display= document.getElementById("carousel");
const slide=document.getElementById("slide");
document.addEventListener("DOMContentLoaded",()=>{
    displaySlide();
    
});


function displaySlide(){

    fetch('https://picsum.photos/v2/list')
    .then(function(res) {
        return res.json(); //return the JSON Promise
    })
    .then(function(posts) {
        //iterate over each post [100 posts]
        let output = '';

       
        posts.forEach(function(post) {

            if (post==posts[0]){
                output+= `
    
                <div class="carousel-item active">
                
                    <img src="${post.download_url}" class="img">
            </div>
        
        `;
       
        }
            else{
                output += `
        
                <div class="carousel-item">
                
                    <img src="${post.download_url}" class="img">
            
            </div>
        
        `;
        // console.log("I'm working");
        }


        });
        display.innerHTML = output;
    
        // console.log("I work");
    })
    .catch(function(err) {
        console.log(err);
    });


}