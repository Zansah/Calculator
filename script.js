let display = document.getElementById('screen-display');

function appendCharacter(character) {
    if (display.innerText === '0') {
        display.innerText = character;
    } else {
        display.innerText += character;
    }
}

function clearDisplay() {
    display.innerText = '0';
}

function deleteLast() {
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = '0';
    }
}

function calculateResult() {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = 'Error';
    }
}
