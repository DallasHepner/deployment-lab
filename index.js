let button = document.querySelector('button')
let audio = new Audio("deployment/trash_Kid.mp3")

const buttonAlert = () => {
    audio.play();
    alert(`Get good kid!`)
}

button.addEventListener('click', buttonAlert)