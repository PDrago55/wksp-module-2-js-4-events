const mainDiv = document.getElementById('main');


function turnGreen(event){
    const idk = event.target.id;
    document.getElementById(idk).classList.toggle('green');
}

for (i = 1; i <=20; i++) {
    const bro = document.createElement('button');
    bro.innerText = i;
    bro.id = `btn-${i}`;
    mainDiv.appendChild(bro);

    // new added code //
    bro.style.top = `${Math.random() * 80}vh`;
    bro.style.left = `${Math.random() * 80}vw`;

    bro.addEventListener('click', turnGreen);
}




// Math.floor((Math.random()*bodyWidth));

// Math.floor((Math.random()*bodyHeight));
