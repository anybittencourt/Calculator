const display = document.getElementById('display')

function appendCharacter(char) {
    // se for 0 e diferente de ., substitui
    if (display.innerText == '0' && char != '.') {
        display.innerText = char
    } else {
                // || = 'ou'
        if (!((char == '.' && display.innerText[display.innerText.length - 1] == '.') ||
            (char == '-' && display.innerText[display.innerText.length - 1] == '-') ||
            (char == '+' && display.innerText[display.innerText.length - 1] == '+') ||
            (char == '*' && display.innerText[display.innerText.length - 1] == '*') ||
            (char == '%' && display.innerText[display.innerText.length - 1] == '%'))) {
            display.innerText += char;
            // += junta os caracteres
        }
    }
}


function clearDisplay() {
    display.innerText = '0';
    // volta a ser 0
}

function calculateResult() {
    display.innerText = eval(display.innerText)
    // 'eval' calcula o innerText
}