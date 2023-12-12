//Envinrontment init below

var audio = new Audio();

function handleContextMenu(e) {
    e.preventDefault();
    changeHeaderText('BRO THOUGHT THEY WERE SMART HAHHHHAHAHHAHAHAHAHHAH');
    changeImage('reyna.png');
    window.open('contextimage.jpg', '_blank');
    audio.src = 'context.mp3';
    audio.play();
}

document.addEventListener('contextmenu', handleContextMenu);
//Buttons below


function moveNoButton() {
    var maxX = (window.innerWidth / 2) - 250;
    var maxY = (window.innerHeight / 2) - 100;

    var newX = Math.floor(((Math.random() * 2) - 1) * maxX);
    var newY = Math.floor(((Math.random() * 2) - 1) * maxY);

    document.getElementById('no-button').style.left = newX + 'px';
    document.getElementById('no-button').style.top = newY + 'px';
}

function handleNoHover() {
    moveNoButton();
    changeHeaderText('hrm? what was that?');
    changeImage('sage.png');
    audio.src = 'no.mp3';
    audio.play();
}

function hideNoButton() {
    document.getElementById('no-button').style.display = 'none';
}

function resetNoButton() {
    document.getElementById('no-button').style.display = 'block';
    changeImage('phx.png');
}

function handleYesClick() {
    changeHeaderText('AIGHT BET HEHEHEHEHEHEHE >:)');
    changeImage('jett.png');
    audio.src = 'yes.mp3';
    audio.play();
    hideNoButton();
    document.removeEventListener('contextmenu', handleContextMenu);
    clearTimerEvents();
}


//Image Changing below


function changeHeaderText(newText) {
    document.querySelector('.questionContainer h1').textContent = newText;
}

function changeImage(imagePath) {
    document.getElementById('image-display').src = imagePath;
}

