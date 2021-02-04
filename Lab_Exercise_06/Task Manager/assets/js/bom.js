/*  
Here is the exercise on working on the remaining bom method 
Location , Navigator , screen , Window 
Follow the Instruction on the comments 
1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 
Adding Extra is Possible if you want to explore more ...
Good Luck !!! 
*/




// Define UI Variables  here 
const arr=document.querySelectorAll(".collection-item");

// Display the BOM Information on the innerHTML of the elements

arr[0].innerHTML = window.location.href;
arr[1].innerHTML = window.location.protocol;
arr[2].innerHTML = window.location.host;
arr[3].innerHTML = window.location.port;
arr[4].innerHTML = window.location.hostname;
arr[5].innerHTML = window.navigator.appName;
arr[6].innerHTML = window.navigator.appVersion;
arr[7].innerHTML = window.navigator.platform;
arr[8].innerHTML = window.navigator.language;
arr[9].innerHTML = window.navigator.cookieEnabled;
arr[10].innerHTML = window.screen.height;
arr[11].innerHTML = window.screen.width;
arr[12].innerHTML = window.screen.pixelDepth;
arr[13].innerHTML = window.history.length;
arr[14].innerHTML = window.history.state;