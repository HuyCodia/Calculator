var container;
window.addEventListener("load", function() {
  container = document.getElementById('resultArea');
}, {once: true});

window.addEventListener("click", reachMaxLength);

var maxLength = false;
function reachMaxLength() {
    console.log(container.innerText.length);
    if (container.innerText.length < 13) {
        maxLength = false;
        return;
    }
    maxLength = true;
}

function appendOperation(operation) {
    let op_split = container.innerText.split('');
    let len_op = op_split.length - 1;
    let last_char = op_split[len_op];
    
    if (last_char != ' ') {
        container.innerText += operation;
    }
}

function appendDigit(digit) {
    if (!maxLength) {
        container.innerText === '0' ? container.innerText = digit : container.innerText += digit;
    }
}

function appendPrentheses(parentheses) {
    if (container.innerText.endsWith(' ')) {
        container.innerText += parentheses;
    } else if (container.innerText === '0') {
        container.innerText = parentheses;
    }
}

function calculateResult() {
    try {
        let result = eval(container.innerText);
        /*console.log(typeof result);*/
        result = result.toString().substring(0, 13);
        container.innerText = result;
    }
    catch {
        document.getElementById('syntaxError').innerText = 'Syntax ERROR x';
    }
}

function deleteLast() {
    if (document.getElementById('syntaxError').innerText === 'Syntax ERROR x') {
        document.getElementById('syntaxError').innerText = '';
    }

    if (container.innerText.endsWith(' ')) {
        container.innerText = container.innerText.slice(0, -3);
        if (container.innerText.length === 0) {
            container.innerText = '0';
        }         
    } else {
        container.innerText = container.innerText.slice(0, -1);
        if (container.innerText.length === 0) {
            container.innerText = '0';
        } 
    }
}

function resetInput() {
    container.innerText = '0';

    if (document.getElementById('syntaxError').innerText === 'Syntax ERROR x') {
        document.getElementById('syntaxError').innerText = '';
    }
}
