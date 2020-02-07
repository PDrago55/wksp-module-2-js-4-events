let i = 1;

let body = document.getElementsByTagName('body') [0];

for (i; i <= 25; i++) {
    let btn = document.createElement('button');
    btn.innerHtml = "btn" + i;
    btn.innerText = "fuck Yeah";
    body.appendChild(btn);
    btn.addEventListener('click', function(){
        btn.style.backgroundColor='	#B22222';
        console.log(btn);
    });
}

