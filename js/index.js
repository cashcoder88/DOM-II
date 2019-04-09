// Your code goes here
// Adding event listeners to the site 
// Nav logo 
const navLogo = document.querySelector('.logo-heading'); 
// console.log(navLogo);
navLogo.addEventListener('mouseover', function(eventObject) {
    eventObject.stopPropagation();
    console.log('We moused over:', eventObject.clientX);
});

// Nav items
const navItems1 = document.querySelector('.nav-link1'); 
// console.log(navItems);
navItems1.addEventListener('click', function(eventObject) {
    eventObject.stopPropagation();
    eventObject.preventDefault();
    console.log(`We clicked on ${eventObject.clientX}`);                 
 });

const navItems2 = document.querySelector('.nav-link2'); 
// console.log(navItems);
navItems2.addEventListener('dblclick', function(eventObject) {
    eventObject.stopPropagation();
    eventObject.preventDefault();  
    console.log(`We double clicked on ${eventObject.clientX}`);                 
 });

const navItems3 = document.querySelector('.nav-link3'); 
// console.log(navItems);
navItems3.addEventListener('click', function(eventObject) {
    eventObject.stopPropagation();
    eventObject.preventDefault();     
    console.log(`We clicked on ${eventObject.clientX}`);                 
 });

const navItems4 = document.querySelector('.nav-link4'); 
// console.log(navItems);
navItems4.addEventListener('click', function(eventObject) {
    eventObject.stopPropagation();
    eventObject.preventDefault();   
    console.log(`We clicked on ${eventObject.clientX}`);                 
 });


// Intro bus image 
const introImg = document.querySelector('.intro img'); 
introImg.addEventListener('mouseover', function(eventObject) {
    eventObject.stopPropagation();
    introImg.style.display = "none";
    
});
// console.log(introImg);

// Welcome to Fun Bus! intro header 
const introHeader = document.querySelector('.intro h2');
introHeader.addEventListener('copy', function(eventObject) {
    eventObject.stopPropagation();
    console.log('We copied some text!');
});
// console.log(introHeader);

// Let's go! header
const letsGo = document.querySelector('.content-section h2'); 
letsGo.addEventListener('copy', function(eventObject) {
    eventObject.stopPropagation();
    console.log('We copied some text!');
});
// console.log(letsGo);

// Let's go! Img 
const letsGoImg = document.querySelector('.content-section img'); 
letsGoImg.addEventListener('mouseleave', function(eventObject) {
    eventObject.stopPropagation();
    console.log('Our Moused Leaved:', eventObject.clientX);
    letsGoImg.style.display = "none";
});

// console.log(letsGoImg);

// Adventure awaits! Header
const adventureAwaits = document.querySelector('.inverse-content h2'); 
// console.log(adventureAwaits);
adventureAwaits.addEventListener('copy', function(eventObject) {
    eventObject.stopPropagation();
    console.log('We copied some text!');
    
});

// Adventure awaits! Img 
const adventureImg = document.querySelector('.inverse-content img');
adventureImg.addEventListener('mouseover', function(eventObject) {
    eventObject.stopPropagation();
    console.log('Our mouse moved over:', eventObject.clientX);
    adventureImg.style.display = "none";
});

// Pick your destination! 
const pickDestination = document.querySelector('.content-destination h2'); 
pickDestination.addEventListener('copy', function(eventObject) {
    eventObject.stopPropagation();
    console.log('We copied some text!');
});

// console.log(pickDestination);
// Destination image 
const destinationImg = document.querySelector('.content-destination img'); 
destinationImg.addEventListener('mouseenter', function(eventObject) {
    eventObject.stopPropagation();
    console.log('Our mouse entered:', eventObject.clientX);
    destinationImg.style.display = "none";
});
// console.log(destinationImg);
// Buttons 
const destinationBtn = document.querySelector('.btn'); 
destinationBtn.addEventListener('mouseout', function(eventObject) {
    eventObject.stopPropagation();
    console.log('Our mouse is out:', eventObject.clientX);
});
const destinationBtn1 = document.querySelector('.btn1'); 
destinationBtn1.addEventListener('mouseout', function(eventObject) {
    eventObject.stopPropagation();
    console.log('Our mouse is out:', eventObject.clientX);
});

const destinationBtn2 = document.querySelector('.btn2'); 
destinationBtn2.addEventListener('mouseup', function(eventObject) {
    eventObject.stopPropagation();
    console.log('Our mouse is up:', eventObject.clientX);
});


// console.log(destinationBtn);


// BODY
const body = document.querySelector('body');
body.addEventListener('keypress', function(eventObject) {
   eventObject.stopPropagation();
   console.log("a key was pressed!");
});

body.addEventListener('keydown', function(eventObject) {
    eventObject.stopPropagation();
    body.style.backgroundColor = "red";
});

body.addEventListener('keyup', function(eventObject) {
    eventObject.stopPropagation();
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
1. keydown
2.keypress
3. mouseout
4.mouseenter
5.mouseleave
6.mouseover
7.mouseup
8.dblclick
9.click
10.copy
*/