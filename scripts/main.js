let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc ==='images/loki-first-image.png'){
        myImage.setAttribute('src','images/loki-second-image.png');
    }
    else{
        myImage.setAttribute('src','images/loki-first-image.png');
    }
}
let myButton = document.querySelector('button');
//let myHeading = document.querySelector('h1');


myButton.onclick = function(){
    alert('I am Loki, of Asgard,and i am burdended with glorious purpose');
} 
function music(){
var audio = new Audio("");
  audio.play();
}
window.onload = music();
// this code is used for change user in h1 element
// function setUserName(){
//     let myName = prompt('Please enter your name.');
//     if(!myName){
//         setUserName();
//     }
//     localStorage.setItem('name',myName);
//     myHeading.textContent = 'Introducing Loki to, ' + myName;
// }

// if(!localStorage.getItem('name')){
//     setUserName();
// }else{
//     let storedName = localStorage.getItem('name');
//     myHeading.textContent = 'Introducing Loki to, '+ storedName;
// }

// myButton.onclick = function(){
//     setUserName();
// }
