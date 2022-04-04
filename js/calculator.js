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
    container.innerHTML == 0 ? container.innerHTML = digit : container.innerHTML += digit;
    /*
    let operation_split = container.innerHTML.split('');
    let len_operation = operation_split.length - 1;
    let last_char = operation_split[len_operation];
    if (0 <= container.innerHTML <= 9 && (operation == ' * ' || operation == ' / '|| operation == ' + ' || operation == ' - ')) {
        //if (operation == ' * ') {
        //    document.getElementById('resultArea').innerHTML += operation;
        //}
        container.innerHTML += operation;
    } else if (container.innerHTML == 0) {
        container.innerHTML = operation;
    } else if (last_char == ' ' && operation != (' * ' || ' - ' || ' / ' || ' - ')) {
        container.innerHTML += operation;
    }*/
}

function calculateResult() {
    let result = eval(container.innerHTML);  
    container.innerHTML = result;
}

function deleteLast() {
    if (container.innerHTML.endsWith(' ')) {
        container.innerHTML = container.innerHTML.slice(0, -3);
        if (container.innerHTML.length == 0) {
            container.innerHTML = 0;
        }         
    } else {
        container.innerHTML = container.innerHTML.slice(0, -1);
        if (container.innerHTML.length == 0) {
            container.innerHTML = 0;
        } 
    }
}

function resetInput() {
    container.innerHTML = 0;
}
