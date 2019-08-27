
const buttons = document.querySelectorAll('button');

const func =() =>{
    console.log(event.target.dataset.note);
}

const playnote = event =>{
    const button = event.target;
    const note = const note = button.dataset.note;
    console.log(`audio${}`);
    const audioId = `aidopS${note}`;
    console.log(audioId);
    const audio = document.getElementById(audioId);
    audio.play();
}

buttons.forEach(
    button => button.addEventListener('click', playnote)
);