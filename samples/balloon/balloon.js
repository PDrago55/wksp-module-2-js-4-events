

//event.listener that listens for a 'keydown event'

const balloon = document.getElementById('balloon'); ///i need to get my element that i am going to size
let balloonSize = 12;
balloon.style.fontSize = balloonSize + 'px'; // `${balloonSize}px`
const MIN_SIZE = 6;
const MAX_SIZE = 100;
const INCREMENT = 10;
const explosionSize = 2000;


function handleKeydown(event) {

    //if "arrow up" 
    if (event.key === 'ArrowUp') {
        if (balloonSize < MAX_SIZE) {
            balloonSize += INCREMENT;
            balloon.style.fontSize = balloonSize + 'px';

        /// if balloon is bigger than x
        if (balloonSize > MAX_SIZE){
            document.removeEventListener('keydown', handleKeydown);
            balloon.innerText = '💥';
            const explosion = setInterval(function(){
                balloonSize += 100;
                balloon.style.fontSize = `${balloonSize}px`;
                if (balloonSize > explosionSize){
                    clearInterval(explosion);
                    balloon.style.opacity = 0;
                }
            }, 30);
        }
    }           // remove eventListener

            // balloonSize += increment;
            // Cconsole.log(key)
            // balloon.size.fontSize = balloonSize - 'px';

    } else if 
        (event.key === 'ArrownDown') {
            if (balloonSize >= MIN_SIZE) {
                balloonSize -= INCREMENT;
                balloon.style.fontSize = balloonSize + 'px';
            }
        }
    }
       /// balloon bigger

            /// remove balloon emoji and add in exploding emoji
            /// explosion grows incrementally
                //if explosion size is bigger than y
                    //stop growing
                    //fade out -opacity 0
    //if 'arrown down'
        //ballon smaller
        //if balloon is bigger than z, stop shrinking
        document.addEventListener('keydown', handleKeydown);

    