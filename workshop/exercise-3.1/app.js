let i = 1;

const mainDiv = document.getElementById('main');

function turnGreen(event) {
    const idk = event.target.id;
    document.getElementById(idk).classList.add('green');
}


for (i; i <= 25; i++) {
    let bro = document.createElement('button');
    // btn.innerHtml = "btn" + i;
    bro.innerText = "fuck Yeah";
    mainDiv.appendChild(bro);

    bro.addEventListener('click', turnGreen);
}






// const mainDiv = document.getElementById('main');

// function turnGreen(event) {
//     const buttonId = event.target.id;
//     document.getElementById('buttonId').classList.add('green');
// }

// for (let i = 1; i <= 20; i++) {
//     const button = document.createElement('button');
//     button.innerText = i;
//     button.id = `btn-${i}`;
//     mainDiv.appendChild(button);

//     button.addEventListener('click', turnGreen);
// }





// let i = 1;

// const mainDiv = document.getElementById('main');

// function turnGreen(event) {
//     const buttonId = event.target.id;
//     document.getElementById('buttonId').classList.add('green');
// }


// for (i; i <= 25; i++) {
//     let btn = document.createElement('button');
//     // btn.innerHtml = "btn" + i;
//     btn.innerText = "fuck Yeah";
//     mainDiv.appendChild(btn);

//     btn.addEventListener('click', turnGreen);
// }

// btn.addEventListener('click', function(){
//     btn.style.backgroundColor= '#B22222';
//     console.log(btn);


// });
// document.body.style.backgroundColor = 'green';