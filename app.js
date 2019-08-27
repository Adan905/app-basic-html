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
    audio.pause();
    const audio = document.getElementById(audioId);
    audio.play();
}

buttons.forEach(
    button => button.addEventListener('click', playnote)
);

const keyNoteDown = event =>{
    //console.log(event);
    const key = event.key;
    console.log(key);
    const document.querySelector(`button[data-key="${key}"`])
    if(button)
}

document.addEventListener('keydown', keyNoteDown)