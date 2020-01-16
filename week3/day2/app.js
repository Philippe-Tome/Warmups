/*
Make Them Green
Create 3 boxes (divs) in an html file, give them a border of 1px solid black and a height and width of 100px, so you can see them.
When you click on any box, it's background color should immediately become red.
After every box has been clicked, change all of them immediately to green.
*/

var box1 = document.getElementById("box1")
var box2 = document.getElementById("box2")
var box3 = document.getElementById("box3")


var handleBoxClick = function (event) {
    var boxClicked = event.target;
    if(box1.style.backgroundColor === 'green' && box2.style.backgroundColor === 'green' && box3.style.backgroundColor === 'green') {
        box1.style.backgroundColor= 'white';    
        box2.style.backgroundColor= 'white';    
        box3.style.backgroundColor= 'white';
        return;
    }
    boxClicked.style.backgroundColor= 'red';
    if(box1.style.backgroundColor === 'red' && box2.style.backgroundColor === 'red' && box3.style.backgroundColor === 'red') {
        box1.style.backgroundColor= 'green';    
        box2.style.backgroundColor= 'green';    
        box3.style.backgroundColor= 'green';
    }
    
}

box1.addEventListener('click', handleBoxClick);
box2.addEventListener('click', handleBoxClick);
box3.addEventListener('click', handleBoxClick);