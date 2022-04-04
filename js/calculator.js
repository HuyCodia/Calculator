var container;

window.addEventListener("load", function() {
  container = document.getElementById('resultArea');
}, {once: true});

function appendOperation(operation) {
    let op_split = container.innerHTML.split('');
    let len_op = op_split.length - 1;
    let last_char = op_split[len_op];
    
    if (last_char != ' ') {
        container.innerHTML += operation;
    } 
}

function appendDigit(digit) {
    container.innerHTML === '0' ? container.innerHTML = digit : container.innerHTML += digit;
}

function appendPrentheses(parentheses) {
    if (container.innerHTML.endsWith(' ')) {
        container.innerHTML += parentheses;
    } else if (container.innerHTML === '0') {
        container.innerHTML = parentheses;
    }
}

function calculateResult() {
    try {
        let result = eval(container.innerHTML);  
        container.innerHTML = result;
    }
    catch {
        document.getElementById('syntaxError').innerHTML = 'Syntax ERROR x';
    }
}

function deleteLast() {
    if (document.getElementById('syntaxError').innerHTML === 'Syntax ERROR x') {
        document.getElementById('syntaxError').innerHTML = '';
    }

    if (container.innerHTML.endsWith(' ')) {
        container.innerHTML = container.innerHTML.slice(0, -3);
        if (container.innerHTML.length === 0) {
            container.innerHTML = '0';
        }         
    } else {
        container.innerHTML = container.innerHTML.slice(0, -1);
        if (container.innerHTML.length === 0) {
            container.innerHTML = '0';
        } 
    }
}

function resetInput() {
    container.innerHTML = '0';

    if (document.getElementById('syntaxError').innerHTML === 'Syntax ERROR x') {
        document.getElementById('syntaxError').innerHTML = '';
    }
}
