function openEnvelope() {
    let flap = document.querySelector('.flap');
    let letter = document.querySelector('.letter');

    if (flap && letter) {
        flap.classList.add('open');
        letter.classList.add('visible');
    }
}

function closeEnvelope() {
    let flap = document.querySelector('.flap');
    let letter = document.querySelector('.letter');

    if (flap && letter) {
        flap.classList.remove('open');
        letter.classList.remove('visible');
    }
}
