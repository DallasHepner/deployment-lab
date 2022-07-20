let button = document.querySelector('button')
let audio = new Audio("./trash_Kid.mp3")

const buttonAlert = () => {
    audio.play();
    alert(`Get good kid!`)
}

button.addEventListener('click', buttonAlert)