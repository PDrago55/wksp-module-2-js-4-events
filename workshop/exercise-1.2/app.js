// Exercise 1.2
// ------------
// DON'T COPY/PASTE THE LAST EXERCISE. REWRITE IT FROM SCRATCH!
// Similar to the last exercise, write an app that gives the user
// a random amount of time (up to 5 seconds) to click anywhere on the screen.
// 
// But this time, let's let the user know how much time they have to actually 'click'.
// If they click inside of the required time, you should tell them that they've won,
// else let them know that they've lost.

// In short, 
// Replicate (and I mean, REWRITE it from scratch) the last exercise, and add
// - random amount of time to click
// - tell the user how much time they have to click.

const body = document.querySelector('body');
const result = document.getElementById('result');
// const timeText = document.querySelector('time-text');
// const time = document.getElementById('time');

let hasWon = false;

const time = Math.floor((Math.random()* 5)+1);
document.getElementById('time').innerText = time;

//click
function clickEvent(){
    hasWon = true;
    result.innerText = 'you still suck';
    body.removeEventListener('click', clickEvent);
}

setTimeout(function() {
    console.log('it over');
    if (!hasWon) {
        result.innerText = 'y,all lost';
        body.removeEventListener('click', clickEvent);
    }
}, time * 1000);

console.log(time);


body.addEventListener('click', clickEvent);













// const win = document.createElement('p');
// win.innerHTML = 'you win';
// document.getElementById('body').appendChild('win');

// function handleClick() {
//     timeText.innerText = 'you have 5 seconds to click';
//     body.removeEventListener('click', handleClick);
// }
// function handleClick() {
//     win.innerText = 'you win';
//     body.removeEventListener('click', handleClick);
// }
// setTimeout(function(){
//     result.innerText = 'y,all lost';
//     body.removeEventListener('click', handleClick);
// }, 5000);


// Challenge
// Make the countdown live...
