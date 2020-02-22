const countdown = document.getElementById("countdown");

//the fucking instruction box man//

//
let instructions = document.getElementById("instructions");

instructions.addEventListener("click", work);

// images creating magic//

const kirby = document.createElement("img");
kirby.src = "../exercise-5-boss-level/imgs/p1.gif";
document.body.appendChild(kirby);
kirby.style.height = "20%";
kirby.style.width = "auto";
kirby.style.position = "absolute";
kirby.style.bottom = "10px";
kirby.style.left = "10px";

const sonic = document.createElement("img");
sonic.src = "../exercise-5-boss-level/imgs/p2.gif";
document.body.appendChild(sonic);
sonic.style.height = "25%";
sonic.style.width = "auto";
sonic.style.position = "absolute";
sonic.style.bottom = "10px";
sonic.style.right = "10px";

const ringLeft = document.createElement("img");
ringLeft.src = "../exercise-5-boss-level/imgs/prize.gif";
document.body.appendChild(ringLeft);
ringLeft.style.height = "10%";
ringLeft.style.width = "auto";
ringLeft.style.position = "absolute";
ringLeft.style.top = "10px";
ringLeft.style.left = "10px";
ringLeft.style.display = "none";

const ringLeftTwo = document.createElement("img");
ringLeftTwo.src = "../exercise-5-boss-level/imgs/prize.gif";
document.body.appendChild(ringLeftTwo);
ringLeftTwo.style.height = "10%";
ringLeftTwo.style.width = "auto";
ringLeftTwo.style.position = "absolute";
ringLeftTwo.style.top = "10px";
ringLeftTwo.style.left = "110px";
ringLeftTwo.style.display = "none";

const ringLeftThree = document.createElement("img");
ringLeftThree.src = "../exercise-5-boss-level/imgs/prize.gif";
document.body.appendChild(ringLeftThree);
ringLeftThree.style.height = "10%";
ringLeftThree.style.width = "auto";
ringLeftThree.style.position = "absolute";
ringLeftThree.style.top = "10px";
ringLeftThree.style.left = "200px";
ringLeftThree.style.display = "none";

const ringRight = document.createElement("img");
ringRight.src = "../exercise-5-boss-level/imgs/prize.gif";
document.body.appendChild(ringRight);
ringRight.style.height = "10%";
ringRight.style.width = "auto";
ringRight.style.position = "absolute";
ringRight.style.top = "10px";
ringRight.style.right = "10px";
ringRight.style.display = "none";

const ringRightTwo = document.createElement("img");
ringRightTwo.src = "../exercise-5-boss-level/imgs/prize.gif";
document.body.appendChild(ringRightTwo);
ringRightTwo.style.height = "10%";
ringRightTwo.style.width = "auto";
ringRightTwo.style.position = "absolute";
ringRightTwo.style.top = "10px";
ringRightTwo.style.right = "100px";
ringRightTwo.style.display = "none";

const ringRightThree = document.createElement("img");
ringRightThree.src = "../exercise-5-boss-level/imgs/prize.gif";
document.body.appendChild(ringRightThree);
ringRightThree.style.height = "10%";
ringRightThree.style.width = "auto";
ringRightThree.style.position = "absolute";
ringRightThree.style.top = "10px";
ringRightThree.style.right = "200px";
ringRightThree.style.display = "none";

// const ringMiddle = document.createElement("img");
// ringMiddle.src = "../exercise-5-boss-level/imgs/prize.gif";
// document.body.appendChild(ringMiddle);
// ringMiddle.style.height = "10%";
// ringMiddle.style.width = "auto";
// ringMiddle.style.position = "absolute";
// ringMiddle.style.bottom = "10px";
// ringMiddle.style.right = "650px";
// ringMiddle.style.display = "none";

// creating an array that collects points for wins//

let sonicCount = 0;
let kibryCount = 0;

//points system with keydown

function getPoints(event) {
  if (event.key === "a" || event.key === "A") {
    console.log("kirby gets a point");
    kibryCount++;
    if (kibryCount === 1) {
      ringLeft.style.display = "block";
      //   alert("KIRBY WINS!!!");
    }
    if (kibryCount === 2) {
      ringLeftTwo.style.display = "block";
      //   alert("KIRBY WINS!!!");
    }
    if (kibryCount === 3) {
      ringLeftThree.style.display = "block";
      // alert("KIRBY WINS!!!");
    }
  } else {
    if (event.key === "l" || event.key === "L") {
      console.log("sonic gets a point");
      sonicCount++;
      if (sonicCount == 1) {
        ringRightThree.style.display = "block";
        // alert("SONIC WINS!!!!");
      }
      if (sonicCount == 2) {
        ringRightTwo.style.display = "block";
        // alert("SONIC WINS!!!!");
      }
      if (sonicCount == 3) {
        ringRight.style.display = "block";
        // alert("SONIC WINS!!!!");
      }
    }
  }
}

//the game begins...

function gameStart() {
  function clock() {
    document.getElementById("countdown").innerHTML = --c;
    document.getElementById("instructions");
    if (c === 0) {
      clearInterval(timer);
      // document.getElementById('countdown').innerText = "GO!"
      countdown.style.display = "none";
      instructions.style.display = "none";
      helpMe.style.display = "none";
      console.log("remove instructions");
    }
  }
  let timer = setInterval(clock, 1000);
  let c = 6;
  function clockRandom() {
    const ringMiddle = document.createElement("img");
    ringMiddle.src = "../exercise-5-boss-level/imgs/prize.gif";
    document.body.appendChild(ringMiddle).innerHTML = --t;
    ringMiddle.style.height = "10%";
    ringMiddle.style.width = "auto";
    ringMiddle.style.position = "absolute";
    ringMiddle.style.bottom = "10px";
    ringMiddle.style.right = "550px";
    ringMiddle.style.display = "";
    if (t === 0) {
      clearInterval(time);
      ringMiddle.style.display = "block";
    }
  }
  let time = setInterval(clockRandom, 8000);
  let t = Math.random(Math.floor() * 15);
}

let toggled = false;
function work() {
  console.log(work);
  if (!toggled) {
    toggled = true;
    document.getElementById("helpMe").style.display = "none";
    return;
  } else {
    if (toggled) {
      toggled = false;
      // bruh.innerText = "INSTRUCTION ARE HERE";
      document.getElementById("helpMe").style.display = "block";
      return;
    }
  }
}

document.addEventListener("click", work);
document.addEventListener("keydown", getPoints, false);

// if (work.innerHTML === 'Help?') {
//     work.innerText === 'you know the rules bruh';
// } else {
//     work.innerHTML === 'Help?';
//     // console.log(instructions);
// }

// document.addEventListener('click', work, false);

// let instructions = document.getElementById('instructions');
// alert('I am Sorry, this is the only way I made this work :(');

// let instructions = document.getElementById('instructions');
// if (instructions.innerHTML === 'Help?') {
//     instructions.innerHTML === 'you know the rules bruh';
// } else {
//     instructions.innerHTML === 'Help?';
//     console.log(instructions);
// }
// addEventListener('click', instructions);

// document.getElementById('instructions').innerHTML = 'you know the rules';
// console.log(instructions);
//     function showHelp () {
//     document.getElementById('instructions').innerText = "You know the Rules bruh!";
//     addEventListener('click', showHelp);
//     console.log(works);
//     }
// }
