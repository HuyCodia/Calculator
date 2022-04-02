function appendOperation(operation) {
    let container = document.getElementById('resultArea');
    if (container.innerHTML == 0) {
        document.getElementById('resultArea').innerHTML = operation;
    } else {
        document.getElementById('resultArea').innerHTML += operation;
    }

}

function calculateResult() {
    let container = document.getElementById('resultArea');
    let result = eval(container.innerHTML);  
    container.innerHTML = result;
}

function deleteLast() {
    let container = document.getElementById('resultArea');

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
    let container = document.getElementById('resultArea');
    container.innerHTML = 0;
}
