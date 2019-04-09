// Your code goes here
// Adding event listeners to the site 
// Nav logo 
const navLogo = document.querySelector('.logo-heading'); 
// console.log(navLogo);
navLogo.addEventListener('mouseover', function(eventObject) {
    console.log('We moused over:', eventObject.clientX);
});

// Nav items
const navItems1 = document.querySelector('.nav-link1'); 
// console.log(navItems);
navItems1.addEventListener('click', function(eventObject) {
        preventDefault();
        eventObject.
       console.log(`We clicked on ${eventObject.clientX}`);                 
 });

const navItems2 = document.querySelector('.nav-link2'); 
// console.log(navItems);
navItems2.addEventListener('dblclick', function(eventObject) {
    preventDefault();   
    console.log(`We double clicked on ${eventObject.clientX}`);                 
 });

const navItems3 = document.querySelector('.nav-link3'); 
// console.log(navItems);
navItems3.addEventListener('click', function(eventObject) {
       console.log(`We clicked on ${eventObject.clientX}`);                 
 });

const navItems4 = document.querySelector('.nav-link4'); 
// console.log(navItems);
navItems4.addEventListener('click', function(eventObject) {
       console.log(`We clicked on ${eventObject.clientX}`);                 
 });


// Intro bus image 
const introImg = document.querySelector('.intro img'); 
introImg.addEventListener('mouseover', function(eventObject) {
    console.log('X cordinate:', eventObject.clientX);
    console.log('Y cordinate:', eventObject.clientY);
});
// console.log(introImg);

// Welcome to Fun Bus! intro header 
const introHeader = document.querySelector('.intro h2');
introHeader.addEventListener('copy', function(eventObject) {
    console.log('We copied some text!');
});
// console.log(introHeader);

// Let's go! header
const letsGo = document.querySelector('.content-section h2'); 
letsGo.addEventListener('copy', function(eventObject) {
    console.log('We copied some text!');
});
// console.log(letsGo);

// Let's go! Img 
const letsGoImg = document.querySelector('.content-section img'); 
letsGoImg.addEventListener('mouseleave', function(eventObject) {
    console.log('Our Moused Leaved:', eventObject.clientX);
});

// console.log(letsGoImg);

// Adventure awaits! Header
const adventureAwaits = document.querySelector('.inverse-content h2'); 
// console.log(adventureAwaits);
adventureAwaits.addEventListener('copy', function(eventObject) {
    console.log('We copied some text!');
});

// Adventure awaits! Img 
const adventureImg = document.querySelector('.inverse-content img');
navLogo.addEventListener('mouseover', function(eventObject) {
    console.log('Our mouse moved over:', eventObject.clientX);
});

// Pick your destination! 
const pickDestination = document.querySelector('.content-destination h2'); 
pickDestination.addEventListener('copy', function(eventObject) {
    console.log('We copied some text!');
});

// console.log(pickDestination);
// Destination image 
const destinationImg = document.querySelector('.content-destination img'); 
destinationImg.addEventListener('mouseenter', function(eventObject) {
    console.log('Our mouse entered:', eventObject.clientX);
});
// console.log(destinationImg);
// Buttons 
const destinationBtn = document.querySelector('.btn'); 
destinationBtn.addEventListener('mouseout', function(eventObject) {
    console.log('Our mouse is out:', eventObject.clientX);
});
const destinationBtn1 = document.querySelector('.btn1'); 
destinationBtn1.addEventListener('mouseout', function(eventObject) {
    console.log('Our mouse is out:', eventObject.clientX);
});

const destinationBtn2 = document.querySelector('.btn2'); 
destinationBtn2.addEventListener('mouseup', function(eventObject) {
    console.log('Our mouse is up:', eventObject.clientX);
});


// console.log(destinationBtn);


// BODY
const body = document.querySelector('body');
body.addEventListener('keypress', function(eventObject) {
   console.log("a key was pressed!");
});

body.addEventListener('keydown', function(eventObject) {
    body.style.backgroundColor = "red";
});

body.addEventListener('keyup', function(eventObject) {
    body.style.backgroundColor = "white";
});


//body.addEventListener('resize', function(eventObject) {
//    console.log("Resized!");
//});
//
//body.addEventListener('scroll', function(eventObject) {
//    console.log("You scrolled!");
//});

/*
keydown
keypress
mouseout
mouseenter
mouseleave
mouseover
mouseup
dblclick
click
copy
*/