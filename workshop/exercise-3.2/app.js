i = 1;

const mainDiv = document.getElementById('main');

function changeColor(event) {
    const idk = event.target.id;
    document.getElementById(idk).classList.toggle('green');
}

for (i; i <= 20; i++) {
        const button = document.createElement('button');
        button.innerText = "fuck yeah";
        button.id = `btn-${i}`;
        mainDiv.appendChild(button);
    
        button.addEventListener('click', changeColor);
    }

