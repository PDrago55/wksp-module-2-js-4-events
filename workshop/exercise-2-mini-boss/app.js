setInterval(setClock, 1000);
const bruh = document.getElementsByClassName("bruh");
const plise = document.getElementsByClassName("plise");
const yeet = document.getElementsByClassName("yeet");

function setClock(){
    const currentDate = new Date()
    const seconds = currentDate.getSeconds()/ 60
    const minute = (seconds + currentDate.getMinutes())/ 60
    const hour = (minute + currentDate.getHours())/ 12
    setRotation(yeet, seconds)
    setRotation(plise, minute)
    setRotation(bruh, hour)
    // console.log(setClock)
}

function setRotation(element, rotationRatio){
    element.style.getProperty('rotation', rotationRatio * 360)
}

setClock()   