let button = document.querySelector('button')
let audio = new Audio("http://youtuberepeater.com/watch?v=Yael6mbNyfo&name=you+39+re+trash+kid+sound+effect#gsc.tab=0")

const buttonAlert = () => {
    audio.play();
    alert(`Get good kid!`)
}

button.addEventListener('click', buttonAlert)