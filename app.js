
const buttons = document.querySelectorAll('button');

const func =() =>{
    console.log(event.target.dataset.note);
}

buttons.forEach(
    button => button.addEventListener('click', playnote)
);